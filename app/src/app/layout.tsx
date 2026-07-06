import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { headers } from 'next/headers'
import { Poppins, Inter, Outfit, JetBrains_Mono, Fraunces, Hanken_Grotesk, Newsreader, Public_Sans, Space_Grotesk, IBM_Plex_Sans, IBM_Plex_Mono, Plus_Jakarta_Sans } from 'next/font/google'
import '../styles/globals.css'
import EditorialMegaNav from '../components/editorial/EditorialMegaNav'
import Footer from '../components/layout/Footer'
import LrNav from '../components/liferate/LrNav'
import LrFooter from '../components/liferate/LrFooter'
import TrNav from '../components/termrates/TrNav'
import TrFooter from '../components/termrates/TrFooter'
import HrNav from '../components/healthrate/HrNav'
import HrFooter from '../components/healthrate/HrFooter'
import {
  DEFAULT_LOCALE,
  HTML_LANG,
  isLocale,
  isRTL,
  type Locale,
} from '../i18n/config'
import {
  DEFAULT_SITE,
  SITE_CONFIG,
  isSite,
  type Site,
} from '../site/config'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-sans',
  display: 'swap',
})

// Outfit + JetBrains Mono are loaded for the homepage prototype design
// only (scoped via homeTokens.ts → @/components/home/*). Other pages keep
// using --font-display (Poppins) and --font-sans (Inter).
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['400', '500', '700', '800', '900'],
  variable: '--font-outfit',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  variable: '--font-jet-mono',
  display: 'swap',
})

// Fraunces + Hanken Grotesk power the editorial homepage redesign
// (scoped via editorialTokens.ts). Other pages keep their current fonts.
const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
})

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-hanken',
  display: 'swap',
})

// LifeRate bespoke skin (DESIGN-TOKEN-CONTRACT.md): Newsreader (warm literary
// serif display) + Public Sans (body). Referenced only under
// html[data-site="liferate"] in globals.css — other hosts keep their fonts.
const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-newsreader',
  display: 'swap',
})

const publicSans = Public_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-public-sans',
  display: 'swap',
})

// TermRates bespoke skin: Space Grotesk (grotesque display) + IBM Plex Sans
// (humanist body) + IBM Plex Mono (tabular rate data). Referenced only under
// html[data-site="termrates"] in termrates.css — other hosts keep their fonts.
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex-sans',
  display: 'swap',
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-ibm-plex-mono',
  display: 'swap',
})

// HealthRate bespoke skin: Plus Jakarta Sans (warm, rounded geometric — "the
// welcoming one") for display/wordmark. Body reuses Inter (--font-inter), mono
// reuses JetBrains (--font-jet-mono), the figure quote reuses Newsreader.
// Referenced only under html[data-site="healthrate"] in healthrate.css.
const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

const GOOGLE_VERIFICATION = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN
const PLAUSIBLE_SRC =
  process.env.NEXT_PUBLIC_PLAUSIBLE_SRC ?? 'https://plausible.io/js/script.js'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  // Allow zoom — never set maximumScale or user-scalable=no (accessibility).
}

/** Resolve the active site from the x-site request header (set in middleware). */
function currentSite(): Site {
  const s = headers().get('x-site')
  return isSite(s) ? s : DEFAULT_SITE
}

/**
 * Per-site root metadata. `metadataBase` switches to the active host so every
 * page's relative canonical/OG URL resolves against the correct domain. The
 * homepage canonicalizes to itself on each host; owned editorial routes adopt
 * buildSiteHreflang() (src/lib/seo/canonical.ts) per page.
 */
