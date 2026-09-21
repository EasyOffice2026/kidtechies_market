---
file: content-queue.md
owner: Founder (sets priority) / Content Factory (marks consumed)
version: 0.1-DRAFT
last-approved: NOT YET APPROVED
---

# Content queue

The Content Factory takes the **topmost item with status `READY`**, writes its
package, then marks it `DONE` with the draft folder date. It never picks a
`BLOCKED` or `DONE` item, and never invents a topic that is not on this list.

This is a governed file. It decides what gets written, so it carries the same
owner/version discipline as the five knowledge files, even though KT/DEV/2026-001
lists only five. (Analysis finding F5.)

## Status values

`READY` - may be written now.
`BLOCKED` - depends on something unresolved; the reason is in the Notes column.
`DONE` - written; draft folder recorded.
`HOLD` - deliberately parked by the founder.

## Queue

| # | Item | Source | Persona | Status | Notes |
|---|---|---|---|---|---|
| 1 | **Your child's school starts teaching AI this term — what they'll learn, and what you can do at home** | Dossier S05 channel #1, re-angled | Vision 2030 parent | **DONE** | Written 2026-09-18 → `drafts/2026-09-18/`. UAE-first per D5; Saudi used as context only. Article, 5 captions, nurture email, video hook, self-check. **Arabic localisation is the immediate next step** — the hook is perishable and Arabic is the priority market. |
| 1b | AI sounds certain even when it's wrong — how to teach a nine-year-old to notice | Agent 1 briefing, 2026-09-18 | Worried screen-time parent | DONE | The most-cited parent anxiety answered by the product's founding premise. Doubles as nurture email day 4. |
| 1c | What does an AI course for children actually cost? A plain comparison | Agent 1 briefing, 2026-09-18 | Both parent personas | HOLD | Blocked on the client's price-framing decision. Every competitor price must be re-verified on the vendor's own pricing page before writing — the table in `product-facts.md` is indicative only. |
| 2 | The lantern that learned the way | Story Shelf | Vision 2030 parent | DONE | Story Shelf SEO layer: the story, the AI idea inside it, a discussion question, a printable, internal link to the matching mission. |
| 3 | The mirror that only knew roses | Story Shelf | Worried screen-time parent | DONE | The AI idea here is training-data bias. Strong fit for the safety persona. |
| 4 | The clockwork nightingale | Story Shelf | Vision 2030 parent | DONE | |
| 5 | The baker who sorted the starfruit | Story Shelf | Vision 2030 parent | DONE | Unblocked 2026-09-18 from the live sitemap. |
| 6 | Wren and the whispering wood | Story Shelf | Worried screen-time parent | DONE | Unblocked 2026-09-18 from the live sitemap. |
| 7 | The two guardians of the amber bridge | Story Shelf | Vision 2030 parent | DONE | Unblocked 2026-09-18 from the live sitemap. |
| 8 | How to explain AI to a 7 year old | Dossier S05 channel #2 | Vision 2030 parent | DONE | Answer-first article targeting a real parent query. |
| 9 | Is ChatGPT safe for kids | Dossier S05 channel #2 | Worried screen-time parent | DONE | Highest-intent query on the list. Calm voice, no fear. |
| 10 | What should a 10 year old know about AI | Dossier S05 channel #2 | Vision 2030 parent | DONE | |
| 11 | AI curriculum in Saudi schools - what parents are asking | Dossier S05 channel #2 | Vision 2030 parent | DONE | Every ministry claim needs a primary dated source. See `claims-allowed.md`. |
| 12 | Three things AI gets wrong that your child should be able to spot | Dossier S04 nurture Day 4 | Both parent personas | DONE | Doubles as nurture email 3. Pure value, no pitch. |
| 13 | What to say when your child asks whether AI is alive | Dossier S04 nurture Day 10 | Both parent personas | DONE | Parent-only guide. |
| 14 | Running a 40-minute AI club with no devices for half the room | Dossier S03 multiplier | Teacher / homeschool lead | DONE | The teacher persona's literal question. Pairs with the school page. |
| 15 | AI Detective Academy - Mission 1 walkthrough for parents | Mission | Vision 2030 parent | DONE | Free-mission CTA lands naturally here. |

## Founder instructions

- Reorder freely. The Factory always takes the top `READY` item.
- Items 5-7 unblocked on 2026-09-18 — all six Story Shelf titles were recovered
  from the live sitemap, so the full SEO layer is now writable.
- Item 1 unblocks or gets rewritten after Agent 1's first Monday briefing.
- Item 14 (the teacher/club article) leans on printable sheets, which could not
  be verified on the site. Confirm they exist before writing it.
- Keep at least three `READY` items above any `BLOCKED` one so a Monday,
  Wednesday or Saturday run never stalls.
