# Rate Family Backend — V2 mock API

NestJS mock API for the Rate Family platform. **Everything is mock data** (V2 rule) — deterministic, in-memory, no database required. Same shapes the real integrations will use, so swapping mock → live is a base-URL / adapter change, never a refactor.

## Run

```bash
cd backend
npm install
npm run build
npm start            # → http://localhost:3001
# or: npm run dev    # ts-node-dev watch
```

## Endpoints (all under `:3001`, all carry a tenant via `X-Tenant`)

| Method | Path | Purpose |
|---|---|---|
| GET | `/v1/cards` | 12 DEV-FIXTURE cards; filters: `?category=`, `?issuer=`, `?network=`, `?limit=` |
| GET | `/v1/cards/:cardId` | one card (404 with `mock:true` on miss) |
| POST | `/v1/quotes/life` | 21-carrier life quote, sorted asc, honest declines |
| POST | `/v1/quotes/auto` | 8-carrier auto, partial-panel on high risk |
| POST | `/v1/quotes/health` | health/travel/super-visa, pre-existing exclusions |
| POST | `/v1/leads` | lead intake, CASL consent verbatim, `LR-######` reference |
| GET | `/go/:cardId` | attribution redirector (subid = click id, unmonetized fallback) |
| POST | `/v1/match` | card recommendation quiz |
| GET | `/v1/compare?ids=a,b` | side-by-side card comparison |

There is **no bind endpoint** — binding is a regulated act, not exposed pre-RIBO. A test asserts this on three paths.

## Determinism

Same input → same output, always. All mock math is seeded FNV-1a (`seededHash` in `@ratefamily/contracts`), never `Math.random`. Every quote payload carries `mock: true` + `rates_indicative_only: true`.

## The adapter seam

`apps/api/src/mock/mock-carrier.adapter.ts` implements `CarrierAdapter`. Quotes controllers depend on the interface, not the concrete adapter — so a real `CompuLifeAdapter` / `ApolloAdapter` drops in by changing one provider binding, with zero controller or frontend changes.

## Wiring the frontend

The Next app (`../app`) calls this through `app/src/lib/api/client.ts`:

```bash
# in ../app
NEXT_PUBLIC_API_BASE=http://localhost:3001 SITE_OVERRIDE=liferate npx next dev
```

The client enforces a `mock:true` guard in production (a payload missing the flag throws rather than renders), resolves the tenant from `<html data-site>`, and provides `goHref(cardId)` so CTAs go through the redirector instead of raw affiliate URLs.

## Tests

```bash
npm test    # builds, then node --test → 15 integration tests
```

## Contracts

`packages/contracts` is the single source of truth. Both `backend/` and `app/` import `@ratefamily/contracts`; the frontend resolves it via a tsconfig path alias to `../backend/packages/contracts/src`. Change a shape once, both sides see it.
