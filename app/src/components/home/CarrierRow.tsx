'use client';

import { colors, fonts } from '@/styles/homeTokens';

type Carrier = { name: string; tone: string };

// Each carrier gets a brand-adjacent tone for its monogram.
// Real SVG logos can replace these later.
const CARRIERS: Carrier[] = [
  { name: 'INTACT', tone: '#E2231A' },
  { name: 'WAWANESA', tone: '#1F4E8C' },
  { name: 'AVIVA', tone: '#FFD500' },
  { name: 'ECONOMICAL', tone: '#0066B3' },
  { name: 'BELAIRDIRECT', tone: '#FFB81C' },
  { name: 'DESJARDINS', tone: '#00874E' },
  { name: 'TRAVELERS', tone: '#E4002B' },
  { name: 'ALLSTATE', tone: '#0072CE' },
  { name: 'CAA', tone: '#003478' },
  { name: 'GORE MUTUAL', tone: '#0A7E8C' },
  { name: 'PEMBRIDGE', tone: '#5A2D82' },
  { name: 'COACHMAN', tone: '#1B2A4A' },
];

function CarrierBadge({ carrier }: { carrier: Carrier }) {
  // Pick contrasting text color for the monogram circle
  const textColor =
    carrier.tone === '#FFD500' || carrier.tone === '#FFB81C' ? colors.navy : '#fff';

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: 12,
        padding: '10px 22px 10px 12px',
        borderRadius: 14,
        background: '#fff',
        border: `1px solid ${colors.border}`,
        boxShadow: '0 1px 3px rgba(27,42,74,0.04)',
        flexShrink: 0,
        transition: 'all 0.2s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-2px)';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(27,42,74,0.08)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(27,42,74,0.04)';
      }}
    >
      <div
        style={{
          width: 36,
          height: 36,
          borderRadius: 10,
          background: carrier.tone,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
        }}
      >
        <span
          style={{
            fontFamily: fonts.heading,
            fontWeight: 900,
            fontSize: 16,
            color: textColor,
            letterSpacing: '-0.5px',
          }}
        >
          {carrier.name.charAt(0)}
        </span>
      </div>
      <span
        style={{
          fontFamily: fonts.heading,
          fontWeight: 800,
          fontSize: 14,
          color: colors.navy,
          letterSpacing: 0.6,
          whiteSpace: 'nowrap',
        }}
      >
        {carrier.name}
      </span>
    </div>
  );
}

export default function CarrierRow() {
  // Duplicate list for seamless infinite scroll
  const loop = [...CARRIERS, ...CARRIERS];

  return (
    <section
      style={{
        background: colors.paper,
        padding: '56px 0',
        borderBottom: `1px solid ${colors.borderFaint}`,
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
        <div
          style={{
            fontFamily: fonts.mono,
            fontSize: 13,
            letterSpacing: 2,
            color: colors.muted,
            fontWeight: 700,
            textTransform: 'uppercase',
            textAlign: 'center',
            marginBottom: 32,
          }}
        >
          Carriers in our reviews
        </div>
      </div>

      <div
        style={{
          position: 'relative',
          width: '100%',
          overflow: 'hidden',
          maskImage:
            'linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)',
          WebkitMaskImage:
            'linear-gradient(90deg, transparent 0, #000 8%, #000 92%, transparent 100%)',
        }}
      >
        <div className="carrier-row-track">
          {loop.map((c, i) => (
            <CarrierBadge key={`${c.name}-${i}`} carrier={c} />
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '24px 32px 0', textAlign: 'center' }}>
        <span
          style={{
            fontFamily: fonts.mono,
            fontSize: 12,
            color: colors.teal,
            fontWeight: 700,
            letterSpacing: 1,
          }}
        >
          + 18 MORE
        </span>
      </div>
    </section>
  );
}
