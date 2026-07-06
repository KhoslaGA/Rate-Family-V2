import { colors, fonts, layout } from '@/styles/tokens';

/**
 * Auto Insurance — long-form educational content.
 *
 * Server-rendered (no client JS) for SEO. Ported from
 * /content drafts (toprates-auto-insurance-page.md).
 *
 * Compliance scrubs vs. draft (preserved — do not re-introduce):
 *   - GTA premium dollar table dropped. The draft's figures were marked
 *     [[VERIFY]] and the codebase bans invented dollar amounts (see
 *     glossary/data.ts). The qualitative "why GTA pays more" explanation
 *     is kept instead.
 *   - "Reviewed by [[PLACEHOLDER]]" byline omitted until a real licensed
 *     reviewer + credential exists.
 *   - The draft's "not a licensed broker, full tools later" disclosure
 *     framing is replaced by the site's canonical DisclaimerBlock (already
 *     rendered on the page) aligned to KLC Group's RIBO-registration plans.
 */

const NAVY = colors.navy;
const TEAL = colors.teal;
const GOLD = colors.gold;

const h2: React.CSSProperties = {
  fontFamily: fonts.heading,
  fontWeight: 800,
  fontSize: 26,
  color: NAVY,
  margin: '0 0 8px',
  letterSpacing: '-0.3px',
};

const lead: React.CSSProperties = {
  fontSize: 15,
  color: colors.muted,
  lineHeight: 1.65,
  maxWidth: 680,
  margin: '0 0 28px',
};

const body: React.CSSProperties = {
  fontSize: 15,
  color: colors.ink,
  lineHeight: 1.7,
  maxWidth: 680,
  margin: '0 0 16px',
};

function SectionWrap({
  background,
  children,
}: {
  background: string;
  children: React.ReactNode;
}) {
  return (
    <section style={{ padding: '64px 32px', background }}>
      <div style={{ maxWidth: layout.maxWidth, margin: '0 auto' }}>{children}</div>
    </section>
  );
}

const BENEFITS_MANDATORY = ['Medical and rehabilitation benefits', 'Attendant care benefits'];

const BENEFITS_OPTIONAL = [
  'Income replacement benefits',
  'Non-earner benefits',
  'Caregiver benefits',
  'Housekeeping and home maintenance',
  'Death and funeral benefits',
  'Lost educational expenses',
  'Expenses of visitors',
  'Damage to clothing, glasses, and other personal items',
];

const SITUATIONS: { title: string; body: string }[] = [
  {
    title: 'New and G2 drivers',
    body: 'Expect the highest premiums. Driver training, being added to a parent’s policy, and a clean record over time are the legitimate paths down.',
  },
  {
    title: 'High-risk drivers',
    body: 'After serious tickets, at-fault accidents, or a lapse in coverage, you may be placed with a specialty insurer or the Facility Association, Ontario’s insurer of last resort.',
  },
  {
    title: 'Rideshare drivers (Uber, Lyft)',
    body: 'A standard personal policy does not cover commercial rideshare use. You need a rideshare endorsement; driving for hire without it can void a claim.',
  },
  {
    title: 'New to Canada',
    body: 'Bring proof of your driving history from your home country — many insurers give credit for verifiable prior experience, which can meaningfully reduce your rate.',
  },
];

const GTA_REASONS: { title: string; body: string }[] = [
  {
    title: 'Claims frequency and density',
    body: 'More cars in a smaller area means more collisions.',
  },
  {
    title: 'Auto theft',
    body: 'Peel Region (Brampton and Mississauga) has been a national hotspot for vehicle theft, and theft losses get priced into premiums.',
  },
  {
    title: 'Fraud and staged collisions',
    body: 'Historically concentrated in parts of the GTA, raising costs for everyone in the rating territory.',
  },
  {
    title: 'Repair and medical costs',
    body: 'Rising across the board, and reflected in what carriers charge.',
  },
];

const LOWER_RATE: string[] = [
  'Shop at renewal — loyalty rarely pays; comparing is the single most effective tactic.',
  'Bundle home/tenant and auto with one insurer.',
  'Raise your deductible if you have the savings to cover it.',
  'Usage-based / telematics programs reward safe, low-mileage driving.',
  'Winter tires earn a mandated discount in Ontario.',
  'Driver training for new drivers.',
  'Review coverage annually — an older car may no longer need collision coverage.',
];

