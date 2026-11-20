---
file: site-discrepancy-log.md
owner: Developer (maintains) / Client (resolves)
version: 0.8.4-DRAFT
last-verified: 2026-09-18 against kidtechies.com; statuses updated 2026-11-20 against www.kidtechies.com and the build about to deploy (`fix/review-round-1`)
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
| 1 | Pricing page shows "23:48 of animated film" **and** "around 8-9 hours of guided learning" | Lead with 8-9 hours; runtime is a craft detail placed lower | The hours claim is already there - the fix is **which one leads**, not adding one. Smaller job than the dossier implies. | RESOLVED - `/pricing` leads with hours, live, checked 2026-11-13. The figure itself changes with the next deploy — see row 13 |
| 2 | "AI for Kids" in the page title **and** footer | KidTechies is the brand; "AI for Kids" is the tagline | Confirmed exactly as the dossier describes. Client decision D3, then site correction. | RESOLVED - D3, 2026-10-18; site live 2026-11-07. The logo artwork still reads "AI for Kids" (design task) |
| 3 | `/for-parents` carries: films have no subtitles, illustrations are placeholders, a teacher is still reviewing quiz wording | True; must not be contradicted | The developer decided on 2026-10-17 to keep them on `/for-parents`, an honesty page, rather than move them. **Agents may not claim classroom-readiness unqualified** - a school will notice. | OPEN - by design, until the review and subtitles are done |
| 4 | No founder name, no company legal name, no location, no contact address anywhere | Recorded as MISSING | Highest-priority trust fix. | RESOLVED - Easy Office International, Kuwait, contact@easyofficeq8.com, on the footer, terms and about page since 2026-11-07. Founder name not needed (client, 2026-10-18) |
| 5 | No testimonials | No testimonial may appear in any draft until three real quotes are on file | Give 20 families the bundle free for honest feedback (dossier S06 Phase 1) | OPEN |
| 6 | Sitemap: every URL carries an identical lastmod (`2026-09-03T17:52:02.596Z`) and a blanket "monthly" changefreq | n/a | Confirmed exactly. Also tells us the site had not changed since the dossier was written (as of 2026-09-18). SEO hygiene, outside this engagement. | NOTED |

## Corrections - the dossier was wrong

| # | Finding | Effect | Status |
|---|---|---|---|
| 7 | **The 30-day refund promise exists.** `/terms`: *"If the course is not right for your child, ask for a refund within 30 days and you will get one."* | The dossier says the site has no visible refund promise, and we had marked it PROPOSED - forbidden to state. **It is real.** Agents may state it now. The site job is to *move* it to `/pricing`, not to write one. | RESOLVED - fact promoted; beside the price on `/pricing` since 2026-11-13 |
| 8 | **Sitemap has 43 URLs, not 45.** | Trivial in itself; matters because it shows dossier figures need checking, not copying. | NOTED - 41 on 2026-11-20; still 41 in the build about to deploy (`/age-select` out, the free mission's printable sheet in) |
| 9 | **Age structure is not three bands.** Site: *"ages 9-12, adaptable for 6-8 and 13-16."* Dossier presents `6-8 · 9-12 · 13-16` as equal bands. | **Material.** A parent of a 7-year-old sold "a course for their age" who finds 9-12 material adapted down has been misled. Copy must say "designed for 9-12, adaptable for younger and older." | RESOLVED - fact corrected |
| 10 | **Bundle carries a $100 anchor**, struck through, "Save $30 / 30% off". | Not mentioned in the dossier anywhere. Changes the pricing conversation: the page already discounts, so "less than three months of the alternatives, forever" now sits beside a countdown-style saving. Client should decide whether the anchor stays. | RESOLVED - D8, 2026-10-18: the anchor stays; "three months" retired |
| 11 | **Mission distribution is 5 / 4 / 3 / 2.** | "Smart and Safe AI Heroes" - the course the dossier says the worried screen-time parent buys *first* - is the thinnest, at two missions. The entry point for ~25% of the market is the least built-out course. | OPEN - client decision (GTM plan, Phase 4) |
| 12 | **Home page: the Creative Studio "Create art, music, stories, and more with the power of AI."** Found 2026-11-20. | The Studio's own tools say otherwise: Art Prompter makes "a written description, not a picture"; Music Maker makes "a plan in words … It does not play sound." Agents describe the Studio by what it does (`product-facts.md`, "Free without an account"). The home-page line should change. | FIXED IN CODE, NOT DEPLOYED - the home page now reads "Write stories, picture descriptions and music plans." in `fix/review-round-1`, and the navigation's "Make stories, art prompts, and music." is fixed in the same build (2026-11-20). Live once deployed; close the row after checking the live site |
| 13 | **The hours figure was too low.** Found 2026-11-20. The site said "around 8-9 hours of guided learning" on `/pricing`, `/courses`, `/for-parents` and `/about`. | The course data gives 14 missions (the free one 30–40 minutes, the rest 30–38 — 7.0–8.9 hours) plus four final projects (9.3–11.9 hours in all), and `/courses` already claimed the 8-9 hours *included* the projects. Resolved by computing the figure from the data: the product change of 2026-11-20 makes the site sum each course's time and round outward (live once deployed): "About 9–12 hours of guided learning, including four final projects"; the missions alone "about 7–9 hours" — so it cannot drift again. `product-facts.md` changed the same day. | OPEN — fixed in code, not deployed. The corrected figure is in the course data on `fix/review-round-1`; the live site still says "around 8-9 hours" until it is deployed, and nothing using the new figure is published before the site shows it. **Client to confirm** the figure with D1 (it is on the fact list) |

## Could not verify on 2026-09-18 — all since resolved

Not found on any page checked on 2026-09-18. Every one has since been verified
in the code or on the site, so none is blocked:

| Fact | Then | Now |
|---|---|---|
| 28 activities | Plausible as 14 missions x 2, but not stated | VERIFIED 2026-10-17 — stated on `/pricing` |
| 70 quiz questions | Plausible as 14 x 5, but not stated | VERIFIED 2026-10-17 — on `/pricing`; counted 25/20/15/10 in the course data |
| Printable certificate | Not found | VERIFIED 2026-10-17 — live at `/certificate` |
| Printable activity sheets | Not found - though the teacher persona's whole pitch depends on them | VERIFIED 2026-10-07 — one per mission (D10) |
| Maya, Pip and Glitch | Not found on the pages checked | CODE-VERIFIED 2026-10-17 |
| Free-tier boundary | Which mission, which stories | CONFIRMED 2026-10-18 — Mission 1 and all six tales |

The printables were the one to chase, because the teacher persona is sold on
them. They exist.

## How to use this log

- **Agents:** never read this file as a source of facts. It records things that
  are wrong. `product-facts.md` is the only fact source.
- **Developer:** re-verify at each milestone. Add a row per conflict.
- **Client:** each OPEN row is either a small site change that unblocks a claim,
  or a decision only you can make.
