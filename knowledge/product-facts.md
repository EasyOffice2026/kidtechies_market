---
file: product-facts.md
owner: KidTechies (client) - founder or nominated approver only
version: 0.3-DRAFT
last-approved: NOT YET APPROVED
site-verified: 2026-09-18 against kidtechies.com
status: AWAITING CLIENT CONFIRMATION (decision D1)
---

# Product facts - canonical

**This file is the only source of KidTechies product numbers.**

Not the live website. Not a previous draft. Not the agent's memory of an earlier
session. If a number is not in this file, an agent may not state it. If a number
here conflicts with the site, see `site-discrepancy-log.md` - the client-approved
value wins and the site gets corrected (decision D1).

No agent may edit this file. Only a client-approved representative may.

## Status key

- `CONFIRMED` - client has approved this in writing. Safe for parent-facing copy.
- `SITE-VERIFIED` - observed on the live site on 2026-09-18. High confidence, but
  still needs client sign-off before publication, because the site can be wrong
  about itself.
- `PENDING` - from the Growth Dossier, not yet found on the site or confirmed.
  **Internal drafts only.**
- `PROPOSED` - recommended but not true of the product yet. **Never state.**

## Catalogue

| Fact | Value | Status |
|---|---|---|
| Courses | 4 | SITE-VERIFIED |
| Missions | 14 | SITE-VERIFIED - counted individually, see below |
| Capstone projects | 4 (one per course) | SITE-VERIFIED |
| Guided learning time | 8-9 hours (approximate) | SITE-VERIFIED |
| Story Shelf tales | 6 | SITE-VERIFIED |
| Animated film runtime | 23:48 total | SITE-VERIFIED - see "How to use runtime" |
| Activities | 28 | PENDING - not stated on site; plausible as 14 missions x 2 (activity + challenge) but unverified |
| Quiz questions | 70 | PENDING - not stated on site; plausible as 14 x 5 but unverified |
| Printable certificate | Yes | CODE-VERIFIED 2026-10-07 — `certificate-view.tsx` exists in the live codebase; its public route was not located, so confirm how a family reaches it before featuring it |
| Printable activity sheets | Yes | **CODE- and SITE-VERIFIED 2026-10-07** — dedicated printable page per lesson, live at e.g. `/courses/ai-detective-academy/picture-clue-patrol/sheet`. Gated behind purchase for paid lessons. Closes D10. |
| Indexable pages in sitemap | **43** | SITE-VERIFIED - the dossier says 45 |

### Age range - corrected 2026-09-18

| Fact | Value | Status |
|---|---|---|
| Core age band | **9-12** | SITE-VERIFIED |
| Adaptable to | 6-8 and 13-16 | SITE-VERIFIED |
| Overall range | 6-16 | SITE-VERIFIED |

The site says: *"ages 9-12, adaptable for 6-8 and 13-16."* The Growth Dossier
presents these as three equal bands (`6-8 · 9-12 · 13-16`), which reads as three
separately designed tracks. That is not what the product is.

**This matters for copy.** A parent of a 7-year-old told they are buying a
course built for their child's age, who then finds material designed for 9-12
and adapted down, has been misled. Agents must write "designed for 9-12,
adaptable for younger and older children" - not "three age bands."

### Mission count - verified individually

| Course | Missions | Names |
|---|---|---|
| AI Detective Academy | 5 | Picture Clue Patrol, Sound Safari, Creative Clues, Glitch Hunt, AI Detective |
| Train Your Robot Brain | 4 | Feature Find, Data Kitchen, Mood Mixer, Robot Brain |
| AI Game Creator Lab | 3 | Game Hero, Choice Engine, Maze Mission |
| Smart and Safe AI Heroes | 2 | Privacy Mission, Truth Tracker |
| **Total** | **14** | Plus 4 capstones, one per course |

Counted from the sitemap on 2026-09-18. The 14 figure holds.

> Note the distribution: 5 / 4 / 3 / 2. Course 4 - "Smart and Safe AI Heroes" -
> is the smallest, at two missions. The Growth Dossier names it as the course the
> worried screen-time parent buys *first*. Worth the client knowing that the
> entry point for the second-largest persona is the thinnest course.

## Pricing