const FAQ_ITEMS: { q: string; a: string }[] = [
  {
    q: 'What changes on July 1, 2026 for Ontario auto insurance?',
    a: 'Several accident benefits — including income replacement, caregiver, housekeeping, death and funeral, and others — become optional. Medical, rehabilitation, and attendant care benefits remain mandatory.',
  },
  {
    q: 'Will my premium go down after the reform?',
    a: 'It may, if you opt out of optional benefits — but you’d be trading a lower premium for less protection. Whether that’s wise depends entirely on your financial situation.',
  },
  {
    q: 'Why is Brampton car insurance so expensive?',
    a: 'A combination of high claims frequency, elevated auto theft in Peel Region, historical fraud concentration, and dense traffic pushes Brampton’s average premium among the highest in Canada.',
  },
  {
    q: 'Does my regular policy cover me when driving for Uber?',
    a: 'No. You need a specific rideshare endorsement. Driving for hire on a personal policy can void your coverage.',
  },
  {
    q: 'I’m new to Canada — can I get a good rate?',
    a: 'Often yes, if you can document driving experience from your home country. Ask insurers what proof they accept.',
  },
  {
    q: 'Can TopRates.ca get me a quote?',
    a: 'Not yet. We’re an educational resource today; quote comparison launches once KLC Group Canada Inc. completes RIBO registration. For now we help you understand your options so you can talk to a licensed broker with confidence.',
  },
];

