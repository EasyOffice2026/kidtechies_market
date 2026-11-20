---
file: product-facts.md
owner: KidTechies (client) - founder or nominated approver only
version: 0.8.4-DRAFT
last-approved: PARTIAL — client confirmed brand, price model, company and free tier in writing on 2026-10-18
site-verified: 2026-09-18 against kidtechies.com; code-verified 2026-10-17; rows dated 2026-11-20 checked on www.kidtechies.com that day. Note — the learning-time rows (programme, per mission, per course) are CODE-VERIFIED 2026-11-20 in the course data on `fix/review-round-1`, the build about to deploy; the live site still says "around 8–9 hours" until it is deployed, and nothing using these figures is published before the site shows them
status: ONE STEP FROM v1.0 — the client's "approved" on the full list (D1)
---

## Brand — CONFIRMED 2026-10-18

| | |
|---|---|
| Brand | **KidTechies** |
| Tagline | **AI for Kids** |
| Rule | Never present "AI for Kids" as the name. It is the line beneath the name. The site, emails and Sparky's own introduction now say KidTechies. The logo artwork still reads "AI for Kids" until new artwork exists — describe the product by name, not by its logo. |

## Company — CONFIRMED 2026-10-18

| | |
|---|---|
| Legal name | Easy Office International |
| Registered in | Kuwait |
| Contact | contact@easyofficeq8.com |
| Website | www.easyofficeq8.com |
| Instagram | easyoffice.intl — the **company's** account, not KidTechies'. Do not present it as a KidTechies channel. |
| Founder name | Not supplied. Copy does not need it. |
| Postal address | Not supplied — needed for US email footers (D15). |
| Day-to-day marketing owner | Ibrahim |

# Product facts - canonical

**This file is the only source of KidTechies product numbers.**

Not the live website. Not a previous draft. Not the agent's memory of an earlier
session. If a number is not in this file, an agent may not state it. If a number
here conflicts with the site, see `site-discrepancy-log.md` - the client-approved
value wins and the site gets corrected (decision D1).

No agent may edit this file. Only a client-approved representative may.

## Status key

- `CONFIRMED` - client has approved this in writing. Safe for parent-facing copy.
- `SITE-VERIFIED` - observed on the live site on the date in the row (2026-09-18
  where no date is given). High confidence, but
  still needs client sign-off before publication, because the site can be wrong
  about itself.
- `PENDING` - from the Growth Dossier, not yet found on the site or confirmed.
  **Internal drafts only.**
- `PROPOSED` - recommended but not true of the product yet. **Never state.**

## Catalogue

