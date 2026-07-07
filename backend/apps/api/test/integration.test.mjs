import { test, before, after } from 'node:test';
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';

const PORT = 3011;
const BASE = `http://127.0.0.1:${PORT}`;
let server;

async function waitReady(timeoutMs = 15000) {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    try {
      const r = await fetch(`${BASE}/v1/cards`, { headers: { 'x-tenant': 'toprates' } });
      if (r.ok) return;
    } catch {}
    await new Promise((r) => setTimeout(r, 300));
  }
  throw new Error('API did not become ready');
}

before(async () => {
  server = spawn('node', ['dist/main.js'], {
    cwd: process.cwd(),
    env: { ...process.env, PORT: String(PORT) },
    stdio: 'ignore',
  });
  await waitReady();
});

after(() => { if (server) server.kill('SIGKILL'); });

test('GET /v1/cards returns the mock catalog with envelope', async () => {
  const r = await fetch(`${BASE}/v1/cards`, { headers: { 'x-tenant': 'liferate' } });
  const b = await r.json();
  assert.equal(b.mock, true);
  assert.equal(b.tenant, 'liferate');
  assert.equal(b.count, 12);
  assert.equal(b.cards.length, 12);
});

test('every offer sourceUrl is a DEV-FIXTURE scheme (never passes as verified)', async () => {
  const b = await (await fetch(`${BASE}/v1/cards`, { headers: { 'x-tenant': 'toprates' } })).json();
  for (const c of b.cards) {
    assert.match(c.currentOffer.sourceUrl, /^DEV-FIXTURE:\/\//);
  }
});

test('GET /v1/cards?category=cashback filters', async () => {
  const b = await (await fetch(`${BASE}/v1/cards?category=cashback`, { headers: { 'x-tenant': 'toprates' } })).json();
  assert.ok(b.cards.length >= 1);
  assert.ok(b.cards.every((c) => c.category === 'cashback'));
});

test('GET /v1/cards/:id 404s unknown card with mock envelope', async () => {
  const r = await fetch(`${BASE}/v1/cards/nope`, { headers: { 'x-tenant': 'toprates' } });
  assert.equal(r.status, 404);
  const b = await r.json();
  assert.equal(b.mock, true);
});

test('POST /v1/quotes/life is deterministic and sorted ascending', async () => {
  const body = { coverage: 500000, age: 35, female: true, smoker: false, term: '20' };
  const opts = { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-tenant': 'liferate' }, body: JSON.stringify(body) };
  const a = await (await fetch(`${BASE}/v1/quotes/life`, opts)).json();
  const b = await (await fetch(`${BASE}/v1/quotes/life`, opts)).json();
  assert.deepEqual(a, b, 'same input → same output');
  assert.equal(a.mock, true);
  assert.equal(a.rates_indicative_only, true);
  const offers = a.quotes.filter((q) => !q.declined);
  for (let i = 1; i < offers.length; i++) {
    assert.ok(offers[i].monthly >= offers[i - 1].monthly);
  }
});

test('POST /v1/quotes/life: 62M smoker → conservative carriers decline', async () => {
  const body = { coverage: 250000, age: 62, female: false, smoker: true, term: '10' };
  const b = await (await fetch(`${BASE}/v1/quotes/life`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-tenant': 'liferate' }, body: JSON.stringify(body) })).json();
  const declined = b.quotes.filter((q) => q.declined).map((q) => q.carrier).sort();
  assert.deepEqual(declined, ['Co-operators', 'Primerica', 'RBC Insurance']);
});

test('POST /v1/quotes/auto: high-risk → partial panel', async () => {
  const body = { postalFsa: 'M1B', driverAge: 19, atFaultClaims: 2, vehicleYear: 2016 };
  const b = await (await fetch(`${BASE}/v1/quotes/auto`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-tenant': 'toprates' }, body: JSON.stringify(body) })).json();
  assert.equal(b.panelStatus, 'partial');
  assert.ok(b.quotes.some((q) => q.declined));
});

test('POST /v1/quotes/health: super visa + pre-existing → 3 ineligible', async () => {
  const body = { branch: 'super_visa', applicantAge: 66, coverageAmount: 100000, preExisting: true };
  const b = await (await fetch(`${BASE}/v1/quotes/health`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-tenant': 'healthrate' }, body: JSON.stringify(body) })).json();
  const ineligible = b.quotes.filter((q) => !q.eligible).map((q) => q.carrier).sort();
  assert.deepEqual(ineligible, ['Destination', 'Manulife', 'TuGo']);
});

test('POST /v1/leads: valid lead returns deterministic reference', async () => {
  const body = { vertical: 'life', name: 'Jane Tester', email: 'jane@example.com', province: 'ON', consented: true, consentText: 'I consent to KLC Group Canada Inc. contacting me about the products I asked about.', preferredContact: 'email' };
  const opts = { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-tenant': 'liferate' }, body: JSON.stringify(body) };
  const a = await (await fetch(`${BASE}/v1/leads`, opts)).json();
  const b = await (await fetch(`${BASE}/v1/leads`, opts)).json();
  assert.equal(a.ok, true);
  assert.match(a.reference, /^LR-\d{6}$/);
  assert.equal(a.reference, b.reference, 'reference is deterministic');
});

test('POST /v1/leads: missing consent text (CASL evidence) rejected', async () => {
  const body = { vertical: 'life', name: 'Jane', email: 'jane@example.com', province: 'ON', consented: true };
  const r = await fetch(`${BASE}/v1/leads`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-tenant': 'liferate' }, body: JSON.stringify(body) });
  assert.equal(r.status, 400);
});

test('GET /go/:cardId redirects with attribution headers', async () => {
  const r = await fetch(`${BASE}/go/scotia-momentum-visa-infinite`, { headers: { 'x-tenant': 'toprates' }, redirect: 'manual' });
  assert.equal(r.status, 302);
  assert.ok(r.headers.get('x-mock-click-id'));
  assert.equal(r.headers.get('x-mock-monetizable'), 'true');
});

test('GET /go/:cardId direct-network card takes unmonetized fallback', async () => {
  const r = await fetch(`${BASE}/go/tangerine-money-back`, { headers: { 'x-tenant': 'toprates' }, redirect: 'manual' });
  assert.equal(r.status, 302);
  assert.equal(r.headers.get('x-mock-monetizable'), 'false');
});

test('POST /v1/match ranks newcomer card first for newcomers', async () => {
  const body = { spendCategories: ['groceries'], annualSpend: 20000, wantsNoFee: true, newcomer: true };
  const b = await (await fetch(`${BASE}/v1/match`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-tenant': 'toprates' }, body: JSON.stringify(body) })).json();
  assert.equal(b.mock, true);
  assert.equal(b.rankedCardIds[0], 'cibc-aventura-newcomer');
});

test('GET /v1/compare returns aligned rows', async () => {
  const b = await (await fetch(`${BASE}/v1/compare?ids=amex-cobalt,rbc-avion-visa-infinite`, { headers: { 'x-tenant': 'toprates' } })).json();
  assert.equal(b.cards.length, 2);
  assert.ok(b.rows.every((row) => row.values.length === 2));
});

test('POST /v1/quotes/mortgage: 20% down → uninsured, lenders sorted best-first', async () => {
  const body = { purpose: 'buy', rateType: 'fixed', term: '5', propertyPrice: 750000, downPayment: 150000, amortizationYears: 25 };
  const opts = { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-tenant': 'termrates' }, body: JSON.stringify(body) };
  const a = await (await fetch(`${BASE}/v1/quotes/mortgage`, opts)).json();
  const b = await (await fetch(`${BASE}/v1/quotes/mortgage`, opts)).json();
  assert.deepEqual(a, b, 'deterministic');
  assert.equal(a.mock, true);
  assert.equal(a.ltvPct, 80);
  assert.equal(a.insured, false);
  assert.equal(a.insurancePremium, 0);
  for (let i = 1; i < a.quotes.length; i++) assert.ok(a.quotes[i].ratePct >= a.quotes[i - 1].ratePct);
  assert.equal(a.best.lender, a.quotes[0].lender);
});

test('POST /v1/quotes/mortgage: 5% down → insured with CMHC premium + stress test', async () => {
  const body = { purpose: 'buy', rateType: 'variable', term: '5', propertyPrice: 500000, downPayment: 25000, amortizationYears: 30 };
  const b = await (await fetch(`${BASE}/v1/quotes/mortgage`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-tenant': 'termrates' }, body: JSON.stringify(body) })).json();
  assert.equal(b.ltvPct, 95);
  assert.equal(b.insured, true);
  assert.ok(b.insurancePremium > 0);
  assert.ok(b.stressTestRatePct >= 5.25, 'B-20 floor');
});

test('NO bind endpoint exists anywhere (regulated act — pre-RIBO)', async () => {
  // three plausible bind paths must all 404 — binding is never exposed
  for (const path of ['/v1/bind', '/v1/quotes/bind', '/go/bind']) {
    const r = await fetch(`${BASE}${path}`, { method: 'POST', headers: { 'Content-Type': 'application/json', 'x-tenant': 'toprates' }, body: '{}' });
    assert.equal(r.status, 404, `${path} must not exist`);
  }
});
