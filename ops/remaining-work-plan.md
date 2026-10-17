---
file: remaining-work-plan.md
owner: Developer
version: 1.0
created: 2026-10-17
---

# Remaining development work — four parts

Everything left to build, divided into four parts that can be planned, staffed
and reported on separately.

| Part | What | Where | Effort | Calendar |
|---|---|---|---|---|
| **1** | Website: funnel, trust and measurement | Product repo (`AI-tutor`) | ~10 dev days | 19 Oct – 30 Oct |
| **2** | Email system: mailing list and nurture sequence | Product repo + email provider | ~11 dev days | 26 Oct – 13 Nov |
| **3** | Agent system go-live — finishing Stage 1 | This repo + client's Claude account | ~5 dev days, client-gated | 19 Oct – 6 Nov |
| **4** | Stage 2: approval-gated publishing automation | New repo | 6 weeks part-time | 7 Dec – 15 Jan, after a go/no-go gate |

## How the parts depend on each other

```
Part 1 ─┬─ tracking live ──────────► Part 3 (Funnel Analyst goes live)
        └─ capture page ready ─────► Part 2 ──► Phase 1 exit test passes
Part 3 ─── Stage 1 in daily use for ~4 weeks ──► go/no-go ──► Part 4
Part 2 ─── email platform ─────────► Part 4's first publishing connector
```

Parts 1 and 3 start together. Part 2 starts once Part 1's tracking is in. Part 4
does not start until Stage 1 has been used for real — that gate is the
specification's own (§10.2) and it is there for a reason.

## Before any of it: land the work in progress

The product repo has **38 files of uncommitted work on `main`** — a password-reset
feature, a new database migration, schema changes. Part 1 edits three of those
files (`parents-content.tsx`, `lesson-view.tsx`, `constants.ts`).

**Commit or merge that work first.** Editing files that are mid-change in someone's
working tree is how changes get lost or tangled. This is task 1.0, and nothing in
Part 1 should start before it.

---

# Part 1 — Website: funnel, trust and measurement

**Goal:** the site can capture, convert and measure, and every claim on it is true.

**Repo:** `C:\restuarant\AI for kid\AI-tutor` (Next.js 14, Drizzle/Postgres, Stripe)

**Why it comes first:** the dossier's rule is "fix the funnel before you spend a
riyal." Running campaigns before this is paying to fill a bucket with no bottom.
It also contains the one urgent item in the whole plan.

| # | Task | Owner | Effort | Done when |
|---|---|---|---|---|
| 1.0 | Land the uncommitted work on `main` | Dev | ½ day | Working tree clean |
| **1.1** | **Correct `/for-parents` privacy section** (D11) — `parents-content.tsx` lines 149 and 153 currently state guest-mode claims as true of the whole product | Dev | ¼ day | Page names both modes; deployed |
| 1.2 | Commit the analytics module (already built and tested — 19/19) | Dev | 0.1 day | On `main` |
| 1.3 | Wire `trackMissionStart` / `trackMissionComplete` into `lesson-view.tsx` — code is in `ops/phase-1-tracking-spec.md` | Dev | ½ day | Both fire once per session on a test run |
| 1.4 | Pick the analytics provider, set `NEXT_PUBLIC_ANALYTICS_DOMAIN`, and change `/for-parents` line 157 **the same day** | Dev + Client | ½ day | Events visible in the dashboard; "no third-party analytics" no longer claimed |
| 1.5 | Pricing page leads with **8–9 hours of guided learning**; film runtime moves down as a craft detail | Dev | ½ day | Hours is the headline beside the price |
| 1.6 | Move the **30-day refund promise** from `/terms` to beside the price | Dev | ¼ day | Visible on `/pricing` |
| 1.7 | Apply the client's decision on the **$100 struck-through anchor** | Dev | ¼ day | Blocked on client |
| 1.8 | Trust furniture: founder name and photo, company location, contact email | Dev | ½ day | Blocked on client supplying them |
| 1.9 | Replace the template text on `/terms` — *"whoever operates this installation of AI for Kids"* | Dev | ¼ day | A real company and contact named |
| 1.10 | One brand name: **KidTechies** in title, footer and metadata; "AI for kids" as descriptor only (D3) | Dev | ¼ day | `SITE.name` and metadata updated |
| 1.11 | Move the build-status caveats (no subtitles, placeholder art, quizzes under review) to a dated **"What we're building next"** page | Dev | ½ day | Off the page where parents pay |
| 1.12 | **Teacher / school page**: no student accounts, no data collected, printables, a "request a classroom licence" form | Dev | 2 days | Live, linked from the parent page |
| 1.13 | **Arabic landing page**: one RTL page explaining the product for parents who search in Arabic | Dev | 2 days | Live after native review (D6) |
| ~~1.14~~ | ~~Confirm the certificate route~~ — **done 2026-10-17**: live at `/certificate`, fact promoted to verified | Dev | — | Done |

