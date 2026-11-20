/**
 * Reading agent drafts: what kind of draft a file is, its parts, and turning
 * an approved article into a site guide.
 *
 * A draft as the agents write it (agents/shared-controls.md §8):
 *
 *   approved-by: Ibrahim 2026-12-01      <- only after approval, typed by `kt approve`
 *   ---
 *   agent: 2 — Content Factory
 *   persona: Vision 2030 parent
 *   ---
 *   > ⚠ Contains facts not yet client-confirmed …   <- only while facts are DRAFT
 *   # Title
 *   **Word count: 946**
 *   body …
 */
import { basename } from 'node:path';

/** The four Content Factory files that can be published. Everything else is an internal report. */
export const PUBLISHABLE = {
  article: { suffix: '-article.md', channels: ['guides'] },
  social: { suffix: '-social.md', channels: ['instagram', 'facebook', 'linkedin', 'tiktok', 'x'] },
  email: { suffix: '-email.md', channels: ['email'] },
  'video-hook': { suffix: '-video-hook.md', channels: ['tiktok', 'instagram', 'youtube'] },
};

export const DRAFT_NOTICE = /not yet client-confirmed|not for publication|not for sending/i;
const APPROVAL_LINE = /^approved-by:\s*(.+?)\s+(\d{4}-\d{2}-\d{2})\s*$/;

/** 'article' | 'social' | 'email' | 'video-hook' | null (not publishable). */
export function draftType(path) {
  const name = basename(path);
  if (!name.startsWith('02-content-factory-')) return null;
  for (const [type, { suffix }] of Object.entries(PUBLISHABLE)) {
    if (name.endsWith(suffix) || new RegExp(`${suffix.replace('.md', '')}-\\d+\\.md$`).test(name)) return type;
  }
  return null;
}

/** `lantern-tale` from `02-content-factory-lantern-tale-article.md` (and its `-2` copies). */
export function itemSlug(path) {
  return basename(path)
    .replace(/^02-content-factory-/, '')
    .replace(/(-\d+)?\.md$/, '')
    .replace(/-(article|social|email|video-hook)$/, '');
}

export const normalise = (text) => text.replace(/^﻿/, '').replace(/\r\n/g, '\n');

/**
 * Splits a draft into its approval line, front matter and body. Never throws:
 * a draft with no front matter simply has none.
 */
export function splitDraft(text) {
  let rest = normalise(text);
  let approval = null;
  const firstLine = rest.split('\n', 1)[0];
  const approvalMatch = APPROVAL_LINE.exec(firstLine);
  if (approvalMatch) {
    approval = { name: approvalMatch[1], date: approvalMatch[2] };
    rest = rest.slice(firstLine.length + 1);
  } else if (/^approved-by:/i.test(firstLine)) {
    approval = { malformed: firstLine };
    rest = rest.slice(firstLine.length + 1);
  }
  const front = {};
  const fm = /^---\n([\s\S]*?)\n---\n?/.exec(rest);
  if (fm) {
    for (const line of fm[1].split('\n')) {
      const colon = line.indexOf(':');
      if (colon > 0) front[line.slice(0, colon).trim()] = line.slice(colon + 1).trim();
    }
    rest = rest.slice(fm[0].length);
  }
  return { approval, front, body: rest };
}

/** The draft text with its approval line replaced by a new one. */
export function withApprovalLine(text, name, date) {
  const { approval } = splitDraft(text);
  let rest = normalise(text);
  if (approval) rest = rest.slice(rest.indexOf('\n') + 1);
  return `approved-by: ${name} ${date}\n${rest}`;
}

