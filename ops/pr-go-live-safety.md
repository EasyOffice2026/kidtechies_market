## What this does

The merged site can go live before the mailing-list migration
(`drizzle/0002_newsletter.sql`) has run. Until it does, every mailing-list
query fails, and three public pages turned that failure into an error page:

- **The email form at the end of the free mission.** The "Mission complete"
  screen was replaced by the error page. This is the one screen the funnel
  depends on.
- **The confirm link** in the sign-up email.
- **The unsubscribe link.** This one should never fail in front of a parent.

Each now catches the failure and shows a short message in place. The
unsubscribe message also gives the company address, so a parent can still be
removed by hand.

There is one related fix. If the welcome email fails after a parent has
confirmed, they still see "You are on the list", and the daily job sends the
welcome later. Before, they were told to open a link that no longer works.

`check:db` did not list either newsletter table, so it passed whether or not
the migration had run. It now checks both.

## Checks

- tsc clean, lint clean, newsletter 20/20.
- Every page renders, and no retired claim appears.
- Tested against the real database with the tables missing:
  - the confirm and unsubscribe links return 200 with the new message
  - the form returns its in-form error

## Still needed

This keeps the site safe until the migration runs. It does not replace it:
`npm run db:migrate`, then `npm run check:db`.

🤖 Generated with [Claude Code](https://claude.com/claude-code)
