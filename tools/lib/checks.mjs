/**
 * Deterministic checks run before a draft can be approved — the "knowledge
 * base as code" part of Stage 2 (ops/remaining-work-plan.md, Part 4, week 2).
 *
 * These do not replace the approver's read. They catch the mistakes a tired
 * person misses at 09:45: a leftover DRAFT notice, a second call to action, a
 * price that is not in product-facts.md, a sentence the claims file forbids.
 * `errors` block approval; `warnings` are shown and left to the approver.
 *
 * The phrase list mirrors knowledge/claims-allowed.md and
 * knowledge/child-safety-rules.md. Those files are the authority; when they
 * change, change this list in the same commit.
 */
import { DRAFT_NOTICE, pieces } from './drafts.mjs';

export const FREE_MISSION_URL = 'https://www.kidtechies.com/courses/ai-detective-academy/picture-clue-patrol';
const FREE_MISSION_PATH = '/courses/ai-detective-academy/picture-clue-patrol';

/** [pattern, why] — every match blocks approval. */
export const PROHIBITED = [
  [/\bguarantee(d|s)?\b/i, 'outcome promise'],
  [/career in (ai|tech)/i, 'outcome promise'],
  [/sets? (them|your child|children) up for/i, 'outcome promise'],
  [/left behind|fall(ing|s)? behind|get(ting)? ahead of/i, 'fear of falling behind'],
  [/don['’]t let your child/i, 'fear of falling behind'],
  [/limited time|before the term ends|act now|hurry\b/i, 'pressure to buy'],
  [/more effective than|the best ai (course|platform)|number one|#1\b/i, 'superiority claim'],
  [/\baccredited\b|curriculum[- ]approved|endorsed by|certified by|approved by the ministry/i, 'educational-authority claim'],
  [/no tracking|no third[- ]party analytics|\bno analytics\b|don['’]t track/i, 'analytics denial — Umami counts visits'],
  [/no account, no sign-up, no email address|progress never leaves the device|nothing about your child leaves the device/i, 'privacy claim with the mode dropped'],
  [/share your creations|video lessons|play my world|beginner, intermediate (and|or) advanced/i, 'a planned feature described as existing'],
  [/three months of the alternatives/i, 'retired price comparison'],
  [/23:48/, 'runtime as headline value'],
  [/hey kids|ask (your|a) (mum|mom|dad|parents?|grown[- ]?up)/i, 'copy addressed to a child'],
  [/what('s| is) your (child's )?(name|school|age)\b|tell us your (child's )?(name|age|school)/i, 'asks for a child\'s personal data'],
];

/** Every free-mission call to action in a piece: the link, in any form. */
function ctaCount(text) {
  const links = text.match(/https?:\/\/(www\.)?kidtechies\.com\/courses\/ai-detective-academy\/picture-clue-patrol|\]\(\/courses\/ai-detective-academy\/picture-clue-patrol\)/gi) ?? [];
  return links.length;
}

/** Links to anything other than the free mission or an outside source. */
function otherOwnLinks(text) {
  const own = text.match(/https?:\/\/(www\.)?kidtechies\.com[^\s)\]>"']*/gi) ?? [];
  return own.filter((url) => !url.includes(FREE_MISSION_PATH) && !/\/(stories|guides)\/[a-z0-9-]+\/?$/.test(url));
}

/** Dollar amounts product-facts.md states anywhere. */
export function knownPrices(factsText) {
  return new Set((factsText.match(/\$\d+(?:\.\d{2})?/g) ?? []).map((p) => p.replace(/\.00$/, '')));
}

/** The `version:` line of product-facts.md. */
export function factsVersion(factsText) {
  return /^version:\s*(.+)$/m.exec(factsText)?.[1]?.trim() ?? null;
}

export const isDraftVersion = (version) => !version || /draft/i.test(version);

/**
 * Checks one draft. `type` is from draftType(); `body` is the draft without
 * its approval line and front matter; `factsText` is product-facts.md.
 */
export function checkDraft({ type, body, factsText, rehearsal = false }) {
  const errors = [];
  const warnings = [];
  const version = factsVersion(factsText);

  if (!type) {
    errors.push('not a publishable draft — only Content Factory article, social, email and video-hook files are published');
    return { errors, warnings };
  }

  if (isDraftVersion(version)) {
    const msg = `product-facts.md is ${version ?? 'unversioned'} — nothing may be published until the client approves the facts (D1)`;
    (rehearsal ? warnings : errors).push(msg);
  }
  if (DRAFT_NOTICE.test(body)) {
    const msg = 'the draft still carries the "not yet client-confirmed" notice';
    (rehearsal ? warnings : errors).push(msg);
  }

  for (const [pattern, why] of PROHIBITED) {
    const hit = pattern.exec(body);
    if (hit) errors.push(`prohibited: ${why} ("${hit[0]}")`);
  }

  // Prices: every $ amount must be one product-facts.md states. A sourced
  // competitor price is allowed, but it needs a person to look at it.
  const known = knownPrices(factsText);
  for (const price of new Set((body.match(/\$\d+(?:\.\d{2})?/g) ?? []).map((p) => p.replace(/\.00$/, '')))) {
    if (!known.has(price)) warnings.push(`${price} is not a price in product-facts.md — fine only if it is a sourced competitor price`);
  }

  for (const piece of pieces(type, body)) {
    const n = ctaCount(piece.text);
    const label = type === 'social' ? `"${piece.heading}"` : `the ${type}`;
    if ((type === 'article' || type === 'email') && n !== 1) {
      errors.push(`${label} needs exactly one free-mission link (${FREE_MISSION_URL}); found ${n}`);
    } else if (n > 1) {
      errors.push(`${label} has ${n} free-mission links; at most one per piece`);
    }
    for (const url of otherOwnLinks(piece.text)) errors.push(`${label} links to ${url} — a second call to action`);
  }

  if (type === 'email') {
    const links = body.match(/https?:\/\/[^\s)\]>"']+/g) ?? [];
    if (links.length > 1) errors.push(`the email has ${links.length} links; it may have only the free-mission link`);
  }

  if (type === 'article') {
    const words = body.split(/\s+/).filter(Boolean).length;
    if (words < 700 || words > 1200) warnings.push(`about ${words} words; the brief is 800–1,000`);
  }

  return { errors, warnings };
}
