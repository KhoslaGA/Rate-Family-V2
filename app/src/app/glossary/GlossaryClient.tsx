'use client';

import React, { useMemo, useState } from 'react';
import Link from 'next/link';
import { colors, fonts, layout } from '@/styles/tokens';
import {
  ALPHABET,
  TAG_LABELS,
  TERMS,
  countByTag,
  termUrl,
  totalTerms,
  type TagKey,
  type Term,
} from './data';

const TAG_STYLES: Record<TagKey, { bg: string; fg: string }> = {
  auto: { bg: 'rgba(10,126,140,0.1)', fg: colors.teal },
  home: { bg: 'rgba(180,83,9,0.12)', fg: colors.gold },
  life: { bg: 'rgba(204,51,51,0.08)', fg: colors.red },
  cc: { bg: 'rgba(13,128,80,0.1)', fg: colors.green },
  legal: { bg: 'rgba(27,42,74,0.08)', fg: colors.navy },
};

const ALL_TAGS: TagKey[] = ['auto', 'home', 'life', 'cc', 'legal'];

const serifItalic: React.CSSProperties = {
  fontFamily: fonts.serif,
  fontStyle: 'italic',
  fontWeight: 500,
  color: colors.teal,
};

function matchesQuery(term: Term, q: string): boolean {
  if (!q) return true;
  const hay = `${term.name} ${term.def} ${term.extra?.whyItMatters ?? ''}`.toLowerCase();
  return hay.includes(q);
}

function matchesTags(term: Term, activeTags: Set<TagKey>): boolean {
  if (activeTags.size === ALL_TAGS.length) return true; // all = show all
  return term.tags.some((t) => activeTags.has(t));
}