### Rule for every task that changes a fact

When a task changes what is true on the site — the refund moves, analytics goes
live, the brand name changes — **update `knowledge/product-facts.md` in the same
change.** Agents read that file before every run. A site fix with a stale fact
file means agents keep writing the old claim.

### Acceptance

- [ ] `/for-parents` describes guest mode and parent accounts separately
- [ ] `mission_start` and `mission_complete` appear for the free mission, once per session
- [ ] Pricing leads with hours; refund promise beside the price
- [ ] No template text anywhere; one brand name
- [ ] Teacher page live; Arabic page live after review
- [ ] `product-facts.md` matches the site

### Risks

| Risk | Control |
|---|---|
| Editing files with uncommitted work | Task 1.0 first, no exceptions |
| Analytics switched on without the privacy-page change | Module is inert until the env var is set; make 1.4 one deployment |
| Client info (founder, address) slow to arrive | 1.8 and 1.9 don't block anything else; ship the rest |

---

# Part 2 — Email system: mailing list and nurture sequence

**Goal:** a parent who finishes the free mission can join a list, and the list
works for the business automatically from then on.

**Why:** without a list every visitor is lost permanently. This is the investment
the client has offered to make, and it is the single highest-value change in the
dossier.

### What exists already

The product sends **account emails** (verification, password reset) through
**Resend / SMTP**. There is **no mailing list, subscriber store or sequence** —
confirmed in the code.

| # | Task | Owner | Effort | Done when |
|---|---|---|---|---|
| 2.1 | **Provider decision.** Check whether the current provider covers lists, scheduled sequences, broadcasts and unsubscribe. If not, add a marketing provider. Use a **separate sending subdomain** for marketing so a bad send can't hurt account-email delivery. | Dev + Client | 1 day | Provider chosen, cost approved |
| 2.2 | Sending-domain authentication: SPF, DKIM, DMARC | Dev + Client (DNS) | ½ day | All three pass |
| 2.3 | **Subscriber table**: email, status (`pending` / `confirmed` / `unsubscribed`), consent time, consent source, language (`en` / `ar`). **No child data, and no link to any child profile or progress.** | Dev | 1 day | Migration applied |
| 2.4 | **Capture form at the end of free Mission 1** — one field, labelled *"Parent's email, not your child's."* That label is the design, not decoration. | Dev | 1 day | Live on the completion screen |
| 2.5 | **Double opt-in**: confirmation email and confirmation page | Dev | 1 day | Only confirmed addresses receive marketing |
| 2.6 | **Unsubscribe**: one-click link in every email, plus the `List-Unsubscribe` header | Dev | ½ day | Unsubscribing works in one click |
| 2.7 | Call `trackEmailCaptured()` on **confirmed** success | Dev | 0.1 day | Weekly count matches confirmed sign-ups |
| 2.8 | **Nurture templates** — six emails: Day 0 printable sheet · Day 2 a Story Shelf tale · Day 4 three things AI gets wrong · Day 6 Mission 2 preview + bundle offer · Day 10 "is AI alive?" · then weekly | Dev | 2 days | Templates render in EN; AR after review |
| 2.9 | **Sequence sender**: a scheduled job that sends each subscriber their next step. **One send per subscriber per step, enforced by a unique key**, so a retry or re-run can never double-send. | Dev | 2 days | Re-running the job sends nothing twice |
| 2.10 | **Weekly broadcast** — "Maya's Question of the Week", the retention asset | Dev | ½ day | Sends to confirmed subscribers |
| 2.11 | **Account holders**: add an opt-in checkbox to `/register`, **unchecked by default**. Registering is not consent to marketing. | Dev | ½ day | No account holder is auto-subscribed |
| 2.12 | Weekly `emails_captured` into the CSV export for the Funnel Analyst | Dev | ½ day | Column populated |
| 2.13 | Consent and privacy: privacy policy mentions the list; consent records retained; client's legal owner signs off for Kuwait and the GCC | Client | — | Signed off |

### Content

Email copy is produced by the **Content Factory (Agent 2)** against the approved
knowledge base, and approved by the founder like any other draft. The developer
builds templates and sending; the agents write the words. Arabic versions wait
for the native reviewer.

### Acceptance — the Phase 1 exit test

