import PageWrapper from '@/components/layout/PageWrapper';
import { Button } from '@/components/ui/Button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/Card';
import ContactForm from '@/components/contact/ContactForm';
import FaqAccordion from '@/components/shared/FaqAccordion';
import { DisclaimerBlock } from '@/components/disclaimers/DisclaimerBlock';

export const metadata = {
  title: 'Business Insurance Education — TopRates.ca',
  description: 'Plain-English Canadian business insurance education — general liability, commercial property, professional liability, workers compensation. Independent Canadian insurance education. Quote comparison planned, once KLC Group Canada Inc. completes RIBO registration. Operated by Webhub4u Inc.',
  keywords: 'business insurance, commercial liability, property insurance, professional liability, workers compensation, Canada',
  openGraph: {
    title: 'Business Insurance Education — TopRates.ca',
    description: 'Plain-English Canadian business insurance education. Independent Canadian insurance education.',
  },
};

const coverageFeatures = [
  {
    title: 'Commercial General Liability',
    description: 'Protects against claims of bodily injury, property damage, and legal liability. Essential for all businesses. Covers legal defense costs and court awards.',
    icon: '⚖️',
  },
  {
    title: 'Property Insurance',
    description: 'Covers your business buildings, equipment, inventory, and fixtures against fire, theft, vandalism, and weather damage. Available for owned or leased properties.',
    icon: '🏢',
  },
  {
    title: 'Professional Liability',
    description: 'Also called errors and omissions insurance. Covers claims of negligence, errors, or inadequate services in your professional work.',
    icon: '📋',
  },
  {
    title: 'Workers Compensation',
    description: 'Covers employee injuries and illnesses. Required by law in most provinces. Includes medical benefits and lost wage replacement.',
    icon: '👷',
  },
];

const whyChooseToprates = [
  'Plain-English explanations of every commercial coverage type',
  'Independent editorial — no commission-driven product pitches',
  'Updated as Canadian regulations change (CGL, WSIB, professional liability rules)',
  'Quote comparison is planned, once KLC Group Canada Inc. completes RIBO registration',
];

const faqItems = [
  {
    question: 'Is business insurance mandatory in Canada?',
    answer: 'While general business liability insurance isn\'t legally required federally, it\'s often required by clients, landlords, or lenders. Workers compensation is mandatory if you have employees (requirements vary by province). Professional liability is required in regulated professions.',
  },
  {
    question: 'What coverage do small businesses typically need?',
    answer: 'Most small businesses need general liability ($1-2M), property insurance (for owned assets), and workers compensation (if they have employees). Professional liability is recommended if you provide services or advice. Cyber liability is increasingly important.',
  },
  {
    question: 'How much coverage should I carry?',
    answer: 'Coverage amounts depend on your industry, revenue, number of employees, and assets. General liability is typically $1-5 million. Property coverage should match your actual replacement costs. Our advisors help determine appropriate limits.',
  },
  {
    question: 'What factors affect business insurance costs?',
    answer: 'Costs depend on your industry, business size, location, claim history, safety practices, and coverage amounts. High-risk industries pay more. Good safety records and loss prevention measures can reduce premiums.',
  },
];

export default function BusinessInsurancePage() {

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
              Canadian Business Insurance, in Plain English
            </h1>
            <p className="text-xl text-gray-100 mb-8">
              Plain-English education on commercial general liability, property, professional
              liability, and workers compensation across Canada. Quote comparison is planned,
              once KLC Group Canada Inc. completes RIBO registration. Until then, this page is
              education only.
            </p>
            <Button variant="accent" size="lg" href="#get-quote">
              Join the launch list
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
            Essential Business Coverage Options
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
                P&amp;C is RIBO-licensed in Ontario
              </h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Property and casualty insurance — including business insurance — is regulated by
                the Registered Insurance Brokers of Ontario (RIBO). KLC Group Canada Inc. plans
                to register with RIBO ahead of the RIBO-registered launch.
              </p>
              <p className="text-gray-700 leading-relaxed text-sm">
                Until that registration is granted, TopRates.ca does not sell, quote, bind,
                broker, or advise on business insurance. The content on this page is for
                general educational purposes only.
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

      {/* CTA Section */}
      <section id="get-quote" className="py-16 md:py-20 bg-gradient-to-r from-[#1a365d] to-[#0f1f3a] text-white">
        <PageWrapper>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
              Be first when business insurance comparison launches
            </h2>
            <p className="text-lg text-gray-100 mb-10 text-center">
              Business insurance comparison and brokerage are planned, once KLC Group Canada Inc. completes RIBO registration. Alongside
              KLC Group Canada Inc.&rsquo;s RIBO registration. Send us a note and we&rsquo;ll add
              you to our launch list — we&rsquo;ll reach out when quotes are live.
            </p>
            <div className="bg-white rounded-lg p-8">
              <ContactForm defaultProduct="business-insurance" />
            </div>
          </div>
        </PageWrapper>
      </section>
    </main>
  );
}
