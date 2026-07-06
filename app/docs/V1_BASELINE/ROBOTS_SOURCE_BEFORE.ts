import type { MetadataRoute } from 'next';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://toprates.ca';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/api/',
          '/_next/',
          '/admin/',
          '/studio',
          '/studio/',
          '/get-quotes',
          '/coming-soon',
        ],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
