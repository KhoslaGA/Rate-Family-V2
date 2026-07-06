/**
 * Ontario Auto Insurance Reform 2026 — fact-checked pillar guide.
 *
 * Replaces the prior /reform-2026 page, which contained fabricated regulatory
 * content. Every regulatory claim, dollar figure, effective date, and rule
 * change in this article is cited inline to a primary source listed in the
 * Sources section at the bottom of the page.
 *
 * The original /reform-2026 URL 301-redirects to this URL via next.config.js.
 */
import type { Metadata } from 'next';
import Link from 'next/link';
import ContactForm from '@/components/contact/ContactForm';
import { colors, fonts, layout } from '@/styles/tokens';

export const metadata: Metadata = {
  title:
    "Ontario Auto Insurance Reform 2026: What's Changing on July 1 | TopRates.ca",
  description:
    "Ontario Regulation 383/24 amends the Statutory Accident Benefits Schedule (SABS) on July 1, 2026. We explain what's changing, what remains mandatory, and what becomes optional — sourced from FSRA, the regulation itself, and RIBO.",
  alternates: { canonical: '/blog/ontario-auto-reform-2026-guide' },
  openGraph: {
    title: "Ontario Auto Insurance Reform 2026: What's Changing on July 1",
    description:
      'A plain-English guide to Ontario Regulation 383/24 and the July 1, 2026 SABS changes — sourced from FSRA and the regulation itself.',
    type: 'article',
  },
};

const FSRA_HUB =
  'https://www.fsrao.ca/industry/auto-insurance/changes-statutory-accident-benefits-coverage-ontario-july-1-2026';
const FSRA_OPTIONALITY_QA =
  'https://www.fsrao.ca/industry/auto-insurance/changes-statutory-accident-benefits-coverage-ontario-july-1-2026/fsra-auto-reform-accident-benefits-optionality-qa-insurers';
const SABS_REG = 'https://www.ontario.ca/laws/regulation/100034';
const REG_383_24 = 'https://www.ontario.ca/laws/regulation/r24383';
const RIBO_REFORM = 'https://www.ribo.com/licensee-resources/sabs-changes/';
const IBAO_REFORM = 'https://ibao.org/ontario-auto';

const eyebrow: React.CSSProperties = {
  fontFamily: fonts.sans,
  fontSize: 12,
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: colors.amber,
};

const h1Style: React.CSSProperties = {
  fontFamily: fonts.heading,
  fontWeight: 600,
  fontSize: 'clamp(34px, 5vw, 52px)',
  lineHeight: 1.1,
  color: colors.inkStrong,
  margin: '12px 0 16px',
  letterSpacing: '-0.02em',
};

const leadStyle: React.CSSProperties = {
  fontFamily: fonts.body,
  fontSize: 19,
  lineHeight: 1.55,
  color: colors.ink,
  margin: '0 0 8px',
  maxWidth: 760,
};

const h2Style: React.CSSProperties = {
  fontFamily: fonts.heading,
  fontWeight: 600,
  fontSize: 28,
  lineHeight: 1.2,
  color: colors.inkStrong,
  margin: '48px 0 12px',
  letterSpacing: '-0.01em',
};

const h3Style: React.CSSProperties = {
  fontFamily: fonts.heading,
  fontWeight: 600,
  fontSize: 20,
  lineHeight: 1.3,
  color: colors.inkStrong,
  margin: '28px 0 8px',
};

const pStyle: React.CSSProperties = {
  fontFamily: fonts.body,
  fontSize: 17,
  lineHeight: 1.65,
  color: colors.ink,
  margin: '0 0 16px',
};

const ulStyle: React.CSSProperties = {
  fontFamily: fonts.body,
  fontSize: 17,
  lineHeight: 1.65,
  color: colors.ink,
  paddingLeft: 22,
  margin: '0 0 16px',
};

const linkStyle: React.CSSProperties = {
  color: colors.teal,
  textDecoration: 'underline',
};

