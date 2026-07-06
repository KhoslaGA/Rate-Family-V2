/**
 * /newcomers/ — English (default-locale) version.
 *
 * Content comes from src/i18n/dictionaries/en.json so the same shape
 * can be translated into FR/PA/HI/UR over time. Non-English variants
 * live at /<locale>/newcomers (see src/app/[locale]/newcomers/page.tsx).
 *
 * hreflang alternates link every locale variant for Google.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { colors, fonts, layout } from '@/styles/tokens';
import { DEFAULT_LOCALE } from '@/i18n/config';
import { getDictionary } from '@/i18n/getDictionary';
import { buildHreflang } from '@/lib/seo/hreflang';

export async function generateMetadata(): Promise<Metadata> {
  const dict = await getDictionary(DEFAULT_LOCALE);
  return {
    title: dict.newcomers.meta.title,
    description: dict.newcomers.meta.description,
    alternates: buildHreflang('/newcomers', DEFAULT_LOCALE),
  };
}

export default async function NewcomersPage() {
  const { newcomers } = await getDictionary(DEFAULT_LOCALE);
  const { hero, intro, sections, cta, faqs } = newcomers;

  return (
    <main>
      {/* HERO */}
      <section
        style={{
          background: colors.cream,
          padding: '64px 32px 48px',
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div style={{ maxWidth: layout.maxWidth, margin: '0 auto' }}>
          {hero && (
            <>
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 11,
                  letterSpacing: 1.8,
                  color: colors.teal,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: 16,
                }}
              >
                {hero.eyebrow}
              </div>
              <h1
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 800,
                  fontSize: 52,
                  color: colors.navy,
                  margin: '0 0 18px',
                  lineHeight: 1.05,
                  letterSpacing: '-0.6px',
                  maxWidth: 760,
                }}
              >
                {hero.title}
              </h1>
              <p
                style={{
                  fontSize: 18,
                  color: colors.muted,
                  lineHeight: 1.6,
                  margin: 0,
                  maxWidth: 720,
                }}
              >
                {hero.subtitle}
              </p>
            </>
          )}
        </div>
      </section>

      {/* INTRO */}
      {intro && (
        <section style={{ padding: '48px 32px 24px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: fonts.heading,
                fontWeight: 700,
                fontSize: 28,
                color: colors.navy,
                margin: '0 0 14px',
              }}
            >
              {intro.heading}
            </h2>
            <p
              style={{
                fontSize: 16,
                color: colors.text,
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              {intro.body}
            </p>
          </div>
        </section>
      )}

      {/* SECTIONS */}
      {sections && sections.length > 0 && (
        <section style={{ padding: '24px 32px 48px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            {sections.map((sec, i) => (
              <article
                key={i}
                style={{
                  paddingTop: 28,
                  paddingBottom: 28,
                  borderBottom: `1px solid ${colors.borderFaint}`,
                }}
              >
                <h3
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 700,
                    fontSize: 22,
                    color: colors.navy,
                    margin: '0 0 12px',
                  }}
                >
                  <span
                    style={{
                      fontFamily: fonts.mono,
                      fontSize: 12,
                      color: colors.teal,
                      marginRight: 12,
                    }}
                  >
                    0{i + 1}
                  </span>
                  {sec.title}
                </h3>
                <p
                  style={{
                    fontSize: 16,
                    color: colors.text,
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {sec.body}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      {cta && (
        <section style={{ padding: '40px 32px' }}>
          <div
            style={{
              maxWidth: 760,
              margin: '0 auto',
              background: colors.navy,
              color: '#fff',
              borderRadius: 14,
              padding: '32px 28px',
            }}
          >
            <h2
              style={{
                fontFamily: fonts.heading,
                fontWeight: 700,
                fontSize: 24,
                margin: '0 0 12px',
              }}
            >
              {cta.title}
            </h2>
            <p
              style={{
                fontSize: 15,
                lineHeight: 1.65,
                margin: '0 0 20px',
                color: 'rgba(255,255,255,0.85)',
              }}
            >
              {cta.body}
            </p>
            <Link
              href={cta.primaryHref}
              style={{
                display: 'inline-block',
                background: colors.gold,
                color: '#fff',
                padding: '12px 22px',
                borderRadius: 8,
                fontFamily: fonts.heading,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: 'none',
              }}
            >
              {cta.primary} →
            </Link>
          </div>
        </section>
      )}

      {/* FAQs */}
      {faqs && faqs.length > 0 && (
        <section style={{ padding: '48px 32px 64px' }}>
          <div style={{ maxWidth: 760, margin: '0 auto' }}>
            <h2
              style={{
                fontFamily: fonts.heading,
                fontWeight: 700,
                fontSize: 24,
                color: colors.navy,
                margin: '0 0 20px',
              }}
            >
              Frequently asked
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {faqs.map((f, i) => (
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
                    {f.q}
                  </summary>
                  <p
                    style={{
                      margin: '10px 0 0',
                      fontSize: 15,
                      color: colors.text,
                      lineHeight: 1.65,
                    }}
                  >
                    {f.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
