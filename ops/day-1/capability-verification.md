---
file: capability-verification.md
owner: Developer
audience: Developer — run this before the client session
version: 1.0
---

# Capability verification — decision D4

The specification names this as the risk that can reshape the whole of Stage 1:
if the client's Claude plan cannot run scheduled tasks, every cadence in the
design needs rework. It flags the risk and then says Stage 1 "must be
redesigned" without saying into what.

So: verify empirically, on the client's own account, before the session — and if
the answer is no, switch to the fallback already written in
`ops/agent-runbook.md` rather than redesigning anything.

**Verify, do not assume.** Plan features change, and what a plan page says today
is not what it said last quarter. Every check below is something you observe on
the client's account with the client present, not something you look up. Record
what you actually see.

---

## Check 1 — Scheduled tasks

**Test:** on the client's account, create a task scheduled to run in five
minutes with the prompt `Reply with the current date and the word CONFIRMED.`

| Observation | Result |
|---|---|
| The option to create a scheduled task exists | ☐ yes ☐ no |
| The task saved without error | ☐ yes ☐ no |
| It fired at the scheduled time | ☐ yes ☐ no |
| Output was retrievable afterwards | ☐ yes ☐ no |

**Delete the test task afterwards.** An orphaned test task is exactly the
duplicate-schedule failure in `tests/cases.md` case 5.2.

**If any row is "no":** switch to manual-trigger mode. Record it in the decision
log, tell the client on Day 1 rather than later, and note that nothing else
changes — knowledge base, self-checks, Drive delivery, approval discipline and
the whole of Stage 2 are unaffected. The cost is about five minutes of
copy-paste a day.

## Check 2 — Saved skills

**Test:** install `skills/kidtechies-voice/` on the client's account. Open a new
session and ask: `Without me pasting anything: what is the one call to action
KidTechies uses, and name two prohibited claims.`

| Observation | Result |
|---|---|
| A skill can be created or uploaded on this account | ☐ yes ☐ no |
| It applies in a fresh session without pasting | ☐ yes ☐ no |
| It applies inside a scheduled task run | ☐ yes ☐ no |

Row 3 matters more than it looks. A skill that works in chat but not in a
scheduled run means every agent prompt must carry the voice rules inline —
workable, but you need to know on Day 1, not Day 3.

**If not available:** the voice and claim rules get appended to each agent prompt
in `agents/`. Larger prompts, same behaviour.

## Check 3 — Web research

**Test:** `Find one news item from the past 7 days about AI in school curricula
in Saudi Arabia or the UAE. Give the source link and its date.`

| Observation | Result |
|---|---|
| Research runs and returns a real, current, linked source | ☐ yes ☐ no |
| It works inside a scheduled task, not only in chat | ☐ yes ☐ no |

**If not available:** Agents 1 and 6 cannot run. They are the two agents that
depend entirely on live external information, and no prompt engineering
substitutes for it. This is a genuine blocker — escalate on Day 1 rather than
delivering agents that quietly invent.

## Check 4 — Folder / file access

**Test:** connect the `kidtechies-marketing` folder. In a fresh session ask:
`Read product-facts.md and tell me the bundle price and the number of missions.`

| Observation | Result |
|---|---|
| The folder connects | ☐ yes ☐ no |
| Files are readable in a fresh session | ☐ yes ☐ no |
| Files are readable inside a scheduled task | ☐ yes ☐ no |
| Google Drive is reachable for drafts and the CSV inbox | ☐ yes ☐ no |

**If files are not readable inside a scheduled run**, the entire knowledge-base
design is affected — every agent's first instruction is to read these files
fresh. Escalate immediately; do not work around it by pasting facts into
prompts, which reintroduces exactly the stale-fact problem the design exists to
prevent.

## Check 5 — Cost sanity — decision D7

Run one Content Factory package and one Market Listener briefing, and note what
they consumed on the client's plan.

| Agent | Observed usage | Notes |
|---|---|---|
| Market Listener, one run | | |
| Content Factory, one package | | |

Weekly load at full cadence: 1 briefing + 3 content packages + 1 analysis +
1 outreach batch, plus a fortnightly creative round.

Nobody has estimated this anywhere in either source document, and the whole plan
is built around a marketing budget under $500 a month of which $150–300 is
meant to be ad spend. If agent usage turns out to be material, it competes with
the ad budget and the client should decide that consciously.

---

## Recording the outcome

Update `ops/decision-log.md`:

- **D4** — closed either way: scheduled tasks available, or manual-trigger mode
  adopted.
- **D7** — record observed usage, or note it as still open with a date to
  revisit.

Any "no" that is not covered by a fallback above goes into
`ops/day-1/session-record.md` as a blocker with a named owner, and the affected
milestone date moves. The specification is explicit that missing access is a
project dependency, not an administrative detail.