const calloutStyle: React.CSSProperties = {
  background: '#FBF7EE',
  borderLeft: `4px solid ${colors.amber}`,
  padding: '18px 22px',
  borderRadius: 6,
  margin: '24px 0',
  fontFamily: fonts.body,
  fontSize: 16,
  lineHeight: 1.6,
  color: colors.ink,
};

function Cite({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" style={linkStyle}>
      {children}
    </a>
  );
}

export default function OntarioAutoReform2026Pillar() {
  return (
    <main style={{ background: colors.paper }}>
      {/* Hero / intro */}
      <section style={{ padding: '64px 24px 32px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <p style={eyebrow}>Editorial guide · Updated May 2026</p>
          <h1 style={h1Style}>
            Ontario auto insurance reform: what&apos;s changing on July 1, 2026
          </h1>
          <p style={leadStyle}>
            On July 1, 2026, Ontario&apos;s mandatory auto insurance package
            shrinks. Under{' '}
            <Cite href={REG_383_24}>Ontario Regulation 383/24</Cite>, most
            accident benefits that drivers have historically received
            automatically become optional. Three benefits remain mandatory:
            medical, rehabilitation, and attendant care. Everything else is now
            a coverage you choose to keep, or to decline, on your renewal.
          </p>
          <p style={{ ...leadStyle, marginTop: 16, color: colors.muted, fontSize: 16 }}>
            This guide explains what the regulation actually does, where the
            primary sources sit, and what you can expect to see on a renewal
            notice after July 1. Every regulatory claim below is sourced inline
            to the underlying FSRA page, the regulation itself, or RIBO&apos;s
            industry FAQ.
          </p>
        </div>
      </section>

      {/* TL;DR */}
      <section style={{ padding: '8px 24px 16px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <div
            style={{
              background: colors.white,
              border: `1px solid ${colors.border}`,
              borderRadius: 10,
              padding: '24px 28px',
            }}
          >
            <h2 style={{ ...h2Style, margin: '0 0 12px', fontSize: 22 }}>
              At a glance
            </h2>
            <ul style={{ ...ulStyle, margin: 0 }}>
              <li>
                <strong>What:</strong> O. Reg. 383/24 amends the{' '}
                <Cite href={SABS_REG}>
                  Statutory Accident Benefits Schedule (SABS, O. Reg. 34/10)
                </Cite>{' '}
                so that most accident benefits move from mandatory to optional.
              </li>
              <li>
                <strong>When:</strong> July 1, 2026 — for policies with effective
                dates on or after that day.
              </li>
              <li>
                <strong>Still mandatory:</strong> medical, rehabilitation, and
                attendant care benefits.
              </li>
              <li>
                <strong>Now optional:</strong> income replacement, non-earner,
                caregiver, housekeeping/home maintenance, dependent care, death,
                funeral, visitor expenses, lost educational expenses, and damage
                to personal items.
              </li>
              <li>
                <strong>Existing policies:</strong> renew automatically with the
                same coverage as today unless you agree, in writing, to change it.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* What changes */}
      <section style={{ padding: '24px 24px 0' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={h2Style}>What the reform actually does</h2>
          <p style={pStyle}>
            Ontario&apos;s accident benefits system is governed by the SABS — a
            regulation under the Insurance Act that defines what every Ontario
            auto policy must, at minimum, cover.{' '}
            <Cite href={REG_383_24}>O. Reg. 383/24</Cite> amends the SABS and
            the Insurance Act so that on July 1, 2026, the &ldquo;standardized&rdquo;
            accident benefits package shrinks to a smaller core, with the rest
            moved into a menu of optional coverages a consumer can buy or decline.
          </p>
          <p style={pStyle}>
            FSRA, Ontario&apos;s insurance regulator, describes the change as a
            transition from a standardized package to a flexible model where
            drivers choose which protections to keep — see{' '}
            <Cite href={FSRA_HUB}>
              FSRA&apos;s reform hub: &ldquo;Changes in Statutory Accident
              Benefits coverage in Ontario on July 1, 2026.&rdquo;
            </Cite>
          </p>

          <h3 style={h3Style}>What remains mandatory</h3>
          <p style={pStyle}>
            After July 1, 2026, only three categories of accident benefits are
            mandatory on every Ontario auto policy:
          </p>
          <ul style={ulStyle}>
            <li>
              <strong>Medical benefits</strong> — reasonable and necessary
              medical expenses arising from an auto accident.
            </li>
            <li>
              <strong>Rehabilitation benefits</strong> — services that help an
              injured person recover from or adapt to an accident-related
              impairment.
            </li>
            <li>
              <strong>Attendant care benefits</strong> — payments for the cost
              of an aide who helps with daily living tasks after a serious
              injury. Under{' '}
              <Cite href={SABS_REG}>SABS s.19</Cite>, the monthly cap is $3,000
              for non-catastrophic injuries (payable for up to five years) and
              $6,000 for catastrophic impairment (payable for life), both
              drawing against the combined SABS pool. These caps are unchanged
              by the 2026 reform.
            </li>
          </ul>

          <h3 style={h3Style}>What becomes optional</h3>
          <p style={pStyle}>
            For policies effective on or after July 1, 2026, the following
            accident benefits become optional. A consumer can elect to purchase
            each one, or decline it, on their policy:
          </p>
          <ul style={ulStyle}>
            <li>Income replacement</li>
            <li>Non-earner</li>
            <li>Caregiver</li>
            <li>Housekeeping and home maintenance</li>
            <li>Dependent care</li>
            <li>Death</li>
            <li>Funeral</li>
            <li>Visitor expenses</li>
            <li>Lost educational expenses</li>
            <li>Damage to personal items</li>
          </ul>
          <p style={pStyle}>
            The list above is the optionality menu in O. Reg. 383/24 as
            described by{' '}
            <Cite href={FSRA_HUB}>FSRA&apos;s reform hub</Cite> and{' '}
            <Cite href={RIBO_REFORM}>
              RIBO&apos;s Ontario auto reform resource page
            </Cite>
            . If you currently receive any of these benefits without thinking
            about them, that is because they are mandatory today and you got
            them by default. After July 1, 2026, they appear on your policy
            only if you (or someone in your household, where applicable) choose
            to keep them.
          </p>
        </div>
      </section>

      {/* Effective date and existing policies */}
      <section style={{ padding: '0 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={h2Style}>When does it take effect, and what about my existing policy?</h2>
          <p style={pStyle}>
            The reform takes effect on July 1, 2026. From that date forward,
            any new Ontario auto policy — or any renewal that takes effect on
            or after that date — falls under the new framework.
          </p>
          <p style={pStyle}>
            For existing policies, FSRA&apos;s position is straightforward: an
            existing policy renews with the same coverages and limits as the
            expiring policy unless the policyholder agrees, in writing, to a
            change.{' '}
            <Cite href={FSRA_OPTIONALITY_QA}>
              See FSRA&apos;s Optionality Q&amp;A for insurers
            </Cite>
            . That means if you do nothing at renewal, your policy continues
            with the coverage you have today — including the benefits that are
            becoming optional under the reform.
          </p>
          <div style={calloutStyle}>
            <strong>The one change that applies regardless of renewal date.</strong>{' '}
            For the newly optional benefits, the definition of who is covered
            narrows on July 1, 2026. Coverage applies to the named insured, the
            spouse of the named insured, dependants of the named insured and
            their spouse, and persons specified as drivers on the policy. This
            scope change applies on July 1, 2026 regardless of when your
            renewal falls. Source:{' '}
            <Cite href={FSRA_HUB}>FSRA reform hub</Cite>.
          </div>

          <h3 style={h3Style}>The OPCF 47R endorsement</h3>
          <p style={pStyle}>
            Where a consumer chooses to purchase or decline optional benefits,
            those choices are documented on a new endorsement called the{' '}
            <strong>OPCF 47R</strong>, which replaces the previous OPCF 47.
            FSRA does not require insurers to add the OPCF 47R immediately to
            policies effective before July 1, 2026. For existing policies, the
            endorsement is added at renewal, or earlier if there is a mid-term
            change to optional accident benefits.{' '}
            <Cite href={FSRA_OPTIONALITY_QA}>
              See FSRA&apos;s Optionality Q&amp;A
            </Cite>
            .
          </p>

          <h3 style={h3Style}>The &ldquo;first payer&rdquo; change for medical and rehab</h3>
          <p style={pStyle}>
            One change worth flagging separately: under the reform, the auto
            insurer becomes the first payer for accident-related medical and
            rehabilitation expenses (other than medication), replacing the
            current default where private health plans pay first. Source:{' '}
            <Cite href={FSRA_HUB}>FSRA reform hub</Cite>. If you have a
            workplace or family health plan that has been your first stop for
            accident-related physiotherapy or specialist care, that order
            reverses on July 1, 2026.
          </p>
        </div>
      </section>

      {/* What this means at renewal */}
      <section style={{ padding: '0 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={h2Style}>What you can expect to see at your next renewal</h2>
          <p style={pStyle}>
            A few practical things:
          </p>
          <ul style={ulStyle}>
            <li>
              <strong>Your existing coverage carries forward by default.</strong>{' '}
              You do not need to opt back in to coverages that are mandatory
              today and becoming optional July 1. They stay on your policy at
              renewal unless you sign something declining them.
            </li>
            <li>
              <strong>You will see an OPCF 47R on your renewal documents</strong>{' '}
              that reflects which optional benefits you carry and which you
              don&apos;t. Read it carefully and ask your broker about anything
              unclear before signing.
            </li>
            <li>
              <strong>If a broker or insurer recommends declining optional benefits</strong>{' '}
              in exchange for a premium reduction, ask: who in your household
              is covered for what, what happens if a non-named-insured driver
              is hurt in your car, and what each optional benefit would have
              paid for if you needed it.
            </li>
            <li>
              <strong>The coverage scope change applies to everyone on July 1, 2026</strong>{' '}
              — including drivers on policies that don&apos;t renew until later
              in the year. Optional benefits cover a narrower set of people
              than today&apos;s mandatory benefits do, even if your policy
              technically still carries those benefits.
            </li>
          </ul>
        </div>
      </section>

      {/* What we won't tell you */}
      <section style={{ padding: '0 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={h2Style}>What we won&apos;t tell you</h2>
          <p style={pStyle}>
            How much you personally will save on premium after July 1, 2026 —
            because we can&apos;t honestly forecast it. Premium impact depends
            on which optional benefits you keep or decline, how your insurer
            files its reform-adjusted rates with FSRA, and your individual
            rating profile. Anyone publishing a specific &ldquo;average Ontario
            driver saves $X&rdquo; figure is making a forecast, not citing a
            regulated outcome. We don&apos;t do those forecasts.
          </p>
          <p style={pStyle}>
            What you can do: ask your broker for a clear written summary of
            which optional benefits are recommended at your renewal, what each
            costs in premium, and what each would have paid for in a claim. The
            decision is yours to make.
          </p>
        </div>
      </section>

      {/* What's NOT in the reform */}
      <section style={{ padding: '0 24px' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={h2Style}>What is <em>not</em> in the reform</h2>
          <p style={pStyle}>
            Reform coverage often conflates several different changes that have
            happened to Ontario auto insurance over the last few years. To be
            specific about what O. Reg. 383/24 does and does not do:
          </p>
          <ul style={ulStyle}>
            <li>
              <strong>It is not a no-fault repeal.</strong> Ontario&apos;s
              no-fault accident benefits framework — claims against your own
              insurer, regardless of fault — continues. What changes is the
              composition of the benefits package, not the no-fault structure
              itself.
            </li>
            <li>
              <strong>It does not change DCPD rules.</strong> Direct
              Compensation — Property Damage (DCPD) is the coverage that pays
              for damage to your vehicle when you are not at fault. Ontario
              already made DCPD optional on January 1, 2024 via the OPCF 49
              endorsement — that was a separate, earlier reform. O. Reg. 383/24
              (July 2026) is about accident benefits, not DCPD.
            </li>
            <li>
              <strong>Minimum liability limits are not changing here.</strong>{' '}
              O. Reg. 383/24 is about accident benefits (the &ldquo;injury&rdquo;
              side of an auto policy). It does not change the statutory
              minimum third-party liability limit. If you reduce your liability
              limit, that is a separate conversation with your broker.
            </li>
            <li>
              <strong>The attendant care monthly cap is unchanged.</strong> The
              SABS s.19 cap remains $3,000/month non-catastrophic and
              $6,000/month catastrophic.
            </li>
            <li>
              <strong>This reform is Ontario-specific.</strong> Auto insurance
              is provincially regulated; if you move provinces, a different
              regime applies.
            </li>
          </ul>
        </div>
      </section>

      {/* Sources */}
      <section style={{ padding: '24px 24px 0' }}>
        <div style={{ maxWidth: 820, margin: '0 auto' }}>
          <h2 style={h2Style}>Sources used in this article</h2>
          <ul style={ulStyle}>
            <li>
              <Cite href={REG_383_24}>Ontario Regulation 383/24</Cite> — the
              amending regulation itself (ontario.ca/laws).
            </li>
            <li>
              <Cite href={SABS_REG}>
                Statutory Accident Benefits Schedule (O. Reg. 34/10)
              </Cite>{' '}
              — the underlying SABS regulation, including the s.19 attendant
              care cap.
            </li>
            <li>
              <Cite href={FSRA_HUB}>
                FSRA — Changes in Statutory Accident Benefits coverage in
                Ontario on July 1, 2026
              </Cite>{' '}
              — the regulator&apos;s canonical reform hub.
            </li>
            <li>
              <Cite href={FSRA_OPTIONALITY_QA}>
                FSRA — Auto reform accident benefits optionality Q&amp;A for insurers
              </Cite>{' '}
              — guidance on existing policies, renewal treatment, and the OPCF 47R.
            </li>
            <li>
              <Cite href={RIBO_REFORM}>
                RIBO — Ontario auto reform / SABS changes resource page
              </Cite>{' '}
              — the broker regulator&apos;s reform resource for licensees.
            </li>
            <li>
              <Cite href={IBAO_REFORM}>IBAO — Ontario auto</Cite> — industry
              association context on disclosure practice for brokers.
            </li>
          </ul>
          <p style={{ ...pStyle, fontSize: 14, color: colors.muted, marginTop: 16 }}>
            <strong>How we wrote this.</strong> This article was researched and
            drafted by reading the regulation, FSRA&apos;s reform hub and
            Optionality Q&amp;A, and RIBO&apos;s industry resources. Every
            regulatory claim, dollar figure, effective date, and rule change in
            the body of the article links inline to one of the sources above.
            We do not cite premium forecasts or specific savings claims because
            those are projections, not regulated outcomes. We don&apos;t make
            those forecasts ourselves. If you spot a factual error, please
            email{' '}
            <a href="mailto:editorial@toprates.ca" style={linkStyle}>
              editorial@toprates.ca
            </a>{' '}
            and we will correct it.
          </p>
          <p style={{ ...pStyle, fontSize: 13, color: colors.muted, marginTop: 8 }}>
            TopRates.ca is a brand of Webhub4u Inc., which is not a licensed
            insurance broker. This article is educational; it does not
            constitute personalized advice. For questions about your policy,
            talk to a licensed broker or your insurer.{' '}
            <Link href="/legal" style={linkStyle}>
              Full disclosure
            </Link>
            .
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '48px 24px 80px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <h2 style={{ ...h2Style, fontSize: 24, margin: '0 0 8px' }}>
            Have a question about how the reform affects your renewal?
          </h2>
          <p style={pStyle}>
            Send us a note. We&apos;re not a brokerage today, but we&apos;ll
            route auto questions appropriately and reply within one business
            day.
          </p>
          <div
            style={{
              background: colors.white,
              border: `1px solid ${colors.border}`,
              borderRadius: 10,
              padding: 28,
              marginTop: 16,
            }}
          >
            <ContactForm defaultProduct="auto-insurance" />
          </div>
        </div>
      </section>
    </main>
  );
}
