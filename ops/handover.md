---
file: handover.md
owner: Developer -> KidTechies
audience: The client. Written to be read once, then kept.
date: 2026-09-21
ref: KT/DEV/2026-001
---

# Handover — KidTechies AI marketing agent, Stage 1

## What you now own

Everything. The Claude account, the knowledge files, the agent prompts, the
Drive folders, the approved content, and this repository. Nothing here depends
on the developer continuing to be involved.

| Deliverable | Where |
|---|---|
| Knowledge base — 5 governed files + queue | `knowledge/`, `queue/` |
| Six agent prompts + shared controls | `agents/` |
| Saved brand-voice skill | `skills/kidtechies-voice/` |
| Data contracts (analytics, payments, prospects, creative) | `contracts/` |
| Test pack — 36 cases + 9 fixtures | `tests/` |
| Operator guide, agent runbook, decision log | `ops/` |
| Worked output from all six agents | `drafts/` |

## How it works, in one paragraph

Five Markdown files decide what may be said. Six agents read all five before
every run and draft work into a dated folder. You approve it. Nothing publishes
by itself, and no agent can invent a product number — if a fact is not in
`product-facts.md`, it does not get written. Start with `ops/operator-guide.md`;
it is written for 7am use, not for study.

## What it has already produced

Not a description — the actual output, in `drafts/`:

- A market briefing that found the UAE made "Artificial Intelligence and
  Technology" a standalone subject this term, KG–Grade 12, in private schools as
  well as public.
- A complete content package on it: a 946-word article, five captions, a nurture
  email, a 25-second video script.
- An Arabic localisation with fifteen flagged points for a native reviewer.
- A weekly funnel analysis, verified correct against known data.
- Ten ad variants across the five message pillars.
- A researched school prospect record.

## Test position

**24 cases passed. Zero failures.**

| Class | Result |
|---|---|
| Safety | 8/8 |
| Data ingestion | 6/6 |
| Approval discipline | 4/4 |
| Scheduling | 3/6 — three need your Claude account |
| Research integrity | 3/6 — three not yet exercised |
| Knowledge accuracy | Blocked — needs your approved facts to test against |

Two results are worth reading properly, because they show the controls are
load-bearing rather than decorative:

**The safety suite caught a real near-miss in its own work.** While drafting the
UAE article, the first pass contained *"a structured way to cover what the new
curriculum introduces."* That implies your product maps to the ministry's scheme
of work — a regulatory claim, in the market where that regulator sits. It was
cut and replaced with an explicit denial.

**A finding by one agent changed what another was allowed to write.** The Market
Listener found competitor prices of $7.50–$299/month against the $11–25 we were
briefed on. That propagated into the fact file, suspended a message pillar, and
the Creative Tester then wrote its variants without the false comparison — and
said so unprompted.

## Sign-off status

| Criterion | Status |
|---|---|
| Six agents configured | Prompts complete; scheduling needs your account |
| Knowledge base built and version-controlled | Yes — **v0.3-DRAFT**, awaiting your signature |
| Safety suite passes with zero failures | Yes |
| Funnel Analyst reproduces the six metrics | Yes, against fixtures. Live acceptance deferred |
| No output addresses a child, requests child data, or uses fear | Yes |
| Founder completes morning review in ~20 min | **Not yet measured** — needs you |
| Test results recorded and committed | Yes |

**Not signed off yet, and the reason is on your side.** Four items need you.

## What we need from you

| # | Item | Blocks |
|---|---|---|
| 1 | **Sign the product fact approval form** (`ops/day-1/fact-approval-request.md`) | Everything parent-facing. ~20 minutes. |
| 2 | **Name an owner for two analytics events** — free-mission start and completion | Two of your six weekly numbers, including completion rate |
| 3 | **Decide the price framing** — competitor prices moved; the "three months" line is suspended | Any copy mentioning price |
| 4 | **Name a native Arabic reviewer** | Arabic publication |
| 5 | **Approve the target school list** | School outreach batches |

Item 1 unblocks the most by a distance.

## Known limitations — read before you rely on it

**1. School outreach needs a design change.** Gulf private and international
schools publish a switchboard number and a PO box, not staff email addresses. We
checked directly and found no staff directories. The briefed output — a named
ICT lead with a direct email — is probably not obtainable from public sources.

The agent will not guess an address, even an obvious `firstname.lastname@`
pattern, so it produced one sourced record rather than ten invented ones. What
works instead: researched institution-level prospects with genuinely sourced
personalisation, and you placing the first contact by phone or web form. The
research and drafting stay automated, which was always the bulk of the labour.

Also uncosted: roughly 20 minutes of research per school.

**2. Two of your six metrics do not exist yet.** Free-mission starts and
completions are custom events someone must add to the mission player. An
analytics install alone will never produce them. Completion rate is the number
that tells you whether the product itself is working — if children do not finish
the free mission, no amount of traffic helps.

**3. Facts are still draft.** Eight were verified against your live site;
several could not be — 28 activities, 70 quiz questions, the printable
certificate and the printable sheets are not stated anywhere on your site. The
printables matter most: your entire pitch to teachers rests on them.

**4. This system makes no business promises.** It reduces drafting labour,
improves consistency, and makes the process repeatable. It does not guarantee
leads, sales, cost per acquisition, rankings, ad performance or school replies.

## One thing that is time-sensitive

The UAE curriculum article is written and waiting on item 1. It is a September
story. By November it is background reading.

## Before you go live — half a day on your account

1. Re-run test class 2 (safety) in full. No partial pass on child safety.
2. Re-run class 4 (data).
3. Run class 1 once facts are approved.
4. Run cases 5.1, 5.2 and 5.6 — especially **5.6**, which proves agents read the
   knowledge base themselves rather than relying on conversation history. Every
   scheduled run is a fresh session.

## When to call the developer

An agent asserts a fact it cannot trace, twice. An agent describes a draft as
published. A safety rule is breached in output rather than refused. A CSV export
changes shape.

New channel, new agent, new language, or publishing automation are scope
changes, not tuning.

## Stage 2

Start only when all three are true: Stage 1 has run long enough to show which
two or three agents save real time; publishing — not approving — has become the
bottleneck; and the channel credentials and approval owner exist.

Design fixes to carry in are recorded at the foot of `ops/five-day-plan.md`,
including a publish state machine that as originally specified could
double-publish after a connector timeout.
