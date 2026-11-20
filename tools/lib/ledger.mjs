/**
 * The approval and publication ledger — two append-only JSON-lines files in
 * `logs/`. Nothing is ever rewritten; the current state of anything is the
 * last event about it.
 *
 * This is the data model from ops/remaining-work-plan.md Part 4, on files
 * instead of SQLite, with the fixes that plan carries:
 *
 * - States DRAFT → APPROVED → PUBLISHING → PUBLISHED, plus FAILED, CANCELLED
 *   and PUBLISH_UNKNOWN. Only an APPROVED item (or one whose last attempt
 *   FAILED or was CANCELLED) may start publishing.
 * - PUBLISH_UNKNOWN — the tool stopped part-way and cannot tell whether the
 *   item went out — is never retried automatically. A person resolves it.
 * - One publication per (draft, channel, piece): the unique key the original
 *   specification referred to but never defined.
 * - Every approval records the file's hash, so a draft edited after approval
 *   is no longer approved; and the facts version, so a wrong fact can be
 *   traced to every post that used it.
 * - The approver is recorded with the computer account that ran the command
 *   (identity source), not only a typed name.
 */
import { createHash, randomBytes } from 'node:crypto';
import { appendFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { normalise } from './drafts.mjs';

export const APPROVALS = 'logs/approvals.jsonl';
export const PUBLICATIONS = 'logs/publications.jsonl';

export const sha256 = (text) => createHash('sha256').update(normalise(text)).digest('hex');
export const newId = (prefix) => `${prefix}-${randomBytes(4).toString('hex')}`;

export function readJsonl(root, file) {
  const path = join(root, file);
  if (!existsSync(path)) return [];
  return readFileSync(path, 'utf8')
    .split(/\r?\n/)
    .filter((line) => line.trim())
    .map((line, i) => {
      try {
        return JSON.parse(line);
      } catch {
        throw new Error(`${file} line ${i + 1} is not valid JSON — the ledger has been edited by hand; fix it before continuing`);
      }
    });
}

export function appendJsonl(root, file, record) {
  const path = join(root, file);
  mkdirSync(dirname(path), { recursive: true });
  appendFileSync(path, `${JSON.stringify(record)}\n`);
  return record;
}

/** The latest approval of a draft, or null. */
export function latestApproval(root, draft) {
  return readJsonl(root, APPROVALS).filter((a) => a.draft === draft).at(-1) ?? null;
}

export const pubKey = (draft, channel, piece) => `${draft}#${channel}#${piece ?? ''}`;

/** Current state of every (draft, channel, piece): its last event. */
export function publicationStates(root) {
  const states = new Map();
  for (const event of readJsonl(root, PUBLICATIONS)) {
    states.set(pubKey(event.draft, event.channel, event.piece), event);
  }
  return states;
}

/** Last event of one publication id. */
export function publicationById(root, id) {
  return readJsonl(root, PUBLICATIONS).filter((e) => e.pub === id).at(-1) ?? null;
}

/** Whether a new publication of (draft, channel, piece) may start, and why not. */
export function canStart(root, draft, channel, piece) {
  const last = publicationStates(root).get(pubKey(draft, channel, piece));
  if (!last || last.state === 'FAILED' || last.state === 'CANCELLED') return { ok: true };
  const reasons = {
    PUBLISHING: `already being published (${last.pub}) — confirm or cancel it first`,
    PUBLISHED: `already published (${last.pub}${last.externalId ? `, ${last.externalId}` : ''})`,
    PUBLISH_UNKNOWN: `${last.pub} stopped part-way and may already be out — a person must resolve it (kt resolve ${last.pub} …)`,
  };
  return { ok: false, reason: reasons[last.state] ?? `state ${last.state}` };
}

/** Idempotency key: the same approved content to the same channel is one publication. */
export const idempotencyKey = (draft, channel, piece, approvalId) =>
  createHash('sha256').update(pubKey(draft, channel, piece) + approvalId).digest('hex').slice(0, 16);

export function recordEvent(root, fields) {
  return appendJsonl(root, PUBLICATIONS, { ...fields, at: new Date().toISOString() });
}
