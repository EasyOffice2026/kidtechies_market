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
Source: Umami Cloud (live since 2026-11-09) and the product database — produced by
`npm run marketing:weekly-export` in the product repository. See below.

## Required columns

| Column | Type | Meaning | Notes |
|---|---|---|---|
| `week_starting` | ISO date `YYYY-MM-DD` | Monday of the reporting week | Must be a Monday |
| `visitors` | integer | Unique visitors, all pages | Metric 1 of 6 |
| `mission_1_starts` | integer | Count of the mission-start event | Metric 2 of 6 - **custom event, not a pageview** |
| `mission_1_completions` | integer | Count of the mission-complete event | Metric 3 of 6 - **custom event** |
| `emails_captured` | integer | Parent email opt-ins | Metric 4 of 6 |
| `pricing_page_views` | integer | Views of the pricing page | Context for conversion |

## How the file is produced (2026-11-13)

The two custom events this contract once called missing are live: the mission
player fires `mission_start` and `mission_complete` (once per session, and a
completion only after a counted start), and the mailing list records each
confirmation. Nobody assembles the file by hand.

In the product repository (`.env.local` needs `UMAMI_API_KEY`,
`NEXT_PUBLIC_UMAMI_WEBSITE_ID`, `DATABASE_URL` and `STRIPE_SECRET_KEY`):

```
npm run marketing:weekly-export -- --prev-spend 42.00 --spend 63.00 --out "<marketing folder>\inbox"
```

| Column | Taken from |
|---|---|
| `visitors` | Umami stats for the week |
| `mission_1_starts` / `mission_1_completions` | Umami event data: `mission_start` / `mission_complete` where `mission` is the free mission (`ai-detective-academy/picture-clue-patrol`) |
| `emails_captured` | Addresses **confirmed** that week, whatever their status now |
| `pricing_page_views` | Umami page views of `/pricing` |

Weeks run Monday 00:00 to Monday 00:00 **UTC**. The file holds two rows, last
week then this week, because the analyst compares them. The output format is
checked byte for byte against `tests/fixtures/analytics-sample.csv` by
`npm run check:weekly-export`.

Live acceptance of the Funnel Analyst (Part 3 exit criterion) is the first
Friday it runs on this file.

### On Umami's free plan (the plan in use, 2026-11-15)

Umami Cloud's free plan has no API, so the four Umami numbers are read off the
dashboard and typed in, each as `last week,this week`. `emails_captured`
and the payment file stay automatic; `UMAMI_API_KEY` is not needed.

```
npm run marketing:weekly-export -- --visitors 40,52 --starts 9,11 --completions 6,8 --pricing-views 3,4 --prev-spend 0 --spend 0 --out "<marketing folder>inbox"
```

Once: Umami → Settings → Preferences → **Timezone: UTC**, so the dashboard's
weeks match the file's. Then, for each week (Monday to Sunday, custom range):

| Flag | Where on the dashboard |
|---|---|
| `--visitors` | The website's **Visitors** total |
| `--pricing-views` | **Pages** table, the `/pricing` row (views) |
| `--starts` | **Events** → `mission_start` → property `mission` → `ai-detective-academy/picture-clue-patrol` |
| `--completions` | The same, for `mission_complete` |

The command refuses anything but two whole numbers per flag, and warns when
completions exceed starts (usually two numbers swapped).

## Rules

- No personal data. Aggregate counts only. An export containing individual
  visitor records is rejected unread (`child-safety-rules.md`).
- One row per week. Empty week = a row of zeros, not a missing row.
- Integers only. No thousands separators, no percentage signs, no blanks -
  use `0`.
