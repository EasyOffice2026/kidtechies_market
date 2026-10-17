# Decision log

Open decisions block work. Each has an owner and a "blocks" column so the cost
of leaving it open is visible. Close by editing the row and committing.

## Open

| # | Decision | Owner | Blocks | Status |
|---|---|---|---|---|
| D1 | **Source of truth for product facts.** The spec (S5, Day 2) says verify against the live site; the dossier (S01 Blocker 02, S02) says the site's headline value claim is the error to retire. Confirm: client-approved fact sheet is canonical, and the site is corrected to match it. | Client | `product-facts.md` promotion out of draft; all parent-facing output | OPEN |
| D2 | **Analytics + email capture.** Dossier S04 fixes #1 and #4 are hard dependencies of Agent 4 and GTM Phase 1. **Spec written: `ops/phase-1-tracking-spec.md`** - needs a named builder and a date. | Client | Funnel Analyst live acceptance; GTM Phase 1 exit test | **Both halves built** on `feature/part-1-website` (analytics module, mission events, email capture with double opt-in). Still needed to close: apply migration 0002, set the env vars, switch analytics on, run the exit test. |
| D3 | **Brand name.** KidTechies vs "AI for Kids" (dossier S02, "Claims to retire"). Two brands split search, shares and word of mouth. | Client | `brand-voice.md` finalisation; every agent output | OPEN - proceeding with KidTechies as brand, "AI for kids" as descriptor |
| D4 | **Claude scheduled-task capability** on the client's current plan. | Developer to verify, client to confirm plan | All six agent cadences | OPEN - fallback documented in `ops/agent-runbook.md` |
| D8 | **Price comparison framing.** "Less than three months of the alternatives" assumed competitors at $11-25/month. Observed 2026-09-18: Tynker $7.50, CodaKid $29, Juni $299. At $7.50, $70 is ~9 months and the claim is false. | Client | Message pillar 4; queue item 1c; any price comparison | **OPEN - framing suspended in `claims-allowed.md` until answered** |
| D9 | **Who owns the GTM plan?** `ops/gtm-plan.md` covers dossier S04-S07, which the development engagement excluded. It has no owner. | Client | All four GTM phases | **OPEN** |
| D11 | **The legal privacy notice is out of date.** `privacy-content.tsx` still says "There is no account and no sign-up. We do not ask for... an email address", and does not mention Stripe at all. Parent accounts and Stripe purchases shipped on 4 September. The page is already marked "pending legal review" in code. Marketing copy was fixed on `feature/part-1-website`; the legal notice needs the client's legal owner, not a copy edit. | Client legal owner | Accuracy of the published privacy notice | **OPEN - urgent** |
| D6 | **Native Arabic reviewer.** Named person required before any Arabic publication. | Client | Arabic publication (not Arabic drafting) | OPEN |
| D7 | **Monthly agent running-cost ceiling.** The plan is budget-framed (<$500/mo total, $150-300 of it ads) with no usage estimate anywhere. | Client + developer | Nothing yet; prevents a surprise later | OPEN |

## Closed

| # | Decision | Resolution | Date |
|---|---|---|---|
| - | Version control from Day 1 rather than Stage 2 | Adopted. Git repo initialised at project root; Stage 2's private repo becomes a continuation, not a migration. | 2026-09-17 |
| D5 | Gulf curriculum news hook still live? | **Yes, re-angled.** Saudi's rollout began 2025-26 and is a year old — context, not news. The **UAE** is live: "Artificial Intelligence and Technology" is a standalone subject from the 2026-27 term, KG–G12, public *and* private schools, 1.277m students, 8m textbooks shipped. Queue item 1 unblocked as a UAE-first piece. Evidence in `drafts/2026-09-18/01-market-listener-briefing.md`. | 2026-09-18 |
| D10 | Do printable activity sheets exist? | **Yes.** Found in the product codebase (`activity-sheet.tsx`, a dedicated printable page per lesson) and live at `/courses/<course>/<lesson>/sheet`. Gated behind purchase for paid lessons. The teacher/homeschool pitch stands. | 2026-10-07 |
