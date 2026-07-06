import Link from 'next/link';
import { Icon, type IconName } from '../brand/Icon';
import { colors, fonts } from '@/styles/homeTokens';

const STEPS: { n: string; icon: IconName; title: string; desc: string; time: string }[] = [
  {
    n: '01',
    icon: 'search',
    title: 'Read the guide',
    desc: 'Plain-English coverage breakdowns across auto, home, life, business, travel, and mortgage. Updated as Canadian regulations change.',
    time: 'Free to read',
  },
  {
    n: '02',
    icon: 'shield',
    title: 'Get a licensed referral (life only)',
    desc: 'Life insurance content is reviewed by LLQP-licensed advisors at KLC Group Canada Inc. Visit /life-insurance to be matched with a licensed advisor.',
    time: '1 business day',
  },
  {
    n: '03',
    icon: 'bell',
    title: 'Join the launch list',
    desc: 'Quote comparison and brokerage services are planned, once KLC Group Canada Inc. completes RIBO registration. Sign up and we will email you the day carriers turn on — no spam in between.',
    time: 'At launch',
  },
];

export default function HowItWorks() {
  return (
    <section style={{ padding: '96px 0', background: colors.paper }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 60 }}>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 11,
              letterSpacing: 2,
              color: colors.teal,
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            How it works
          </div>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 900,
              fontSize: 42,
              color: colors.navy,
              margin: '0 0 14px',
              letterSpacing: '-1.3px',
            }}
          >
            Independent Canadian insurance education.
          </h2>
          <p
            style={{
              fontFamily: fonts.heading,
              fontSize: 17,
              color: colors.muted,
              maxWidth: 600,
              margin: '0 auto',
              lineHeight: 1.55,
            }}
          >
            Plain-English Canadian insurance and mortgage education today. Quote comparison and
            brokerage launch is planned, once KLC Group Canada Inc. completes RIBO registration.
          </p>
        </div>

        <div
          className="hiw-grid-v2"
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: 16,
            position: 'relative',
          }}
        >
          {STEPS.map((s) => (
            <div
              key={s.n}
              style={{
                background: colors.cream,
                borderRadius: 18,
                border: `1px solid ${colors.borderSoft}`,
                padding: '28px 26px',
                position: 'relative',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 22,
                }}
              >
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: 14,
                    background: colors.teal,
                    color: '#fff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Icon name={s.icon} size={22} color="#fff" />
                </div>
                <div
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 900,
                    fontSize: 56,
                    color: `${colors.teal}22`,
                    letterSpacing: '-2px',
                    lineHeight: 1,
                  }}
                >
                  {s.n}
                </div>
              </div>

              <h3
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 900,
                  fontSize: 20,
                  color: colors.navy,
                  margin: '0 0 10px',
                  letterSpacing: '-0.5px',
                  lineHeight: 1.2,
                }}
              >
                {s.title}
              </h3>
              <p
                style={{
                  fontFamily: fonts.heading,
                  fontSize: 14,
                  color: colors.muted,
                  lineHeight: 1.55,
                  margin: '0 0 18px',
                }}
              >
                {s.desc}
              </p>

              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  fontFamily: fonts.mono,
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: 1,
                  color: colors.gold,
                  background: 'rgba(184,150,12,0.12)',
                  padding: '4px 10px',
                  borderRadius: 999,
                }}
              >
                <Icon name="clock" size={11} color={colors.gold} />
                {s.time.toUpperCase()}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: 'center', marginTop: 44 }}>
          <Link
            href="/learn"
            className="cta-btn"
            style={{
              background: colors.teal,
              color: '#fff',
              borderRadius: 999,
              padding: '14px 26px',
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 15,
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              textDecoration: 'none',
            }}
          >
            Browse the education library <Icon name="arrowRight" size={18} color="#F2B441" />
          </Link>
        </div>
      </div>
    </section>
  );
}
