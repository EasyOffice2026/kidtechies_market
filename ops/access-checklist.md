# Day 1 access and capability checklist

Nothing downstream is real until these are ticked. An unticked row is a blocker,
not an admin task - record it in `decision-log.md` and move the affected
milestone date.

| # | Item | Why it matters | Verified | Notes |
|---|---|---|---|---|
| 1 | Claude plan supports **scheduled tasks** | The three scheduled cadences (four after D16) depend on it. If absent, Stage 1 scheduling is redesigned (see runbook fallback). | [x] | D4 — passed on the client's Pro account, 2026-11-12 |
| 2 | Claude plan supports **saved skills** | Voice + claims must apply without pasting them each session. | [x] | `kidtechies-voice` v2 uploaded and switched on, 2026-11-19. **Re-upload as v3 after the 2026-11-20 release** — the skill file changed (see `ops/remaining-work-plan.md`, "Still to do") |
| 3 | Claude plan supports **web research** | Market Listener and School Outreach are useless without it. | [ ] | To confirm on the first Market Listener run on the client's account |
| 4 | **Agent folder** on the client's computer | Draft delivery + CSV input location. | [x] | `D:\marketing agent\kidtechies_market-develop` on DESKTOP-2VR6VB1, linked to the Cowork project "kidtechies". No Google Drive is used |
| 5 | `drafts\YYYY-MM-DD\` in that folder | Agents write here; the approver reviews here. | [x] | Used on the client's account, 2026-11-16 |
| 6 | **Client-approved product fact sheet** received | Canonical input to `product-facts.md`. | [ ] | D1 - hard blocker |
| 7 | Live site reviewed for fact discrepancies | Populates `site-discrepancy-log.md`. | [x] | 2026-09-18; re-checked 2026-11-20 |
| 8 | **Primary approver** named | S8.1 requires one primary, one backup. | [ ] | D14 — Ibrahim acts until the client names one |
| 9 | **Backup approver** named | | [ ] | D14 |
| 10 | Feedback SLA agreed (same-day / next-day) | Slow review directly delays tuning and sign-off. | [ ] | D14 |
| 11 | Brand-name decision | | [x] | D3 — KidTechies, tagline AI for Kids, 2026-10-18 |
| 12 | Analytics tool installed? (Plausible / Fathom / Umami) | Agent 4 input. | [x] | D2 — Umami Cloud, live 2026-11-09 |
| 13 | Custom events for mission start / mission complete | Two of the six weekly metrics. Pageviews alone will not do it. | [x] | D2 — `mission_start`, `mission_complete` and `email_captured` all seen on a live run, 2026-11-20 |
| 14 | Parent email capture live? | Metric 4 of 6. | [x] | D2 — live and tested end to end, 2026-11-07 |
| 15 | Payment export available with agreed fields | Metrics 5 and 6. No card data required. | [ ] | `npm run marketing:weekly-export` writes it; first run needs a **live** Stripe key (it refuses a test key) |
| 16 | Target cities / school types approved | School Outreach boundary. | n/a | School Outreach paused (D12); cities come with each request |
| 17 | Native Arabic reviewer named | | [ ] | D6 |
| 18 | Legal/privacy owner named (child data, marketing consent, outreach) | Development implements approved policy; it does not substitute for advice. | [ ] | |
