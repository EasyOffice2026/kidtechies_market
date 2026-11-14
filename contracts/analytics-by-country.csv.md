---
file: analytics-by-country.csv.md
owner: Developer (schema) / Ibrahim (supplies the export)
version: 1.0-FROZEN
created: 2026-10-18
---

# Data contract: weekly analytics by country

**Optional.** The Funnel Analyst runs without it. When it is present, the
analyst adds a "where it is working" section — the measurement behind the
client's decision to concentrate on the countries that respond best (D12).

Delivered to: `Drive/kidtechies-marketing/inbox/analytics-by-country-YYYY-MM-DD.csv`
Source: Plausible → the site dashboard → **Locations / Countries**, filtered to
the week, with the goals `mission_start` and `mission_complete`. Plausible
derives country without cookies and without storing the visitor's IP address.

## Columns

| Column | Type | Meaning |
|---|---|---|
| `week_starting` | ISO date `YYYY-MM-DD` | Monday; must match the main analytics export |
| `country` | ISO 3166 alpha-2 | e.g. `KW`, `AE`, `GB`, `US`, `IN` |
| `visitors` | integer | Unique visitors from that country |
| `mission_1_starts` | integer | `mission_start` events for the free mission |
| `mission_1_completions` | integer | `mission_complete` events for the free mission |

One row per country with at least one visitor. Same formatting rules as
`analytics-csv.md`: plain integers, no blanks, exact column names.

## Rules

- **Aggregates only.** A country and a count — never a city, an IP address or a
  visitor.
- The analyst ranks only countries with **30 or more visitors** that week, and
  says how many it left out. Thirty is low enough to see a market emerging and
  high enough that one enthusiastic family does not crown a country.
- Sales by country are deliberately **not** in this file: Stripe holds billing
  countries, and matching them to sign-ups is a later step, once the visit
  numbers show which countries are worth the work.
