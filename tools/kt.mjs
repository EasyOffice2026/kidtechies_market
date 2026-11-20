#!/usr/bin/env node
/**
 * kt — approve and publish agent drafts, with the approval enforced in code.
 *
 *   node tools/kt.mjs status
 *   node tools/kt.mjs check   <draft>
 *   node tools/kt.mjs approve <draft> --by <name> [--rehearsal]
 *   node tools/kt.mjs publish <article draft> --to guides --site <product repo> [--slug s] [--description d] [--persona p] [--dry-run]
 *   node tools/kt.mjs post    <draft> --channel <instagram|facebook|linkedin|tiktok|x|youtube|email> [--piece "Instagram 1"]
 *   node tools/kt.mjs confirm <P-id> --url <link to the live post>
 *   node tools/kt.mjs cancel  <P-id>
 *   node tools/kt.mjs resolve <P-id> (--url <link> | --not-published)
 *
 * Agents draft; a person runs this. No approval record whose hash matches the
 * file as it is now, no publication. See ops/publishing-guide.md.
 *
 * Options valid everywhere: --root <agent folder> (default: this repo).
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { hostname, userInfo } from 'node:os';
import { dirname, join, relative, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { checkDraft, factsVersion, isDraftVersion } from './lib/checks.mjs';
import { draftType, itemSlug, PUBLISHABLE, pieces, splitDraft, toGuide, withApprovalLine } from './lib/drafts.mjs';
import {
  APPROVALS,
  appendJsonl,
  canStart,
  idempotencyKey,
  latestApproval,
  newId,
  publicationById,
  publicationStates,
  pubKey,
  readJsonl,
  recordEvent,
  sha256,
} from './lib/ledger.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const SITE_URL = 'https://www.kidtechies.com';

/* ------------------------------------------------------------------ args */

function parseArgs(argv) {
  const positional = [];
  const flags = {};
  for (let i = 0; i < argv.length; i++) {
    const arg = argv[i];
    if (arg.startsWith('--')) {
      const key = arg.slice(2);
      const next = argv[i + 1];
      if (next === undefined || next.startsWith('--')) flags[key] = true;
      else {
        flags[key] = next;
        i++;
      }
    } else positional.push(arg);
  }
  return { positional, flags };
}

class Refusal extends Error {}
const refuse = (message) => {
  throw new Refusal(message);
};

/* ------------------------------------------------------------- context */

function context(flags) {
  const root = resolve(flags.root && flags.root !== true ? flags.root : join(HERE, '..'));
  const factsPath = join(root, 'knowledge/product-facts.md');
  if (!existsSync(factsPath)) refuse(`cannot read ${factsPath} — is --root the agent folder?`);
  const factsText = readFileSync(factsPath, 'utf8');
  return { root, factsText, version: factsVersion(factsText) };
}

