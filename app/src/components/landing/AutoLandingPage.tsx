import Link from 'next/link';
import { Icon } from '../brand/Icon';
import { colors, fonts } from '@/styles/tokens';
import type { LandingData } from '@/data/landingPages';

const TYPE_LABEL: Record<LandingData['type'], string> = {
  province: 'PROVINCE',
  city: 'CITY',
  driver: 'DRIVER PROFILE',
};

export default function AutoLandingPage({ data }: { data: LandingData }) {
  return (
    <>
      {/* HERO */}
      <section
        style={{
          background:
            'linear-gradient(160deg, #1B2A4A 0%, #0f1e38 40%, #132340 70%, #1B2A4A 100%)',
          padding: '88px 0 96px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            inset: 0,
            opacity: 0.05,
            backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
            backgroundSize: '32px 32px',
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: -100,
            right: -120,
            width: 520,
            height: 520,
            borderRadius: '50%',
            background:
              'radial-gradient(circle, rgba(10,126,140,0.2) 0%, transparent 70%)',
          }}
        />

        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            padding: '0 32px',
            position: 'relative',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              fontFamily: fonts.mono,
              fontSize: 11,
              color: 'rgba(246,239,224,0.5)',
              letterSpacing: 1,
              marginBottom: 18,
            }}
          >
            <Link href="/" style={{ color: 'rgba(246,239,224,0.5)', textDecoration: 'none' }}>
              Home
            </Link>
            <span>/</span>
            <Link
              href="/auto-insurance"
              style={{ color: 'rgba(246,239,224,0.5)', textDecoration: 'none' }}
            >
              Car Insurance
            </Link>
            <span>/</span>
            <span style={{ color: colors.gold }}>{TYPE_LABEL[data.type]}</span>
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              background: 'rgba(184,150,12,0.15)',
              border: '1px solid rgba(184,150,12,0.35)',
              borderRadius: 999,
              padding: '6px 14px',
              marginBottom: 22,
              fontFamily: fonts.mono,
              fontSize: 10,
              letterSpacing: 1.5,
              fontWeight: 700,
              color: colors.gold,
              textTransform: 'uppercase',
            }}
          >
            <span
              style={{
                width: 6,
                height: 6,
                borderRadius: '50%',
                background: colors.gold,
              }}
            />
            {data.eyebrow}
          </div>

          <h1
            style={{
              fontFamily: fonts.heading,
              fontWeight: 900,
              fontSize: 56,
              letterSpacing: '-2px',
              lineHeight: 1.05,
              color: '#fff',
              margin: 0,
              maxWidth: 820,
            }}
          >
            {data.h1}
          </h1>
          <p
            style={{
              fontFamily: fonts.heading,
              fontSize: 18,
              color: 'rgba(246,239,224,0.7)',
              maxWidth: 680,
              margin: '24px 0 36px',
              lineHeight: 1.55,
            }}
          >
            {data.subhead}
          </p>

          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <Link
              href="/contact"
              className="cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 26px',
                borderRadius: 999,
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 15,
                letterSpacing: '-0.2px',
                background: colors.teal,
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              Talk to us <Icon name="arrowRight" size={18} color="#F2B441" />
            </Link>
            <Link
              href="/whats-coming"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 22px',
                borderRadius: 999,
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 14,
                background: 'transparent',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.2)',
                textDecoration: 'none',
              }}
            >
              <Icon name="sparkle" size={14} color="#fff" /> What&rsquo;s coming
            </Link>
          </div>
        </div>
      </section>

      {/* QUICK STATS BAND */}
      <section
        style={{
          background: 'linear-gradient(135deg, #086874 0%, #0A7E8C 50%, #0d9aa8 100%)',
          position: 'relative',
        }}
      >
        <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr 1fr 1fr',
              gap: 0,
            }}
          >
            <div
              style={{
                padding: '40px 32px',
                borderRight: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  letterSpacing: 1.5,
                  color: 'rgba(255,255,255,0.7)',
                  textTransform: 'uppercase',
                  fontWeight: 700,
                  marginBottom: 8,
                }}
              >
                {data.primaryStat.label}
              </div>
              <div
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 900,
                  fontSize: 56,
                  color: '#fff',
                  letterSpacing: '-2px',
                  lineHeight: 1,
                }}
              >
                {data.primaryStat.value}
              </div>
              {data.primaryStat.hint && (
                <div
                  style={{
                    fontFamily: fonts.heading,
                    fontSize: 13,
                    color: 'rgba(255,255,255,0.6)',
                    marginTop: 8,
                  }}
                >
                  {data.primaryStat.hint}
                </div>
              )}
            </div>
            {data.secondaryStats.map((s, i) => (
              <div
                key={s.label}
                style={{
                  padding: '40px 28px',
                  borderRight:
                    i < data.secondaryStats.length - 1
                      ? '1px solid rgba(255,255,255,0.12)'
                      : 'none',
                }}
              >
                <div
                  style={{
                    fontFamily: fonts.mono,
                    fontSize: 10,
                    letterSpacing: 1.5,
                    color: 'rgba(255,255,255,0.6)',
                    textTransform: 'uppercase',
                    fontWeight: 600,
                    marginBottom: 6,
                  }}
                >
                  {s.label}
                </div>
                <div
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 900,
                    fontSize: 28,
                    color: '#fff',
                    letterSpacing: '-0.8px',
                    lineHeight: 1,
                  }}
                >
                  {s.value}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BODY */}
      <section style={{ padding: '88px 0', background: colors.paper }}>
        <div
          style={{
            maxWidth: 760,
            margin: '0 auto',
            padding: '0 32px',
          }}
        >
          <p
            style={{
              fontFamily: fonts.heading,
              fontSize: 19,
              color: colors.navy,
              lineHeight: 1.65,
              margin: '0 0 40px',
            }}
          >
            {data.intro}
          </p>

          {data.sections.map((s) => (
            <div key={s.heading} style={{ marginBottom: 40 }}>
              <h2
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 900,
                  fontSize: 28,
                  color: colors.navy,
                  letterSpacing: '-0.8px',
                  margin: '0 0 14px',
                  lineHeight: 1.2,
                }}
              >
                {s.heading}
              </h2>
              <p
                style={{
                  fontFamily: fonts.heading,
                  fontSize: 16,
                  color: colors.muted,
                  lineHeight: 1.65,
                  margin: 0,
                }}
                dangerouslySetInnerHTML={{
                  __html: s.body.replace(
                    /\*\*(.+?)\*\*/g,
                    `<strong style="color:${colors.navy};font-weight:800;">$1</strong>`,
                  ),
                }}
              />
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section style={{ padding: '88px 0', background: colors.cream }}>
        <div style={{ maxWidth: 820, margin: '0 auto', padding: '0 32px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div
              style={{
                fontFamily: fonts.mono,
                fontSize: 11,
                letterSpacing: 2,
                color: colors.teal,
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: 12,
              }}
            >
              Frequently asked
            </div>
            <h2
              style={{
                fontFamily: fonts.heading,
                fontWeight: 900,
                fontSize: 36,
                color: colors.navy,
                letterSpacing: '-1.1px',
                margin: 0,
              }}
            >
              Questions about {data.label.toLowerCase()}
            </h2>
          </div>
          {data.faqs.map((faq) => (
            <div
              key={faq.q}
              style={{
                background: colors.paper,
                borderRadius: 14,
                border: `1px solid ${colors.borderSoft}`,
                padding: '20px 24px',
                marginBottom: 12,
              }}
            >
              <h3
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 800,
                  fontSize: 17,
                  color: colors.navy,
                  margin: '0 0 8px',
                  letterSpacing: '-0.2px',
                }}
              >
                {faq.q}
              </h3>
              <p
                style={{
                  fontFamily: fonts.heading,
                  fontSize: 15,
                  color: colors.muted,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: '64px 0',
          background:
            'linear-gradient(135deg, #1B2A4A 0%, #0f1e38 100%)',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 32px' }}>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 900,
              fontSize: 32,
              color: '#fff',
              margin: '0 0 14px',
              letterSpacing: '-1px',
            }}
          >
            Independent Canadian insurance education.
          </h2>
          <p
            style={{
              fontFamily: fonts.heading,
              fontSize: 16,
              color: 'rgba(246,239,224,0.65)',
              margin: '0 0 28px',
              lineHeight: 1.55,
            }}
          >
            Quote comparison and brokerage are planned, once KLC Group Canada Inc. completes RIBO registration alongside KLC Group Canada Inc.&rsquo;s
            RIBO registration. Get on the launch list — or talk to us today.
          </p>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', justifyContent: 'center' }}>
            <Link
              href="/contact"
              className="cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 28px',
                borderRadius: 999,
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 15,
                background: colors.teal,
                color: '#fff',
                textDecoration: 'none',
              }}
            >
              Talk to us <Icon name="arrowRight" size={18} color="#F2B441" />
            </Link>
            <Link
              href="/whats-coming"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 28px',
                borderRadius: 999,
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 15,
                background: 'transparent',
                color: '#fff',
                border: '1px solid rgba(255,255,255,0.2)',
                textDecoration: 'none',
              }}
            >
              What&rsquo;s coming
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
