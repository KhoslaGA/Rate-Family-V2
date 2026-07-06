/**
 * LifeRate bespoke footer (template #2). Rendered by the root layout only when
 * x-site === 'liferate'. Styling in app/src/styles/liferate.css.
 *
 * Entity disclosure (Rate_Family_Disclosure_Suite, owner-confirmed): ALL four sites are
 * OPERATED by Webhub4u Inc. (a publisher, not a licensed broker). KLC Group Canada Inc. holds
 * ONLY a corporate life (LLQP/FSRA) licence and receives LIFE referrals. Stated ONCE here in the
 * footer — do not repeat/boast across body copy. [LAWYER] items (referral-compensation wording,
 * "no coverage bound") are pending regulatory-lawyer sign-off; published as written meanwhile.
 */
import Link from 'next/link'

const DISCLOSURE =
  'LifeRate.ca is operated by Webhub4u Inc., a Canadian technology company and publisher (not a licensed insurance broker). When you request a life insurance consultation, your inquiry is referred to KLC Group Canada Inc., a firm licensed for life insurance by the Financial Services Regulatory Authority of Ontario (FSRA) under the Life Licence Qualification Program (LLQP). A licensed advisor from KLC Group Canada Inc. will contact you. Advisors are compensated by the insurer through commission when a policy is placed. No coverage is bound until an application is approved and issued by the insurer. This service is offered to residents of Ontario; availability in other provinces may differ.'

export default function LrFooter() {
  return (
    <footer className="lr-foot">
      <div className="wrap">
        <div className="lr-foot-top">
          <div className="lr-foot-brand">
            <span className="lr-logo-word">
              <span className="a" style={{ color: 'var(--brand-300)' }}>Life</span>
              <span className="b">Rate</span>
            </span>
            <p>Life and critical-illness insurance, explained like a human would. Part of the Rate family of Canadian insurance-comparison sites.</p>
          </div>
          <div className="lr-foot-col">
            <h5>Coverage</h5>
            <Link href="/life-insurance">Life insurance</Link>
            <Link href="/life-insurance/critical-illness">Critical illness</Link>
            <Link href="/life-insurance/calculator">Needs calculator</Link>
            <Link href="/life-insurance/quote">Get a quote</Link>
          </div>
          <div className="lr-foot-col">
            <h5>Learn</h5>
            <Link href="/life-insurance/guides">Guides</Link>
            <Link href="/life-insurance/glossary">Glossary</Link>
            <Link href="/#family">The Rate family</Link>
            <Link href="/life-insurance#faq">FAQ</Link>
          </div>
          <div className="lr-foot-col">
            <h5>Company</h5>
            <Link href="/about">About</Link>
            <Link href="/how-we-make-money">How we make money</Link>
            <Link href="/disclosures">Trust &amp; transparency</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/legal">Legal</Link>
          </div>
        </div>
        <div className="lr-foot-disc">{DISCLOSURE}</div>
        <div className="lr-foot-legal">
          <span>© 2026 The Rate Family · operated by Webhub4u Inc.</span><span className="sep">·</span>
          <Link href="/privacy">Privacy</Link><span className="sep">·</span>
          <Link href="/terms">Terms</Link><span className="sep">·</span>
          <Link href="/legal">Accessibility</Link><span className="sep">·</span>
          <Link href="/disclosures">Regulatory disclosures</Link>
        </div>
      </div>
    </footer>
  )
}
