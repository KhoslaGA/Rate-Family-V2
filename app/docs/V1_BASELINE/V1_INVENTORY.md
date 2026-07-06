# V1 Inventory — TopRates.ca

Discovery output for the **v2 UI uplift** (brief: `ClaudeCode_Brief_v2_UI_into_v1.md`).
Captured on the `feat/v2-ui-uplift` branch off `main @ 83c9b86` **before** any UI edits.

> **STATUS: Discovery complete. STOP here for human sanity-check before porting.**
> Two open questions at the bottom require your decision before Step 2.

---

## 0. What the SEO baseline captures

Three files under [docs/V1_BASELINE/](.) are the regression contract:

| File | Purpose |
|---|---|
| [SEO_BASELINE.json](SEO_BASELINE.json) | Per-route title / description / canonical / H1 / JSON-LD types / robots / OG presence. 41 page files. |
| [ROUTES_BEFORE.txt](ROUTES_BEFORE.txt) | One line per page.tsx — the route topology snapshot. |
| [SITEMAP_SOURCE_BEFORE.ts](SITEMAP_SOURCE_BEFORE.ts) | Copy of `src/app/sitemap.ts` at this commit. The generator is the contract; URL set is derived from it. |
| [ROBOTS_SOURCE_BEFORE.ts](ROBOTS_SOURCE_BEFORE.ts) | Copy of `src/app/robots.ts` — disallow rules baseline. |

Counts captured: **41 page files**, **30 with static metadata**, **8 with dynamic `generateMetadata`**, **34 with literal `<h1>` JSX**, **5 with `noindex`**, **8 dynamic routes** (`[slug]`, `[id]`, `[[...tool]]`, `[locale]`), **4 with inline JSON-LD blocks**.

