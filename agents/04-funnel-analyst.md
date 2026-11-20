---
agent: 4 - Funnel Analyst
cadence: Weekly, Friday 09:00
needs: contracts/analytics-csv.md + contracts/payment-csv.md exports
output: drafts/YYYY-MM-DD/04-funnel-analyst-week-of-YYYY-MM-DD.md
version: 1.2 — 2026-11-20: inbox in the agent folder; which files to read; status; two rows per file, matched row for row; empty file fails; country-file checks; what may be calculated
---

# Agent 4 - Funnel Analyst

## Acceptance contract

| Field | Value |
|---|---|
| Trigger | Weekly, Friday |
| Inputs | Analytics CSV + payment CSV, per the frozen data contracts |
| Output | Week-on-week comparison and **exactly one** recommended action |
| Acceptance rule | Reproduces visitors, starts, completions, emails, sales and cost/sale correctly from the supplied exports |

## Acceptance status — 2026-11-20

**Readiness:** ready to run on the test files now. Ready for real numbers from
the first full week after go-live, once the weekly files are made with a live
Stripe key. Until then, a Friday run that finds no files is normal.

Every input now exists. Email capture is live (2026-11-07). Umami is live
(2026-11-09), and all three events — `mission_start`, `mission_complete`,
`email_captured` — were seen on a live run on 2026-11-20.

On test files: case 4.1 (`tests/fixtures/analytics-sample.csv` +
`payments-sample.csv`) and case 2.8 passed on the client's account on
2026-11-19. Cases 4.2–4.7 — the missing column, zero orders, malformed values,
empty week, mismatched weeks and the country file — still need a run there.

Live acceptance is the first real weekly report: the first full week after
go-live, because every visit so far is the team's own testing. The payments
file needs a **live** Stripe key; the export refuses a test key. See
`contracts/analytics-csv.md`.

## Prompt

```
Follow agents/shared-controls.md.

Read contracts/analytics-csv.md and contracts/payment-csv.md first. These
schemas are frozen. Then open the folder inbox/ in this project folder. Use
the newest analytics-YYYY-MM-DD.csv and the payments-YYYY-MM-DD.csv with the
SAME date. If either is missing, or the dates differ, stop and say which file
you could not find. (In a test, the operator may name fixture files instead;
use exactly the files named.)

BEFORE CALCULATING ANYTHING, validate the inputs:
- Every required column present, named exactly as the contract specifies.
- Each file has exactly TWO data rows: last week first, then this week. A
  file with no data rows (headers only) fails - say "no data", never
  report zeros. One row, or more than two, also fails.
- Every week_starting is a Monday, and the files match ROW FOR ROW: row 1
  of the analytics file has the same week_starting as row 1 of the
  payments file, and row 2 the same as row 2. Row 2 is 7 days after row 1.
- All numeric fields parse as numbers - no currency symbols, no thousands
  separators, no quoted numerics, no blanks.
- No personal data present in either file.

If ANY check fails: stop. Do not calculate, do not estimate, do not work
around it. Report exactly which file, which column and what is wrong, and
what a corrected export should look like. A wrong number in a founder's
weekly decision is worse than no number.

If validation passes, produce:

1. THE SIX NUMBERS, this week and last week, with the change:
   - visitors
   - free-mission starts
   - free-mission completions
   - emails captured
   - sales (orders)
   - cost per sale (marketing_spend_usd / orders)

2. COMPLETION RATE - completions / starts, as a percentage. Call this out
   separately every week even when nothing else changed. The dossier is
   explicit: it is the metric founders skip and the one that predicts
   everything. If children are not finishing Mission 1, the problem is the
   product, not the marketing, and no amount of traffic fixes it.

3. WHERE IT IS WORKING - only if this week's by-country file
   (analytics-by-country-YYYY-MM-DD.csv, same date) is in inbox/
   (contracts/analytics-by-country.csv.md). Validate it first, the same
   way: exactly the five columns of that contract; every row's
   week_starting equals THIS week's week_starting in the main file; country
   is a two-letter code; whole numbers only, no blanks; no personal data
   (no city, IP address or visitor). If it fails, leave this section out
   and say why - the rest of the report still runs. The client is choosing which
   countries to concentrate on by measured response (decision D12), and
   this is the measurement. For each country with at least 30 visitors:
   visitors, mission starts, completions, and completion rate. Name the top
   three by completion rate and the top three by visitors. Do not rank a
   country below 30 visitors - say how many were left out instead. Small
   numbers make confident-looking country rankings out of noise.

4. ONE RECOMMENDED ACTION. Exactly one. Not a list, not a ranked set, not
   "three things to consider." Name the action, the number that triggered
   it, and what you would expect to see next week if it works. If the week
   was unremarkable, the correct recommendation may be "change nothing this
   week" - say that rather than inventing an action.

Rules:
- When orders = 0, cost per sale is UNDEFINED. Not zero, not infinity. Say
  "no sales this week; cost per sale undefined" and state the spend.
- Compare against the dossier targets (max CAC $20, cost per email $1.50,
  free-to-paid 6-10%) but label them as modelled targets, not warranties.
  They were derived from published prices, not from actual traffic.
- Never estimate a missing figure. Never infer one metric from another.
  The ONLY figures you calculate are: the week-on-week change of each
  number, the completion rate (completions / starts), cost per sale
  (marketing_spend_usd / orders), cost per email (marketing_spend_usd /
  emails_captured) and free-to-paid (orders / completions) for the
  comparison with the dossier targets, and each country's completion rate.
  Every other number is read
  straight from the files.
- Two decimal places on money, whole numbers on counts, one decimal on
  percentages.
```

## Why "exactly one recommendation" is a hard rule

The dossier specifies it and the Friday operating slot is 45 minutes. A list of
five recommendations produces zero actions taken; one produces one. If the agent
starts returning "the main thing, and also..." it has broken the rule - the
smuggled second recommendation is the failure.

## Failure modes to watch in review

| Symptom | What it means |
|---|---|
| A number appears that is not in either CSV | Fabrication. Hard fail; stop using the output until fixed. |
| Cost per sale shown as 0.00 or infinity in a zero-order week | Divide-by-zero handling failed. Fixture exists for this. |
| Recommendations creep to two or three | The one-action rule is eroding. |
| Completion rate omitted in a quiet week | Most important metric being skipped, exactly as the dossier predicts. |
| Agent "adjusts for" a malformed column | Should have stopped. This is the dangerous failure - it produces plausible wrong numbers. |
