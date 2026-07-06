'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { WebhubLink } from '@/components/legal/WebhubLink';
import { colors, fonts } from '@/styles/editorialTokens';
import { BrandLogo } from '@/components/brand/Logo';

/**
 * Footer — editorial register. Uses navy #0B2545 + gold #E0A227 +
 * Fraunces / Hanken Grotesk so the chrome matches the V2 landing's
 * stats band and newsletter sections.
 *
 * Compliance posture: MENTION, don't OVERSHOW. One bottom-row line
 * names the operator (Webhub4u) and the licensed party (KLC Group
 * Canada Inc., LLQP), then links to /legal for the full disclosure
 * text — instead of inlining 8 lines of regulatory copy where every
 * visitor sees them on every page.
 */
const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: 'Learn',
    links: [
      { label: 'Auto insurance', href: '/auto-insurance' },
      { label: 'Home insurance', href: '/home-insurance' },
      { label: 'Life insurance', href: '/life-insurance' },
      { label: 'Business insurance', href: '/business-insurance' },
      { label: 'Travel insurance', href: '/travel-insurance' },
      { label: 'All guides', href: '/learn' },
    ],
  },
  {
    title: 'Tools',
    links: [
      { label: 'Glossary', href: '/glossary' },
      { label: 'Mortgages', href: '/mortgages' },
      { label: 'Credit cards', href: '/credit-cards' },
      { label: 'Blog', href: '/blog' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '/about' },
      { label: "What's coming", href: '/whats-coming' },
      { label: 'Contact', href: '/contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Legal & disclosures', href: '/legal' },
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Affiliate disclosure', href: '/disclosures' },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname?.startsWith('/studio')) return null;

  const linkBase: React.CSSProperties = {
    fontFamily: fonts.body,
    fontSize: 14,
    color: 'rgba(255,255,255,0.72)',
    textDecoration: 'none',
    transition: 'color 0.15s',
  };

  return (
    <footer
      style={{
        background: colors.navy,
        padding: '64px 0 28px',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: 1240,
          margin: '0 auto',
          paddingInline: 'clamp(20px, 4vw, 40px)',
          boxSizing: 'border-box',
        }}
      >
        {/* Top row — brand + columns */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(220px, 1.5fr) repeat(4, minmax(0, 1fr))',
            gap: 40,
            marginBottom: 48,
          }}
          className="footer-grid"
        >
          {/* Brand block */}
          <div>
            <div style={{ marginBottom: 16 }}>
              <BrandLogo height={28} variant="dark" />
            </div>
            <p
              style={{
                fontFamily: fonts.heading,
                fontSize: 17,
                fontWeight: 500,
                color: '#fff',
                margin: '0 0 10px',
                lineHeight: 1.35,
                maxWidth: 320,
              }}
            >
              Insurance, mortgages and credit cards{' '}
              <span style={{ color: colors.accent, fontStyle: 'italic' }}>in plain English.</span>
            </p>
            <p
              style={{
                fontFamily: fonts.body,
                fontSize: 13,
                color: 'rgba(255,255,255,0.55)',
                lineHeight: 1.55,
                margin: 0,
                maxWidth: 320,
              }}
            >
              Independent Canadian insurance education.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.title}>
              <div
                style={{
                  fontFamily: fonts.sans,
                  fontSize: 11,
                  fontWeight: 700,
                  color: colors.accent,
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  marginBottom: 18,
                }}
              >
                {col.title}
              </div>
              {col.links.map((l) => (
                <div key={l.label} style={{ marginBottom: 10 }}>
                  <Link
                    href={l.href}
                    style={linkBase}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.color = 'rgba(255,255,255,0.72)')
                    }
                  >
                    {l.label}
                  </Link>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom row — one-line compliance + copyright */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.10)',
            paddingTop: 22,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <p
            style={{
              fontFamily: fonts.body,
              fontSize: 12.5,
              color: 'rgba(255,255,255,0.55)',
              margin: 0,
              lineHeight: 1.55,
              maxWidth: 820,
            }}
          >
            TopRates.ca is operated by <WebhubLink />, a Canadian technology company. Webhub4u Inc.
            is not a licensed insurance broker, mortgage brokerage, or financial advisor. Auto, home,
            and business insurance content on this site is educational only and is not an offer to
            sell or arrange insurance. Life insurance inquiries are referred to KLC Group Canada Inc.,
            a firm licensed for life insurance (LLQP) by the Financial Services Regulatory Authority
            of Ontario (FSRA). Credit card and other product listings may earn us a commission (see{' '}
            <Link href="/how-we-make-money" style={{ color: colors.accent, textDecoration: 'underline', textUnderlineOffset: 2 }}>
              How we make money
            </Link>
            ). Information is provided &ldquo;as is&rdquo;; verify all rates, terms, and eligibility
            with the provider before you apply.{' '}
            <Link
              href="/legal"
              style={{
                color: colors.accent,
                textDecoration: 'underline',
                textUnderlineOffset: 2,
              }}
            >
              Full disclosure →
            </Link>
          </p>
          <span
            style={{
              fontFamily: fonts.sans,
              fontSize: 12,
              color: 'rgba(255,255,255,0.40)',
              whiteSpace: 'nowrap',
            }}
          >
            © 2026 TopRates.ca
          </span>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr)) !important;
            gap: 32px !important;
          }
          .footer-grid > div:first-child {
            grid-column: 1 / -1;
            margin-bottom: 8px;
          }
        }
        @media (max-width: 560px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
