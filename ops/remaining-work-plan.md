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

- [x] `/for-parents` describes guest mode and parent accounts separately — live, checked 2026-11-13
- [ ] `mission_start` and `mission_complete` appear for the free mission, once per session
- [x] Pricing leads with hours; refund promise beside the price — live, checked 2026-11-13
- [ ] No template text anywhere; one brand name — page copy clean; the logo artwork still reads "AI for Kids"
- [ ] Teacher page live; Arabic page live after review — teacher page live 2026-11-07; Arabic waits on D6
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

- [x] A stranger finds the free mission, **finishes it**, leaves an email, **confirms**, and **receives email one** — on the live site, 2026-11-07 (developer's own Gmail standing in for the stranger)
- [ ] All of those steps are visible in analytics and the weekly export
- [x] Unsubscribe works in one click — live, 2026-11-07; the database row reads `unsubscribed`
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

---

# Part 1 — progress, 2026-10-17

Built on branch **`feature/part-1-website`** in the product repo. Seven commits;
nothing merged to `main`, nothing deployed.

| # | Task | Status |
|---|---|---|
| 1.0 | Land the in-progress work | ✅ Committed as found (password reset, migration 0001). Verified first: tsc clean, all 8 unit checks pass |
| 1.1 | Correct `/for-parents` | ✅ "No account, no sign-up, no email address" replaced; Sparky disclosure added; privacy page description fixed |
| 1.2 | Analytics module | ✅ Committed, off by default |
| 1.3 | Wire mission events | ✅ Start on leaving the plan screen; complete on quiz pass |
| 1.4 | Switch analytics on | ⏸ **Needs you**: choose a provider, set the Vercel env var |
| 1.5 | Pricing leads with hours | ✅ Header and bundle list; runtime moved down |
| 1.6 | Refund promise beside price | ✅ Under bundle and course grid, plus an FAQ entry |
| 1.7 | $100 anchor | ⏸ Client decision (D8) |
| 1.8 | Founder, location, contact | ⏸ Client to supply |
| 1.9 | Terms template text | ⏸ Needs the real company name and contact (1.8) |
| 1.10 | Brand name | ⏸ Client decision (D3) — changing a live brand is not a developer's call |
| 1.11 | Move build caveats | ✖ **Not needed.** The dossier's concern was caveats on the page where people pay; the pricing page has none. They sit on `/for-parents`, an honesty page, which is the right home. Subtitles still don't exist, so the caveat stays true. |
| 1.12 | Teacher page | ✅ `/for-teachers`, written for a school's data-protection lead |
| 1.13 | Arabic page | ⏸ Native reviewer (D6) |
| 1.14 | Certificate | ✅ Done earlier |

### Verified

`tsc` clean · lint clean · 8/8 unit checks · 19/19 analytics checks ·
**`check:pages` 29/29 routes render on a dev server**, including `/for-teachers`.

`check:pages` had never run on Windows — the dev-server helper used POSIX-only
process handling. Fixed (macOS/Linux unchanged), which surfaced two stale
expectations, both pre-dating this work: a `/login` marker from a form unused
since the Stripe commit, and Windows file-watcher noise. Both fixed.

### Found along the way

- **The knowledge base was wrong a second time.** On 2026-10-07 I read the
  database schema as live behaviour and recorded that children's progress is
  stored server-side. It isn't — nothing writes the child tables. Corrected from
  what the code actually writes; see `product-facts.md`.
- **Five fact questions answered from the code**: 28 activities, 70 quiz questions
  (counted: 25+15+10+20), the certificate, Maya/Pip/Glitch, and the free mission.
  The client now only needs to supply founder name, company details and contact.
- **The legal privacy notice is stale** (D11) — the one privacy item I did not
  touch, because it is a legal document.
- The register page and sign-in copy mention "children's profiles"; the account
  page says those "arrive with the next piece of work". A promise of a feature
  that is not built yet — worth aligning.
- The new migration in 1.0 must be applied deliberately at merge, not by accident.

### Before merging to `main`

1. Review the seven commits on `feature/part-1-website`
2. Decide how migration `0001_abnormal_crusher_hogan` reaches production
3. Merge and deploy — the privacy fix is the reason to do it soon

---

# Part 2 — progress, 2026-10-17

Built on the same branch, **`feature/part-1-website`**, four more commits. Nothing
merged, nothing deployed, **migration generated but not applied**.

| # | Task | Status |
|---|---|---|
| 2.1 | Provider decision | ✅ **No new provider needed.** The site already sends through Resend or SMTP; the list reuses that transport from its own address (`NEWSLETTER_FROM`), so account email is isolated. The client's offered email-API spend is not required for this. |
| 2.2 | SPF / DKIM / DMARC | ⏸ **Client DNS** — for the marketing subdomain, before the first real send |
| 2.3 | Subscriber table | ✅ Email + consent record only. No link to a child or a user account — checked by the DB test |
| 2.4 | Capture form at end of free mission | ✅ One field, "Parent's email, not your child's" |
| 2.5 | Double opt-in | ✅ Confirmation link, 7-day expiry, hash stored |
| 2.6 | Unsubscribe | ✅ One click, no sign-in; `List-Unsubscribe` + RFC 8058 one-click POST |
| 2.7 | `email_captured` event | ✅ Fires on the confirmation page, not on submit |
| 2.8 | Six-email sequence | ✅ Five welcome emails + the weekly question. **Draft copy for review** — drawn from product data, no suspended claims. English only |
| 2.9 | Sequence sender, no double-sends | ✅ Claim-first unique key; one email per subscriber per run |
| 2.10 | Weekly broadcast | ✅ "Maya's question of the week", keyed by ISO week so everyone gets the same one. Six seed questions |
| 2.11 | Register opt-in, unchecked | ✅ |
| 2.12 | `emails_captured` for the CSV | ✅ `npm run newsletter:weekly-count` |
| 2.13 | Consent / privacy sign-off | ⏸ **Client legal owner.** The privacy notice must mention the list (it also still says "there is no account" — D11) |

### Verified

16/16 logic checks · 33/33 pages render · production build clean · nothing paid
or secret reaches the browser · typecheck and lint clean.

**Not verified: the database checks.** `check:newsletter-db` proves the
no-double-send guarantee against a real database, and needs migration
`0002_newsletter` applied first. I did not apply it — the connection string in
`.env.local` appears to be the production database, and applying a migration
there is a deliberate act, not a side effect of a test run.

### To switch it on

1. Apply `drizzle/0002_newsletter.sql` (`npm run db:migrate`), then run
   `npm run check:newsletter-db` and expect every line to PASS
2. Set `NEWSLETTER_FROM` to an address on a separate subdomain, with SPF, DKIM
   and DMARC for it
3. Set `CRON_SECRET` on the Vercel project — without it the daily job refuses
   to run, by design
4. Have the founder read the six emails in `src/lib/newsletter/templates.ts`
   and `src/data/weekly-questions.ts`; they are drafts
5. Run the Phase 1 exit test: finish the free mission → leave an email →
   confirm → receive the welcome email → see all four steps in the export

### Found along the way

- Importing `isFree` into the lesson screen would have shipped **every paid
  lesson's quiz answers** to the browser, because it lived next to the course
  data. Moved to its own import-free module; the bundle check confirms nothing
  leaked.
- The welcome email's day-6 offer states the refund and "no subscription", and
  deliberately not the suspended "three months" comparison — enforced by a
  check, not by memory.

---

# Part 3 — progress, 2026-10-17

The two tasks that did not need the client's account are done. Everything
else in Part 3 is waiting on them.

| # | Task | Status |
|---|---|---|
| 3.1 | Capability check on the client's Claude account | ⏸ **Client account** — five minutes, and everything below it depends on the answer |
| 3.2 | Fact sign-off → knowledge base v1.0 | ⏸ Client (D1) |
| 3.3 | Setup on the client's account | ⏸ After 3.1 |
| 3.4 | Re-run tests on the client's account | ⏸ After 3.3 |
| 3.5 | Regenerate the withdrawn drafts | ✅ `drafts/2026-10-17/`: the UAE article (EN + AR) with the privacy paragraph rebuilt from what the code verifies, a new self-check, and ad variants V-011/V-012 replacing V-003/V-004. Social, email and video hook were never affected and stand. The outreach draft's do-not-publish notice was a **false positive** — "no student accounts, no student data" is true — and was removed. |
| 3.6 | Agent 6 redesign | ✅ Prompt and schema rewritten around what Gulf schools actually publish: institution-level records, a `contact_channel` (web form / inbox / switchboard) instead of a constructed email, `research_minutes` so the founder can budget, and drafts that ask "who should I send this to?" |
| 3.7 | Funnel Analyst live | ⏸ After Part 1's tracking is switched on |
| 3.8 | Arabic reviewer; "your child" gender rule | ⏸ Client (D6). A 16th flag on the Arabic article marks the new privacy sentence for first attention |
| 3.9 | Price framing | ⏸ Client (D8) |
| 3.10 | Usage cost ceiling | ⏸ Needs real runs on the client's account (D7) |
| 3.11 | Handover | ⏸ Last |

**Part 3 cannot progress further without the client.** The one unblocker is
3.1: five minutes on their Claude account to test a scheduled task.

---

# Client-independent work, 2026-10-17

Done while waiting on the client, both on `feature/part-1-website`:

| Work | Why it needed no request |
|---|---|
| **Rate limiting** on sign-up, resend, password reset and the newsletter form — 3 per address and 12 per caller per ten minutes | A gap the code documented itself; the newsletter form widened it. Pure engineering, 7 checks |
| **"Child profiles" promise removed** from the sign-up and account pages | The feature is not built; the account page said so. Copy now matches the code and the marketing |

The PR body in `ops/pr-part-1-2.md` still describes the branch accurately —
these are two more commits on it. Remaining client-independent item: the
staging run of the six agents on the developer's own Claude account.

---

# Client answers, 2026-10-18 — what changed

The client answered most of the open questions. Built and recorded the same day.

## In the product (`AI for kid/AI-tutor`, branch `feature/client-decisions`, 4 commits)

| Task | Status |
|---|---|
| 1.7 $100 anchor | ✅ **Kept** — the client chose the discount model. No site change needed. |
| 1.8 Company identity | ✅ Easy Office International, Kuwait, contact@easyofficeq8.com — footer, about page, terms, privacy notice, every email |
| 1.9 Terms placeholder | ✅ "whoever operates this installation" replaced; refund requests now say where to email |
| 1.10 Brand | ✅ **KidTechies**, tagline **AI for Kids**: site title, footer, dashboard, certificate, badge, Sparky's introduction. Saved-progress key deliberately unchanged. Logo artwork still reads "AI for Kids" — design task. |
| 1.4 Analytics | ✅ **Approved.** Public wording now switches by itself with the setting. Plausible signup + one env var remain. |
| D11 Privacy notice | ✅ Rewritten to match the product: accounts, Stripe, the mailing list, the company. Still marked "pending legal review" — whether a lawyer checks it is the client's call. |
| Story Shelf | ✅ Confirmed free; now said on the pricing page and in the emails |
| — | ✅ Fixed my own false claim: "one email a week at most" — the welcome run is five in ten days |
| — | ✅ Another false line found and fixed: the about page's "nothing about a child leaves their device" |
| — | ✅ `check:pages` now fails if any retired false claim reappears on any page |
| — | ✅ Newsletter replies go to the company inbox (Reply-To) |

Verified: tsc clean, lint clean, 8/8 unit checks, analytics 22/22, newsletter
20/20, rate limit 7/7, 33/33 pages render, production build clean.

## In the marketing system

- Knowledge base: brand, company, discount model, free Story Shelf, worldwide
  scope; a stale row that still prohibited the refund promise removed.
- Agent 1: worldwide scope, plus a monthly course-opportunity section.
- Agent 4: optional "where it is working" country section, with a contract,
  fixture and test case 4.7.
- Agent 6: paused — the client is not focusing on schools.
- GTM plan: owner Ibrahim; the paid lab now finds the message, then the market.
- `ops/email-setup.md`: Hostinger DNS + Resend, step by step.
- `ops/client/KidTechies-Email-Review.docx`: the seven emails, generated from
  the real templates, plus the fact list to approve.
- `ops/client/course-opportunities-2026-10.md`: the first monthly course brief.

## Still open — the client did not answer these

1. **Scheduled tasks on their Claude account (D4)** — still the biggest blocker
2. **Who approves content (D14)** — Ibrahim, presumably; they should say so
3. **Arabic reviewer (D6)**
4. **Office postal address (D15)** — for US email footers
5. **"Approved" on the fact list (D1)** — included in the email review pack

---

# Go-live, 2026-11-07

Parts 1 and 2 are live on kidtechies.com. Nothing had moved between 18 October
and 4 November because the merged work had never deployed; three things were in
the way, all found and fixed on 6–7 November.

| Blocker | What it was | Fix |
|---|---|---|
| The merge never reached the site | Vercel (`ai-for-kid`, Hobby plan, developer's account) deploys from **`schullegerhard/AI-for-KID`**, not `aquacommander/AI-tutor` or `EasyOffice2026/AI-for-kid`. Merges into the other two never deploy. | Branch pushed to `schullegerhard/AI-for-KID` and merged; Vercel deployed it |
| Mailing-list tables missing | Migration 0002 had never run against the production database | `npm run db:migrate` run by the developer; `check:db` passes |
| Every email refused | Resend error: "The kidtechies.com domain is not verified". The domain had been added to Resend (account `pochume86`) on 4 September and its DNS records were already at Hostinger, but verification had never been started. This also blocked account sign-up confirmations and password resets. | Verification started 7 Nov; DNS and domain verified within a minute |

### Verified on the live site

- New site: KidTechies name, `/for-teachers`, corrected privacy wording, pricing
- The daily email job refuses calls without `CRON_SECRET` (401)
- Full mailing-list path: email box at the end of the free mission → confirmation
  email (Inbox, from `noreply@kidtechies.com`) → "You are on the list" → welcome
  email with the printable sheet, 4 minutes later → sheet opens → unsubscribe
  page → database row `unsubscribed`
- The live site and `.env.local` use the same database: the test sign-up
  appeared in it

### Found along the way, fixed on `fix/picture-sort-content` (live 2026-11-09)

The free mission's picture sort scored clues its pictures do not show — tails
and feet on face-only pictures, "plastic" on a fluffy teddy bear, "fake ears"
where a bow is drawn. A careful child lost points for looking properly, in the
one lesson every parent sees. Every answer key now lists only what is on screen;
the clear cat, dog and rabbit are whole-body pictures; "Strong clues" shows out
of 16; the printable sheet names the Rabbit folder; and seven emoji that Windows
10 draws as empty boxes are replaced across the courses.

### Still to do

| Item | Who | Note |
|---|---|---|
| `EMAIL_FROM` = `KidTechies <noreply@kidtechies.com>` in Vercel | Developer | Gmail shows only the bare address today |
| Confirm Umami shows `mission_start`, `mission_complete`, `email_captured` | Developer | Umami is live since 2026-11-09 (Plausible sign-up failed; `feature/umami-analytics` added Umami as a provider). Script and disclosure verified on the live site; the events still need one test run |
| `news.kidtechies.com` for the newsletter | Developer | Optional now that the root domain sends; keeps a marketing complaint off account email |
| New logo artwork reading "KidTechies" | Client's designer | Header and footer still show "AI for Kids" |
| Make `EasyOffice2026/kidtechies_market` private | Client | It is public; the developer has write, not admin, access |
| Move Vercel to the client's repo and a Pro plan | Client + developer, at handover | Vercel Hobby is for non-commercial use; the site takes payments |
| Merge `feature/marketing-ops` (product repo) | Developer | Weekly export, failure alerts, 20 more weekly questions, canonical and www fixes — see "Review, 2026-11-13" below |
| Vercel: `NEWSLETTER_HEARTBEAT_URL`, `OPS_ALERT_EMAIL` | Developer | Free healthchecks.io check: period 1 day, grace 2 hours |
| Vercel → Domains: redirect `kidtechies.com` to `www.kidtechies.com` | Developer | Both serve the site today; the site URL is www |
| `UMAMI_API_KEY` in `.env.local`; first weekly export | Developer | Umami → Settings → API keys |
| D14, D6, D15, D1, D11, D7, D16, D17 | Client | D4 closed 2026-11-12 on the client's own account |

# Review, 2026-11-13

A full pass over both repositories and the live site. Fixed the same day on
`feature/marketing-ops` (product) and `develop` (this repository):

| Finding | Fix |
|---|---|
| Nobody produced the Funnel Analyst's weekly files; the contract still said Plausible | `npm run marketing:weekly-export` writes both files from Umami, Stripe (KidTechies purchases only) and the database; ad spend typed in. Checked byte for byte against the fixtures |
| `emails_captured` shrank for past weeks whenever someone unsubscribed | Counted by confirmation date, whatever the status is now |
| A failed daily email run left no trace after Vercel's one-hour logs | Heartbeat ping (catches the cron not running and mail being down) plus an alert email; never carries an address |
| Six weekly questions: a repeat every six weeks | Twenty more seed questions, for the approver's review — half a year before a repeat |
| Every page declared the home page as its canonical URL, so search engines were told to index only `/` | Only the home page declares a canonical |
| `www` and the bare domain both serve the site; Umami counted only the bare one | Umami counts both; a Vercel redirect is still to set |
| The content queue (15 READY, three used a week) had no one refilling it | Market Listener reports a queue check and proposes rows below six; the approver adds them |
| No record of what was posted, when, from which draft | `ops/publishing-log.md` |
| Runbook still scheduled the paused School Outreach agent | Runbook updated, with a weekly routine for the people around the agents |
| Handover pack dated 21 September | Rewritten for the current state |

Opened as decisions: D16 (ad test or pause the Creative Tester) and D17
(account ownership). Not changed, and still the client's: D1, D6, D7, D11,
D14, D15.
