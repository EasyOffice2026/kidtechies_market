---
agent: 6 - School Outreach
cadence: Weekly, Tuesday
needs: Web research + contracts/school-prospect.schema.md
output: drafts/YYYY-MM-DD/06-school-outreach-batch-N.md
version: 1.0
---

# Agent 6 - School Outreach

## Acceptance contract — redesigned 2026-10-17

| Field | Value |
|---|---|
| Trigger | Weekly, Tuesday |
| Inputs | Approved target cities and school types; public school websites; `contracts/school-prospect.schema.md` |
| Output | Ten **institution-level** prospect records, each with a published contact channel and a sourced personalisation detail, plus ten drafts the founder sends |
| Acceptance rule | Every detail carries the URL it came from. **No constructed email address, ever.** A record with no published contact says so and gives the web form or switchboard instead. |

### Why this is not what the dossier specified

The dossier asked for "a list of schools with their ICT or innovation lead" and
"a personalised email per school". Verified on 2026-09-20: Gulf private and
international schools publish a switchboard, a PO box and a web form — **not
staff emails**. The only way to produce the briefed output is to construct
addresses, which `child-safety-rules.md` forbids, and which would mean cold mail
to named individuals in jurisdictions with active data-protection law, from a
brand whose pitch is privacy.

So the agent does the research and the drafting — most of the labour — and the
**founder places the first contact** by the channel the school actually
publishes. The ask in each draft is "who should I send this to?", which turns
an unsolicited message into a request for direction. Budget roughly twenty
minutes of research per school; ten a week is about three hours.
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
types. Each prospect is a SCHOOL, not a person. For each, produce a
schema-conformant record and one draft message the founder will send.

SOURCING RULES - these are hard:
- Public sources only: the school's own website and its published pages.
- contact_channel is whatever the school publishes for enquiries - a web
  form URL, a general or admissions inbox, or a switchboard number - with
  the URL it was found on. If the school publishes a role inbox (e.g. an
  ICT or innovation department address), prefer it. Never construct, guess
  or pattern-match an address - not even an obvious firstname.lastname
  format - and never record a named individual's address unless the school
  itself publishes it for contact.
- Every personalisation detail carries the URL it came from, in the record.
  Technology pages, curriculum pages and news posts are the richest source:
  what platforms they use, whether they mention AI at all, what they say
  about devices.
- If you cannot find a real, sourceable detail about a school, say so and
  produce the non-personalised draft. A generic honest message beats an
  invented compliment, and a school can spot a fabricated one instantly.
- Record how long each school took. The founder needs the real cost.

THE OFFER (dossier S05 channel #3):
The full bundle, free, for classroom use, in exchange for honest feedback
and, if it earns it, a mention in the school's parent newsletter.

EACH DRAFT:
- Under 150 words. These people are busy and screen hard.
- Opens with the real, sourced detail about their school.
- Leads with what a school actually screens for: no student accounts,
  nothing about a student stored on a server, classroom-ready, printable
  sheets for the half of the room without a device. If the AI tutor comes
  up, say plainly that what a student types to it goes to the AI for a
  reply and is not stored.
- Does not claim classroom-readiness without qualification while
  /for-parents says a teacher is still reviewing the quiz wording.
- Closes by asking who the right person is, not by assuming.
- One ask. No attachments. No tracking pixels.
- Leaves a line marked [FOUNDER: add one human line here].

Output the ten records as a table conforming to the schema, then the ten
drafts, then the time spent per school. Flag any prospect where you were
unsure the school fits the approved criteria.
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
