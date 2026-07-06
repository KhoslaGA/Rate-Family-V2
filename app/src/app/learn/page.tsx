import type { Metadata } from 'next';
import Link from 'next/link';
import { Bo } from '@/components/brand/Bo';
import { Icon, type IconName } from '@/components/brand/Icon';
import { colors, fonts } from '@/styles/tokens';

export const metadata: Metadata = {
  title: 'Learn — Plain-English Canadian insurance | TopRates.ca',
  description:
    'Plain-English guides on Canadian insurance — auto, home, life, business, travel. Independent Canadian insurance education. Operated by Webhub4u Inc.',
  alternates: { canonical: '/learn' },
};

const PILLARS: { slug: string; title: string; icon: IconName; desc: string; href: string; live?: boolean }[] = [
  { slug: 'auto', title: 'Auto insurance', icon: 'car', desc: "Ontario-first. The 2026 reform, what affects your rate, what to ask before you switch.", href: '/auto-insurance', live: true },
  { slug: 'home', title: 'Home insurance', icon: 'home', desc: "House, condo, tenant. What's actually covered. What's not. And why it matters.", href: '/home-insurance', live: true },
  { slug: 'life', title: 'Life insurance', icon: 'leaf', desc: 'Term, whole, universal. The difference, who needs which, and the questions worth asking.', href: '/life-insurance', live: true },
  { slug: 'business', title: 'Business insurance', icon: 'shield', desc: 'Liability, property, errors & omissions. The basics for every Canadian small business.', href: '/business-insurance', live: true },
  { slug: 'travel', title: 'Travel insurance', icon: 'plane', desc: 'Single-trip, multi-trip, snowbird. What the airline covers (almost nothing) and what you need.', href: '/travel-insurance', live: true },
];

export default function LearnHubPage() {
  return (
    <main>
      {/* HERO */}
      <section style={{ background: colors.cream, padding: '72px 24px' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', textAlign: 'center' }}>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 11,
              letterSpacing: 2,
              color: colors.teal,
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: 12,
            }}
          >
            INDEPENDENT CANADIAN INSURANCE EDUCATION
          </div>
          <h1
            style={{
              fontFamily: fonts.heading,
              fontWeight: 900,
              fontSize: 48,
              color: colors.navy,
              margin: '0 0 16px',
              letterSpacing: '-1.4px',
              lineHeight: 1.1,
            }}
          >
            Insurance, in plain English.
          </h1>
          <p
            style={{
              fontFamily: fonts.heading,
              fontSize: 18,
              color: colors.muted,
              maxWidth: 680,
              margin: '0 auto',
              lineHeight: 1.55,
            }}
          >
            Every line of insurance, every coverage, every confusing term. Written by someone who actually reads the policy. Twice.
          </p>
        </div>
      </section>

      {/* PILLAR GRID */}
      <section style={{ padding: '72px 24px', background: colors.paper }}>
        <div style={{ maxWidth: 1080, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: 20,
            }}
          >
            {PILLARS.map((p) => (
              <Link
                key={p.slug}
                href={p.href}
                style={{
                  display: 'block',
                  padding: '28px 24px',
                  background: colors.paper,
                  border: `1px solid ${colors.borderSoft}`,
                  borderRadius: 16,
                  textDecoration: 'none',
                  color: colors.navy,
                  transition: 'all 0.2s',
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 12,
                    background: 'rgba(10,126,140,0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 16,
                  }}
                >
                  <Icon name={p.icon} size={22} color={colors.teal} />
                </div>
                <h2
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 800,
                    fontSize: 20,
                    color: colors.navy,
                    margin: '0 0 8px',
                  }}
                >
                  {p.title}
                </h2>
                <p
                  style={{
                    fontFamily: fonts.heading,
                    fontSize: 14,
                    color: colors.muted,
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  {p.desc}
                </p>
                <div
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 700,
                    color: colors.teal,
                    marginTop: 16,
                    fontSize: 13,
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                  }}
                >
                  Read the guides <Icon name="arrowRight" size={15} color="#F2B441" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BO + NEWSLETTER PROMPT */}
      <section style={{ padding: '64px 24px', background: colors.cream }}>
        <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
          <Bo size={120} pose="clipboard" />
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 900,
              fontSize: 32,
              color: colors.navy,
              margin: '20px 0 12px',
              letterSpacing: '-0.8px',
            }}
          >
            New guides, every other week.
          </h2>
          <p style={{ fontFamily: fonts.heading, fontSize: 16, color: colors.muted, marginBottom: 24 }}>
            We&rsquo;re writing toward the RIBO-registered launch. Subscribe so you&rsquo;re there when quotes go live.
          </p>
          <Link
            href="/#newsletter"
            className="cta-btn"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '12px 26px',
              background: colors.teal,
              color: '#fff',
              borderRadius: 999,
              fontFamily: fonts.heading,
              fontWeight: 800,
              textDecoration: 'none',
              fontSize: 15,
            }}
          >
            Subscribe <Icon name="arrowRight" size={16} color="#F2B441" />
          </Link>
        </div>
      </section>
    </main>
  );
}
