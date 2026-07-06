import { Resend } from 'resend';

/**
 * Notification helper — fire-and-forget emails to the inbox owner
 * when a contact form or waitlist signup hits the API.
 *
 * Both functions:
 *   - Silently no-op if RESEND_API_KEY is absent (so dev / local
 *     submissions work without a key, and production without a key
 *     never breaks the user-facing 200 OK).
 *   - Catch and log any Resend error rather than throwing — the
 *     submission has already been persisted to Sanity by the time
 *     these are called, so notification failure must NOT cause the
 *     user's submission to fail.
 *
 * Environment variables:
 *   RESEND_API_KEY    — required for emails to actually send.
 *   NOTIFY_FROM_EMAIL — optional override (default: Resend's
 *                       onboarding@resend.dev, which works without
 *                       domain verification but ships with that
 *                       sender label). Once toprates.ca is verified
 *                       in Resend, set this to e.g.
 *                       'TopRates.ca <noreply@toprates.ca>'.
 *   NOTIFY_TO_EMAIL   — optional override (default: contact@toprates.ca).
 */

const apiKey = process.env.RESEND_API_KEY;
const fromAddress =
  process.env.NOTIFY_FROM_EMAIL ?? 'TopRates.ca <onboarding@resend.dev>';
const toAddress = process.env.NOTIFY_TO_EMAIL ?? 'contact@toprates.ca';

const resend = apiKey ? new Resend(apiKey) : null;

export interface ContactInquiryNotification {
  product: string;
  name: string;
  email: string;
  phone?: string;
  postalCode?: string;
  message?: string;
  routedTo: string;
  submittedAt: string;
  ipAddress: string;
}

export async function notifyContactInquiry(
  payload: ContactInquiryNotification,
): Promise<void> {
  if (!resend) {
    console.log(
      `[notify] Skipping contact email — RESEND_API_KEY not set (would have notified ${toAddress} re ${payload.product} from ${payload.email})`,
    );
    return;
  }

  const subject = `[TopRates] New ${payload.product} inquiry — ${payload.name}`;
  const lines = [
    `New inquiry on TopRates.ca.`,
    ``,
    `Product:       ${payload.product}`,
    `Routed to:     ${payload.routedTo}`,
    `Name:          ${payload.name}`,
    `Email:         ${payload.email}`,
    `Phone:         ${payload.phone || '(not provided)'}`,
    `Postal code:   ${payload.postalCode || '(not provided)'}`,
    ``,
    `Message:`,
    payload.message?.trim() ? payload.message.trim() : '  (no message)',
    ``,
    `---`,
    `Submitted:     ${payload.submittedAt}`,
    `IP:            ${payload.ipAddress}`,
    ``,
    `Full record in Sanity Studio: https://toprates.ca/studio`,
  ];

  try {
    await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: payload.email,
      subject,
      text: lines.join('\n'),
    });
  } catch (err) {
    console.error('[notify] Resend contact notification failed', err);
  }
}

export interface WaitlistSignupNotification {
  email: string;
  source: string;
  scope: string;
  submittedAt: string;
  ipAddress: string;
  referer?: string;
}

export async function notifyWaitlistSignup(
  payload: WaitlistSignupNotification,
): Promise<void> {
  if (!resend) {
    console.log(
      `[notify] Skipping waitlist email — RESEND_API_KEY not set (would have notified ${toAddress} re ${payload.email})`,
    );
    return;
  }

  const subject = `[TopRates] Waitlist signup — ${payload.email}`;
  const lines = [
    `New waitlist signup on TopRates.ca.`,
    ``,
    `Email:    ${payload.email}`,
    `Source:   ${payload.source}`,
    `Scope:    ${payload.scope}`,
    `Referer:  ${payload.referer || '(not provided)'}`,
    ``,
    `---`,
    `Submitted: ${payload.submittedAt}`,
    `IP:        ${payload.ipAddress}`,
    ``,
    `Full record in Sanity Studio: https://toprates.ca/studio`,
  ];

  try {
    await resend.emails.send({
      from: fromAddress,
      to: [toAddress],
      replyTo: payload.email,
      subject,
      text: lines.join('\n'),
    });
  } catch (err) {
    console.error('[notify] Resend waitlist notification failed', err);
  }
}
