# Design ↔ Code Token Contract (Rate Family, bespoke)

**Purpose — cross-environment coordination.** The Design workspace and the Claude Code repo are separate environments; they cannot read each other's live state. This file is the shared contract. **Design owns the variable *names* and the visual intent below; Claude Code owns filling them with the real synced values** from the *correct* "Rates Family" design-system project (NOT WebHub4U — see collision note).

## ⚠️ Sync collision — resolve first
A `/design-sync` reachable from the Design workspace resolved to the **WebHub4U** system (cyan `#01A9DA` + navy, Oswald uppercase, "Technology of Tomorrow", invoice/letterhead). **That is the publisher's corporate brand, not the consumer insurance brand.** Do not apply it to the spokes. Before reconciling tokens, confirm the sync planId targets the **insurance** "Rates Family" system (sage/steel/green), not WebHub4U.

> **Code-side status (2026-07-01):** confirmed resolved. Claude Code's design-sync target was pinned to the insurance `Rate Family Design System` (`c89c5e75-4c23-4c0f-ba58-ba0cd4b3b6e5`), never `WebHub4U Design System` (`f944da09…`). Nothing was uploaded (sync hit a ts-morph wall). No WebHub4U brand reached the spokes.

## How reconciliation works
1. Design has shipped `bespoke/<site>/<site>.css` with a single `:root` of **provisional** tokens (values chosen by Design to execute the canonical sage/steel/green directions).
2. Claude Code, from the real synced system, replaces **only the values** of the variables below — names stay identical, so no template touches. If the synced system omits a variable, keep Design's provisional value and flag it.
3. If a synced value changes the *direction* (e.g. sage is materially different), Design re-audits contrast/hover/focus; a pure shade-nudge is a drop-in.

> **Code-side status:** the synced design-system is not available to the code repo (the sync is blocked), so per rule 2 the provisional values below are kept as-is and treated as the design. Implemented under `html[data-site="liferate"]` in `app/src/styles/globals.css` (+ `site/config.ts` accent, `layout.tsx` fonts) — see PR for LifeRate sage tokens.

## LifeRate — warm rosewood (authoritative)
**Direction change (owner call):** dropped sage — it read as a PolicyMe clone, and sage/green belongs to HealthRate. LifeRate is now **warm rosewood/burgundy on ivory**. Ramp renamed `--sage-*` → **`--brand-*`** (hue-agnostic). Replace values, keep names:
```
--brand-50  #FBEFEE   --brand-100 #F4E1E1   --brand-200 #E7C9CB   --brand-300 #D0A2A6
--brand-400 #B4707A   --brand-500 #8E4A56 (primary)   --brand-600 #733A46 (ink/hover)
--brand-700 #572B35 (deep)   --brand-900 #2C1820
--cream #FBF6F2  --paper #FFFFFF  --sand #F5EAE5
--ink #2A2124  --ink-soft #6B5A5E  --ink-mute #9E8C90  --line #EDE3DE  --line-2 #E0D1CB
--font-display "Newsreader" (serif, warm/literary)   --font-body "Public Sans"
```

> **Code-side status (2026-07-01):** applied in `html[data-site="liferate"]` (globals.css) + `site/config.ts` accent, sage→rosewood, `--sage-*`→`--brand-*`. The single shared `--site-accent` uses the **primary `#8E4A56`** directly — it's dark enough to pass BOTH invariants on `--paper` (≈6.4:1 as text and as fill with a white label), so no darker-shade substitution was needed (unlike the sage case). Bespoke pages use `--brand-600` for hover/ink.

## TermRates — steel (when its token file ships)
Same ramp shape, steel hue: `--steel-50…900`, primary ~`#4A6FA5`. Display/body per synced system (identity: dense, data-forward — likely a tighter sans display than LifeRate's serif).

## HealthRate — green (when its token file ships)
Same ramp shape, green hue: `--green-50…900`, primary ~`#2E9E5B`. Plus bilingual type support (Punjabi/Hindi glyph coverage) — confirm the synced body font has it, or add a fallback stack.

## Invariants (do not let a token swap break these)
- Contrast: body text ≥ 4.5:1 on its ground; large display ≥ 3:1.
- `--accent-ink` must stay legible on `--paper` (links, eyebrows) and `--on-accent` on `--accent` (button labels).
- Focus ring uses `--accent`; keep it visible on both light and sand grounds.
- Fonts load via the page's Google Fonts `<link>`; if synced fonts differ, update the link + these two vars together. **(Code side: loaded via `next/font/google` in `layout.tsx`, not a `<link>` — same effect, scoped under `html[data-site="liferate"]`.)**

## Open, still not designable-around
- **Byline:** all editorial `[BYLINE TBD]` until a real credentialed author is confirmed. Not a token.
- **Entity disclosure:** footer says "KLC Group Canada Inc." only. WebHub4U being real supports a two-entity split (Webhub4u publishes / KLC arranges) — confirm exact wording before changing the footer string (one place: each site's footer).
