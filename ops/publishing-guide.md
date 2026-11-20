---
file: publishing-guide.md
owner: Developer -> the approver (D14)
version: 1.0 — 2026-11-21
---

# Approving and publishing with `kt`

The agents write drafts. You approve them and publish them with one small
tool, `tools/kt.mjs`. The tool will not publish anything you have not
approved, or anything changed since you approved it, and it fills in
`ops/publishing-log.md` for you.

Until the fact list is approved (D1), it refuses every real approval and every
publication. That is correct. You can still practise with `--rehearsal`, which
changes nothing.

## One-time setup

1. Install **Node.js 20 or later** (nodejs.org, the "LTS" button) on the
   computer that holds the agent folder.
2. Open a terminal in the agent folder (`D:\marketing agent\kidtechies_market-develop`).
3. Run `node tools/kt.mjs status`. You should see the fact-list version and a
   list of drafts.

## Every morning (about 20 minutes)

```
node tools/kt.mjs status
```

This shows what is waiting. For each draft you want to use:

1. **Read it** — the three passes in `ops/operator-guide.md`. The tool checks
   rules; it cannot tell whether a draft is good.
2. **Edit if needed**, in the file itself.
3. **Approve:**

   ```
   node tools/kt.mjs approve drafts/2026-12-01/02-content-factory-lantern-tale-article.md --by Ibrahim
   ```

   If the tool finds a problem (a forbidden claim, a second link, the DRAFT
   notice still there) it says what and refuses. Fix it or reject the draft.
   Lines starting `!` are warnings: read them, then decide.

   **Approving writes the `approved-by:` line for you.** Any edit after that
   cancels the approval; approve again after re-reading.

## Publishing

### Articles → the website (`/guides`)

```
node tools/kt.mjs publish drafts/2026-12-01/02-content-factory-lantern-tale-article.md --to guides --site "D:\marketing agent\AI-tutor"
```

- `--site` is the product repository. This step needs it on the same
  computer: either a clone on the client's computer, or the developer runs
  it.
- The site's own gate checks the article again before anything is written.
- Then: commit `content/guides/<slug>.md` and `src/data/guides.ts` in the
  product repo and deploy. The guide is live after the deploy.
- `--dry-run` shows the finished page text and what the site would say,
  without writing anything.
- `--description "…"` sets the search description, when the first sentence
  is too long.

### Social captions and video → by hand, recorded by the tool

There is no direct connection to Instagram, Facebook, LinkedIn or TikTok yet.
Those need the company accounts first. Until then:

```
node tools/kt.mjs post drafts/2026-12-01/02-content-factory-lantern-tale-social.md --channel instagram --piece "Instagram 1"
```

1. The tool prints the exact approved caption. Copy it and post it.
2. Then record the link:

   ```
   node tools/kt.mjs confirm P-1a2b3c4d --url https://www.instagram.com/p/…
   ```

3. If you did not post it after all:

   ```
   node tools/kt.mjs cancel P-1a2b3c4d
   ```

Each caption can be posted once per channel. The tool refuses a second
attempt.

## If something goes wrong

| The tool says | What it means | What to do |
|---|---|---|
| `no approval record` | Never approved with `kt approve` (a hand-typed line does not count) | Read it, then `kt approve` |
| `has changed since it was approved` | Someone edited it after approval | Re-read the change, approve again |
| `product-facts.md is …-DRAFT` | D1 is not signed yet | Nothing to do. Rehearse with `--rehearsal` if you like |
| `already published` | It went out before | Nothing. This is what prevents double posts |
| `PUBLISH_UNKNOWN` (in `status`, under NEEDS A PERSON) | The tool stopped part-way and cannot tell whether it went out | Look. Then `kt resolve <id> --url <link>` if it did go out, or `kt resolve <id> --not-published` if it did not |
| `PUBLISHING` older than a day | A post was started but never confirmed or cancelled | `kt confirm` or `kt cancel` |

## Where the records are

| File | What | Rule |
|---|---|---|
| `logs/approvals.jsonl` | Every approval: who, when, the file's fingerprint, the fact-list version, the computer account | Never edit by hand. Back it up with the agent folder |
| `logs/publications.jsonl` | Every publication event, in order | Never edit by hand |
| `ops/publishing-log.md` | The readable list of what went out | Filled by the tool. Add a note if you edited a post on the platform |

Agents never run this tool and never write these files
(`agents/shared-controls.md` §2).
