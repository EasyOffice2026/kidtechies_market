---
file: gtm-plan.md
owner: Marketing lead (unassigned until confirmed)
version: 1.0
created: 2026-10-06
---

# GTM plan — KidTechies, 120 days, four phases

## What this document is for

The development engagement (KT/DEV/2026-001) built the machine that produces
marketing. It explicitly excluded the marketing programme itself — Growth
Dossier sections 04 to 07: the funnel fixes, the channels, the 90-day phases and
the numbers.

Those four sections had no owner. This is that plan, written as four phases
because that is how the client frames it, and extended to 120 days because the
dossier's 90-day plan stops at the point where the real problem starts: a
one-time $70 purchase with no second product.

Everything here is grounded in what the agents actually found, not in the
dossier as written. Where the two disagree, the finding wins and says so.

## The constraint that shapes everything

A one-time $70 purchase nets roughly $68 after fees. That caps lifetime value
until a second product exists, and it sets every limit below.

| Metric | Target | Source |
|---|---|---|
| Max viable CAC | **$20** | 3.4× payback on the bundle |
| Target cost per email | **$1.50** | at a 12% list-to-sale rate |
| Free → paid | **6–10%** of mission finishers | dossier S07 |
| Monthly budget | **under $500**, of which $150–300 is paid | dossier working assumptions |

These are modelled from published prices, not real traffic. Replace them with
actual figures the week analytics goes live.

---

## Phase 1 · Foundation — Days 1–30 (6 Oct – 4 Nov)

**Job: make the site able to capture, convert and measure. No campaigns.**

Running ads before this is paying to fill a bucket with no bottom.

| # | Deliverable | Owner | Effort |
|---|---|---|---|
| 1 | **Parent email capture** at the end of free Mission 1 — one field, explicitly labelled the parent's | Front-end | 2 days |
| 2 | **Two analytics events**: mission start, mission complete | Front-end | ½ day |
| 3 | Cookieless analytics installed (Plausible / Fathom / Umami) | Front-end | 1 day |
| 4 | Pricing page leads with **8–9 hours of guided learning**, not the film runtime | Content | 1 day |
| 5 | **Move the refund promise** from the terms page to the pricing page | Content | ½ day |
| 6 | Trust furniture: founder name and photo, company location, contact email | Client decision | 1 day |
| 7 | One brand name in title and footer — KidTechies | Client decision | 1 hour |
| 8 | Teacher / school page: no student accounts, no data collected | Content | 2 days |
| 9 | Arabic landing page | Content | 2 days |
| 10 | Six-email nurture sequence written and scheduled | Marketing | 3 days |
| 11 | 20 families given the bundle free for honest feedback; publish the best three | Marketing | ongoing |

**Items 1 and 2 are the whole phase.** Without them there is no list and no
completion rate, and completion rate is the number that says whether the product
works at all. Both are front-end tasks that look like analytics tasks, which is
why they get skipped.

**Exit test:** a stranger finds the free mission, finishes it, leaves an email,
receives email one — and all four steps are visible in analytics.

### Already done

- Six agents built and tested; the content engine is live
- Refund promise found (it exists, buried on `/terms`)
- Age framing corrected to 9–12 adaptable
- All four course names and six Story Shelf titles recovered

---

## Phase 2 · Message testing — Days 31–60 (5 Nov – 4 Dec)

**Job: learn which of the five messages sells, and to whom.**

| Workstream | Detail |
|---|---|
| **Paid message lab** | $150–300/month on Meta only, Gulf geo, parents 30–50. Five ad sets, one per pillar, ~$3/day each, two weeks. Kill anything under 1% CTR by day 10. **You are not buying customers — you are buying the answer to which message works.** |
| **SEO layer** | All six Story Shelf pages plus six answer-first articles. Agent 2 has the queue; items are written and waiting. |
| **School outreach** | 40 schools. See the redesign note below. |
| **Short-form video** | Three clips a week. House format: show AI getting something wrong, ask whether a child could spot why. |
| **Checkout question** | "Where did you first hear about us?" — the cheapest attribution that exists. |

### ⚠ Pillar 4 is suspended

The five message pillars are ranks 1–5 in `knowledge/audience.md`. **Pillar 4
cannot be tested as written.** Observed competitor prices are $7.50–$299/month,
not the $11–25 the dossier assumed, so "less than three months of the
alternatives" is false against the cheapest. The replacement that survives any
competitor price change: *one payment, nothing renews, nothing to cancel.*

Decision D8 — needs the client before this phase starts.

### ⚠ School outreach is not what was specified

Gulf private and international schools publish a switchboard and a PO box, not
staff emails. Verified directly. The agent will not construct an address, so the
achievable version is researched institution-level prospects with sourced
personalisation, and **the founder placing the first contact** by phone or web
form.

Budget realistically: ~20 minutes of research per school. Forty schools is
roughly 13 hours spread across the phase.

