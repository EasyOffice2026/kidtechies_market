# What we need from your analytics and payment tools

**To:** The Management, KidTechies
**From:** Senior Developer · ref KT/DEV/2026-001
**Date:** _____________
**Needed by:** Day 4 — please start this today, not on Day 3

---

## The short version

One of the six agents — the Funnel Analyst — reads two spreadsheets every Friday
and tells you the six numbers that govern the business, plus one thing to do
about them. This document is exactly what those two spreadsheets must contain.

We are sending it on Day 1 rather than Day 4 because **one of the columns does
not exist yet on your site, and finding that out on Day 4 would be too late.**
See the warning below.

Sample files are attached so you can hand them to whoever builds the export:
`analytics-sample.csv` and `payments-sample.csv`.

> *Developer note: attach both from `tests/fixtures/`. Send the two clean
> samples only — not the four deliberately broken fixtures.*

---

## File 1 — weekly analytics export

Save to `Drive/kidtechies-marketing/inbox/analytics-YYYY-MM-DD.csv`

| Column | Example | What it is |
|---|---|---|
| `week_starting` | `2026-09-14` | Monday of the week |
| `visitors` | `507` | Unique visitors, all pages |
| `mission_1_starts` | `131` | Times a child began the free mission |
| `mission_1_completions` | `58` | Times a child finished it |
| `emails_captured` | `34` | Parent email opt-ins |
| `pricing_page_views` | `112` | Views of the pricing page |

## ⚠ The part that needs building

**Three of these six columns do not exist today**, and none of them appears
simply by installing an analytics tool:

- `mission_1_starts` and `mission_1_completions` are **custom events**. Someone
  has to add a line to the mission player that fires when a child begins and
  finishes. An analytics install alone will never produce them — it counts page
  views, and starting a mission is not a page view.
- `emails_captured` needs the parent email capture the Growth Dossier recommends
  at the end of the free mission.

This looks like an analytics task. It is a front-end development task, and it is
the single most commonly missed item on projects like this one. It is also
outside our engagement scope, so it needs an owner on your side.

**Why we are making a fuss about completion rate.** Of the six numbers, it is
the one the Growth Dossier singles out:

> Completion rate is the one most founders skip and the one that predicts
> everything: if children don't finish Mission 1, no amount of traffic will save
> the funnel, and the problem is the product, not the marketing.

If children start the mission and stop halfway, every dinar you spend on
traffic is wasted, and no amount of better marketing fixes it. You cannot see
that without these two columns. It is worth the half-day.

**If it cannot be built in time:** tell us, and we will accept the Funnel Analyst
against our test files instead. It will be proven to calculate correctly, and we
will note in the handover that it has not yet been proven against your live
data. That is an honest deferral, not a failure — but you should decide it
knowingly rather than discover it on Day 4.

---

## File 2 — weekly payment export

Save to `Drive/kidtechies-marketing/inbox/payments-YYYY-MM-DD.csv`

| Column | Example | What it is |
|---|---|---|
| `week_starting` | `2026-09-14` | Must match the analytics file |
| `orders` | `7` | Completed orders |
| `gross_revenue_usd` | `460.00` | Before fees |
| `fees_usd` | `16.10` | Processor fees |
| `refunds_usd` | `70.00` | Refunds issued, `0.00` if none |
| `marketing_spend_usd` | `63.00` | All ad and creator spend that week |

### No card data. Ever.

Business fields only — no card numbers, no last four digits, no cardholder
names, no billing addresses, no customer email addresses. If any of these appear
in the file, the agent stops, tells you what it found, and processes nothing.

A sanitised or manually assembled export is completely fine and is what we would
prefer.

---

## Formatting rules

These are strict, and deliberately so. The agent refuses to guess.

- **Plain numbers.** `460.00`, not `$460.00`, not `460`, not `"460"`.
- **No thousands separators.** `1200`, not `1,200`.
- **No blanks.** Use `0` or `0.00`.
- **ISO dates.** `2026-09-14`. `week_starting` must be a Monday.
- **Column names exactly as written above** — lower case, underscores.
- **One row per week.** A week with no activity is a row of zeros, not a missing
  row.

If a column is renamed or missing, the agent stops and tells you which one
rather than working around it. That is intentional: a wrong number in your
Friday decision is worse than no number, and an agent that quietly "adjusts for"
a malformed column produces confident, plausible, wrong answers that survive
review.

---

## What you get back, every Friday

A one-page note with the six numbers, this week against last week, the
completion rate called out separately, and **exactly one** recommended action —
not a list. One action gets taken; five get ignored.

It will compare against the Growth Dossier's targets (maximum viable customer
acquisition cost $20, cost per email $1.50, free-to-paid 6–10%) and will label
them as modelled targets, because they were calculated from your published
prices rather than from real traffic. Once these exports are flowing, those
modelled numbers get replaced with actual ones — which is the real reason this
file matters.

---

**Who is building the export on your side?** _______________

**Realistic date for the two custom events:** _______________
