import { colors, fonts, layout } from '@/styles/tokens';

/**
 * Credit Cards — long-form educational content.
 *
 * Server-rendered (no client JS) for SEO. Ported from
 * /content drafts (toprates-credit-cards-page.md).
 *
 * Compliance notes (consistent with the existing page.tsx scrubs):
 *   - No named cards / specific rates / bonuses. The draft deliberately
 *     avoided fast-decaying named-card claims; we keep it that way. Named
 *     comparisons belong in a dated, maintained /blog table.
 *   - "Reviewed by [[PLACEHOLDER]]" byline omitted until a real reviewer +
 *     credential exists.
 */

const NAVY = colors.navy;
const TEAL = colors.teal;

const eyebrow: React.CSSProperties = {
  fontSize: 11,
  fontWeight: 700,
  color: TEAL,
  letterSpacing: 1.5,
  textTransform: 'uppercase',
  marginBottom: 6,
};

const h2: React.CSSProperties = {
  fontFamily: fonts.heading,
  fontWeight: 800,
  fontSize: 28,
  color: NAVY,
  margin: '6px 0 16px',
  letterSpacing: '-0.3px',
};

const lead: React.CSSProperties = {
  fontSize: 15,
  color: colors.muted,
  lineHeight: 1.65,
  maxWidth: 680,
  margin: '0 0 24px',
};

const body: React.CSSProperties = {
  fontSize: 15,
  color: colors.ink,
  lineHeight: 1.7,
  maxWidth: 680,
  margin: '0 0 16px',
};

const CATEGORIES: { title: string; body: string }[] = [
  {
    title: 'Cash back',
    body: 'The simplest reward: a percentage of your spending comes back as a statement credit. Best for people who want value without managing points. Look at the rate on categories you actually use most (groceries, gas, recurring bills) and watch for spending caps.',
  },
  {
    title: 'Travel rewards',
    body: 'Earn points toward flights, hotels, and transfers. Best for frequent travellers who’ll use the points and perks (lounge access, free checked bags, travel insurance). The headline value only materializes if you redeem well — otherwise cash back is often better.',
  },
  {
    title: 'No annual fee',
    body: 'No yearly cost, lower reward rates. Best for light spenders, first cards, or a no-cost backup. Only pay an annual fee if the extra rewards and perks clearly exceed the fee for your spending.',
  },
  {
    title: 'Student cards',
    body: 'Built for limited or no credit history, usually no fee, with modest rewards. A responsible starting point for building credit.',
  },
  {
    title: 'New to Canada',
    body: 'Several major banks offer cards to newcomers without requiring a Canadian credit history, sometimes using your banking relationship or a deposit instead. A practical first step toward building a Canadian credit profile.',
  },
  {
    title: 'Secured cards',
    body: 'You put down a deposit that backs your limit. The reliable option for rebuilding damaged credit or starting from zero.',
  },
];

const MATCH_TABLE: { you: string; look: string }[] = [
  { you: 'Spend heavily on groceries and dining', look: 'A card with elevated grocery/restaurant earn rates' },
  { you: 'Want zero effort', look: 'A flat-rate cash back card' },
  { you: 'Travel several times a year', look: 'A travel card whose perks exceed its fee' },
  { you: 'Carry a balance sometimes', look: 'A low-interest card — skip rewards' },
  { you: 'Are building credit', look: 'A no-fee student or secured card' },
  { you: 'Just arrived in Canada', look: 'A newcomer card from a major bank' },
  { you: 'Spend in USD often', look: 'A card with no foreign-transaction fee' },
];

const COMPARE_POINTS: string[] = [
  'Annual fee vs. the rewards you’ll realistically earn',
  'Interest rates on purchases and cash advances',
  'Foreign transaction fees (typically ~2.5%) if you shop in other currencies or travel',
  'Welcome bonus — and the spending required to earn it (don’t overspend chasing a bonus)',
  'Insurance coverage — travel medical, rental car, purchase protection, mobile device',
  'Minimum income requirements for premium cards',
  'Redemption flexibility — how easily points convert to real value',
];

const BUILD_CREDIT: string[] = [
  'Pay on time, every time — payment history is the biggest factor in your score.',
  'Keep your balance well below your limit (a low utilization ratio helps your score).',
  'Don’t apply for many cards at once.',
  'Keep your oldest card open to lengthen your credit history.',
  'Check your credit report regularly for errors.',
];

function SectionWrap({
  background,
  borderTop,
  borderBottom,
  children,
}: {
  background: string;
  borderTop?: boolean;
  borderBottom?: boolean;
  children: React.ReactNode;
}) {
  return (
    <section
      style={{
        padding: '56px 32px',
        background,
        ...(borderTop ? { borderTop: `1px solid ${colors.border}` } : {}),
        ...(borderBottom ? { borderBottom: `1px solid ${colors.border}` } : {}),
      }}
    >
      <div style={{ maxWidth: layout.maxWidth, margin: '0 auto' }}>{children}</div>
    </section>
  );
}