**Exit test:** you can name your best channel, your winning message, and your
cost per email captured.

---

## Phase 3 · Scale the winner — Days 61–90 (5 Dec – 3 Jan)

**Job: concentrate everything on what worked. Stop the rest.**

| Workstream | Detail |
|---|---|
| **Budget consolidation** | Entire paid budget to the one channel that produced sales. Stop the others — not reduce, stop. |
| **Email sequences built out** | The nurture sequence plus "Maya's Question of the Week", the retention asset that makes the list worth owning. This is where the email API investment lands. |
| **Classroom pilots → case studies** | Each pilot reaches 25–30 families. Convert five pilots into named case studies and a paid classroom licence tier. |
| **Micro-creators** | Three Gulf / Muslim-parent creators, 5k–50k followers, briefed with the winning message. Bundle plus modest fee or affiliate share, not flat sponsorship. |
| **Second six articles** | Plus refresh anything ranking on page two. |
| **Seasonal offer** | A school-holiday or Ramadan family bundle with a gift option. Confirm the Ramadan dates for 2027 before committing a date — do not plan from memory. |

**Exit test:** a repeatable weekly loop that produces sales without inventing
something new each Monday.

---

## Phase 4 · Retention and expansion — Days 91–120 (4 Jan – 2 Feb)

**Job: stop selling once. This is the phase the dossier does not have, and the
problem it names.**

> "Day 91 arrives, the list is built, and there is nothing left to sell them."

By here the list exists and acquisition works. The ceiling is now lifetime
value, and every pound of acquisition spend is capped by it.

| Workstream | Detail |
|---|---|
| **Decide the second product** | Three candidates from the dossier: a family / multi-child tier (~$99, removes the two-children friction and raises AOV in the same breath), a fifth course, or a paid classroom licence. Pick one. |
| **Lifecycle email** | Post-purchase sequence, completion nudges, win-back for non-finishers. The funnel data from Phase 1 tells you where people stop. |
| **Referral loop** | The product is already shareable — a WhatsApp link with no signup. Make the share deliberate rather than incidental. |
| **Regional pricing** | Gulf price sensitivity is low; South Asia's is not. If India opens, $70 needs a local tier. Do not discount globally to solve a regional problem. |
| **Course 4 depth** | "Smart and Safe AI Heroes" has two missions — the fewest — and is the course the safety-first parent buys *first*. The entry point for a quarter of the market is the thinnest thing on the site. |

**Exit test:** revenue per customer is rising, not just customer count.

---

## Targets by day 120

| | Day 90 (dossier) | Day 120 (extended) |
|---|---|---|
| Email list | 1,000 | 1,400–1,800 |
| Sales | 60–120 | 110–200 |
| Revenue | $4.2k–8.4k | $7.7k–14k |
| Classroom pilots | 5 | 8–12 |
| Second product | undecided | **live** |

Modelled, not promised. They depend on product-market fit, traffic, offer
quality and execution — not on the agent system.

## The six numbers, every Friday

Visitors · free-mission starts · free-mission completions · emails captured ·
sales · cost per sale.

Agent 4 produces these automatically once the Phase 1 analytics events exist.
Completion rate is the one to watch: if children do not finish Mission 1, no
amount of traffic saves the funnel and the problem is the product.

## What has changed since the dossier was written

| Dossier said | Reality (verified Sep–Oct 2026) |
|---|---|
| Competitors $11–25/month | **$7.50–$299** — breaks pillar 4 |
| Gulf curriculum hook is the strongest free play | **Live, but it was the UAE, not Saudi** — and the September window has largely closed. See below. |
| No refund promise on the site | **It exists**, buried on `/terms` |
| Three equal age bands | **9–12, adaptable either side** |
| Site has no analytics | Still true — and two events still missing |
| 45 indexable pages | 43, all sharing one `lastmod` date |

### On the curriculum hook

The UAE made "Artificial Intelligence and Technology" a standalone subject from
this academic year, private schools included. The dossier called the hook
perishable and it was right: that was a September story and it is now October.

The article is written and still usable as evergreen parent-help content — but
it is no longer a news pitch to Gulf parenting media. **Do not plan Phase 2
around press pickup for it.** The next live window is the mid-year term and exam
cycle; Agent 1 will surface it.

## Open decisions blocking Phase 1

| # | Decision | Blocks |
|---|---|---|
| D1 | Product fact sign-off | All published copy |
| D2 | Owner for the two analytics events | Phase 1 exit test, and all six metrics |
| D6 | Native Arabic reviewer | The Arabic landing page |
| D8 | Price framing | Pillar 4, and any price copy |
| — | Do printable sheets exist? | The teacher page and school outreach premise |
| — | Target cities and school types | Phase 2 outreach |
| — | Who owns this plan? | All of it |

That last row is the real one. This document has no owner until someone is
named.
