'use client';

import Link from 'next/link';
import { colors, fonts } from '@/styles/editorialTokens';
import { Pill, Eyebrow } from './Pill';
import { ArrowRight, Book, Car, HomeIcon, Apartment, Briefcase, HelpCircle } from './icons';

const CARDS = [
  {
    pill: 'Auto',
    title: 'How car insurance premiums are actually priced in Ontario',
    body: 'Postal code, vehicle, history — what really moves your rate.',
    href: '/auto-insurance',
    bg: 'linear-gradient(135deg,#E8EDF4,#D6E0EE)',
    Icon: Car,
  },
  {
    pill: 'Home',
    title: 'Home insurance after a flood: a claims walkthrough',
    body: "What's covered, what isn't, and how to file without stress.",
    href: '/home-insurance',
    bg: 'linear-gradient(135deg,#EDEAE0,#E2DCC9)',
    Icon: HomeIcon,
  },
  {
    pill: 'Tenant',
    title: 'Tenant insurance in Canada: what every renter should know',
    body: 'Why landlords ask for it and what $20/month really buys.',
    href: '/tenant-insurance',
    bg: 'linear-gradient(135deg,#E6EFEA,#D4E6DC)',
    Icon: Apartment,
  },
  {
    pill: 'Business',
    title: 'Small-business insurance: liability & property basics',
    body: 'The coverages most Canadian small businesses actually need.',
    href: '/business-insurance',
    bg: 'linear-gradient(135deg,#EAE7F0,#DCD6E8)',
    Icon: Briefcase,
  },
];

export default function LearnModule() {
  return (
    <section id="learn" style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 680, marginBottom: 48 }}>
          <Pill tone="learn" icon={<Book size={14} color="currentColor" />}>
            Learn — educational content
          </Pill>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 600,
              fontSize: 'clamp(30px, 3.6vw, 42px)',
              margin: '14px 0',
              color: colors.navy,
              letterSpacing: '-0.01em',
              lineHeight: 1.1,
            }}
          >
            Shop auto &amp; home insurance like a pro
          </h2>
          <p style={{ fontFamily: fonts.body, fontSize: 18, color: colors.muted, lineHeight: 1.6 }}>
            We don&rsquo;t broker property &amp; casualty insurance — so these guides have no agenda.
            Just clear answers, written for Canadians.
          </p>
        </div>

        <div className="ed-learn-grid">
          {CARDS.map((c) => (
            <Link
              key={c.title}
              href={c.href}
              className="ed-learn-card"
              style={{
                background: '#fff',
                border: `1px solid ${colors.border}`,
                borderRadius: 16,
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                transition: 'transform .2s, box-shadow .2s',
              }}
            >
              <div
                style={{
                  height: 120,
                  background: c.bg,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <c.Icon size={42} color={colors.navyMid} sw={1.6} style={{ opacity: 0.55 }} />
              </div>
              <div style={{ padding: 20, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Pill tone="learn">{c.pill}</Pill>
                <h4
                  style={{
                    fontFamily: fonts.heading,
                    fontSize: 17,
                    margin: '12px 0 8px',
                    lineHeight: 1.25,
                    color: colors.navy,
                    fontWeight: 600,
                  }}
                >
                  {c.title}
                </h4>
                <p
                  style={{
                    fontFamily: fonts.body,
                    fontSize: 14,
                    color: colors.muted,
                    marginBottom: 16,
                    flex: 1,
                    lineHeight: 1.55,
                  }}
                >
                  {c.body}
                </p>
                <span
                  style={{
                    fontFamily: fonts.body,
                    fontSize: 14,
                    fontWeight: 700,
                    color: colors.navyMid,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  Read the guide
                  <ArrowRight size={15} color={colors.navyMid} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div
          style={{
            marginTop: 30,
            padding: '18px 22px',
            background: colors.cream,
            borderRadius: 12,
            fontFamily: fonts.body,
            fontSize: 14.5,
            color: '#4B5563',
            display: 'flex',
            gap: 12,
            alignItems: 'flex-start',
            lineHeight: 1.6,
          }}
        >
          <HelpCircle size={20} color={colors.muted} sw={2} style={{ flexShrink: 0, marginTop: 2 }} />
          <span>
            <strong style={{ color: colors.navy }}>Looking to buy auto or home coverage today?</strong>{' '}
            We don&rsquo;t broker property &amp; casualty insurance (we plan to once licensed in 2027).
            For now, we&rsquo;d genuinely suggest getting quotes from at least three RIBO-licensed
            Ontario brokers and comparing them with what you learn here.
          </span>
        </div>
      </div>
    </section>
  );
}

// Eyebrow is imported above; remove unused import warning
void Eyebrow;
