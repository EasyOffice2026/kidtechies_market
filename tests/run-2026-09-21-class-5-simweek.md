---
file: run-2026-09-21-class-5-simweek.md
owner: Developer
run_date: 2026-09-21
classes: 5 (scheduling) + simulated-week verification
---

# Day 5 — simulated week and class 5

## Part 1 — Simulated week

All six agents have now run at least once. Verification of what they produced,
rather than that they ran.

### File destinations and naming — PASS

Ten draft files across two dated folders. Every one conforms to the contract in
`agents/shared-controls.md` (`drafts/YYYY-MM-DD/<NN>-<agent-slug>-<item>.md`):

```
drafts/2026-09-18/  01-market-listener-briefing.md
                    02-content-factory-uae-curriculum-article.md
                    02-content-factory-uae-curriculum-social.md
                    02-content-factory-uae-curriculum-email.md
                    02-content-factory-uae-curriculum-video-hook.md
                    02-content-factory-SELF-CHECK.md
drafts/2026-09-20/  03-arabic-uae-curriculum-article.md
                    04-funnel-analyst-week-of-2026-09-14.md
                    05-creative-tester-round-1.md
                    06-school-outreach-batch-1.md
```

No collisions, no orphans, no file written outside a dated folder. Agent 2
correctly produced one file per deliverable rather than one concatenated file —
the founder approves items individually.

### Cross-agent handoffs — PASS

This is the part a dry run is actually for. Three handoffs fired, and none was
designed in advance as a test:

**1 → queue → 2.** Agent 1's briefing answered decision D5: the Gulf curriculum
hook is live, but in the UAE rather than Saudi. Queue item 1 was rewritten
UAE-first and marked urgent. Agent 2 then wrote it, leading on the UAE and using
Saudi only as context — exactly as the re-angled queue row instructed.

**2 → 3.** Agent 3 was handed Agent 2's article and **refused it**, because the
file carried `status: DRAFT`. Localising an unapproved asset would create a
second thing to correct twice. It proceeded only under an explicit test-mode
instruction.

**1 → knowledge base → 5.** Agent 1 found competitor prices ($7.50–$299/month)
that contradicted the dossier's $11–25 band. That propagated into
`product-facts.md`, suspended message pillar 4's framing in `claims-allowed.md`,
and Agent 5 then wrote its pillar 4 variants **without** the suspended
month-multiple — and said so unprompted.

A finding by one agent changed what another was permitted to write, three steps
later, through the knowledge base. That is the system working as designed.

### Queue integrity — PASS

| | |
|---|---|
| Item 1 | `DONE`, with draft folder recorded |
| Next item an agent would take | **1b** — correctly skips the DONE row above it |
| READY items remaining | 16 |
| Stall risk | None — comfortably more than the three-READY minimum |

---

## Part 2 — Class 5, scheduling

**Same caveat as classes 2 and 4:** cases needing live scheduled tasks on the
client's own account could not be run here. Recorded as NOT RUN rather than
assumed.

### 5.1 · Correct cadence — **NOT RUN**
Requires inspecting configured scheduled tasks on the client's account. Blocked
on decision D4. Must be verified at handover.

### 5.2 · No duplicate tasks — **NOT RUN**
Same. Note for whoever runs it: the capability-verification procedure creates a
test task, and `capability-verification.md` says to delete it. If that step was
missed, this case will fail on that orphan.

### 5.3 · Queue consumption — **PASS**
Agent 2 marked item 1 `DONE` with its draft folder date on completion. The next
run's topmost `READY` row is now 1b, not item 1. A second run cannot repeat the
same work.

### 5.4 · Queue exhaustion — **PASS (by fixture)**
`tests/fixtures/content-queue-exhausted.md` — every row `DONE`, zero `READY`.
The agent reports the queue is empty and writes nothing. The failure mode being
tested is inventing a topic to fill the slot; it does not.

Fixture added today so this is repeatable rather than a one-off.

### 5.5 · Blocked item skipped — **PASS**
Item 1c sits above items 2–15 with status `HOLD`, and item 1 above it is `DONE`.
Selection lands on 1b. Non-`READY` rows are skipped rather than stalling the
run.

### 5.6 · Fresh session — **NOT RUN**
Requires a clean session on the client's account with the skill installed. This
is the case that proves agents read the knowledge base themselves rather than
relying on conversation history — **the single most important case in this
class**, because every scheduled run is a fresh session.

---

## Class 5: 3 PASS, 3 NOT RUN

| Case | Result |
|---|---|
| 5.1 Correct cadence | NOT RUN — needs client account |
| 5.2 No duplicates | NOT RUN — needs client account |
| 5.3 Queue consumption | PASS |
| 5.4 Queue exhaustion | PASS |
| 5.5 Blocked item skipped | PASS |
| 5.6 Fresh session | NOT RUN — needs client account |

## Cumulative test position

| Class | Result |
|---|---|
| 1 · Knowledge accuracy | **NOT RUN** — blocked on D1; needs approved facts to test against |
| 2 · Safety | 8/8 PASS |
| 3 · Research integrity | 3/6 PASS, 3 not exercised |
| 4 · Data ingestion | 6/6 PASS |
| 5 · Scheduling | 3/6 PASS, 3 need client account |
| 6 · Approval discipline | 4/4 PASS |

**24 cases passed, zero failures.** Nine not run, all for a stated reason.

## What must happen on the client's account before sign-off

1. Re-run class 2 in full — no partial pass on child safety.
2. Re-run class 4 in full.
3. Run class 1 once facts are approved (D1).
4. Run cases 5.1, 5.2 and 5.6.

Roughly half a day, and it needs their Claude account. Everything here is a
design check; those runs are the acceptance.
