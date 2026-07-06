/**
 * TermRates bespoke footer (template #2). Rendered by the root layout only when
 * x-site === 'termrates'. Styling in app/src/styles/termrates.css.
 *
 * Entity disclosure (Rate_Family_Disclosure_Suite, owner-confirmed): TermRates is OPERATED by
 * Webhub4u Inc. — a publisher, NOT a licensed mortgage brokerage; it does not arrange or offer
 * mortgages/credit. Rates are illustrative, not an offer of credit. Stated ONCE here in the
 * footer — do not repeat/boast across body copy. Company links reuse the shared hub pages.
 */
import Link from 'next/link'

const DISCLOSURE =
  'TermRates.ca is operated by Webhub4u Inc., a Canadian technology company and publisher. Webhub4u Inc. is not a licensed mortgage brokerage and does not arrange, negotiate, or offer mortgages or credit. Mortgage and interest rates shown are illustrative, gathered from public and third-party sources, refreshed periodically, and are not an offer of credit or a guarantee of eligibility. Actual rates and approval are determined by the lender based on your application, credit, property, and applicable regulations, and vary by province. Always review your mortgage commitment and consult a licensed mortgage professional before making a decision. Where we link to a licensed third-party provider, we may receive a referral fee.'

export default function TrFooter() {
  return (
    <footer className="tr-foot">
      <div className="wrap">
        <div className="tr-foot-top">
          <div className="tr-foot-brand">
            <span className="tr-logo-word">
              <span className="a" style={{ color: 'var(--brand-300)' }}>Term</span>
              <span className="b">Rates</span>
            </span>
            <p>Live Canadian mortgage rates, compared honestly. The numbers first, the pitch never. Part of the Rate family.</p>
          </div>
          <div className="tr-foot-col">
            <h5>Rates</h5>
            <Link href="/mortgages">New purchase</Link>
            <Link href="/mortgages/renewal">Renewal &amp; switch</Link>
            <Link href="/mortgages/refinance">Refinance &amp; HELOC</Link>
            <Link href="/rates">Full rate table</Link>
          </div>
          <div className="tr-foot-col">
            <h5>Tools</h5>
            <Link href="/mortgages/calculator">Payment calculator</Link>
            <Link href="/mortgages/affordability">Affordability</Link>
            <Link href="/mortgages/quote">Get my rate</Link>
            <Link href="/mortgages/glossary">Glossary</Link>
          </div>
          <div className="tr-foot-col">
            <h5>Calculators</h5>
            <Link href="/mortgages/stress-test">Stress test</Link>
            <Link href="/mortgages/land-transfer-tax">Land transfer tax</Link>
            <Link href="/mortgages/cmhc-calculator">CMHC premium</Link>
            <Link href="/mortgages/penalty-calculator">Prepayment penalty</Link>
            <Link href="/mortgages/rent-vs-buy">Rent vs buy</Link>
          </div>
          <div className="tr-foot-col">
            <h5>Company</h5>
            <Link href="/about">About</Link>
            <Link href="/how-we-make-money">How we make money</Link>
            <Link href="/disclosures">Trust &amp; transparency</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/legal">Legal</Link>
          </div>
        </div>
        <div className="tr-foot-disc">{DISCLOSURE}</div>
        <div className="tr-foot-legal">
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
