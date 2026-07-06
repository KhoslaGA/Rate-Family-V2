/**
 * Contact page — ported from /design/mockups/contact.html (2026-05-11).
 *
 * Layout faithful to the mockup: cream hero, 2-col body (form 1.2fr + channels 1fr),
 * channel cards, "operating from" card, FAQ help-strip footer.
 *
 * Compliance scrubs vs. mockup:
 *   - Phone and Live-chat channels removed — both fictional in the mockup.
 *   - Toronto office address removed — fictional.
 *   - Footer entity reference updated to Webhub4u Inc.
 *   - RIBO + FSRA registration claims for the operator removed (Webhub4u is not
 *     licensed; KLC Group Canada Inc. is the licensed referral partner).
 *   - "RIBO-licensed brokers, weekdays 8am–8pm ET" hero subhead reframed to
 *     "we respond within one business day, insurance inquiries referred to KLC."
 *   - "Most questions get answered in under 6 minutes" claim removed
 *     (unsubstantiated time-to-response metric).
 */
import React from 'react';
import Link from 'next/link';
import ContactForm from '@/components/contact/ContactForm';
import { colors, fonts, layout } from '@/styles/tokens';
import { WebhubLink } from '@/components/legal/WebhubLink';

import type { Metadata } from 'next';
import { headers } from 'next/headers';
import HealthRateContact from '@/components/healthrate/pages/Contact';

const topRatesMetadata: Metadata = {
  title: 'Contact us | TopRates.ca',
  description:
    'Send TopRates.ca a question about insurance, mortgages, credit cards, or investing. Operated by Webhub4u Inc.; insurance inquiries are referred to KLC Group Canada Inc. We respond within one business day.',
  keywords:
    'contact TopRates.ca, Canadian insurance contact, Webhub4u contact, KLC Group contact, insurance inquiry, life insurance question, mortgage question',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact us | TopRates.ca',
    description:
      'Questions about insurance, mortgages, credit cards, or investing? We respond within one business day.',
    url: 'https://toprates.ca/contact',
    siteName: 'TopRates.ca',
    type: 'website',
    locale: 'en_CA',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'TopRates.ca' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact TopRates.ca',
    description: 'We respond to questions about insurance, mortgages, credit cards, and investing within one business day.',
    images: ['/og-image.png'],
  },
  robots: 'index, follow',
};

// /contact is shared; HealthRate (education-only) gets its own bespoke contact
// page on the healthrate host, TopRates page preserved byte-identical elsewhere.
export function generateMetadata(): Metadata {
  if (headers().get('x-site') === 'healthrate') {
    return {
      title: 'Contact HealthRate | HealthRate.ca',
      description:
        'Ask a question, request a language or a city guide, or report an error. HealthRate is education only — we answer questions, we never sell.',
      alternates: { canonical: '/contact' },
    };
  }
  return topRatesMetadata;
}

const serifItalic: React.CSSProperties = {
  fontFamily: fonts.serif,
  fontStyle: 'italic',
  fontWeight: 500,
  color: colors.teal,
};

const cardBase: React.CSSProperties = {
  background: '#fff',
  border: `1px solid ${colors.border}`,
  borderRadius: 14,
  padding: 20,
  display: 'flex',
  gap: 14,
  alignItems: 'flex-start',
};

const iconBubble: React.CSSProperties = {
  width: 38,
  height: 38,
  borderRadius: 10,
  background: 'rgba(10,126,140,0.08)',
  color: colors.teal,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

function MailIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
      <polyline points="22,6 12,13 2,6" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
      <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
    </svg>
  );
}

interface ChannelProps {
  icon: React.ReactNode;
  title: string;
  desc: string;
  value: string;
  href?: string;
  note?: React.ReactNode;
}

function ChannelCard({ icon, title, desc, value, href, note }: ChannelProps) {
  return (
    <div style={cardBase}>
      <div style={iconBubble}>{icon}</div>
      <div style={{ minWidth: 0 }}>
        <h4
          style={{
            fontFamily: fonts.heading,
            fontWeight: 700,
            fontSize: 14,
            color: colors.navy,
            margin: '0 0 3px',
          }}
        >
          {title}
        </h4>
        <p
          style={{
            fontSize: 12.5,
            color: colors.muted,
            margin: '0 0 6px',
            lineHeight: 1.55,
          }}
        >
          {desc}
        </p>
        {href ? (
          <a
            href={href}
            style={{
              fontFamily: fonts.heading,
              fontWeight: 700,
              fontSize: 15,
              color: colors.navy,
              textDecoration: 'none',
              wordBreak: 'break-all',
            }}
          >
            {value}
          </a>
        ) : (
          <div
            style={{
              fontFamily: fonts.heading,
              fontWeight: 700,
              fontSize: 15,
              color: colors.navy,
            }}
          >
            {value}
          </div>
        )}
        {note && (
          <div style={{ fontSize: 11, color: colors.muted, marginTop: 4 }}>{note}</div>
        )}
      </div>
    </div>
  );
}

