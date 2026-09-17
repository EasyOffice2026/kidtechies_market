---
file: five-day-plan.md
owner: Developer
version: 1.0
---

# The five-day plan

KT/DEV/2026-001 schedules this as ten days (M1 Days 1–5, M2 Days 6–10). The
extra five days are mostly client review cycles and live test runs, not
authoring. Compressing to five works because **all artefact authoring is already
done** — every knowledge file, agent prompt, schema, fixture and guide exists in
this repository as of Day 0.

So each of the five days is *review, run, tune* rather than *write from scratch*.
What cannot compress is anything gated on the client: fact approval, CSV
exports, the Arabic reviewer, channel approvals. Those stay gates.

## Day 1 — Access, decisions, knowledge approval

| Task | Output |
|---|---|
| Work through `ops/access-checklist.md` with the client | Every row ticked or logged as a blocker |
| Close decisions D1, D3, D4 (facts source, brand name, scheduled tasks) | `ops/decision-log.md` updated |
| Walk the client through `knowledge/` and `site-discrepancy-log.md` | Client understands why the site is not the fact source |
| Hand over both CSV contracts **today**, with the sample fixtures | Client has 4 days to produce a real export |
| Verify Claude capabilities; if scheduled tasks are unavailable, switch to manual-trigger mode | Decision recorded |

**Exit:** access confirmed, D1/D3/D4 closed, knowledge pack with the client for
approval, CSV contracts delivered.

> The one thing that must not slip: CSV contracts on Day 1. In the original
> ten-day plan the contract is agreed on Day 6 and acceptance is Day 10 — four
> days to produce an export from analytics that may not be installed. Four days
> *after* being told exactly what is needed is workable; four days from a
> standing start is not.

## Day 2 — Fact confirmation, skill, Agent 1 live

| Task | Output |
|---|---|
| Apply client fact approvals; flip PENDING → CONFIRMED; promote `product-facts.md` to v1.0 | Knowledge base fit for parent-facing output |
| Fill the MISSING rows: courses 3 and 4, three Story Shelf titles, founder name, company location | `product-facts.md` gaps closed |
| Install `skills/kidtechies-voice/` as a saved skill | Voice applies without pasting |
| Schedule Agent 1; **execute first run** | First Monday-style briefing delivered |
| Agent 1's first run answers decision D5 | Queue item 1 unblocked or re-angled |
| Run test class 1 (knowledge accuracy) | 7 cases PASS |

**Exit:** knowledge base v1.0 approved, skill live, first briefing in hand, D5
answered.

## Day 3 — Content Factory, safety testing

| Task | Output |
|---|---|
| Schedule Agent 2; execute a full package from the top READY queue item | Article + 5 captions + email + video hook |
| Review with the founder; tune voice against real reaction | `brand-voice.md` updated if needed |
| Run test class 2 (safety) — all 8 cases | **Any failure here blocks sign-off** |
| Run test class 6 (approval discipline) | 4 cases PASS |
| Verify Drive dated-folder structure end to end | Drafts land where the founder works |

**Exit:** first complete content package accepted; safety suite green.

## Day 4 — Agents 3–6, data contracts proven

| Task | Output |
|---|---|
| Configure Agents 3, 4, 5, 6 | Four agents scheduled |
| Agent 4 against all six CSV fixtures | Test class 4 PASS, including the hand-calculated oracle |
| Agent 4 against the client's real export **if it arrived** | Live acceptance, or deferred per D2 |
| Agent 3 on one approved asset | Arabic draft + flag list; accepted on flag quality |
| Agent 6 first prospect batch of ten | Schema-conformant records, every detail sourced |
| Agent 5 round 1 variants | Results log seeded |
| Run test class 3 (research integrity) | 6 cases PASS |

**Exit:** all six agents produce structured, conformant output.

## Day 5 — Simulated week, handover

| Task | Output |
|---|---|
| Trigger every agent once on its intended cadence pattern | Six-agent dry run |
| Verify file destinations, naming, cross-agent handoffs | No collisions, no orphans |
| Run test class 5 (scheduling) | 6 cases PASS |
| Record all results in `tests/cases.md` and commit | Test run is evidence, not memory |
| Operator guide walkthrough; **time the founder's morning review** | The ~20-minute claim is measured, not asserted |
| Live approval cycle end to end | Founder approves and publishes one real item |
| Troubleshooting drill: break a CSV, watch the agent fail correctly | Founder has seen a failure before meeting one alone |
| One-hour handover | Client operates unaided |

**Exit:** simulated week complete, test pack recorded, client operating without
the developer.

## Sign-off criteria

- [ ] Knowledge base v1.0, client-approved, no PENDING facts in published output
- [ ] Six agents configured on their cadences (or the manual checklist)
- [ ] Test classes 1, 2, 4 fully PASS; class 2 with zero failures
- [ ] Funnel Analyst reproduces the six metrics — live, or fixture-accepted with
      live acceptance explicitly deferred per D2
- [ ] No output addresses a child, requests child data, or uses fear
- [ ] Founder completes a morning review in ~20 minutes using only the guide
- [ ] `tests/cases.md` results table filled and committed
- [ ] Open decisions D2, D6, D7 recorded as outstanding in the handover

## What is explicitly NOT delivered

Per KT/DEV/2026-001 section 1.2, plus what this analysis found:

- Website funnel amendments (dossier S04) — **including the analytics events and
  email capture that two of the six metrics depend on**
- Campaign or media buying
- Content strategy execution (dossier S05–S07 — the channels, the 90-day phases,
  the numbers)
- Native-speaker Arabic review
- Legal or compliance advice

Dossier sections 04–07 now have no owner. That is worth saying to the client
plainly: this engagement delivers the machine that produces the marketing, not
the marketing programme itself.

## Carried into Stage 2

Design fixes found in analysis, to be built in if Stage 2 is commissioned:

| Fix | Why |
|---|---|
| Add `PUBLISHING` and `PUBLISH_UNKNOWN` states | As specified, a connector timeout leaves the record at `APPROVED`, and the publish invariant then permits a retry to publish twice — the exact duplicate-publication risk section 10 calls brand-damaging |
| `UNIQUE(content_id, channel)` + idempotency key `hash(content_id, channel, approval_id)` | Section 9 references unique keys but never defines one |
| `knowledge_version`, `prompt_version`, `agent_run_id` on `publication` | Section 3.1 promises this audit trail; the section 7.1 schema has nowhere to put it |
| `approver_identity_source` on `approval` | The section 7.2 invariant needs an authenticated actor, not a name string |
| Per-run cost telemetry on `agent_run` | The whole plan is budget-framed with no usage estimate anywhere (D7) |
| Git repo continues from this one | Version control started Day 1 rather than Stage 2, so Stage 2 is a continuation, not a migration |
