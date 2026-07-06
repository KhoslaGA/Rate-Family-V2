/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
  compress: true,
  productionBrowserSourceMaps: false,
  headers: async () => {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
        ],
      },
    ];
  },
  redirects: async () => {
    return [
      // Renamed pillar — old URL is still discoverable from backlinks.
      {
        source: '/reform-2026',
        destination: '/blog/ontario-auto-reform-2026-guide',
        permanent: true,
      },

      // Credit-card category sub-pages were linked from /credit-cards
      // before being removed (commit 9b4647d). Google had already crawled
      // the dead links. Redirect to the parent until the sub-pages exist.
      { source: '/credit-cards/balance-transfer', destination: '/credit-cards', permanent: true },
      { source: '/credit-cards/student', destination: '/credit-cards', permanent: true },
      { source: '/credit-cards/business', destination: '/credit-cards', permanent: true },
      { source: '/credit-cards/building-credit', destination: '/credit-cards', permanent: true },

      // Stale blog URL discovered by Googlebot — never shipped on this
      // site. Send to the broader Ontario auto landing page, which is
      // closer to the intent ("lowest premium car insurance ontario")
      // than the reform-specific pillar.
      {
        source: '/blog/lowest-premium-car-insurance-ontario-2026',
        destination: '/auto-insurance',
        permanent: true,
      },

      // ── Sibling-domain flip redirects ────────────────────────────────────
      // When liferate/termrates/healthrate.ca move off the old rates-family
      // static project onto this app, their only non-home static URLs
      // (/XxxRate = a homepage alias, /XxxRate-Blog = a thin blog; both also
      // served as *.html) would 404. These 301s (308 permanent, SEO-equal)
      // send them to the closest live equivalent. Each is HOST-SCOPED via
      // `has: host` so it fires ONLY on its own domain — toprates.ca is
      // untouched (toprates.ca/LifeRate still 404s, exactly as today).
      // NOTE: harmless (no-op) until the domains actually serve this app.

      // liferate.ca → LifeRate landing + blog (same host)
      { source: '/LifeRate', has: [{ type: 'host', value: '(www\\.)?liferate\\.ca' }], destination: '/life-insurance', permanent: true },
      { source: '/LifeRate.html', has: [{ type: 'host', value: '(www\\.)?liferate\\.ca' }], destination: '/life-insurance', permanent: true },
      { source: '/LifeRate-Blog', has: [{ type: 'host', value: '(www\\.)?liferate\\.ca' }], destination: '/blog', permanent: true },
      { source: '/LifeRate-Blog.html', has: [{ type: 'host', value: '(www\\.)?liferate\\.ca' }], destination: '/blog', permanent: true },

      // healthrate.ca → health landing + guides hub (same host)
      { source: '/HealthRate', has: [{ type: 'host', value: '(www\\.)?healthrate\\.ca' }], destination: '/health-insurance', permanent: true },
      { source: '/HealthRate.html', has: [{ type: 'host', value: '(www\\.)?healthrate\\.ca' }], destination: '/health-insurance', permanent: true },
      { source: '/HealthRate-Blog', has: [{ type: 'host', value: '(www\\.)?healthrate\\.ca' }], destination: '/health-insurance/guides', permanent: true },
      { source: '/HealthRate-Blog.html', has: [{ type: 'host', value: '(www\\.)?healthrate\\.ca' }], destination: '/health-insurance/guides', permanent: true },

      // termrates.ca → CROSS-DOMAIN to LifeRate: the old TermRates was
      // term-life, and that topic now lives on LifeRate (canon: TermRates =
      // mortgage). The redirect follows the topic to its new owner domain,
      // NOT to the new mortgage TermRates. (termrates.ca/ homepage is left
      // alone — it becomes the new mortgage home.)
      { source: '/TermRates', has: [{ type: 'host', value: '(www\\.)?termrates\\.ca' }], destination: 'https://liferate.ca/life-insurance', permanent: true },
      { source: '/TermRates.html', has: [{ type: 'host', value: '(www\\.)?termrates\\.ca' }], destination: 'https://liferate.ca/life-insurance', permanent: true },
      { source: '/TermRates-Blog', has: [{ type: 'host', value: '(www\\.)?termrates\\.ca' }], destination: 'https://liferate.ca/blog', permanent: true },
      { source: '/TermRates-Blog.html', has: [{ type: 'host', value: '(www\\.)?termrates\\.ca' }], destination: 'https://liferate.ca/blog', permanent: true },
    ];
  },
};

export default nextConfig;
