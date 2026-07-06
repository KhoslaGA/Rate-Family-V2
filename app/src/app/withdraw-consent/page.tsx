'use client';

import { useState, type FormEvent } from 'react';
import Link from 'next/link';
import { Icon } from '@/components/brand/Icon';

/**
 * Consent withdrawal page.
 *
 * Phase 1 implementation: email-only flow. The user enters the email they
 * used when submitting the /life-insurance lead form, and we mark all of
 * their lifeReferral records as withdrawn (sets withdrawnAt — does NOT
 * delete the records, per CASL/PIPEDA compliance-proof retention).
 *
 * Phase 2 enhancement: token-based flow that emails a confirmation link
 * to the user's address before marking withdrawal — closes the loophole
 * where someone else could withdraw on a user's behalf.
 *
 * The email-only flow errs in the user's favor (easier to withdraw is
 * always better than harder), which is acceptable for May 8 launch.
 */

export default function WithdrawConsentPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [recordsUpdated, setRecordsUpdated] = useState<number>(0);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);

    const fd = new FormData(e.currentTarget);
    const email = String(fd.get('email') ?? '');

    try {
      const res = await fetch('/api/withdraw-consent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (!data.ok) {
        setError(data.error ?? 'Something went wrong.');
        setSubmitting(false);
        return;
      }
      setRecordsUpdated(data.recordsUpdated ?? 0);
      setSubmitted(true);
    } catch {
      setError('Network error. Please try again.');
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <main className="container mx-auto px-6 py-20 max-w-xl">
        <h1 className="font-display font-black text-3xl text-navy mb-4">
          Consent withdrawn.
        </h1>
        <p className="text-mute leading-relaxed mb-4">
          {recordsUpdated > 0
            ? `We've marked ${recordsUpdated} record${recordsUpdated === 1 ? '' : 's'} as withdrawn. Any pending follow-up from KLC Group Canada Inc. will be cancelled, and we will not contact you further about insurance products through this lead form.`
            : "We didn't find any active records matching that email. If you submitted a lead form previously, it may already be withdrawn or expired."}
        </p>
        <p className="text-sm text-mute leading-relaxed mb-6">
          Note: per Canadian privacy and CASL regulations, we retain a record
          of your consent and its withdrawal as compliance proof. Your record
          is marked as withdrawn but not deleted. For full deletion requests,
          email{' '}
          <a href="mailto:privacy@toprates.ca" className="text-teal underline">
            privacy@toprates.ca
          </a>
          .
        </p>
        <Link href="/" className="text-teal underline text-sm inline-flex items-center gap-1.5">
          <Icon name="arrowLeft" size={15} color="#F2B441" /> Back to TopRates.ca
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-6 py-20 max-w-xl">
      <h1 className="font-display font-black text-3xl text-navy mb-4">
        Withdraw consent
      </h1>
      <p className="text-mute leading-relaxed mb-6">
        Enter the email address you used when submitting our life-insurance
        lead form. We&rsquo;ll mark your record as withdrawn and stop contact
        from KLC Group Canada Inc.
      </p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            className="block text-sm font-bold text-navy mb-1"
            htmlFor="withdraw-email"
          >
            Email
          </label>
          <input
            id="withdraw-email"
            name="email"
            type="email"
            required
            className="w-full px-3 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-teal"
          />
        </div>
        {error ? (
          <p className="text-sm text-red-600" role="alert">
            {error}
          </p>
        ) : null}
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-navy text-white font-bold py-3 rounded-full hover:bg-teal transition disabled:opacity-50"
        >
          {submitting ? 'Working…' : 'Withdraw consent'}
        </button>
      </form>
    </main>
  );
}
