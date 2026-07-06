'use client';

import { useEffect, useState } from 'react';
import { colors, fonts } from '@/styles/homeTokens';

type Save = {
  name: string;
  loc: string;
  amount: string;
  when: string;
  prod: string;
};

const SAVES: Save[] = [
  { name: 'Priya K.',    loc: 'Brampton',    amount: '$1,842', when: 'just now',   prod: 'auto' },
  { name: 'Marcus T.',   loc: 'Ottawa',      amount: '$782',   when: '1 min ago',  prod: 'bundle' },
  { name: 'Sarah L.',    loc: 'Toronto',     amount: '$1,450', when: '2 min ago',  prod: 'auto' },
  { name: 'David W.',    loc: 'Mississauga', amount: '$2,140', when: '3 min ago',  prod: 'auto' },
  { name: 'Jennifer R.', loc: 'Vaughan',     amount: '$340',   when: '4 min ago',  prod: 'home' },
  { name: 'Ahmed S.',    loc: 'Scarborough', amount: '$880',   when: '5 min ago',  prod: 'auto' },
  { name: 'Lisa M.',     loc: 'Kitchener',   amount: '$612',   when: '6 min ago',  prod: 'auto' },
  { name: 'Tom B.',      loc: 'Hamilton',    amount: '$456',   when: '7 min ago',  prod: 'home' },
];

export default function LiveSavesFeed() {
  const [idx, setIdx] = useState(0);
  const [open, setOpen] = useState(true);
  const [closed, setClosed] = useState(false);

  useEffect(() => {
    if (closed) return;
    const id = setInterval(() => setIdx((i) => (i + 1) % SAVES.length), 4200);
    return () => clearInterval(id);
  }, [closed]);

  if (closed) return null;
  const s = SAVES[idx];

  return (
    <div
      style={{
        position: 'fixed',
        left: 20,
        bottom: 20,
        zIndex: 100,
        maxWidth: 340,
      }}
    >
      {open ? (
        <div
          style={{
            background: '#fff',
            borderRadius: 14,
            border: `1.5px solid ${colors.red}`,
            boxShadow: '0 20px 40px -15px rgba(27,42,74,0.25)',
            overflow: 'hidden',
          }}
        >
          {/* Pre-launch banner — replaces "LIVE SAVINGS" until real */}
          <div
            style={{
              background: colors.red,
              color: '#fff',
              padding: '4px 12px',
              fontFamily: fonts.sans,
              fontSize: 9,
              fontWeight: 800,
              letterSpacing: 1.2,
              textTransform: 'uppercase',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <span>Pre-launch preview · sample data</span>
            <div style={{ display: 'flex', gap: 4 }}>
              <button
                onClick={() => setOpen(false)}
                title="Minimize"
                aria-label="Minimize"
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 4,
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  color: '#fff',
                  fontSize: 14,
                  lineHeight: 1,
                  padding: 0,
                }}
              >
                –
              </button>
              <button
                onClick={() => setClosed(true)}
                title="Dismiss"
                aria-label="Dismiss"
                style={{
                  width: 18,
                  height: 18,
                  borderRadius: 4,
                  border: 'none',
                  background: 'transparent',
                  cursor: 'pointer',
                  color: '#fff',
                  fontSize: 13,
                  lineHeight: 1,
                  padding: 0,
                }}
              >
                ×
              </button>
            </div>
          </div>

          <div
            style={{
              padding: '14px 16px',
              display: 'flex',
              gap: 12,
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: 44,
                height: 44,
                borderRadius: '50%',
                background: colors.teal,
                color: '#fff',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontFamily: fonts.heading,
                fontWeight: 900,
                fontSize: 16,
                letterSpacing: '-0.5px',
              }}
            >
              {s.name
                .split(' ')
                .map((n) => n[0])
                .join('')}
            </div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div
                style={{
                  fontFamily: fonts.heading,
                  fontSize: 12,
                  color: colors.navy,
                  lineHeight: 1.4,
                }}
              >
                <strong style={{ fontWeight: 800 }}>{s.name}</strong> in{' '}
                <span style={{ color: colors.muted }}>{s.loc}</span>{' '}
                <em style={{ color: colors.red, fontStyle: 'normal', fontSize: 10 }}>(sample)</em>{' '}
                saved
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 2 }}>
                <span
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 900,
                    fontSize: 18,
                    color: colors.green,
                    letterSpacing: '-0.5px',
                  }}
                >
                  {s.amount}/yr
                </span>
                <span
                  style={{
                    fontFamily: fonts.sans,
                    fontSize: 9,
                    color: colors.muted,
                    letterSpacing: 0.5,
                  }}
                >
                  · {s.prod.toUpperCase()} · {s.when}
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setOpen(true)}
          style={{
            background: '#fff',
            borderRadius: 999,
            border: `1.5px solid ${colors.red}`,
            padding: '8px 14px 8px 12px',
            boxShadow: '0 10px 25px -10px rgba(27,42,74,0.2)',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: 8,
            fontFamily: fonts.sans,
            fontSize: 10,
            fontWeight: 800,
            letterSpacing: 1.2,
            color: colors.red,
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: colors.red,
            }}
          />
          PREVIEW · SAMPLE DATA
        </button>
      )}
    </div>
  );
}