| Fact | Value | Status |
|---|---|---|
| Courses | 4 | SITE-VERIFIED |
| Missions | 14 | SITE-VERIFIED - counted individually, see below |
| Capstone projects | 4 (one per course) | SITE-VERIFIED |
| Guided learning time | **About 9–12 hours of guided learning, including four final projects.** The 14 missions alone: about 7–9 hours. Short form for copy: "about ten hours" | CODE-VERIFIED 2026-11-20 (course data, `fix/review-round-1`); the live site still says "around 8–9 hours" until deployed. Nothing using this figure is published before the site shows it. Changed by the developer for client confirmation (D1). Computed from the course data: 14 missions — the free first mission 30–40 minutes, the other 13 at 30–38 minutes each — = 7.0–8.9 hours; with the four final projects = 9.3–11.9 hours, rounded outward to whole hours. The product change of 2026-11-20 makes the site compute the total from the same data (live once deployed). The old "8-9 hours" did not cover the whole programme — see `site-discrepancy-log.md` row 13. Never pair the per-course figures with a total that does not add up to them |
| Story Shelf tales | 6 | SITE-VERIFIED |
| Animated film runtime | 23:48 total | SITE-VERIFIED — a craft detail, never the headline value: see "Runtime as headline value" in `claims-allowed.md` and the per-course films below. Rechecked 2026-11-20: the course data's films add to 1,428 seconds = 23:48 |
| Activities | 28 | **VERIFIED 2026-10-17** — stated on `/pricing` ("28 hands-on activities and challenges"), computed as 14 missions × 2 |
| Quiz questions | 70 | **VERIFIED 2026-10-17** — stated on `/pricing`, and counted from the course data in course order: 25 (AI Detective Academy) + 20 (Train Your Robot Brain) + 15 (AI Game Creator Lab) + 10 (Smart and Safe AI Heroes) — five per mission. Order re-checked 2026-11-20. **Each question has an explanation** — 70 of 70 in the course data, checked 2026-11-20; `/pricing` says "70 quiz questions, each with an explanation" |
| Notes for grown-ups | Every mission has a **"For grown-ups and tutors"** panel: what it teaches, how to adapt it for ages 6–8 and 13–16, and what the child did. Each final project has one on how to assess it, by talking it through with the child | **CODE-VERIFIED 2026-11-20** — `lesson-view.tsx` and `capstone-view.tsx`; `/pricing` says "Parent and teacher notes throughout" |
| Printable certificate | Yes | **CODE- and SITE-VERIFIED 2026-10-17** — `certificate-view.tsx`, live at `/certificate` |
| Printable activity sheets | Yes | **CODE- and SITE-VERIFIED 2026-10-07** — dedicated printable page per lesson, live at e.g. `/courses/ai-detective-academy/picture-clue-patrol/sheet`. Gated behind purchase for paid lessons. Closes D10. |
| Indexable pages in sitemap | **41** | SITE-VERIFIED 2026-11-20 (it was 43 on 2026-09-18; the dossier says 45). The build about to deploy (`fix/review-round-1`) also lists 41 URLs: `/age-select` removed and the free mission's printable sheet added (pending deploy). The count changes as pages are added or removed — do not use it in copy |
| Site | **https://www.kidtechies.com** | SITE-VERIFIED 2026-11-20 — `kidtechies.com` without `www` redirects (308) to it, keeping the path. Use the `www` address in links |
| Time for one mission | **30–38 minutes (the free first mission 30–40)** | CODE-VERIFIED 2026-11-20 (course data, `fix/review-round-1`: `learnerTime`); the live site still shows 30–38 for the free mission too until deployed. Nothing using this figure is published before the site shows it. The free mission's figure was corrected from 30–38 that day, because its step times add to 30–40 |
| Free-mission link | **https://www.kidtechies.com/courses/ai-detective-academy/picture-clue-patrol** | SITE-VERIFIED 2026-11-16 and 2026-11-20 — loads with no account. The one link for the free-mission call to action |
| Later in the programme | Generative AI; Prompt Engineering; AI in Science; Web Dev with AI | SITE-VERIFIED 2026-11-20 — on `/courses` under "Later in the programme: Topics we are planning once the first four courses are complete." **Plans, not courses.** Never describe them as available or coming on a date |

### Age range - corrected 2026-09-18

| Fact | Value | Status |
|---|---|---|
| Core age band | **9-12** | SITE-VERIFIED |
| Adaptable to | 6-8 and 13-16 | SITE-VERIFIED |
| Overall range | 6-16 | SITE-VERIFIED |

The site says: *"ages 9-12, adaptable for 6-8 and 13-16."* The Growth Dossier
presents these as three equal bands (`6-8 · 9-12 · 13-16`), which reads as three
separately designed tracks. That is not what the product is.

**This matters for copy.** A parent of a 7-year-old told they are buying a
course built for their child's age, who then finds material designed for 9-12
and adapted down, has been misled. Agents must write "designed for 9-12,
adaptable for younger and older children" - not "three age bands."

### Mission count - verified individually

| Course | Missions | Names |
|---|---|---|
| AI Detective Academy | 5 | Picture Clue Patrol, Sound Safari, Creative Clues, Glitch Hunt, AI Detective |
| Train Your Robot Brain | 4 | Feature Find, Data Kitchen, Mood Mixer, Robot Brain |
| AI Game Creator Lab | 3 | Game Hero, Choice Engine, Maze Mission |
| Smart and Safe AI Heroes | 2 | Privacy Mission, Truth Tracker |
| **Total** | **14** | Plus 4 capstones, one per course |

Counted from the sitemap on 2026-09-18. The 14 figure holds.

