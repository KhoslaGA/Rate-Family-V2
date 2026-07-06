import { Resend } from 'resend';
import { KlcReferralEmail } from '@/emails/KlcReferralEmail';

/**
 * KLC Group Canada Inc. referral handoff via Resend.
 *
 * Forwards a /life-insurance lead from Webhub4u Inc. to KLC Group with the
 * minimum-necessary information (name, contact, broad product interest) plus
 * full CASL consent context. KLC Group then conducts all regulated activity
 * (needs analysis, suitability, illustrative quoting, application,
 * underwriting, placement) under their FSRA-regulated framework.
 *
 * Environment variables:
 *   RESEND_API_KEY    — required for emails to actually send.
 *   KLC_HANDOFF_EMAIL — required. The mailbox where KLC Group receives leads.
 *                       Until KLC stands up referrals@klcgroup.ca, this MUST
 *                       point to a Webhub4u-monitored inbox to avoid leads
 *                       vanishing into an unmonitored mailbox.
 *   KLC_HANDOFF_FROM  — Resend sender. Defaults to onboarding@resend.dev
 *                       (Resend's verified default sender). Once toprates.ca
 *                       is verified in Resend (DKIM/SPF), set this to
 *                       referrals@toprates.ca.
 */

const apiKey = process.env.RESEND_API_KEY;
const KLC_HANDOFF_EMAIL = process.env.KLC_HANDOFF_EMAIL;
const KLC_HANDOFF_FROM =
  process.env.KLC_HANDOFF_FROM ?? 'onboarding@resend.dev';

const resend = apiKey ? new Resend(apiKey) : null;

export type KlcHandoffPayload = {
  referralId: string;
  name: string;
  email: string;
  phone?: string;
  preferredContact: 'email' | 'phone';
  province: string;
  ageRange: string;
  coverageInterest: string;
  contactTimes: string[];
  message: string;
};

/**
 * Send the referral email to KLC Group. Throws on Resend error so the
 * caller (the API route) knows the handoff failed and can decide how to
 * surface the failure to the user. The Sanity record is already persisted
 * by the time this function is called, so a thrown error here means we
 * have the lead but didn't notify KLC yet.
 *
 * Returns null if RESEND_API_KEY is not set (dev mode without Resend).
 * The /api/life-referral route logs but does not fail in that case — the
 * lead is in Sanity, follow-up just has to be manual.
 */
export async function sendKlcHandoff(
  payload: KlcHandoffPayload,
): Promise<{ id: string } | null> {
  if (!KLC_HANDOFF_EMAIL) {
    throw new Error(
      '[compliance] KLC_HANDOFF_EMAIL env var is required. Refusing to drop a referral without a destination mailbox.',
    );
  }

  if (!resend) {
    console.warn(
      `[klcHandoff] RESEND_API_KEY not set — referral ${payload.referralId} stored in Sanity but NOT emailed to ${KLC_HANDOFF_EMAIL}. Manual follow-up required.`,
    );
    return null;
  }

  const result = await resend.emails.send({
    from: `TopRates.ca Referrals <${KLC_HANDOFF_FROM}>`,
    to: [KLC_HANDOFF_EMAIL],
    replyTo: payload.email,
    subject: `New referral: ${payload.coverageInterest} — ${payload.name}`,
    react: KlcReferralEmail(payload),
  });

  if (result.error) {
    throw new Error(`KLC handoff failed: ${result.error.message}`);
  }

  return result.data;
}
