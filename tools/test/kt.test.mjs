/**
 * The publishing tool's promises, each tried against a throwaway agent folder:
 * no approval, no publication; an edit cancels an approval; nothing publishes
 * twice; a part-way failure is never retried on its own; DRAFT facts block
 * everything except a rehearsal.
 *
 *   node --test tools/test/
 *
 * The guide tests use the product repo's real gate when it is found (set
 * KT_SITE, or keep it at the usual path); otherwise they are skipped.
 */
import assert from 'node:assert/strict';
import { cpSync, existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { after, beforeEach, describe, test } from 'node:test';
import { main } from '../kt.mjs';
import { checkDraft } from '../lib/checks.mjs';
import { cleanBody, describe as describeText, draftType, itemSlug, sections, splitDraft } from '../lib/drafts.mjs';

const REAL_SITE = process.env.KT_SITE ?? 'C:/restuarant/AI for kid/AI-tutor';
const hasSite = existsSync(join(REAL_SITE, 'scripts/lib/guides.mjs'));
const FREE = 'https://www.kidtechies.com/courses/ai-detective-academy/picture-clue-patrol';

const filler = Array.from({ length: 90 }, (_, i) => `Line ${i} explains how a machine makes a guess from examples.`).join(' ');

const ARTICLE = `---
agent: 2 — Content Factory
queue_item: 8
persona: Vision 2030 parent
status: DRAFT — not published, not sent
---

# How to explain AI to a seven-year-old

**Word count: 900**

---

Can a seven-year-old understand AI? Yes, if you start with guessing. Here is how.

## Start with a guess

${filler}

If you want something to do together, [try the first mission](${FREE}). Nothing to sign up for.
`;

const SOCIAL = `---
agent: 2 — Content Factory
---

# Five social captions

---

## Instagram 1 — the one idea

AI guesses. Try the first mission: ${FREE}

---

## LinkedIn 1 — for teachers

Teachers: how do you show a class that AI predicts?
`;

const quiet = async (argv) => {
  const log = console.log;
  const err = console.error;
  const out = [];
  console.log = (...a) => out.push(a.join(' '));
  console.error = (...a) => out.push(a.join(' '));
  try {
    const code = await main(argv);
    return { code, out: out.join('\n') };
  } finally {
    console.log = log;
    console.error = err;
  }
};

const temps = [];
after(() => temps.forEach((d) => rmSync(d, { recursive: true, force: true })));

function makeRoot({ version = '1.0' } = {}) {
  const root = mkdtempSync(join(tmpdir(), 'kt-root-'));
  temps.push(root);
  mkdirSync(join(root, 'knowledge'), { recursive: true });
  mkdirSync(join(root, 'ops'), { recursive: true });
  mkdirSync(join(root, 'drafts/2026-12-01'), { recursive: true });
  writeFileSync(join(root, 'knowledge/product-facts.md'), `---\nversion: ${version}\n---\nBundle $70 instead of $100. One course $25.\n`);
  writeFileSync(
    join(root, 'ops/publishing-log.md'),
    '# Publishing log\n\n| Date posted | Channel | Draft file | Approved by | Posted by | Link to the live post | Knowledge version |\n|---|---|---|---|---|---|---|\n| | | | | | | |\n',
  );
  const article = join(root, 'drafts/2026-12-01/02-content-factory-explain-ai-article.md');
  const social = join(root, 'drafts/2026-12-01/02-content-factory-explain-ai-social.md');
  writeFileSync(article, ARTICLE);
  writeFileSync(social, SOCIAL);
  return { root, article, social };
}

function makeSite() {
  const site = mkdtempSync(join(tmpdir(), 'kt-site-'));
  temps.push(site);
  for (const file of ['scripts/lib/guides.mjs', 'scripts/build-guides.mjs', 'src/lib/free-lesson.ts']) {
    mkdirSync(join(site, file, '..'), { recursive: true });
    cpSync(join(REAL_SITE, file), join(site, file));
  }
  mkdirSync(join(site, 'content/guides'), { recursive: true });
  mkdirSync(join(site, 'src/data'), { recursive: true });
  return site;
}

describe('reading drafts', () => {
  test('types and slugs come from the file name', () => {
    assert.equal(draftType('drafts/2026-12-01/02-content-factory-lantern-tale-article.md'), 'article');
    assert.equal(draftType('drafts/2026-12-01/02-content-factory-lantern-tale-social-2.md'), 'social');
    assert.equal(draftType('drafts/2026-12-01/02-content-factory-lantern-tale-self-check.md'), null);
    assert.equal(draftType('drafts/2026-12-01/01-market-listener-briefing.md'), null);
    assert.equal(itemSlug('drafts/x/02-content-factory-lantern-tale-article-2.md'), 'lantern-tale');
  });
  test('the approval line and front matter are split off', () => {
    const { approval, front, body } = splitDraft(`approved-by: Ibrahim 2026-12-01\r\n${ARTICLE.replace(/\n/g, '\r\n')}`);
    assert.deepEqual(approval, { name: 'Ibrahim', date: '2026-12-01' });
    assert.equal(front.persona, 'Vision 2030 parent');
    assert.match(body, /^\n?# How to explain/);
  });
  test('the cleaned article loses the notice, word count, rules and title', () => {
    const { title, text } = cleanBody('> ⚠ **Contains facts not yet client-confirmed.**\n> Not for publication.\n\n# Title\n\n**Word count: 900**\n\n---\n\nBody.');
    assert.equal(title, 'Title');
    assert.equal(text, 'Body.');
  });
  test('a description is whole sentences under 160 characters', () => {
    assert.equal(describeText('One. Two is a [link](https://x.org). ' + 'x'.repeat(200) + '.'), 'One. Two is a link.');
    assert.equal(describeText('y'.repeat(200) + '.'), null);
  });
  test('social captions split on ## headings', () => {
    assert.deepEqual(
      sections(splitDraft(SOCIAL).body).map((s) => s.heading),
      ['Instagram 1 — the one idea', 'LinkedIn 1 — for teachers'],
    );
  });
});

describe('checks', () => {
  const facts = 'version: 1.0\n$70 $100 $25';
  test('a clean article passes', () => {
    assert.deepEqual(checkDraft({ type: 'article', body: splitDraft(ARTICLE).body, factsText: facts }).errors, []);
  });
  test('two calls to action in one caption are refused', () => {
    const body = `## Instagram 1\n\n${FREE} and again ${FREE}`;
    assert.match(checkDraft({ type: 'social', body, factsText: facts }).errors.join(), /at most one/);
  });
  test('a link to pricing is a second call to action', () => {
    const body = `${FREE}\nhttps://www.kidtechies.com/pricing`;
    assert.match(checkDraft({ type: 'article', body, factsText: facts }).errors.join(), /second call to action/);
  });
  test('an unknown price is flagged for the approver', () => {
    const body = `${FREE} only $49`;
    assert.match(checkDraft({ type: 'article', body, factsText: facts }).warnings.join(), /\$49/);
  });
  test('a forbidden claim is refused', () => {
    const body = `${FREE} Don't let your child be left behind.`;
    assert.match(checkDraft({ type: 'article', body, factsText: facts }).errors.join(), /fear/);
  });
  test('DRAFT facts block, except in a rehearsal', () => {
    const draftFacts = 'version: 0.8.4-DRAFT';
    const body = `${FREE} ok`;
    assert.match(checkDraft({ type: 'email', body, factsText: draftFacts }).errors.join(), /D1/);
    assert.equal(checkDraft({ type: 'email', body, factsText: draftFacts, rehearsal: true }).errors.length, 0);
  });
});

describe('approval', () => {
  let ctx;
  beforeEach(() => {
    ctx = makeRoot();
  });

  test('an agent cannot be the approver', async () => {
    const { code, out } = await quiet(['approve', ctx.article, '--by', 'Claude', '--root', ctx.root]);
    assert.equal(code, 1);
    assert.match(out, /not a person/);
  });

  test('approving writes the approved-by line and a ledger record with hash and identity', async () => {
    const { code } = await quiet(['approve', ctx.article, '--by', 'Ibrahim', '--root', ctx.root]);
    assert.equal(code, 0);
    assert.match(readFileSync(ctx.article, 'utf8'), /^approved-by: Ibrahim \d{4}-\d{2}-\d{2}\n/);
    const [record] = readFileSync(join(ctx.root, 'logs/approvals.jsonl'), 'utf8').trim().split('\n').map(JSON.parse);
    assert.equal(record.approver, 'Ibrahim');
    assert.equal(record.knowledgeVersion, '1.0');
    assert.match(record.sha256, /^[0-9a-f]{64}$/);
    assert.equal(record.identity.source, 'os-account');
  });

  test('DRAFT facts refuse a real approval; a rehearsal leaves the file untouched', async () => {
    const draft = makeRoot({ version: '0.8.4-DRAFT' });
    const real = await quiet(['approve', draft.article, '--by', 'Ibrahim', '--root', draft.root]);
    assert.equal(real.code, 1);
    assert.match(real.out, /D1/);
    const before = readFileSync(draft.article, 'utf8');
    const rehearsal = await quiet(['approve', draft.article, '--by', 'Ibrahim', '--rehearsal', '--root', draft.root]);
    assert.equal(rehearsal.code, 0);
    assert.equal(readFileSync(draft.article, 'utf8'), before);
  });

  test('a draft with a forbidden claim cannot be approved', async () => {
    writeFileSync(ctx.article, ARTICLE.replace('Can a seven', 'Results guaranteed. Can a seven'));
    const { code, out } = await quiet(['approve', ctx.article, '--by', 'Ibrahim', '--root', ctx.root]);
    assert.equal(code, 1);
    assert.match(out, /outcome promise/);
  });

  test('a file outside drafts/ is refused', async () => {
    const stray = join(ctx.root, 'ops/publishing-log.md');
    const { code, out } = await quiet(['approve', stray, '--by', 'Ibrahim', '--root', ctx.root]);
    assert.equal(code, 1);
    assert.match(out, /not under drafts/);
  });
});

describe('manual channels (post → confirm)', () => {
  let ctx;
  beforeEach(async () => {
    ctx = makeRoot();
    await quiet(['approve', ctx.social, '--by', 'Ibrahim', '--root', ctx.root]);
  });

  const pubId = (out) => /P-[0-9a-f]{8}/.exec(out)[0];

  test('posting needs a caption, prints it, and cannot run twice', async () => {
    const noPiece = await quiet(['post', ctx.social, '--channel', 'instagram', '--root', ctx.root]);
    assert.match(noPiece.out, /which caption/);
    const first = await quiet(['post', ctx.social, '--channel', 'instagram', '--piece', 'Instagram 1', '--root', ctx.root]);
    assert.equal(first.code, 0);
    assert.match(first.out, /AI guesses/);
    const again = await quiet(['post', ctx.social, '--channel', 'instagram', '--piece', 'Instagram 1', '--root', ctx.root]);
    assert.equal(again.code, 1);
    assert.match(again.out, /already being published/);
  });

  test('confirm records PUBLISHED and fills the publishing log', async () => {
    const { out } = await quiet(['post', ctx.social, '--channel', 'instagram', '--piece', 'Instagram 1', '--root', ctx.root]);
    const id = pubId(out);
    const done = await quiet(['confirm', id, '--url', 'https://www.instagram.com/p/abc', '--root', ctx.root]);
    assert.equal(done.code, 0);
    const log = readFileSync(join(ctx.root, 'ops/publishing-log.md'), 'utf8');
    assert.match(log, /\| instagram \(Instagram 1\) \| drafts\/2026-12-01\/02-content-factory-explain-ai-social\.md \| Ibrahim \|.*https:\/\/www\.instagram\.com\/p\/abc \| 1\.0 \|/);
    assert.doesNotMatch(log, /^\|(\s*\|){7}\s*$/m, 'the placeholder row is replaced');
    const again = await quiet(['post', ctx.social, '--channel', 'instagram', '--piece', 'Instagram 1', '--root', ctx.root]);
    assert.match(again.out, /already published/);
  });

  test('cancel lets it be posted later', async () => {
    const { out } = await quiet(['post', ctx.social, '--channel', 'instagram', '--piece', 'Instagram 1', '--root', ctx.root]);
    await quiet(['cancel', pubId(out), '--root', ctx.root]);
    const again = await quiet(['post', ctx.social, '--channel', 'instagram', '--piece', 'Instagram 1', '--root', ctx.root]);
    assert.equal(again.code, 0);
  });

  test('an edit after approval stops posting', async () => {
    writeFileSync(ctx.social, `${readFileSync(ctx.social, 'utf8')}\nOne more line.`);
    const { code, out } = await quiet(['post', ctx.social, '--channel', 'instagram', '--piece', 'Instagram 1', '--root', ctx.root]);
    assert.equal(code, 1);
    assert.match(out, /changed since it was approved/);
  });

  test('a social draft cannot go to the email channel', async () => {
    const { out } = await quiet(['post', ctx.social, '--channel', 'email', '--root', ctx.root]);
    assert.match(out, /not email/);
  });
});

describe('guides on the site', { skip: !hasSite && 'product repo not found (set KT_SITE)' }, () => {
  let ctx;
  let site;
  beforeEach(() => {
    ctx = makeRoot();
    site = makeSite();
  });
  const publish = (...extra) => quiet(['publish', ctx.article, '--to', 'guides', '--site', site, '--root', ctx.root, ...extra]);

  test('no approval, no publication', async () => {
    const { code, out } = await publish();
    assert.equal(code, 1);
    assert.match(out, /no approval record/);
    assert.equal(existsSync(join(site, 'content/guides/explain-ai.md')), false);
  });

  test('an approved article becomes a guide the site accepts, once', async () => {
    await quiet(['approve', ctx.article, '--by', 'Ibrahim', '--root', ctx.root]);
    const first = await publish();
    assert.equal(first.code, 0, first.out);
    const guide = readFileSync(join(site, 'content/guides/explain-ai.md'), 'utf8');
    assert.match(guide, /^---\ntitle: How to explain AI to a seven-year-old\n/);
    assert.match(guide, /approvedBy: Ibrahim\n/);
    assert.match(guide, /knowledgeVersion: 1\.0\n/);
    assert.doesNotMatch(guide, /Word count|approved-by:/);
    assert.match(readFileSync(join(site, 'src/data/guides.ts'), 'utf8'), /"slug": "explain-ai"/);
    assert.match(readFileSync(join(ctx.root, 'ops/publishing-log.md'), 'utf8'), /https:\/\/www\.kidtechies\.com\/guides\/explain-ai/);

    const second = await publish();
    assert.equal(second.code, 1);
    assert.match(second.out, /already published/);
  });

  test('a rehearsal approval can only dry-run, and the site refuses DRAFT facts', async () => {
    const draft = makeRoot({ version: '0.8.4-DRAFT' });
    ctx = draft;
    await quiet(['approve', ctx.article, '--by', 'Ibrahim', '--rehearsal', '--root', ctx.root]);
    const real = await publish();
    assert.match(real.out, /rehearsal approval/);
    const dry = await publish('--dry-run');
    assert.equal(dry.code, 1);
    assert.match(dry.out, /DRAFT fact list/);
    assert.equal(existsSync(join(site, 'content/guides/explain-ai.md')), false);
  });

  test('a part-way failure becomes PUBLISH_UNKNOWN and is never retried on its own', async () => {
    await quiet(['approve', ctx.article, '--by', 'Ibrahim', '--root', ctx.root]);
    rmSync(join(site, 'content/guides'), { recursive: true }); // the write will fail
    const failed = await publish();
    assert.equal(failed.code, 1);
    assert.match(failed.out, /PUBLISH_UNKNOWN/);
    mkdirSync(join(site, 'content/guides'));
    const retry = await publish();
    assert.equal(retry.code, 1);
    assert.match(retry.out, /a person must resolve it/);
    const id = /P-[0-9a-f]{8}/.exec(failed.out)[0];
    await quiet(['resolve', id, '--not-published', '--root', ctx.root]);
    const after = await publish();
    assert.equal(after.code, 0, after.out);
  });

  test('the site gate has the last word, even on an approved draft', async () => {
    await quiet(['approve', ctx.article, '--by', 'Ibrahim', '--root', ctx.root]);
    // A description typed at publish time is not covered by the draft checks.
    const { code, out } = await publish('--description', 'Results guaranteed for every child.');
    assert.equal(code, 1);
    assert.match(out, /gate refuses[\s\S]*outcome promise/);
    assert.equal(existsSync(join(site, 'content/guides/explain-ai.md')), false);
  });

  test('a site build that fails takes the file back out and records FAILED', async () => {
    await quiet(['approve', ctx.article, '--by', 'Ibrahim', '--root', ctx.root]);
    // Someone left an unapproved file in the folder: the whole build refuses.
    writeFileSync(join(site, 'content/guides/stray.md'), 'no front matter');
    const { code, out } = await publish();
    assert.equal(code, 1);
    assert.match(out, /site build refused it; the file was removed/);
    assert.equal(existsSync(join(site, 'content/guides/explain-ai.md')), false);
    const events = readFileSync(join(ctx.root, 'logs/publications.jsonl'), 'utf8').trim().split('\n').map(JSON.parse);
    assert.deepEqual(events.map((e) => e.state), ['PUBLISHING', 'FAILED']);
    rmSync(join(site, 'content/guides/stray.md'));
    const retry = await publish();
    assert.equal(retry.code, 0, retry.out);
  });
});
