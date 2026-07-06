import { Icon, type IconName } from '../brand/Icon';
import { colors, fonts } from '@/styles/homeTokens';

const STATS: { n: string; l: string; icon: IconName }[] = [
  { n: '12+', l: 'Guides published', icon: 'chart' },
  { n: 'LLQP-licensed', l: 'Life insurance advisory via KLC Group', icon: 'shield' },
  { n: 'FSRA', l: 'Regulated partnership framework', icon: 'check' },
  { n: 'Independent', l: 'Editorial standards', icon: 'lock' },
];

export default function StatsBand() {
  return (
    <section
      style={{
        background: 'linear-gradient(135deg, #086874 0%, #0A7E8C 50%, #0d9aa8 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.08,
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
        <div className="stats-grid-v2">
          {STATS.map((s, i) => (
            <div
              key={s.l}
              style={{
                textAlign: 'center',
                padding: '52px 20px',
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.12)' : 'none',
              }}
            >
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: 'rgba(255,255,255,0.14)',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 16,
                }}
              >
                <Icon name={s.icon} size={22} color={colors.gold} />
              </div>
              <div
                className="stats-num"
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 900,
                  fontSize: 44,
                  color: '#fff',
                  letterSpacing: '-1.4px',
                  lineHeight: 1,
                }}
              >
                {s.n}
              </div>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  letterSpacing: 1.5,
                  color: 'rgba(255,255,255,0.7)',
                  textTransform: 'uppercase',
                  fontWeight: 600,
                  marginTop: 10,
                }}
              >
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