export default function AutoInsuranceContent() {
  return (
    <>
      {/* WHAT'S CHANGING JULY 1 */}
      <SectionWrap background="#fff">
        <div
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: GOLD,
            letterSpacing: 1.5,
            textTransform: 'uppercase',
            marginBottom: 6,
          }}
        >
          The July 1, 2026 reform
        </div>
        <h2 style={h2}>What&rsquo;s changing on July 1, 2026</h2>
        <p style={lead}>
          Ontario&rsquo;s auto insurance reform restructures the Statutory Accident Benefits
          Schedule (SABS) &mdash; the part of your policy that pays for your own injuries after a
          crash, regardless of who&rsquo;s at fault. Today every Ontario auto policy automatically
          includes a standard package of accident benefits. After July 1, the framework splits
          coverage into two groups.
        </p>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 16,
            marginBottom: 28,
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
                margin: '0 0 12px',
              }}
            >
              Staying mandatory
            </h3>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {BENEFITS_MANDATORY.map((b) => (
                <li
                  key={b}
                  style={{ fontSize: 14, color: colors.ink, lineHeight: 1.7, marginBottom: 4 }}
                >
                  {b}
                </li>
              ))}
            </ul>
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
                color: GOLD,
                margin: '0 0 12px',
              }}
            >
              Becoming optional
            </h3>
            <ul style={{ margin: 0, paddingLeft: 18 }}>
              {BENEFITS_OPTIONAL.map((b) => (
                <li
                  key={b}
                  style={{ fontSize: 14, color: colors.ink, lineHeight: 1.7, marginBottom: 4 }}
                >
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p style={body}>
          The provincial rationale is that making these benefits optional lets drivers lower their
          base premium by declining coverage they may feel they don&rsquo;t need. The risk is
          obvious: a driver who opts out to save money may discover, after a serious collision, that
          they have no income replacement while unable to work.
        </p>

        <h3
          style={{
            fontFamily: fonts.heading,
            fontWeight: 700,
            fontSize: 19,
            color: NAVY,
            margin: '28px 0 10px',
          }}
        >
          Should you keep the optional benefits?
        </h3>
        <p style={body}>
          There is no universal answer, and anyone who gives you one without knowing your situation
          is guessing. The honest framework:
        </p>
        <ul style={{ margin: '0 0 16px', paddingLeft: 20, maxWidth: 680 }}>
          <li style={{ fontSize: 15, color: colors.ink, lineHeight: 1.7, marginBottom: 8 }}>
            <strong>Keep income replacement</strong> if you rely on employment income and
            don&rsquo;t have robust long-term disability coverage elsewhere.
          </li>
          <li style={{ fontSize: 15, color: colors.ink, lineHeight: 1.7, marginBottom: 8 }}>
            <strong>Keep caregiver and housekeeping</strong> if your household depends on unpaid
            work you do (childcare, eldercare).
          </li>
          <li style={{ fontSize: 15, color: colors.ink, lineHeight: 1.7, marginBottom: 8 }}>
            <strong>Reconsider</strong> only if you have substantial separate coverage (a strong
            group benefits plan, significant savings) that already addresses these risks.
          </li>
        </ul>
        <p style={body}>
          Because this is a financial-security decision, it&rsquo;s exactly the kind of choice worth
          running past a licensed advisor before your renewal date.
        </p>
      </SectionWrap>

      {/* WHY GTA PAYS */}
      <SectionWrap background={colors.subtleBg}>
        <h2 style={h2}>Why GTA drivers pay so much</h2>
        <p style={lead}>
          Greater Toronto Area drivers pay among the highest auto premiums in Canada. Your postal
          code&rsquo;s &ldquo;rating territory&rdquo; is one of the single biggest factors in your
          premium &mdash; sometimes a larger factor than your driving record. The drivers of that
          cost are concrete:
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 16,
          }}
        >
          {GTA_REASONS.map((r) => (
            <div
              key={r.title}
              style={{
                padding: '20px 22px',
                background: '#fff',
                borderRadius: 10,
                border: `1px solid ${colors.border}`,
              }}
            >
              <h4
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 700,
                  fontSize: 15,
                  color: NAVY,
                  margin: '0 0 6px',
                }}
              >
                {r.title}
              </h4>
              <p style={{ fontSize: 13, color: colors.muted, lineHeight: 1.55, margin: 0 }}>
                {r.body}
              </p>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* SPECIFIC SITUATIONS */}
      <SectionWrap background="#fff">
        <h2 style={h2}>Specific situations</h2>
        <p style={lead}>
          Insurers weigh your driving record, years licensed, vehicle, mileage, postal code,
          coverage, and discounts. A few situations change the picture more than others.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: 16,
          }}
        >
          {SITUATIONS.map((s) => (
            <div
              key={s.title}
              style={{
                padding: '20px 22px',
                borderRadius: 10,
                border: `1px solid ${colors.border}`,
              }}
            >
              <h4
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 700,
                  fontSize: 15,
                  color: NAVY,
                  margin: '0 0 6px',
                }}
              >
                {s.title}
              </h4>
              <p style={{ fontSize: 13.5, color: colors.muted, lineHeight: 1.6, margin: 0 }}>
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </SectionWrap>

      {/* LOWER YOUR RATE */}
      <SectionWrap background={colors.subtleBg}>
        <h2 style={h2}>Legitimate ways to lower your rate</h2>
        <ul style={{ margin: '12px 0 20px', paddingLeft: 20, maxWidth: 680 }}>
          {LOWER_RATE.map((item) => (
            <li
              key={item}
              style={{ fontSize: 15, color: colors.ink, lineHeight: 1.7, marginBottom: 8 }}
            >
              {item}
            </li>
          ))}
        </ul>
        <div
          style={{
            background: '#FFF8F0',
            border: `1px solid rgba(180,83,9,0.18)`,
            borderRadius: 10,
            padding: '16px 20px',
            maxWidth: 680,
          }}
        >
          <p style={{ fontSize: 14, color: '#7a4a14', lineHeight: 1.6, margin: 0 }}>
            Avoid the temptation to misrepresent your address, mileage, or who drives the car.
            &ldquo;Address fronting&rdquo; and similar misrepresentations are fraud and will void
            your coverage when you need it most.
          </p>
        </div>
      </SectionWrap>

      {/* FAQ */}
      <SectionWrap background="#fff">
        <h2 style={{ ...h2, marginBottom: 20 }}>Frequently asked questions</h2>
        <div style={{ maxWidth: 760 }}>
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
                  color: NAVY,
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
                  maxWidth: 640,
                }}
              >
                {item.a}
              </p>
            </details>
          ))}
        </div>
      </SectionWrap>
    </>
  );
}
