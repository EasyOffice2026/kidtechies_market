---
file: claims-allowed.md
owner: KidTechies (client) - client-approved representatives only
version: 0.8.2-DRAFT
last-approved: NOT YET APPROVED
status: AWAITING CLIENT APPROVAL
---

# Claims: permitted, prohibited, evidence-required

An agent that cannot substantiate a claim **omits it**. It does not soften it,
hedge it, or phrase it as a question. Omission is always the correct fallback.

## Permitted - state freely

These are descriptions of what the product is, all traceable to
`product-facts.md`:

- What the product contains: courses, missions, hours, activities, quizzes,
  capstones, printables. Numbers exactly as written in `product-facts.md`.
- The price and the payment model, including the comparison "one payment"
  against monthly alternatives.
- The privacy architecture, as it actually is: **nothing about any child is
  stored on our servers**; progress stays in the browser for everyone; children
  never sign in; the only account is the parent's, to buy courses. When the tutor
  comes up, say plainly that what a child types to Sparky goes to Anthropic's
  Claude for a reply and is not stored. See "What is true today" in
  `product-facts.md`. *(Corrected 2026-10-17. The 2026-10-07 wording here claimed
  each child is stored as a nickname and age group — false: nothing writes the
  child tables yet.)*
- That the free first mission opens with no signup and no card.
- What the curriculum covers - including, distinctively, that AI guesses, makes
  mistakes, and has failure modes children can learn to spot.
- Craft claims about the animation, the stories and the characters.

## Prohibited - never, in any phrasing

| Prohibited | Example of the thing not to write |
|---|---|
| **Outcome promises** | "Your child will get into engineering." "Sets them up for a career in AI." "Guaranteed results." |
| **Fear of falling behind** | "Don't let your child be left behind." "The children who start now will lead." |
| **Superiority claims without evidence** | "The best AI course for kids." "More effective than coding schools." |
| **Unevidenced comparisons** | Any "better than [competitor]" that is not a factual, sourced, like-for-like statement. |
| **Copy addressed to a child** | See `child-safety-rules.md`. Applies to ads, captions, emails, video scripts, everything. |
| **Educational-authority implication** | "Accredited", "certified", "curriculum-approved", "endorsed by" - unless a named body has actually done so in writing. |
| **Government endorsement by association** | Referring to Saudi or UAE national AI curricula is permitted as *context*. Implying KidTechies is part of, approved by, or aligned to them is not. This distinction matters and agents get it wrong. |
| **Claims about a named child** | No real, identifiable child in copy, imagery or testimonial. |
| **Stale privacy claims** | Any privacy statement not currently true in `product-facts.md`. |
| **Privacy claims with the mode dropped** | "No account, no sign-up, no email address", "progress never leaves the device", "nothing about your child leaves the device" — stated about the product as a whole. All true of guest mode, all false for parent accounts. Name the mode or do not make the claim. |
| **Analytics denial** | "No tracking scripts." "No third-party analytics." "No analytics." "We don't track anything." All false since 2026-11-09: Umami counts visits. Say "no advertising, and no cookies used for tracking", or the `/privacy` line in `product-facts.md`. |
| **Runtime as headline value** | "23:48 of animated film" beside the price. See `product-facts.md`. |
| **Planned features as if they exist** | "Share your creations with the community." "Choose Beginner, Intermediate or Advanced." "Watch the video lessons." "Play My World." "Subscribe." All are future plans in `ops/product-roadmap.md` (2026-11-11), not features. Describe only what `product-facts.md` lists. |
| **"Less than three months of the alternatives"** | Retired. The framing assumed competitors at $11–25/month; Tynker is published at $7.50, where $70 is about nine months. A parent can check this in one click. The client chose a different price story on 2026-10-18 — below. |

*Removed 2026-10-18: a row prohibiting the 30-day refund promise "until it is
live". It has been live on `/terms` since before this project and is now beside
the price; `product-facts.md` has listed it as stateable since 2026-09-18. The
two files contradicted each other for a month.*

### How to talk about price — client decision, 2026-10-18

The client chose the **discount model**: all four courses for **$70 instead of
$100**, "Save $30". In their words: *"Let's try this model and then we will
adjust accordingly."* So:

> All four courses for $70 instead of $100 — one payment, nothing renews,
> nothing to cancel.

- **The discount** is the headline: $70 instead of $100, save $30. Figures come
  from `product-facts.md`, never from memory.
- **"One payment, no subscription, nothing to cancel"** is a fact and stays
  available — it answers the parent comparing monthly services.
- **The 30-day refund** goes with any price mention.
- **No month-multiple comparison** against competitors in general.

A specific comparison against a **named** competitor at a **dated, sourced**
price remains permitted under the evidence rules below.

The client said they will adjust after seeing results. When the price story
changes, this section changes first — before any agent writes about price.

## Evidence-required - permitted only with a cited, current source

| Claim type | Evidence needed |
|---|---|
| Competitor pricing or features | A source link, checked in the same run, dated. Figures in `product-facts.md` are third-party and unverified. |
| Any government, ministry or school-system statement | Primary source, dated. Saudi/UAE curriculum claims especially - these are the backbone of the priority-market hook and must be exactly right. |
| Market-size or category statistics | Source link. The dossier appendix explicitly flags these as needing re-checking before anything investor-facing. |
| "Parents are asking X" | A real, linkable public example. Not an impression. |
| Testimonials | An actual parent who actually said it, on file. Until three real quotes exist, no testimonial appears in any draft. |

## The free-mission call to action

The dossier is emphatic that the zero-friction trial is the single best asset
the company owns. It is the **only** call to action in everything the agents
draft — articles, posts, ads, video hooks and the Content Factory's nurture
email:

> "Try the first mission. Nothing to sign up for."

One natural placement per piece, where it genuinely helps the reader. Not
repeated, not stacked with a second offer, never a hard sell.

*Scope:* the site's own welcome emails are product copy, not agent drafts. Email
4 there links to the pricing page, after the parent has already finished the
free mission. That is outside this rule; an agent-drafted email still carries
only the free-mission link.
