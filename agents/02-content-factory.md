---
agent: 2 - Content Factory
cadence: Monday / Wednesday / Saturday 08:00
needs: Knowledge base + queue/content-queue.md
output: drafts/YYYY-MM-DD/02-content-factory-<item-slug>-*.md
version: 1.0
---

# Agent 2 - Content Factory

## Acceptance contract

| Field | Value |
|---|---|
| Trigger | Mon / Wed / Sat 08:00 |
| Inputs | Next unused queue item, brand voice, product facts, claims, audience rules |
| Output | 800-1,000 word article, five social captions, one nurture email, one ~25-second video hook |
| Acceptance rule | Product numbers exact; forbidden claims absent; no child personal-data prompts; exactly one natural free-mission CTA |

## Prompt

```
Follow agents/shared-controls.md.

Read knowledge/brand-voice.md, knowledge/product-facts.md,
knowledge/claims-allowed.md, knowledge/audience.md and
knowledge/child-safety-rules.md before writing anything.

Open queue/content-queue.md and take the TOPMOST item with status READY.
Skip anything marked BLOCKED, DONE or HOLD. Do not invent a topic that is
not on the queue. If no READY item exists, say so and stop.

Produce one package, four files, in drafts/YYYY-MM-DD/:

1. ARTICLE - 800-1000 words, answer-first, aimed at the persona named in the
   queue row. Open with that parent's real question in their own words, answer
   it in the first paragraph, then earn the rest. One link to the free first
   mission, placed where it genuinely helps the reader. No hard sell.

2. FIVE SOCIAL CAPTIONS - two Instagram, two LinkedIn (aimed at teachers and
   school ICT coordinators), one TikTok/Reels spoken hook under 20 seconds.

3. ONE NURTURE EMAIL - subject line plus body, under 200 words, one idea,
   one link.

4. A 25-SECOND VIDEO HOOK SCRIPT on the house format: show AI getting
   something wrong, then ask whether a child could spot why. Include the
   spoken line and a bracketed note on what is on screen.

Then run the self-check below and include its results at the end of your
summary. Finally, mark the queue item DONE with today's draft folder date,
and give me a three-line summary: what you wrote, what you were unsure
about, what you need from me.
```

## The self-check block

This is the part that makes the difference between output that looks right and
output that is right. It runs inside the same task, before the agent reports
done.

```
SELF-CHECK - report each line as PASS or FAIL with the evidence:

1. FACTS - list every KidTechies number you used and the line in
   product-facts.md it came from. Any number you cannot trace is a FAIL;
   remove it and say so.
2. FACT STATUS - if any fact you used is marked PENDING, add a visible
   note at the top of the article: "Contains facts not yet client-confirmed
   - not for publication." If any is marked PROPOSED, you should not have
   used it at all.
3. CLAIMS - check your copy against every prohibited row in
   claims-allowed.md. Quote any line you removed and why.
4. CHILD SAFETY - confirm nothing is addressed to a child, nothing requests
   any personal detail from or about a child, no fear-based hook aimed at a
   parent, no real identifiable child depicted.
5. CTA - confirm exactly one free-mission call to action across the whole
   package per piece, naturally placed, no second offer stacked beside it.
6. SOURCES - every external claim has a source link with the date checked.
7. VOICE - read the article's opening paragraph against the three approved
   examples in brand-voice.md. Does it sound like the same company? If not,
   rewrite it before finishing.
8. RUNTIME - confirm "23:48" does not appear as a headline value claim
   beside the price anywhere in the package.
```

## Why the self-check is written this way

A self-check that asks "did you follow the rules?" gets "yes" every time.
Each line above forces the agent to produce *evidence* - to list the numbers and
trace them, to quote what it removed. That is checkable by a founder in a
20-minute review, which is the whole operating promise.

The check is not a substitute for the founder's read. Stage 2 replaces items 1-6
with deterministic code validation, because a self-check is a prompt instruction
and KT/DEV/2026-001 section 7.2 is explicit that prompt instructions are not a
sufficient control for a write operation.

## Failure modes to watch in review

| Symptom | What it means |
|---|---|
| Self-check reports all PASS with no evidence quoted | It is asserting, not checking. Tighten the evidence requirement. |
| Article opens with a definition rather than the parent's question | Answer-first instruction is not landing. |
| CTA appears three times | The "one natural placement" rule is losing to sales instinct. |
| Captions read interchangeably across platforms | LinkedIn captions should sound like they are for a teacher; they are not. |
| The video hook describes the product rather than showing a mistake | The format is the differentiator - hold the line on it. |
| Queue item not marked DONE | Next run will duplicate the work. |
