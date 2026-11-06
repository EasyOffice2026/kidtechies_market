---
file: email-setup.md
owner: Developer (has Hostinger access, per the client on 2026-10-18)
created: 2026-10-18
---

# Email setup — Hostinger DNS, Resend sending

Everything the parent mailing list needs before its first real send, in order.
About 30 minutes, most of it waiting for DNS.

> **Status, 2026-11-07: sending works.** Step 1 turned out to be the blocker:
> kidtechies.com sat in Resend as *Not Started* while its DNS records were
> already in place. Started and verified on 7 November; migration applied
> (step 4); the step 5 test passed. Mail goes from `noreply@kidtechies.com`.
> Steps 2–3 (`news.kidtechies.com`) remain an optional improvement.

## What is already in place (checked 2026-10-18, public DNS)

| | Found | Meaning |
|---|---|---|
| Nameservers | `lunar.dns-parking.com`, `solar.dns-parking.com` | **DNS is managed in Hostinger.** All records below are added there. |
| MX | `mx1.hostinger.com`, `mx2.hostinger.com` | Hostinger email is live for kidtechies.com — mailboxes like `hello@kidtechies.com` can exist |
| SPF | `v=spf1 include:_spf.mail.hostinger.com ~all` | Hostinger is authorised to send for the root domain |
| DMARC | `v=DMARC1; p=none` | A monitoring-only policy exists |
| `resend._domainkey` | a DKIM key is published | **kidtechies.com has been added to Resend** — probably how account emails go out today |
| `send.kidtechies.com` | MX and SPF records for a sending service | The return-path for that sender |
| `news.kidtechies.com` | **nothing** | The marketing subdomain does not exist yet |

## Step 1 — Check what account emails use today (5 minutes)

In the Resend dashboard → **Domains**, confirm `kidtechies.com` shows
**Verified**. In Vercel → `ai-for-kid` → Environment Variables, check whether
`SMTP_HOST` is set: if it is, every email — including the newsletter — goes
through SMTP instead of Resend, because the code tries SMTP first.

If kidtechies.com is **not** verified in Resend and SMTP is not set, parents'
account confirmation emails are being refused right now. Fix that first.

## Step 2 — Add the marketing subdomain in Resend (15 minutes)

Why a subdomain: mailbox providers judge a sender's reputation partly by
domain. Marketing mail on `news.kidtechies.com` keeps a complaint or a bad week
on the newsletter from hurting password-reset and confirmation emails, which
stay on `kidtechies.com`.

1. Resend → **Domains → Add domain** → `news.kidtechies.com`.
2. Resend shows three or four records (a DKIM `TXT`, an `MX` and an SPF `TXT`
   for a `send.news` return-path). **Copy them exactly as Resend shows them** —
   the DKIM key is unique to this account.
3. Hostinger → **Domains → kidtechies.com → DNS / Nameservers → Manage DNS
   records**. Add each record. Hostinger appends `kidtechies.com` to the name
   for you, so enter `send.news`, not `send.news.kidtechies.com`.
4. Add DMARC for the subdomain:

   | Type | Name | Value |
   |---|---|---|
   | TXT | `_dmarc.news` | `v=DMARC1; p=none; rua=mailto:contact@easyofficeq8.com` |

   `p=none` only reports; tighten to `quarantine` after a few clean weeks.
5. Back in Resend, press **Verify**. DNS can take from minutes to a few hours.

## Step 3 — Environment variables on Vercel

| Variable | Value | Why |
|---|---|---|
| `NEWSLETTER_FROM` | `KidTechies <hello@news.kidtechies.com>` | The newsletter's sending address, on the subdomain |
| `NEWSLETTER_REPLY_TO` | *(leave empty)* | Defaults to `contact@easyofficeq8.com`, so parents' replies reach a person |
| `CRON_SECRET` | output of `openssl rand -base64 32` | Without it the daily job refuses to run — by design |
| `RESEND_API_KEY` | already set if account email uses Resend | |

`hello@news.kidtechies.com` does not need to be a real mailbox: replies go to
the reply-to address. If you would rather replies land in a Hostinger mailbox,
create `hello@kidtechies.com` there and set `NEWSLETTER_REPLY_TO` to it.

## Step 4 — Apply the migration and prove it

```
npm run check:db          # what is already applied
npm run db:migrate        # applies 0001 (password reset) and 0002 (newsletter)
npm run check:newsletter-db
```

Every line of `check:newsletter-db` should PASS. It is the proof that no email
can be sent twice, and the one check that could not run before the migration.

## Step 5 — One real test

Finish the free mission on the live site, enter your own address, confirm, and
check that the printable-sheet email arrives — from `hello@news.kidtechies.com`,
with a working unsubscribe link, and that replying addresses
`contact@easyofficeq8.com`.

## Alternative — Hostinger SMTP only

If you would rather not use Resend at all: create a mailbox on Hostinger and
set `SMTP_HOST=smtp.hostinger.com`, `SMTP_PORT=465`, `SMTP_USER` and
`SMTP_PASSWORD` to it. Simpler, but two trade-offs: account and marketing
email then share one domain's reputation, and mailbox SMTP is built for
person-to-person mail, with daily sending limits — fine for a small list,
worth revisiting if it grows. Check Hostinger's current limits for your plan
before relying on it.

## Not yet possible

The footer needs a postal address before sending to US addresses (D15). Until
the client supplies one, either hold US sends or accept the risk knowingly.
