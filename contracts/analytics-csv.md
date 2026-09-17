---
file: analytics-csv.md
owner: Developer (schema) / Client (supplies the export)
version: 1.0-FROZEN
---

# Data contract: weekly analytics export

**Frozen.** A change to this schema is a change request, not a tweak. The Funnel
Analyst fails loudly on a missing or renamed column rather than guessing - that
is the designed behaviour, and it is why the contract is frozen.

Delivered to: `Drive/kidtechies-marketing/inbox/analytics-YYYY-MM-DD.csv`
Cadence: weekly, before Friday's run.
Source: the cookieless analytics tool (Plausible, Fathom or self-hosted Umami).

## Required columns

| Column | Type | Meaning | Notes |
|---|---|---|---|
| `week_starting` | ISO date `YYYY-MM-DD` | Monday of the reporting week | Must be a Monday |
| `visitors` | integer | Unique visitors, all pages | Metric 1 of 6 |
| `mission_1_starts` | integer | Count of the mission-start event | Metric 2 of 6 - **custom event, not a pageview** |
| `mission_1_completions` | integer | Count of the mission-complete event | Metric 3 of 6 - **custom event** |
| `emails_captured` | integer | Parent email opt-ins | Metric 4 of 6 |
| `pricing_page_views` | integer | Views of the pricing page | Context for conversion |

## The two columns that do not exist yet

`mission_1_starts` and `mission_1_completions` are **custom events**. No
analytics tool produces them from a default install - somebody has to fire them
from the mission player. Likewise `emails_captured` requires the parent email
capture from dossier S04 change #1.

Both are outside this engagement's scope (decision D2). This is the single most
commonly missed item on the whole project, because it looks like an analytics
task and is actually a front-end task.

The dossier is blunt about why completion matters most:

> Completion rate is the one most founders skip and the one that predicts
> everything: if children do not finish Mission 1, no amount of traffic will
> save the funnel, and the problem is the product, not the marketing.

## Until those events exist

The Funnel Analyst runs against `tests/fixtures/analytics-sample.csv` and is
accepted on **correct arithmetic against a known-good fixture**, not on live
data. Live acceptance is deferred and recorded as outstanding in the handover.
Nobody signs off a metric the site cannot yet produce.

## Rules

- No personal data. Aggregate counts only. An export containing individual
  visitor records is rejected unread (`child-safety-rules.md`).
- One row per week. Empty week = a row of zeros, not a missing row.
- Integers only. No thousands separators, no percentage signs, no blanks -
  use `0`.
