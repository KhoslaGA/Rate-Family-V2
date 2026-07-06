# Rate Family — v2 (test mirror)

> ### ⚠️ This is the `Toprates-v2` repo — a TEST MIRROR, not the live site.
> The production repo is **`KhoslaGA/Toprates`** (Vercel project `toprates`), git-connected so that a merge to its `main` deploys **live to toprates.ca** and the three satellite domains. **This repo does not auto-deploy anything** — pushing here has no effect on production.
>
> As of **2026-07-05** this repo's `main` is an **exact mirror** of `KhoslaGA/Toprates` `main` (commit `712132c`). Use it as a scratch/test copy of the live app. To re-sync, fetch the canonical remote and reset:
> ```bash
> git remote get-url canonical || git remote add canonical git@github.com:KhoslaGA/Toprates.git
> git fetch canonical && git reset --hard canonical/main
> ```
> **⚠️ Deploy footgun:** the local `app/.vercel` here points at the *live* `toprates` project — a manual `vercel --prod` from this folder would publish to **production toprates.ca**. Delete `app/.vercel` unless you have a deliberate reason to deploy from here. The pre-mirror history is preserved on the `archive/pre-mirror-2026-07-05` branch.

A multi-tenant Canadian rates/insurance network served from **one** Next.js App Router app. Four sites share a codebase and are themed per-host at request time:

| Site | Host | Focus | Accent | Chrome |
|---|---|---|---|---|
| **TopRates** | toprates.ca | Hub — insurance, mortgages, credit cards (live breadwinner) | amber `#B45309` | `EditorialMegaNav` / `Footer` |
| **LifeRate** | liferate.ca | Life + critical illness | rosewood `#8E4A56` | `LrNav` / `LrFooter` |
| **TermRates** | termrates.ca | Mortgages | steel `#3D5A85` | `TrNav` / `TrFooter` |
| **HealthRate** | healthrate.ca | Health, travel, Super Visa (education only) | green `#257F49` | `HrNav` / `HrFooter` |

> **Never touch TopRates content, SEO, or ranking.** It is the live revenue site. Spoke work must leave TopRates byte-identical — footer legal boilerplate is the only shared-chrome exception. New spoke routes are guarded (`notFound()` off-host) and self-canonical, so they 404 on TopRates by design.

## How multi-tenancy works

```
Request Host header
  → app/src/middleware.ts          sets the `x-site` request header from the host
  → app/src/app/layout.tsx         currentSite() reads `x-site`
      <html data-site={siteKey} style={{ '--site-accent': accent }}>
      + host-conditional chrome (LrNav / TrNav / HrNav / EditorialMegaNav)
  → per-host CSS in app/src/styles keys off html[data-site="…"]
```

- `app/src/site/config.ts` — `SITES`, `DEFAULT_SITE` (`toprates`), and each site's `accent`. This is the source of truth for the per-site accent color.
- Local override: `SITE_OVERRIDE=<site> npx next start` forces a site (Chrome blocks spoofing the `Host` header, so this is how you preview a spoke locally).

## Design tokens

This repo uses **Tailwind v4 (CSS-first)** — `@import "tailwindcss"`, compiled by Lightning CSS. There is **no `tailwind.config.ts`**; tokens live in CSS.

- `app/src/styles/globals.css` — shared core tokens + the `[data-site]` static accent fallbacks.
- `app/src/styles/{liferate,termrates,healthrate}.css` — bespoke per-host design systems, each scoped under `html[data-site="…"]` with its own `--brand-*` ramp and component classes (`.lr-*`, `.tr-*`, `.hr-*`).
- `app/src/styles/tokens.ts`, `editorialTokens.ts`, `homeTokens.ts` — TS token references for components.
- `DESIGN-TOKEN-CONTRACT.md` — the cross-environment contract with Design: Design owns variable *names* and visual intent; code owns the values. Read it before changing any `--brand-*` value.

### The `--brand-*` ramp (per site)

Each bespoke stylesheet defines the same ramp *shape* in its own hue, e.g. LifeRate rosewood:

```
--brand-500 #8E4A56 (primary)   --brand-600 #733A46 (ink/hover)   --brand-900 #2C1820
```

Components read `var(--brand-…)`, `var(--ink)`, `var(--site-accent)`, etc. — the accent swaps per host with no template changes.

### ⚠️ Lightning CSS token-drop gotcha

When custom-property declarations share an `html[data-site="X"] { … }` block **with nested rules**, Lightning CSS flattens the rules but **drops the bare token declarations** from the compiled CSS (invisible tickers, collapsed spacing, `--sp-6: ""`). A green build does **not** catch this.

**Rule:** keep token declarations in their own *declaration-only* block, separate from any block that also contains nested rules. Verify by grepping the compiled CSS in `.next/static/css/*.css` and with a rendered screenshot — not just `npm run build`.

## Adding a site

1. Add the key + accent to `SITES`/`SITE_CONFIG` in `app/src/site/config.ts`.
2. Add host detection in the resolver (`h.includes('<site>')`) and `x-site` handling in middleware.
3. Add `app/src/styles/<site>.css` scoped under `html[data-site="<site>"]` (follow the token-drop rule above).
4. Add per-host chrome components + wire them in `layout.tsx`.
5. Fonts: register via `next/font/google` in `layout.tsx` and reference the CSS var under the host's `[data-site]` scope — other hosts keep their own fonts.

## Legal / disclosure

All four sites are **operated by Webhub4u Inc.** (publisher, not a licensed broker). **KLC Group Canada Inc.** holds only a corporate life LLQP licence — life inquiries are referred to KLC. TermRates is **not** a licensed mortgage brokerage; it refers to "a licensed mortgage professional." Disclosure lives in the footer (full) + one microcopy line per CTA. See `rate-family-entity-disclosure` and each site's footer component.

## Develop

```bash
cd app
npm install
npm run dev                          # default host (toprates)
SITE_OVERRIDE=termrates npm run dev   # preview a spoke
npx tsc --noEmit && npm run build     # typecheck + prod build before every PR
```

Branch + PR for every change; **merging to `main` triggers the live production deploy** of the `toprates` Vercel project. Never commit to `main` directly.

## A note on design-drift enforcement

A "design-enforcement bundle" (semantic-token monorepo + a Tailwind config that removes the palette + ESLint rules failing the build on any hex/arbitrary value) has been proposed. **It does not fit this repo as written** and would break the live sites:

- It assumes a `packages/` + `apps/**` monorepo; this is a single `app/` Next app.
- It assumes a `tailwind.config.ts`; this is Tailwind v4 CSS-first.
- `error`-level "no hardcoded color" would fail the build on ~1,400 existing lines — the bespoke `.lr-*/.tr-*/.hr-*` systems are literal hex by design.
- Its color map (teal/sage/green) and 3-font lock contradict the live brands (amber/rosewood/steel/green) and the 10 per-site fonts — applying it would recolor and re-font every site.

If drift protection is wanted, the fitting version is: a **warn-level** lint scoped to *new* files pointing at `--brand-*`/`--site-accent`, plus visual-regression screenshots (Playwright) — not a hard palette lock. Not yet implemented; see `DESIGN-TOKEN-CONTRACT.md` for the token contract that already governs values.
