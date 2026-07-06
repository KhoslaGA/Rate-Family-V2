/**
 * HealthRate site data — nav, footer, i18n chrome strings, featured guides.
 * Ported from the source kit's hr-data.js, with every href rewritten to this
 * app's nested routes (owned under /health-insurance + /travel-insurance) and
 * cross-family links pointed at the sibling hosts. Education-only: no commerce.
 */

export type HrLang = 'en' | 'fr' | 'pa' | 'hi' | 'ur'

/** Route map — one place to keep the nested canonical paths consistent. */
export const R = {
  home: '/',
  superVisa: '/health-insurance/super-visa',
  superVisaGuide: '/health-insurance/super-visa/guide',
  checklist: '/health-insurance/super-visa/checklist',
  faq: '/health-insurance/faq',
  newcomers: '/health-insurance/newcomers',
  ohipWait: '/health-insurance/newcomers/ohip-wait',
  toronto: '/health-insurance/newcomers/toronto',
  glossary: '/health-insurance/glossary',
  travel: '/travel-insurance',
  pricing: '/travel-insurance/pricing',
  guides: '/health-insurance/guides',
  news: '/health-insurance/news/foreign-insurers',
  report: '/health-insurance/report',
  editorial: '/health-insurance/editorial',
  languages: '/health-insurance/languages',
  assistant: '/health-insurance/assistant',
  about: '/about',
  trust: '/trust',
  legal: '/legal',
  contact: '/contact',
  subscribe: '/subscribe',
} as const

/** Sibling hosts (cross-family). */
export const SIBLINGS = {
  liferate: 'https://liferate.ca',
  termrates: 'https://termrates.ca/mortgages',
  termratesRefi: 'https://termrates.ca/mortgages/refinance',
  toprates: 'https://toprates.ca',
}

export const HR_NAV = [
  { key: 'supervisa', label: { en: 'Super Visa', fr: 'Super Visa' }, href: R.superVisa, subs: [
    ['What it is', R.superVisa],
    ['The full guide', R.superVisaGuide],
    ['Coverage checklist', R.checklist],
    ['FAQ', R.faq],
  ] },
  { key: 'newcomers', label: { en: 'Newcomers', fr: 'Nouveaux arrivants' }, href: R.newcomers, subs: [
    ['OHIP waiting period', R.ohipWait],
    ['Your first 3 months', R.newcomers],
    ['Newcomers in Toronto', R.toronto],
    ['Glossary', R.glossary],
  ] },
  { key: 'travel', label: { en: 'Travel', fr: 'Voyage' }, href: R.travel, subs: [
    ['Visitors to Canada', R.travel],
    ['How pricing works', R.pricing],
    ['Students & snowbirds', R.travel + '#who'],
    ['2026 data report', R.report],
  ] },
  { key: 'guides', label: { en: 'Guides', fr: 'Guides' }, href: R.guides, subs: [
    ['All guides', R.guides],
    ['Latest update', R.news],
    ['Read in your language', R.languages],
    ['Our editorial desk', R.editorial],
  ] },
  { key: 'products', label: { en: 'Our services', fr: 'Nos services' }, href: SIBLINGS.toprates, subs: [
    ['Life insurance · LifeRate', SIBLINGS.liferate],
    ['Mortgage rates · TermRates', SIBLINGS.termrates],
    ['Refinance & HELOC · TermRates', SIBLINGS.termratesRefi],
    ['Super Visa · here', R.superVisa],
    ['Travel insurance · here', R.travel],
    ['Auto, home & more · TopRates', SIBLINGS.toprates],
  ] },
] as const

/** Footer columns — [enLabel, frLabel, href]. */
export const HR_FOOTER = [
  { t: ['Learn', 'Apprendre'], links: [
    ['Super Visa', 'Super Visa', R.superVisa],
    ['Newcomers', 'Nouveaux arrivants', R.newcomers],
    ['Travel insurance', 'Assurance voyage', R.travel],
    ['All guides', 'Tous les guides', R.guides],
  ] },
  { t: ['Tools', 'Outils'], links: [
    ['OHIP wait planner', 'Délai OHIP', R.ohipWait],
    ['Coverage checklist', 'Liste de vérification', R.checklist],
    ['Glossary', 'Glossaire', R.glossary],
    ['FAQ', 'FAQ', R.faq],
  ] },
  { t: ['All products', 'Tous les produits'], links: [
    ['Life insurance', 'Assurance vie', SIBLINGS.liferate],
    ['Mortgage rates', 'Taux hypothécaires', SIBLINGS.termrates],
    ['Refinance & HELOC', 'Refinancement', SIBLINGS.termratesRefi],
    ['Super Visa', 'Super Visa', R.superVisa],
    ['Travel insurance', 'Assurance voyage', R.travel],
    ['Auto, home & more', 'Auto, habitation et plus', SIBLINGS.toprates],
  ] },
  { t: ['Company', 'Entreprise'], links: [
    ['About', 'À propos', R.about],
    ['Trust & transparency', 'Confiance et transparence', R.trust],
    ['Editorial desk', 'Équipe éditoriale', R.editorial],
    ['Contact', 'Contact', R.contact],
  ] },
  { t: ['Legal', 'Légal'], links: [
    ['Legal & disclosures', 'Mentions légales', R.legal],
    ['Privacy', 'Confidentialité', R.legal + '#privacy'],
    ['Terms', 'Conditions', R.legal + '#terms'],
    ['Subscribe', 'S’abonner', R.subscribe],
  ] },
] as const

