---
file: handover.md
owner: Developer -> KidTechies
audience: The client. Written to be read once, then kept.
date: 2026-11-13 (replaces the version of 2026-09-21); updated 2026-11-20 — safe folder update, test position
ref: KT/DEV/2026-001
---

# Handover — KidTechies marketing system

## What you have

| Part | What it is | State |
|---|---|---|
| **1 · Website** | kidtechies.com: the KidTechies name, pricing, parents and teachers pages, privacy wording that matches what the site does | Live since 2026-11-07 |
| **2 · Parent email list** | Sign-up after the free mission → confirmation → printable sheet → five welcome emails → a weekly question. One-click unsubscribe | Live and tested end to end, 2026-11-07 |
| **2 · Analytics** | Umami: visits, free-mission starts and completions, sign-ups. No cookies; the privacy page says so | Live since 2026-11-09; all three events seen on a live run, 2026-11-20 |
| **3 · Six AI agents** | Draft marketing work on a schedule, on your Claude account. A person approves everything; nothing publishes by itself | Built. Scheduled tasks proven on your account 2026-11-12 (D4). Safety tests 8/8 on your account, 2026-11-19 |

| Deliverable | Where (marketing repository) |
|---|---|
| Knowledge base — what the agents may say | `knowledge/` |
| Content queue | `queue/content-queue.md` |
| Six agent prompts + shared controls | `agents/` |
| Brand-voice skill (uploaded to Claude) | `skills/kidtechies-voice/` |
| Data contracts for the weekly numbers | `contracts/` |
| Test pack and fixtures | `tests/` |
| Daily guide, runbook, decision log, publishing log | `ops/` |
| Future product plan (your vision of 11 November) | `ops/product-roadmap.md` |

## How it works, in one paragraph

Five files in `knowledge/` decide what may be said about KidTechies. Each
agent reads them before every run and writes drafts into a dated folder.
Your approver reads the drafts each morning, approves or edits, posts by hand
and logs it. No agent can state a product number that is not in
`knowledge/product-facts.md`, address a child, or ask for a child's data —
these are tested, not hoped for. Start with `ops/operator-guide.md`.

## Running it on your computer

- The agents run in **Claude → Cowork**, in the project **kidtechies**, linked
  to the folder `D:\marketing agent\kidtechies_market-develop` on DESKTOP-2VR6VB1.
  The path must not change, or the project must be re-linked.
- Scheduled tasks run only while that computer is **on and the Claude app is
  open**. An office PC that stays on is the right home.
- Drafts land in `drafts\<date>\` in that folder, on that computer. No Google
  Drive is used.

### Updating the folder safely

Five things in that folder are **your** records. The download from GitHub does
not have your copies, so replacing the folder without them would wipe them:
`drafts\`, `inbox\`, `logs\`, `queue\content-queue.md` and
`ops\publishing-log.md`.

1. Close the Claude app, so no task runs during the update.
2. Copy those five out — for example into `D:\kidtechies-keep\`, keeping the
   same sub-folders.
3. Download the `develop` ZIP from GitHub and unzip it. Delete everything in
   `D:\marketing agent\kidtechies_market-develop`, then put the unzipped files
   in. Same folder, same path.
4. Copy the five back in, replacing the downloaded copies. **Exception:** if the
   developer says a release changed the queue or a log, the developer merges
   that file with yours instead.
5. Open the Claude app. In the kidtechies project, ask: *"Tell me the version
   line of knowledge/product-facts.md."* It must match the version on GitHub.
   If it shows the old one, the files went to a different folder — the agents
   are still reading the old facts.
- Your plan is **Claude Pro**. Watch usage in the first two weeks; if the
  agents hit the limit, move to a larger plan or run fewer cadences (D7).

## Your week

| When | Who | What |
|---|---|---|
| Every morning, ~20 minutes | Approver | Review today's drafts. **Until D1, review only — nothing is posted.** After D1: post what you approve; one line in `ops/publishing-log.md` |
| Monday | Approver | Market Listener's briefing. If it proposes queue topics, add the ones you want |
| Thursday | Developer (for now) | Weekly numbers — one command, with your ad spend for the week — copied into this folder's `inbox\` before Friday. The first real week is the first full week after go-live |
| Friday | Approver | Funnel Analyst's six numbers and **one** recommended action |

## Test position

| Class | Result | Where it ran |
|---|---|---|
| Safety (8 cases) | 8/8 in the build session; **8/8 on your account, 2026-11-18/19, no failures** | Your account |
| Data ingestion (7 cases) | 6/6 + 1 added since; the main case (4.1) **passed on your account, 2026-11-19** | 4.2–4.7: build session — re-run on your account |
| Approval discipline | 4/4 | Build session |
| Scheduling | A test task ran on time on your account, 2026-11-12 (D4). Cases 5.1, 5.2 and 5.6 — the real schedule, no duplicates, a fresh session — not yet run on your account | Your account |
| Knowledge accuracy (8 cases) | Not yet run | Needs the approved facts |
| Website and email list | Sign-up, confirmation, welcome email, sheet, unsubscribe all passed | Live site, 2026-11-07 |

`ops/developer-test-guide.md` is the step-by-step for the remaining runs.

## What we need from you

| # | Item | Blocks |
|---|---|---|
| D1 | Reply "approved" to the fact list (page 2 of `ops/client/KidTechies-Email-Review.docx`) | Anything published |
| D14 | Name the approver, a backup, and a turnaround | Every publication |
| — | Make the GitHub repository `EasyOffice2026/kidtechies_market` **private** (Settings → General → Danger Zone) | Your strategy documents are public today |
| D17 | Move Vercel, GitHub, Resend and Umami to accounts you own; Vercel to Pro | You deploying without the developer |
| D6 | A native Arabic reviewer | Arabic content and the Arabic page |
| D15 | A postal address for the email footer | Emailing US parents |
| D11 | Legal review of privacy and terms — your call | Legal certainty |
| D16 | A small ad test, or pause the Creative Tester | Agent 5; cost per sale |
| — | Logo artwork reading "KidTechies" | The header and footer |

D1 and D14 unblock the most.

## Known limitations — read before you rely on it

1. **School outreach is paused** (D12). Gulf schools rarely publish staff
   emails; the agent will not guess one. It runs on request and drafts only.
2. **The weekly numbers need one person once a week** until the export is
   scheduled: ad spend is the one figure no system here knows.
3. **The knowledge base is still draft.** Until D1, every draft carries a
   "not yet client-confirmed" notice and must not be posted.
4. **Weekly email questions are seed drafts.** Twenty-six, half a year before
   a repeat; the approver should read them once.
5. **This system makes no business promises.** It reduces drafting work and
   keeps the message consistent and safe. It does not guarantee sign-ups,
   sales, rankings or ad results.

## When to call the developer

An agent states a fact it cannot trace, twice. A draft describes itself as
published. A safety rule is broken in output rather than refused. A weekly
file is rejected by the Funnel Analyst. An alert email arrives about the daily
email run.

New channels, new agents, a new language, publishing automation, and anything
in `ops/product-roadmap.md` are new work, quoted separately.

## Stage 2 — publishing automation

Start only when Stage 1 has run long enough to show which two or three agents
save real time, publishing (not approving) has become the bottleneck, and the
channel credentials and an approval owner exist. Not before December.
