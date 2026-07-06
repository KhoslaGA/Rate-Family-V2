/**
 * Insurance glossary — server shell.
 *
 * Page metadata + JSON-LD live here. The interactive UI (search, category
 * filter, click-to-expand) is in GlossaryClient. Term data is in ./data.ts.
 *
 * Compliance scrubs (preserved — see data.ts header for the full list):
 *   - No specific carrier market-share %, no invented dollar amounts in
 *     examples, no operator licence numbers, no unsubstantiated stats.
 */
import type { Metadata } from 'next';
import GlossaryClient from './GlossaryClient';
import { totalTerms, TERMS } from './data';

export const metadata: Metadata = {
  title: 'Insurance glossary | TopRates.ca',
  description:
    'Plain-English definitions of Canadian insurance terms — auto, home, life, credit, and regulatory. Search, filter by category, expand any term for context and links to the relevant pillar guide.',
  alternates: { canonical: '/glossary' },
};

export default function GlossaryPage() {
  // Build DefinedTermSet JSON-LD so search engines can index the glossary.
  const definedTerms = Object.values(TERMS)
    .flat()
    .map((t) => ({
      '@type': 'DefinedTerm',
      name: t.name,
      description: t.def,
      inDefinedTermSet: 'https://toprates.ca/glossary',
    }));

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DefinedTermSet',
    name: 'TopRates.ca Insurance Glossary',
    url: 'https://toprates.ca/glossary',
    numberOfItems: totalTerms(TERMS),
    hasDefinedTerm: definedTerms,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GlossaryClient />
    </>
  );
}
