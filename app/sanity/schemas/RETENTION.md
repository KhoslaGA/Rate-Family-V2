# Data retention policy — TopRates.ca / Webhub4u Inc.

This document describes the retention policy for personal information stored in
Sanity, and the implementation status of the cleanup job.

## Why this exists

PIPEDA Principle 5 (Limiting Use, Disclosure, and Retention) requires that
personal information be retained only as long as necessary to fulfill the
purposes for which it was collected.

CASL adds a parallel requirement: when a user withdraws consent, the
withdrawal must be honored within 10 business days, but a record of the
withdrawal itself must be retained indefinitely so we can demonstrate that we
stopped sending commercial messages in compliance with the law.

## Retention defaults

| Document type | Default retention | Notes |
| ------------- | ----------------- | ----- |
| `waitlistEntry` | 24 months from `submittedAt` | Computed at write time; stored in `retentionUntil`. Extended if user opts in to additional content categories or converts to a customer. |
| `waitlistEntry` (withdrawn) | Indefinite | When `withdrawnAt` is set, the record is preserved as a CASL audit record. The email is no longer used for commercial messaging. |
| Quote requests (TBD at launch) | 90 days from submission if not converted | Will be implemented when the get-quotes form starts persisting beyond the licensed broker partner's intake. |
| Server logs (Vercel, Sanity) | Provider default (typically 30-90 days) | Out of our direct control; covered by service-provider DPA. |

## Implementation status

| Step | Status | Owner |
| ---- | ------ | ----- |
| `retentionUntil` field on `waitlistEntry` schema | ✅ Done (Task 4) | — |
| Compute `retentionUntil = submittedAt + 24 months` at write | ✅ Done in `/api/waitlist` | — |
| `withdrawnAt` field on `waitlistEntry` schema | ✅ Done (Task 4) | — |
| Unsubscribe endpoint that sets `withdrawnAt` instead of deleting | ⏳ TODO before any commercial message is sent | engineering |
| Scheduled cleanup job that purges entries past `retentionUntil` | ⏳ TODO before significant lead volume accumulates | engineering |
| Privacy Officer DSAR (data subject access request) workflow | ⏳ TODO; manual today | privacy@toprates.ca |

## Scheduled cleanup — implementation notes

When ready to ship the cleanup job, options include:

1. **Vercel cron** (`vercel.json` cron config) hitting a `/api/admin/cleanup`
   route protected by a server-only token. Simplest path; lives in this repo.
2. **GitHub Action** running on a schedule, calling Sanity's mutation API with
   a service token. Useful if we need cleanup that goes beyond what an
   API route can do.
3. **Sanity scheduled function** (if/when Sanity offers one for our plan).

The cleanup logic in pseudocode:

```ts
const expired = await client.fetch(
  `*[_type == "waitlistEntry" && retentionUntil < $now && !defined(withdrawnAt)]`,
  { now: new Date().toISOString() },
);
for (const doc of expired) {
  await client.delete(doc._id);
}
```

Withdrawn records (with `withdrawnAt` set) are NEVER auto-purged — they exist
only to demonstrate that we stopped messaging on a specific date.

## Reviewer note

If you're touching schemas in this directory, do not remove
`retentionUntil`, `withdrawnAt`, `withdrawnReason`, or `consentText` without
first consulting the Privacy Officer (privacy@toprates.ca). Those fields are
part of our PIPEDA / CASL audit trail.
