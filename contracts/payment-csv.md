---
file: payment-csv.md
owner: Developer (schema) / Client (supplies the export)
version: 1.0-FROZEN
---

# Data contract: weekly payment export

**Frozen.** Same rule as the analytics contract: a renamed column is a hard
failure, not something the agent works around.

Delivered to: `Drive/kidtechies-marketing/inbox/payments-YYYY-MM-DD.csv`
Cadence: weekly, before Friday's run.

## Required columns

| Column | Type | Meaning | Notes |
|---|---|---|---|
| `week_starting` | ISO date `YYYY-MM-DD` | Monday of the reporting week | Must match the analytics export |
| `orders` | integer | Completed orders in the week | Metric 5 of 6 |
| `gross_revenue_usd` | decimal, 2dp | Gross before fees | |
| `fees_usd` | decimal, 2dp | Payment processor fees | |
| `refunds_usd` | decimal, 2dp | Refunds issued in the week | `0.00` if none |
| `marketing_spend_usd` | decimal, 2dp | Total ad and creator spend for the week | Needed for metric 6 |

## No card data. Ever.

Business fields only. No card numbers, no last-four, no cardholder names, no
billing addresses, no customer emails. If the export contains any of these, the
Funnel Analyst stops, says what it found, and processes nothing
(`child-safety-rules.md`).

A sanitised export is perfectly acceptable and preferred.

## Derived metric

`cost_per_sale = marketing_spend_usd / orders` - metric 6 of 6.

When `orders` is `0`, cost per sale is **undefined**, not zero and not infinity.
The agent reports "no sales this week; cost per sale undefined" and states the
spend. Dividing by zero silently is the classic failure here and
`tests/cases.md` has a fixture for it.

## Context the analyst should hold

The dossier's economics (S07): a one-time $70 purchase nets roughly $68 after
fees, which caps lifetime value and sets every other limit.

- Max viable CAC: **$20** (3.4x payback on the bundle)
- Target cost per email captured: **$1.50**
- Free-to-paid target: **6-10%** of Mission 1 finishers

These are the dossier's modelled targets, taken from published prices rather
than actual traffic. The analyst may compare against them, but must label them
as targets - they are not warranties and KT/DEV/2026-001 section 8.2 is explicit
that no business outcome is guaranteed by this system.