export default function CreditCardsContent() {
  return (
    <>
      {/* CARRY A BALANCE OR PAY IN FULL */}
      <SectionWrap background="#fff">
        <div style={eyebrow}>Start here</div>
        <h2 style={h2}>Carry a balance, or pay in full?</h2>
        <p style={lead}>
          This is the single most important question, and it overrides everything else.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
            marginBottom: 20,
          }}
        >
          <div
            style={{
              padding: '24px 26px',
              borderRadius: 12,
              border: `1px solid ${colors.border}`,
              background: '#f0f7f4',
            }}
          >
            <h3
              style={{
                fontFamily: fonts.heading,
                fontWeight: 700,
                fontSize: 16,
                color: colors.green,
                margin: '0 0 10px',
              }}
            >
              You pay in full every month
            </h3>
            <p style={{ fontSize: 14, color: colors.ink, lineHeight: 1.65, margin: 0 }}>
              The interest rate is irrelevant. Optimize for rewards and perks.
            </p>
          </div>
          <div
            style={{
              padding: '24px 26px',
              borderRadius: 12,
              border: `1px solid ${colors.border}`,
              background: '#FFF8F0',
            }}
          >
            <h3
              style={{
                fontFamily: fonts.heading,
                fontWeight: 700,
                fontSize: 16,
                color: colors.amber,
                margin: '0 0 10px',
              }}
            >
              You sometimes carry a balance
            </h3>
            <p style={{ fontSize: 14, color: colors.ink, lineHeight: 1.65, margin: 0 }}>
              Rewards are a trap. A card earning 2% rewards while charging ~20% interest loses you
              money fast. Optimize for the lowest interest rate instead.
            </p>
          </div>
        </div>
        <p style={body}>
          No rewards card beats the math of not paying interest. If you carry balances, a
          low-interest card is the genuinely smart choice, full stop.
        </p>
      </SectionWrap>

      {/* MAIN CARD CATEGORIES */}
      <SectionWrap background={colors.surface} borderTop borderBottom>
        <div style={eyebrow}>The main categories</div>
        <h2 style={h2}>Card types, in plain English</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
          }}
        >
          {CATEGORIES.map((c) => (
            <div
              key={c.title}
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
                  color: NAVY,
                  margin: '0 0 10px',
                }}
              >
                {c.title}
              </h3>
              <p style={{ fontSize: 14, color: colors.muted, lineHeight: 1.6, margin: 0 }}>
                {c.body}
              </p>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* MATCH TABLE */}
      <SectionWrap background="#fff">
        <div style={eyebrow}>Find your fit</div>
        <h2 style={h2}>Matching a card to how you spend</h2>
        <div
          style={{
            maxWidth: 760,
            border: `1px solid ${colors.border}`,
            borderRadius: 12,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              background: colors.surface,
              borderBottom: `1px solid ${colors.border}`,
            }}
          >
            <div
              style={{
                padding: '12px 18px',
                fontSize: 12,
                fontWeight: 700,
                color: NAVY,
                textTransform: 'uppercase',
                letterSpacing: 0.5,
              }}
            >
              If you&hellip;
            </div>
            <div
              style={{
                padding: '12px 18px',
                fontSize: 12,
                fontWeight: 700,
                color: NAVY,
                textTransform: 'uppercase',
                letterSpacing: 0.5,
              }}
            >
              Look at&hellip;
            </div>
          </div>
          {MATCH_TABLE.map((row, i) => (
            <div
              key={row.you}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                ...(i < MATCH_TABLE.length - 1
                  ? { borderBottom: `1px solid ${colors.borderFaint}` }
                  : {}),
              }}
            >
              <div style={{ padding: '14px 18px', fontSize: 14, color: colors.ink, lineHeight: 1.5 }}>
                {row.you}
              </div>
              <div style={{ padding: '14px 18px', fontSize: 14, color: colors.muted, lineHeight: 1.5 }}>
                {row.look}
              </div>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* WHAT TO COMPARE + WELCOME BONUS */}
      <SectionWrap background={colors.surface} borderTop borderBottom>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 40,
            alignItems: 'start',
          }}
        >
          <div>
            <div style={eyebrow}>Beyond the headline rate</div>
            <h2 style={{ ...h2, fontSize: 24 }}>What to compare</h2>
            <ul style={{ margin: '4px 0 0', paddingLeft: 20 }}>
              {COMPARE_POINTS.map((p) => (
                <li
                  key={p}
                  style={{ fontSize: 14.5, color: colors.ink, lineHeight: 1.65, marginBottom: 8 }}
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div style={eyebrow}>A note on</div>
            <h2 style={{ ...h2, fontSize: 24 }}>Welcome bonuses</h2>
            <p style={body}>
              A large welcome bonus is appealing, but only counts as &ldquo;free&rdquo; if you&rsquo;d
              have made the required spending anyway. Never buy things you don&rsquo;t need, or carry
              a balance, to hit a minimum-spend target &mdash; the interest and waste erase the
              bonus.
            </p>
            <p style={{ ...body, margin: 0 }}>
              Treat the bonus as a tie-breaker between otherwise comparable cards, not a primary
              reason to apply.
            </p>
          </div>
        </div>
      </SectionWrap>

      {/* BUILDING CREDIT */}
      <SectionWrap background="#fff">
        <div style={eyebrow}>Building credit responsibly</div>
        <h2 style={h2}>If you&rsquo;re new to credit or rebuilding</h2>
        <ul style={{ margin: '4px 0 0', paddingLeft: 20, maxWidth: 680 }}>
          {BUILD_CREDIT.map((p) => (
            <li
              key={p}
              style={{ fontSize: 15, color: colors.ink, lineHeight: 1.7, marginBottom: 8 }}
            >
              {p}
            </li>
          ))}
        </ul>
      </SectionWrap>
    </>
  );
}
