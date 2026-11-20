---
file: publishing-log.md
owner: The approver (D14)
created: 2026-11-13
---

# Publishing log

Since 2026-11-21 `tools/kt.mjs` writes these rows itself: `kt publish` for a
guide on the site, `kt confirm` after a post (`ops/publishing-guide.md`). The
full event history is in `logs/publications.jsonl`. This log is the readable
record, and the only way to answer "what went out, when, and from which
draft?" a month later.

**One line per publication, added the same day.** An item that is approved
but not yet posted is not logged. Add a row by hand only for something posted
without the tool, and say so in the "Posted by" column.

| Date posted | Channel | Draft file | Approved by | Posted by | Link to the live post | Knowledge version |
|---|---|---|---|---|---|---|
| | | | | | | |

How to fill it in:

- **Draft file** — the path under `drafts/`, e.g.
  `drafts/2026-11-23/02-content-factory-lantern-tale-social.md` (names as in
  `agents/shared-controls.md` §8).
- **Knowledge version** — the `version:` line of `knowledge/product-facts.md`
  on the day it was approved. If a fact later turns out wrong, this shows
  which posts used it.
- **Edited before posting?** Say so in the link column ("edited: removed
  second caption"). Edits are fine; unrecorded ones are not.

Never post a draft that still carries the "not yet client-confirmed" notice.