- [ ] A stranger finds the free mission, **finishes it**, leaves an email, **confirms**, and **receives email one**
- [ ] All of those steps are visible in analytics and the weekly export
- [ ] Unsubscribe works in one click
- [ ] A re-run of the sequence job sends nothing twice

### Risks

| Risk | Control |
|---|---|
| New sending domain lands in spam | 2.2 before any send; start small; separate subdomain |
| Double-sending from retries | Unique key per subscriber per step (2.9) |
| Marketing to people who never consented | Double opt-in; unchecked box on register |
| Arabic sent without review | AR templates stay off until D6 is closed |

---

# Part 3 — Agent system go-live: finishing Stage 1

**Goal:** the six agents run on the client's own account, against approved facts,
and the founder can operate them alone.

**Where:** this repo and the client's Claude account.

**Why it's mostly waiting:** almost every task here is gated on a client answer
or the client's account. The development effort is small; the elapsed time
depends on how fast decisions come back.

| # | Task | Owner | Effort | Done when |
|---|---|---|---|---|
| 3.1 | **Capability check on the client's Claude account** (D4) — scheduled tasks, skills, web research, folder reads *inside a scheduled run*. Procedure: `ops/day-1/capability-verification.md` | Dev + Client | ½ day | Confirmed, or manual-trigger mode adopted |
| 3.2 | **Fact sign-off** (D1) → knowledge base **v1.0**; flip PENDING and SITE-VERIFIED rows to CONFIRMED | Client → Dev | ½ day | `product-facts.md` at v1.0 |
| 3.3 | Setup: connect the folder, install the `kidtechies-voice` skill, create six scheduled tasks, connect Drive | Dev | ½ day | All six on cadence |
| 3.4 | **Re-run tests on the client's account**: class 1 (needs v1.0), class 2 in full, class 4, cases 5.1 / 5.2 / 5.6 | Dev | ½ day | All pass — no partial pass on child safety |
| 3.5 | **Regenerate the withdrawn drafts** — the UAE package (EN + AR) and ad variants V-003 / V-004 were written on the false privacy claim; re-run Agents 2, 3 and 5 against the corrected knowledge base | Dev | ½ day | Five drafts and two variants replaced |
| 3.6 | **Agent 6 redesign** — institution-level prospects, published channels only, founder places first contact; update prompt and prospect schema; budget ~20 min per school | Dev | 1 day | Batch of ten produced honestly; needs the target school list |
| 3.7 | **Funnel Analyst live** — once Part 1 tracking is live and the **Stripe** export is mapped to `contracts/payment-csv.md` | Dev | ½ day | Six metrics from real data; D2 closes |
| 3.8 | Arabic: reviewer named (D6); record the **"your child" gender decision** in `brand-voice.md`; reviewer clears the article's flags | Client + Dev | ¼ day | Rule recorded; article cleared |
| 3.9 | Apply the **price framing** decision (D8) to `claims-allowed.md` and pillar 4 | Dev | ¼ day | Pillar 4 testable again |
| 3.10 | Record observed **usage cost** per agent run and agree a monthly ceiling (D7) | Dev + Client | ¼ day | Ceiling agreed |
| 3.11 | **Handover**: operator walkthrough; time the founder's morning review against the ~20-minute target | Dev + Client | ½ day | Founder runs a week unaided |

### Acceptance

The sign-off checklist in `ops/five-day-plan.md`, all ticked:

- [ ] Knowledge base v1.0, client-approved
- [ ] Six agents on cadence on the client's account
- [ ] Test classes 1, 2, 4 pass there; class 2 with zero failures
- [ ] Funnel Analyst reproducing the six metrics from live data
- [ ] Morning review measured at roughly 20 minutes

### Risks

| Risk | Control |
|---|---|
| Client's plan lacks scheduled tasks | Manual-trigger fallback is written; ~5 min/day |
| Facts approval stalls | Agents stay in test mode — nothing wrong ships, but nothing ships |
| Agent 6 expectation gap | Raise the redesign explicitly at handover, not after |

---

# Part 4 — Stage 2: approval-gated publishing automation

**Goal:** an approved draft reaches its channel with no copy-paste, and an
unapproved draft cannot be published — enforced in code, not in a prompt.

**Where:** a new private repository. Node.js 22 LTS, TypeScript 5, Claude Agent
SDK, SQLite, Zod.

### The gate — do not start until all three are true

1. Stage 1 has run in **daily use** long enough (~4 weeks) to show which **two or
   three** agents actually save the founder time
2. **Publishing**, not approving, has become the bottleneck
3. The channel APIs, credentials and an approval owner are available

