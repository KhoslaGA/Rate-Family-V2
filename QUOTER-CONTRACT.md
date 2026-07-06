# Quoter Contract (Code → Design) — Rate Family

**Companion to `DESIGN-TOKEN-CONTRACT.md`, other direction.** That contract is Design→Code (Design owns token names, Code fills values). This one is **Code→Design**: the code-side quoter engine already exists (PR #18), so Design's **#6 Quoter** and the Life-landing **inline quote-entry form** should **match this interface**, not invent one. Source of truth: `app/src/lib/quoter/engine.ts` + `app/src/components/quoter/skins/QuoterLifeRate.tsx` + the gate in `app/src/lib/verticals.ts`.

## Engine is headless; the skin renders it
One shared engine, one React skin per site (sage LifeRate skin lives in the app). The engine returns **data**; the skin renders. Rates are illustrative CompuLife-shaped mock data — swap the math for a real API later, contract unchanged.

## Data shapes (match these field names exactly)
```ts
type Vertical = 'term' | 'life' | 'health';
type LifePlan = 't100' | 'ul' | 'whole';        // labels: Term-100 / Guaranteed UL / Whole Life
type ProvinceCode = 'ON'|'QC'|'BC'|'AB'|'MB'|'SK'|'NS'|'NB'|'NL'|'PE';

// LIFE inputs (what the inline quote-entry form collects / prefills):
interface LifeState { plan: LifePlan; coverage: number; age: number; female: boolean; smoker: boolean; prov: ProvinceCode }
// life coverage steps: [50000, 100000, 250000, 500000, 1000000]

interface Quote { co: string; product: string; monthly: number }         // one carrier row
interface QuoteResults {                                                  // what the engine returns
  best: Quote; quotes: Quote[];                                           // quotes sorted asc; [] for health
  summary: { coverage?: number; age: number; count?: number; household?: number };
  vertical: Vertical; breakdown?: { key: string; label: string; note: string; monthly: number }[]; // health only
}
```

## Events (the handoff surface — the Life-landing form talks to the quoter through these)
- **`rates:lead`** — *outbound from the quoter.* `window` CustomEvent, `detail: LeadDetail` where
  `LeadDetail = { carrier?, product?, monthly?, coverage?, vertical, mode?: 'advisor' }`. A future React lead modal listens (replaces the old static `flows.js`).
- **`rates:setcoverage`** — *inbound prefill.* The Life-landing inline quote-entry form fires this with `detail: { amount: number }` (and may carry more `LifeState` fields) so the quoter opens pre-filled. **Code-side action on reconcile:** the current `QuoterLifeRate` doesn't yet listen for this — I'll add the inbound listener when we wire #6 so the landing form routes in cleanly. Design just needs to emit the intended values in `LifeState` field names.
- **`[data-rate-pill]`** — hero "from $X/mo" pills the quoter updates live. Keep the attribute on any pill the design wants updated.

## Commerce gate (BUILD-SPEC §A4) — drives the CTA
`isActiveCommercePath(pathname)` → `'live' | 'educational' | 'coming-soon'`. **LifeRate = `live`.** So the LifeRate quoter/landing shows the real path:
- primary CTA **"See your rate"** → fires `rates:lead` with full `LeadDetail`;
- secondary **"Talk it through with an advisor"** → `rates:lead` with `mode: 'advisor'`.
(`educational` = advisor-only, no bind; `coming-soon` = waitlist. Design's #6 only needs the `live` treatment for LifeRate.)

## Skin personality (unchanged from Artifact B1)
Sage, reassuring, single generous column, needs-framed coverage ("what would your family need?"), warm copy, gentle motion. Accent via `var(--site-accent)` (= sage-600 `#4C6A5B`; fills may use `--sage-500`). Compliance fine-print + CompuLife/LLQP attribution stay; `[BYLINE TBD]` and the entity-disclosure string remain held.

## So for #6, match:
1. the `LifeState` field names for inputs, 2. the coverage steps, 3. `rates:setcoverage` (prefill in) / `rates:lead` (hand off out), 4. the `live` CTA labels. Everything else is yours to design.
