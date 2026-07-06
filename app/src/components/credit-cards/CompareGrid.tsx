'use client';

/**
 * CompareGrid — side-by-side comparison of a small card set. Fetches
 * /v1/compare through the client seam, which returns aligned rows the grid
 * renders column-per-card. Loading / error / empty states included.
 */

import { useEffect, useState } from 'react';
import type { CompareResponse } from '@ratefamily/contracts';
import { compareCards, goHref, ApiError } from '@/lib/api/client';
import { colors, fonts } from '@/styles/tokens';

type State =
  | { phase: 'loading' }
  | { phase: 'error'; message: string }
  | { phase: 'done'; data: CompareResponse };

export default function CompareGrid({ cardIds }: { cardIds: string[] }) {
  const [state, setState] = useState<State>({ phase: 'loading' });

  useEffect(() => {
    let alive = true;
    setState({ phase: 'loading' });
    compareCards(cardIds)
      .then((data) => { if (alive) setState({ phase: 'done', data }); })
      .catch((err) => {
        if (!alive) return;
        setState({ phase: 'error', message: err instanceof ApiError ? err.message : 'Could not load comparison.' });
      });
    return () => { alive = false; };
  }, [cardIds.join(',')]); // eslint-disable-line react-hooks/exhaustive-deps

  if (state.phase === 'loading') {
    return <div style={skeleton} aria-busy="true">Loading comparison…</div>;
  }
  if (state.phase === 'error') {
    return <div style={{ ...skeleton, color: colors.amber }}>{state.message}</div>;
  }

  const { cards, rows } = state.data;
  if (cards.length === 0) return <div style={skeleton}>No cards to compare.</div>;

  return (
    <div style={{ overflowX: 'auto', fontFamily: fonts.sans }}>
      <table style={grid}>
        <thead>
          <tr>
            <th style={cornerCell} />
            {cards.map((c) => (
              <th key={c.cardId} style={cardHead}>
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '0.04em', textTransform: 'uppercase', color: colors.inkMuted }}>{c.issuerName}</div>
                <div style={{ fontSize: 15.5, fontWeight: 700, color: colors.inkStrong, fontFamily: fonts.heading, marginTop: 2 }}>{c.name}</div>
                <div style={{ marginTop: 4, fontSize: 12.5, color: colors.navy }}>★ {c.starRating.toFixed(1)}</div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.key} style={{ borderBottom: `1px solid ${colors.borderFaint}` }}>
              <th scope="row" style={rowLabel}>{row.label}</th>
              {row.values.map((v, i) => (
                <td key={i} style={valueCell}>{v === null ? '—' : String(v)}</td>
              ))}
            </tr>
          ))}
          <tr>
            <th scope="row" style={rowLabel} />
            {cards.map((c) => (
              <td key={c.cardId} style={valueCell}>
                <a href={goHref(c.cardId)} rel="sponsored nofollow" target="_blank" style={cta}>Apply →</a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}

const grid: React.CSSProperties = { borderCollapse: 'collapse', width: '100%', minWidth: 480 };
const cornerCell: React.CSSProperties = { background: colors.subtleBg, borderBottom: `1px solid ${colors.border}`, width: 150 };
const cardHead: React.CSSProperties = { textAlign: 'left', padding: '14px 16px', borderBottom: `1px solid ${colors.border}`, background: colors.subtleBg, verticalAlign: 'top' };
const rowLabel: React.CSSProperties = { textAlign: 'left', padding: '12px 16px', fontSize: 12.5, fontWeight: 700, color: colors.inkMuted, whiteSpace: 'nowrap', verticalAlign: 'top' };
const valueCell: React.CSSProperties = { padding: '12px 16px', fontSize: 13.5, color: colors.ink, verticalAlign: 'top' };
const cta: React.CSSProperties = { color: colors.teal, fontWeight: 700, textDecoration: 'none' };
const skeleton: React.CSSProperties = { padding: '28px 20px', textAlign: 'center', color: colors.inkMuted, border: `1px dashed ${colors.border}`, borderRadius: 14, fontFamily: fonts.sans };
