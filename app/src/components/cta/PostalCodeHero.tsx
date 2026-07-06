'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { colors, fonts } from '@/styles/tokens';
import { POSTAL_CODE_HERO_COPY, type Product } from '@/lib/cta/postalCodeHeroCopy';
import { validatePostalCode } from '@/lib/postal/validate';
import { resolveCityFromFsa } from '@/lib/postal/resolveCity';

type Theme = 'light' | 'dark';

interface PostalCodeHeroProps {
  product: Product;
  theme?: Theme;
  showCaveat?: boolean;
  className?: string;
}

const SELECTABLE_PRODUCTS: Exclude<Product, 'unified' | 'commercial'>[] = ['auto', 'home', 'tenant'];

export default function PostalCodeHero({
  product,
  theme = 'light',
  showCaveat = true,
}: PostalCodeHeroProps) {
  const router = useRouter();
  const copy = POSTAL_CODE_HERO_COPY[product];
  const isUnified = product === 'unified';

  const [selectedProduct, setSelectedProduct] = useState<Exclude<Product, 'unified' | 'commercial'>>('auto');
  const [postal, setPostal] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [nonOntarioNotice, setNonOntarioNotice] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const isDark = theme === 'dark';
  const headlineColor = isDark ? '#fff' : colors.inkStrong;
  const subheadColor = isDark ? 'rgba(255,255,255,0.6)' : colors.inkMuted;
  const caveatColor = isDark ? 'rgba(255,255,255,0.45)' : colors.inkMuted;
  const inputBg = isDark ? 'rgba(255,255,255,0.07)' : colors.white;
  const inputBorder = isDark ? 'rgba(255,255,255,0.12)' : colors.border;
  const inputColor = isDark ? '#fff' : colors.ink;

  const handleChange = (raw: string) => {
    let v = raw.toUpperCase().replace(/[^A-Z0-9 ]/g, '');
    if (v.length > 3 && v[3] !== ' ') v = `${v.slice(0, 3)} ${v.slice(3)}`;
    if (v.length > 7) v = v.slice(0, 7);
    setPostal(v);
    if (error) setError(null);
    if (nonOntarioNotice) setNonOntarioNotice(false);
  };

  const handleSubmit = () => {
    if (submitting) return;
    const result = validatePostalCode(postal);
    if (!result.valid) {
      setError(result.error === 'empty' ? 'Please enter a postal code.' : 'Please enter a valid Canadian postal code.');
      return;
    }
    if (!result.ontario) {
      setNonOntarioNotice(true);
      return;
    }
    setSubmitting(true);
    const activeProduct = isUnified ? selectedProduct : product;
    const pillar = isUnified
      ? POSTAL_CODE_HERO_COPY[selectedProduct].productPillar
      : copy.productPillar;
    // Auto is the only product with city pages today (home + tenant
    // route to the pillar). When the FSA matches a city, deep-link there.
    if (activeProduct === 'auto') {
      const city = resolveCityFromFsa(result.fsa);
      if (city) {
        router.push(`/auto-insurance/${city.slug}?fsa=${result.fsa}`);
        return;
      }
    }
    router.push(`${pillar}?fsa=${result.fsa}`);
  };

  return (
    <div style={{ maxWidth: 720, margin: '0 auto', textAlign: 'center' }}>
      <h1
        style={{
          fontFamily: fonts.heading,
          fontWeight: 700,
          fontSize: 'clamp(32px, 4.6vw, 48px)',
          lineHeight: 1.15,
          color: headlineColor,
          margin: '0 0 16px',
          letterSpacing: '-0.5px',
        }}
      >
        {copy.headline}
      </h1>
      <p
        style={{
          fontFamily: fonts.sans,
          fontSize: 18,
          lineHeight: 1.6,
          color: subheadColor,
          margin: '0 auto 28px',
          maxWidth: 600,
        }}
      >
        {copy.subhead}
      </p>

      {isUnified && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: 8,
            flexWrap: 'wrap',
            marginBottom: 20,
          }}
          role="group"
          aria-label="What are you insuring?"
        >
          {SELECTABLE_PRODUCTS.map((p) => {
            const on = selectedProduct === p;
            return (
              <button
                key={p}
                onClick={() => setSelectedProduct(p)}
                aria-pressed={on}
                style={{
                  padding: '8px 18px',
                  borderRadius: 999,
                  fontFamily: fonts.sans,
                  fontSize: 14,
                  fontWeight: 600,
                  letterSpacing: '0.2px',
                  cursor: 'pointer',
                  background: on ? colors.teal : 'transparent',
                  color: on ? '#fff' : (isDark ? 'rgba(255,255,255,0.7)' : colors.ink),
                  border: `1.5px solid ${on ? colors.teal : (isDark ? 'rgba(255,255,255,0.18)' : colors.border)}`,
                  transition: 'all 0.18s',
                }}
              >
                {p === 'auto' ? 'Car' : p === 'home' ? 'Home' : 'Tenant'}
              </button>
            );
          })}
        </div>
      )}

      <div className="pch-form" style={{ display: 'flex', gap: 12, justifyContent: 'center', maxWidth: 480, margin: '0 auto', flexWrap: 'wrap' }}>
        <label htmlFor="pch-postal" style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0,0,0,0)', whiteSpace: 'nowrap', border: 0 }}>
          Postal code
        </label>
        <input
          id="pch-postal"
          type="text"
          inputMode="text"
          autoComplete="postal-code"
          value={postal}
          placeholder={copy.inputPlaceholder}
          onChange={(e) => handleChange(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSubmit()}
          aria-invalid={!!error}
          aria-describedby={error ? 'pch-error' : nonOntarioNotice ? 'pch-non-on' : undefined}
          style={{
            flex: '1 1 220px',
            minWidth: 200,
            padding: '14px 18px',
            borderRadius: 12,
            border: `1.5px solid ${error ? colors.red : nonOntarioNotice ? colors.amber : inputBorder}`,
            background: inputBg,
            color: inputColor,
            fontFamily: fonts.sans,
            fontSize: 18,
            fontWeight: 500,
            letterSpacing: '0.4px',
            outline: 'none',
          }}
        />
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="cta-btn"
          style={{
            padding: '14px 24px',
            borderRadius: 12,
            border: 'none',
            background: colors.teal,
            color: '#fff',
            fontFamily: fonts.sans,
            fontSize: 16,
            fontWeight: 600,
            letterSpacing: '0.2px',
            cursor: submitting ? 'wait' : 'pointer',
            whiteSpace: 'nowrap',
            opacity: submitting ? 0.7 : 1,
          }}
        >
          {submitting ? 'Looking up…' : copy.submitLabel}
        </button>
      </div>

      {error && (
        <div
          id="pch-error"
          role="alert"
          aria-live="polite"
          style={{ marginTop: 12, fontFamily: fonts.sans, fontSize: 14, color: colors.red }}
        >
          {error}
        </div>
      )}

      {nonOntarioNotice && (
        <div
          id="pch-non-on"
          aria-live="polite"
          style={{ marginTop: 12, fontFamily: fonts.sans, fontSize: 14, color: colors.amber, maxWidth: 480, margin: '12px auto 0' }}
        >
          We&rsquo;re focused on Ontario for now —{' '}
          <button
            onClick={() => {
              setSubmitting(true);
              router.push(isUnified ? POSTAL_CODE_HERO_COPY[selectedProduct].productPillar : copy.productPillar);
            }}
            style={{ background: 'transparent', border: 'none', color: colors.amber, textDecoration: 'underline', cursor: 'pointer', font: 'inherit', padding: 0 }}
          >
            see our general guide instead
          </button>.
        </div>
      )}

      {showCaveat && (
        <p
          style={{
            marginTop: 20,
            fontFamily: fonts.sans,
            fontSize: 13,
            fontStyle: 'italic',
            color: caveatColor,
            lineHeight: 1.5,
          }}
        >
          This is educational content, not a quote. Quotes go live with our brokerage in summer 2027.
        </p>
      )}
    </div>
  );
}