export const HR_GUIDES = [
  { tag: 'GUIDE', href: R.superVisaGuide,
    title: { en: 'Super Visa insurance, explained', fr: 'L’assurance Super Visa, expliquée' },
    desc: { en: 'What it is, who needs it, and what the coverage must include.', fr: 'Ce que c’est, qui en a besoin, et ce que la couverture doit inclure.' } },
  { tag: 'GUIDE', href: R.ohipWait,
    title: { en: 'OHIP waiting period', fr: 'Le délai d’attente de l’OHIP' },
    desc: { en: 'New to Ontario? Here is how the 3-month wait works.', fr: 'Nouvel arrivant en Ontario? Voici comment fonctionne le délai de 3 mois.' } },
  { tag: 'GUIDE', href: R.travel,
    title: { en: 'Visitor & travel cover', fr: 'Assurance visiteurs et voyage' },
    desc: { en: 'Coverage for family visiting Canada — in plain language.', fr: 'La couverture pour la famille en visite au Canada — en langage clair.' } },
] as const

export const HR_LANGS: [string, string, 'live' | 'soon'][] = [
  ['English', 'EN', 'live'],
  ['Français', 'FR', 'live'],
  ['ਪੰਜਾਬੀ', 'PA', 'soon'],
  ['हिन्दी', 'HI', 'soon'],
  ['اردو', 'UR', 'soon'],
]

/** "Body is still English" notices, shown when lang !== en. */
export const HR_NOTES: Partial<Record<HrLang, string>> = {
  fr: 'La traduction complète des guides arrive. Pour l’instant, le contenu détaillé est en anglais.',
  pa: 'ਪੂਰਾ ਅਨੁਵਾਦ ਜਲਦੀ ਆ ਰਿਹਾ ਹੈ। ਫਿਲਹਾਲ ਗਾਈਡਾਂ ਅੰਗਰੇਜ਼ੀ ਵਿੱਚ ਹਨ।',
  hi: 'पूरा अनुवाद जल्द आ रहा है। अभी गाइड अंग्रेज़ी में हैं।',
  ur: 'مکمل ترجمہ جلد آ رہا ہے۔ فی الحال گائیڈز انگریزی میں ہیں۔',
}

export const RTL_LANGS: HrLang[] = ['ur']

export type L = {
  code: HrLang
  headerCta: [string, string]
  footEyebrow: string
  edu: string
  readGuide: string
  hero: { eyebrow: string; title: [string, string, string]; sub: string; primary: [string, string]; ghost: [string, string]; checks: string[] }
  guidesHead: { eyebrow: string; title: string; all: string }
  paths: { eyebrow: string; title: string; items: [string, string, string, string][] }
  tools: { eyebrow: string; title: string; items: [string, string, string, string][] }
  langband: { eyebrow: string; title: string; sub: string; cta: string }
  trust: [string, string][]
}

