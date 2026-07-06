# Branching Strategy — TopRates.ca

This repo uses a long-lived branch model so frontend and backend workstreams
can progress independently without stepping on each other.

## Long-lived branches

| Branch     | Purpose                                                                 | Who merges in                              |
| ---------- | ----------------------------------------------------------------------- | ------------------------------------------ |
| `main`     | Production. Always deployable. Vercel tracks this for the live site.    | Only `develop` via release PR.             |
| `develop`  | Integration branch. What will ship next. Staging deploy tracks this.    | `frontend`, `backend`, hotfix PRs.         |
| `frontend` | All Next.js / UI / Sanity / content-rendering work.                     | `feature/fe-*` branches via PR.            |
| `backend`  | All NestJS / PostgreSQL / chatbot RAG / API work (starts Weeks 7–8).    | `feature/be-*` branches via PR.            |

## Short-lived branches

Created off `frontend` or `backend`, deleted after merge.

- `feature/fe-<slug>` — e.g. `feature/fe-sanity-wire-up`, `feature/fe-upgrade-next14`
- `feature/be-<slug>` — e.g. `feature/be-chatbot-rag`
- `fix/<slug>` — small bug fixes
- `chore/<slug>` — non-feature maintenance (deps, configs, cleanup)

## Flow

```
feature/fe-xxx ──► frontend ──► develop ──► main (production)
feature/be-xxx ──► backend  ──┘
```

1. Branch off `frontend` (or `backend`) for any change.
2. PR back into `frontend` when the feature is done.
3. `frontend` → `develop` integration PR whenever a feature set is cohesive.
4. `develop` → `main` release PR on ship days (e.g. May 4 blog launch, July 1 reform day).

## Rules

- `main` is protected. No direct commits. PRs only.
- Every PR should reference the 3-month plan section it addresses.
- Squash-merge feature branches. Merge-commit for long-lived → long-lived promotions.
- Keep `frontend` and `backend` continuously rebased on `develop` to minimize drift.

## Commit style

Conventional Commits, lightly enforced:

```
feat(blog): wire Sanity client to live project
fix(header): correct nav underline color on hover
chore(deps): upgrade next 13.5 → 14.2
docs: add branching strategy
```

## Environments

| Branch     | Environment | URL (target)                       |
| ---------- | ----------- | ---------------------------------- |
| `main`     | production  | https://toprates.ca                |
| `develop`  | staging     | https://staging.toprates.ca        |
| `frontend` | preview     | Vercel preview URL per commit      |
| `backend`  | preview     | Railway/EC2 preview env            |
