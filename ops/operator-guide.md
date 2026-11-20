---
file: operator-guide.md
owner: Developer -> KidTechies at handover
audience: Ibrahim, who runs KidTechies marketing day to day (client decision D9, 2026-10-18). Written to be used at 7am, not studied.
version: 1.3 — 2026-11-20: review only until D1; schedule; approving for Arabic; personal data in a file; what the controls are; redoing a queue item; no weekly files yet; customer calls before there are customers
---

# Operator guide

The promise this system makes is that your marketing preparation becomes a
review job instead of a writing job. About five hours a week, most of it
reading. This guide is how you do that without needing the developer.

*Where this guide says "the founder", read "Ibrahim" — he runs the plan day to
day, until the client names the approver (D14). Two changes since it was first
written: school outreach (Tuesday) is paused, because the focus is worldwide
online registration; and on Fridays the Funnel Analyst can show which countries
respond best, once the by-country file is in `inbox\`.*

## The one rule

**Nothing publishes without you.** The agents are instructed never to post,
send or schedule anything: they write drafts into a dated folder and stop. The
tests show they follow that instruction — but it is an instruction plus your
review, not a technical lock. Your review is the lock. That is why every draft
waits for you, and why nothing goes out that you have not read.

## Your week

**Until D1, review only — nothing is posted.** Every draft carries a "not yet
client-confirmed" notice until the client approves the fact list. Read,
approve or send back as below, but post nothing. From D1 on, post what you
approve and add a line to `ops/publishing-log.md`.

| Day | Waiting for you | What you do | Time |
|---|---|---|---|
| Monday | Market briefing + content package 1 | Read the briefing, pick the week's angle, approve or redirect the package | 45 min |
| Tuesday | Nothing — school outreach is **paused** (D12). It runs only when you ask for it | — | — |
| Wednesday | Content package 2 | Approve or send back. After D1, post what you approved | 45 min |
| Thursday | — | Talk to two customers: ask why they bought and what nearly stopped them. Until there are customers (no real ones yet, before go-live), talk to two parents who tried the free mission, or skip the slot. | 60 min |
| Friday | Six numbers, week-on-week, one recommendation | Act on the one recommendation. Only one. The first real report is the first full week after go-live | 45 min |
| Saturday | Content package 3 queued for next week | Skim, queue, close the laptop | 20 min |

Arabic is not weekly. It waits for a native reviewer (D6) and runs only when
you ask for it.

Scheduled tasks: **KT 1** Market Listener (Monday 07:00), **KT 2** Content
Factory (Monday, Wednesday, Saturday 08:00) and **KT 4** Funnel Analyst
(Friday 09:00). **KT 5** Creative Tester is added only once D16 says to run an
ad test. Agents 3 and 6 are never scheduled.

Thursday is the day with no agent work, and it is the most important one. It is
also where `brand-voice.md` gets better — when a parent says something in their
own words that lands, put it in the voice file. A voice file that has not
changed in three months is not being used.

## Reviewing a draft in three passes

**Pass 1 — the numbers (30 seconds).** Every KidTechies figure in the draft
should appear in the agent's self-check with a trace to `product-facts.md`. If a
number appears that is not traced, that is the one to check.

**Pass 2 — the feel (2 minutes).** Read the opening paragraph aloud. Does it
sound like us? If it sounds like a brochure or a grant application, it is a
rewrite, and the fix belongs in `brand-voice.md`, not in this one draft.

**Pass 3 — the line you would not want quoted back (1 minute).** Any promise
about outcomes, anything that could read as fear, anything addressed to a child.
These should already have been caught. When one gets through, note it — a
pattern means the knowledge file needs a sharper example.

## The four things you will actually need to do

### Rerun an agent

Trigger the task again. Agents read the knowledge base fresh every run, so if
you have just fixed a fact, a rerun picks it up. You do not need to edit the
prompt.

### Redirect a piece of work

Reorder `queue/content-queue.md` — the Content Factory always takes the topmost
`READY` item. To stop something being written at all, mark it `HOLD`. To have
an item written again from scratch, set its Status back to `READY` (and move
its row to the top if it should be next); the agent changes only that row's
Status and Notes when it finishes. To send
back a specific draft, reply in the task with what is wrong; be concrete ("the
opening is generic, start with the parent's question") rather than
evaluative ("make it better").

### Approve a draft for Arabic

Agent 3 translates only a draft you have approved. To approve one, open the
file and add this as its **first line**, with your name and the date:

```
approved-by: Ibrahim 2026-12-01
```

Only you add this line — never ask an agent to add it. Agent 3 also refuses
anything while `product-facts.md` is still a DRAFT, so before D1 it will say
no. That is correct.

### Reject output

Move the draft to `drafts/YYYY-MM-DD/rejected/` and note why in one line. Once a
month, read the rejection notes together — they tell you which knowledge file is
underspecified. Rejections are data, not waste.

### Recover when something breaks

| Symptom | What to do |
|---|---|
| Agent produced nothing | Check it could read the knowledge folder. This is the usual cause. |
| Agent says a CSV column is missing | It is right. Fix the export — do not ask it to work around it. |
| Funnel Analyst says it cannot find this week's files | Normal until the first full week after go-live — no weekly files are made before then. After that, ask whoever makes the Thursday files (the developer, for now). |
| Funnel Analyst stopped because a file holds personal data (an email address, a name) | **Delete that file from `inbox\` at once.** Do not open it, copy it or run the agent on it again. Ask for a clean export. |
| A number looks wrong | Stop using that output. Check `product-facts.md`, then rerun. Do not correct it by hand and publish — the next run will reproduce the error. |
| Agent claims it published something | Serious. It did not, but the wording is a fault. Report it to the developer. |
| Output has drifted generic over weeks | The voice file has gone stale. Thursday calls are the fix. |
| Two tasks running the same agent | Delete one. Check `tests/cases.md` class 5. |

## What you must never do

- **Never edit `knowledge/product-facts.md` to match a draft.** The file is the
  truth; the draft is wrong. This is the single most damaging habit available
  to you.
- **Never approve Arabic you cannot read.** It is a draft until your named
  native reviewer has seen it. The flag list tells you what to ask them about.
- **Never let an agent publish** because it seems reliable now. That change is
  Stage 2, it needs code-level approval gates, and it is a separate commission.
- **Never paste a customer list into an agent.** Aggregate exports only.

## When to call the developer

- An agent asserts a fact it cannot trace, twice.
- An agent frames drafts as published.
- A safety rule is breached in output rather than refused.
- A CSV export changes shape at the source.
- You want a new channel, a new agent, a new language, or publishing automation
  — all of these are scope changes, not tuning.

## The honest limits of this system

It reduces drafting labour, improves consistency and makes the process
repeatable. It does not guarantee leads, sales, CAC, rankings, ad performance,
school replies or revenue. Those depend on the product, the offer, the traffic
and you. The agents give you back the hours; what you do with them is still the
business.