export function generateMetadata(): Metadata {
  const key = currentSite()
  const site = SITE_CONFIG[key]
  const base: Metadata = {
    metadataBase: new URL(`https://${site.host}`),
    // Per-host favicon + apple-touch-icon. The global app/icon.svg +
    // app/apple-icon.png file conventions were removed because they served the
    // TopRates mark to EVERY host; these resolve per site instead (toprates.svg
    // is byte-identical to the old TopRates mark, so the hub is visually unchanged).
    icons: {
      icon: [{ url: `/favicons/${key}.svg`, type: 'image/svg+xml' }],
      apple: [{ url: `/favicons/${key}-apple.png` }],
    },
    keywords:
      'insurance, auto insurance, home insurance, life insurance, mortgage rates, credit cards, Canadian insurance broker, Ontario auto reform',
    authors: [{ name: site.name }],
    creator: site.name,
    robots: 'index, follow',
    alternates: {
      canonical: '/',
    },
    ...(GOOGLE_VERIFICATION && {
      verification: { google: GOOGLE_VERIFICATION },
    }),
  }
  // TopRates (the hub) keeps its live layout metadata VERBATIM so its SEO is
  // untouched — including the distinct (shorter) OG/Twitter description copy
  // that layout-inheriting routes such as /withdraw-consent pick up. Using
  // SITE_CONFIG here would silently shorten those, so the hub is special-cased.
  if (key === 'toprates') {
    return {
      ...base,
      title: 'TopRates.ca — Insurance, in plain English',
      description:
        'Independent Canadian insurance education. Plain-English guides on auto, home, life, business, and travel insurance. Talk to a LLQP-licensed advisor at KLC Group Canada Inc. for life insurance. Operated by Webhub4u Inc.',
      openGraph: {
        title: 'TopRates.ca — Insurance, in plain English',
        description:
          'Independent Canadian insurance education. Talk to a LLQP-licensed advisor at KLC Group Canada Inc.',
        type: 'website',
      },
    }
  }
  return {
    ...base,
    title: site.title,
    description: site.description,
    openGraph: {
      title: site.title,
      description: site.description,
      type: 'website',
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Locale is resolved per request by middleware.ts and forwarded as
  // an x-locale header. Falls back to the default locale on any path
  // middleware doesn't run on.
  const hdrs = headers()
  const headerLocale = hdrs.get('x-locale')
  const locale: Locale = isLocale(headerLocale) ? headerLocale : DEFAULT_LOCALE

  // Active tenant (site) for this request. `data-site` lets CSS swap the
  // per-site accent; the inline `--site-accent` is the authoritative value
  // (the [data-site] rules in globals.css are the static fallback).
  const headerSite = hdrs.get('x-site')
  const siteKey: Site = isSite(headerSite) ? headerSite : DEFAULT_SITE
  const accent = SITE_CONFIG[siteKey].accent

  return (
    <html
      lang={HTML_LANG[locale]}
      dir={isRTL(locale) ? 'rtl' : 'ltr'}
      data-site={siteKey}
      style={{ ['--site-accent' as string]: accent }}
      className={`${poppins.variable} ${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} ${fraunces.variable} ${hankenGrotesk.variable} ${newsreader.variable} ${publicSans.variable} ${spaceGrotesk.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable} ${plusJakarta.variable}`}
    >
      <head>
        {/* RSS is TopRates-only — the spokes have no feed, so don't advertise
            the TopRates.ca RSS on liferate/termrates/healthrate. */}
        {siteKey === 'toprates' && (
          <link rel="alternate" type="application/rss+xml" title="TopRates.ca RSS" href="/rss.xml" />
        )}
        {PLAUSIBLE_DOMAIN && (
          <Script
            defer
            data-domain={PLAUSIBLE_DOMAIN}
            src={PLAUSIBLE_SRC}
            strategy="afterInteractive"
          />
        )}
      </head>
      <body className="flex flex-col min-h-screen">
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RFFETR0C27"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RFFETR0C27', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {siteKey === 'liferate' ? <LrNav /> : siteKey === 'termrates' ? <TrNav /> : siteKey === 'healthrate' ? <HrNav /> : <EditorialMegaNav />}
        <main className="flex-grow">{children}</main>
        {siteKey === 'liferate' ? <LrFooter /> : siteKey === 'termrates' ? <TrFooter /> : siteKey === 'healthrate' ? <HrFooter /> : <Footer />}
      </body>
    </html>
  )
}