| Fact | Value | Status |
|---|---|---|
| Single course | $25 | SITE-VERIFIED |
| Four-course bundle | $70 | SITE-VERIFIED |
| Bundle anchor price | $100, shown struck through as "Save $30 / 30% off" | SITE-VERIFIED - not in the dossier at all |
| Payment model | One-time. No subscription. | SITE-VERIFIED |
| Free tier | Mission 1 + Story Shelf | PENDING - free-tier boundary not confirmed on the pricing page |
| Signup required | None | SITE-VERIFIED |
| **Refund promise** | **30 days, no form and no reason required** | **SITE-VERIFIED - it already exists** |

### The refund promise is real - it is just hidden

Previously marked `PROPOSED` on the dossier's account that the site has no
refund promise. That is wrong. The terms page says:

> "If the course is not right for your child, ask for a refund within 30 days
> and you will get one."

It is on `/terms`, which nobody reads, rather than on `/pricing`, where the
money changes hands. **Agents may now state the 30-day refund.** The site fix is
a move, not a write - see the discrepancy log.

### Per-course figures

| Course | Film | Guided learning |
|---|---|---|
| AI Detective Academy | 9:30 | About 3-3.8 hours |
| Train Your Robot Brain | 6:37 | About 2.6-3.3 hours |
| AI Game Creator Lab | 4:30 | About 2.2-2.7 hours |
| Smart and Safe AI Heroes | 3:11 | About 1.6-2 hours |

All SITE-VERIFIED. Useful for single-course copy, where "8-9 hours" would
overstate what a $25 buyer receives.

## Privacy and data

> ⚠ **CORRECTED 2026-10-07. The previous version of this section was wrong, and
> agents were writing a false claim into parent-facing copy.**
>
> The 2026-09-18 verification read `/for-parents` and took its claims as
> describing the whole product. They describe **guest mode only**. The product
> also has **parent accounts** — live at `/login` and `/register`, and confirmed
> in the committed database schema. `/for-parents` states the guest-mode claims as
> absolutes and has not been updated to match. That page is the error; this file
> now reflects the product.

### There are two modes

| | **Guest mode** | **Parent account** |
|---|---|---|
| Account needed | No | Yes — owned by the **parent** |
| Email address | None | **Parent's email** (+ optional name, password) |
| What is stored about the child | Nothing off the device | A **nickname** and an **age group**. No name, email, surname or date of birth. |
| Where progress lives | This browser only | **Server-side**, per child profile (completed lessons, challenges, badges) |
| Needed for | Free Mission 1 and the Story Shelf | Paid courses — gated behind purchase |

### Claims agents may make

| Claim | Status |
|---|---|
| "Try the first mission. Nothing to sign up for." | ✅ TRUE — free mission is guest mode |
| "No account needed **to try the first mission**" | ✅ TRUE |
| "Accounts belong to parents — a child never has a login or an email" | ✅ TRUE — and strong; use it |
| "We store a nickname and an age group for each child — nothing else" | ✅ TRUE |
| "No advertising, no tracking scripts, no third-party analytics" | ✅ TRUE — confirmed in code, no analytics installed |
| "Sparky never asks for a name, school or address" | ✅ TRUE per site |

### Claims agents must NOT make

| Claim | Why |
|---|---|
| "No account, no sign-up, no email address" — **as a statement about the product** | ❌ FALSE. True of guest mode only. Paid courses need a parent account with an email. |
| "Progress never sent to a server" | ❌ FALSE for account holders. Server-side copy exists. |
| "Nothing about your child leaves the device" | ❌ FALSE for account holders. Nickname, age group and progress are stored server-side. |
| "There is no copy anywhere else" | ❌ FALSE for account holders. |

**The rule:** any privacy claim must name the mode it is true of. A guest-mode
claim with the mode dropped is a false claim about a children's product.

### Why this is still a strong story

The truthful version is arguably a *better* claim than the false absolute. The
schema is genuinely privacy-respecting: **the account belongs to the parent, and
the child is a nickname and an age group.** No child email, no surname, no date
of birth — by design. That is concrete, verifiable, and rarer in this category
than "we store nothing", which no paid product can honestly say.

### Original 2026-09-18 wording — retained for audit, do not reuse

