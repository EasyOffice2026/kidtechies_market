---
file: gtm-plan.md
owner: Ibrahim (client decision D9, 2026-10-18)
version: 1.2
created: 2026-10-06
revised: 2026-10-18 — client decisions; 2026-11-20 — analytics status, decisions point to the decision log; same day, round 2: done items marked, hours, agents not yet live, email spend, school items conditional on D12
---

# GTM plan — KidTechies, 120 days, four phases

## Client decisions, 2026-10-18 — read first

The client answered the open questions. Five change this plan:

| Decision | What changes here |
|---|---|
| **Market: worldwide online registration**, concentrating on the countries that respond best (D12) | No longer Gulf-first. Phase 2's paid lab tests several countries, and Umami's country breakdown — typed into a weekly file and read by the Funnel Analyst — decides where Phase 3's money goes. |
| **School outreach is not the focus** (follows from D12) | Removed from Phase 2. The teacher page stays live for schools that arrive on their own; Agent 6 runs on request only. |
| **Ibrahim owns the plan day to day** (D9) | This document now has an owner. |
| **Keep the $70-instead-of-$100 discount** (D8) | Pillar 4 is testable again, as a discount. |
| **Keep researching new courses** (D13) | Phase 4's "second product" now leans to a fifth course; Agent 1 brings a monthly course brief. |

