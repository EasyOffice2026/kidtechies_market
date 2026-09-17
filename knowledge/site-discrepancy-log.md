---
file: site-discrepancy-log.md
owner: Developer (maintains) / Client (resolves)
version: 0.1
---

# Site discrepancy log

Where the live site and `product-facts.md` disagree, the discrepancy is recorded
here and **`product-facts.md` wins** (decision D1).

This log exists because the source documents contradict each other. KT/DEV/2026-001
section 5, Day 2 says to verify product numbers against the live site. The Growth
Dossier section 01 (Blocker 02) and section 02 ("Claims to retire") say the
site's headline value claim is precisely the error to retire. Verifying against
the site would import a known error into the canonical fact file, where the
acceptance rule "every product number matches product-facts.md exactly" would
then enforce it across every agent. So: the client-approved fact sheet is
canonical, the site gets corrected to match, and each gap is tracked below.

| # | Site says | product-facts.md says | Resolution | Status |
|---|---|---|---|---|
| 1 | "23:48 of animated film" as the headline value line beside $70 | Lead with 8-9 hours of guided learning; runtime is a craft detail placed lower | Rewrite pricing page value line (dossier S04 change #2, 1 day) | OPEN |
| 2 | Two brand names in use - KidTechies and "AI for Kids" (page title, footer) | KidTechies is the brand; "AI for kids" is a descriptor only | Client decision D3, then site correction | OPEN |
| 3 | No refund promise anywhere | 30-day refund marked PROPOSED, not usable | Ship the refund line, then flip to CONFIRMED (dossier S04 change #3) | OPEN |
| 4 | No founder name, no company location, no contact address | Recorded as MISSING | Required for trust furniture; also needed before school outreach signs off as a real company | OPEN |
| 5 | Parent page volunteers that films lack subtitles, illustrations are placeholders, quizzes "still under teacher review" | Not product facts; these are build-status notes | Move to a dated "What we're building next" changelog page, off the page where money changes hands | OPEN |
| 6 | No testimonials | No testimonial may appear in any draft until three real quotes are on file | Give 20 families the bundle free for honest feedback (dossier S06 Phase 1) | OPEN |
| 7 | Sitemap: every URL carries the same last-modified date and a blanket "monthly" change frequency | n/a | SEO hygiene, outside this engagement - flagged for whoever owns dossier S05 | NOTED |

## How to use this log

- **Agents:** never read this file as a source of facts. It is a record of
  things that are wrong. `product-facts.md` is the only fact source.
- **Developer:** add a row whenever a new conflict appears.
- **Client:** each OPEN row is a small site change that unblocks a claim the
  agents currently cannot make.
