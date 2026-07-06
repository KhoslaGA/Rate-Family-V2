import Link from 'next/link';
import { colors, fonts } from '@/styles/tokens';

/**
 * Vertical-specific in-page disclaimer block (Tier 3 of the disclaimer system).
 *
 * Usage:
 *   <DisclaimerBlock vertical="life" />     // /life-insurance, /health-insurance, /travel-insurance
 *   <DisclaimerBlock vertical="pc" />       // /auto-insurance, /home-insurance, /business-insurance
 *   <DisclaimerBlock vertical="mortgage" /> // /mortgages and mortgage articles
 *   <DisclaimerBlock vertical="cards" />    // /credit-cards/* — appears ABOVE THE FOLD
 *
 * Three distinct visual treatments:
 *
 *   life     — substantive teal callout (full teal left border, navy text,
 *              no italic). The message ANNOUNCES capability: KLC Group
 *              advisors today provide quote, advice, and policy placement.
 *              This is not a cautionary disclaimer; it's an active-
 *              brokerage notice and the styling reflects that.
 *
 *   pc / mortgage — muted cautionary callout (faint teal border, muted text,
 *                   italic). The message SETS EXPECTATIONS: educational
 *                   content only, no licensed activity here.
 *
 *   cards    — amber full-width band (Competition Bureau 2024 Influencer
 *              Marketing Guidance + audit Task 5a strictest visibility).
 *
 * Each text is true and specific:
 *   - life:     active LLQP referral today via KLC Group Canada Inc.
 *   - pc:       no P&C broker today; KLC Group plans RIBO registration
 *   - mortgage: not a licensed mortgage broker under MBLAA
 *   - cards:    affiliate-disclosed, methodology-driven
 *
 * No specific dates appear in any variant — conditional language only.
 * The /about and /whats-coming pages are the only places where target
 * timing for KLC Group's RIBO registration is described, with hedging.
 */

export type Vertical = 'life' | 'pc' | 'mortgage' | 'cards';

const TEXT: Record<Exclude<Vertical, 'cards'>, string> = {
  life:
    "Quote, advice, and policy-placement services on this page are provided by KLC Group Canada Inc., an independent Ontario-based life insurance advisory firm licensed under FSRA, in partnership with TopRates.ca. KLC Group's advisors hold LLQP credentials and are authorized to provide personalized recommendations and place coverage in life insurance, accident & sickness coverage (critical illness, disability, travel medical), and insurance-based investment products (segregated funds, annuities, GIAs). Educational content on this page is reviewed by KLC Group's licensed advisors. To talk to a licensed advisor about your situation, complete the form on this page or book a call.",
  pc:
    'Educational content only. TopRates.ca is operated by Webhub4u Inc. and is not a licensed insurance broker. For personal advice on your specific situation, consult a licensed insurance broker. KLC Group Canada Inc. plans to register as a RIBO-licensed property and casualty brokerage; until that registration is granted, no P&C insurance is sold or quoted on TopRates.ca.',
  mortgage:
    'Educational content only. TopRates.ca is not a licensed mortgage broker under the Mortgage Brokerages, Lenders and Administrators Act, 2006 (MBLAA). For personal mortgage advice, consult a licensed mortgage agent or broker.',
};

export function DisclaimerBlock({ vertical }: { vertical: Vertical }) {
  if (vertical === 'cards') {
    // Short notice with a link to the dedicated /disclosures page. The
    // amber treatment is preserved (Competition Bureau 2024 Influencer
    // Marketing Guidance — clear & conspicuous), but the long-form
    // disclosure copy lives on /disclosures so the page itself stays clean.
    return (
      <section
        style={{
          background: '#fef3c7',
          borderTop: '2px solid #fcd34d',
          borderBottom: '2px solid #fcd34d',
          padding: '12px 24px',
        }}
      >
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              flexWrap: 'wrap',
              fontFamily: fonts.heading,
              fontSize: 13.5,
              lineHeight: 1.5,
            }}
          >
            <span style={{ color: '#92400e', fontWeight: 800, flexShrink: 0 }}>
              ⚡ Affiliate-compensated.
            </span>
            <span style={{ color: '#1f2937' }}>
              We earn commission from some card issuers — never affects our rankings.
            </span>
            <Link
              href="/disclosures"
              style={{
                color: '#92400e',
                textDecoration: 'underline',
                fontWeight: 800,
                whiteSpace: 'nowrap',
              }}
            >
              Full disclosures &rarr;
            </Link>
          </div>
        </div>
      </section>
    );
  }

  // /life/ gets a substantive treatment — full teal border, navy text, no
  // italic. The disclaimer ANNOUNCES active brokerage capability, not a
  // cautionary "we're not licensed" notice.
  if (vertical === 'life') {
    return (
      <div
        style={{
          borderLeft: `4px solid ${colors.teal}`,
          background: `rgba(10, 126, 140, 0.06)`,
          padding: '20px 24px',
          margin: '24px 0',
          borderRadius: '0 8px 8px 0',
        }}
      >
        <p
          style={{
            fontFamily: fonts.heading,
            fontSize: 14,
            color: colors.navy,
            margin: 0,
            lineHeight: 1.65,
          }}
        >
          {TEXT.life}
        </p>
      </div>
    );
  }

  // pc + mortgage: muted cautionary treatment. Faint teal border, muted
  // body text, italic. The message SETS EXPECTATIONS rather than
  // announcing capability.
  return (
    <div
      style={{
        borderLeft: `4px solid ${colors.teal}80`,
        background: `${colors.cream}80`,
        padding: '16px 20px',
        margin: '24px 0',
        borderRadius: '0 8px 8px 0',
      }}
    >
      <p
        style={{
          fontFamily: fonts.heading,
          fontSize: 14,
          color: colors.muted,
          margin: 0,
          fontStyle: 'italic',
          lineHeight: 1.6,
        }}
      >
        {TEXT[vertical]}
      </p>
    </div>
  );
}

export default DisclaimerBlock;
