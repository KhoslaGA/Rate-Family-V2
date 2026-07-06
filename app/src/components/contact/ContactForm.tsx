'use client';

import { useState } from 'react';
import Link from 'next/link';
import { WebhubLink } from '@/components/legal/WebhubLink';

export type ContactProduct =
  | 'life-insurance'
  | 'critical-illness'
  | 'disability'
  | 'travel-insurance'
  | 'auto-insurance'
  | 'home-insurance'
  | 'business-insurance'
  | 'mortgages'
  | 'credit-cards'
  | 'investing'
  | 'general';

interface FormData {
  product: ContactProduct | '';
  name: string;
  email: string;
  phone: string;
  postalCode: string;
  message: string;
  consent: boolean;
}

const CONSENT_TEXT =
  'I consent to TopRates.ca (operated by Webhub4u Inc.) collecting my information to respond to my inquiry. For insurance inquiries, my information may be shared with KLC Group Canada Inc., a licensed insurance advisory firm. See Privacy Policy.';

const PRODUCT_OPTIONS: { value: ContactProduct; label: string }[] = [
  { value: 'life-insurance', label: 'Life insurance' },
  { value: 'critical-illness', label: 'Critical illness' },
  { value: 'disability', label: 'Disability insurance' },
  { value: 'travel-insurance', label: 'Travel insurance' },
  { value: 'auto-insurance', label: 'Auto insurance' },
  { value: 'home-insurance', label: 'Home insurance' },
  { value: 'business-insurance', label: 'Business insurance' },
  { value: 'mortgages', label: 'Mortgages' },
  { value: 'credit-cards', label: 'Credit cards' },
  { value: 'investing', label: 'Investing' },
  { value: 'general', label: 'General inquiry' },
];

export default function ContactForm({
  defaultProduct,
}: {
  defaultProduct?: ContactProduct;
}) {
  const [data, setData] = useState<FormData>({
    product: defaultProduct ?? '',
    name: '',
    email: '',
    phone: '',
    postalCode: '',
    message: '',
    consent: false,
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!data.consent) {
      setError('You must consent to information collection to submit this inquiry.');
      return;
    }
    if (!data.product) {
      setError('Please select what you are interested in.');
      return;
    }
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({ ...data, consentText: CONSENT_TEXT }),
      });
      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
      if (!res.ok || !json.ok) {
        setError(json.error || 'Could not submit your inquiry. Please try again.');
      } else {
        setSubmitted(true);
      }
    } catch {
      setError('Could not reach the server. Please try again.');
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div
        style={{
          padding: 24,
          background: '#E6F5ED',
          border: '1px solid #0D8050',
          borderRadius: 12,
        }}
      >
        <h3 style={{ fontWeight: 700, marginBottom: 8, fontSize: 18, color: '#1B2A4A' }}>
          Thanks — we&rsquo;ve received your inquiry.
        </h3>
        <p style={{ margin: 0, color: '#374151' }}>
          We&rsquo;ll be in touch within one business day.
        </p>
      </div>
    );
  }

  const fieldStyle: React.CSSProperties = {
    padding: 12,
    borderRadius: 8,
    border: '1px solid #cbd5e1',
    fontSize: 15,
    fontFamily: 'inherit',
  };
  const labelStyle: React.CSSProperties = { fontWeight: 600, fontSize: 14, color: '#1B2A4A' };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'grid', gap: 16 }}>
      <label style={{ display: 'grid', gap: 6 }}>
        <span style={labelStyle}>What are you interested in?</span>
        <select
          required
          value={data.product}
          onChange={(e) =>
            setData({ ...data, product: e.target.value as ContactProduct })
          }
          style={fieldStyle}
        >
          <option value="">Select a topic…</option>
          {PRODUCT_OPTIONS.map((p) => (
            <option key={p.value} value={p.value}>
              {p.label}
            </option>
          ))}
        </select>
      </label>

      <label style={{ display: 'grid', gap: 6 }}>
        <span style={labelStyle}>Your name</span>
        <input
          required
          type="text"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
          style={fieldStyle}
        />
      </label>

      <label style={{ display: 'grid', gap: 6 }}>
        <span style={labelStyle}>Email</span>
        <input
          required
          type="email"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
          style={fieldStyle}
        />
      </label>

      <label style={{ display: 'grid', gap: 6 }}>
        <span style={labelStyle}>Phone (optional)</span>
        <input
          type="tel"
          value={data.phone}
          onChange={(e) => setData({ ...data, phone: e.target.value })}
          style={fieldStyle}
        />
      </label>

      <label style={{ display: 'grid', gap: 6 }}>
        <span style={labelStyle}>Postal code (optional)</span>
        <input
          type="text"
          value={data.postalCode}
          onChange={(e) => setData({ ...data, postalCode: e.target.value })}
          style={fieldStyle}
        />
      </label>

      <label style={{ display: 'grid', gap: 6 }}>
        <span style={labelStyle}>Tell us more (optional)</span>
        <textarea
          rows={4}
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          style={{ ...fieldStyle, resize: 'vertical' }}
        />
      </label>

      <div
        style={{
          background: '#f5f7fa',
          border: '1px solid #d8dee8',
          borderRadius: 8,
          padding: 16,
        }}
      >
        <label
          style={{ display: 'flex', gap: 12, alignItems: 'flex-start', cursor: 'pointer' }}
        >
          <input
            type="checkbox"
            required
            checked={data.consent}
            onChange={(e) => setData({ ...data, consent: e.target.checked })}
            style={{ marginTop: 4, flexShrink: 0 }}
          />
          <span style={{ fontSize: 13, lineHeight: 1.5, color: '#374151' }}>
            I consent to TopRates.ca (operated by <WebhubLink />) collecting my information to
            respond to my inquiry. For insurance inquiries, my information may be shared with{' '}
            <strong>KLC Group Canada Inc.</strong>, a licensed insurance advisory firm. See{' '}
            <Link
              href="/privacy"
              style={{ color: '#0A7E8C', textDecoration: 'underline' }}
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>
      </div>

      {error && (
        <div
          style={{
            padding: 12,
            background: '#FEE',
            border: '1px solid #B00020',
            borderRadius: 6,
            color: '#7A0014',
            fontSize: 14,
          }}
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={submitting || !data.consent || !data.product}
        style={{
          padding: '14px 24px',
          background: '#0A7E8C',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          fontWeight: 700,
          fontSize: 15,
          cursor: submitting || !data.consent || !data.product ? 'not-allowed' : 'pointer',
          opacity: submitting || !data.consent || !data.product ? 0.6 : 1,
          fontFamily: 'inherit',
        }}
      >
        {submitting ? 'Submitting…' : 'Send inquiry'}
      </button>
    </form>
  );
}
