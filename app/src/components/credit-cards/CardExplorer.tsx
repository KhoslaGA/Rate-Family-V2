'use client';

/**
 * CardExplorer — the client surface that binds the whole card catalog to
 * the backend. Fetches /v1/cards through the client seam, offers a category
 * filter and a tiles/table view toggle, and owns the loading / error /
 * empty states (the cross-cutting layer the register flagged to build
 * first). Everything downstream (CardTile, SummaryTable) is presentational.
 */

import { useEffect, useMemo, useState } from 'react';
import type { Card, CardCategory } from '@ratefamily/contracts';
import { listCards, ApiError } from '@/lib/api/client';
import { colors, fonts } from '@/styles/tokens';
import CardTile from './CardTile';
import SummaryTable from './SummaryTable';

const CATEGORIES: { key: CardCategory | 'all'; label: string }[] = [
  { key: 'all', label: 'All cards' },
  { key: 'cashback', label: 'Cash back' },
  { key: 'travel', label: 'Travel' },
  { key: 'no_fee', label: 'No fee' },
  { key: 'balance_transfer', label: 'Balance transfer' },
  { key: 'newcomer', label: 'Newcomer' },
  { key: 'student', label: 'Student' },
  { key: 'business', label: 'Business' },
  { key: 'secured', label: 'Secured' },
];

type State =
  | { phase: 'loading' }
  | { phase: 'error'; message: string }
  | { phase: 'done'; cards: Card[] };

export default function CardExplorer() {
  const [state, setState] = useState<State>({ phase: 'loading' });
  const [category, setCategory] = useState<CardCategory | 'all'>('all');
  const [view, setView] = useState<'tiles' | 'table'>('tiles');

  const load = () => {
    setState({ phase: 'loading' });
    listCards()
      .then((r) => setState({ phase: 'done', cards: r.cards }))
      .catch((err) => setState({ phase: 'error', message: err instanceof ApiError ? err.message : 'Could not load cards.' }));
  };

  useEffect(load, []);

  const filtered = useMemo(() => {
    if (state.phase !== 'done') return [];
    return category === 'all' ? state.cards : state.cards.filter((c) => c.category === category);
  }, [state, category]);

  return (
    <div style={{ fontFamily: fonts.sans }}>
      {/* controls */}
      <div style={controls}>
        <div style={chips} role="tablist" aria-label="Card categories">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              role="tab"
              aria-selected={category === c.key}
              onClick={() => setCategory(c.key)}
              style={{ ...chip, ...(category === c.key ? chipOn : null) }}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div style={viewToggle}>
          <button onClick={() => setView('tiles')} style={{ ...toggleBtn, ...(view === 'tiles' ? toggleOn : null) }}>Tiles</button>
          <button onClick={() => setView('table')} style={{ ...toggleBtn, ...(view === 'table' ? toggleOn : null) }}>Table</button>
        </div>
      </div>

      {/* states */}
      {state.phase === 'loading' && (
        <div style={tilesGrid}>
          {[0, 1, 2, 3, 4, 5].map((i) => <div key={i} style={skelTile} aria-busy="true" />)}
        </div>
      )}

      {state.phase === 'error' && (
        <div style={notice}>
          <div style={{ fontWeight: 700, color: colors.inkStrong, marginBottom: 4 }}>Couldn’t load cards.</div>
          <div style={{ color: colors.inkMuted, marginBottom: 14 }}>{state.message}</div>
          <button onClick={load} style={retry}>Try again</button>
        </div>
      )}

      {state.phase === 'done' && filtered.length === 0 && (
        <div style={notice}>
          <div style={{ fontWeight: 700, color: colors.inkStrong }}>No cards in this category yet.</div>
          <div style={{ color: colors.inkMuted, marginTop: 4 }}>Try another filter.</div>
        </div>
      )}

      {state.phase === 'done' && filtered.length > 0 && (
        view === 'tiles'
          ? <div style={tilesGrid}>{filtered.map((c) => <CardTile key={c.cardId} card={c} />)}</div>
          : <SummaryTable cards={filtered} />
      )}
    </div>
  );
}

const controls: React.CSSProperties = { display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 16, flexWrap: 'wrap', marginBottom: 22 };
const chips: React.CSSProperties = { display: 'flex', gap: 8, flexWrap: 'wrap' };
const chip: React.CSSProperties = { border: `1px solid ${colors.border}`, background: colors.white, color: colors.ink, borderRadius: 999, padding: '7px 14px', fontSize: 13, fontWeight: 600, cursor: 'pointer' };
const chipOn: React.CSSProperties = { background: colors.navy, color: '#fff', borderColor: colors.navy };
const viewToggle: React.CSSProperties = { display: 'inline-flex', border: `1px solid ${colors.border}`, borderRadius: 10, overflow: 'hidden' };
const toggleBtn: React.CSSProperties = { border: 'none', background: colors.white, color: colors.inkMuted, padding: '7px 14px', fontSize: 13, fontWeight: 700, cursor: 'pointer' };
const toggleOn: React.CSSProperties = { background: colors.subtleBg, color: colors.inkStrong };
const tilesGrid: React.CSSProperties = { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 18 };
const skelTile: React.CSSProperties = { height: 300, borderRadius: 16, background: colors.subtleBg, border: `1px solid ${colors.borderFaint}` };
const notice: React.CSSProperties = { textAlign: 'center', padding: '40px 24px', border: `1px dashed ${colors.border}`, borderRadius: 16 };
const retry: React.CSSProperties = { background: colors.teal, color: '#fff', border: 'none', borderRadius: 10, padding: '10px 18px', fontWeight: 700, fontSize: 14, cursor: 'pointer' };
