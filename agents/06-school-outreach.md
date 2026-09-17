---
agent: 6 - School Outreach
cadence: Weekly, Tuesday
needs: Web research + contracts/school-prospect.schema.md
output: drafts/YYYY-MM-DD/06-school-outreach-batch-N.md
version: 1.0
---

# Agent 6 - School Outreach

## Acceptance contract

| Field | Value |
|---|---|
| Trigger | Weekly, Tuesday |
| Inputs | Target cities and school criteria, public school information, prospect-list schema |
| Output | Verified prospect list + personalised outreach drafts |
| Acceptance rule | Personalisation references something real and sourceable. **No invented contact details or achievements.** |

## Data-protection control

Building lists of named individuals at schools in Saudi Arabia, the UAE and
Qatar engages those countries' data-protection regimes. KT/DEV/2026-001 rightly
excludes legal *advice* - but excluding advice is not the same as having no
control, so the control is here and in `child-safety-rules.md`. (Analysis
finding F11.)

**Until the client's legal/privacy owner sets the policy, the default is:**

- Public sources only - school websites, published staff directories, public
  announcements. No scraping, no inference, no pattern-guessing an address.
- Role-based contacts preferred over named individuals wherever a school
  publishes one.
- Purpose limited to this outreach. No onward sharing, no resale, no
  enrichment from third-party data brokers.
- Deleted on request, and on request means the first request.
- One follow-up maximum, then the prospect is closed.

## Prompt

```
Follow agents/shared-controls.md.

Read knowledge/audience.md (the teacher/homeschool multiplier persona),
knowledge/brand-voice.md, knowledge/claims-allowed.md,
knowledge/child-safety-rules.md and contracts/school-prospect.schema.md.

Build a batch of TEN prospects from the approved target cities and school
types. For each, produce a schema-conformant record and one personalised
outreach draft.

SOURCING RULES - these are hard:
- Public sources only. If the school does not publish a contact, record
  "not published" and use the school's general enquiries address. Never
  construct, guess or pattern-match an email address - not even an obvious
  firstname.lastname format.
- Every personalisation detail carries the URL it came from, in the record.
- If you cannot find a real, sourceable detail about a school, say so and
  send the non-personalised version. A generic honest email beats an
  invented compliment, and a school ICT coordinator can spot a fabricated
  one instantly.
- Prefer a published role inbox over a named individual.

THE OFFER (dossier S05 channel #3):
The full bundle, free, for classroom use, in exchange for a testimonial and
a mention in the parent newsletter.

EACH EMAIL:
- Under 150 words. These people are busy and screen hard.
- Opens with the real, sourced detail about their school.
- Leads with what solves their actual problem: no student accounts, no data
  collected, classroom-ready, printables for the half of the room without a
  device. A data-protection officer needs to hear exactly this.
- One ask. No attachments. No tracking pixels.
- Leave a blank line marked [FOUNDER: add one human line here] - the
  operating rhythm is that the founder adds a personal sentence before
  sending, and the email should have a place for it.

Output the ten records as a table conforming to the schema, plus ten
drafts. Flag any prospect where you were unsure the school fits the
criteria.
```

## Why the founder's line matters

The Tuesday slot in the dossier's weekly rhythm is 40 minutes: *read each draft,
add one human line, send.* That human line is not decoration - it is the thing
that makes the email survive a coordinator's skim, and it is the reason this
agent drafts rather than sends. An agent that produces emails so polished the
founder skips the line has made the outreach worse, not better.

## Failure modes to watch in review

| Symptom | What it means |
|---|---|
| Every prospect has a named individual's direct email | Almost certainly constructed. Spot-check three against the live site. |
| Personalisation is generic praise ("your impressive STEM programme") | Not sourced. Should have been the non-personalised version. |
| A detail has no URL | Fabrication risk. Reject the record. |
| Emails run to 250 words | They will not be read. |
| No `[FOUNDER: ...]` marker | The human step is being designed out. |
