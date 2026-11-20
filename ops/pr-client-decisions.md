---
file: pr-client-decisions.md
created: 2026-10-18
---

# PR: `feature/client-decisions` → `main`

> **Historical record (banner added 2026-11-20).** Kept as written at the time.
> Parts of it are out of date — do not act on it. For the current state, read
> `ops/handover.md` and `ops/decision-log.md`.

Stacked on `feature/part-1-website`. Merge that one first (see
`pr-part-1-2.md`); this PR then shows only its own four commits.

```
git push -u origin feature/client-decisions
gh pr create --base main --head feature/client-decisions --title "Client decisions: KidTechies brand, company identity, accurate privacy notice" --body-file "../../marketing project/ops/pr-client-decisions.md"
```

If `feature/part-1-website` is not merged yet, open this PR against it
instead (`--base feature/part-1-website`) and retarget to `main` afterwards.

---

# PR body

## What this does

Applies the client's answers of 2026-10-18.

- **Brand:** KidTechies is the name, "AI for Kids" the tagline. Site title,
  footer, dashboard, certificate, graduate badge and Sparky's own introduction.
  The saved-progress key is deliberately **not** renamed — it holds every
  child's progress.
- **Company:** Easy Office International, Kuwait. Held once in `COMPANY` and
  used by the footer, about page, terms, privacy notice and every email. The
  terms no longer send parents to "whoever operates this installation".
- **Privacy notice rewritten** to describe the product as built: parent
  accounts, Stripe, the mailing list, the company. What leads is what is still
  true — nothing about a child is stored on a server. Still marked "Draft,
  pending legal review".
- **Analytics (approved by the client):** the parents page and privacy notice
  now render one sentence that switches with `NEXT_PUBLIC_ANALYTICS_DOMAIN`, so
  turning analytics on can never leave a stale "no analytics" claim behind.
- **Price:** the client kept the $70-instead-of-$100 discount; the offer email
  says so. The Story Shelf is confirmed free and now said to be.
- **Fixes two false statements:** "one email a week at most" (the welcome run
  is five in ten days) and the about page's "nothing about a child leaves their
  device" (tutor messages go to Anthropic).
- **Guard:** `check:pages` now fails if any retired false claim reappears on
  any page.
- Newsletter replies go to the company inbox via Reply-To.

## Checks

tsc clean · lint clean · 8/8 unit checks · analytics 22/22 · newsletter 20/20 ·
rate limit 7/7 · 33/33 pages render with no retired claim · production build
clean, nothing secret in the browser, Sparky's prompt still server-side only.

## Needs before merge

Nothing new. Same migration and environment steps as the previous PR; see
`ops/email-setup.md`.

## Not in this PR

New logo, icon and share-image artwork (they still read "AI for Kids"), the
office postal address for email footers, and legal review.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
