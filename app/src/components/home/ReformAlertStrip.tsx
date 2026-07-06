import Link from 'next/link';
import { Icon } from '../brand/Icon';
import { colors, fonts } from '@/styles/homeTokens';

export default function ReformAlertStrip() {
  return (
    <div
      style={{
        background: colors.navy,
        color: colors.cream,
        borderBottom: '1px solid rgba(184,150,12,0.25)',
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '10px 0',
            gap: 16,
            flexWrap: 'wrap',
            fontFamily: fonts.mono,
            fontSize: 11,
            letterSpacing: 0.5,
          }}
        >
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10 }}>
            <span
              style={{
                background: colors.gold,
                color: colors.navy,
                padding: '2px 7px',
                borderRadius: 3,
                fontWeight: 800,
                fontSize: 9,
                letterSpacing: 1.2,
              }}
            >
              REFORM
            </span>
            Ontario auto insurance reform — major changes July 1, 2026
            <Link
              href="/blog"
              style={{
                color: colors.gold,
                textDecoration: 'underline',
                marginLeft: 8,
                display: 'inline-flex',
                alignItems: 'center',
                gap: 5,
              }}
            >
              Read the guide <Icon name="arrowRight" size={14} color="#F2B441" />
            </Link>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, opacity: 0.75 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Icon name="globe" size={12} /> EN / FR
            </span>
            <span>1-800-TOP-RATE</span>
          </div>
        </div>
      </div>
    </div>
  );
}
