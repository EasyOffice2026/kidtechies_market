# KidTechies AI Marketing Agent - Stage 1

Implementation of `docs/KidTechies-AI-Marketing-Agent-Senior-Development-Plan.docx`
(ref KT/DEV/2026-001), which in turn implements Section 08 of
`docs/KidTechies-Growth-Dossier.docx`.

Stage 1 is **no-code**: Claude scheduled tasks, a governed Markdown knowledge
base, Google Drive delivery, and human approval before anything is published.
This repository is the version-control mechanism for the knowledge base and the
agent prompts - the thing the spec's change-control policy (S3.1) requires but
does not otherwise provide.

## The rule this whole system exists to protect

> AI prepares work; policy and product facts constrain it; the founder approves
> it; publishing stays manual until publishing itself is the bottleneck.

No agent in Stage 1 has publishing authority. Not one.

## Layout

| Path | What lives here | Who may change it |
|---|---|---|
| `docs/` | The two source documents. Read-only. | Nobody |
| `knowledge/` | The five governed knowledge files + changelog | Client-approved only |
| `queue/` | `content-queue.md` - what Content Factory writes next | Founder |
| `agents/` | The six agent prompts + shared controls | Developer, versioned |
| `skills/` | Saved Claude skill (voice + claims) | Developer, versioned |
| `contracts/` | CSV and record schemas the agents depend on | Frozen; change = change request |
| `tests/` | Test cases and fixtures for the S9.1 test classes | Developer |
| `ops/` | Operator guide, agent runbook, checklists, decision log | Developer -> client at handover |
| `drafts/` | `YYYY-MM-DD/` agent output. Git-ignored; mirrors Drive. | Agents write, founder approves |

## Non-negotiables

1. `knowledge/product-facts.md` is the **only** source of product numbers.
   Not the live site - see `knowledge/site-discrepancy-log.md` for why.
2. Every knowledge file carries owner / version / last-approved in its header.
   A file with `AWAITING CLIENT CONFIRMATION` facts is not yet fit for
   parent-facing output.
3. Agents never publish. They write to `drafts/YYYY-MM-DD/`.
4. Missing source, missing CSV column, missing fact -> the agent says so and
   stops. It does not guess.

## Five-day build schedule

See `ops/five-day-plan.md`.
