'use client';

import Link from 'next/link';
import { colors, fonts } from '@/styles/editorialTokens';
import { Eyebrow } from './Pill';
import { HelpCircle, DollarSign, CheckCircle, Shield, ArrowRight } from './icons';

const POINTS = [
  {
    Icon: HelpCircle,
    title: "We're a publisher, not a broker",
    body: 'Webhub4u Inc. operates TopRates.ca as an educational publisher and referral service. We are not a licensed insurance broker, agent, mortgage broker or investment dealer.',
  },
  {
    Icon: DollarSign,
    title: 'We earn two ways',
    body: 'A referral fee from KLC Group Canada Inc. when you book a life-insurance call, and affiliate commissions if you apply for cards, mortgages or banking through our links.',
  },
  {
    Icon: CheckCircle,
    title: 'Your price never goes up',
    body: 'What you pay is never increased by our fee. We publish first and route second — editorial picks are never pay-to-play.',
  },
  {
    Icon: Shield,
    title: 'Licensed where it counts',
    body: "All licensed insurance advice is provided by KLC Group Canada Inc., regulated by FSRA under Ontario's LLQP framework.",
  },
];

export default function HowWeMakeMoney() {
  return (
    <section id="money" style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div
          style={{
            background: colors.cream,
            borderRadius: 24,
            padding: 48,
          }}
          className="ed-money-box"
        >
          <div>
            <Eyebrow>Full transparency</Eyebrow>
            <h2
              style={{
                fontFamily: fonts.heading,
                fontWeight: 600,
                fontSize: 34,
                marginTop: 14,
                color: colors.navy,
                letterSpacing: '-0.01em',
                lineHeight: 1.15,
              }}
            >
              How TopRates.ca makes money
            </h2>
            <Link
              href="/privacy"
              style={{
                marginTop: 20,
                fontFamily: fonts.body,
                fontWeight: 700,
                color: colors.navy,
                display: 'inline-flex',
                gap: 7,
                alignItems: 'center',
                fontSize: 15,
                textDecoration: 'none',
              }}
            >
              Read the full disclosure
              <ArrowRight size={16} color={colors.navy} />
            </Link>
          </div>
          <div className="ed-money-cols">
            {POINTS.map((p) => (
              <div key={p.title}>
                <h4
                  style={{
                    fontFamily: fonts.heading,
                    fontSize: 17,
                    marginBottom: 8,
                    display: 'flex',
                    alignItems: 'center',
                    gap: 8,
                    color: colors.navy,
                    fontWeight: 600,
                  }}
                >
                  <p.Icon size={18} color={colors.accent} sw={2.2} />
                  {p.title}
                </h4>
                <p style={{ fontFamily: fonts.body, fontSize: 14.5, color: '#4B5563', lineHeight: 1.6 }}>
                  {p.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
