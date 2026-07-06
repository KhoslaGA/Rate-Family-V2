'use client'

/**
 * HealthRate homepage — ported from index.html + hr-sections.jsx. Hero with the
 * language + Super Visa module, situation pathways, featured guides, the
 * no-email tools band, the honest five-language band, and the trust stats.
 * Education only; body copy is English in phase one.
 */
import { Badge, Bo, Button, Card, Eyebrow, Icon, LanguageSwitcher } from './ds'
import { HR_GUIDES, HR_LANGS, pickL } from './data'
import { hrWrap } from './parts'
import { useHrLang } from './useHrLang'

export default function HealthRateHome() {
  const lang = useHrLang()
  const L = pickL(lang)
  const li = lang === 'fr' ? 'fr' : 'en'

  return (
    <main>
      {/* ── Hero ─────────────────────────────────────────────────────────── */}
      <section style={{ background: 'var(--cream)', position: 'relative', overflow: 'hidden', padding: '72px 0 88px' }}>
        <div aria-hidden style={{ position: 'absolute', top: -140, right: -120, width: 520, height: 520, borderRadius: '50%', background: 'radial-gradient(circle, var(--accent-soft), transparent 70%)' }} />
        <div style={{ ...hrWrap, position: 'relative' }}>
          <div className="rf-hero" style={{ display: 'grid', gridTemplateColumns: '1.05fr .95fr', gap: 56, alignItems: 'center' }}>
            <div>
              <Eyebrow>{L.hero.eyebrow}</Eyebrow>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 52px)', fontWeight: 900, lineHeight: 1.08, letterSpacing: '-.022em', color: 'var(--navy)', margin: '18px 0 20px' }}>
                {L.hero.title[0]}<span style={{ color: 'var(--accent)' }}>{L.hero.title[1]}</span>{L.hero.title[2]}
              </h1>
              <p style={{ fontSize: 18, lineHeight: 1.6, color: 'var(--ink)', maxWidth: 520, marginBottom: 28 }}>{L.hero.sub}</p>
              <div style={{ display: 'flex', gap: 14, flexWrap: 'wrap', alignItems: 'center' }}>
                <Button size="lg" withArrow href={L.hero.primary[1]}>{L.hero.primary[0]}</Button>
                <Button variant="ghost" size="lg" href={L.hero.ghost[1]}>{L.hero.ghost[0]}</Button>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 30 }}>
                {L.hero.checks.map((c, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, fontWeight: 600, color: 'var(--navy-mid)' }}><Icon name="check" size={18} color="var(--accent)" />{c}</div>
                ))}
              </div>
            </div>
            <div style={{ width: '100%', maxWidth: 460, margin: '0 auto' }}>
              <Card pad>
                <div className="eyebrow" style={{ marginBottom: 10 }}>{lang === 'fr' ? 'Lisez dans votre langue' : 'Read in your language'}</div>
                <LanguageSwitcher />
                <div style={{ height: 1, background: 'var(--border)', margin: '20px 0' }} />
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
                  <Bo pose="wave" size={56} />
                  <div>
                    <div style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: 18, color: 'var(--navy)' }}>Super Visa insurance</div>
                    <div style={{ fontSize: 13, color: 'var(--ink-muted)' }}>{lang === 'fr' ? 'Ce que c’est, en langage clair' : 'What it is, in plain language'}</div>
                  </div>
                </div>
                <div style={{ display: 'grid', gap: 8, marginBottom: 16 }}>
                  {[['Min. coverage', '$100,000'], ['Term', '1 year'], ['Who', 'Parents & grandparents']].map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, padding: '9px 12px', background: 'var(--surface-sunk)', borderRadius: 8 }}>
                      <span style={{ color: 'var(--ink-muted)' }}>{k}</span><span style={{ fontWeight: 700, color: 'var(--navy)' }}>{v}</span>
                    </div>
                  ))}
                </div>
                <div className="mono" style={{ fontSize: 11, color: 'var(--ink-muted)', margin: '-6px 0 14px' }}>{lang === 'fr' ? 'Selon IRCC · en date de juin 2026' : 'Per IRCC · as of June 2026'}</div>
                <Button variant="primary" withArrow href={L.hero.primary[1]} style={{ width: '100%' }}>{L.hero.primary[0]}</Button>
                <div style={{ marginTop: 12, fontSize: 11.5, fontStyle: 'italic', color: 'var(--ink-muted)', textAlign: 'center', lineHeight: 1.45 }}>
                  {lang === 'fr' ? 'Éducation seulement. HealthRate ne vend ni ne soumissionne aucune assurance.' : 'Education only. HealthRate does not sell or quote insurance.'}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ── Pathways ─────────────────────────────────────────────────────── */}
      <section className="hr-reveal" style={{ padding: '72px 0', background: 'var(--white)' }}>
        <div style={hrWrap}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <Eyebrow variant="muted">{L.paths.eyebrow}</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 800, color: 'var(--ink-strong)', margin: '12px 0 0' }}>{L.paths.title}</h2>
          </div>
          <div className="rf-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {L.paths.items.map(([t, d, href, cta], i) => (
              <Card key={i} hover accentTop pad as="a" href={href} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 15, color: 'var(--accent)', marginBottom: 12 }}>{'0' + (i + 1)}</div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: 'var(--navy)', margin: '0 0 8px', lineHeight: 1.3 }}>{t}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-muted)', margin: '0 0 16px' }}>{d}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 800, color: 'var(--accent)' }}>{cta} <Icon name="arrowRight" size={14} color="var(--accent)" /></span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured guides ──────────────────────────────────────────────── */}
      <section className="hr-reveal" style={{ padding: '72px 0', background: 'var(--cream)' }}>
        <div style={hrWrap}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32, flexWrap: 'wrap', gap: 12 }}>
            <div>
              <Eyebrow variant="muted">{L.guidesHead.eyebrow}</Eyebrow>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 800, color: 'var(--ink-strong)', margin: '12px 0 0' }}>{L.guidesHead.title}</h2>
            </div>
            <Button variant="outline" size="sm" withArrow href="/health-insurance/guides">{L.guidesHead.all}</Button>
          </div>
          <div className="rf-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {HR_GUIDES.map((g, i) => (
              <Card key={i} hover accentTop pad as="a" href={g.href} style={{ textDecoration: 'none', display: 'block' }}>
                <Badge tone="accent">{g.tag}</Badge>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: 'var(--navy)', margin: '14px 0 8px', lineHeight: 1.3 }}>{g.title[li]}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-muted)', margin: '0 0 16px' }}>{g.desc[li]}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 800, color: 'var(--accent)' }}>{L.readGuide} <Icon name="arrowRight" size={14} color="var(--accent)" /></span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tools band ───────────────────────────────────────────────────── */}
      <section className="hr-reveal" style={{ padding: '72px 0', background: 'var(--white)' }}>
        <div style={hrWrap}>
          <div style={{ textAlign: 'center', marginBottom: 40 }}>
            <Eyebrow variant="muted">{L.tools.eyebrow}</Eyebrow>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 800, color: 'var(--ink-strong)', margin: '12px 0 0' }}>{L.tools.title}</h2>
          </div>
          <div className="rf-3col" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 22 }}>
            {L.tools.items.map(([t, d, href, cta], i) => (
              <Card key={i} hover pad as="a" href={href} style={{ textDecoration: 'none', display: 'block' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
                  <span className="mono" style={{ fontSize: 12, fontWeight: 700, color: 'var(--ink-faint)', letterSpacing: '.08em' }}>TOOL {'0' + (i + 1)}</span>
                  <Badge tone="live">FREE</Badge>
                </div>
                <h3 style={{ fontSize: 19, fontWeight: 700, color: 'var(--navy)', margin: '0 0 8px', lineHeight: 1.3 }}>{t}</h3>
                <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-muted)', margin: '0 0 16px' }}>{d}</p>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13.5, fontWeight: 800, color: 'var(--accent)' }}>{cta} <Icon name="arrowRight" size={14} color="var(--accent)" /></span>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ── Language band ────────────────────────────────────────────────── */}
      <section className="hr-reveal" style={{ padding: '64px 0', background: 'var(--cream)' }}>
        <div style={{ ...hrWrap, textAlign: 'center' }}>
          <Eyebrow variant="muted">{L.langband.eyebrow}</Eyebrow>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 30, fontWeight: 800, color: 'var(--ink-strong)', margin: '12px 0 10px' }}>{L.langband.title}</h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: 'var(--ink-muted)', maxWidth: 560, margin: '0 auto 28px' }}>{L.langband.sub}</p>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'center', marginBottom: 28 }}>
            {HR_LANGS.map(([name, , status], i) => (
              <span key={i} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, padding: '10px 16px', borderRadius: 999, background: 'var(--white)', border: '1px solid var(--border)', boxShadow: 'var(--shadow-soft)' }}>
                <span style={{ fontWeight: 700, fontSize: 14.5, color: 'var(--navy)' }}>{name}</span>
                <Badge tone={status === 'live' ? 'live' : 'soon'}>{status === 'live' ? 'LIVE' : 'SOON'}</Badge>
              </span>
            ))}
          </div>
          <Button variant="outline" withArrow href="/health-insurance/languages">{L.langband.cta}</Button>
        </div>
      </section>

      {/* ── Trust band ───────────────────────────────────────────────────── */}
      <section className="hr-reveal" style={{ padding: '54px 0', background: 'var(--navy)' }}>
        <div className="rf-4col" style={{ ...hrWrap, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
          {L.trust.map(([n, l], i) => (
            <div key={i} style={{ textAlign: 'center', borderLeft: i ? '1px solid rgba(255,255,255,.12)' : 'none' }}>
              <div style={{ fontFamily: 'var(--font-display)', fontWeight: 900, fontSize: 34, color: '#fff', letterSpacing: '-.02em' }}>{n}</div>
              <div className="eyebrow" style={{ color: 'var(--accent)', marginTop: 6 }}>{l}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
