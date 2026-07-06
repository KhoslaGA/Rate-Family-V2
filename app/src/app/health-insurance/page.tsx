import PageWrapper from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import FaqAccordion from '@/components/shared/FaqAccordion';
import { DisclaimerBlock } from '@/components/disclaimers/DisclaimerBlock';
import { Icon } from '@/components/brand/Icon';

export const metadata = {
  title: 'Health Insurance — Critical Illness, Disability & Extended Health | TopRates.ca',
  description: 'Plain-English Canadian health insurance education — critical illness, disability, extended health, and travel medical. Reviewed by LLQP-licensed advisors at KLC Group Canada Inc. Operated by Webhub4u Inc.',
  keywords: 'health insurance, critical illness, disability insurance, extended health, dental, prescription drugs, travel medical, Canada, LLQP',
  openGraph: {
    title: 'Health Insurance Education — TopRates.ca',
    description: 'Plain-English Canadian health insurance education. Reviewed by LLQP-licensed advisors at KLC Group Canada Inc.',
  },
};

const coverageFeatures = [
  {
    title: 'Extended Health Coverage',
    description: 'Covers services not included in provincial plans like physiotherapy, chiropractic, massage therapy, mental health counseling, and prescription drugs.',
    icon: '🏥',
  },
  {
    title: 'Dental Insurance',
    description: 'Comprehensive coverage for preventive care (cleanings, exams), basic procedures (fillings), and major work (crowns, implants). Typically covers 70-80% of costs.',
    icon: '🦷',
  },
  {
    title: 'Vision Coverage',
    description: 'Covers eye exams and prescription eyeglasses or contact lenses. Many plans reimburse $150-$300 annually for vision care.',
    icon: '👁️',
  },
  {
    title: 'Travel Medical Insurance',
    description: 'Emergency medical coverage when traveling outside Canada. Includes hospital stays, emergency medications, and medical evacuation.',
    icon: '✈️',
  },
];

const whyChooseToprates = [
  'Plain-English education on critical illness, disability, and extended health products',
  'Independent editorial — no commission-driven product pitches',
  'Updated as Canadian regulations and provincial drug formularies change',
  'Quote and advisory services planned, once KLC Group Canada Inc. completes RIBO registration for property and casualty',
];

const faqItems = [
  {
    question: 'What\'s the difference between provincial and private health insurance?',
    answer: 'Provincial health plans (OHIP, MSP, etc.) cover basic doctor visits and hospital care. Private health insurance complements this by covering services like dental, vision, prescription drugs, and therapy. Many employers offer private plans to fill these gaps.',
  },
  {
    question: 'Are prescription drugs covered by health insurance?',
    answer: 'Yes, extended health plans typically cover prescription medications at 70-90% (depending on your deductible and plan). Some drugs may require prior authorization. Coverage limits and formularies vary by plan.',
  },
  {
    question: 'Do I need separate travel medical insurance?',
    answer: 'Yes. Provincial health insurance doesn\'t cover medical emergencies outside Canada. Travel medical insurance is essential - it\'s affordable and covers emergency hospital costs, which can be tens of thousands of dollars.',
  },
  {
    question: 'What\'s covered under dental insurance?',
    answer: 'Most plans cover preventive care (exams, cleanings, X-rays) at 100%, basic procedures (fillings) at 80%, and major work (crowns, root canals) at 50-70%. Annual maximums typically range from $1,000-$2,500.',
  },
];

export default function HealthInsurancePage() {

  return (
    <main className="w-full">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#1a365d] to-[#0f1f3a] text-white py-16 md:py-24">
        <PageWrapper>
          <div className="max-w-3xl">
            <div className="text-[11px] uppercase tracking-[0.2em] text-amber-300 font-bold mb-3">
              INDEPENDENT CANADIAN INSURANCE EDUCATION
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Canadian Health Insurance, in Plain English
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Plain-English education on critical illness, disability, extended health, and
              travel medical. Educational content only — for personal advice on your specific
              situation, consult a licensed insurance advisor.
            </p>
            <Button variant="accent" size="lg" href="#read-more">
              Read the guide
            </Button>
          </div>
        </PageWrapper>
      </section>

      <PageWrapper>
        <DisclaimerBlock vertical="pc" />
      </PageWrapper>

      {/* Coverage Features */}
      <section className="py-16 md:py-20">
        <PageWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-12 text-center">
            Health Insurance Coverage Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coverageFeatures.map((feature, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </PageWrapper>
      </section>

      {/* Why Choose Toprates */}
      <section className="py-16 md:py-20 bg-gray-50">
        <PageWrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-8">
                What this page is — and what it isn&rsquo;t
              </h2>
              <ul className="space-y-4">
                {whyChooseToprates.map((reason, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="text-[#0d9488] text-2xl font-bold flex-shrink-0">✓</span>
                    <span className="text-gray-700 text-lg">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-8 border-l-4 border-amber-500">
              <div className="text-[11px] uppercase tracking-[0.2em] text-amber-700 font-bold mb-3">
                Regulatory note
              </div>
              <h3 className="text-xl font-bold text-[#1a365d] mb-4">
                Accident &amp; sickness is FSRA / LLQP-licensed in Ontario
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                In Ontario, life and accident &amp; sickness insurance agents must be licensed
                through FSRA, with the Life Licence Qualification Program (LLQP) as part of the
                pathway. Critical illness, disability, and travel medical fall within this scope.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                TopRates.ca is operated by Webhub4u Inc., a Canadian technology company that is
                not a licensed insurance broker. For personal advice on your specific situation,
                consult a licensed advisor.
              </p>
            </div>
          </div>
        </PageWrapper>
      </section>

      {/* FAQ Accordion */}
      <section className="py-16 md:py-20">
        <PageWrapper>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-12 text-center">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion items={faqItems} />
          </div>
        </PageWrapper>
      </section>

      {/* Educational CTA Section — no licensed advisory on this page in Phase 1 */}
      <section id="read-more" className="py-16 md:py-20 bg-gradient-to-r from-[#1a365d] to-[#0f1f3a] text-white">
        <PageWrapper>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Got a specific question?
            </h2>
            <p className="text-lg text-gray-100 mb-10">
              Educational content only on this page. For licensed advisory, our partner KLC
              Group Canada Inc. handles life insurance referrals — visit our life insurance
              page to get connected with a LLQP-licensed advisor.
            </p>
            <a href="/life-insurance" className="inline-flex items-center gap-2 bg-white text-[#1a365d] font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition">
              Go to life insurance <Icon name="arrowRight" size={16} color="#F2B441" />
            </a>
          </div>
        </PageWrapper>
      </section>
    </main>
  );
}
