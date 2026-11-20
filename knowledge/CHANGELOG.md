# Knowledge base changelog

Every change to a file in `knowledge/` gets a line here, and the file's own
`version` and `last-approved` header is updated in the same commit.

Changes affecting **pricing, privacy, refund terms or educational claims**
require client approval *before* the file becomes agent context. Record the
approver.

Newest first. Each file's `version:` header shows the version of the last row
that changed it. `product-facts.md`'s version is the knowledge-base version
the publishing log records.

| Date | File | Version | Change | Approved by |
|---|---|---|---|---|
| 2026-11-20 | product-facts.md, audience.md, claims-allowed.md, brand-voice.md, site-discrepancy-log.md; logs/creative-results.csv | 0.8.2-DRAFT | **Corrections from the full audit.** product-facts: quiz count in course order (25/20/15/10); sitemap 41; site, free-mission link and "Later in the programme" rows; free tools without an account (Sparky, Code Lab, Creative Studio, XP, daily challenge, emailed sheet, group access, USD excluding tax, access "indefinitely", devices) with the exact site wording; stored data now lists purchases, email-confirmed time and the mailing list; "Signup required" scoped to trying; refund section shows it beside the price since 2026-11-13; stale "Gaps" list replaced (only D1 remains); one garbled line and one mis-encoded dash fixed. audience: teacher line no longer says "no data collected, classroom-ready"; "hand-animated" removed; curriculum lines marked context needing a source. claims-allowed: "Analytics denial" prohibited; call-to-action scope for emails. brand-voice: "lifetime access" reason. Discrepancy log: resolved rows closed. Ad variants V-002, V-006 and V-009 reworded (an unsourced statistic, an unscoped "no account", "animated by hand"). Headers brought in line with this log. | Developer — corrections to match the live site and code, for client confirmation with v1.0 |
| 2026-11-14 | product-facts.md, audience.md | 0.8.1-DRAFT | **Analytics correction.** Umami went live 2026-11-09, so "no tracking scripts, no third-party analytics" became false; it was still marked TRUE here and written into pillar 2. Now prohibited; replaced with the site's own live wording ("no cookies used for tracking"). Analytics row describes Umami and its three events. | Developer — correction to match the live site, for client confirmation with v1.0 |
| 2026-11-11 | claims-allowed.md | 0.1-DRAFT | Added a prohibited row: planned features (community sharing, levels, videos, My World, subscription) must not be described as existing. A restriction only; adds no claim. *(Note 2026-11-20: "0.1-DRAFT" was the file's stale header; the knowledge base was at 0.8-DRAFT that day.)* | Developer — restriction, for client confirmation with v1.0 |
| 2026-10-18 | product-facts.md, brand-voice.md, claims-allowed.md, audience.md | 0.8-DRAFT | **Client answers.** Brand KidTechies, tagline AI for Kids. Company Easy Office International, Kuwait. Discount model kept ($70 instead of $100). Story Shelf free. Market worldwide online registration (D12). Removed a stale claims-allowed row that still prohibited the refund promise, contradicting product-facts since 2026-09-18. | PARTIAL — client, in writing, 2026-10-18 |
| 2026-10-17 | product-facts.md, claims-allowed.md, brand-voice.md, audience.md, logs/ | 0.7-DRAFT | **Second privacy correction.** The 2026-10-07 entry read the schema as live behaviour and recorded that children's progress and profiles are stored server-side. False: nothing writes `child_profile` or `child_progress`. Rebuilt from what the code actually writes - parent accounts (email, name, password, Stripe id) exist; nothing about any child is stored; Sparky messages go to Anthropic unstored. Pillar 2 is now "Nothing about your child is stored on our servers". Five facts promoted from code: 28 activities, 70 quiz questions, certificate, characters, free mission. | NOT YET APPROVED |
| 2026-10-07 | product-facts.md, claims-allowed.md, brand-voice.md, audience.md | 0.6-DRAFT | **Privacy correction.** The 2026-09-18 verification took `/for-parents` as describing the whole product; it describes guest mode only. The product has parent accounts (`/login`, `/register`) and stores children's progress server-side, confirmed in the committed schema. "No account, no email address" and "nothing leaves the device" were marked SITE-VERIFIED and agents were writing them into parent copy. Two-mode table added; pillar 2 reworded; brand-voice example 3 replaced (it was a template agents imitate); ad variants V-003 and V-004 withdrawn; five drafts marked do-not-publish. Nothing was published - the approval gate held. | NOT YET APPROVED |
| 2026-09-21 | tests/, ops/handover.md | 0.5-DRAFT | Day 5: simulated week verified, class 5 3/6 (3 need client account), handover pack written. Cumulative: 24 cases passed, zero failures. Sign-off blocked on client items D1, D2, D6, D8 and the target school list. | NOT YET APPROVED |
| 2026-09-20 | contracts/payment-csv.md, logs/ | 0.5-DRAFT | Day 4: Agents 3-6 executed. Test class 4 6/6, case 6.2 PASS. Payment contract amended with optional `original_order_week` after case 4.1. Creative results log and school prospect log seeded. School Outreach premise finding recorded - named ICT contacts are not published by Gulf schools. | NOT YET APPROVED |
| 2026-09-18 | child-safety-rules.md, content-queue.md | 0.4-DRAFT | Agent 2 first package (queue item 1, UAE curriculum). Test classes 2 and 6 run: 8/8 and 3/4, zero failures. Rule 3 tightened after case 2.4 - volume-based social proof ("join thousands of families") added as a named fear-in-disguise example. Queue item 1 marked DONE. | NOT YET APPROVED |
| 2026-09-18 | product-facts.md, claims-allowed.md, audience.md, content-queue.md | 0.3-DRAFT | Agent 1 first run. Competitor pricing band superseded: observed Tynker $7.50, CodaKid $29, Juni $299 vs the dossier's $11-25. **Message pillar 4's "less than three months" framing suspended** - false against Tynker. Queue item 1 unblocked and re-angled UAE-first (D5 closed); items 1b, 1c added. | NOT YET APPROVED |
| 2026-09-18 | product-facts.md, site-discrepancy-log.md, content-queue.md | 0.2-DRAFT | Live site verification. Recovered all 4 course names and all 6 Story Shelf titles; verified 14 missions (5/4/3/2) and 4 capstones individually. Promoted the 30-day refund from PROPOSED to SITE-VERIFIED - it exists on /terms. Corrected age structure from three equal bands to "9-12, adaptable for 6-8 and 13-16". Added the $100 anchor price and per-course figures. Queue items 5-7 unblocked. Full record in `ops/day-1/site-verification-2026-09-18.md`. | NOT YET APPROVED |
| 2026-09-17 | all five + content-queue | 0.1-DRAFT | Initial authoring from the Growth Dossier and KT/DEV/2026-001. All product facts marked PENDING - not yet fit for parent-facing output. | NOT YET APPROVED |

## The promotion rule

A knowledge file is `DRAFT` until the client approves it in writing. Until then:

- Agents may run against it for **internal test drafts only**.
- Nothing may be published, sent to a school, or placed in an ad while
  `product-facts.md` ends in `-DRAFT`. Every draft carries the "not yet
  client-confirmed" notice (`agents/shared-controls.md` §4).

Promote by: client written approval -> update `version` to `1.0`, set
`last-approved` to the date, flip PENDING, VERIFIED and SITE-VERIFIED rows to
CONFIRMED, add a line at the top of the table.

## Feeding the voice file

The Thursday customer calls (the approver's, or whoever talks to customers) are the input that keeps
`brand-voice.md` alive (dossier S09). When a real parent phrase goes into the
file, log it here with the date it was heard. A voice file that has not changed
in three months is not being used.
