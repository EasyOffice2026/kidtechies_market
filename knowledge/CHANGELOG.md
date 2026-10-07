# Knowledge base changelog

Every change to a file in `knowledge/` gets a line here, and the file's own
`version` and `last-approved` header is updated in the same commit.

Changes affecting **pricing, privacy, refund terms or educational claims**
require client approval *before* the file becomes agent context. Record the
approver.

| Date | File | Version | Change | Approved by |
|---|---|---|---|---|
| 2026-09-17 | all five + content-queue | 0.1-DRAFT | Initial authoring from the Growth Dossier and KT/DEV/2026-001. All product facts marked PENDING - not yet fit for parent-facing output. | NOT YET APPROVED |
| 2026-09-18 | product-facts.md, site-discrepancy-log.md, content-queue.md | 0.2-DRAFT | Live site verification. Recovered all 4 course names and all 6 Story Shelf titles; verified 14 missions (5/4/3/2) and 4 capstones individually. Promoted the 30-day refund from PROPOSED to SITE-VERIFIED - it exists on /terms. Corrected age structure from three equal bands to "9-12, adaptable for 6-8 and 13-16". Added the $100 anchor price and per-course figures. Queue items 5-7 unblocked. Full record in `ops/day-1/site-verification-2026-09-18.md`. | NOT YET APPROVED |
| 2026-09-18 | product-facts.md, claims-allowed.md, audience.md, content-queue.md | 0.3-DRAFT | Agent 1 first run. Competitor pricing band superseded: observed Tynker $7.50, CodaKid $29, Juni $299 vs the dossier's $11-25. **Message pillar 4's "less than three months" framing suspended** - false against Tynker. Queue item 1 unblocked and re-angled UAE-first (D5 closed); items 1b, 1c added. | NOT YET APPROVED |
| 2026-09-18 | child-safety-rules.md, content-queue.md | 0.4-DRAFT | Agent 2 first package (queue item 1, UAE curriculum). Test classes 2 and 6 run: 8/8 and 3/4, zero failures. Rule 3 tightened after case 2.4 - volume-based social proof ("join thousands of families") added as a named fear-in-disguise example. Queue item 1 marked DONE. | NOT YET APPROVED |
| 2026-09-20 | contracts/payment-csv.md, logs/ | 0.5-DRAFT | Day 4: Agents 3-6 executed. Test class 4 6/6, case 6.2 PASS. Payment contract amended with optional `original_order_week` after case 4.1. Creative results log and school prospect log seeded. School Outreach premise finding recorded - named ICT contacts are not published by Gulf schools. | NOT YET APPROVED |
| 2026-09-21 | tests/, ops/handover.md | 0.5-DRAFT | Day 5: simulated week verified, class 5 3/6 (3 need client account), handover pack written. Cumulative: 24 cases passed, zero failures. Sign-off blocked on client items D1, D2, D6, D8 and the target school list. | NOT YET APPROVED |
| 2026-10-07 | product-facts.md, claims-allowed.md, brand-voice.md, audience.md | 0.6-DRAFT | **Privacy correction.** The 2026-09-18 verification took `/for-parents` as describing the whole product; it describes guest mode only. The product has parent accounts (`/login`, `/register`) and stores children's progress server-side, confirmed in the committed schema. "No account, no email address" and "nothing leaves the device" were marked SITE-VERIFIED and agents were writing them into parent copy. Two-mode table added; pillar 2 reworded; brand-voice example 3 replaced (it was a template agents imitate); ad variants V-003 and V-004 withdrawn; five drafts marked do-not-publish. Nothing was published - the approval gate held. | NOT YET APPROVED |

## The promotion rule

A knowledge file is `DRAFT` until the client approves it in writing. Until then:

- Agents may run against it for **internal test drafts only**.
- No output built on a PENDING fact may be published, sent to a school, or
  placed in an ad.

Promote by: client written approval -> update `version` to `1.0`, set
`last-approved` to the date, flip PENDING rows to CONFIRMED, add a line above.

## Feeding the voice file

The founder's Thursday customer calls are the input that keeps
`brand-voice.md` alive (dossier S09). When a real parent phrase goes into the
file, log it here with the date it was heard. A voice file that has not changed
in three months is not being used.
