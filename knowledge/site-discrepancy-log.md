---
file: site-discrepancy-log.md
owner: Developer (maintains) / Client (resolves)
version: 0.2
last-verified: 2026-09-18 against kidtechies.com
---

# Site discrepancy log

Where the live site and `product-facts.md` disagree, it is recorded here and the
client-approved value wins (decision D1).

This log exists because the source documents contradict each other. KT/DEV/2026-001
section 5 Day 2 says to verify product numbers against the live site; the Growth
Dossier (S01 Blocker 02, S02) says the site's headline value claim is the error
to retire. Verifying against the site would import a known error into the
canonical file, where the acceptance rule *"every product number matches
product-facts.md exactly"* would enforce it across every agent.

**Verified against the live site on 2026-09-18.** Pages checked: `/`, `/pricing`,
`/for-parents`, `/terms`, `/sitemap.xml`. Findings below are observed, not
assumed.

## A note on what the verification found

The dossier's picture of the site is **mostly right and wrong in four specific
places.** Three of its blockers hold up. But the refund promise it says is
missing does exist, the pricing page already carries the hours claim it says is
absent, and the age structure is not what the dossier describes. Rows 8-11 are
new and were not in the dossier at all.

That is the argument for this log existing: the dossier is two weeks old and was
never a substitute for looking.

## Confirmed - the dossier was right

| # | Site says | product-facts.md says | Resolution | Status |
|---|---|---|---|---|
| 1 | Pricing page shows "23:48 of animated film" **and** "around 8-9 hours of guided learning" | Lead with 8-9 hours; runtime is a craft detail placed lower | The hours claim is already there - the fix is **which one leads**, not adding one. Smaller job than the dossier implies. | OPEN - revised |
| 2 | "AI for Kids" in the page title **and** footer | KidTechies is the brand; "AI for kids" is a descriptor only | Confirmed exactly as the dossier describes. Client decision D3, then site correction. | OPEN |
| 3 | `/for-parents` carries: films have no subtitles, illustrations are placeholders, a teacher is still reviewing quiz wording | True; must not be contradicted | Move to a dated "What we're building next" page. **Until then, agents may not claim classroom-readiness unqualified** - a school will notice. | OPEN |
| 4 | No founder name, no company legal name, no location, no contact address anywhere | Recorded as MISSING | Highest-priority trust fix. See row 9. | OPEN |
| 5 | No testimonials | No testimonial may appear in any draft until three real quotes are on file | Give 20 families the bundle free for honest feedback (dossier S06 Phase 1) | OPEN |
| 6 | Sitemap: every URL carries an identical lastmod (`2026-09-03T17:52:02.596Z`) and a blanket "monthly" changefreq | n/a | Confirmed exactly. Also tells us the site has not changed since the dossier was written. SEO hygiene, outside this engagement. | NOTED |

## Corrections - the dossier was wrong

| # | # | Finding | Effect |
|---|---|---|---|
| 7 | **The 30-day refund promise exists.** `/terms`: *"If the course is not right for your child, ask for a refund within 30 days and you will get one."* | The dossier says the site has no visible refund promise, and we had marked it PROPOSED - forbidden to state. **It is real.** Agents may state it now. The site job is to *move* it to `/pricing`, not to write one. | RESOLVED - fact promoted |
| 8 | **Sitemap has 43 URLs, not 45.** | Trivial in itself; matters because it shows dossier figures need checking, not copying. | NOTED |
| 9 | **Age structure is not three bands.** Site: *"ages 9-12, adaptable for 6-8 and 13-16."* Dossier presents `6-8 · 9-12 · 13-16` as equal bands. | **Material.** A parent of a 7-year-old sold "a course for their age" who finds 9-12 material adapted down has been misled. Copy must say "designed for 9-12, adaptable for younger and older." | RESOLVED - fact corrected |
| 10 | **Bundle carries a $100 anchor**, struck through, "Save $30 / 30% off". | Not mentioned in the dossier anywhere. Changes the pricing conversation: the page already discounts, so "less than three months of the alternatives, forever" now sits beside a countdown-style saving. Client should decide whether the anchor stays. | OPEN - client decision |
| 11 | **Mission distribution is 5 / 4 / 3 / 2.** | "Smart and Safe AI Heroes" - the course the dossier says the worried screen-time parent buys *first* - is the thinnest, at two missions. The entry point for ~25% of the market is the least built-out course. | OPEN - client decision |

## Could not verify

Not found on any page checked. Still `PENDING` in `product-facts.md`, so agents
cannot use them:

| Fact | Note |
|---|---|
| 28 activities | Plausible as 14 missions x 2, but not stated |
| 70 quiz questions | Plausible as 14 x 5, but not stated |
| Printable certificate | Not found |
| Printable activity sheets | Not found - though the teacher persona's whole pitch depends on them |
| Maya, Pip and Glitch | Not found on the pages checked |
| Free-tier boundary | Which mission, which stories |

The printables are the one to chase. The dossier's teacher/homeschool
multiplier - 15% of effort, and the persona that reaches 30 families at a time -
is sold almost entirely on "printable sheets solve their offline problem." If
they do not exist, Agent 6's outreach premise needs rethinking before the first
batch goes out.

## How to use this log

- **Agents:** never read this file as a source of facts. It records things that
  are wrong. `product-facts.md` is the only fact source.
- **Developer:** re-verify at each milestone. Add a row per conflict.
- **Client:** each OPEN row is either a small site change that unblocks a claim,
  or a decision only you can make.
