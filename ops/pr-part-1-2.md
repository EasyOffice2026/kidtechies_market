---
file: pr-part-1-2.md
owner: Developer
created: 2026-10-17
---

# Merging Parts 1 and 2 — `feature/part-1-website` → `main`

> **Historical record (banner added 2026-11-20).** Kept as written at the time.
> Parts of it are out of date — do not act on it. For the current state, read
> `ops/handover.md` and `ops/decision-log.md`.

The product repo (`AI for kid/AI-tutor`) has 15 commits on this branch,
nothing merged, nothing deployed. The live site still says "No account, no
sign-up, no email address" to parents. That is the reason to merge soon.

## Open the pull request

From the product repo, after `git push -u origin feature/part-1-website`:

```
gh pr create --base main --head feature/part-1-website --title "Website funnel, measurement and the parent mailing list" --body-file ../../marketing\ project/ops/pr-part-1-2.md
```

(Or paste the body below into GitHub by hand.)

## Merge checklist — do these in order

1. **Review the first commit separately.** `dd55d70` is six weeks of someone's
   uncommitted work (password reset, migration 0001) committed exactly as found.
   Whoever wrote it should confirm it was meant to ship.
2. **Migrations.** Two are new: `0001_abnormal_crusher_hogan` (password reset)
   and `0002_newsletter`. Check which are already applied to production with
   `npm run check:db`, then apply with `npm run db:migrate` **deliberately**,
   not as a deploy side effect.
3. **After migrating, run `npm run check:newsletter-db`** — every line should
   PASS. This is the proof that no email can be sent twice; it could not be run
   before the migration existed in the database.
4. **Environment variables on Vercel** (none are required for the site to work;
   each one switches a feature on):
   - `CRON_SECRET` — without it the daily newsletter job refuses to run
   - `NEWSLETTER_FROM` — a separate sending subdomain, with SPF/DKIM/DMARC
   - `NEXT_PUBLIC_ANALYTICS_DOMAIN` — **only together with** the parent-page
     wording change; see `phase-1-tracking-spec.md`
5. Merge and deploy.
6. Confirm `/for-parents` on the live site no longer says "no account".

---

# PR body

## What this does

Fixes the site's privacy wording, adds funnel measurement (off by default), a
teacher page, pricing changes, and a parent mailing list with double opt-in.

## Why

- **`/for-parents` told parents there is no account and nothing leaves the
  device.** Parent accounts have existed since the Stripe work, and the tutor
  sends a child's messages to Anthropic. Both are now stated accurately; the
  one claim that is strong *and* true — nothing about a child is stored on our
  servers — leads.
- The pricing page led with "23:48 of animated film" beside the price, which
  reads as a few dollars a minute. It now leads with 8–9 hours of guided
  learning, and the 30-day refund promise moved from `/terms` to beside the
  price.
- Two of the six weekly business numbers (mission starts and completions)
  could not exist without events in the lesson player. They exist now, inert
  until `NEXT_PUBLIC_ANALYTICS_DOMAIN` is set.
- There was no way to reach a parent after the free mission. There is now a
  one-field capture, double opt-in, a five-email welcome run, a weekly
  question, and one-click unsubscribe.

## Privacy guarantees, enforced in code

- Analytics can only ever send an allowlisted event name and a lesson slug. A
  nickname, age group or email in the props drops the whole event.
- The mailing list is an email and a consent record. No column refers to a
  child or to a user account. Registering is not consent — the box is unchecked.
- No newsletter step can be sent twice: a unique (subscriber, step) row is
  claimed before every send.

## Checks

- `tsc` clean · `next lint` clean · 8/8 unit checks
- `check:analytics` 19/19 · `check:newsletter` 16/16
- `check:pages` 33/33 routes render (now runs on Windows)
- `check:bundle` — production build, nothing secret or paid reaches the browser
- `check:newsletter-db` — **run after migrating**, see checklist

## Not in this PR

Switching analytics on, the Arabic landing page (needs a native reviewer),
founder/company details on the site (client to supply), and the legal privacy
notice, which still says "there is no account" and needs the client's legal
owner rather than a copy edit.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
