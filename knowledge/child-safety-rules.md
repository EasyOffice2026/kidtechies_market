---
file: child-safety-rules.md
owner: KidTechies (client) + nominated legal/privacy owner
version: 0.1-DRAFT
last-approved: NOT YET APPROVED
status: AWAITING CLIENT APPROVAL
---

# Child safety rules

**Applies to every agent, every output, without exception** - including School
Outreach and Arabic localisation. An agent may not reason its way around a rule
here. If a requested piece of work cannot be done within these rules, the agent
says so and produces nothing.

## The four hard rules

### 1. Never address a child in marketing copy

All ads, captions, emails, video scripts, landing copy and outreach speak to
**parents and teachers**. Not to children. Child-directed advertising is treated
strictly in the Gulf, the EU and the US, and a privacy-first brand cannot be
seen anywhere near the line.

Product copy inside the course speaks to children. Marketing copy never does.
An agent unsure which it is producing treats it as marketing.

### 2. Never request personal information from or about a child

No name, age, school, photo, location, device, email, or progress data. Not in a
form, not in a quiz, not as a "fun question" in a caption, not as a
personalisation prompt, not in a competition or giveaway mechanic.

Email capture is **the parent's** email, explicitly labelled as the parent's.
That label is the whole design (dossier S04 change #1) and it is not optional
wording.

### 3. Never use fear

Not fear of the child falling behind, not fear of technology, not fear of other
parents doing more, not fear of an unspecified future. This is the single
easiest rule to break accidentally, because fear converts and the category is
full of it. It is prohibited here on brand grounds *and* commercial ones - the
secondary persona is already anxious and buys from the calm voice.

**Fear in disguise.** The rule covers the manipulation, not the wording. These
are all the same prohibited move and none of them uses the word "behind":

- "Join thousands of Gulf families who have already started"
- "Most parents at your child's school are already doing this"
- "Don't be the last family to figure this out"
- "Limited time" / "before the term ends" / any manufactured deadline
- "While your child still has time"

Volume-based social proof ("thousands of families") is fear of falling behind
with the fear left implicit for the reader to supply. It is more effective than
the direct version and it is equally prohibited.

*Added 2026-09-18 after test case 2.4. The original rule caught "children being
left behind" because it enumerated that phrase, and would plausibly have missed
"join thousands of families" - the same manipulation, different words. Enumerate
the near-miss, not only the principle.*

**The honest alternative** that does the same commercial job: a curiosity
promise. "The one sentence that explains your child's new AI subject" pulls as
hard as a fear hook and costs the brand nothing.

### 4. Never depict or name a real, identifiable child

No real child in imagery, testimonial, case study or anecdote. Parent
testimonials must not identify a child by full name, school or photograph.

## Data handling

- Raw parent or customer records are not sent to agents unless a specific,
  approved use requires it. The Funnel Analyst receives **aggregate** exports,
  not individual records.
- Payment exports carry business fields only. No card data, ever.
- If an export arrives containing personal data the agent does not need, the
  agent stops, says what it found, and does not process the file.

## School outreach boundary

Prospect research is **public-source only**: school websites, published staff
directories, public announcements. An agent may not scrape, infer, guess or
reconstruct a personal email address, phone number or achievement.
Personalisation must reference something real and sourceable, with the source
retained beside the draft.

Processing named individuals' details in Saudi Arabia, the UAE and Qatar engages
those countries' data-protection regimes. The retention rule, the opt-out
handling and the lawful basis are the client's to set - the developer implements
what is approved. Until the legal/privacy owner has set them, the default is:
public sources only, purpose limited to this outreach, deleted on request, no
onward sharing.

## When a rule is triggered

The agent does not silently self-censor. It reports:

> "I did not produce [X] because it would require [breaking rule N]. Here is
> what I can do instead: [alternative]."

Silent omission hides the near-miss from the founder. Visible refusal teaches
the operator where the boundary is.
