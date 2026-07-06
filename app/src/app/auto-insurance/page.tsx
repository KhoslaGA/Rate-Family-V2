import type { Metadata } from 'next';
import AutoInsuranceClient from './_client/AutoInsuranceClient';
import AutoInsuranceContent from './_client/AutoInsuranceContent';
import ContactForm from '@/components/contact/ContactForm';
import { DisclaimerBlock } from '@/components/disclaimers/DisclaimerBlock';

export const metadata: Metadata = {
  title: 'Ontario Auto Insurance 2026: Reform & GTA Guide — TopRates.ca',
  description:
    'Understand Ontario auto insurance in 2026: the July 1 reform making accident benefits optional, why GTA drivers pay more, and legitimate ways to lower your rate. Plain-English education from TopRates.ca.',
  keywords:
    'car insurance Ontario, auto insurance Ontario, Ontario auto reform 2026, accident benefits optional, GTA car insurance, Brampton car insurance',
  openGraph: {
    title: 'Ontario Auto Insurance 2026: Reform & GTA Guide — TopRates.ca',
    description:
      'The July 1, 2026 reform, why GTA premiums run high, and legitimate ways to lower your rate. Plain-English Ontario auto insurance education.',
    type: 'website',
  },
  alternates: { canonical: '/auto-insurance' },
};

export default function AutoInsurancePage() {
  return (
    <>
      <AutoInsuranceClient />
      <AutoInsuranceContent />
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 24px' }}>
        <DisclaimerBlock vertical="pc" />
      </div>
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-[#1B2A4A] mb-2">Get in touch</h2>
          <p className="text-gray-700 mb-8">
            Auto insurance comparison is planned for 2027 alongside KLC Group Canada Inc.&rsquo;s
            RIBO registration. Send us a note and we&rsquo;ll add you to our list — we&rsquo;ll
            reach out when quotes are live.
          </p>
          <div className="bg-white rounded-lg shadow-md p-8 border border-gray-100">
            <ContactForm defaultProduct="auto-insurance" />
          </div>
        </div>
      </section>
    </>
  );
}
