# TopRates.ca — Local Setup & GitHub Push

## 1. What's already done in this repo

- `git init` run, branch `main` created
- Initial commit on `main` with the existing Next.js 13.5 scaffold
- Long-lived branches created: `develop`, `frontend`, `backend`
- `frontend` branch has the Week 1 cleanup:
  - `pages_old/` deleted
  - `src/app/blog/[id]` renamed to `src/app/blog/[slug]` (and params updated)
  - `experimental.appDir` removed from `next.config.ts`
  - Duplicate `next.config.js` removed
  - `package.json` bumped to Next 14.2 (LTS) with a sane peer set
- `BRANCHING.md` explains the branch model

You are currently on the `frontend` branch.

## 2. Create the GitHub repo and push

This needs to happen on your machine since the sandbox can't authenticate to
GitHub.

```bash
cd "/Users/gautamkhosla/Downloads/Toprates/Toprates code"

# Option A: using the GitHub CLI (recommended)
gh repo create toprates --private --source=. --remote=origin
git push -u origin main
git push -u origin develop
git push -u origin frontend
git push -u origin backend

# Option B: create the repo in the GitHub UI first (empty, no README), then:
# git remote add origin git@github.com:<your-username>/toprates.git
# git push -u origin main develop frontend backend
```

Then in the GitHub UI:
1. Settings → Branches → set `main` as default
2. Settings → Branches → Branch protection rule on `main`:
   - Require a pull request before merging
   - Require status checks to pass (add Vercel once connected)
   - Do not allow force pushes
3. Same (lighter) protection on `develop`.

## 3. Reinstall dependencies for the Next 14 upgrade

```bash
cd "/Users/gautamkhosla/Downloads/Toprates/Toprates code"
git checkout frontend
rm -rf node_modules package-lock.json
npm install
npm run dev       # verify http://localhost:3000 loads
npm run build     # verify it builds clean
```

If the build passes, open a PR: `frontend` → `develop`. Then `develop` → `main`
for the first checkpoint.

## 4. Connect Vercel (after GitHub push)

1. Vercel → Add New → Project → import the `toprates` repo
2. Production branch: `main`
3. Preview branches: all
4. Env vars (placeholders for now, fill in Week 1–2):
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET` (default `production`)
   - `SANITY_API_READ_TOKEN` (server-only)
5. Add the `toprates.ca` custom domain → update DNS per Vercel instructions.

## 5. Next up on the frontend branch

Per the 3-month plan, Weeks 1–2:

- [ ] Create Sanity project, wire `src/lib/sanity/client.ts` to real project ID
- [ ] Deploy Sanity Studio (hosted or `/studio` route)
- [ ] Replace blog mock data in `src/app/blog/page.tsx` + `[slug]/page.tsx` with real GROQ queries
- [ ] Add first 2 test posts in Studio to verify end-to-end

Each will be a `feature/fe-*` branch off `frontend`.
