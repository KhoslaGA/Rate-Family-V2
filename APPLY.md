# Mortgage quoter patch — 8 files

Unzip this INTO your Rate-Family-V2 folder (it mirrors the repo paths, so it
overwrites the 8 changed files in place). From the repo root:

    unzip -o mortgage-patch.zip

Then:

    npm run build:backend
    npm run test:backend        # expect 17 pass
    node backend/apps/api/dist/main.js   # you'll now see /v1/quotes/mortgage mapped

Commit:

    git add .
    git commit -m "Wire TermRates mortgage quoter to backend + fix dev script"
    git push

## Files changed
- backend/packages/contracts/src/quotes.ts          (+ mortgage types)
- backend/apps/api/src/mock/mock-carrier.adapter.ts (+ quoteMortgage)
- backend/apps/api/src/quotes/quotes.module.ts      (+ /v1/quotes/mortgage route)
- backend/apps/api/test/integration.test.mjs        (+ 2 mortgage tests)
- app/src/components/termrates/TermRatesQuoter.tsx   (wired to API, async states)
- app/src/lib/api/client.ts                          (+ quoteMortgage)
- app/src/styles/termrates.css                       (+ pulse keyframe)
- package.json                                       (dev:backend script fix)
