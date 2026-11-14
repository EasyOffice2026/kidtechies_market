---
file: school-prospect.schema.md
owner: Developer
version: 1.1-FROZEN — revised 2026-10-17: contact_email became contact_channel after verification that Gulf schools publish forms and switchboards, not staff emails
---

# Record schema: school prospect

One row per school. Maintained as a Sheet/CSV in Drive; handed to the client at
handover.

| Field | Type | Required | Notes |
|---|---|---|---|
| `prospect_id` | string | yes | `SCH-0001` ascending. Never reused. |
| `school_name` | string | yes | As the school writes it |
| `city` | string | yes | Must be an approved target city |
| `country` | string | yes | SA / AE / QA / KW |
| `school_type` | enum | yes | `private` / `international` / `homeschool-coop` |
| `contact_role` | string | no | Only if the school publishes a role inbox (e.g. "ICT department"). Blank is expected. |
| `contact_name` | string | no | Only if the school itself publishes the person for contact. Blank is expected. |
| `contact_channel` | string | yes | Whatever the school publishes for enquiries: a web form URL, a general or admissions inbox, or a switchboard number. **Never a constructed address.** |
| `contact_channel_type` | enum | yes | `web-form` / `email` / `phone` |
| `research_minutes` | integer | yes | Time spent on this school. The founder budgets from it. |
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
4. No child data in any field, ever.
