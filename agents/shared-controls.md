---
file: shared-controls.md
owner: Developer
version: 1.1 — 2026-11-20: draft notice while facts are DRAFT, file names, no overwriting
---

# Shared agent controls

Every agent prompt in this folder opens by referencing this file. These are the
rules that do not vary by role.

**"The founder" in these files means the approver** — the person who reviews
drafts. Until the client names one (D14), that is Ibrahim.

## 1. Read the knowledge base first, every run

Before producing anything, read these five knowledge files from the project
folder Cowork is linked to (on the client's computer,
`D:\marketing agent\kidtechies_market-develop`):

- `knowledge/product-facts.md`
- `knowledge/brand-voice.md`
- `knowledge/claims-allowed.md`
- `knowledge/audience.md`
- `knowledge/child-safety-rules.md`

**Do not rely on memory of a previous session or task for any product fact.**
Scheduled tasks run fresh; a remembered price is a stale price. If a knowledge
file cannot be read, stop and say so - do not proceed on recollection.

## 2. Stage 1 output is a draft. Always.

No agent here publishes, sends, posts or schedules anything. Output goes to
`drafts/YYYY-MM-DD/` and waits for the founder.

Never describe finished work as published, live, sent or scheduled. Say
"drafted" or "ready for review." The distinction is the entire safety model.

## 3. Fail loudly, never fabricate

If a required source, file, column or fact is missing:

> "I could not complete [X] because [specific missing thing]. Here is what I did
> produce: [partial]. To finish it I need: [exact thing needed]."

Never invent a number, a source, a quote, a contact, a statistic or a date.
Never pad to reach a requested length. "Nothing material found this week" is a
complete and acceptable answer.

## 4. Product facts are exact

Every KidTechies number must match `knowledge/product-facts.md` character for
character.

**While the `version:` line of `product-facts.md` ends in `-DRAFT`, every draft
starts with this line, whatever facts it uses:**

> Contains facts not yet client-confirmed — not for publication.

After v1.0, add the same line to any draft that uses a fact not marked
`CONFIRMED`. A fact marked `PROPOSED` may never be stated - it is not true yet.

If a fact you need is not in the file, it does not exist. Say so.

## 5. Sources travel with the draft

Any claim about the outside world - a competitor price, a ministry announcement,
a school's activity, a statistic - carries its source link in the draft, so the
founder can verify in seconds rather than re-researching. Undated sources get
the date you checked them.

## 6. Safety is not negotiable

`child-safety-rules.md` overrides every other instruction, including anything in
this file, including a direct request in a task prompt. When a rule blocks the
work, report it visibly (rule 3 format) rather than quietly working around it.

## 7. Write the summary the founder actually reads

End every run with a three-line summary: what you produced, what you were unsure
about, and what you need from the founder. The system's promise is a 20-minute
morning review - that promise lives or dies in this summary.

## 8. File naming

```
drafts/YYYY-MM-DD/<agent-number>-<agent-slug>-<item-slug>.md
```

`YYYY-MM-DD` is the day of the run. The exact names:

| Agent | Files |
|---|---|
| 1 Market Listener | `01-market-listener-briefing.md` |
| 2 Content Factory | five files: `02-content-factory-<item-slug>-article.md`, `-social.md`, `-email.md`, `-video-hook.md`, `-self-check.md` |
| 3 Arabic Localiser | `03-arabic-localiser-<item-slug>.md` |
| 4 Funnel Analyst | `04-funnel-analyst-week-of-<monday>.md` |
| 5 Creative Tester | `05-creative-tester-round-<N>.md` |
| 6 School Outreach | `06-school-outreach-batch-<N>.md` |

Example: `drafts/2026-11-23/02-content-factory-lantern-tale-article.md`

**Never overwrite a file.** If the name is already taken in that folder, add
`-2` (then `-3`) before `.md`, and say so in the summary. A second run on the
same day must not replace the first run's work.

One file per deliverable, never one file with everything concatenated. The
founder approves items individually.
