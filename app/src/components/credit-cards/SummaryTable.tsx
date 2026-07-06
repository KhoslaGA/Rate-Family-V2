'use client';

/**
 * SummaryTable — dense, scannable table view of a card list. Binds to the
 * backend `Card` shape. Every monetary/rate figure comes from
 * `currentOffer`; the footer carries the shared provenance note. CTAs route
 * through `goHref`. No superlative column headers (Bill C-59).
 */

import { useMemo, useState } from 'react';
import type { Card } from '@ratefamily/contracts';
import { goHref } from '@/lib/api/client';
import { colors, fonts } from '@/styles/tokens';

type SortKey = 'name' | 'annualFee' | 'purchaseApr' | 'rating';

const money = (n: number) => (n === 0 ? 'No fee' : '$' + n.toLocaleString('en-CA'));

export default function SummaryTable({ cards }: { cards: Card[] }) {
  const [sort, setSort] = useState<SortKey>('rating');
  const [asc, setAsc] = useState(false);

  const sorted = useMemo(() => {
    const arr = [...cards];
    arr.sort((a, b) => {
      let d = 0;
      switch (sort) {
        case 'name': d = a.name.localeCompare(b.name); break;
        case 'annualFee': d = a.currentOffer.annualFee - b.currentOffer.annualFee; break;
        case 'purchaseApr': d = a.currentOffer.purchaseAprPct - b.currentOffer.purchaseAprPct; break;
        case 'rating': d = a.starRating - b.starRating; break;
      }
      return asc ? d : -d;
    });
    return arr;
  }, [cards, sort, asc]);

  const head = (key: SortKey, label: string) => (
    <th
      style={{ ...th, cursor: 'pointer' }}
      onClick={() => { if (sort === key) setAsc(!asc); else { setSort(key); setAsc(key === 'name'); } }}
      aria-sort={sort === key ? (asc ? 'ascending' : 'descending') : 'none'}
    >
      {label}{sort === key ? (asc ? ' ▲' : ' ▼') : ''}
    </th>
  );

  return (
    <div style={{ fontFamily: fonts.sans }}>
      <div style={{ overflowX: 'auto', border: `1px solid ${colors.border}`, borderRadius: 14 }}>
        <table style={table}>
          <thead>
            <tr>
              {head('name', 'Card')}
              {head('annualFee', 'Annual fee')}
              <th style={th}>Rewards</th>
              <th style={th}>Welcome offer</th>
              {head('purchaseApr', 'Purchase APR')}
              {head('rating', 'Rating')}
              <th style={th} />
            </tr>
          </thead>
          <tbody>
            {sorted.map((c) => (
              <tr key={c.cardId} style={tr}>
                <td style={{ ...td, minWidth: 180 }}>
                  <div style={{ fontWeight: 700, color: colors.inkStrong }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: colors.inkMuted }}>{c.issuerName}</div>
                </td>
                <td style={td}>{money(c.currentOffer.annualFee)}</td>
                <td style={{ ...td, minWidth: 160 }}>{c.currentOffer.rewardsRateHeadline}</td>
                <td style={{ ...td, minWidth: 180, fontSize: 12.5 }}>{c.currentOffer.welcomeOffer}</td>
                <td style={td}>{c.currentOffer.purchaseAprPct.toFixed(2)}%</td>
                <td style={td}>★ {c.starRating.toFixed(1)}</td>
                <td style={td}>
                  <a href={goHref(c.cardId)} rel="sponsored nofollow" target="_blank" style={rowCta}>Apply →</a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p style={foot}>
        Figures from each issuer’s current offer, shown with the date we last verified them. Sample data is marked as such and is not a live offer.{' '}
        <a href="/credit-cards/methodology" style={{ color: colors.teal, fontWeight: 600 }}>How we score cards</a>
      </p>
    </div>
  );
}

const table: React.CSSProperties = { width: '100%', borderCollapse: 'collapse', fontSize: 13.5 };
const th: React.CSSProperties = { textAlign: 'left', padding: '12px 14px', fontSize: 11.5, fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase', color: colors.inkMuted, borderBottom: `1px solid ${colors.border}`, background: colors.subtleBg, whiteSpace: 'nowrap' };
const tr: React.CSSProperties = { borderBottom: `1px solid ${colors.borderFaint}` };
const td: React.CSSProperties = { padding: '13px 14px', color: colors.ink, verticalAlign: 'top' };
const rowCta: React.CSSProperties = { color: colors.teal, fontWeight: 700, textDecoration: 'none', whiteSpace: 'nowrap' };
const foot: React.CSSProperties = { margin: '12px 2px 0', fontSize: 12, color: colors.inkMuted, lineHeight: 1.55 };
