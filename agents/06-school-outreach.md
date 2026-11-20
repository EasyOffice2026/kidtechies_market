---
agent: 6 - School Outreach
cadence: PAUSED — run on request only (client decision D12, 2026-10-18)
needs: Web research + contracts/school-prospect.schema.md + logs/school-prospects.csv
output: drafts/YYYY-MM-DD/06-school-outreach-batch-N.md
version: 1.3 — 2026-11-20: on request only; cities from the request; offer only if recorded; teacher wording; agreed AI wording; no student details; up to ten
---

# Agent 6 - School Outreach

> **Paused as a weekly agent, 2026-10-18.** The client chose to focus on
> worldwide online registration by parents (D12), not school outreach. The
> agent stays as written — redesigned on 2026-10-17 around what schools
> actually publish — and can be run for a specific school or city on request.
> Do not schedule it. The teacher page (`/for-teachers`) remains live for
> schools that find KidTechies on their own.

## Acceptance contract — redesigned 2026-10-17

| Field | Value |
|---|---|
| Trigger | On request only (paused, D12). Not scheduled |
| Inputs | The cities and school types named in the request; public school websites; `contracts/school-prospect.schema.md` |
| Output | Up to ten **institution-level** prospect records, each with a published contact channel and, where one exists, a sourced personalisation detail, plus one draft per record for the founder to send |
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

Read all five knowledge files listed in agents/shared-controls.md §1 -
audience.md holds the teacher/homeschool multiplier persona - and
contracts/school-prospect.schema.md.

This agent runs on request only (paused, D12). Use the cities and school
types named in the request. If the request names none, stop and ask for
them - do not choose them yourself.

Build a batch of up to TEN prospects from those cities and school types.
Each prospect is a SCHOOL, not a person. For each, produce a
schema-conformant record and one draft message the founder will send. Add
each record as a new row at the END of logs/school-prospects.csv; never edit
or delete an existing row.

SOURCING RULES - these are hard:
- Public sources only: the school's own website and its published pages.
- contact_channel is whatever the school publishes for enquiries - a web
  form URL, a general or admissions inbox, or a switchboard number - with
  the URL it was found on. If the school publishes a role inbox (e.g. an
  ICT or innovation department address), prefer it. Never construct, guess
  or pattern-match an address - not even an obvious firstname.lastname
  format - and never record a named individual's address unless the school
  itself publishes it for contact.
- Never record or mention a student - no names, photos, results or
  achievements, nothing about any pupil - even when the school publishes it.
- Every personalisation detail carries the URL it came from, in the record.
  Technology pages, curriculum pages and news posts are the richest source:
  what platforms they use, whether they mention AI at all, what they say
  about devices.
- If you cannot find a real, sourceable detail about a school, say so and
  produce the non-personalised draft. A generic honest message beats an
  invented compliment, and a school can spot a fabricated one instantly.
- Record how long each school took. The founder needs the real cost.

THE OFFER:
Make an offer only if one is recorded in ops/decision-log.md. None is
recorded today, so the draft offers nothing: it introduces KidTechies,
mentions group access as the site words it ("Get in touch about group
access"), and asks who the right person is. Never invent a free licence,
a discount or a price.

EACH DRAFT:
- Under 150 words. These people are busy and screen hard.
- Opens with the real, sourced detail about their school.
- Leads with what a school actually screens for: no student accounts,
  nothing about any student stored on our servers, printable sheets for
  the half of the room without a device. If the AI tutor or the Studio
  comes up, use these words: "What a child types to Sparky or the Creative
  Studio goes to Anthropic's Claude for a reply, together with the age
  group chosen, so the answer suits their age. It is not stored by us."
- Does not claim classroom-readiness without qualification while
  /for-parents says a teacher is still reviewing the quiz wording.
- Closes by asking who the right person is, not by assuming.
- One ask. No attachments. No tracking pixels.
- Leaves a line marked [FOUNDER: add one human line here].

Output the records (up to ten) as a table conforming to the schema, then
one draft per record, then the time spent per school. If you found fewer
than ten that fit, give fewer and say why - never pad. Flag any prospect where you were
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
