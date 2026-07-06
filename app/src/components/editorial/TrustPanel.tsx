'use client';

import { colors, fonts, shadows } from '@/styles/editorialTokens';
import { Eyebrow } from './Pill';
import { Sparkle, Star, Globe, Users } from './icons';

const ITEMS = [
  {
    Icon: Sparkle,
    title: 'Plain English',
    body: "No jargon, no fine-print games. If we can't explain it simply, we keep rewriting until we can.",
  },
  {
    Icon: Star,
    title: 'Independent',
    body: "We publish first and refer second. Our guides aren't pay-to-play, and we say so out loud.",
  },
  {
    Icon: Globe,
    title: 'Canadian only',
    body: 'Every rate, rule and tax detail is for Canadian residents — not US content with the spelling changed.',
  },
  {
    Icon: Users,
    title: 'A real human advisor',
    body: 'For life insurance you talk to a licensed person, never a chatbot pretending to give advice.',
  },
];

export default function TrustPanel() {
  return (
    <section id="trust" style={{ padding: '96px 0', background: colors.cream }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
        <div style={{ maxWidth: 680, margin: '0 auto 48px', textAlign: 'center' }}>
          <Eyebrow>Why Canadians trust us</Eyebrow>
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
            Straight answers, no sales theatre
          </h2>
        </div>

        <div className="ed-trust-grid">
          {ITEMS.map((it) => (
            <div key={it.title}>
              <div
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 13,
                  background: '#fff',
                  boxShadow: shadows.soft,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}
              >
                <it.Icon size={25} color={colors.accentWarm} sw={2} />
              </div>
              <h4
                style={{
                  fontFamily: fonts.heading,
                  fontSize: 18,
                  marginBottom: 8,
                  color: colors.navy,
                  fontWeight: 600,
                }}
              >
                {it.title}
              </h4>
              <p style={{ fontFamily: fonts.body, fontSize: 14.5, color: colors.muted, lineHeight: 1.6 }}>
                {it.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
