---
file: creative-results.schema.md
owner: Developer
version: 1.0-FROZEN
---

# Record schema: creative results log

One row per variant. Maintained as a Sheet/CSV in Drive.

| Field | Type | Required | Notes |
|---|---|---|---|
| `variant_id` | string | yes | `V-001` ascending |
| `pillar` | integer 1-5 | yes | Message pillar from `audience.md`. **Numbering is fixed** across audience.md, Agent 5 and the paid tests. |
| `round` | integer | yes | Fortnightly round number |
| `format` | enum | yes | `headline` / `hook` |
| `varied_from` | string | no | `variant_id` this is a variation of |
| `what_varied` | string | yes | The single thing changed. `n/a` only for a round-1 original. |
| `copy` | string | yes | The actual text |
| `platform` | string | yes | |
| `spend_usd` | decimal | no | |
| `impressions` | integer | no | |
| `clicks` | integer | no | |
| `ctr_pct` | decimal 1dp | no | Derived |
| `status` | enum | yes | `pending` / `running` / `keep` / `iterate` / `kill` |
| `decision_basis` | string | conditional | **Required when status is keep/iterate/kill** |
| `date_logged` | ISO date | yes | |

## Validation rules

1. A `keep` / `iterate` / `kill` status without `decision_basis` is **invalid**.
   Every verdict names the number behind it.
2. `what_varied` listing more than one change makes the result uninterpretable -
   flag it rather than analysing it.
3. `ctr_pct` is derived, never entered by hand.
4. The dossier's kill threshold is under 1% CTR by day 10 - but a verdict on
   fewer than a few hundred impressions should say so in `decision_basis`
   rather than pretending to significance.