const helpLinks: { label: string; href: string }[] = [
  { label: 'How does TopRates make money?', href: '/about' },
  { label: 'Withdraw consent / delete data', href: '/withdraw-consent' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Legal & disclosures', href: '/legal' },
  { label: 'All guides', href: '/learn' },
];

function TopRatesContactPage() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          background: colors.cream,
          padding: '56px 32px 64px',
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div style={{ maxWidth: layout.maxWidth, margin: '0 auto' }}>
          <div style={{ fontSize: 12, color: colors.muted, marginBottom: 14 }}>
            <Link href="/" style={{ color: colors.muted, textDecoration: 'none' }}>
              Home
            </Link>{' '}
            &nbsp;/&nbsp; Contact
          </div>
          <h1
            style={{
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 44,
              color: colors.navy,
              margin: '0 0 12px',
              lineHeight: 1.1,
              letterSpacing: '-0.5px',
            }}
          >
            Talk to a real <span style={serifItalic}>human.</span>
          </h1>
          <p
            style={{
              fontSize: 17,
              color: colors.muted,
              maxWidth: 620,
              lineHeight: 1.55,
              margin: 0,
            }}
          >
            Questions about Canadian insurance, mortgages, credit cards, or investing? Send us a
            quick note and we&rsquo;ll reply within one business day. Insurance inquiries are
            referred to <strong>KLC Group Canada Inc.</strong>, a licensed insurance advisory
            firm.
          </p>
        </div>
      </section>

      {/* BODY: form + channels */}
      <section
        style={{
          maxWidth: layout.maxWidth,
          margin: '0 auto',
          padding: '56px 32px',
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: 48,
          alignItems: 'start',
        }}
      >
        {/* Form card */}
        <div
          style={{
            background: '#fff',
            border: `1px solid ${colors.border}`,
            borderRadius: 16,
            padding: 32,
          }}
        >
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 700,
              fontSize: 22,
              color: colors.navy,
              margin: '0 0 6px',
            }}
          >
            Send a message
          </h2>
          <p
            style={{
              fontSize: 13.5,
              color: colors.muted,
              margin: '0 0 24px',
              lineHeight: 1.55,
            }}
          >
            We reply within one business day. Insurance inquiries are routed to KLC Group Canada
            Inc.; mortgage inquiries to an MBLAA-registered partner; everything else stays with{' '}
            <WebhubLink />.
          </p>
          <ContactForm />
        </div>

        {/* Channels + operating-from */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <ChannelCard
            icon={<MailIcon />}
            title="General inquiries"
            desc="The fastest path. We monitor this inbox 7 days a week and reply within one business day."
            value="contact@toprates.ca"
            href="mailto:contact@toprates.ca"
          />
          <ChannelCard
            icon={<ShieldIcon />}
            title="Privacy & data requests"
            desc="Access requests, corrections, deletions, or withdrawal of consent. PIPEDA response within 5 business days."
            value="privacy@toprates.ca"
            href="mailto:privacy@toprates.ca"
            note={
              <>
                Or use the{' '}
                <Link
                  href="/withdraw-consent"
                  style={{ color: colors.teal, textDecoration: 'underline' }}
                >
                  withdraw-consent form
                </Link>
                .
              </>
            }
          />
          <ChannelCard
            icon={<EditIcon />}
            title="Editorial complaints"
            desc="Corrections to articles, factual errors, or concerns about content. Reviewed within 3 business days."
            value="editorial@toprates.ca"
            href="mailto:editorial@toprates.ca"
          />

          <div
            style={{
              background: colors.surface,
              border: `1px solid ${colors.border}`,
              borderRadius: 14,
              padding: 22,
              marginTop: 4,
            }}
          >
            <h4
              style={{
                fontFamily: fonts.heading,
                fontWeight: 700,
                fontSize: 14,
                color: colors.navy,
                margin: '0 0 10px',
              }}
            >
              Operating from
            </h4>
            <p
              style={{
                fontSize: 13,
                color: colors.muted,
                lineHeight: 1.55,
                margin: '0 0 8px',
              }}
            >
              <strong style={{ color: colors.navy, display: 'block', marginBottom: 4 }}>
                <WebhubLink />
              </strong>
              Brampton, Ontario, Canada
              <br />
              Mailing address available on request via contact@toprates.ca
            </p>
            <p
              style={{
                fontSize: 12,
                color: colors.muted,
                lineHeight: 1.5,
                margin: '10px 0 0',
                paddingTop: 10,
                borderTop: `1px solid ${colors.border}`,
              }}
            >
              TopRates.ca is operated by <WebhubLink />, a Canadian technology company. <WebhubLink />{' '}
              is not a licensed insurance broker, mortgage broker, credit advisor, or investment
              advisor. See{' '}
              <Link
                href="/legal"
                style={{ color: colors.teal, textDecoration: 'underline' }}
              >
                /legal
              </Link>{' '}
              for the full disclosure.
            </p>
          </div>
        </div>
      </section>

      {/* HELP STRIP */}
      <section
        style={{
          padding: '48px 32px 64px',
          background: colors.surface,
          borderTop: `1px solid ${colors.border}`,
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: layout.maxWidth, margin: '0 auto' }}>
          <h3
            style={{
              fontFamily: fonts.heading,
              fontWeight: 700,
              fontSize: 22,
              color: colors.navy,
              margin: '0 0 8px',
            }}
          >
            Looking for a quick answer?
          </h3>
          <p
            style={{
              fontSize: 14,
              color: colors.muted,
              margin: '0 auto 22px',
              maxWidth: 520,
            }}
          >
            Most common questions are already answered on our policy and disclosure pages. Fastest
            path to your answer.
          </p>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 8,
              flexWrap: 'wrap',
            }}
          >
            {helpLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  background: '#fff',
                  border: `1px solid ${colors.border}`,
                  borderRadius: 20,
                  padding: '8px 16px',
                  fontSize: 13,
                  fontWeight: 600,
                  color: colors.navy,
                  textDecoration: 'none',
                }}
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function ContactPage() {
  if (headers().get('x-site') === 'healthrate') return <HealthRateContact />;
  return <TopRatesContactPage />;
}
