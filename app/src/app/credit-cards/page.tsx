/**
 * Credit cards landing — ported from /design/mockups/credit-cards.html (2026-05-11).
 *
 * Visual structure (cream/navy hero with floating credit-card stack, quick-match
 * form, category chips, FAQ, trust panel, contact form) is faithful to mockup.
 *
 * Compliance scrubs vs. mockup:
 *   - 6 fabricated product cards (TopRates Cash Back Plus, Maple Rewards Elite,
 *     SimpleLiving Card, Northern Low-Rate, Campus Cash, FreshStart Secured)
 *     replaced with the existing "Featured cards coming at launch" placeholder.
 *     We do not have issuer affiliate relationships yet; no real card data exists.
 *   - "Best credit cards in Canada right now" reframed to non-superlative copy.
 *   - "Editor's picks · April 2026" / "Updated weekly · How we score cards" kept
 *     as link to /credit-cards/methodology (stub) but no live scoring exists.
 *   - "2,400+ verified users" / "80+ Canadian credit cards" claims removed.
 *   - Footer "RIBO licensed broker (Ontario)" entity claim removed.
 *   - Preserved: existing DisclaimerBlock affiliate disclosure above the fold,
 *     existing ContactForm at bottom, /credit-cards/methodology link.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/contact/ContactForm';
import { DisclaimerBlock } from '@/components/disclaimers/DisclaimerBlock';
import { Icon } from '@/components/brand/Icon';
import { colors, fonts, layout } from '@/styles/tokens';
import { WebhubLink } from '@/components/legal/WebhubLink';
import CreditCardsContent from './_client/CreditCardsContent';
import CreditCardHub from '@/components/credit-cards/CreditCardHub';
import { cards, categories, issuers } from '@/data/creditCardsData';


export const metadata: Metadata = {
  title: 'How to Choose a Credit Card in Canada (2026) — TopRates.ca',
  description:
    'A plain-English guide to choosing a Canadian credit card in 2026 — cash back, travel rewards, no-fee, student, and new-to-Canada options explained, with no hype. Match a card to how you actually spend.',
  keywords:
    'credit cards Canada 2026, cash back, travel rewards, no annual fee, student credit card, new to Canada credit card, secured card, low interest',
  alternates: { canonical: '/credit-cards' },
};

const serifItalic: React.CSSProperties = {
  fontFamily: fonts.serif,
  fontStyle: 'italic',
  fontWeight: 500,
  color: '#2dd4bf',
};

const eyebrow: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: colors.teal,
  letterSpacing: 1.5,
  textTransform: 'uppercase',
  marginBottom: 6,
};

// Slugs MUST match `id` values in `categories` (src/data/creditCardsData.ts)
// because CreditCardHub validates ?category=<slug> against that array and
// silently falls back to "All" on a miss.
const CATEGORIES: { slug: string; label: string }[] = [
  { slug: '', label: 'All cards' },
  { slug: 'cash-back', label: 'Cash back' },
  { slug: 'travel', label: 'Travel rewards' },
  { slug: 'no-annual-fee', label: 'No annual fee' },
  { slug: 'low-interest', label: 'Low interest' },
  { slug: 'balance-transfer', label: 'Balance transfer' },
  { slug: 'student', label: 'Student' },
  { slug: 'business', label: 'Business' },
];

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: 'What’s the best credit card in Canada for 2026?',
    a: 'There isn’t one. The best card depends on whether you carry a balance, how much you spend and where, and whether you value cash, travel, or simplicity. This page helps you match a card to your situation rather than chasing a ranking.',
  },
  {
    q: 'Should I pay for a card with an annual fee?',
    a: 'Only if the rewards and perks you’ll actually use exceed the fee for your spending pattern. For many light spenders, a no-fee card wins.',
  },
  {
    q: 'I just moved to Canada — can I get a credit card with no credit history?',
    a: 'Yes. Several major banks offer newcomer cards that don’t require an established Canadian credit history.',
  },
  {
    q: 'Do rewards matter if I carry a balance?',
    a: 'No. Interest at ~20% will outweigh rewards of 1–4%. If you carry a balance, choose a low-interest card and ignore rewards.',
  },
  {
    q: 'How do I build credit from scratch?',
    a: 'A no-fee student card or a secured card, used responsibly and paid in full on time, is the standard path.',
  },
  {
    q: 'Will applying hurt my credit score?',
    a: 'Applying triggers a hard inquiry, which typically drops a credit score by 5–10 points and recovers within a few months. Browsing this page is not a credit check. Once we begin showing cards with affiliate links and you click through to an issuer to submit an application on their site, that issuer will pull your credit.',
  },
  {
    q: 'How does TopRates make money on credit cards?',
    a: 'When we begin showing real cards, we will earn affiliate compensation from some issuers if you are approved through our link. Compensation does not affect editorial coverage or category placement. The disclosure block at the top of this page is the canonical version of this answer.',
  },
  {
    q: 'Why aren’t there cards on this page yet?',
    a: 'We do not have issuer affiliate relationships signed yet. We prefer to leave this page free of placeholder cards rather than show fake names or unsubstantiated rewards rates. Real cards with real terms will appear when partnerships are in place.',
  },
  {
    q: 'When will the comparison launch?',
    a: 'Alongside the broader product platform launch. Editorial methodology is being written now; you can read the work-in-progress at /credit-cards/methodology.',
  },
];

// Decorative credit-card visual (purely illustrative, no real card data).
function MockCard({
  top,
  right,
  rotate,
  gradient,
}: {
  top: number;
  right: number;
  rotate: number;
  gradient: string;
}) {
  return (
    <div
      style={{
        position: 'absolute',
        top,
        right,
        width: 280,
        height: 178,
        borderRadius: 14,
        padding: 18,
        color: '#fff',
        fontFamily: fonts.heading,
        boxShadow: '0 16px 40px rgba(0,0,0,0.4)',
        background: gradient,
        transform: `rotate(${rotate}deg)`,
      }}
      aria-hidden="true"
    >
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontWeight: 600, fontSize: 12, opacity: 0.7 }}>Illustrative</span>
        <span style={{ fontSize: 10, opacity: 0.55 }}>example</span>
      </div>
      <div
        style={{
          width: 32,
          height: 24,
          background: 'linear-gradient(135deg, #c9a84a, #f4d77b)',
          borderRadius: 4,
          margin: '28px 0 14px',
        }}
      />
      <div
        style={{
          fontFamily: 'var(--font-sans), monospace',
          fontSize: 13,
          letterSpacing: 2,
          opacity: 0.85,
        }}
      >
        •••• •••• •••• ••••
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: 14,
          alignItems: 'flex-end',
        }}
      >
        <span style={{ fontSize: 11, fontWeight: 600 }}>EXAMPLE</span>
        <span style={{ fontSize: 14, fontStyle: 'italic', fontWeight: 700, opacity: 0.85 }}>
          card
        </span>
      </div>
    </div>
  );
}

export default function CreditCardsPage({
  searchParams,
}: {
  searchParams?: { category?: string };
}) {
  const activeSlug = searchParams?.category ?? '';
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.navyDark} 100%)`,
          padding: '60px 32px 80px',
          color: '#fff',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: -80,
            right: -80,
            width: 280,
            height: 280,
            borderRadius: '50%',
            background: 'rgba(180, 83, 9, 0.10)',
          }}
        />
        <div
          style={{
            maxWidth: layout.maxWidth,
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.4)', marginBottom: 16 }}>
            <Link href="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>
              Home
            </Link>{' '}
            &nbsp;/&nbsp; Credit Cards
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.1fr 1fr',
              gap: 56,
              alignItems: 'center',
            }}
          >
            <div>
              <h1
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 800,
                  fontSize: 42,
                  lineHeight: 1.12,
                  margin: '0 0 16px',
                  letterSpacing: '-0.5px',
                }}
              >
                Compare credit cards <span style={serifItalic}>for the way you spend.</span>
              </h1>
              <p
                style={{
                  fontSize: 17,
                  lineHeight: 1.55,
                  color: 'rgba(255,255,255,0.6)',
                  margin: '0 0 28px',
                  maxWidth: 480,
                }}
              >
                Browse Canadian credit cards by category. We&rsquo;re writing the methodology
                now and lining up issuer partnerships — when real cards appear here, they will
                be real cards with real terms, properly disclosed.
              </p>

              {/* Quick-match form (visual only — links to coming-soon) */}
              <div
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: 14,
                  padding: 18,
                }}
              >
                <div
                  style={{
                    fontSize: 11,
                    fontWeight: 700,
                    letterSpacing: 1,
                    color: 'rgba(255,255,255,0.45)',
                    textTransform: 'uppercase',
                    marginBottom: 10,
                  }}
                >
                  Get notified when matching is live
                </div>
                <Link
                  href="/coming-soon?product=credit-cards"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: colors.teal,
                    color: '#fff',
                    border: 'none',
                    borderRadius: 8,
                    padding: '12px 22px',
                    fontSize: 14,
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  Join the waitlist{' '}
                  <Icon name="arrowRight" size={15} color="#F2B441" />
                </Link>
              </div>
            </div>

            {/* Decorative card stack */}
            <div
              style={{ position: 'relative', height: 320 }}
              role="presentation"
              aria-hidden="true"
            >
              <MockCard
                top={0}
                right={60}
                rotate={-8}
                gradient={`linear-gradient(135deg, ${colors.teal} 0%, ${colors.tealDark} 100%)`}
              />
              <MockCard
                top={60}
                right={0}
                rotate={4}
                gradient="linear-gradient(135deg, #b45309 0%, #7c3a00 100%)"
              />
              <MockCard
                top={120}
                right={100}
                rotate={-2}
                gradient="linear-gradient(135deg, #2D2D2D 0%, #1a1a1a 100%)"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Affiliate disclosure — Tier 3 above the fold */}
      <DisclaimerBlock vertical="cards" />

      {/* Categories */}
      <section
        style={{
          background: colors.cream,
          padding: '22px 32px',
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div
          style={{
            maxWidth: layout.maxWidth,
            margin: '0 auto',
            display: 'flex',
            flexWrap: 'wrap',
            gap: 8,
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: 12, fontWeight: 700, color: colors.navy, marginRight: 6 }}>
            Browse by category:
          </span>
          {CATEGORIES.map((c) => {
            const isActive = c.slug === activeSlug;
            const href = c.slug ? `/credit-cards?category=${c.slug}` : '/credit-cards';
            const pillStyle: React.CSSProperties = {
              background: isActive ? colors.navy : '#fff',
              color: isActive ? '#fff' : colors.navy,
              border: `1px solid ${isActive ? colors.navy : colors.border}`,
              borderRadius: 18,
              padding: '7px 14px',
              fontSize: 12.5,
              fontWeight: 600,
              textDecoration: 'none',
              transition: 'all 0.15s ease',
            };
            return (
              <Link
                key={c.slug || 'all'}
                href={href}
                style={pillStyle}
                aria-current={isActive ? 'page' : undefined}
                scroll={false}
              >
                {c.label}
              </Link>
            );
          })}
        </div>
      </section>

      <CreditCardHub initialCards={cards} categories={categories} issuers={issuers} />


      {/* Rewards 101 explainer (replaces the 6-card grid) */}
      <section
        style={{
          background: colors.surface,
          padding: '56px 32px',
          borderTop: `1px solid ${colors.border}`,
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div style={{ maxWidth: layout.maxWidth, margin: '0 auto' }}>
          <div style={eyebrow}>How rewards work</div>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 28,
              color: colors.navy,
              margin: '6px 0 28px',
              letterSpacing: '-0.3px',
            }}
          >
            Cash back, points, travel — what the categories mean.
          </h2>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 16,
            }}
          >
            {[
              {
                title: 'Cash back',
                body: 'A percentage of every dollar spent returned as a statement credit or cheque. 1–4% depending on category and card tier. Simplest to value because the return is in dollars, not loyalty currency.',
              },
              {
                title: 'Points',
                body: 'Earn points per dollar spent, redeem for travel, merchandise, or statement credits. Value per point varies (typically 0.5¢–2¢) depending on redemption.',
              },
              {
                title: 'Travel rewards',
                body: 'Points tied to a specific airline or hotel program — Aeroplan, AIR MILES, Marriott Bonvoy. Higher-value redemptions for travellers; less flexible for everyone else.',
              },
            ].map((item) => (
              <div
                key={item.title}
                style={{
                  background: '#fff',
                  border: `1px solid ${colors.border}`,
                  borderRadius: 14,
                  padding: 24,
                }}
              >
                <h3
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 700,
                    fontSize: 18,
                    color: colors.navy,
                    margin: '0 0 10px',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: 14,
                    color: colors.muted,
                    lineHeight: 1.6,
                    margin: 0,
                  }}
                >
                  {item.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Long-form educational content */}
      <CreditCardsContent />

      {/* FAQ */}
      <section style={{ padding: '56px 32px' }}>
        <div
          style={{
            maxWidth: layout.maxWidth,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 56,
            alignItems: 'start',
          }}
        >
          <div>
            <div style={eyebrow}>FAQ</div>
            <h2
              style={{
                fontFamily: fonts.heading,
                fontWeight: 800,
                fontSize: 28,
                color: colors.navy,
                margin: '6px 0 0',
                lineHeight: 1.2,
                letterSpacing: '-0.3px',
                maxWidth: 320,
              }}
            >
              Common <span style={{ ...serifItalic, color: colors.teal }}>questions</span> we
              hear from card-shoppers.
            </h2>
          </div>
          <div>
            {FAQ_ITEMS.map((item, i) => (
              <details
                key={item.q}
                {...(i === 0 ? { open: true } : {})}
                style={{
                  borderTop: `1px solid ${colors.border}`,
                  padding: '18px 0',
                  ...(i === FAQ_ITEMS.length - 1
                    ? { borderBottom: `1px solid ${colors.border}` }
                    : {}),
                }}
              >
                <summary
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 700,
                    fontSize: 15,
                    color: colors.navy,
                    cursor: 'pointer',
                    listStyle: 'none',
                  }}
                >
                  {item.q}
                </summary>
                <p
                  style={{
                    fontSize: 13.5,
                    color: colors.muted,
                    lineHeight: 1.6,
                    padding: '10px 0 0',
                    margin: 0,
                    maxWidth: 560,
                  }}
                >
                  {item.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Trust */}
      <section
        style={{
          padding: '48px 32px',
          borderTop: `1px solid ${colors.border}`,
          background: '#fff',
        }}
      >
        <div
          style={{
            maxWidth: layout.maxWidth,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 32,
          }}
        >
          {[
            {
              h: 'No "best of" rigging',
              p: 'When real cards appear here, ranking will be driven by your inputs against published methodology — not by who pays the highest commission. Cards we earn no commission on still appear when they win on merit.',
            },
            {
              h: 'Methodology is public',
              p: 'Every category page links to the scoring methodology. The math is shown: weights, sources, and what we excluded. No black box.',
            },
            {
              h: 'Honest about scope',
              p: 'We cover Canadian-issued personal credit cards. Business cards and US-issued cards are out of scope at launch.',
            },
          ].map((t) => (
            <div key={t.h}>
              <h4
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 700,
                  fontSize: 15,
                  color: colors.navy,
                  margin: '0 0 8px',
                }}
              >
                {t.h}
              </h4>
              <p
                style={{
                  fontSize: 13,
                  color: colors.muted,
                  lineHeight: 1.55,
                  margin: 0,
                }}
              >
                {t.p}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact form */}
      <section
        style={{
          padding: '56px 32px',
          background: colors.surface,
          borderTop: `1px solid ${colors.border}`,
        }}
      >
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 28,
              color: colors.navy,
              margin: '0 0 8px',
            }}
          >
            Have a credit-card question?
          </h2>
          <p
            style={{
              fontSize: 15,
              color: colors.muted,
              lineHeight: 1.6,
              margin: '0 0 22px',
            }}
          >
            Send <WebhubLink /> a note and we&rsquo;ll be in touch within one business day.
          </p>
          <div
            style={{
              background: '#fff',
              border: `1px solid ${colors.border}`,
              borderRadius: 14,
              padding: 28,
            }}
          >
            <ContactForm defaultProduct="credit-cards" />
          </div>
        </div>
      </section>
    </main>
  );
}