/** `## ` sections of a body, as `{ heading, text }`. Used for social captions. */
export function sections(body) {
  const out = [];
  let current = null;
  for (const line of body.split('\n')) {
    const h = /^##\s+(.+)$/.exec(line);
    if (h) {
      if (current) out.push(current);
      current = { heading: h[1].trim(), lines: [] };
    } else if (current) {
      current.lines.push(line);
    }
  }
  if (current) out.push(current);
  return out.map(({ heading, lines }) => ({
    heading,
    text: lines
      .join('\n')
      .replace(/\n-{3,}\s*$/g, '')
      .trim(),
  }));
}

/**
 * The pieces a draft is made of, each judged on its own for the call-to-action
 * rule (claims-allowed.md: "A piece is one article, one social caption, one
 * email or one video hook").
 */
export function pieces(type, body) {
  if (type === 'social') {
    const found = sections(body);
    return found.length ? found : [{ heading: 'whole file', text: body }];
  }
  return [{ heading: type, text: body }];
}

/** Body text without the agents' notices, word-count line, horizontal rules and H1. */
export function cleanBody(body) {
  const lines = normalise(body).split('\n');
  const out = [];
  let title = null;
  let inNotice = false;
  for (const line of lines) {
    const trimmed = line.trim();
    if (/^>\s*⚠/.test(trimmed)) {
      inNotice = true;
      continue;
    }
    if (inNotice) {
      if (/^>/.test(trimmed)) continue;
      inNotice = false;
    }
    if (!title && /^#\s+/.test(trimmed)) {
      title = trimmed.replace(/^#\s+/, '');
      continue;
    }
    if (/^\*\*word count:?\s*[\d,]+\*\*$/i.test(trimmed)) continue;
    if (/^(-{3,}|\*{3,})$/.test(trimmed)) {
      out.push('');
      continue;
    }
    out.push(line.replace(/\s+$/, ''));
  }
  const text = out.join('\n').replace(/\n{3,}/g, '\n\n').trim();
  return { title, text };
}

/** First sentences of the first paragraph, up to `max` characters; null if the first sentence alone is longer. */
export function describe(text, max = 160) {
  const para = text
    .split(/\n\s*\n/)
    .map((p) => p.trim())
    .find((p) => p && !/^(#|>|-|\d+[.)])/.test(p));
  if (!para) return null;
  const plain = para
    .replace(/\s+/g, ' ')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/\*\*?([^*]+)\*\*?/g, '$1');
  const sentences = plain.match(/[^.!?]+[.!?]+(\s|$)/g) ?? [plain];
  let out = '';
  for (const sentence of sentences) {
    if ((out + sentence).trim().length > max) break;
    out += sentence;
  }
  return out.trim() || null;
}

/** The guide file the site's gate expects, from an approved article draft. */
export function toGuide({ text, approvalRecord, sourceDraft, publishedOn, slug, description, persona }) {
  const { front, body } = splitDraft(text);
  const { title, text: clean } = cleanBody(body);
  const problems = [];
  const finalTitle = title;
  const finalDescription = description ?? front.meta_description ?? describe(clean);
  const finalPersona = persona ?? front.persona;
  if (!finalTitle) problems.push('the article has no "# " title line');
  if (!finalDescription) problems.push('no description: the first sentence is over 160 characters — pass --description "…"');
  if (!finalPersona) problems.push('no persona in the draft front matter — pass --persona "…"');
  if (problems.length) return { problems };

  const fm = {
    title: finalTitle,
    description: finalDescription,
    slug,
    persona: finalPersona,
    approvedBy: approvalRecord.approver,
    approvedOn: approvalRecord.approvedAt.slice(0, 10),
    knowledgeVersion: approvalRecord.knowledgeVersion,
    sourceDraft,
    publishedOn,
  };
  for (const [key, value] of Object.entries(fm)) {
    if (/\n/.test(String(value))) problems.push(`${key} contains a line break`);
  }
  if (problems.length) return { problems };
  const head = Object.entries(fm)
    .map(([k, v]) => `${k}: ${v}`)
    .join('\n');
  return { problems: [], guide: `---\n${head}\n---\n\n${clean}\n` };
}