> Note the distribution: 5 / 4 / 3 / 2. Course 4 - "Smart and Safe AI Heroes" -
> is the smallest, at two missions. The Growth Dossier names it as the course the
> worried screen-time parent buys *first*. Worth the client knowing that the
> entry point for the second-largest persona is the thinnest course.

## Pricing

| Fact | Value | Status |
|---|---|---|
| Single course | $25 | SITE-VERIFIED |
| Four-course bundle | $70 | SITE-VERIFIED |
| Bundle anchor price | $100, shown struck through: all four for $70, "Save $30 / 30% off" | **CONFIRMED 2026-10-18** — the client chose this discount model: "Let's try this model and then we will adjust accordingly." |
| Payment model | One-time. No subscription. | SITE-VERIFIED |
| Free tier | The whole of Mission 1, Picture Clue Patrol — film, game, challenge and quiz — **and all six Story Shelf tales** | **CONFIRMED 2026-10-18** — Mission 1 is `FREE_LESSON` in code; the client confirmed the Story Shelf stays free "to keep the interest of the kids", and it is ungated in code. Also free with no account: the Sparky tutor, the Code Lab and the Creative Studio — see "Free without an account" below (SITE-VERIFIED 2026-11-20; not yet in the client's confirmation). |
| Signup required | **"No account needed to try the first mission; buying needs a parent account."** The free mission, the Story Shelf, Sparky, the Code Lab and the Creative Studio need no account; buying needs a parent account with an email | SITE-VERIFIED — never write "no sign-up" about the product as a whole, and never "No account needed to learn" unscoped; scope it to trying |
| Currency and tax | Prices in US dollars, excluding any local tax | SITE-VERIFIED 2026-11-20 — `/terms`: "Prices are in US dollars and exclude any local tax that may apply."; `/pricing`: "Prices in USD." |
| How long access lasts | "Indefinitely. There is no subscription and nothing renews." | SITE-VERIFIED 2026-11-20 — `/terms`. Say "buy once, keep it", not "lifetime access" |
| **Refund promise** | **30 days, no form and no reason required** | **SITE-VERIFIED** — beside the price on `/pricing` since 2026-11-13, and on `/terms` |

### The refund promise — stateable, and beside the price

The dossier said the site had no refund promise, so it was first marked
`PROPOSED`. That was wrong: it was on `/terms` all along. Since 2026-11-13 it
is also on `/pricing`, beside the price:

> "Not right for your child? Ask for a refund within 30 days and you will get
> one."

and in the pricing questions: *"Ask for a refund within 30 days and you will
get one. No form, no reason required."*

**Agents may state the 30-day refund**, exactly as written here — never
longer, never "money-back guarantee", never "risk-free".

### Per-course figures

| Course | Film | Guided learning |
|---|---|---|
| AI Detective Academy | 9:30 | About 3-3.9 hours |
| Train Your Robot Brain | 6:37 | About 2.6-3.3 hours |
| AI Game Creator Lab | 4:30 | About 2.2-2.7 hours |
| Smart and Safe AI Heroes | 3:11 | About 1.6-2 hours |

Films SITE-VERIFIED (they add to 23:48). Guided-learning times CODE-VERIFIED
2026-11-20 (course data, `fix/review-round-1`); the live site shows AI
Detective Academy as 3–3.8 hours until deployed (the other three already
match). Nothing using these figures is published before the site shows them.
**Each per-course time includes that course's final project.** Recomputed
2026-11-20 from `learnerTime` and the final projects' `time`: 180–232,
155–197, 130–164 and 95–121 minutes. They add up to the total above: exactly
9.3–11.9 hours (the rounded per-course figures add to 9.4–11.9), "about 9–12
hours". AI Detective Academy's top figure rose from 3.8 to 3.9 on 2026-11-20,
when the free mission's time was corrected to 30–40 minutes. Useful for
single-course copy, where the whole-programme figure would overstate what a
$25 buyer receives.

## Privacy and data

> ⚠ **CORRECTED TWICE — read this before relying on any earlier version.**
>
> **2026-09-18** took `/for-parents` at its word: no account, nothing leaves the
> device. Wrong — parent accounts exist.
>
> **2026-10-07** over-corrected. It read the database schema as live behaviour
> and stated that children's progress and profiles are stored server-side. Also
> wrong: the `child_profile` and `child_progress` tables exist, but **no code
> writes to either.**
>
> **2026-10-17 — this version is based on what the code actually writes**, not
> on page copy or the schema. Verified in `AI for kid/AI-tutor`: the only
> database writes are the parent `users` row, auth tokens, and the Stripe
> customer id.

### What is true today

| | Fact | How verified |
|---|---|---|
| Parent accounts | Exist, for buying courses. Hold the **parent's** email, optional name and password, the time the email was confirmed, and a Stripe customer id — plus the **purchases**: which course (or the bundle) was bought, the amount, and when. | `db.insert(users)` in `lib/auth/actions.ts`; `emailVerified` set in `lib/auth/tokens.ts`; `db.insert(purchases)` in `api/checkout/route.ts`; `/register` live. Rechecked 2026-11-20 |
| Parent mailing list | Holds the **parent's** email, language, where they signed up (`mission-complete` or `register`) and when, when they confirmed, when they unsubscribed, and which emails have been sent to them. Nothing about a child, and no link to an account | `newsletter_subscriber` and `newsletter_send` tables in `lib/db/schema.ts`; live since 2026-11-07. Added 2026-11-20 |
| Children's accounts | **None.** Children never sign in. | No child login anywhere |
| Anything about a child on a server | **None.** No profile, no progress, no answers. | Nothing writes `child_profile` or `child_progress` |
| Where progress lives | **In the browser, for everyone** — guests and account holders alike: "Progress, badges and answers stay in the browser on the device they use; what leaves it is listed below." Never "by default", and never "stays in the browser" said of everything | `localStorage` key `ai-for-kids:learner:v1` |
| What leaves the device | "What a child types to Sparky or the Creative Studio, and the code they send for a Code Lab hint, goes to Anthropic's Claude for a reply, together with the age group chosen, so the answer suits their age. It is not stored by us, and we add no name or identifier to it." And: "Visits, anonymous counts of missions started and finished (which mission, nothing about who), and an anonymous count of newsletter confirmations are counted with Umami, without cookies — no names, no addresses." Never write "the only thing … leaves", never "isn't stored" without "by us", and never "carries no name or identifier" or "isn't linked to anyone" — a child can type their own name | `api/ai-tutor/route.ts` (Sparky and the Studio both use it; it receives the age group). The Code Lab's "Get a hint" button sends the child's code to Sparky the same way. Disclosed in the privacy notice. Wording fixed 2026-11-20 (round 3: the agreed sentence, used on the site and in every knowledge file) |
| Analytics | **Umami**, cookieless, live since 2026-11-09. Counts visits, page views, and three events: mission start and mission completion (which mission, nothing about who), and a newsletter confirmation (`email_captured` — a count, no address). No cookies; no name, email or child data in any event | `NEXT_PUBLIC_UMAMI_WEBSITE_ID` set on Vercel; `sanitiseProps()` in `lib/analytics.ts`; disclosed on `/for-parents` and `/privacy` |
| Free without an account | Mission 1, Picture Clue Patrol, in full; the Story Shelf; the Sparky tutor, Code Lab and Creative Studio — see "Free without an account" below | `FREE_LESSON`; only `/account` needs sign-in (`lib/auth/config.ts`) |

### Claims agents may make

| Claim | Status |
|---|---|
| "Try the first mission. Nothing to sign up for." | ✅ TRUE |
| "Children never sign in" / "a child never has a login or an email" | ✅ TRUE |
| "Nothing about your child is stored on our servers" | ✅ TRUE — and the strongest claim available. Use it. |
| "Your child's progress stays in your browser" / "Progress, badges and answers stay in the browser on the device they use" | ✅ TRUE, for everyone — about progress, never about everything |
| "Accounts are for parents, to buy courses — your email, nothing about your child" | ✅ TRUE |
| "What a child types to Sparky or the Creative Studio, and the code they send for a Code Lab hint, goes to Anthropic's Claude for a reply, together with the age group chosen, so the answer suits their age. It is not stored by us, and we add no name or identifier to it." | ✅ TRUE — say it plainly when the tutor, the Studio or the Code Lab hint comes up. Use these words, both sentences (the site's short notes may drop the second; agent copy keeps it); never "the only thing", never "isn't stored" without "by us" |
| "Visits, anonymous counts of missions started and finished (which mission, nothing about who), and an anonymous count of newsletter confirmations are counted with Umami, without cookies — no names, no addresses." | ✅ TRUE |
| "No advertising, and no cookies used for tracking" | ✅ TRUE — the live `/for-parents` wording since 2026-11-09 |
| "We count visits with a cookieless analytics tool. It sets no cookies and does not identify you or your child." | ✅ TRUE — the live `/privacy` wording; Umami may be named |
| "Sparky never asks for a name, school or address" | ✅ TRUE — CODE-VERIFIED 2026-11-20: Sparky's instructions (`src/lib/ai/prompts.ts`) say "Never ask for or repeat personal information: real name, school, address, age, phone, email." It is an instruction to the AI, so never stretch it to "a child cannot share personal details" |

### Claims agents must NOT make

| Claim | Why |
|---|---|
| "No account", "no sign-up", "no email address" — **about the product** | ❌ FALSE. Buying needs a parent account with an email. Fine when scoped: "no account needed to try the first mission." |
| "Nothing about your child leaves the device" | ❌ FALSE. Sparky messages go to Anthropic. Use "Nothing about your child is stored on our servers" instead. |
| "The only thing that leaves the device is…", or "isn't stored" without "by us" | ❌ FALSE or unprovable. Messages go to Anthropic with the age group, and Umami counts visits, missions and newsletter confirmations. Use the "What leaves the device" wording above |
| "8–9 hours" for the whole programme, or a total that does not match the per-course times | ❌ FALSE. Use "about 9–12 hours of guided learning, including four final projects" ("about ten hours" for short) |
| "We store a nickname and an age group for each child" | ❌ FALSE today — child profiles are not built (the account page says they "arrive with the next piece of work") |
| "Your progress is saved to your account" | ❌ FALSE today — nothing syncs to the server yet |
| "No tracking scripts", "no third-party analytics", "no analytics", "we don't track anything" | ❌ FALSE since 2026-11-09 — Umami is installed. Use "no cookies used for tracking" instead |
| "Create art and music with AI", "make music", "make art" / "the Code Lab runs your code" / "build AI projects in the Code Lab" | ❌ FALSE. The Creative Studio: "Write stories, picture descriptions and music plans." — it makes no pictures and plays no sound. The Code Lab: "write Python and check it against the challenge" — it checks code, it does not run it, and it builds no AI projects. (The home page and the navigation overstate the Studio on the live site; fixed in the build about to deploy — see the discrepancy log, row 12) |
| "For ages 6–16", "three age bands" | ❌ FALSE. Designed for 9–12, adaptable for younger and older children — see "Age range" above |
| "No account needed to learn" (unscoped), or progress kept in the browser "by default" | ❌ FALSE or misleading. Buying needs a parent account; progress is in the browser for everyone. Use "No account needed to try the first mission; buying needs a parent account." |
| "Carries no name or identifier", "isn't linked to anyone" — about what goes to Anthropic | ❌ UNPROVABLE. A child can type their own name. Use "we add no name or identifier to it" |
| "A new challenge every day" | ❌ FALSE. There is one daily challenge for each age group, the same every day — see "Free without an account" |
| "Generative AI / Prompt Engineering / AI in Science / Web Dev with AI courses — coming soon" | ❌ NOT COURSES. `/courses` lists them as topics being planned. No date, no promise |

### These change when child-profile sync ships

The schema is built for it, so it will likely happen. **The day anything writes
`child_profile` or `child_progress`:** "nothing about your child is stored on our
servers" becomes false, `/for-parents` and its erase section must change, and the
erase button must delete the server copy too. Update this file that day.

### Why the true story is strong

"Nothing about your child is stored on our servers" is true, concrete and rare
for a paid product. The account belongs to the parent and exists only to buy
courses; the child is never in the database at all. That is a better claim than
the false absolute it replaces, and it survives a parent checking.

### Original 2026-09-18 wording — retained for audit, do not reuse

| Fact | Site wording (guest mode only) |
|---|---|
| Account required | "No account, no sign-up, no email address" |
| Data to server | "Progress is stored in this browser only, never sent to a server" |
| Tracking | "No advertising, no tracking scripts, no third-party analytics" |
| Erase data | "Erase all progress, badges and activity records" |

> **The tracking line changed on 2026-11-09 (D2).** Umami went live and "no
> third-party analytics" became false; the site switched its own wording that
> day. This file was corrected on 2026-11-14, five days late — no draft in
> that window was published, because D1 still holds every draft back.

## Named product elements

| Element | Detail | Status |
|---|---|---|
| Courses | AI Detective Academy; Train Your Robot Brain; AI Game Creator Lab; Smart and Safe AI Heroes | SITE-VERIFIED - **all four now named** |
| Story Shelf | The Lantern That Learned the Way; The Mirror That Only Knew Roses; The Baker Who Sorted the Starfruit; Wren and the Whispering Wood; The Clockwork Nightingale; The Two Guardians of the Amber Bridge | SITE-VERIFIED - **all six now named**. Titles written as the product data writes them (`src/data/stories.ts`, shelf order), checked 2026-11-20 |
| Characters | Maya, Pip, Glitch | **CODE-VERIFIED 2026-10-17** — all three in `src/data/characters.ts` |

## Free without an account — SITE-VERIFIED 2026-11-20

All live on www.kidtechies.com with no sign-in (only `/account` needs one).
The site wording is quoted exactly. **Not yet in the client's confirmation.**
Each row below is on the list the client is asked to approve — Part 2 of
`ops/client/KidTechies-Email-Review.docx`: the free tools, schools and devices
since round 2, and XP, badges and streaks, the daily challenge and the emailed
printable sheet since round 3 (both 2026-11-20). The client answers on the
version re-sent after round 3.

| Feature | Site wording (exact) | What it really does |
|---|---|---|
| Sparky AI Tutor (`/tutor`) | "Your friendly AI buddy who explains, guides, and cheers you on." (home page) | What a child types to Sparky goes to Anthropic's Claude for a reply, with the age group chosen — the agreed sentence under "What leaves the device" covers it. Sparky is instructed never to ask for a name, school or address |
| Code Lab (`/code`) | "Write Python, check your work, and earn XP." | "Write Python and check it against the challenge." It checks code against patterns. **It does not run the code** and builds no AI projects — never say it does. Its "Get a hint" button sends the child's code to Claude — "the code they send for a Code Lab hint" in the agreed sentence |
| Creative Studio (`/create`) | "Three tools for making things. Choose one, fill in the blanks, and see what comes out." | **"Write stories, picture descriptions and music plans."** Story Weaver (a story), Art Prompter ("a written description, not a picture"), Music Maker ("a plan in words … It does not play sound"). It makes no pictures and plays no sound — never "make music" or "make art". Typed words go to Claude with the age group, as with Sparky. The navigation's description ("Make stories, art prompts, and music.") is fixed in the build about to deploy |
| XP, badges and streaks | "Start learning to earn XP, badges, and streaks." (home page) | Kept in the browser, like all progress |
| Daily challenge | "Daily Challenge" on the dashboard; "the daily challenge" matches the chosen age group (`/age-select`) | **One challenge for each age group, shown every day — the same one each day** (`src/data/daily-challenges.ts` holds one per age group; nothing rotates it). Kept in the browser. Never "a new challenge every day" |
| Printable sheet by email | "Want the printable sheet, and one question a week to talk about at home?" (end of the free mission) | A parent who confirms their email gets the free mission's printable sheet, then the welcome emails and a weekly question |
| Group access for schools and clubs | `/pricing`: "Can a school or club use it? Yes. Every mission has a printable sheet with the activity steps and an answer key. Get in touch about group access." `/for-teachers`: "Tell us how many children and what ages, and we will work out access for the group." | An email link to the company. **No group price exists** — never state one |
| Devices | `/pricing`: "Paper and something to write with. The activities are on screen, but each one also prints if you would rather work away from a device." `/for-teachers`: "Run it from one projected screen, with printed sheets for the half of the room without a device." | |

## Build-status caveats - currently published

Quoted from `/for-parents`:

> "the films do not yet have subtitles, and the illustrations in the activities
> are placeholders"
> "a qualified teacher is reviewing the quiz wording and age adaptations before
> this is used in a classroom"

Still live on 2026-11-20. `/for-teachers` says the same, and adds: *"Until
that review is finished it suits clubs, homeschool groups and enrichment
sessions best."*

**Pending deploy:** in the build about to deploy (`fix/review-round-1`) the
illustration line becomes *"some illustrations inside the activities are
placeholders while the artwork is produced"*. Until it is live, the line
quoted above is what the site says; once it is live, quote the new line.

For copy, the three caveats in plain words (all on the D1 list): **still being
built — the films have no subtitles yet, some illustrations are placeholders,
and a qualified teacher is reviewing the quiz wording.**

These are **true and must not be contradicted**. An agent writing "classroom
ready" while the site says a teacher is still reviewing the quizzes has created
a conflict a school will notice. The dossier's recommendation is to move these
to a dated changelog page - honesty relocated, not removed.

Until they move, agents writing for the teacher persona must not claim
classroom-readiness without qualification.

## Company identity — supplied 2026-10-18

See "Company" at the top of this file. The terms page's template text
("whoever operates this installation") was replaced; live since 2026-11-07.

## Competitor figures - third-party, re-check before use

**Superseded 2026-09-18.** The dossier's "$11-25 / month" band does not match
what is published today.

| Competitor | Observed price | Checked | Status |
|---|---|---|---|
| Tynker | from **$7.50** / month | 2026-09-18 | INDICATIVE - from a roundup, not the vendor's own pricing page |
| CodaKid | from **$29** / month self-study; $249 / month 1:1 | 2026-09-18 | INDICATIVE |
| Juni Learning | from **$299** / month, one session per week | 2026-09-18 | INDICATIVE |
| Create&Learn | not found | 2026-09-18 | UNKNOWN |
| Google Teachable Machine, Machine Learning for Kids, Code.org AI units | Free tools, not courses | - | THIRD-PARTY, UNVERIFIED |

### This breaks a message pillar

Message rank 4 in `audience.md` first framed $70 as *"less than three months of
the alternatives, forever."* (Retired by the client on 2026-10-18, D8 — kept
here for the reason.)

That holds against CodaKid at $29. Against **Tynker at $7.50 it is false** -
$70 is roughly nine months, not three. An agent using the dossier's framing
against Tynker's real price would publish a false comparison to a parent who can
check it in one click.

**Agents may not use the "three months" framing at all** — the client chose the
discount story instead (D8). See `claims-allowed.md`. The honest version of the argument still
works - one payment, no recurring charge, nothing to cancel - it just cannot
lean on an invented multiple.

Prices above are indicative and come from comparison roundups rather than vendor
pricing pages. An agent citing any of them must re-verify on the vendor's own
site in the same run and cite that page, or omit the figure. Do not publish a
price comparison built on this table alone.

## Gaps remaining for v1.0 — as of 2026-11-20

1. **One "approved" from the client on the full fact list (D1)** — Part 2,
   "please confirm these facts" — the last table in
   `ops/client/KidTechies-Email-Review.docx`. That is the only gap. The table
   gained eight rows and a new learning-time figure on 2026-11-20 (round 2),
   and the facts drafts routinely use on round 3 the same day (how trying and
   buying work, progress, time per mission and per course, the film, the
   Story Shelf titles, the links, XP and the daily challenge, the emailed
   sheet, Sparky's instructions, what is still being built, quiz explanations
   and the notes for grown-ups), so the developer must send the updated
   document before the client answers. Separately, `fix/review-round-1` must
   be deployed before anything is published after D1 — the learning-time
   figures are on the site only from then.

Closed since the first list: activities, quiz questions, certificate and
printable sheets (verified in the code and on the site, 2026-10-07 and
2026-10-17); the free tier and the characters (2026-10-17, confirmed
2026-10-18); company name, country and contact (client, 2026-10-18). A founder
name is not needed. The postal address (D15) is needed for US emails, not for
v1.0.

On approval: set `version` to `1.0`, set `last-approved` to the date, and add
a line to `CHANGELOG.md`. **The promotion rule:** on approval, set to CONFIRMED
only the rows that appear in the list the client approved. Rows not on that
list keep their status. PENDING rows never change on approval.