Phase 1 is late: its exit test passes when the website and email work is
deployed and switched on — see `remaining-work-plan.md`. The phase dates below
slip accordingly.

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
actual figures once real weekly numbers exist — the first full week after
go-live. (Analytics has been live since 2026-11-09, but every visit so far is
the team's own testing.)

---

## Phase 1 · Foundation — Days 1–30 (6 Oct – 4 Nov)

**Job: make the site able to capture, convert and measure. No campaigns.**

Running ads before this is paying to fill a bucket with no bottom.

| # | Deliverable | Owner | Effort |
|---|---|---|---|
| 1 | **Parent email capture** at the end of free Mission 1 — one field, explicitly labelled the parent's | Front-end | 2 days |
| 2 | **Two analytics events**: mission start, mission complete | Front-end | ½ day |
| 3 | Cookieless analytics installed (Plausible / Fathom / Umami) | Front-end | 1 day |
| 4 | Pricing page leads with **hours of guided learning**, not the film runtime — done 2026-11-13; the figure is now "about 9–12 hours, including four final projects" (2026-11-20) | Content | 1 day |
| 5 | **Move the refund promise** from the terms page to the pricing page — done 2026-11-13 | Content | ½ day |
| 6 | Trust furniture: founder name and photo, company location, contact email | Client decision | 1 day |
| 7 | One brand name in title and footer — KidTechies | Client decision | 1 hour |
| 8 | Teacher / school page: no student accounts, nothing about any student stored on our servers | Content | 2 days |
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

- Six agents built; safety tests 8/8 on the client's account (2026-11-19).
  They draft only — nothing is posted until D1
- Refund promise found on `/terms`, and beside the price on `/pricing` since
  2026-11-13
- Age framing corrected to 9–12 adaptable
- All four course names and six Story Shelf titles recovered

---

## Phase 2 · Message testing — Days 31–60 (5 Nov – 4 Dec)

**Job: learn which of the five messages sells, and to whom.**

| Workstream | Detail |
|---|---|
| **Paid message lab** | $150–300/month on Meta, parents 30–50. **Revised 2026-10-18 for worldwide focus:** run the five pillars in **one** English-speaking market first for a week to find the winning message, then run that winner in four or five markets at once — for example Kuwait/UAE, the UK, the US, India and Canada — ~$3/day each. Kill anything under 1% CTR by day 10. **You are buying two answers: which message works, and where.** |
| **Country read** | Every Friday the Funnel Analyst's "where it is working" section ranks countries by free-mission completion — only those with 30+ visitors. A country that completes well is a country worth money in Phase 3. |
| **SEO layer** | All six Story Shelf pages plus six answer-first articles. Agent 2 has the queue; the topics are queued (most not yet written), and nothing is posted before D1. Worldwide queries now matter as much as Gulf ones. |
| ~~**School outreach**~~ | Removed 2026-10-18 — client focus is online registration (D12). |
| **Short-form video** | Three clips a week. House format: show AI getting something wrong, then ask the parent whether their child could spot why. Spoken to the parent, never to a child. |
| **Checkout question** | "Where did you first hear about us?" — the cheapest attribution that exists. |

### Pillar 4 — testable again

Resolved 2026-10-18 (D8). The client kept the discount model, so pillar 4 is
**"All four for $70 instead of $100 — one payment, nothing to cancel."** The
"three months of the alternatives" comparison stays retired.

### Watch: price by country

Worldwide means South Asia sooner than the dossier planned for. Its warning
still stands: *"If India opens, $70 will need a local tier. Don't discount
globally to solve a regional problem."* If India completes the free mission
well but rarely buys, that is the signal — and the answer is a regional price,
not a global cut.

**Exit test:** you can name your best channel, your winning message, and your
cost per email captured.

---

## Phase 3 · Scale the winner — Days 61–90 (5 Dec – 3 Jan)

**Job: concentrate everything on what worked. Stop the rest.**

| Workstream | Detail |
|---|---|
| **Budget consolidation** | Entire paid budget to the one channel that produced sales. Stop the others — not reduce, stop. |
| **Email sequences built out** | The nurture sequence plus "Maya's Question of the Week", the retention asset that makes the list worth owning. Both live since 2026-11-07, on the site's existing email service — no extra email spend was needed. |
| **Classroom pilots → case studies** | Only if the client restarts school outreach (paused, D12). Each pilot reaches 25–30 families. Case studies name a school only with its written consent, and never a child. A paid classroom licence does not exist — it would be new product work. |
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
value, and every dollar of acquisition spend is capped by it.

| Workstream | Detail |
|---|---|
| **Decide the second product** | Three candidates from the dossier: a family / multi-child tier (~$99, removes the two-children friction and raises AOV in the same breath), a fifth course, or a paid classroom licence. Pick one. |
| **Lifecycle email** | Post-purchase sequence, completion nudges, win-back for non-finishers. The funnel data from Phase 1 tells you where people stop. |
| **Referral loop** | The free mission is already shareable — a link with nothing to sign up for to try it. Make the share deliberate rather than incidental. |
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
| Classroom pilots | 5 | 8–12 (only if school outreach restarts — D12) |
| Second product | undecided | **live** |

Modelled, not promised. They depend on product-market fit, traffic, offer
quality and execution — not on the agent system.

## The six numbers, every Friday

Visitors · free-mission starts · free-mission completions · emails captured ·
sales · cost per sale.

Agent 4 produces these every Friday from the weekly files. The analytics events
are live and were all seen on a live run on 2026-11-20; the first real report
is the first full week after go-live.
Completion rate is the one to watch: if children do not finish Mission 1, no
amount of traffic saves the funnel and the problem is the product.

## What has changed since the dossier was written

| Dossier said | Reality (verified Sep–Oct 2026) |
|---|---|
| Competitors $11–25/month | **$7.50–$299** — broke pillar 4's old "three months" framing, now retired (D8) |
| Gulf curriculum hook is the strongest free play | **Live, but it was the UAE, not Saudi** — and the September window has largely closed. See below. |
| No refund promise on the site | **It exists** — on `/terms`, and beside the price on `/pricing` since 2026-11-13 |
| Three equal age bands | **9–12, adaptable either side** |
| Site has no analytics | **Fixed:** Umami, cookieless, live 2026-11-09; all three events seen 2026-11-20 |
| 45 indexable pages | 43, all sharing one `lastmod` date (41 on 2026-11-20) |

### On the curriculum hook

The UAE made "Artificial Intelligence and Technology" a standalone subject from
this academic year, private schools included. The dossier called the hook
perishable and it was right: that was a September story and it is now October.

The article is written and still usable as evergreen parent-help content — but
it is no longer a news pitch to Gulf parenting media. **Do not plan Phase 2
around press pickup for it.** The next live window is the mid-year term and exam
cycle; Agent 1 will surface it.

## Open decisions

The live list is `ops/decision-log.md` — this plan no longer keeps its own
copy, so the two cannot disagree. (The copy that stood here on 2026-10-18 still
listed D4, closed on 2026-11-12.)
