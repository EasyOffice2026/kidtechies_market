# KidTechies AI Marketing Agent - Stage 1

Implementation of `docs/KidTechies-AI-Marketing-Agent-Senior-Development-Plan.docx`
(ref KT/DEV/2026-001), which in turn implements Section 08 of
`docs/KidTechies-Growth-Dossier.docx`.

Stage 1 is **no-code**: Claude scheduled tasks, a governed Markdown knowledge
base, an agent folder on the client's computer (no Google Drive), and human
approval before anything is published.
This repository is the version-control mechanism for the knowledge base and the
agent prompts - the thing the spec's change-control policy (S3.1) requires but
does not otherwise provide.

## The rule this whole system exists to protect

> AI prepares work; policy and product facts constrain it; the founder approves
> it; publishing stays manual until publishing itself is the bottleneck.

No agent has publishing authority. Not one. Since 2026-11-21 the approval is
also enforced in code: `tools/kt.mjs` approves and publishes, and refuses any
draft without an approval that matches the file as it is now
(`ops/publishing-guide.md`). A person runs it; an agent never does.

## Layout

| Path | What lives here | Who may change it |
|---|---|---|
| `docs/` | The two source documents. Read-only. | Nobody |
| `knowledge/` | The five governed knowledge files the agents read, plus `CHANGELOG.md` and `site-discrepancy-log.md` (a developer record, never a fact source) | Client-approved only; the developer may make corrections that match the live site or code (see `CHANGELOG.md`) |
| `queue/` | `content-queue.md` - what Content Factory writes next | Founder |
| `agents/` | The six agent prompts + shared controls | Developer, versioned |
| `skills/` | Saved Claude skill (voice + claims) | Developer, versioned |
| `contracts/` | CSV and record schemas the agents depend on | Frozen; change = change request |
| `tests/` | Test cases and fixtures for the S9.1 test classes | Developer |
| `ops/` | Operator guide, agent runbook, checklists, decision log | Developer -> client at handover |
| `drafts/` | `YYYY-MM-DD/` agent output. Git-ignored; the real drafts live in the agent folder on the client's computer (`D:\marketing agent\kidtechies_market-develop`). | Agents write, the approver approves |
| `inbox/` | The weekly CSV files for the Funnel Analyst. Git-ignored. | Copied in each Thursday |
| `logs/` | Creative results and school prospects (agents append rows only); `approvals.jsonl` and `publications.jsonl`, the approval and publication ledger (written only by `tools/kt.mjs`; git-ignored here, kept in the agent folder) | Agents append to the CSVs only; the ledger is the tool's |
| `tools/` | `kt.mjs` — check, approve and publish drafts; `npm test` runs its tests | Developer |

## Non-negotiables

1. `knowledge/product-facts.md` is the **only** source of product numbers.
   Not the live site - see `knowledge/site-discrepancy-log.md` for why.
2. Each of the five governed knowledge files carries owner / version /
   last-approved in its header (`site-discrepancy-log.md` has last-verified
   instead; `CHANGELOG.md` has no header). A file marked
   `AWAITING CLIENT APPROVAL`, or a version ending in `-DRAFT`, is not yet fit
   for parent-facing output.
3. Agents never publish. They write to `drafts/YYYY-MM-DD/`. A person approves
   and publishes with `tools/kt.mjs`.
4. Missing source, missing CSV column, missing fact -> the agent says so and
   stops. It does not guess.

## Words used in these files

- **The founder** (in the agent files) = the approver — Ibrahim, until the
  client names one (D14).
- **Mission** = a lesson. 14 in all, across 4 courses.
- **Final project** = the capstone at the end of each course (4 in all).
- **Sign-up** (in the numbers) = a parent **confirming** their email for the
  mailing list (the `email_captured` event, `emails_captured` in the weekly
  file) — not asking for the emails without confirming, and not creating an
  account. In copy, "nothing to sign up for" means something else: no account
  and no email are needed to try the first mission.
- **Site launch** = 2026-11-07, when the new site and the email list went
  live. Since then every visit, sign-up and event has been the team's own
  testing.
- **Go-live** = the day real parents are first invited: the first post
  published or ad run, which can only happen after D1. "The first full week
  after go-live" is the first Monday-to-Sunday week that starts after that
  day; the first real Friday report covers it.

## Where to start

`ops/handover.md` for the current state; `ops/operator-guide.md` for the daily
routine; `ops/publishing-guide.md` for approving and publishing;
`ops/review-2026-11-21.md` for why nothing has reached a parent yet, and what
was built about it. The original five-day build schedule (`ops/five-day-plan.md`) is a
historical record.