| Fact | Site wording (guest mode only) |
|---|---|
| Account required | "No account, no sign-up, no email address" |
| Data to server | "Progress is stored in this browser only, never sent to a server" |
| Tracking | "No advertising, no tracking scripts, no third-party analytics" |
| Erase data | "Erase all progress, badges and activity records" |

> **The tracking line changes the day analytics is installed (D2).** "No
> third-party analytics" is currently true and currently published. A cookieless
> tool would make it false. Update this file that morning, and replace the claim
> with the honest version - naming the tool as a further proof point - rather
> than letting agents publish a stale absolute.

## Named product elements

| Element | Detail | Status |
|---|---|---|
| Courses | AI Detective Academy; Train Your Robot Brain; AI Game Creator Lab; Smart and Safe AI Heroes | SITE-VERIFIED - **all four now named** |
| Story Shelf | The lantern that learned the way; The mirror that only knew roses; The baker who sorted the starfruit; Wren and the whispering wood; The clockwork nightingale; The two guardians of the amber bridge | SITE-VERIFIED - **all six now named** |
| Characters | Maya, Pip, Glitch | PENDING - from the dossier, not found on the pages checked |

## Build-status caveats - currently published

Quoted from `/for-parents`:

> "the films do not yet have subtitles, and the illustrations in the activities
> are placeholders"
> "a qualified teacher is reviewing the quiz wording and age adaptations before
> this is used in a classroom"

These are **true and must not be contradicted**. An agent writing "classroom
ready" while the site says a teacher is still reviewing the quizzes has created
a conflict a school will notice. The dossier's recommendation is to move these
to a dated changelog page - honesty relocated, not removed.

Until they move, agents writing for the teacher persona must not claim
classroom-readiness without qualification.

## Company identity - still missing

| Needed | Status |
|---|---|
| Founder name | **MISSING** - not on the site |
| Company legal name | **MISSING** |
| Company location | **MISSING** |
| Contact email | **MISSING** - terms says questions go to "whoever operates this installation of AI for Kids" |

That quoted line is unmodified template text. On a page a parent reads before
paying, and on the page a school's data-protection officer reads before
replying, it reads as abandoned. This is the highest-priority trust fix on the
site and it costs nothing but a decision.

## Competitor figures - third-party, re-check before use

**Superseded 2026-09-18.** The dossier's "$11-25 / month" band does not match
what is published today.

| Competitor | Observed price | Checked | Status |
|---|---|---|---|
| Tynker | from **$7.50** / month | 2026-09-18 | INDICATIVE - from a roundup, not the vendor's own pricing page |
| CodaKid | from **$29** / month self-study; $249 / month 1:1 | 2026-09-18 | INDICATIVE |
| Juni Learning | from **$299** / month, one session per week | 2026-09-18 | INDICATIVE |
| Create&Learn | not found | 2026-09-18 | UNKNOWN |
| Google Teachable Machine, Machine Learning for Kids, Code.org AI units | Free tools, not courses | - | THIRD-PARTY, UNVERIFIED |

### This breaks a message pillar

Message rank 4 in `audience.md` frames $70 as *"less than three months of the
alternatives, forever."*

That holds against CodaKid at $29. Against **Tynker at $7.50 it is false** -
$70 is roughly nine months, not three. An agent using the dossier's framing
against Tynker's real price would publish a false comparison to a parent who can
check it in one click.

**Until the client rules on this, agents may not use the "three months" framing
at all.** See `claims-allowed.md`. The honest version of the argument still
works - one payment, no recurring charge, nothing to cancel - it just cannot
lean on an invented multiple.

Prices above are indicative and come from comparison roundups rather than vendor
pricing pages. An agent citing any of them must re-verify on the vendor's own
site in the same run and cite that page, or omit the figure. Do not publish a
price comparison built on this table alone.

## Gaps remaining for v1.0

1. Client written confirmation of every row (D1).
2. Activities (28), quiz questions (70), printable certificate, printable sheets
   - none verifiable on the site. Confirm or correct.
3. The free-tier boundary: which mission and which stories are free?
4. Characters Maya, Pip and Glitch - confirm they are current.
5. Founder name, company legal name, location, contact email.
6. Whether the 9-12 core with adaptation is how the client wants it described.
