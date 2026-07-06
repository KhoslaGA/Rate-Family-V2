'use client';

/**
 * CardTile — the atom every card surface reuses. Binds to the backend
 * `Card` contract shape (via @/lib/api/client), NOT the legacy static
 * creditCardsData shape.
 *
 * Compliance rails baked in:
 *   - every figure shows its `verifiedAt` date (Bill C-59: no figure without
 *     provenance)
 *   - the "Our pick for …" superlative label ALWAYS links to
 *     /credit-cards/methodology (Bill C-59 substantiation on the same page)
 *   - the CTA is `goHref(cardId)`, never a raw affiliate URL — attribution
 *     runs through the redirector
 *   - DEV-FIXTURE offers render a visible "sample data" marker so mock data
 *     can never masquerade as a verified live offer
 */

import type { Card } from '@ratefamily/contracts';
import { goHref } from '@/lib/api/client';
import { colors, fonts } from '@/styles/tokens';

const money = (n: number) => (n === 0 ? 'No fee' : '$' + n.toLocaleString('en-CA'));
const pct = (n: number | null) => (n === null ? '—' : n.toFixed(2) + '%');

function isFixture(sourceUrl: string) {
  return sourceUrl.startsWith('DEV-FIXTURE://');
}

export default function CardTile({ card }: { card: Card }) {
  const o = card.currentOffer;
  const verified = o.verifiedAt.slice(0, 10);

  return (
    <div style={tile}>
      {/* header: issuer, name, rating */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12 }}>
        <div>
          <div style={issuerLine}>{card.issuerName}</div>
          <h3 style={nameLine}>{card.name}</h3>
        </div>
        <div style={ratingChip} title={`${card.starRating} of 5, editorial rating`}>
          ★ {card.starRating.toFixed(1)}
        </div>
      </div>

      {/* our-pick label — superlative, so it links to methodology */}
      {card.ourPickFor && (
        <a href="/credit-cards/methodology" style={pickLabel}>
          Our pick for {card.ourPickFor}
          <span style={pickWhy}>— how we decide</span>
        </a>
      )}

      {/* four facts, each provenance-dated by the shared verified line below */}
      <dl style={facts}>
        <div style={factRow}><dt style={dt}>Annual fee</dt><dd style={dd}>{money(o.annualFee)}</dd></div>
        <div style={factRow}><dt style={dt}>Rewards</dt><dd style={dd}>{o.rewardsRateHeadline}</dd></div>
        <div style={factRow}><dt style={dt}>Welcome offer</dt><dd style={dd}>{o.welcomeOffer}</dd></div>
        <div style={factRow}><dt style={dt}>Purchase APR</dt><dd style={dd}>{pct(o.purchaseAprPct)}</dd></div>
      </dl>

      {/* CTA → redirector, never a raw affiliate URL */}
      <a
        href={goHref(card.cardId)}
        style={cta}
        rel="sponsored nofollow"
        target="_blank"
      >
        See details &amp; apply →
      </a>

      {/* provenance line — always shown */}
      <div style={provenance}>
        {isFixture(o.sourceUrl) ? (
          <span style={fixtureFlag}>Sample data · not a live offer</span>
        ) : (
          <span>Verified {verified}</span>
        )}
        {o.needsVerification && <span style={needsVerify}>· re-checking</span>}
      </div>
    </div>
  );
}

const tile: React.CSSProperties = {
  display: 'flex', flexDirection: 'column', gap: 14,
  background: colors.white, border: `1px solid ${colors.border}`,
  borderRadius: 16, padding: 22,
  fontFamily: fonts.sans,
};
const issuerLine: React.CSSProperties = { fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: colors.inkMuted };
const nameLine: React.CSSProperties = { margin: '3px 0 0', fontSize: 18, fontWeight: 700, color: colors.inkStrong, fontFamily: fonts.heading };
const ratingChip: React.CSSProperties = { flexShrink: 0, fontSize: 13, fontWeight: 700, color: colors.navy, background: colors.subtleBg, borderRadius: 999, padding: '4px 10px' };
const pickLabel: React.CSSProperties = { display: 'inline-flex', gap: 6, alignItems: 'baseline', alignSelf: 'flex-start', fontSize: 12.5, fontWeight: 700, color: colors.amber, textDecoration: 'none', background: 'rgba(180,83,9,0.08)', borderRadius: 999, padding: '4px 11px' };
const pickWhy: React.CSSProperties = { fontWeight: 500, opacity: 0.8, textDecoration: 'underline' };
const facts: React.CSSProperties = { margin: 0, display: 'flex', flexDirection: 'column', gap: 8 };
const factRow: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', gap: 16, alignItems: 'baseline', borderBottom: `1px solid ${colors.borderFaint}`, paddingBottom: 8 };
const dt: React.CSSProperties = { fontSize: 13, color: colors.inkMuted, flexShrink: 0 };
const dd: React.CSSProperties = { margin: 0, fontSize: 13.5, fontWeight: 600, color: colors.ink, textAlign: 'right' };
const cta: React.CSSProperties = { display: 'inline-flex', justifyContent: 'center', alignItems: 'center', background: colors.teal, color: '#fff', fontWeight: 700, fontSize: 14.5, borderRadius: 10, padding: '11px 16px', textDecoration: 'none' };
const provenance: React.CSSProperties = { display: 'flex', gap: 6, fontSize: 11.5, color: colors.inkMuted };
const fixtureFlag: React.CSSProperties = { fontWeight: 700, color: colors.amber };
const needsVerify: React.CSSProperties = { fontStyle: 'italic' };
