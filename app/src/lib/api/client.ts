/**
 * Frontend → backend API client (the seam).
 *
 * Every domain component calls THIS, never fetch() directly. It:
 *   - resolves the API base URL from env (mock backend in dev, real later)
 *   - carries the tenant (x-tenant) resolved from the DOM's data-site
 *   - enforces the V2 rule: in production, a payload WITHOUT `mock: true`
 *     from a mock-tier endpoint is a hard error (a real response leaking
 *     through the mock path, or vice-versa, must never render silently)
 *   - exposes goHref() so CTAs point at the attribution redirector, never a
 *     raw affiliate URL
 *
 * Swap-to-live: change NEXT_PUBLIC_API_BASE. Shapes are the shared
 * @ratefamily/contracts — nothing in components moves.
 */

import type {
  CardListResponse,
  CardListQuery,
  Card,
  CompareResponse,
  LifeQuoteRequest,
  LifeQuoteResponse,
  AutoQuoteRequest,
  AutoQuoteResponse,
  HealthQuoteRequest,
  HealthQuoteResponse,
  LeadRequest,
  LeadResponse,
  MatchRequest,
  MatchResponse,
  TenantSlug,
} from '@ratefamily/contracts';

const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE?.replace(/\/$/, '') || 'http://localhost:3001';

const IS_PROD = process.env.NODE_ENV === 'production';

/** Resolve the tenant from the rendered <html data-site>. Falls back to
 * toprates (SSR / tests). */
export function currentTenant(): TenantSlug {
  if (typeof document !== 'undefined') {
    const s = document.documentElement.getAttribute('data-site');
    if (s === 'liferate' || s === 'termrates' || s === 'healthrate' || s === 'toprates') return s;
  }
  return 'toprates';
}

interface MockEnvelope { mock?: unknown }

/**
 * The guard: mock-tier responses MUST carry mock:true. In production a
 * missing/false flag means either a real payload came back through a mock
 * path or the wiring is wrong — either way, do not render it.
 */
function assertMockEnvelope<T extends MockEnvelope>(body: T, url: string): T {
  if (IS_PROD && body?.mock !== true) {
    throw new Error(`[api] response from ${url} is missing mock:true in production — refusing to render`);
  }
  return body;
}

async function req<T extends MockEnvelope>(
  path: string,
  init: RequestInit = {},
  scenario?: string,
): Promise<T> {
  const url = `${API_BASE}${path}`;
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    'X-Tenant': currentTenant(),
    ...(init.headers as Record<string, string> | undefined),
  };
  if (scenario) headers['X-Mock-Scenario'] = scenario;

  const res = await fetch(url, { ...init, headers });
  const body = (await res.json().catch(() => ({}))) as T;
  if (!res.ok) {
    const msg = (body as { error?: string }).error || `Request to ${path} failed (${res.status})`;
    throw new ApiError(msg, res.status, body);
  }
  return assertMockEnvelope(body, url);
}

export class ApiError extends Error {
  constructor(message: string, public status: number, public body: unknown) {
    super(message);
    this.name = 'ApiError';
  }
}

/* ── Catalog ───────────────────────────────────────────────────────────── */
export function listCards(q: CardListQuery = {}): Promise<CardListResponse> {
  const params = new URLSearchParams();
  if (q.category) params.set('category', q.category);
  if (q.issuer) params.set('issuer', q.issuer);
  if (q.network) params.set('network', q.network);
  if (q.limit) params.set('limit', String(q.limit));
  const qs = params.toString();
  return req<CardListResponse>(`/v1/cards${qs ? `?${qs}` : ''}`);
}

export function getCard(cardId: string): Promise<Card> {
  return req<Card & MockEnvelope>(`/v1/cards/${encodeURIComponent(cardId)}`) as Promise<Card>;
}

export function compareCards(ids: string[]): Promise<CompareResponse> {
  return req<CompareResponse>(`/v1/compare?ids=${ids.map(encodeURIComponent).join(',')}`);
}

export function matchCards(body: MatchRequest): Promise<MatchResponse> {
  return req<MatchResponse>('/v1/match', { method: 'POST', body: JSON.stringify(body) });
}

/* ── Quotes ────────────────────────────────────────────────────────────── */
export function quoteLife(body: LifeQuoteRequest, scenario?: string): Promise<LifeQuoteResponse> {
  return req<LifeQuoteResponse>('/v1/quotes/life', { method: 'POST', body: JSON.stringify(body) }, scenario);
}
export function quoteAuto(body: AutoQuoteRequest, scenario?: string): Promise<AutoQuoteResponse> {
  return req<AutoQuoteResponse>('/v1/quotes/auto', { method: 'POST', body: JSON.stringify(body) }, scenario);
}
export function quoteHealth(body: HealthQuoteRequest, scenario?: string): Promise<HealthQuoteResponse> {
  return req<HealthQuoteResponse>('/v1/quotes/health', { method: 'POST', body: JSON.stringify(body) }, scenario);
}

/* ── Leads ─────────────────────────────────────────────────────────────── */
export function submitLead(body: LeadRequest): Promise<LeadResponse> {
  return req<LeadResponse>('/v1/leads', { method: 'POST', body: JSON.stringify(body) });
}

/* ── Attribution ───────────────────────────────────────────────────────── */
/** Attribution-safe CTA target. Components pass a cardId; the redirector
 * resolves the (monetized or fallback) URL and logs the click. Never build
 * an affiliate URL in a component. */
export function goHref(cardId: string): string {
  return `${API_BASE}/go/${encodeURIComponent(cardId)}`;
}
