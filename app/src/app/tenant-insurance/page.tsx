import type { Metadata } from 'next';
import Link from 'next/link';
import PostalCodeHero from '@/components/cta/PostalCodeHero';
import { colors, fonts } from '@/styles/tokens';

export const metadata: Metadata = {
  title: 'Tenant Insurance Ontario — Plain-English Guide — TopRates.ca',
  description:
    'Plain-English Ontario tenant insurance education. What renters insurance covers, what most policies miss, and what to watch for in Ontario rentals.',
  alternates: { canonical: '/tenant-insurance' },
};

export default function TenantInsurancePage() {
  return (
    <main>
      <section style={{ background: `linear-gradient(135deg, ${colors.navy}, ${colors.navyDark})`, padding: '88px 24px 96px' }}>
        <PostalCodeHero product="tenant" theme="dark" />
      </section>

      <section style={{ background: colors.paper, padding: '64px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ fontFamily: fonts.heading, fontSize: 28, fontWeight: 700, color: colors.inkStrong, margin: '0 0 16px' }}>
            What tenant insurance covers
          </h2>
          <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.7, color: colors.ink, margin: '0 0 16px' }}>
            Renters insurance in Ontario typically covers your belongings, liability if someone&rsquo;s
            hurt in your unit, and additional living expenses if your unit becomes uninhabitable. It does
            not cover the building itself — that&rsquo;s the landlord&rsquo;s responsibility.
          </p>
          <p style={{ fontFamily: fonts.sans, fontSize: 17, lineHeight: 1.7, color: colors.ink, margin: 0 }}>
            More plain-English guides are publishing through 2026. Join our newsletter on the{' '}
            <Link href="/" style={{ color: colors.teal, textDecoration: 'underline' }}>homepage</Link>
            {' '}to get notified, or{' '}
            <Link href="/contact" style={{ color: colors.teal, textDecoration: 'underline' }}>contact us</Link>
            {' '}with questions.
          </p>
        </div>
      </section>
    </main>
  );
}
