/**
 * News & Resources hub — ported from /design/mockups/news-hub.html (2026-05-11).
 *
 * Editorial home: featured grid (large reform card + 4 secondary), 3 category
 * rows (pillar guides, interactive tools, news/company), newsletter strip,
 * latest posts.
 *
 * Compliance scrubs vs. mockup:
 *   - "1.2M readers/year" / "142 guides" / "4 interactive tools" hero counters
 *     replaced with non-specific framing.
 *   - "Featured article" byline "M. Patel, RIBO #84211" personal name dropped.
 *   - "Reviewed by R. Singh, FCIA" personal-name attribution dropped.
 *   - "Q3 2026 Rate Index Report · Published Apr 28 · 22 pages" specific
 *     metadata replaced with link to /rate-index stub.
 *   - "38,200 Ontario readers" newsletter subscriber count dropped.
 *   - Latest-posts list kept as 3 illustrative placeholders, not dated.
 *   - Footer entity + RIBO claims dropped.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import { Icon } from '@/components/brand/Icon';
import { colors, fonts, layout } from '@/styles/tokens';

export const metadata: Metadata = {
  title: 'News & Resources | TopRates.ca',
  description:
    'Pillar guides, interactive tools, and editorial coverage of Canadian insurance, credit cards, and mortgages from TopRates.ca.',
  alternates: { canonical: '/news-hub' },
};

const serifItalic: React.CSSProperties = {
  fontFamily: fonts.serif,
  fontStyle: 'italic',
  fontWeight: 500,
  color: colors.teal,
};

const eyebrow: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: colors.teal,
  letterSpacing: 1.5,
  textTransform: 'uppercase',
};

interface CategoryItem {
  href: string;
  title: string;
  desc: string;
  badge?: 'updated' | 'new' | 'soon';
}

const PILLAR_GUIDES: CategoryItem[] = [
  { href: '/auto-insurance', title: '2026 Reform Guide', desc: 'What changes on July 1', badge: 'updated' },
  { href: '/auto-insurance', title: 'Ontario Auto 101', desc: 'Beginner walkthrough' },
  { href: '/home-insurance', title: 'Home Insurance 101', desc: 'Coverage basics' },
  { href: '/credit-cards', title: 'Credit Card 101', desc: 'Rewards & fees explained' },
  { href: '/learn', title: 'Lowering your premium', desc: 'What actually moves the needle', badge: 'new' },
  { href: '/glossary', title: 'Glossary of Terms', desc: 'Insurance jargon decoded' },
];

const INTERACTIVE_TOOLS: CategoryItem[] = [
  { href: '/savings-calculator', title: 'Savings calculator', desc: 'Methodology preview', badge: 'soon' },
  { href: '/auto-insurance', title: 'Reform self-assessment', desc: 'Which benefits do you need', badge: 'soon' },
  { href: '/credit-cards', title: 'Card match quiz', desc: 'A few questions, our shortlist', badge: 'soon' },
  { href: '/home-insurance', title: 'Bundle estimator', desc: 'Home + auto, side by side', badge: 'soon' },
];

const NEWS_COMPANY: CategoryItem[] = [
  { href: '/learn', title: 'Latest articles', desc: 'Guides and news, sorted by date' },
  { href: '/rate-index', title: 'Rate Index report', desc: 'Quarterly market data', badge: 'soon' },
  { href: '/about', title: 'About TopRates.ca', desc: 'Story, mission, methodology' },
  { href: '/for-brokers', title: 'For Brokers', desc: 'Partner program · 2027' },
  { href: '/legal', title: 'Legal & disclosures', desc: 'Full corporate disclosure' },
  { href: '/contact', title: 'Contact us', desc: 'Talk to a real human' },
];

function CategoryRow({
  eyebrowNum,
  title,
  titleAccent,
  desc,
  items,
}: {
  eyebrowNum: string;
  title: string;
  titleAccent: string;
  desc: string;
  items: CategoryItem[];
}) {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: '240px 1fr',
        gap: 28,
        padding: '28px 0',
        borderTop: `1px solid ${colors.border}`,
      }}
    >
      <div>
        <span style={eyebrow}>{eyebrowNum}</span>
        <h3
          style={{
            fontFamily: fonts.heading,
            fontWeight: 800,
            fontSize: 22,
            color: colors.navy,
            margin: '6px 0 6px',
            lineHeight: 1.2,
          }}
        >
          {title} <span style={serifItalic}>{titleAccent}</span>
        </h3>
        <p style={{ fontSize: 13, color: colors.muted, lineHeight: 1.55, margin: 0 }}>{desc}</p>
      </div>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 12,
          alignContent: 'start',
        }}
      >
        {items.map((it) => (
          <Link
            key={it.title}
            href={it.href}
            style={{
              background: '#fff',
              border: `1px solid ${colors.border}`,
              borderRadius: 12,
              padding: '16px 18px',
              textDecoration: 'none',
              color: 'inherit',
              display: 'flex',
              flexDirection: 'column',
              gap: 4,
              minHeight: 92,
            }}
          >
            <h4
              style={{
                fontFamily: fonts.heading,
                fontWeight: 700,
                fontSize: 14,
                color: colors.navy,
                margin: 0,
              }}
            >
              {it.title}
            </h4>
            <p style={{ fontSize: 12, color: colors.muted, margin: 0, lineHeight: 1.45 }}>
              {it.desc}
            </p>
            {it.badge && (
              <span
                style={{
                  display: 'inline-block',
                  background:
                    it.badge === 'new'
                      ? 'rgba(13,128,80,0.1)'
                      : it.badge === 'soon'
                      ? 'rgba(180,83,9,0.12)'
                      : 'rgba(180,83,9,0.12)',
                  color:
                    it.badge === 'new'
                      ? colors.green
                      : it.badge === 'soon'
                      ? colors.gold
                      : colors.gold,
                  fontSize: 9.5,
                  fontWeight: 800,
                  letterSpacing: 0.5,
                  padding: '2px 6px',
                  borderRadius: 3,
                  marginTop: 6,
                  textTransform: 'uppercase',
                  width: 'fit-content',
                }}
              >
                {it.badge === 'new' ? 'New' : it.badge === 'soon' ? 'Soon' : 'Updated'}
              </span>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function NewsHubPage() {
  return (
    <main>
      {/* HERO */}
      <section
        style={{
          background: colors.cream,
          padding: '56px 32px',
          borderBottom: `1px solid ${colors.border}`,
        }}
      >
        <div style={{ maxWidth: layout.maxWidth, margin: '0 auto' }}>
          <div style={{ fontSize: 12, color: colors.muted, marginBottom: 14 }}>
            <Link href="/" style={{ color: colors.muted, textDecoration: 'none' }}>
              Home
            </Link>{' '}
            &nbsp;/&nbsp; News &amp; Resources
          </div>
          <h1
            style={{
              fontFamily: fonts.heading,
              fontWeight: 800,
              fontSize: 48,
              color: colors.navy,
              margin: '0 0 14px',
              lineHeight: 1.05,
              letterSpacing: '-0.6px',
            }}
          >
            Insurance, explained <span style={serifItalic}>plainly.</span>
          </h1>
          <p
            style={{
              fontSize: 17,
              color: colors.muted,
              maxWidth: 620,
              lineHeight: 1.55,
              margin: '0 0 24px',
            }}
          >
            Pillar guides, quarterly rate data, and interactive tools — written for Canadians
            shopping their first policy or their fifteenth renewal. Educational content reviewed
            by KLC Group Canada Inc.&rsquo;s LLQP-licensed advisors where relevant.
          </p>
        </div>
      </section>

      {/* FEATURED */}
      <section style={{ padding: '48px 32px 8px' }}>
        <div style={{ maxWidth: layout.maxWidth, margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'end',
              justifyContent: 'space-between',
              marginBottom: 18,
            }}
          >
            <div>
              <span style={eyebrow}>Featured</span>
              <h2
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 700,
                  fontSize: 22,
                  color: colors.navy,
                  margin: '4px 0 0',
                }}
              >
                What everyone&rsquo;s reading right now
              </h2>
            </div>
            <Link
              href="/learn"
              style={{
                fontSize: 13,
                color: colors.teal,
                fontWeight: 600,
                textDecoration: 'none',
              }}
            >
              Browse all articles →
            </Link>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1.6fr 1fr 1fr',
              gap: 16,
            }}
          >
            {/* Large feature card — Reform Guide */}
            <Link
              href="/auto-insurance"
              style={{
                gridRow: 'span 2',
                background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.navyDark} 100%)`,
                color: '#fff',
                borderRadius: 16,
                padding: 32,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: 280,
                textDecoration: 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div>
                <span style={{ ...eyebrow, color: colors.gold }}>The 2026 Reform Guide</span>
                <h3
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 700,
                    fontSize: 28,
                    color: '#fff',
                    margin: '12px 0 14px',
                    lineHeight: 1.15,
                  }}
                >
                  Ontario&rsquo;s biggest auto-insurance overhaul in a decade — what changes on
                  July 1.
                </h3>
                <p
                  style={{
                    fontSize: 14.5,
                    color: 'rgba(255,255,255,0.78)',
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  Optional accident benefits, direct-comp expansion, and the new minor-injury
                  cap. We translate the FSRA bulletin into plain English and tell you what (if
                  anything) to do about your policy.
                </p>
              </div>
              <div>
                <div
                  style={{
                    color: colors.gold,
                    fontWeight: 700,
                    fontSize: 13,
                    marginTop: 14,
                  }}
                >
                  Read the full guide →
                </div>
              </div>
            </Link>

            {/* Secondary feature cards */}
            {[
              {
                eb: 'Quarterly data',
                ebColor: colors.gold,
                title: 'Rate Index report',
                desc: 'Methodology preview. Issue 1 ships with the 2027 quote-engine launch.',
                href: '/rate-index',
              },
              {
                eb: 'Explainer',
                title: 'Ways to lower your auto premium',
                desc: 'Bundling, telematics, deductible math, and the credit-score factor most brokers don’t explain.',
                href: '/auto-insurance',
              },
              {
                eb: 'Interactive',
                title: 'How much could you save?',
                desc: 'A savings estimator — built on real quote-engine data — arrives with the 2027 launch.',
                href: '/savings-calculator',
              },
              {
                eb: 'Beginner',
                title: 'New to insurance — where do I start?',
                desc: 'A walkthrough of every policy type, written for first-time policyholders.',
                href: '/glossary',
              },
            ].map((f) => (
              <Link
                key={f.title}
                href={f.href}
                style={{
                  background: '#fff',
                  border: `1px solid ${colors.border}`,
                  borderRadius: 16,
                  padding: 24,
                  textDecoration: 'none',
                  color: 'inherit',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 8,
                  minHeight: 200,
                }}
              >
                <span style={{ ...eyebrow, color: f.ebColor ?? colors.teal }}>{f.eb}</span>
                <h3
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 700,
                    fontSize: 18,
                    color: colors.navy,
                    margin: 0,
                    lineHeight: 1.25,
                  }}
                >
                  {f.title}
                </h3>
                <p
                  style={{
                    fontSize: 13,
                    color: colors.muted,
                    margin: 0,
                    lineHeight: 1.55,
                  }}
                >
                  {f.desc}
                </p>
                <div
                  style={{
                    color: colors.teal,
                    fontWeight: 700,
                    fontSize: 13,
                    marginTop: 'auto',
                    paddingTop: 12,
                  }}
                >
                  Read more →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CATEGORY ROWS */}
      <section style={{ padding: '48px 32px 16px' }}>
        <div style={{ maxWidth: layout.maxWidth, margin: '0 auto' }}>
          <CategoryRow
            eyebrowNum="01"
            title="Pillar"
            titleAccent="guides"
            desc="The long-form reference articles we link back to from every product page."
            items={PILLAR_GUIDES}
          />
          <CategoryRow
            eyebrowNum="02"
            title="Interactive"
            titleAccent="tools"
            desc="Quizzes and calculators built on the same data engine as the quote tool. All ship with the 2027 launch."
            items={INTERACTIVE_TOOLS}
          />
          <CategoryRow
            eyebrowNum="03"
            title="News &"
            titleAccent="company"
            desc="Quarterly rate data, the methodology preview, partnerships, and how to reach us."
            items={NEWS_COMPANY}
          />
        </div>
      </section>

      {/* NEWSLETTER STRIP */}
      <section
        style={{
          background: colors.surface,
          padding: '48px 32px',
          borderTop: `1px solid ${colors.border}`,
          borderBottom: `1px solid ${colors.border}`,
          marginTop: 48,
        }}
      >
        <div
          style={{
            maxWidth: layout.maxWidth,
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 48,
            alignItems: 'center',
          }}
        >
          <div>
            <span style={eyebrow}>The TopRates briefing</span>
            <h3
              style={{
                fontFamily: fonts.heading,
                fontWeight: 700,
                fontSize: 26,
                color: colors.navy,
                margin: '6px 0 8px',
                lineHeight: 1.2,
              }}
            >
              One <span style={serifItalic}>smart</span> insurance email every other Tuesday.
            </h3>
            <p
              style={{
                fontSize: 14,
                color: colors.muted,
                margin: 0,
                lineHeight: 1.55,
                maxWidth: 460,
              }}
            >
              Rate changes, regulatory news, and one practical move for your next renewal.
              Roughly a 4-minute read. No spam, one-click unsubscribe, never sold.
            </p>
          </div>
          <div>
            <Link
              href="/get-quotes"
              className="cta-btn"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 8,
                background: colors.navy,
                color: '#fff',
                borderRadius: 10,
                padding: '14px 22px',
                fontSize: 14,
                fontWeight: 700,
                textDecoration: 'none',
              }}
            >
              Subscribe <Icon name="arrowRight" size={15} color="#F2B441" />
            </Link>
            <p
              style={{
                fontSize: 11,
                color: colors.muted,
                margin: '10px 0 0',
                lineHeight: 1.55,
              }}
            >
              By subscribing you consent to receive editorial emails from Webhub4u Inc. See{' '}
              <Link href="/privacy" style={{ color: colors.teal, fontWeight: 600 }}>
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