**Caveats:**
- Word-count and internal-link-graph capture were intentionally **deferred** to a follow-up — they require either a running server or a SSR render to be accurate. The brief mentions them; flag if you want a render-pass added before Step 2.
- The baseline is taken from `main`. The **glossary deep-dives** (PR #13) and their JSON-LD shape are **NOT** included. Recapture after PR #13 merges if you want glossary in the contract.

---

## 1. v1 has more v2 register than the brief assumed

This is the headline finding. The brief reads as if v1 is bare-naked v1 needing a wholesale v2 port. In reality v1 already contains:

- A complete **editorial token system** at [src/styles/editorialTokens.ts](../../src/styles/editorialTokens.ts) (gold-forward register: Fraunces + Hanken Grotesk, navy `#0B2545`, gold `#E0A227`).
- An **active editorial homepage** at [src/app/page.tsx](../../src/app/page.tsx) → [HomeClient](../../src/app/_home/HomeClient.tsx) composing 7 editorial sections (EditorialHero → ThreeTierStrip → LifeFunnel → LearnModule → CompareModule → TrustPanel → HowWeMakeMoney).
- A full **Bo mascot** at [src/components/brand/Bo.tsx](../../src/components/brand/Bo.tsx) with 10 poses (idle/wave/wink/thumbs/clipboard/point/tag/thinking/sleep/celebrate), accessories (hardhat/shield/none), and a customisable `BoPalette`. Equivalent shape to the v2 `Bo.tsx` you shared.
- A v2-coloured **BrandLogo** at [src/components/brand/Logo.tsx](../../src/components/brand/Logo.tsx) (hardcoded `NAVY = #0B2545` + `GOLD = #E0A227`, Fraunces font).
- **WebhubLink** at [src/components/legal/WebhubLink.tsx](../../src/components/legal/WebhubLink.tsx) — identical to the v2 file you supplied.
- **DisclaimerBlock** with vertical-aware variants (life / pc / mortgage / cards) at [src/components/disclaimers/DisclaimerBlock.tsx](../../src/components/disclaimers/DisclaimerBlock.tsx).
- **verticals.ts** at [src/lib/verticals.ts](../../src/lib/verticals.ts) — `isActiveCommercePath()` already returns `true` only for `/life-insurance` and `/learn/life`. Exactly matches Rule 4 of the brief.
- **42 editorial-class CSS rules** (`.ed-btn-primary`, `.ed-tier-grid`, `.ed-funnel-grid`, etc.) in [src/styles/globals.css](../../src/styles/globals.css#L485-L671).

This isn't a port. It's a **layout swap**.

---

## 2. Token-value collision — needs your call

The brief lists v2 token values:

| Token | Brief says | What `editorialTokens.ts` actually has | What `tokens.ts` has today |
|---|---|---|---|
| navy | `#1B2A4A` | `#0B2545` (darker) | `#1B2A4A` |
| accent / gold | `#B45309` (amber) | `#E0A227` (warmer gold) | `#B45309` (alias to amber) |
| cream | `#FBF7EE` | `#F7F6F0` (slightly warmer) | `#FBF7EE` |
| ink | `#1F2024` | `#1F2937` (slightly bluer) | `#1F2024` |
| heading font | "Inter display" | Fraunces serif (`var(--font-fraunces)`) | Source Serif 4 (`var(--font-serif)`) |

The v2 `V2LandingPage.tsx` you supplied imports from `editorialTokens`, so its rendered look depends on the **right column** values, not the brief's column. Three possible resolutions:

1. **Adopt editorialTokens as the v2 source of truth.** Use Fraunces + Hanken + `#0B2545` + `#E0A227` everywhere. Brief's stated values were a misread.
2. **Override editorialTokens to match the brief.** Reconcile to navy `#1B2A4A` + amber `#B45309` + cream `#FBF7EE`. Means editing `editorialTokens.ts` AND every `.ed-*` rule in globals.css.
3. **Fork the V2LandingPage's token imports.** Leave editorialTokens for the rest of the editorial register; rebuild the V2LandingPage against `tokens.ts` values. Most surgical, lowest blast radius.

**My read:** option 1 is the intended path — the entire editorial register already commits to these values, the BrandLogo hard-codes them, and a parallel token set is what the brief's Rule 5 warns against ("do NOT introduce a parallel token file"). But this is your call. **Flag this before Step 2 begins.**

---

## 3. Homepage composition difference — needs your call

v1's current homepage and the V2LandingPage you shared compose **different sections in a different order**. Both are valid editorial layouts; pick which one ships.

| | v1 today (HomeClient) | v2 (V2LandingPage.tsx) |
|---|---|---|
| Hero | EditorialHero — split layout w/ gold-glow visual | Centered hero + 7-category icon strip + adaptive starter |
| Section B | ThreeTierStrip (advisor/learn/compare pills) | Trust strip (3 stat cards + carrier names row) |
| Section C | LifeFunnel (2-col life flow) | "Three steps. About 3 minutes." + phone mock |
| Section D | LearnModule (4-col guide cards) | Per-vertical editorial rows (alternating L/R) |
| Section E | CompareModule (3-col affiliate compare) | Navy stats band (4 stats, gold figures) |
| Section F | TrustPanel (4-col trust grid) | Education centre (4 guide cards) |
| Section G | HowWeMakeMoney (revenue transparency) | Calculators marquee |
| Section H | — | Reviews (3 testimonials) |
| Section I | — | FAQ with Bo, accordion of 4 questions |
| Section J | — | Navy newsletter sign-up |
| Section K | — | SEO footer grid (4 columns, city + provincial + guides + calculators) |

The v2 page is **denser** and built around the 7-category hero + license-routed CTA. The brief's Step 3 explicitly says "Recreate the v2 landing layout in v1" — so v2 wins. But:

- **HowWeMakeMoney** is a real revenue-transparency surface live today. The brief says "Keep all existing homepage content/sections that v1 had if they carried real info — fold them in, don't drop them." So we'd fold it into v2 as an additional section (probably between Education Centre and Calculators, or as part of the FAQ block).
- **ThreeTierStrip / LifeFunnel / LearnModule / CompareModule / TrustPanel** components remain reusable on other surfaces — keep them, don't delete.

**Decision needed:** confirm v2 layout replaces homepage composition AND we fold HowWeMakeMoney in somewhere. (My recommendation: add it as a new section after Reviews, before FAQ.)

---

## 4. CTA routing — Rule 4 already half-implemented

The license-based routing in the brief's Rule 4 maps cleanly onto existing v1 state. Status of each CTA destination:

| Vertical | Brief CTA copy | Destination | Route exists? | Notes |
|---|---|---|---|---|
| Auto | "Explore auto coverage" | `/auto-insurance` | ✅ | Editorial-only, pc vertical. |
| Home | "Explore home coverage" | `/home-insurance` | ✅ | Editorial-only, pc vertical. |
| Tenant | "Explore tenant coverage" | `/tenant-insurance` | ✅ | Already exists at this path. |
| Life | "Talk to a licensed advisor" | `/life-insurance` | ✅ | **Only** route where `isActiveCommercePath()` returns true. |
| Travel | "Explore travel coverage" | `/travel-insurance` | ✅ | Editorial Phase 1; A&S in Phase 2 per [verticals.ts](../../src/lib/verticals.ts). |
| Business | "Explore business coverage" | `/business-insurance` | ✅ | Editorial-only. |
| Mortgage | "Explore mortgage tools" | `/mortgages` | ✅ | MBLAA referral, not a quote engine. |
| Credit cards | "Browse credit cards" | `/credit-cards` | ✅ | Affiliate, /disclosures linked. |

The supplied V2LandingPage.tsx already routes correctly: Auto/Home/Mortgage/Cards use the `kind: 'button'` starter (browse-only); Life/Travel/Business use a `kind: 'select'` (coverage amount / destination / industry) — not postal codes. **Postal code input is absent**, which matches Rule 4 + Rule 5. No quote-engine UI.

One nit: the brief mentions "Tenant" as a vertical but the V2LandingPage's `PRODUCTS` array doesn't include it. If we want the tenant CTA, we add an 8th category or fold it into "Home" with copy noting it covers renters. **Decision needed.**

---

## 5. v2 → v1 mapping table (what lands where)

For Step 2/3/4 once the open questions above are resolved:

| v2 thing (from your files) | Lands at (v1 path) | Action |
|---|---|---|
| `V2LandingPage.tsx` | `src/components/landing/V2LandingPage.tsx` (NEW) | Port verbatim; rewire imports from `@/styles/editorialTokens` (already correct) and v1's `lucide-react` (already installed). |
| `editorialTokens` palette/fonts | [src/styles/editorialTokens.ts](../../src/styles/editorialTokens.ts) | **Already exists** — diff against v2 file you supplied; adopt any deltas. |
| `Bo.tsx` (v2) | [src/components/brand/Bo.tsx](../../src/components/brand/Bo.tsx) | **Already exists**, equivalent shape. Diff and reconcile if v2 has poses v1 lacks. |
| `Logo.tsx` (v2) | [src/components/brand/Logo.tsx](../../src/components/brand/Logo.tsx) | **Already exists**, already uses v2 navy/gold. |
| `Icon.tsx` (v2) | [src/components/brand/Icon.tsx](../../src/components/brand/Icon.tsx) | **Already exists**, 20+ icons. Diff. |
| `WebhubLink.tsx` (v2) | [src/components/legal/WebhubLink.tsx](../../src/components/legal/WebhubLink.tsx) | **Identical** to v2 file. No-op. |
| `verticals.ts` (v2) | [src/lib/verticals.ts](../../src/lib/verticals.ts) | **Already correct.** v1's `isActiveCommercePath()` matches v2 verbatim. No-op. |
| `globals.css` v2 additions | [src/styles/globals.css](../../src/styles/globals.css) | v1 already has `.ed-*` rules. Diff against v2 globals.css; add any missing media queries. |
| Homepage `page.tsx` → V2LandingPage | [src/app/page.tsx](../../src/app/page.tsx) | Swap default export from `HomeClient` to `V2LandingPage`. Preserve existing `metadata` block but tighten copy per Step 3 ("no overclaim"). |
| HowWeMakeMoney (v1) | Keep & fold | Insert as new section in V2LandingPage. |
| `HomeClient` and sub-modules | Keep as orphan | Don't delete — may be useful for `/about` reskin or as A/B fallback. |

---

## 6. Component reuse map for the rest of the site (Step 4)

The brief says "Apply the v2 look to shared chrome (header/nav, footer) so the whole site feels consistent — but reuse v1's existing nav/footer structure and just reskin to v2 tokens. Don't replace working navigation wholesale."

| Surface | Current v1 component | Reskin action |
|---|---|---|
| Header / nav | [src/components/layout/MegaNav.tsx](../../src/components/layout/MegaNav.tsx) (legacy) + [src/components/editorial/EditorialMegaNav.tsx](../../src/components/editorial/EditorialMegaNav.tsx) (v2-style, already exists) | If EditorialMegaNav is what site uses today, keep. Otherwise swap MegaNav → EditorialMegaNav. Both consume same `NAV_DATA` shape. |
| Footer | [src/components/layout/Footer.tsx](../../src/components/layout/Footer.tsx) | Reskin only — dark navy bg stays, swap `#0a0f16` for editorialTokens navy if you want the v2 hex. Webhub disclosure stays. |
| Article / guide template | Per vertical: [src/app/auto-insurance/_client/AutoInsuranceContent.tsx](../../src/app/auto-insurance/_client/AutoInsuranceContent.tsx) etc. | Token-swap (cream bg, Fraunces headings) — no structural changes. |
| Glossary template | [src/app/glossary/GlossaryClient.tsx](../../src/app/glossary/GlossaryClient.tsx) + [src/app/glossary/[slug]/page.tsx](../../src/app/glossary/[slug]/page.tsx) | Token-swap. Schema (DefinedTerm + DefinedTermSet + FAQPage) MUST be preserved. |
| Blog template | [src/app/blog/[slug]/page.tsx](../../src/app/blog/[slug]/page.tsx) | Token-swap. Article + BreadcrumbList + FAQPage schemas MUST be preserved. |

---

## 7. Open questions — block Step 2 until resolved

1. **Token resolution** (§2): which palette wins — `editorialTokens` values (#0B2545 / #E0A227) or the brief's stated values (#1B2A4A / #B45309)?
2. **HowWeMakeMoney placement** (§3): fold into V2LandingPage, or drop?
3. **Tenant category** in homepage hero strip (§4): add 8th category, or merge into Home?
4. **Word-count + link-graph baseline capture** (§0): defer, or add a render-pass step before Step 2?
5. **Glossary baseline** (§0): wait for PR #13 merge before locking baseline, or accept that glossary content lands separately?

I'll wait for your call on these before touching any UI code.

---

*Generated 2026-06-14 on `feat/v2-ui-uplift` @ `83c9b86`.*
