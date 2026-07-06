import { Metadata } from 'next';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  robots?: string;
  authorName?: string;
  publishedDate?: string;
  modifiedDate?: string;
}

/**
 * Generate metadata for a page
 * Use this function in your page.tsx layout.tsx files
 *
 * @example
 * export const metadata = generateSEO({
 *   title: 'Auto Insurance in Toronto',
 *   description: 'Find affordable auto insurance quotes...',
 *   keywords: ['auto insurance', 'Toronto'],
 * });
 */
export function generateSEO({
  title,
  description,
  keywords,
  ogImage,
  ogType = 'website',
  canonicalUrl,
  robots = 'index, follow',
  authorName,
  publishedDate,
  modifiedDate,
}: SEOProps): Metadata {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://toprates.ca';
  const fullTitle = title.includes('|') ? title : `${title} | Toprates.ca`;
  const finalOgImage = ogImage || `${siteUrl}/og-image.png`;
  const finalCanonicalUrl = canonicalUrl || siteUrl;

  return {
    title: fullTitle,
    description,
    keywords: keywords ? [...keywords, 'insurance', 'Canada'] : ['insurance', 'Canada'],
    robots,
    authors: authorName ? [{ name: authorName }] : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url: finalCanonicalUrl,
      siteName: 'Toprates.ca',
      images: [
        {
          url: finalOgImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: ogType as 'website' | 'article',
      locale: 'en_CA',
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [finalOgImage],
    },
    alternates: {
      canonical: finalCanonicalUrl,
    },
    ...(publishedDate && {
      other: {
        'article:published_time': publishedDate,
        ...(modifiedDate && {
          'article:modified_time': modifiedDate,
        }),
      },
    }),
  };
}

/**
 * Generate JSON-LD schema for structured data
 * Use in your page components or layout
 *
 * @example
 * <script
 *   type="application/ld+json"
 *   dangerouslySetInnerHTML={{
 *     __html: JSON.stringify(generateOrganizationSchema()),
 *   }}
 * />
 */
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Toprates.ca',
    url: 'https://toprates.ca',
    logo: 'https://toprates.ca/logo.png',
    description: 'Canadian insurance brokerage offering competitive insurance quotes',
    sameAs: [
      'https://facebook.com/toprates.ca',
      'https://twitter.com/toprates',
      'https://linkedin.com/company/toprates',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Customer Service',
      email: 'contact@toprates.ca',
    },
  };
}

/**
 * Generate JSON-LD schema for a breadcrumb navigation
 */
export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Generate JSON-LD schema for a blog post
 */
export function generateArticleSchema({
  title,
  description,
  imageUrl,
  datePublished,
  dateModified,
  authorName,
  authorUrl,
}: {
  title: string;
  description: string;
  imageUrl: string;
  datePublished: string;
  dateModified?: string;
  authorName: string;
  authorUrl?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: title,
    description,
    image: imageUrl,
    datePublished,
    dateModified: dateModified || datePublished,
    author: {
      '@type': 'Person',
      name: authorName,
      ...(authorUrl && { url: authorUrl }),
    },
  };
}

/**
 * Generate JSON-LD schema for FAQs
 */
export function generateFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

/**
 * Generate JSON-LD schema for local business
 */
export function generateLocalBusinessSchema({
  name,
  description,
  address,
  phone,
  email,
  hours,
}: {
  name: string;
  description: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
  };
  phone: string;
  email: string;
  hours?: {
    day: string;
    opens: string;
    closes: string;
  }[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name,
    description,
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.streetAddress,
      addressLocality: address.addressLocality,
      addressRegion: address.addressRegion,
      postalCode: address.postalCode,
      addressCountry: 'CA',
    },
    telephone: phone,
    email,
    ...(hours && {
      openingHoursSpecification: hours.map((hour) => ({
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: hour.day,
        opens: hour.opens,
        closes: hour.closes,
      })),
    }),
  };
}
