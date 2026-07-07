# Super Visa eligibility pre-check — patch (2 files)

Adds an interactive eligibility pre-check to the HealthRate Super Visa page,
wired to POST /v1/quotes/health. COMPLIANCE: reads ONLY the eligibility
signal — never premiums — so HealthRate stays education-only.

## Apply (from repo root)
    unzip -o supervisa-patch.zip
    cd app && npx tsc --noEmit    # expect clean
    cd ..

## Run to see it
    node backend/apps/api/dist/main.js      # terminal 1
    npm run dev:app                          # terminal 2 (or your usual)
    # visit the HealthRate Super Visa page; the pre-check sits above the FAQ

## Commit
    git add .
    git commit -m "Add Super Visa eligibility pre-check (education-only, wired to /v1/quotes/health)"
    git push

## Files
- app/src/components/healthrate/pages/SuperVisaEligibilityCheck.tsx  (NEW)
- app/src/components/healthrate/pages/SuperVisa.tsx                   (mounts it above FAQ)

## Why eligibility-only
The page states outright "Does HealthRate sell this insurance? No." So the
widget shows "X of 6 insurers would consider this application" + routes to
the guide/checklist. It discards the premium field the endpoint returns.
Verified: grep finds zero premium reads in the component.
