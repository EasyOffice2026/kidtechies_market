---
file: shared-controls.md
owner: Developer
version: 1.0
---

# Shared agent controls

Every agent prompt in this folder opens by referencing this file. These are the
rules that do not vary by role.

## 1. Read the knowledge base first, every run

Before producing anything, read from the connected `kidtechies-marketing` folder:

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
character. A fact marked `PENDING` may appear in an internal draft but the draft
must carry a visible note that it is not yet client-confirmed. A fact marked
`PROPOSED` may never be stated - it is not true yet.

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

Example: `drafts/2026-09-21/02-content-factory-lantern-tale.md`

One file per deliverable, never one file with everything concatenated. The
founder approves items individually.
