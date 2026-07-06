/**
 * /<locale>/newcomers/ — non-English variants.
 *
 * Phase 1: each locale renders a placeholder card directing readers to
 * the English version while translations are being authored. Page still
 * emits full hreflang alternates so Google can correctly cluster the
 * five locale variants.
 *
 * To replace the placeholder with real translations:
 *   1. Fill out the `hero`, `intro`, `sections`, `cta`, `faqs` keys in
 *      the relevant dictionaries/<locale>.json (mirror en.json shape).
 *   2. Render the same blocks the English page does — or factor those
 *      blocks into a shared component if the design holds across all
 *      five locales (RTL pass needed for Urdu).
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { colors, fonts, layout } from '@/styles/tokens';
import {
  DEFAULT_LOCALE,
  PREFIXED_LOCALES,
  isLocale,
  isRTL,
  type Locale,
} from '@/i18n/config';
import { getDictionary } from '@/i18n/getDictionary';
import { buildHreflang } from '@/lib/seo/hreflang';

interface RouteParams {
  params: { locale: string };
}

export function generateStaticParams() {
  return PREFIXED_LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: RouteParams): Promise<Metadata> {
  if (!isLocale(params.locale) || params.locale === DEFAULT_LOCALE) {
    return { title: 'Not found' };
  }
  const dict = await getDictionary(params.locale);
  return {
    title: dict.newcomers.meta.title,
    description: dict.newcomers.meta.description,
    alternates: buildHreflang('/newcomers', params.locale),
  };
}

export default async function LocaleNewcomersPage({ params }: RouteParams) {
  if (!isLocale(params.locale) || params.locale === DEFAULT_LOCALE) {
    return notFound();
  }

  const locale: Locale = params.locale;
  const { newcomers } = await getDictionary(locale);
  const placeholder = newcomers.placeholder;

  if (!placeholder) {
    // Locale's dictionary was upgraded past placeholder but the route
    // wasn't updated to render the full sections yet — fall back to a
    // safe link out.
    return (
      <main style={{ padding: '64px 32px', textAlign: 'center' }}>
        <p style={{ color: colors.muted, marginBottom: 24 }}>
          Translation in progress.
        </p>
        <Link
          href="/newcomers"
          style={{ color: colors.teal, fontWeight: 700 }}
        >
          Read the English version →
        </Link>
      </main>
    );
  }

  const rtl = isRTL(locale);

  return (
    <main>
      <section
        style={{
          background: colors.cream,
          padding: '64px 32px 48px',
          borderBottom: `1px solid ${colors.border}`,
          textAlign: rtl ? 'right' : 'left',
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
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
            {placeholder.eyebrow}
          </div>
          <h1
            style={{
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 40,
              color: colors.navy,
              margin: '0 0 18px',
              lineHeight: 1.15,
            }}
          >
            {placeholder.title}
          </h1>
          <p
            style={{
              fontSize: 17,
              color: colors.muted,
              lineHeight: 1.7,
              margin: '0 0 28px',
            }}
          >
            {placeholder.body}
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: 12,
              justifyContent: rtl ? 'flex-end' : 'flex-start',
            }}
          >
            <Link
              href="/newcomers"
              style={{
                display: 'inline-block',
                background: colors.teal,
                color: '#fff',
                padding: '12px 22px',
                borderRadius: 8,
                fontFamily: fonts.heading,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: 'none',
              }}
            >
              {placeholder.ctaEnglish}
            </Link>
            <Link
              href="/contact?topic=newcomers"
              style={{
                display: 'inline-block',
                background: 'transparent',
                color: colors.navy,
                padding: '12px 22px',
                borderRadius: 8,
                fontFamily: fonts.heading,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: 'none',
                border: `1px solid ${colors.borderSoft}`,
              }}
            >
              {placeholder.ctaContact}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

// Use the layout's segment dimensions; no special styles needed beyond
// what the root layout already provides (html lang/dir comes from
// middleware via headers).
export const dynamicParams = false;