/** The draft's path relative to the root, with forward slashes — the ledger key. */
function draftKey(root, path) {
  const abs = resolve(path);
  if (!existsSync(abs)) refuse(`no such file: ${path}`);
  const rel = relative(root, abs).replace(/\\/g, '/');
  if (rel.startsWith('..')) refuse(`${path} is outside the agent folder ${root}`);
  if (!/^drafts\/\d{4}-\d{2}-\d{2}\//.test(rel)) refuse(`${rel} is not under drafts/YYYY-MM-DD/`);
  return { abs, rel };
}

const identity = () => {
  let user = 'unknown';
  try {
    user = userInfo().username;
  } catch {}
  return { user, host: hostname(), source: 'os-account' };
};

const today = () => new Date().toISOString().slice(0, 10);

/**
 * The approval that covers the file as it is now — or a refusal saying why
 * there is none.
 */
function currentApproval(root, rel, text) {
  const approval = latestApproval(root, rel);
  if (!approval) refuse(`${rel} has no approval record. Run: node tools/kt.mjs approve "${rel}" --by <name>`);
  if (approval.sha256 !== sha256(text)) {
    refuse(`${rel} has changed since it was approved (${approval.id} on ${approval.approvedAt.slice(0, 10)}). Re-read it and approve again.`);
  }
  const { approval: line } = splitDraft(text);
  if (!approval.rehearsal && (!line || line.name !== approval.approver)) {
    refuse(`${rel}: the approved-by line does not match approval ${approval.id}`);
  }
  return approval;
}

/* -------------------------------------------------------- publishing log */

/** Adds one row to ops/publishing-log.md, replacing the empty placeholder row the first time. */
function logPublication(root, row) {
  const path = join(root, 'ops/publishing-log.md');
  if (!existsSync(path)) return false;
  const text = readFileSync(path, 'utf8');
  const eol = text.includes('\r\n') ? '\r\n' : '\n';
  const lines = text.split(/\r?\n/);
  const cells = (value) => String(value ?? '').replace(/\|/g, '/').replace(/\s+/g, ' ');
  const line = `| ${row.map(cells).join(' | ')} |`;
  const placeholder = lines.findIndex((l) => /^\|(\s*\|){7}\s*$/.test(l));
  if (placeholder >= 0) lines[placeholder] = line;
  else {
    let last = -1;
    lines.forEach((l, i) => {
      if (/^\|/.test(l)) last = i;
    });
    if (last < 0) return false;
    lines.splice(last + 1, 0, line);
  }
  writeFileSync(path, lines.join(eol));
  return true;
}

/* ------------------------------------------------------------- commands */

function cmdCheck({ positional, flags }) {
  const ctx = context(flags);
  const { abs, rel } = draftKey(ctx.root, positional[0] ?? refuse('which draft?'));
  const text = readFileSync(abs, 'utf8');
  const { body } = splitDraft(text);
  const result = checkDraft({ type: draftType(rel), body, factsText: ctx.factsText, rehearsal: Boolean(flags.rehearsal) });
  report(rel, result);
  return result.errors.length ? 1 : 0;
}

function report(rel, { errors, warnings }) {
  console.log(`${rel}`);
  for (const e of errors) console.log(`  ✖ ${e}`);
  for (const w of warnings) console.log(`  ! ${w}`);
  if (!errors.length) console.log(`  ✓ no blocking problems${warnings.length ? ' (read the warnings)' : ''}`);
}

function cmdApprove({ positional, flags }) {
  const ctx = context(flags);
  const { abs, rel } = draftKey(ctx.root, positional[0] ?? refuse('which draft?'));
  const name = typeof flags.by === 'string' ? flags.by.trim() : '';
  if (!name) refuse('who is approving? --by <your name>');
  if (/^(claude|agent|ai|assistant|bot)$/i.test(name)) refuse(`"${name}" is not a person. Only the approver approves (agents/shared-controls.md §2).`);
  const rehearsal = Boolean(flags.rehearsal);

  const text = readFileSync(abs, 'utf8');
  const type = draftType(rel);
  const result = checkDraft({ type, body: splitDraft(text).body, factsText: ctx.factsText, rehearsal });
  report(rel, result);
  if (result.errors.length) refuse('not approved — fix the draft, or reject it');

  // A rehearsal leaves the draft untouched: no approved-by line, so neither
  // Agent 3 nor a person can mistake it for a real approval.
  const date = today();
  const approvedText = rehearsal ? text : withApprovalLine(text, name, date);
  if (!rehearsal) writeFileSync(abs, approvedText);

  const record = appendJsonl(ctx.root, APPROVALS, {
    id: newId('A'),
    draft: rel,
    type,
    sha256: sha256(approvedText),
    approver: name,
    identity: identity(),
    approvedAt: new Date().toISOString(),
    knowledgeVersion: ctx.version,
    rehearsal,
  });
  console.log(`\n✓ ${rehearsal ? 'REHEARSAL approval' : 'Approved'} ${record.id} by ${name} against product facts ${ctx.version}`);
  if (rehearsal) console.log('  A rehearsal approval can only be used with --dry-run. Nothing can be published from it.');
  else console.log(`  The draft now starts with "approved-by: ${name} ${date}". Any later edit cancels this approval.`);
  return 0;
}

async function cmdPublish({ positional, flags }) {
  const ctx = context(flags);
  const { abs, rel } = draftKey(ctx.root, positional[0] ?? refuse('which draft?'));
  if (flags.to !== 'guides') refuse('--to guides is the only automated channel. For social posts and video, use: kt post');
  if (draftType(rel) !== 'article') refuse(`${rel} is not an article; only articles become guides`);
  const site = typeof flags.site === 'string' ? resolve(flags.site) : refuse('--site <path to the product repo> is needed');
  const gatePath = join(site, 'scripts/lib/guides.mjs');
  if (!existsSync(gatePath)) refuse(`${site} has no scripts/lib/guides.mjs — wrong path, or the guides feature is not on that branch`);

  const text = readFileSync(abs, 'utf8');
  const approval = currentApproval(ctx.root, rel, text);
  const dryRun = Boolean(flags['dry-run']);
  if (approval.rehearsal && !dryRun) refuse(`${approval.id} is a rehearsal approval — only --dry-run is possible`);
  if (!dryRun && isDraftVersion(ctx.version)) refuse(`product-facts.md is ${ctx.version} — nothing is published before D1`);

  const slug = typeof flags.slug === 'string' ? flags.slug : itemSlug(rel);
  const { problems, guide } = toGuide({
    text,
    approvalRecord: approval,
    sourceDraft: rel,
    publishedOn: today(),
    slug,
    description: typeof flags.description === 'string' ? flags.description : undefined,
    persona: typeof flags.persona === 'string' ? flags.persona : undefined,
  });
  if (problems.length) refuse(problems.join('\n'));

  // The site's own gate is the final word, run before anything is written.
  const { checkGuide } = await import(pathToFileURL(gatePath).href);
  const { errors } = checkGuide(guide, `${slug}.md`);

  if (dryRun) {
    console.log(guide);
    if (errors.length) {
      console.log(`The site would refuse this guide:\n${errors.map((e) => `  ✖ ${e}`).join('\n')}`);
      return 1;
    }
    console.log('✓ The site would accept this guide. Nothing was written (dry run).');
    return 0;
  }
  if (errors.length) refuse(`the site's gate refuses this guide:\n${errors.map((e) => `  ✖ ${e}`).join('\n')}`);

  const start = canStart(ctx.root, rel, 'guides', null);
  if (!start.ok) refuse(start.reason);
  const target = join(site, 'content/guides', `${slug}.md`);
  if (existsSync(target)) refuse(`${relative(site, target)} already exists — a guide is never overwritten. Choose another --slug.`);

  const pub = newId('P');
  const base = { pub, draft: rel, channel: 'guides', piece: null, approvalId: approval.id, key: idempotencyKey(rel, 'guides', null, approval.id) };
  recordEvent(ctx.root, { ...base, state: 'PUBLISHING' });

  try {
    writeFileSync(target, guide);
    try {
      execFileSync(process.execPath, ['scripts/build-guides.mjs'], { cwd: site, stdio: 'pipe' });
    } catch (error) {
      // Nothing reached the page data: take the file back out and say so.
      rmSync(target, { force: true });
      recordEvent(ctx.root, { ...base, state: 'FAILED', note: String(error.stderr ?? error.message).slice(0, 500) });
      refuse(`the site build refused it; the file was removed.\n${String(error.stderr ?? error.message)}`);
    }
  } catch (error) {
    if (error instanceof Refusal) throw error;
    recordEvent(ctx.root, { ...base, state: 'PUBLISH_UNKNOWN', note: String(error.message).slice(0, 500) });
    refuse(`stopped part-way (${error.message}). Recorded as PUBLISH_UNKNOWN — check ${target} and resolve ${pub} by hand.`);
  }

  const url = `${SITE_URL}/guides/${slug}`;
  recordEvent(ctx.root, { ...base, state: 'PUBLISHED', externalId: url, knowledgeVersion: approval.knowledgeVersion });
  logPublication(ctx.root, [today(), 'Site — Guides (live after the next deploy)', rel, approval.approver, `kt publish (${identity().user})`, url, approval.knowledgeVersion]);
  console.log(`✓ ${pub}: wrote content/guides/${slug}.md and regenerated src/data/guides.ts in ${site}`);
  console.log(`  Commit both files in the product repo and deploy. It will be live at ${url}`);
  console.log('  Logged in ops/publishing-log.md.');
  return 0;
}

function cmdPost({ positional, flags }) {
  const ctx = context(flags);
  const { abs, rel } = draftKey(ctx.root, positional[0] ?? refuse('which draft?'));
  const type = draftType(rel) ?? refuse(`${rel} is not publishable`);
  if (type === 'article') refuse('articles go to the site: kt publish <draft> --to guides --site <product repo>');
  const channel = typeof flags.channel === 'string' ? flags.channel.toLowerCase() : refuse(`--channel ${PUBLISHABLE[type].channels.join('|')}`);
  if (!PUBLISHABLE[type].channels.includes(channel)) refuse(`a ${type} draft goes to ${PUBLISHABLE[type].channels.join(', ')}, not ${channel}`);

  const text = readFileSync(abs, 'utf8');
  const approval = currentApproval(ctx.root, rel, text);
  if (approval.rehearsal) refuse(`${approval.id} is a rehearsal approval — nothing can be posted from it`);
  if (isDraftVersion(ctx.version)) refuse(`product-facts.md is ${ctx.version} — nothing is published before D1`);

  const all = pieces(type, splitDraft(text).body);
  let piece = null;
  let copy = all[0].text;
  if (type === 'social') {
    const wanted = typeof flags.piece === 'string' ? flags.piece.toLowerCase() : refuse(`which caption? --piece "${all.map((p) => p.heading.split(' — ')[0]).join('" | "')}"`);
    const found = all.find((p) => p.heading.toLowerCase().startsWith(wanted)) ?? refuse(`no caption starting "${flags.piece}"`);
    piece = found.heading.split(' — ')[0];
    copy = found.text;
  }

  const start = canStart(ctx.root, rel, channel, piece);
  if (!start.ok) refuse(start.reason);
  const pub = newId('P');
  recordEvent(ctx.root, { pub, draft: rel, channel, piece, approvalId: approval.id, key: idempotencyKey(rel, channel, piece, approval.id), state: 'PUBLISHING' });

  console.log(`── ${pub} · ${channel}${piece ? ` · ${piece}` : ''} · copy exactly this ──\n`);
  console.log(copy.trim());
  console.log(`\n── end ──\nPost it, then: node tools/kt.mjs confirm ${pub} --url <link to the live post>`);
  console.log(`If you did not post it:  node tools/kt.mjs cancel ${pub}`);
  return 0;
}

function settle(flags, id, wanted) {
  const ctx = context(flags);
  const last = publicationById(ctx.root, id) ?? refuse(`no publication ${id}`);
  if (!wanted.includes(last.state)) refuse(`${id} is ${last.state}; this command needs ${wanted.join(' or ')}`);
  return { ctx, last };
}

function cmdConfirm({ positional, flags }) {
  const id = positional[0] ?? refuse('which publication? (P-…)');
  const url = typeof flags.url === 'string' ? flags.url : refuse('--url <link to the live post>');
  if (!/^https:\/\//.test(url)) refuse('the link must start with https://');
  const { ctx, last } = settle(flags, id, ['PUBLISHING']);
  const approval = readJsonl(ctx.root, APPROVALS).find((a) => a.id === last.approvalId);
  recordEvent(ctx.root, { ...last, state: 'PUBLISHED', externalId: url, knowledgeVersion: approval?.knowledgeVersion, note: undefined });
  logPublication(ctx.root, [today(), `${last.channel}${last.piece ? ` (${last.piece})` : ''}`, last.draft, approval?.approver, identity().user, url, approval?.knowledgeVersion]);
  console.log(`✓ ${id} PUBLISHED — logged in ops/publishing-log.md`);
  return 0;
}

function cmdCancel({ positional, flags }) {
  const id = positional[0] ?? refuse('which publication? (P-…)');
  const { ctx, last } = settle(flags, id, ['PUBLISHING']);
  recordEvent(ctx.root, { ...last, state: 'CANCELLED', note: 'not posted' });
  console.log(`✓ ${id} cancelled — the draft can be posted again later`);
  return 0;
}

function cmdResolve({ positional, flags }) {
  const id = positional[0] ?? refuse('which publication? (P-…)');
  const { ctx, last } = settle(flags, id, ['PUBLISH_UNKNOWN']);
  if (typeof flags.url === 'string') {
    recordEvent(ctx.root, { ...last, state: 'PUBLISHED', externalId: flags.url, note: 'resolved by hand: it was published' });
    console.log(`✓ ${id} resolved as PUBLISHED`);
  } else if (flags['not-published']) {
    recordEvent(ctx.root, { ...last, state: 'FAILED', note: 'resolved by hand: it was not published' });
    console.log(`✓ ${id} resolved as not published — it may be published again`);
  } else refuse('say what happened: --url <live link> or --not-published');
  return 0;
}

function cmdStatus({ flags }) {
  const ctx = context(flags);
  const d1 = !isDraftVersion(ctx.version);
  console.log(`Product facts: ${ctx.version} — ${d1 ? 'approved, publishing allowed' : 'DRAFT: nothing may be published until D1'}\n`);

  const states = publicationStates(ctx.root);
  const attention = [...states.values()].filter(
    (e) => e.state === 'PUBLISH_UNKNOWN' || (e.state === 'PUBLISHING' && Date.now() - Date.parse(e.at) > 24 * 3600 * 1000),
  );
  if (attention.length) {
    console.log('NEEDS A PERSON');
    for (const e of attention) console.log(`  ${e.pub}  ${e.state}  ${e.channel}${e.piece ? ` ${e.piece}` : ''}  ${e.draft}  (since ${e.at.slice(0, 16)})`);
    console.log('');
  }

  const draftsDir = join(ctx.root, 'drafts');
  const rows = [];
  if (existsSync(draftsDir)) {
    for (const day of readdirSync(draftsDir).filter((d) => /^\d{4}-\d{2}-\d{2}$/.test(d)).sort()) {
      for (const file of readdirSync(join(draftsDir, day)).sort()) {
        const rel = `drafts/${day}/${file}`;
        const type = draftType(rel);
        if (!type) continue;
        const text = readFileSync(join(draftsDir, day, file), 'utf8');
        const approval = latestApproval(ctx.root, rel);
        let state = 'waiting for review';
        if (approval) state = approval.sha256 !== sha256(text) ? 'CHANGED since approval' : approval.rehearsal ? 'rehearsal only' : 'APPROVED';
        const pubs = [...states.entries()].filter(([k]) => k.startsWith(`${rel}#`)).map(([, e]) => `${e.channel}${e.piece ? `:${e.piece}` : ''}=${e.state}`);
        rows.push(`  ${state.padEnd(22)} ${rel}${pubs.length ? `\n${' '.repeat(25)}${pubs.join(', ')}` : ''}`);
      }
    }
  }
  console.log(rows.length ? `DRAFTS\n${rows.join('\n')}` : 'No publishable drafts in drafts/.');
  return 0;
}

/* ----------------------------------------------------------------- main */

const COMMANDS = { status: cmdStatus, check: cmdCheck, approve: cmdApprove, publish: cmdPublish, post: cmdPost, confirm: cmdConfirm, cancel: cmdCancel, resolve: cmdResolve };

export async function main(argv) {
  const [command, ...rest] = argv;
  const run = COMMANDS[command];
  if (!run) {
    console.log(readFileSync(fileURLToPath(import.meta.url), 'utf8').split('*/')[0].replace(/^#!.*\n\/\*\*\n?/, '').replace(/^ \* ?/gm, ''));
    return command ? 2 : 0;
  }
  try {
    return await run(parseArgs(rest));
  } catch (error) {
    if (error instanceof Refusal) {
      console.error(`\n✖ ${error.message}`);
      return 1;
    }
    throw error;
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  process.exitCode = await main(process.argv.slice(2));
}