export default function GlossaryClient() {
  const [query, setQuery] = useState('');
  const [activeTags, setActiveTags] = useState<Set<TagKey>>(new Set(ALL_TAGS));

  const tagCounts = useMemo(() => countByTag(TERMS), []);
  const total = useMemo(() => totalTerms(TERMS), []);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    const out: Array<[string, Term[]]> = [];
    for (const letter of ALPHABET) {
      const list = TERMS[letter];
      if (!list) continue;
      const visible = list.filter(
        (t) => matchesQuery(t, q) && matchesTags(t, activeTags),
      );
      if (visible.length > 0) out.push([letter, visible]);
    }
    return out;
  }, [query, activeTags]);

  const shownCount = filtered.reduce((sum, [, list]) => sum + list.length, 0);
  const lettersWithContent = new Set(filtered.map(([l]) => l));

  function toggleTag(tag: TagKey) {
    setActiveTags((prev) => {
      const next = new Set(prev);
      if (next.has(tag)) next.delete(tag);
      else next.add(tag);
      return next;
    });
  }

  function toggleAll() {
    setActiveTags((prev) =>
      prev.size === ALL_TAGS.length ? new Set() : new Set(ALL_TAGS),
    );
  }

  return (
    <main>
      {/* HERO */}
      <section
        style={{
          background: colors.cream,
          padding: '56px 32px 40px',
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div style={{ maxWidth: layout.maxWidth, margin: '0 auto' }}>
          <div style={{ fontSize: 12, color: colors.muted, marginBottom: 14 }}>
            <Link href="/news-hub" style={{ color: colors.muted, textDecoration: 'none' }}>
              News &amp; Resources
            </Link>{' '}
            &nbsp;/&nbsp; Glossary
          </div>
          <h1
            style={{
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 52,
              color: colors.navy,
              margin: '0 0 12px',
              lineHeight: 1.05,
              letterSpacing: '-0.6px',
            }}
          >
            Every insurance term, in <span style={serifItalic}>plain English.</span>
          </h1>
          <p
            style={{
              fontSize: 17,
              color: colors.muted,
              maxWidth: 620,
              lineHeight: 1.55,
              margin: '0 0 28px',
            }}
          >
            Canadian insurance terms across auto, home, life, credit, and regulatory.
            Click any term to open its full guide — context, examples, FAQs, and the
            regulations behind it.
          </p>

          {/* Search input */}
          <div style={{ position: 'relative', maxWidth: 560 }}>
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              style={{
                position: 'absolute',
                left: 16,
                top: '50%',
                transform: 'translateY(-50%)',
                color: colors.muted,
              }}
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Try: deductible, OPCF 27, direct comp, beneficiary…"
              aria-label="Search glossary"
              style={{
                width: '100%',
                border: `1px solid ${colors.border}`,
                borderRadius: 12,
                padding: '14px 16px 14px 46px',
                fontSize: 15,
                fontFamily: 'inherit',
                background: '#fff',
                outline: 'none',
              }}
            />
          </div>
          <div style={{ fontSize: 12, color: colors.muted, marginTop: 10 }}>
            Showing <b style={{ color: colors.navy, fontWeight: 700 }}>{shownCount}</b> of {total} terms ·
            Sorted A–Z
          </div>
        </div>
      </section>

      {/* A-Z STICKY RAIL */}
      <nav
        style={{
          position: 'sticky',
          top: 56,
          zIndex: 50,
          background: '#fff',
          borderBottom: `1px solid ${colors.border}`,
          padding: '14px 32px',
        }}
        aria-label="Jump to letter"
      >
        <div
          style={{
            maxWidth: layout.maxWidth,
            margin: '0 auto',
            display: 'flex',
            gap: 4,
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          {ALPHABET.map((l) => {
            const has = lettersWithContent.has(l);
            return (
              <a
                key={l}
                href={has ? `#${l}` : undefined}
                aria-disabled={!has}
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 700,
                  fontSize: 13,
                  color: has ? colors.navy : colors.border,
                  padding: '6px 10px',
                  borderRadius: 6,
                  minWidth: 28,
                  textAlign: 'center',
                  textDecoration: 'none',
                  pointerEvents: has ? 'auto' : 'none',
                }}
              >
                {l}
              </a>
            );
          })}
        </div>
      </nav>

      {/* BODY */}
      <div
        style={{
          maxWidth: layout.maxWidth,
          margin: '0 auto',
          padding: '48px 32px 32px',
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) 280px',
          gap: 48,
          alignItems: 'start',
        }}
      >
        <div>
          {filtered.length === 0 ? (
            <div
              style={{
                padding: '48px 24px',
                textAlign: 'center',
                border: `1px dashed ${colors.border}`,
                borderRadius: 12,
                color: colors.muted,
              }}
            >
              <p style={{ margin: '0 0 8px', fontSize: 16, color: colors.navy }}>
                No terms match your filters.
              </p>
              <p style={{ margin: 0, fontSize: 14 }}>
                Try a different search term or re-enable a category.
              </p>
            </div>
          ) : (
            filtered.map(([letter, terms]) => (
              <section
                key={letter}
                id={letter}
                style={{ marginBottom: 32, scrollMarginTop: 130 }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: 18,
                    margin: '0 0 14px',
                    paddingBottom: 12,
                    borderBottom: `1px solid ${colors.border}`,
                  }}
                >
                  <span
                    style={{
                      fontFamily: fonts.heading,
                      fontWeight: 800,
                      fontSize: 56,
                      color: colors.teal,
                      lineHeight: 1,
                      letterSpacing: -2,
                    }}
                  >
                    {letter}
                  </span>
                  <span style={{ fontSize: 12, color: colors.muted }}>
                    {terms.length} {terms.length === 1 ? 'term' : 'terms'}
                  </span>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                  {terms.map((t) => {
                    const hasDeepDive = !!t.deepDive?.sections?.length;
                    return (
                      <Link
                        key={t.slug}
                        href={termUrl(t.slug)}
                        style={{
                          display: 'block',
                          background: '#fff',
                          border: `1px solid ${colors.border}`,
                          borderRadius: 12,
                          padding: '18px 22px',
                          textDecoration: 'none',
                          color: 'inherit',
                          transition: 'border-color .15s, transform .15s',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'baseline',
                            justifyContent: 'space-between',
                            gap: 16,
                          }}
                        >
                          <h3
                            style={{
                              fontFamily: fonts.heading,
                              fontWeight: 700,
                              fontSize: 17,
                              color: colors.navy,
                              margin: 0,
                            }}
                          >
                            {t.name}
                          </h3>
                          <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', alignItems: 'center' }}>
                            {t.tags.map((tag) => (
                              <span
                                key={tag}
                                style={{
                                  fontSize: 9.5,
                                  fontWeight: 800,
                                  letterSpacing: 0.8,
                                  padding: '2px 7px',
                                  borderRadius: 3,
                                  textTransform: 'uppercase',
                                  background: TAG_STYLES[tag].bg,
                                  color: TAG_STYLES[tag].fg,
                                }}
                              >
                                {TAG_LABELS[tag]}
                              </span>
                            ))}
                          </div>
                        </div>
                        <p
                          style={{
                            fontSize: 14,
                            color: colors.text,
                            lineHeight: 1.55,
                            margin: '8px 0 0',
                          }}
                        >
                          {t.def}
                        </p>
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            marginTop: 10,
                            paddingTop: 8,
                            borderTop: `1px solid ${colors.borderFaint}`,
                            fontSize: 12.5,
                          }}
                        >
                          <span style={{ color: colors.teal, fontWeight: 600 }}>
                            {hasDeepDive ? 'Read full guide →' : 'Open term →'}
                          </span>
                          {hasDeepDive && (
                            <span
                              style={{
                                fontSize: 10,
                                fontWeight: 700,
                                letterSpacing: 0.8,
                                textTransform: 'uppercase',
                                color: colors.muted,
                              }}
                            >
                              Deep dive
                            </span>
                          )}
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </section>
            ))
          )}
        </div>

        {/* SIDEBAR */}
        <aside
          style={{
            position: 'sticky',
            top: 130,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          {/* Filter by category */}
          <div
            style={{
              background: colors.subtleBg,
              border: `1px solid ${colors.border}`,
              borderRadius: 14,
              padding: 20,
            }}
          >
            <h5
              style={{
                fontFamily: fonts.heading,
                fontWeight: 700,
                fontSize: 11,
                color: colors.muted,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                margin: '0 0 12px',
              }}
            >
              Filter by category
            </h5>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <label
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 10,
                  fontSize: 13,
                  color: colors.navy,
                  cursor: 'pointer',
                }}
              >
                <input
                  type="checkbox"
                  checked={activeTags.size === ALL_TAGS.length}
                  onChange={toggleAll}
                  style={{ accentColor: colors.teal }}
                />
                All
                <span style={{ marginLeft: 'auto', fontSize: 11, color: colors.muted }}>
                  {total}
                </span>
              </label>
              {ALL_TAGS.map((tag) => (
                <label
                  key={tag}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    fontSize: 13,
                    color: colors.navy,
                    cursor: 'pointer',
                  }}
                >
                  <input
                    type="checkbox"
                    checked={activeTags.has(tag)}
                    onChange={() => toggleTag(tag)}
                    style={{ accentColor: colors.teal }}
                  />
                  {TAG_LABELS[tag]}
                  <span style={{ marginLeft: 'auto', fontSize: 11, color: colors.muted }}>
                    {tagCounts[tag]}
                  </span>
                </label>
              ))}
            </div>
          </div>

          {/* Most searched */}
          <div
            style={{
              background: colors.navy,
              color: '#fff',
              borderRadius: 14,
              padding: 22,
            }}
          >
            <h5
              style={{
                fontFamily: fonts.heading,
                fontWeight: 700,
                fontSize: 11,
                color: colors.gold,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                margin: '0 0 12px',
              }}
            >
              Most searched
            </h5>
            <ol style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {[
                ['deductible', 'Deductible'],
                ['accident-benefits', 'Accident benefits'],
                ['dcpd', 'Direct compensation (DCPD)'],
                ['beneficiary', 'Beneficiary'],
                ['telematics', 'Telematics'],
                ['minor-injury-guideline', 'Minor-injury guideline'],
                ['sabs', 'SABS'],
              ].map(([slug, term], i) => (
                <li
                  key={term}
                  style={{
                    padding: '8px 0 8px 28px',
                    fontSize: 13.5,
                    position: 'relative',
                    borderTop: i === 0 ? 'none' : '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <span
                    style={{
                      position: 'absolute',
                      left: 0,
                      top: 8,
                      fontFamily: fonts.heading,
                      fontWeight: 800,
                      fontSize: 11,
                      color: colors.gold,
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <Link href={termUrl(slug)} style={{ color: '#fff', textDecoration: 'none' }}>
                    {term}
                  </Link>
                </li>
              ))}
            </ol>
          </div>

          {/* Suggest a term */}
          <div
            style={{
              background: '#fff',
              border: `1px solid ${colors.border}`,
              borderRadius: 14,
              padding: 22,
            }}
          >
            <h5
              style={{
                fontFamily: fonts.heading,
                fontWeight: 700,
                fontSize: 16,
                color: colors.navy,
                margin: '0 0 6px',
              }}
            >
              Can&rsquo;t find a term?
            </h5>
            <p
              style={{
                fontSize: 12.5,
                color: colors.muted,
                margin: '0 0 14px',
                lineHeight: 1.5,
              }}
            >
              We add new entries regularly. Suggest one and we&rsquo;ll add it.
            </p>
            <Link
              href="/contact?topic=glossary-suggestion"
              style={{
                display: 'block',
                background: colors.teal,
                color: '#fff',
                textAlign: 'center',
                padding: 10,
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 12,
                textDecoration: 'none',
              }}
            >
              Suggest a term →
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
