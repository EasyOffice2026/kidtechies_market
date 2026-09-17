# Knowledge base changelog

Every change to a file in `knowledge/` gets a line here, and the file's own
`version` and `last-approved` header is updated in the same commit.

Changes affecting **pricing, privacy, refund terms or educational claims**
require client approval *before* the file becomes agent context. Record the
approver.

| Date | File | Version | Change | Approved by |
|---|---|---|---|---|
| 2026-09-17 | all five + content-queue | 0.1-DRAFT | Initial authoring from the Growth Dossier and KT/DEV/2026-001. All product facts marked PENDING - not yet fit for parent-facing output. | NOT YET APPROVED |

## The promotion rule

A knowledge file is `DRAFT` until the client approves it in writing. Until then:

- Agents may run against it for **internal test drafts only**.
- No output built on a PENDING fact may be published, sent to a school, or
  placed in an ad.

Promote by: client written approval -> update `version` to `1.0`, set
`last-approved` to the date, flip PENDING rows to CONFIRMED, add a line above.

## Feeding the voice file

The founder's Thursday customer calls are the input that keeps
`brand-voice.md` alive (dossier S09). When a real parent phrase goes into the
file, log it here with the date it was heard. A voice file that has not changed
in three months is not being used.
