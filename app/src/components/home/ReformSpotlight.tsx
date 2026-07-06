import { Icon } from '../brand/Icon';
import { colors, fonts } from '@/styles/homeTokens';

const COVERAGE: { t: string; d: string }[] = [
  { t: 'Income replacement', d: 'Optional — $400/wk default only' },
  { t: 'Caregiver benefit', d: 'Optional add-on' },
  { t: 'Non-earner benefit', d: 'Being eliminated' },
  { t: 'Medical & rehab', d: 'Reduced default limits' },
];

export default function ReformSpotlight() {
  return (
    <section
      style={{
        padding: '96px 0',
        background: colors.cream,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 400,
          height: '100%',
          background:
            'radial-gradient(circle at top right, rgba(184,150,12,0.08) 0%, transparent 60%)',
        }}
      />
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        <div
          className="rs-grid-v2"
          style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'flex-start' }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                background: 'rgba(184,150,12,0.12)',
                border: '1px solid rgba(184,150,12,0.35)',
                borderRadius: 999,
                padding: '6px 14px',
                marginBottom: 24,
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: colors.gold }} />
              <span
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: 1.5,
                  color: colors.gold,
                  textTransform: 'uppercase',
                }}
              >
                Ontario · effective July 1, 2026
              </span>
            </div>
            <h2
              style={{
                fontFamily: fonts.heading,
                fontWeight: 900,
                fontSize: 44,
                color: colors.navy,
                letterSpacing: '-1.4px',
                lineHeight: 1.05,
                margin: '0 0 20px',
              }}
            >
              Ontario auto insurance
              <br />
              <span style={{ color: colors.teal }}>is about to change.</span>
            </h2>
            <p
              style={{
                fontFamily: fonts.heading,
                fontSize: 17,
                color: colors.muted,
                lineHeight: 1.6,
                margin: '0 0 28px',
                maxWidth: 520,
              }}
            >
              Starting July 1, 2026, most accident benefits become{' '}
              <strong style={{ color: colors.navy }}>optional</strong>. You decide what to keep — which
              means lower premiums, but also bigger gaps if you pick wrong.
            </p>
            <div
              className="rs-coverage-grid-v2"
              style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginBottom: 32 }}
            >
              {COVERAGE.map((c) => (
                <div
                  key={c.t}
                  style={{
                    background: colors.paper,
                    borderRadius: 12,
                    border: `1px solid ${colors.borderSoft}`,
                    padding: '14px 16px',
                    borderLeft: `3px solid ${colors.gold}`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: fonts.heading,
                      fontWeight: 800,
                      fontSize: 14,
                      color: colors.navy,
                      marginBottom: 4,
                    }}
                  >
                    {c.t}
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 10,
                      color: colors.muted,
                      letterSpacing: 0.3,
                    }}
                  >
                    {c.d}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button
                className="cta-btn"
                style={{
                  background: colors.teal,
                  color: '#fff',
                  border: 'none',
                  borderRadius: 999,
                  padding: '11px 20px',
                  fontFamily: fonts.heading,
                  fontWeight: 800,
                  fontSize: 13,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                Read the 2026 guide <Icon name="arrowRight" size={17} color="#F2B441" />
              </button>
              <button
                className="cta-btn"
                style={{
                  background: colors.teal,
                  color: '#fff',
                  border: 'none',
                  borderRadius: 999,
                  padding: '11px 20px',
                  fontFamily: fonts.heading,
                  fontWeight: 800,
                  fontSize: 13,
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 8,
                }}
              >
                Take self-assessment <Icon name="arrowRight" size={17} color="#F2B441" />
              </button>
            </div>
          </div>

          <div>
            <div
              style={{
                background: colors.paper,
                borderRadius: 18,
                border: `1px solid ${colors.borderSoft}`,
                padding: 28,
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 30px 60px -30px rgba(27,42,74,0.14)',
              }}
            >
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  letterSpacing: 2,
                  color: colors.muted,
                  fontWeight: 700,
                  marginBottom: 22,
                  textTransform: 'uppercase',
                }}
              >
                SAMPLE DRIVER · 35 YO, MISSISSAUGA, CLEAN RECORD
              </div>

              <div
                className="rs-beforeafter-v2"
                style={{ display: 'flex', gap: 14, marginBottom: 20 }}
              >
                <div
                  style={{
                    flex: 1,
                    padding: '20px 18px',
                    background: '#f4e8da',
                    borderRadius: 12,
                    border: '1px solid rgba(184,150,12,0.3)',
                  }}
                >
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 9,
                      fontWeight: 800,
                      color: colors.gold,
                      letterSpacing: 1.5,
                      marginBottom: 6,
                    }}
                  >
                    BEFORE · current
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.heading,
                      fontWeight: 900,
                      fontSize: 28,
                      color: colors.navy,
                      letterSpacing: '-1px',
                    }}
                  >
                    $2,450
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.heading,
                      fontSize: 11,
                      color: colors.muted,
                      marginTop: 2,
                    }}
                  >
                    /year · mandatory benefits
                  </div>
                </div>
                <div
                  style={{
                    flex: 1,
                    padding: '20px 18px',
                    background:
                      'linear-gradient(135deg, rgba(10,126,140,0.08), rgba(15,189,201,0.12))',
                    borderRadius: 12,
                    border: `1px solid ${colors.teal}40`,
                  }}
                >
                  <div
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 9,
                      fontWeight: 800,
                      color: colors.teal,
                      letterSpacing: 1.5,
                      marginBottom: 6,
                    }}
                  >
                    AFTER · optimized
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.heading,
                      fontWeight: 900,
                      fontSize: 28,
                      color: colors.teal,
                      letterSpacing: '-1px',
                    }}
                  >
                    $1,838
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.heading,
                      fontSize: 11,
                      color: colors.muted,
                      marginTop: 2,
                    }}
                  >
                    /year · smart coverage
                  </div>
                </div>
              </div>

              <div
                style={{
                  background: 'rgba(13,128,80,0.08)',
                  borderRadius: 10,
                  padding: '12px 16px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: 20,
                }}
              >
                <span
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 800,
                    fontSize: 13,
                    color: colors.green,
                  }}
                >
                  Potential savings
                </span>
                <span
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 900,
                    fontSize: 18,
                    color: colors.green,
                    letterSpacing: '-0.5px',
                  }}
                >
                  Up to ~25%
                </span>
              </div>

              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 10,
                  color: colors.muted,
                  letterSpacing: 0.3,
                  lineHeight: 1.7,
                }}
              >
                <div>• Kept: Third-party liability, DCPD, uninsured motorist</div>
                <div>• Kept: Medical/rehab at $65k default</div>
                <div>• Dropped: Income replacement above $400/wk</div>
                <div>• Dropped: Caregiver, housekeeping add-ons</div>
              </div>

              <div
                style={{
                  marginTop: 20,
                  padding: '14px 16px',
                  background: colors.cream,
                  borderRadius: 10,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 10,
                  fontFamily: fonts.heading,
                  fontSize: 12,
                  color: colors.muted,
                  lineHeight: 1.5,
                }}
              >
                <Icon name="sparkle" size={14} color={colors.teal} />
                <span>
                  Illustrative — your savings depend on driving record, vehicle, and which benefits
                  make sense for your situation.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
