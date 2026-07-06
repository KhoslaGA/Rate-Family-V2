/**
 * Glossary term sub-page — /glossary/[slug].
 *
 * Renders a full educational page for each glossary term:
 *   - Terms with a `deepDive` get sections, FAQs, sources, related terms.
 *   - Terms without one get a minimal stub: definition + "Full guide
 *     coming soon" + related-letter back-link + suggest-a-term CTA.
 *
 * All sub-pages emit DefinedTerm JSON-LD and (if FAQs exist) FAQPage
 * JSON-LD so search engines can index the content.
 */
import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { colors, fonts, layout } from '@/styles/tokens';
import {
  TAG_LABELS,
  allTerms,
  findTermBySlug,
  isDeepDiveReleased,
  termUrl,
  type DeepDive,
  type TagKey,
  type Term,
} from '../data';

/**
 * ISR — rebuild each sub-page at most once an hour. The deep-dive
 * release gate (data.ts: isDeepDiveReleased) checks `new Date()` at
 * render time, so a term with releasedAt='2026-07-01' goes live within
 * an hour of midnight UTC on that date, without anyone touching a PR.
 */
export const revalidate = 3600;

const TAG_STYLES: Record<TagKey, { bg: string; fg: string }> = {
  auto: { bg: 'rgba(10,126,140,0.1)', fg: colors.teal },
  home: { bg: 'rgba(180,83,9,0.12)', fg: colors.gold },
  life: { bg: 'rgba(204,51,51,0.08)', fg: colors.red },
  cc: { bg: 'rgba(13,128,80,0.1)', fg: colors.green },
  legal: { bg: 'rgba(27,42,74,0.08)', fg: colors.navy },
};

interface RouteParams {
  params: { slug: string };
}

export function generateStaticParams() {
  return allTerms().map((t) => ({ slug: t.slug }));
}

export function generateMetadata({ params }: RouteParams): Metadata {
  const found = findTermBySlug(params.slug);
  if (!found) return { title: 'Term not found | TopRates.ca' };

  const { term } = found;
  const title = `${term.name} | Insurance Glossary | TopRates.ca`;
  // Don't leak a future-released tagline into metadata before its date.
  const released = isDeepDiveReleased(term);
  const description = (released && term.deepDive?.tagline) || term.def.slice(0, 160);

  return {
    title,
    description,
    alternates: { canonical: termUrl(term.slug) },
  };
}

function definedTermJsonLd(term: Term) {
  return {
    '@context': 'https://schema.org',
    '@type': 'DefinedTerm',
    name: term.name,
    description: term.def,
    inDefinedTermSet: {
      '@type': 'DefinedTermSet',
      name: 'TopRates.ca Insurance Glossary',
      url: 'https://toprates.ca/glossary',
    },
    url: `https://toprates.ca${termUrl(term.slug)}`,
  };
}

function faqJsonLd(faqs: NonNullable<DeepDive['faqs']>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  };
}

