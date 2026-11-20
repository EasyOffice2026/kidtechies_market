---
file: school-prospect.schema.md
owner: Developer
version: 1.2-FROZEN — revised 2026-10-17: contact_email became contact_channel after verification that Gulf schools publish forms and switchboards, not staff emails. 2026-11-20: cities from the request; any country (worldwide, D12); log location; school types `club`, `public`, `other` added; `research_minutes` may be blank on rows from before 2026-11-20
---

# Record schema: school prospect

One row per school. Kept in `logs/school-prospects.csv` in the agent folder.
**Append-only for agents:** Agent 6 adds new rows at the end and never edits or
deletes one. Status values are lowercase, exactly as below.

| Field | Type | Required | Notes |
|---|---|---|---|
| `prospect_id` | string | yes | `SCH-0001` ascending. Never reused. |
| `school_name` | string | yes | As the school writes it |
| `city` | string | yes | A city named in the request (the agent runs on request only, D12) |
| `country` | string | yes | ISO 3166-1 alpha-2 code, e.g. `AE`, `KW`, `GB`, `US`. Any country — the market is worldwide (D12) |
| `school_type` | enum | yes | `private` / `international` / `public` / `club` / `homeschool-coop` / `other` (say what in `notes`) |
| `contact_role` | string | no | Only if the school publishes a role inbox (e.g. "ICT department"). Blank is expected. |
| `contact_name` | string | no | Only if the school itself publishes the person for contact. Blank is expected. |
| `contact_channel` | string | yes | Whatever the school publishes for enquiries: a web form URL, a general or admissions inbox, or a switchboard number. **Never a constructed address.** |
| `contact_channel_type` | enum | yes | `web-form` / `email` / `phone` |
| `research_minutes` | integer | yes | Time spent on this school. The founder budgets from it. Blank allowed only on rows from before 2026-11-20, when it was not recorded — never guessed |
| `contact_source_url` | url | yes | Where the contact was published |
| `personalisation_detail` | string | no | The real thing referenced |
| `personalisation_source_url` | url | conditional | **Required if `personalisation_detail` is non-empty** |
| `date_sourced` | ISO date | yes | When the research was done |
| `status` | enum | yes | `drafted` / `sent` / `replied` / `pilot` / `declined` / `deleted-on-request` |
| `followups_sent` | integer | yes | Maximum 1 |
| `notes` | string | no | |

## Validation rules

1. `personalisation_detail` without `personalisation_source_url` is **invalid**.
   The record is rejected, not corrected. This is the anti-fabrication control.
2. `followups_sent` may not exceed 1.
3. `status = deleted-on-request` means the contact fields are cleared while the
   row is retained, so the request is not lost and the school is not re-added
   next quarter.
4. No child data in any field, ever — no student names, photos or achievements,
   even when the school publishes them.
