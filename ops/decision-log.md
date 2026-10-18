# Decision log

Open decisions block work. Each has an owner and a "blocks" column so the cost
of leaving it open is visible. Close by editing the row and committing.

## Open

| # | Decision | Owner | Blocks | Status |
|---|---|---|---|---|
| D1 | **Product fact sign-off.** Every fact is now verified against the live site or the product code, and the client confirmed brand, price, company and free tier in writing on 2026-10-18. What remains is one "approved" on the full list — page 2 of `ops/client/KidTechies-Email-Review.docx`. | Client | `product-facts.md` → v1.0; anything published | OPEN — one-word reply needed |
| D4 | **Claude scheduled-task capability** on the client's plan. Not answered on 2026-10-18. | Client (5 minutes) | All six agent cadences; all of Part 3 | **OPEN — the single biggest blocker** |
| D6 | **Native Arabic reviewer.** Not answered on 2026-10-18. Lower priority since the client chose worldwide online registration (D12), but still needed for the Gulf. | Client | Arabic publication, the Arabic landing page | OPEN |
| D7 | **Monthly agent running-cost ceiling.** | Client + developer | Nothing yet | OPEN — needs real runs on the client's account first |
| D14 | **Who approves content?** Primary and backup approver, and turnaround. Not answered on 2026-10-18. Ibrahim runs marketing day to day (D9), so he is the natural primary — but the client should say so. | Client | Every publication | OPEN |
| D15 | **Postal address for email footers.** Commercial email to the US (CAN-SPAM) must show the sender's postal address; the client gave the company's country and email but not an address. `COMPANY.postalAddress` in the product is ready for it. | Client | Sending the newsletter to US addresses | OPEN |
| D11 | **Legal review of the privacy notice and terms.** The facts were corrected on 2026-10-18 (`feature/client-decisions`): accounts, Stripe, the mailing list and the company are now described accurately. Both pages still say "Draft, pending legal review", truthfully. Whether to have a lawyer check them is the client's call. | Client | Legal certainty, not accuracy | OPEN — facts fixed, review is the client's decision |
| D2 | **Analytics + email capture.** Both built. Analytics **approved by the client** on 2026-10-18. To close: sign up for Plausible, set `NEXT_PUBLIC_ANALYTICS_DOMAIN`, apply migration 0002, set the newsletter env vars, run the exit test. The public wording switches by itself. | Developer | Funnel Analyst live acceptance; GTM Phase 1 exit test | OPEN — all approvals in, setup remaining |

## Closed

| # | Decision | Resolution | Date |
|---|---|---|---|
| - | Version control from Day 1 rather than Stage 2 | Adopted. Git repo initialised at project root; Stage 2's private repo becomes a continuation, not a migration. | 2026-09-17 |
| D5 | Gulf curriculum news hook still live? | **Yes, re-angled.** Saudi's rollout began 2025-26 and is a year old — context, not news. The **UAE** is live: "Artificial Intelligence and Technology" is a standalone subject from the 2026-27 term, KG–G12, public *and* private schools. Queue item 1 unblocked as a UAE-first piece. | 2026-09-18 |
| D10 | Do printable activity sheets exist? | **Yes.** In the product code and live at `/courses/<course>/<lesson>/sheet`. Gated behind purchase for paid lessons. | 2026-10-07 |
| D3 | Brand name | **KidTechies is the brand; "AI for Kids" is the tagline** (client, 2026-10-18). Site renamed on `feature/client-decisions`. The logo, icon and share image are artwork that still reads "AI for Kids" — new artwork is a design task. The saved-progress key was deliberately not renamed. | 2026-10-18 |
| D8 | Price framing | **Keep the discount model**: all four courses for $70 instead of $100 (client: "Let's try this model and then we will adjust accordingly"). "One payment, no subscription, nothing to cancel" stays permitted — it is a fact. The "three months of the alternatives" comparison stays retired. | 2026-10-18 |
| D9 | Who owns the GTM plan? | **Ibrahim** runs the marketing plan day to day (client, 2026-10-18). | 2026-10-18 |
| D12 | Target market | **Worldwide online registration**, concentrating on the countries that respond best (client, 2026-10-18). Replaces "Gulf-first". Consequences: school outreach is paused as a weekly agent; the paid message lab tests several countries; analytics' country breakdown becomes the way to pick markets. | 2026-10-18 |
| D13 | New courses | **Keep researching and planning new courses** to keep the platform fresh (client, 2026-10-18). Agent 1 gains a monthly course-opportunity section; the first brief is in `drafts/2026-10-18/`. Building a course is product work, quoted separately. | 2026-10-18 |
| — | Is the Story Shelf free? | **Yes, and it stays free** "to keep the interest of the kids" (client, 2026-10-18). Already ungated in code; now stated on the pricing page and in the emails. | 2026-10-18 |
| — | Company identity | **Easy Office International, registered in Kuwait** — contact@easyofficeq8.com, www.easyofficeq8.com, Instagram easyoffice.intl. Now on the footer, terms, privacy notice, about page and every email. Founder name not given; not needed. | 2026-10-18 |
| — | Mail setup | Client: "You have access of Hostinger." DNS for kidtechies.com is at Hostinger and kidtechies.com already has a Resend key published. See `ops/email-setup.md`. | 2026-10-18 |
