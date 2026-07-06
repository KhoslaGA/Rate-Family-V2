'use client';

import { colors, fonts } from '@/styles/homeTokens';

type Tick = { label: string; value: string; delta: string; tone: 'down' | 'up' | 'flat' };

const TICKS: Tick[] = [
  { label: '5-YR FIXED MORTGAGE', value: '4.79%', delta: '−0.12', tone: 'down' },
  { label: '3-YR FIXED MORTGAGE', value: '5.04%', delta: '−0.08', tone: 'down' },
  { label: 'VARIABLE PRIME',      value: '6.45%', delta: '±0.00', tone: 'flat' },
  { label: 'ON AUTO AVG',         value: '$1,838', delta: '−$612', tone: 'down' },
  { label: 'ON HOME AVG',         value: '$1,412', delta: '−$324', tone: 'down' },
  { label: 'CASH BACK CARDS',     value: 'up to 5%', delta: '+0.5', tone: 'up' },
  { label: '1-YR GIC',            value: '4.25%', delta: '−0.10', tone: 'down' },
];

export default function RateTicker() {
  const loop = [...TICKS, ...TICKS];
  const upColor = '#f59e0b';
  const downColor = '#4ade80';
  const flatColor = 'rgba(246,239,224,0.4)';

  return (
    <div
      style={{
        background: colors.navy,
        borderTop: `1px solid rgba(180,83,9,0.2)`,
        borderBottom: '1px solid rgba(255,255,255,0.08)',
        padding: '10px 0',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div style={{ position: 'relative', display: 'flex' }}>
        {/* Pin */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 3,
            background: colors.navy,
            padding: '6px 16px 6px 24px',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            borderRight: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: colors.amber,
              boxShadow: '0 0 0 3px rgba(180,83,9,0.3)',
            }}
          />
          <span
            style={{
              fontFamily: fonts.sans,
              fontSize: 10,
              fontWeight: 800,
              letterSpacing: 1.8,
              color: colors.amber,
            }}
          >
            ILLUSTRATIVE RATES
          </span>
        </div>

        {/* Scrolling track */}
        <div
          className="rate-ticker-track"
          style={{
            flex: 1,
            paddingLeft: 200,
            display: 'flex',
            gap: 40,
            whiteSpace: 'nowrap',
          }}
        >
          {loop.map((t, i) => (
            <span
              key={i}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                fontFamily: fonts.sans,
                fontSize: 11,
              }}
            >
              <span style={{ color: 'rgba(246,239,224,0.45)', letterSpacing: 1.2, fontWeight: 600 }}>
                {t.label}
              </span>
              <span style={{ color: '#fff', fontWeight: 800, fontSize: 12, letterSpacing: '-0.2px' }}>
                {t.value}
              </span>
              <span
                style={{
                  color: t.tone === 'flat' ? flatColor : t.tone === 'down' ? downColor : upColor,
                  fontWeight: 700,
                  letterSpacing: 0.2,
                }}
              >
                {t.tone === 'flat' ? '−' : t.tone === 'down' ? '▼' : '▲'} {t.delta}
              </span>
            </span>
          ))}
        </div>

        {/* Right fade */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: 0,
            top: 0,
            bottom: 0,
            width: 80,
            background: `linear-gradient(270deg, ${colors.navy}, transparent)`,
            zIndex: 2,
            pointerEvents: 'none',
          }}
        />
      </div>
    </div>
  );
}
