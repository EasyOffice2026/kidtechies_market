---
file: phase-1-tracking-spec.md
owner: Whoever builds the kidtechies.com front end
version: 1.0
created: 2026-10-06
blocks: GTM Phase 1 exit test; Agent 4 (Funnel Analyst) live acceptance
---

# Phase 1 tracking spec

Three things to build on kidtechies.com. Together they unblock four of the six
weekly metrics and the entire email programme.

Nothing here collects child data. That is a hard constraint, not a preference.
The product's design already keeps children minimal — in a parent account a
child is a nickname and an age group, with no login, email, surname or date of
birth — and this work must not add anything to that.

> **Corrected 2026-10-07.** The first version of this spec said the brand's
> claim is that "nothing about the child leaves the device." That is true of
> guest mode only. The codebase (`AI for kid/AI-tutor`) has parent accounts at
> `/login` and `/register`, and stores children's progress server-side. See
> `knowledge/product-facts.md` for the two-mode table.

| # | Build | Unblocks | Effort |
|---|---|---|---|
| 1 | Cookieless analytics | `visitors`, `pricing_page_views` | 1 day |
| 2 | Two mission events | `mission_1_starts`, `mission_1_completions` | ½ day |
| 3 | Parent email capture | `emails_captured` + the whole nurture sequence | 2 days |

---

## 1 · Analytics

Pick one: **Plausible**, **Fathom**, or self-hosted **Umami**. All three are
cookieless and collect no personal data, which is why they are the only
acceptable options here — a standard analytics install would break a published
privacy claim.

Recommended: Plausible, for the simplest custom-event API.

```html
<script defer data-domain="kidtechies.com"
        src="https://plausible.io/js/script.js"></script>
```

> Check the vendor's current docs for the exact script URL and the custom-event
> variant before shipping — these change, and this document was written in
> October 2026.

### ⚠ The day this goes live, a published claim becomes false

`/for-parents` currently says:

> "No advertising, no tracking scripts, no third-party analytics."

Once analytics is installed, the third clause is **untrue**. Two things must
happen the same day:

1. Update the parent page to the honest version — name the tool, say it is
   cookieless and collects no personal data, and make it a further proof point
   rather than a retraction.
2. Tell the marketing side so `knowledge/product-facts.md` is updated. Agents
   read that file before every run and will otherwise keep publishing the stale
   absolute to parents.

Suggested replacement wording:

> "No advertising and no tracking scripts. We use [tool], a cookieless analytics
> service that records no personal data and sets no cookies, so we can see which
> pages help and which do not."

---

## 2 · The two mission events

**These are the ones that get missed.** They look like an analytics task and are
a front-end task: no analytics install produces them on its own, because
starting a mission is not a page view.

### `mission_start`

| | |
|---|---|
| **Fires when** | A child begins Mission 1 — the first frame plays or the first interaction renders |
| **Fires once per** | Session. Not on replay, not on page refresh. |
| **Props** | `mission: "ai-detective-academy/picture-clue-patrol"` |

### `mission_complete`

| | |
|---|---|
| **Fires when** | The child reaches the genuine end — the completion screen, not the last video frame |
| **Fires once per** | Session, and only if `mission_start` fired |
| **Props** | `mission: "<same slug>"` |

```js
// Fire once per session, never on replay.
const fired = new Set();

function track(event, missionSlug) {
  const key = `${event}:${missionSlug}`;
  if (fired.has(key)) return;
  fired.add(key);
  try {
    window.plausible?.(event, { props: { mission: missionSlug } });
  } catch {
    /* analytics must never break the mission */
  }
}

// at the point the mission actually begins
track('mission_start', 'ai-detective-academy/picture-clue-patrol');

// at the completion screen — not the last video frame
track('mission_complete', 'ai-detective-academy/picture-clue-patrol');
```

### Rules

- **No child data in props.** No name, age, device, score, progress or
  identifier. The mission slug only.
- **Wrap in try/catch.** A blocked analytics script must never stop a child
  finishing a mission.
- **Completion means completion.** If it fires on the last video frame rather
  than the completion screen, the completion rate is inflated and the single
  most important number in the business becomes a lie. Worth being strict about.

### Why this matters more than the rest of the spec

From the Growth Dossier:

> "Completion rate is the one most founders skip and the one that predicts
> everything: if children don't finish Mission 1, no amount of traffic will save
> the funnel, and the problem is the product, not the marketing."

Without these two events there is no completion rate, and every pound spent on
traffic is spent blind.

---

## 3 · Parent email capture

> **Revised 2026-10-07.** The first version assumed the site collects no email
> addresses at all. It already does: `/register` creates a parent account with an
> email and password. So this is not the first email capture — it is a **lighter**
> one, for the parent who has just watched the free mission work but is not ready
> to create an account and set a password. Keep both. They capture different
> moments of intent.
>
> | | Mailing-list opt-in (this) | `/register` (exists) |
> |---|---|---|
> | Asks for | Email only | Email, password, optional name |
> | Friction | One field | An account |
> | Intent | "Tell me more" | "I'm buying" |
>
> Count them separately in analytics (`email_captured` vs a registration event),
> or the weekly number blends two very different funnel stages.

Placed at the **end of free Mission 1**, when the parent has just seen it work.

### The wording is not optional

