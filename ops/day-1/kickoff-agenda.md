---
file: kickoff-agenda.md
owner: Developer
audience: Developer — the script for the Day 1 client session
version: 1.0
---

# Day 1 kick-off — 90 minutes

## Before the client joins (45 min, alone)

1. Run `capability-verification.md` checks 1–4 on the client's account if you
   already have access. If you do not, these move into the session and it runs
   long — say so when scheduling.
2. Read the live site against `knowledge/product-facts.md`. Add any new conflict
   to `knowledge/site-discrepancy-log.md`. You want to walk in knowing exactly
   which numbers on the site disagree with the file.
3. Print or share `fact-approval-request.md` and `data-export-request.md`.

## Send ahead, the day before

Both client-facing documents, with one line: *"Two forms for tomorrow. The first
needs your sign-off, the second needs someone technical. Neither should take
more than twenty minutes."*

A client who has read the fact form before the call turns a 90-minute session
into a 60-minute one.

---

## The session

### 1 · What we are building, and the one rule (10 min)

Six agents, five knowledge files, drafts into a dated Drive folder, and nothing —
nothing — publishes without them.

Say the rule out loud and get a nod on it:

> The agents remove the drafting labour, not the judgement. In Stage 1 no agent
> can post, send or schedule anything. That is not a limitation we are working
> around; it is why you can let them run unsupervised.

Show `ops/operator-guide.md`, the weekly table. That table is what they are
buying: about five hours a week, most of it reading.

### 2 · Product facts — the sign-off (25 min) ⚑ critical path

Walk `fact-approval-request.md` part by part.

The moment to slow down is Part 1, the runtime figure. Explain the arithmetic —
$70 for 23:48 reads as $2.94 a minute next to competitors at $11–25 a month, and
a comparing parent bounces on that line alone. Their own parent page already
tells the truer story: 8–9 hours of guided learning. We keep the runtime as a
craft detail because it *is* impressive; we stop leading with it.

Then Part 3, privacy, and be direct about the trap: if they install analytics
next week and nobody tells us, the agents keep saying "no third-party analytics"
in parent-facing copy. Agree the notification now.

Part 4 is the one clients underestimate. Two of their four courses have no name
we can use, and three of six Story Shelf tales have no title. Three SEO pages
are blocked on a five-minute answer.

**Leave with:** the form signed, or a named date within 48 hours.

### 3 · Why the site is not the source of truth (10 min)

Show `knowledge/site-discrepancy-log.md`. Seven rows, each a small site change
that unblocks a marketing claim.

The point to land: the specification said to verify facts against the live site,
and we are deliberately not doing that, because the dossier identifies the site's
own headline claim as the error to retire. Verifying against the site would copy
that error into the file every agent treats as gospel, and the acceptance rule —
*every product number matches product-facts.md exactly* — would then enforce it
across every piece of marketing they publish.

This is a good five minutes. It shows the governance working rather than
described.

### 4 · The data they must produce (15 min) ⚑ do not skip

Hand over `data-export-request.md` with both sample files.

Go straight to the warning box. Three of the six analytics columns do not exist
on their site today, and two of them are a front-end change, not an analytics
install. Get a name against the question at the bottom of the form.

Offer the fallback explicitly so the deferral is a decision, not a discovery on
Day 4: we can accept the Funnel Analyst against test files, proven correct but
not yet proven against their live data, and note it as outstanding in the
handover.

### 5 · Brand name (5 min) — decision D3

One question: KidTechies or AI for Kids. Recommend KidTechies as the brand with
"AI for kids" as the descriptor. Two brands split every search and share they
earn. This is Part 6 of the fact form — get it ticked in the room.

### 6 · Approvers and turnaround (5 min)

A primary and a backup, named, on the form. Then the honest sentence:

> Slow feedback is the most common cause of delay on this kind of project. Not
> because we sit idle — because the first drafts are the ones that teach the
> agents your voice, and until you react to them we are tuning blind.

### 7 · Access checklist (15 min)

Work `ops/access-checklist.md` row by row, live. Anything unticked becomes a row
in the session record with an owner and a date.

Row 13 — custom events for mission start and completion — is the one that gets
nodded past. Stop on it.

### 8 · What happens tomorrow (5 min)

Day 2: facts go into the file, the knowledge base is promoted to version 1.0,
the voice skill is installed, and the Market Listener runs for the first time.
They get a real market briefing tomorrow.

Mention its standing first question: the Growth Dossier's strongest free hook is
the Gulf school-curriculum story, the dossier itself calls it perishable, and it
is now two weeks past the dossier's date against a rollout from the 2025–26
school year. Tomorrow's briefing tells us whether that hook is still live or
whether we re-angle. We are not going to assume it.

---

## Leaving the room with

- [ ] Fact approval form signed, or a date inside 48 hours
- [ ] D1 closed — client-approved fact sheet is canonical, site gets corrected
- [ ] D3 closed — one brand name
- [ ] D4 closed — scheduled tasks confirmed, or manual-trigger mode adopted
- [ ] Primary and backup approver named
- [ ] Feedback turnaround agreed
- [ ] CSV request handed over with a named owner for the custom events
- [ ] Access checklist walked; every gap has an owner and a date
- [ ] Part 4 answers, or a date for them
- [ ] `ops/day-1/session-record.md` filled in and committed

## If the session runs short

The order above is deliberate. If you lose time, the parts that must not be cut
are **2** (fact sign-off) and **4** (the data request). Everything else can move
to a follow-up call; those two are what Day 2 and Day 4 are built on.
