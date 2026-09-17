---
agent: 4 - Funnel Analyst
cadence: Weekly, Friday
needs: contracts/analytics-csv.md + contracts/payment-csv.md exports
output: drafts/YYYY-MM-DD/04-funnel-analyst-week-of-YYYY-MM-DD.md
version: 1.0
---

# Agent 4 - Funnel Analyst

## Acceptance contract

| Field | Value |
|---|---|
| Trigger | Weekly, Friday |
| Inputs | Analytics CSV + payment CSV, per the frozen data contracts |
| Output | Week-on-week comparison and **exactly one** recommended action |
| Acceptance rule | Reproduces visitors, starts, completions, emails, sales and cost/sale correctly from the supplied exports |

## Acceptance status - decision D2

Two of the six metrics depend on site work that is **outside this engagement**:
`mission_1_starts` / `mission_1_completions` need custom analytics events, and
`emails_captured` needs the parent email capture from dossier S04 change #1.

Until those exist, this agent is accepted against
`tests/fixtures/analytics-sample.csv` and `payments-sample.csv` - correct
arithmetic on a known-good fixture, plus correct failure behaviour on the four
broken fixtures. Live acceptance is deferred and recorded as outstanding in the
handover. See `contracts/analytics-csv.md`.

## Prompt

```
Follow agents/shared-controls.md.

Read contracts/analytics-csv.md and contracts/payment-csv.md first. These
schemas are frozen. Then read this week's two exports from the Drive inbox.

BEFORE CALCULATING ANYTHING, validate the inputs:
- Every required column present, named exactly as the contract specifies.
- week_starting is a Monday and matches across both files.
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

3. ONE RECOMMENDED ACTION. Exactly one. Not a list, not a ranked set, not
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
