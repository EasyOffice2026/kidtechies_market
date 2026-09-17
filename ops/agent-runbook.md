---
file: agent-runbook.md
owner: Developer -> KidTechies at handover
version: 1.0
---

# Agent runbook

Cadence, inputs, outputs and failure behaviour for all six agents. The
operational reference; `operator-guide.md` is the daily one.

## At a glance

| # | Agent | Cadence | Needs | Writes to |
|---|---|---|---|---|
| 1 | Market Listener | Mon 07:00 | Web research | `01-market-listener-briefing.md` |
| 2 | Content Factory | Mon/Wed/Sat 08:00 | Knowledge base + queue | `02-content-factory-*.md` (4 files) |
| 3 | Arabic Localiser | On demand | Approved English asset | `03-arabic-*.md` |
| 4 | Funnel Analyst | Fri | Two CSVs in Drive inbox | `04-funnel-analyst-week-of-*.md` |
| 5 | Creative Tester | Fortnightly | Results log | `05-creative-tester-round-N.md` |
| 6 | School Outreach | Tue | Web research + prospect log | `06-school-outreach-batch-N.md` |

All paths are under `drafts/YYYY-MM-DD/`.

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
| Tue | `06-school-outreach.md` |
| Wed | `02-content-factory.md` |
| Fri | `04-funnel-analyst.md` |
| Sat | `02-content-factory.md` |
| Alt. Mon | `05-creative-tester.md` |

Cost: roughly five minutes a day of copy-paste. Everything else — knowledge
base, self-checks, Drive delivery, approval discipline — is unchanged, because
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