export default function GlossaryTermPage({ params }: RouteParams) {
  const found = findTermBySlug(params.slug);
  if (!found) return notFound();

  const { term, letter } = found;
  // Date-gate the deep-dive: terms with a future releasedAt render as a
  // stub until that date passes. See isDeepDiveReleased in ../data.ts.
  const released = isDeepDiveReleased(term);
  const deepDive = released ? term.deepDive : undefined;
  const hasDeep =
    !!deepDive &&
    Array.isArray(deepDive.sections) &&
    deepDive.sections.length > 0;

  // Resolve related-term cross-links to actual Term objects.
  const relatedTerms = (deepDive?.relatedTermSlugs ?? [])
    .map((s) => findTermBySlug(s)?.term)
    .filter((t): t is Term => !!t);

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermJsonLd(term)) }}
      />
      {deepDive?.faqs && deepDive.faqs.length > 0 && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(deepDive.faqs)) }}
        />
      )}

      {/* HERO */}
      <section
        style={{
          background: colors.cream,
          padding: '48px 32px 36px',
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div style={{ maxWidth: layout.maxWidth, margin: '0 auto' }}>
          {/* Breadcrumbs */}
          <nav
            style={{
              fontSize: 12,
              color: colors.muted,
              marginBottom: 18,
              display: 'flex',
              gap: 8,
              flexWrap: 'wrap',
            }}
            aria-label="Breadcrumb"
          >
            <Link href="/news-hub" style={{ color: colors.muted, textDecoration: 'none' }}>
              News &amp; Resources
            </Link>
            <span aria-hidden="true">/</span>
            <Link href="/glossary" style={{ color: colors.muted, textDecoration: 'none' }}>
              Glossary
            </Link>
            <span aria-hidden="true">/</span>
            <Link href={`/glossary#${letter}`} style={{ color: colors.muted, textDecoration: 'none' }}>
              {letter}
            </Link>
            <span aria-hidden="true">/</span>
            <span style={{ color: colors.navy }}>{term.name}</span>
          </nav>

          {/* Tags */}
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 14 }}>
            {term.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 10,
                  fontWeight: 800,
                  letterSpacing: 0.8,
                  padding: '3px 9px',
                  borderRadius: 4,
                  textTransform: 'uppercase',
                  background: TAG_STYLES[tag].bg,
                  color: TAG_STYLES[tag].fg,
                }}
              >
                {TAG_LABELS[tag]}
              </span>
            ))}
          </div>

          <h1
            style={{
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 44,
              color: colors.navy,
              margin: '0 0 12px',
              lineHeight: 1.1,
              letterSpacing: '-0.5px',
            }}
          >
            {term.name}
          </h1>

          {deepDive?.tagline && (
            <p
              style={{
                fontFamily: fonts.serif,
                fontStyle: 'italic',
                fontSize: 19,
                color: colors.teal,
                margin: '0 0 20px',
                lineHeight: 1.5,
                maxWidth: 720,
              }}
            >
              {deepDive.tagline}
            </p>
          )}

          {/* Plain-English definition card */}
          <div
            style={{
              background: '#fff',
              border: `1px solid ${colors.border}`,
              borderRadius: 12,
              padding: '20px 24px',
              maxWidth: 760,
            }}
          >
            <div
              style={{
                fontFamily: fonts.heading,
                fontWeight: 700,
                fontSize: 11,
                color: colors.muted,
                letterSpacing: 1.5,
                textTransform: 'uppercase',
                marginBottom: 8,
              }}
            >
              Plain-English definition
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 15.5,
                color: colors.text,
                lineHeight: 1.6,
              }}
            >
              {term.def}
            </p>
            {term.source && (
              <p
                style={{
                  fontSize: 12,
                  color: colors.muted,
                  lineHeight: 1.5,
                  margin: '10px 0 0',
                }}
              >
                Source:{' '}
                <a
                  href={term.source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: colors.teal, textDecoration: 'underline' }}
                >
                  {term.source.label}
                </a>
              </p>
            )}
          </div>
        </div>
      </section>

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
        <article style={{ minWidth: 0 }}>
          {/* "Why it matters" callout (from term.extra) — surfaced above the
              deep-dive so the regulatory why-it-matters lands first. */}
          {term.extra?.whyItMatters && (
            <aside
              style={{
                background: colors.subtleBg,
                borderLeft: `3px solid ${colors.teal}`,
                padding: '16px 20px',
                borderRadius: 6,
                marginBottom: 32,
              }}
            >
              <div
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 700,
                  fontSize: 11,
                  color: colors.teal,
                  letterSpacing: 1.4,
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}
              >
                Why it matters
              </div>
              <p
                style={{
                  margin: 0,
                  fontSize: 15,
                  color: colors.text,
                  lineHeight: 1.65,
                }}
              >
                {term.extra.whyItMatters}
              </p>
            </aside>
          )}

          {hasDeep ? (
            <>
              {deepDive!.sections.map((section, i) => (
                <section
                  key={`${section.heading}-${i}`}
                  style={{ marginBottom: 36 }}
                >
                  <h2
                    style={{
                      fontFamily: fonts.heading,
                      fontWeight: 700,
                      fontSize: 24,
                      color: colors.navy,
                      margin: '0 0 14px',
                      lineHeight: 1.25,
                    }}
                  >
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, j) => (
                    <p
                      key={j}
                      style={{
                        fontSize: 16,
                        lineHeight: 1.7,
                        color: colors.text,
                        margin: '0 0 14px',
                      }}
                    >
                      {p}
                    </p>
                  ))}
                </section>
              ))}

              {/* FAQs */}
              {deepDive!.faqs && deepDive!.faqs.length > 0 && (
                <section style={{ marginTop: 48, marginBottom: 36 }}>
                  <h2
                    style={{
                      fontFamily: fonts.heading,
                      fontWeight: 700,
                      fontSize: 24,
                      color: colors.navy,
                      margin: '0 0 18px',
                    }}
                  >
                    Frequently asked
                  </h2>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                    {deepDive!.faqs.map((f, i) => (
                      <details
                        key={i}
                        style={{
                          background: '#fff',
                          border: `1px solid ${colors.border}`,
                          borderRadius: 10,
                          padding: '14px 18px',
                        }}
                      >
                        <summary
                          style={{
                            fontFamily: fonts.heading,
                            fontWeight: 700,
                            fontSize: 15.5,
                            color: colors.navy,
                            cursor: 'pointer',
                            listStyle: 'none',
                          }}
                        >
                          {f.question}
                        </summary>
                        <p
                          style={{
                            margin: '10px 0 0',
                            fontSize: 15,
                            color: colors.text,
                            lineHeight: 1.65,
                          }}
                        >
                          {f.answer}
                        </p>
                      </details>
                    ))}
                  </div>
                </section>
              )}

              {/* Sources */}
              {deepDive!.sources && deepDive!.sources.length > 0 && (
                <section
                  style={{
                    marginTop: 40,
                    padding: '20px 24px',
                    background: colors.subtleBg,
                    borderLeft: `3px solid ${colors.teal}`,
                    borderRadius: 6,
                  }}
                >
                  <h3
                    style={{
                      fontFamily: fonts.heading,
                      fontWeight: 700,
                      fontSize: 12,
                      color: colors.muted,
                      letterSpacing: 1.4,
                      textTransform: 'uppercase',
                      margin: '0 0 12px',
                    }}
                  >
                    Sources
                  </h3>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                    {deepDive!.sources.map((s, i) => (
                      <li
                        key={s.url + i}
                        style={{ fontSize: 13.5, margin: '0 0 6px', lineHeight: 1.5 }}
                      >
                        <a
                          href={s.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          style={{ color: colors.teal, textDecoration: 'underline' }}
                        >
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}

              {/* CTAs */}
              {deepDive!.ctas && deepDive!.ctas.length > 0 && (
                <section style={{ marginTop: 32 }}>
                  {deepDive!.ctas.map((cta) => (
                    <Link
                      key={cta.href}
                      href={cta.href}
                      style={{
                        display: 'block',
                        padding: '18px 22px',
                        background: colors.navy,
                        color: '#fff',
                        borderRadius: 12,
                        textDecoration: 'none',
                        marginBottom: 10,
                      }}
                    >
                      <div
                        style={{
                          fontFamily: fonts.heading,
                          fontWeight: 700,
                          fontSize: 16,
                          marginBottom: cta.description ? 4 : 0,
                        }}
                      >
                        {cta.label} →
                      </div>
                      {cta.description && (
                        <div
                          style={{
                            fontSize: 13,
                            color: 'rgba(255,255,255,0.75)',
                            lineHeight: 1.5,
                          }}
                        >
                          {cta.description}
                        </div>
                      )}
                    </Link>
                  ))}
                </section>
              )}
            </>
          ) : (
            // Stub fallback for terms without authored deep-dive content
            <section
              style={{
                background: '#fff',
                border: `1px dashed ${colors.border}`,
                borderRadius: 12,
                padding: '28px 26px',
              }}
            >
              <div
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 700,
                  fontSize: 12,
                  color: colors.muted,
                  letterSpacing: 1.4,
                  textTransform: 'uppercase',
                  marginBottom: 8,
                }}
              >
                Full guide coming soon
              </div>
              <h2
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 700,
                  fontSize: 20,
                  color: colors.navy,
                  margin: '0 0 10px',
                }}
              >
                We&rsquo;re writing the deep-dive for this term.
              </h2>
              <p
                style={{
                  fontSize: 15,
                  color: colors.text,
                  lineHeight: 1.65,
                  margin: '0 0 16px',
                }}
              >
                The plain-English definition above is the short version. We add
                expanded guides — examples, regulatory context, common pitfalls,
                and related coverages — as we go. If this term is on your mind,
                tell us and we&rsquo;ll prioritize it.
              </p>
              <Link
                href="/contact?topic=glossary-suggestion"
                style={{
                  display: 'inline-block',
                  background: colors.teal,
                  color: '#fff',
                  padding: '10px 18px',
                  borderRadius: 8,
                  fontSize: 13,
                  fontWeight: 700,
                  textDecoration: 'none',
                }}
              >
                Request this guide →
              </Link>
            </section>
          )}

          {/* See also (from term.extra) — mix of pillar guides and other
              glossary terms. Sidebar handles glossary-only related terms. */}
          {term.extra?.seeAlso && term.extra.seeAlso.length > 0 && (
            <section style={{ marginTop: 32 }}>
              <div
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 700,
                  fontSize: 12,
                  color: colors.muted,
                  letterSpacing: 1.4,
                  textTransform: 'uppercase',
                  marginBottom: 10,
                }}
              >
                See also
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px 10px' }}>
                {term.extra.seeAlso.map((s, i) => (
                  <React.Fragment key={s.href + s.label}>
                    {i > 0 && <span style={{ color: colors.border }}>·</span>}
                    <Link
                      href={s.href}
                      style={{
                        color: colors.teal,
                        fontWeight: 600,
                        fontSize: 14,
                        textDecoration: 'none',
                      }}
                    >
                      {s.label}
                    </Link>
                  </React.Fragment>
                ))}
              </div>
            </section>
          )}

          {/* Back to glossary */}
          <div style={{ marginTop: 40 }}>
            <Link
              href={`/glossary#${letter}`}
              style={{
                fontSize: 14,
                color: colors.teal,
                textDecoration: 'none',
                fontWeight: 600,
              }}
            >
              ← Back to the glossary, letter {letter}
            </Link>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside
          style={{
            position: 'sticky',
            top: 80,
            display: 'flex',
            flexDirection: 'column',
            gap: 14,
          }}
        >
          {/* Related terms */}
          {relatedTerms.length > 0 && (
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
                Related terms
              </h5>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {relatedTerms.map((r) => (
                  <li key={r.slug} style={{ padding: '6px 0', fontSize: 13.5 }}>
                    <Link
                      href={termUrl(r.slug)}
                      style={{
                        color: colors.teal,
                        textDecoration: 'none',
                        fontWeight: 600,
                      }}
                    >
                      {r.name} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* All glossary */}
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
                margin: '0 0 8px',
              }}
            >
              The full glossary
            </h5>
            <p
              style={{
                fontSize: 13.5,
                color: 'rgba(255,255,255,0.78)',
                lineHeight: 1.55,
                margin: '0 0 14px',
              }}
            >
              Search every Canadian insurance term, filtered by category.
            </p>
            <Link
              href="/glossary"
              style={{
                display: 'block',
                background: colors.gold,
                color: '#fff',
                textAlign: 'center',
                padding: 10,
                borderRadius: 8,
                fontWeight: 700,
                fontSize: 12,
                textDecoration: 'none',
              }}
            >
              Open glossary →
            </Link>
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
                fontSize: 14,
                color: colors.navy,
                margin: '0 0 6px',
              }}
            >
              Spot an error?
            </h5>
            <p
              style={{
                fontSize: 12.5,
                color: colors.muted,
                margin: '0 0 12px',
                lineHeight: 1.5,
              }}
            >
              Glossary entries are reviewed regularly. Flag a correction or
              suggest improvements.
            </p>
            <Link
              href={`/contact?topic=glossary-correction&term=${encodeURIComponent(term.name)}`}
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
              Send feedback →
            </Link>
          </div>
        </aside>
      </div>
    </main>
  );
}
