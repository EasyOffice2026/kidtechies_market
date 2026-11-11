---
file: product-roadmap.md
owner: Client (direction) · Developer (phasing and estimates)
created: 2026-11-11
status: For understanding and future planning — nothing here is scheduled or quoted
---

# Product roadmap — the client's vision, phased from what exists

On 2026-11-11 the client shared a handwritten product note (`kidsai.app`) and
then clarified it in five messages:

> Kids · Parents · Teachers · Community — Playground — Sharing anonymously —
> Involvement all together to make platform live and engaged among community.
> For understanding and future plan. **Let's start with what we have done.**

So this is direction, not a build order. The current platform comes first;
each phase below grows out of it. None of the features beyond Phase 0 may be
described to parents as existing — see `knowledge/claims-allowed.md`.

## The vision, as written in the note

| Element | What the note says |
|---|---|
| Audience | Children 6–14; also parents, teachers and a community |
| Levels | Category 1 Beginner · Category 2 Intermediate · Category 3 Advanced |
| Courses | About AI, for kids — knowledge plus hands-on practice |
| Content types | Text · Videos · Questionnaires · an interface for testing: the **Studio** (playground) |
| Main selling point | The Studio, growing into a community |
| Sharing | Children share work so others can "check + learn"; **anonymous**, with **content moderation** |
| Game | "My World", tied to the course activities |
| Teachers | Access via Google support / grants → teacher API keys → students |
| Revenue | Subscription |

## What already exists (2026-11-11)

| Vision element | In the product today |
|---|---|
| AI courses with hands-on activities | Four courses, live on kidtechies.com |
| Text and questionnaires | Lessons, activities, quizzes, printable sheets |
| Studio / playground | **Creative Studio** at `/create`: story, art and music tools, replies from Claude through the server |
| Ages | Age groups on the learner profile |
| Parents | Parent accounts, the parents page, the mailing list |
| Teachers | `/for-teachers` page |
| Anonymous by default | Guest mode: a nickname, no account, nothing identifying |

## Phases

| Phase | What | Builds on | Main risk |
|---|---|---|---|
| **0 — Now** | Finish and test what is built: marketing system testing this week, the live site, the email list, analytics | Everything above | None new |
| **1 — Levels** | Map the four courses onto Beginner / Intermediate / Advanced for ages 6–14; show the level on each course | Course catalogue, age groups | Courses that do not fit a level cleanly |
| **2 — Studio as the playground** | Make the Creative Studio the centre: more tools, linked to each course's lessons | `/create`, Sparky | AI cost per child; every prompt already passes the safety filter |
| **3 — Anonymous sharing** | A gallery where children share Studio work — see the safety design below | Phase 2 | **Highest legal and safety risk in the plan** |
| **4 — Community** | Parents and teachers take part: class spaces for teachers, parent view of their child's shared work, the "My World" game | Phases 1–3 | Moderation workload grows with use |
| **Later** | Videos, subscription pricing, teacher API keys via Google grants, the `kidsai.app` name | Client decisions | See open questions |

## Safety design for sharing (Phase 3) — the minimum, not the ideal

Children sharing with other children is where a kids' product gets into
trouble. The first version should be the narrowest one that still delivers
"check + learn":

- **Verifiable parental consent** before a child can share anything (COPPA in
  the US, GDPR for children in Europe).
- **Every post approved by an adult** before anyone else sees it.
- **Generated anonymous names** — children never choose or type their own.
- **No free text between children**: no comments, no messages. Reactions from
  a fixed set only.
- **No images of real people**; uploads limited to Studio output.
- **One-tap report and takedown**, with a named person who handles reports.
- **Legal review before launch** — the same owner as D11.

## Teacher API keys — what has to be true

- A key is never sent to a browser. All AI calls go through the server, where
  the existing safety filter applies.
- The AI provider's terms on use by minors must allow the use, checked before
  building.
- Google support or grants are applied for by the client; nothing in the plan
  should depend on them until awarded.

## Open questions for the client (not blocking anything)

1. Is `kidsai.app` a new brand, a second app, or a domain for KidTechies? (D3
   chose KidTechies on 2026-10-18.)
2. Subscription instead of the $70 one-time price, or both? (D8 chose one-time.)
3. Has a Google support or grant application been made?
4. Who produces the videos?
5. Who moderates shared work once Phase 3 is live?

Building any phase is product work, scoped and quoted separately from the
marketing project.