```
Want the printable activity sheet and Maya's weekly AI question for parents?

[ parent's email ]                    [ Send it ]

Parent's email, not your child's. One email a week. Unsubscribe any time.
```

The label **"parent's email, not your child's"** is the entire design. It is
what keeps the child-privacy promise intact while building a list, and it must
not be softened to "your email" in a later copy pass.

### Rules

- **One field.** Email only. No name, no child's age, no "which age group" —
  every extra field costs conversions and the age question invites child data.
- **No account.** This is a mailing list subscription, not a login — so a parent
  can join the list without creating an account. (It does not make any
  product-wide "no account" claim true; paid courses still use one.)
- **Double opt-in** if the email platform supports it — cleaner list, and it
  sets the consent record the client's legal owner will want.
- **Unsubscribe in every email.**
- **Nothing links the email to the child's progress.** The parent subscribes;
  the child stays anonymous. Do not store a progress identifier against the
  address.

### Event

```js
// after a successful subscribe response — not on form submit
window.plausible?.('email_captured');
```

Fire on success only. Firing on submit counts failures and validation errors as
captures, and the weekly number silently inflates.

---

## 4 · The weekly export

Agent 4 reads two CSVs every Friday. This spec produces four of the six columns
in the first.

| Column | Source |
|---|---|
| `week_starting` | Monday of the week, ISO `YYYY-MM-DD` |
| `visitors` | Analytics — unique visitors, all pages |
| `mission_1_starts` | Count of `mission_start` |
| `mission_1_completions` | Count of `mission_complete` |
| `emails_captured` | Count of `email_captured`, or the list platform's own figure |
| `pricing_page_views` | Analytics — `/pricing` page views |

Full contract, including the strict formatting rules: `contracts/analytics-csv.md`.

**The formatting rules are strict on purpose.** A renamed or missing column
makes the agent stop and say so rather than guess. That is the designed
behaviour — a wrong number in a Friday decision is worse than no number.

---

## Acceptance

Phase 1's exit test, end to end:

1. A stranger arrives at the site
2. Starts the free mission → `mission_start` appears in analytics
3. Finishes it → `mission_complete` appears
4. Leaves a parent email → `email_captured` appears
5. Receives nurture email one
6. All four steps are visible in the weekly export

When that passes, Agent 4 moves from fixture acceptance to live, and decision D2
closes.

## Checklist

- [ ] Cookieless analytics installed
- [ ] Parent page privacy wording updated **the same day**
- [ ] `knowledge/product-facts.md` updated — tell the marketing side
- [ ] `mission_start` fires once per session at the real start
- [ ] `mission_complete` fires only at the completion screen
- [ ] No child data in any event prop
- [ ] Both events wrapped in try/catch
- [ ] Email capture live, one field, parent's-email label intact
- [ ] `email_captured` fires on success only
- [ ] Weekly CSV exports with exact column names
- [ ] Exit test passes end to end

---

## Implementation status — 2026-10-07

Built in the product repo, `C:\restuarant\AI for kid\AI-tutor`. **Shipped dark:**
fully implemented, but inert until `NEXT_PUBLIC_ANALYTICS_DOMAIN` is set, so
deploying it changes nothing a parent can see and keeps "no third-party
analytics" literally true until someone deliberately switches it on.

| File | What |
|---|---|
| `src/lib/analytics.ts` | `trackMissionStart`, `trackMissionComplete`, `trackEmailCaptured`. Privacy guard enforced in code. |
| `src/components/analytics/analytics-script.tsx` | Loads the script, or renders nothing when unset |
| `src/app/layout.tsx` | Mounts it |
| `.env.example` | Documents the two variables and the privacy warning |
| `scripts/check-analytics.mjs` | 19 checks proving the guard holds |

**The privacy guard is code, not convention.** Only an allowlisted event name
and a lesson slug matching `course-id/lesson-id` can leave the browser. A
nickname, age group, email or free text drops the whole event rather than being
stripped from it. All 14 real lesson slugs pass the pattern; verified.

**Verified:** 19/19 checks pass · `tsc --noEmit` clean across the whole repo ·
`next lint` clean on the changed files. **Not run:** `next build` — the repo has
substantial uncommitted work in progress, and a build would test that too.

### Still to wire — two calls, in files with uncommitted work

Not edited, because both files are mid-change in someone's working tree.

**`src/components/courses/lesson-view.tsx`**

```tsx
import { trackMissionComplete, trackMissionStart } from '@/lib/analytics';

// Start = leaving the 'plan' overview for real content. Not on mount, which
// would count a parent previewing the page as a child starting it.
useEffect(() => {
  if (index >= 1) trackMissionStart(course.id, lesson.id);
}, [index, course.id, lesson.id]);

// in handlePass, beside completeLesson — the quiz pass is the genuine end
const handlePass = (score: number) => {
  trackMissionComplete(course.id, lesson.id);
  const earned = completeLesson(course.id, lesson.id);
  // ...unchanged
};
```

`trackMissionComplete` fires on every pass, not only a first-time one — it pairs
with a start in the same session, so a replay counts as a new start and a new
completion and the rate stays honest.

**Mailing-list form** (when built) — call `trackEmailCaptured()` on the success
response only.

### Then

1. Pick a provider and set `NEXT_PUBLIC_ANALYTICS_DOMAIN`.
2. **Same day:** update `/for-parents` and `knowledge/product-facts.md`.
3. Run the exit test.