Earliest realistic decision: **early December**. The specification is blunt that
most founders find two of the six agents carry the value — rebuilding all six
before knowing which two is the waste this gate exists to prevent.

| Week | Work | Done when |
|---|---|---|
| **1** | **Discovery and runtime.** Pick the agents from Stage 1 usage data. Confirm channel APIs — the Part 2 email platform is the natural first connector. Hosting, auth model, private repo, TypeScript runtime. | Architecture and connector contracts approved |
| **2** | **Agent SDK rebuild.** Selected agents as subagents with scoped tools. Zod schemas for every output. **The knowledge base as code**: a product-number checker against `product-facts.md`, a prohibited-claim scanner, child-safety rules as deterministic checks. | Subagents reproduce Stage 1 output in staging |
| **3** | **State and idempotency** — see the data model below | Repeating a task cannot publish twice |
| **4** | **Connectors and the approval gate.** Read-only first, then write — only behind an approval record. Approve / reject from a single message. | Approved test content reaches a sandbox channel |
| **5** | **Reliability.** Retries with backoff, timeouts, structured JSON logs, per-run cost telemetry, rollback and manual recovery. | Failure tests cause no partial or duplicate publish |
| **6** | **UAT and cutover.** Production credentials, end-to-end test, runbook, backup and restore check, handover. | Live, with audit history |

### Data model — with the fixes the original spec needs

The specification's state model can double-publish: a connector timeout leaves a
record at `APPROVED`, and its publish rule then lets a retry post the same item
again. These are corrected here, not later.

**States:** `DRAFT → READY → APPROVED → PUBLISHING → PUBLISHED`, plus
`REJECTED` and `PUBLISH_UNKNOWN`.

- Only `APPROVED → PUBLISHING` may call a connector
- `PUBLISH_UNKNOWN` — a timeout or ambiguous response — **never auto-retries**;
  a person resolves it

| Table | Key fields | Fix carried in |
|---|---|---|
| `content_item` | id, type, status, source_ref | Full state set above |
| `agent_run` | id, agent, started/ended, result, **tokens, cost** | Cost telemetry (D7) |
| `approval` | content_id, decision, timestamp, **approver identity source** | Approval needs an authenticated actor, not a name string |
| `publication` | content_id, channel, external_id, status, **knowledge_version, prompt_version, agent_run_id** | Audit trail the spec promises but had no column for |
| | **`UNIQUE(content_id, channel)`** + idempotency key `hash(content_id, channel, approval_id)` | The unique key the spec references but never defines |

SQLite is right for a single-operator runtime. The product itself runs on
Postgres; if the client wants the two hosted together, Postgres is a reasonable
substitute — decide in Week 1.

### Acceptance

- [ ] An approved draft reaches its channel with no copy-paste
- [ ] **No approval record, no write** — verified by attempting it
- [ ] A connector timeout test produces `PUBLISH_UNKNOWN`, never a second post
- [ ] Every publication records which knowledge and prompt version produced it

---

# Calendar

Starting Monday 19 October.

| Week of | Part 1 | Part 2 | Part 3 | Part 4 |
|---|---|---|---|---|
| 19 Oct | **1.0 → 1.4**, pricing | — | 3.1 capability, 3.3 setup | — |
| 26 Oct | Trust, teacher page | 2.1 – 2.6 | 3.2 facts → v1.0, 3.4 tests | — |
| 2 Nov | Arabic page (after review) | 2.7 – 2.11 | 3.5 – 3.9 | — |
| 9 Nov | — | 2.12, **exit test** | 3.10, **handover** | — |
| 16 Nov – 4 Dec | — | sequence running | **Stage 1 in daily use** | gate decision ~4 Dec |
| 7 Dec – 15 Jan | — | — | — | Weeks 1–6 |

### Effect on the GTM plan

GTM Phase 1 was scheduled 6 Oct – 4 Nov. Its exit test now passes when Parts 1
and 2 finish — **around 13 November, about nine days late.** The later GTM phases
shift by the same amount. Better to say so now than to report it at the end.

## What the client has to supply

| Needed | Blocks |
|---|---|
| Fact answers (D1) | Part 3, and every published claim |
| Founder name, company location, contact email | 1.8, 1.9 |
| Price framing and anchor decision (D8) | 1.7, 3.9 |
| Native Arabic reviewer (D6) | 1.13, Arabic emails, 3.8 |
| Target cities and school types | 3.6 |
| Five minutes on their Claude account | 3.1 — and with it, everything in Part 3 |
| Email provider cost approval and DNS access | 2.1, 2.2 |
| An owner for the GTM plan (D9) | The marketing programme Parts 1–2 enable |
