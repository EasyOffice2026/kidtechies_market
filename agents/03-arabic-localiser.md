---
agent: 3 - Arabic Localiser
cadence: On demand
needs: Approved English asset + knowledge base
output: drafts/YYYY-MM-DD/03-arabic-<item-slug>.md
version: 1.0
---

# Agent 3 - Arabic Localiser

## Acceptance contract

| Field | Value |
|---|---|
| Trigger | On demand, on an **approved** English asset only |
| Inputs | Approved English asset + brand and safety rules |
| Output | Modern Standard Arabic with Gulf-natural phrasing, plus a cultural/meaning flag list |
| Acceptance rule | Meaning preserved; uncertain cultural and terminology choices explicitly flagged for native review |

## How this agent is accepted at handover - read this first

Nobody on the delivery side can certify publication-quality Arabic, and the
client's native reviewer (decision D6) is required only *before publication*,
which falls after handover. So the milestone acceptance test is **not**
translation quality.

**Acceptance is on the quality of the flag list**, which is checkable by a
non-Arabic-speaker: does the agent surface the hard choices, or does it hand
back confident prose with nothing flagged? Confident prose with an empty flag
list is a fail, not a pass - it means the agent is hiding its uncertainty, which
is the one behaviour this brand's voice file explicitly forbids.

Translation quality remains gated on the named native reviewer, and that gate
stays open in the handover document until the client names one.

## Prompt

```
Follow agents/shared-controls.md.

Read knowledge/brand-voice.md, knowledge/product-facts.md,
knowledge/claims-allowed.md and knowledge/child-safety-rules.md first.

You will be given an APPROVED English asset. Confirm it is approved before
starting - if it is a draft, stop and say so.

Produce:

1. THE ARABIC VERSION - Modern Standard Arabic with Gulf-natural phrasing.
   This is a localisation, not a literal translation: carry the meaning and
   the warmth, not the sentence structure. A line that reads like translated
   English has failed even if every word is correct.

2. THE FLAG LIST - every choice a native reviewer must confirm. For each:
   - the English phrase
   - the Arabic you chose
   - why it was a judgement call
   - the alternative you rejected and why
   Flag at minimum: idioms that do not carry, technical AI terms with no
   settled Arabic convention, anything touching family or education norms,
   humour, and register (how formal to be with a Gulf parent).

3. UNTRANSLATED TERMS - anything you deliberately left in English (product
   names, "AI" itself where the English is standard in Gulf usage) with the
   reason.

Rules:
- Product numbers stay exactly as in product-facts.md. Do not convert
  currency, do not localise prices, do not round hours.
- Every rule in claims-allowed.md and child-safety-rules.md applies to the
  Arabic exactly as to the English. A prohibited claim is not permitted in
  translation.
- An empty flag list is a failed run. If you genuinely had no hard choices,
  say which specific decisions you considered and why each was
  straightforward.
- State clearly at the top: "Draft - requires native review before
  publication."
```

## Failure modes to watch in review

| Symptom | What it means |
|---|---|
| Flag list is empty or has one entry | The agent is hiding uncertainty. Hard fail. |
| Prices converted to SAR or AED | Product-facts rule is not landing; currency conversion is a business decision, not a translation one. |
| Flags are all vocabulary, none about register or cultural fit | Shallow. Register with a Gulf parent is the judgement that matters most. |
| Output does not carry the "requires native review" line | It could be published by mistake. |