export const HR_I18N: Record<'en' | 'fr', L> = {
  en: {
    code: 'en',
    headerCta: ['Super Visa guide', R.superVisa],
    footEyebrow: 'Independent Canadian insurance education',
    edu: 'HealthRate is education only. We do not sell, quote or arrange insurance — on this page or anywhere on this site.',
    readGuide: 'Read the guide',
    hero: {
      eyebrow: 'Health & travel insurance, explained',
      title: ['Welcome. Health cover, ', 'made clear', '.'],
      sub: 'Super Visa, newcomer health, and travel insurance — explained simply, in your language. Read the guides at your own pace. No quotes, no pressure.',
      primary: ['Read the Super Visa guide', R.superVisa],
      ghost: ['Health insurance 101', R.guides],
      checks: ['Plain-English, second-language friendly', 'Read at your own pace', 'Education only — no quotes, no pressure'],
    },
    guidesHead: { eyebrow: 'Featured guides', title: 'Start here', all: 'All guides' },
    paths: {
      eyebrow: 'Start with your situation',
      title: 'Three doors in. Pick yours.',
      items: [
        ['Inviting parents or grandparents', 'Super Visa insurance — the rules, the checklist, the guide.', R.superVisa, 'Start with Super Visa'],
        ['Just landed in Canada', 'How provincial coverage starts, and how to bridge a waiting period calmly.', R.newcomers, 'Plan your first months'],
        ['Family visiting, or travelling', 'What visitor and travel policies cover — and exclude — in plain words.', R.travel, 'Understand travel cover'],
      ],
    },
    tools: {
      eyebrow: 'Tools, not quotes',
      title: 'Interactive, useful — and nothing asks for your email.',
      items: [
        ['Coverage checklist', 'Eight clauses to tick with the policy wording open. Progress saves in your browser.', R.checklist, 'Open the checklist'],
        ['OHIP wait planner', 'Pick a landing date and see the gap a classic waiting period would create.', R.ohipWait, 'Plan the gap'],
        ['Pricing explainer', 'Flip the five levers that move visitor-insurance pricing. An index, never a price.', R.pricing, 'Flip the levers'],
      ],
    },
    langband: {
      eyebrow: 'In your language',
      title: 'Five languages, tracked honestly.',
      sub: 'Navigation and safety notices ship in all five today; full guides are rolling out, Super Visa first.',
      cta: 'See what is translated today',
    },
    trust: [['5', 'languages'], ['Super Visa', 'guides'], ['Phase 1', 'education only'], ['Newcomer', 'first']],
  },
  fr: {
    code: 'fr',
    headerCta: ['Guide Super Visa', R.superVisa],
    footEyebrow: 'Éducation indépendante en assurance, au Canada',
    edu: 'HealthRate, c’est de l’éducation seulement. Nous ne vendons, ne soumissionnons ni n’arrangeons aucune assurance — sur cette page ou ailleurs sur ce site.',
    readGuide: 'Lire le guide',
    hero: {
      eyebrow: 'Assurance santé et voyage, expliquée',
      title: ['Bienvenue. L’assurance santé, ', 'enfin claire', '.'],
      sub: 'Super Visa, santé des nouveaux arrivants, assurance voyage — expliqués simplement, dans votre langue. Lisez à votre rythme. Aucune soumission, aucune pression.',
      primary: ['Lire le guide Super Visa', R.superVisa],
      ghost: ['L’assurance santé 101', R.guides],
      checks: ['Langage simple, pensé pour une langue seconde', 'Lisez à votre rythme', 'Éducation seulement — aucune soumission, aucune pression'],
    },
    guidesHead: { eyebrow: 'Guides vedettes', title: 'Commencez ici', all: 'Tous les guides' },
    paths: {
      eyebrow: 'Partez de votre situation',
      title: 'Trois portes d’entrée. Choisissez la vôtre.',
      items: [
        ['Vous invitez vos parents ou grands-parents', 'L’assurance Super Visa — les règles, la liste, le guide.', R.superVisa, 'Commencer par le Super Visa'],
        ['Vous venez d’arriver au Canada', 'Comment la couverture provinciale commence, et comment combler un délai calmement.', R.newcomers, 'Planifier vos premiers mois'],
        ['De la visite, ou un voyage', 'Ce que les polices visiteurs et voyage couvrent — et excluent — en mots simples.', R.travel, 'Comprendre l’assurance voyage'],
      ],
    },
    tools: {
      eyebrow: 'Des outils, pas des soumissions',
      title: 'Interactifs, utiles — et rien ne demande votre courriel.',
      items: [
        ['Liste de vérification', 'Huit clauses à cocher avec le libellé ouvert. Votre progrès reste dans votre navigateur.', R.checklist, 'Ouvrir la liste'],
        ['Délai OHIP', 'Choisissez une date d’arrivée et voyez l’écart qu’un délai classique créerait.', R.ohipWait, 'Planifier l’écart'],
        ['Explication des prix', 'Manipulez les cinq leviers du prix d’une assurance visiteur. Un indice, jamais un prix.', R.pricing, 'Essayer les leviers'],
      ],
    },
    langband: {
      eyebrow: 'Dans votre langue',
      title: 'Cinq langues, suivies honnêtement.',
      sub: 'L’interface et les avis essentiels existent déjà dans les cinq langues; les guides complets arrivent, Super Visa d’abord.',
      cta: 'Voir ce qui est traduit aujourd’hui',
    },
    trust: [['5', 'langues'], ['Super Visa', 'guides'], ['Phase 1', 'éducation seulement'], ['Nouveaux', 'arrivants d’abord']],
  },
}

/** Resolve the string table for a language (pa/hi/ur fall back to EN chrome). */
export function pickL(lang: HrLang): L {
  return lang === 'fr' ? HR_I18N.fr : HR_I18N.en
}
