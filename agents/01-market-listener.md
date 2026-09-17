---
agent: 1 - Market Listener
cadence: Weekly, Monday 07:00
needs: Web research
output: drafts/YYYY-MM-DD/01-market-listener-briefing.md
version: 1.0
---

# Agent 1 - Market Listener

## Acceptance contract

| Field | Value |
|---|---|
| Trigger | Weekly, Monday 07:00 |
| Inputs | Gulf AI-education news; ministry/school-system announcements; competitor pricing and feature changes; public parent questions |
| Output | One-page brief: max five verified changes, why each matters, three ranked content angles |
| Acceptance rule | Every external factual claim carries a source. No padding if nothing material changed. |

## Prompt

```
Follow agents/shared-controls.md.

Read knowledge/brand-voice.md, knowledge/product-facts.md and
knowledge/audience.md from the kidtechies-marketing folder first.

Then research and report on the past 7 days:

1. Any government, ministry or school-system announcement about AI in
   education in Saudi Arabia, the UAE, Qatar or Kuwait.
2. Pricing, feature or positioning changes at CodaKid, Create&Learn,
   Tynker, Juni Learning and Code.org's AI track.
3. Three questions parents asked publicly this week about children and AI
   (forums, Reddit, Quora, news comments) that KidTechies could answer.

Output a one-page briefing to
drafts/YYYY-MM-DD/01-market-listener-briefing.md:

- WHAT CHANGED - max 5 bullets, each with a source link and the date you
  checked it.
- WHY IT MATTERS TO KIDTECHIES - 2 sentences each, written for a founder
  deciding where to spend this week, not for a reader who wants a summary.
- THREE CONTENT ANGLES - ranked by urgency, each with a headline that could
  be published as written, and the persona it targets.

Rules:
- Cite a source for every factual claim. A claim without a source does not
  go in the briefing.
- If a category has nothing significant, write "Nothing material this week"
  and move on. Do not pad. A three-bullet honest briefing is worth more than
  a five-bullet padded one, and padding trains the founder to skim.
- Never assert a KidTechies product fact that is not in product-facts.md.
- Competitor prices in product-facts.md are third-party and unverified. If
  you cite one, re-verify it this run and give the source, or mark it
  "approximate, last checked [date]".
- Flag explicitly if a previously reported item has changed or been
  corrected since you last reported it.
```

## Standing question for the first run - decision D5

The Growth Dossier's strongest free hook is the Gulf school-curriculum story,
and the dossier itself calls it perishable: *"Publish that article in week one,
not week six."* The dossier is dated 3 September 2026 and cites rollouts from
the 2025-26 school year.

**The first run must answer:** is this hook still live, is there a fresher
angle - a new term, a new ministry directive, a parent reaction wave - or has it
gone stale?

Add this to the first run only:

```
Additionally, assess one specific question and answer it directly:

Is the Saudi / UAE school AI-curriculum story still a live news hook a Gulf
parenting publication would run this month, or has it gone stale? Give the
evidence either way, and if it is stale, identify the freshest adjacent hook
that is live right now.
```

The answer unblocks or rewrites item 1 in `queue/content-queue.md`.

## Failure modes to watch in review

| Symptom | What it means |
|---|---|
| Five bullets every single week | It is padding. Tighten the "nothing material" instruction. |
| Sources are all aggregators or blog roundups | Push for primary sources, especially on ministry claims. |
| Content angles repeat last week's | The queue is drifting; the founder should redirect. |
| A competitor price is stated without a date | Re-verification rule is not landing. |
