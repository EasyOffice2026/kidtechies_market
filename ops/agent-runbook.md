---
file: agent-runbook.md
owner: Developer -> KidTechies at handover
version: 1.1 — 2026-11-20: one schedule everywhere; review only until D1; weekly-file delivery
---

# Agent runbook

Cadence, inputs, outputs and failure behaviour for all six agents. The
operational reference; `operator-guide.md` is the daily one.

## At a glance

| # | Agent | Scheduled task | Needs | Writes to |
|---|---|---|---|---|
| 1 | Market Listener | **KT 1** — Mon 07:00 | Web research | `01-market-listener-briefing.md` |
| 2 | Content Factory | **KT 2** — Mon/Wed/Sat 08:00 | Knowledge base + queue | `02-content-factory-<item>-*.md` (5 files, incl. `-self-check`) |
| 3 | Arabic Localiser | Not scheduled — on request, after D1 and D6 | Approved English asset (`approved-by:` first line) | `03-arabic-localiser-<item>.md` |
| 4 | Funnel Analyst | **KT 4** — Fri 09:00 | Two CSVs in `inbox/`, written Thursday by `npm run marketing:weekly-export` | `04-funnel-analyst-week-of-*.md` |
| 5 | Creative Tester | **KT 5** — fortnightly, created only once D16 says to run an ad test | Results log | `05-creative-tester-round-N.md` |
| 6 | School Outreach | Not scheduled — **paused (D12)**, on request only | Web research + prospect log | `06-school-outreach-batch-N.md` |

All paths are under `drafts/YYYY-MM-DD/`. So the client's account has **three**
scheduled tasks today (KT 1, 2, 4), and four once D16 says test.

## The week, for the people around the agents

| When | Who | What |
|---|---|---|
| Daily, before 10:00 | Approver (D14) | Review today's drafts. Approve, edit or reject. **Until D1, review only — nothing is posted.** After D1, post what was approved and add a line to `ops/publishing-log.md` |
| Monday | Approver | Read the Market Listener's **queue check**. Below 6 READY items, add the proposals you accept to `queue/content-queue.md` — the agent proposes, it never edits the queue |
| Thursday | Developer, or whoever holds the product repo | 1. `npm run marketing:weekly-export -- --prev-spend <last week> --spend <this week> --out "<a local folder>\inbox"` — on Umami's free plan, add the four Umami numbers from the dashboard (see `contracts/analytics-csv.md`); ad spend from the approver; a **live** Stripe key. 2. If a country file is wanted, type it up from Umami (`contracts/analytics-by-country.csv.md`). 3. **Copy the files into the client's `D:\marketing agent\kidtechies_market-develop\inbox\` before Friday 09:00.** The first real week is the first full week after go-live |
| Friday | Approver | Read the Funnel Analyst's one recommendation and decide whether to act on it |

The computer that runs the scheduled agents must be **on, with the Claude
app open,** at each run time. A run missed because the machine slept is not
an agent failure; move the schedule or keep the machine awake.

## Expected failure behaviour

Each agent has a designed failure mode. **These are correct behaviours, not
bugs** — an agent that works around a missing input instead of stopping is the
actual fault.

| Agent | Input missing | Correct behaviour |
|---|---|---|
| 1 | No significant news | "Nothing material this week." No padding. |
| 1 | No source for a claim | Omits the claim entirely |
| 2 | No READY queue item | Says the queue is empty; writes nothing |
| 2 | Fact not in `product-facts.md` | Omits it, names what it needed |
| 3 | Asset not approved | Refuses to start |
| 4 | Missing/renamed CSV column | Stops before calculating; names the column |
| 4 | `orders = 0` | "Cost per sale undefined" |
| 5 | Thin sample | Reports it under "what you cannot conclude" |
| 6 | No published contact | General enquiries, or "not published". Never constructs one. |
| All | Knowledge file unreadable | Stops. Does not run on memory. |

## Fallback if scheduled tasks are unavailable — decision D4

KT/DEV/2026-001 section 8 flags that the client's Claude plan may not support
scheduled tasks and says Stage 1 "must be redesigned" — without designing the
alternative. Here it is, so a Day 1 discovery is an inconvenience rather than a
stoppage.

**Manual-trigger mode.** Every agent prompt in `agents/` is self-contained and
works pasted into a fresh session. The cadence becomes a checklist instead of a
scheduler:

| Day | Paste |
|---|---|
| Mon | `01-market-listener.md`, then `02-content-factory.md` |
| Wed | `02-content-factory.md` |
| Fri | `04-funnel-analyst.md` |
| Sat | `02-content-factory.md` |
| Alt. Mon | `05-creative-tester.md` — only once D16 says to run an ad test |

Agents 3 and 6 run only on request, in either mode. (D4 closed on
2026-11-12: the client's plan does run scheduled tasks, so this is the
fallback, not the plan.)

Cost: roughly five minutes a day of copy-paste. Everything else — knowledge
base, self-checks, the agent folder, approval discipline — is unchanged, because
none of it depends on the scheduler. Nothing about Stage 2 changes either.

This is also why the prompts live in version-controlled Markdown rather than
only inside Claude's task UI: they remain portable whatever the platform does.

## Running the test pack

See `tests/cases.md`. Classes 1, 2 and 4 are the critical set. Any class 2
failure blocks sign-off — there is no partial pass on child safety.

## Changing an agent

1. Edit the file in `agents/`.
2. Update the scheduled task (or the checklist) to match.
3. Re-run the affected test class.
4. Commit with what changed and why.

Never edit a live scheduled task without updating the file — the repo is the
source of truth, and a drifted task is untestable and unrecoverable.

## What counts as a scope change

Per KT/DEV/2026-001 section 10.1, a request is a **change request** if it adds a
new public channel, a new data source, a new agent role, a language beyond
Arabic, direct campaign-budget control, website funnel development, CRM work, or
legal/compliance deliverables.

Prompt tuning inside an agreed agent role is not a scope change. "Make the
briefing shorter" is tuning; "also monitor TikTok trends" is a new data source.

## Stage 2 trigger

Three conditions, all true, per section 10.2:

1. Stage 1 has run in daily use long enough to identify the 2–3 agents that save
   meaningful founder time.
2. The client confirms manual publishing is now the bottleneck — not approving.
3. The required channel APIs, credentials and approval owner are available.

Until all three hold, Stage 2 is not started. Most founders find two of the six
agents carry the value; rebuilding all six would be waste.

The design fixes to carry into Stage 2 are recorded in `ops/five-day-plan.md`
under "Carried into Stage 2" — particularly the publish state machine, which has
a double-publish hole as specified.
