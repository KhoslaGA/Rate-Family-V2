/**
 * Server-side dictionary loader.
 *
 * Each locale has its own JSON file in src/i18n/dictionaries/. Loaders
 * are dynamic imports so unused locale bundles are tree-shaken from the
 * server build.
 *
 * For now every locale ships the same surface (newcomers placeholder for
 * non-English). When more pages become multilingual, extend the shape
 * here and add the corresponding keys to each JSON file.
 */

// Note: this module imports JSON dictionaries via dynamic import. Only call
// it from server components / server actions / route handlers. (We're not
// using the optional `server-only` package to keep the dependency tree
// lean — convention enforced via code review instead.)
import type { Locale } from './config';

export interface NewcomersDict {
  meta: { title: string; description: string };
  hero?: { eyebrow: string; title: string; subtitle: string };
  intro?: { heading: string; body: string };
  sections?: Array<{ title: string; body: string }>;
  cta?: { title: string; body: string; primary: string; primaryHref: string };
  faqs?: Array<{ q: string; a: string }>;
  placeholder?: {
    eyebrow: string;
    title: string;
    body: string;
    ctaEnglish: string;
    ctaContact: string;
  };
}

export interface Dictionary {
  newcomers: NewcomersDict;
}

const loaders: Record<Locale, () => Promise<Dictionary>> = {
  en: () => import('./dictionaries/en.json').then((m) => m.default as Dictionary),
  fr: () => import('./dictionaries/fr.json').then((m) => m.default as Dictionary),
  pa: () => import('./dictionaries/pa.json').then((m) => m.default as Dictionary),
  hi: () => import('./dictionaries/hi.json').then((m) => m.default as Dictionary),
  ur: () => import('./dictionaries/ur.json').then((m) => m.default as Dictionary),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return loaders[locale]();
}
