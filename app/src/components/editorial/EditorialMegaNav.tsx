'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { colors, fonts, shadows } from '@/styles/editorialTokens';
import { ChevronDown, ArrowRight, Menu } from './icons';
import { BrandLogo } from '@/components/brand/Logo';
import { NAV_DATA, type NavCategory, type NavSubItem } from '@/components/layout/navData';

/**
 * Editorial mega-nav — Fraunces + Hanken Grotesk styling applied to the
 * original NAV_DATA structure (navData.ts). This component is the
 * design-only redo of the old src/components/layout/MegaNav: same
 * categories, same submenu items, same LIVE/SOON pills, same wide
 * layout for "News and Resources" — just the editorial visual register
 * (gold-forward palette, dot-coded tier indicators, Fraunces serif).
 */

type Tone = 'advisor' | 'learn' | 'compare' | 'mix';

// Map category id → tier tone. Drives the colored dot on each top-level
// nav button so visitors can tell at a glance which mode that category
// operates in (advisor = licensed human, learn = pure education,
// compare = affiliate-style comparison).
const CATEGORY_TONE: Record<string, Tone> = {
  car: 'learn',
  home: 'learn',
  life: 'advisor',
  mortgage: 'compare',
  cards: 'compare',
  more: 'mix',
  news: 'mix',
};

const PROMO_ACCENT: Record<'gold' | 'green' | 'teal', string> = {
  gold: colors.accent,
  green: colors.advisor,
  teal: colors.compare,
};

export default function EditorialMegaNav() {
  const [open, setOpen] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  // Close any open dropdown / mobile sheet on route change.
  useEffect(() => {
    setOpen(null);
    setMobileOpen(false);
  }, [pathname]);

  // Hide nav on /studio (Sanity)
  if (pathname?.startsWith('/studio')) return null;

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(255,255,255,.92)',
        backdropFilter: 'blur(12px)',
        borderBottom: `1px solid ${colors.border}`,
      }}
      onMouseLeave={() => setOpen(null)}
    >
      {/* Flex with `justify-content: space-between`. Switched from a
          `1fr auto 1fr` grid because grid auto-placement was fragile:
          when the middle `.ed-nav-links` ul becomes `display: none` at
          ≤1240px, the third source-order item (the CTA wrapper) would
          drop into the vacated middle column, leaving the CTA + ham
          floating mid-page. With flex space-between, two visible
          items go to opposite ends; three visible items distribute
          logo|nav|cta as designed. */}
      <div
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '0 24px',
          height: 80,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: 16,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <BrandLogo height={28} />
          </Link>
        </div>

        <ul
          className="ed-nav-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          {NAV_DATA.map((item) => (
            <li
              key={item.id}
              style={{ position: 'static' }}
              onMouseEnter={() => setOpen(item.id)}
            >
              <button
                className="ed-nav-btn"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '8px 11px',
                  borderRadius: 9,
                  fontFamily: fonts.body,
                  fontWeight: 600,
                  fontSize: 14,
                  cursor: 'pointer',
                  background: open === item.id ? colors.cream : 'transparent',
                  border: 'none',
                  color: colors.ink,
                  whiteSpace: 'nowrap',
                }}
              >
                <NavDot tone={CATEGORY_TONE[item.id] ?? 'mix'} />
                {item.label}
                <ChevronDown
                  size={13}
                  color="currentColor"
                  style={{
                    opacity: 0.6,
                    transform: open === item.id ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform .2s',
                  }}
                />
              </button>
            </li>
          ))}
        </ul>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
            flexShrink: 0,
          }}
        >
          <Link
            href="/life-insurance"
            className="ed-btn-primary"
            style={{ padding: '10px 20px', fontSize: 14 }}
          >
            Book a free call
          </Link>
          <button
            className="ed-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            style={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 8,
              display: 'none',
            }}
          >
            <Menu size={26} color={colors.navy} />
          </button>
        </div>
      </div>

      {/* Mega panels — one per category */}
      {NAV_DATA.map((item) => (
        <MegaPanel
          key={item.id}
          item={item}
          active={open === item.id}
          onClose={() => setOpen(null)}
          onEnter={() => setOpen(item.id)}
        />
      ))}

      {/* Mobile menu */}
      {mobileOpen && <MobileMenu onClose={() => setMobileOpen(false)} />}
    </header>
  );
}

function MegaPanel({
  item,
  active,
  onClose,
  onEnter,
}: {
  item: NavCategory;
  active: boolean;
  onClose: () => void;
  onEnter: () => void;
}) {
  const isWide = item.layout === 'wide';
  const showPromo = !isWide && !!item.promo;
  const sectionCols = isWide ? Math.min(item.sections.length, 5) : 3;
  const promoAccent = item.promo ? PROMO_ACCENT[item.promo.accent] : colors.accent;

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onClose}
      style={{
        position: 'absolute',
        top: '100%',
        left: 0,
        right: 0,
        background: '#fff',
        borderTop: `1px solid ${colors.border}`,
        boxShadow: shadows.lg,
        opacity: active ? 1 : 0,
        visibility: active ? 'visible' : 'hidden',
        transform: active ? 'translateY(0)' : 'translateY(8px)',
        transition: 'all .2s ease',
        zIndex: 90,
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: '0 auto',
          padding: '30px 24px',
          display: 'grid',
          gridTemplateColumns: showPromo ? '2.6fr 1fr' : '1fr',
          gap: showPromo ? 36 : 0,
        }}
        className="ed-mega-inner"
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: `repeat(${sectionCols}, 1fr)`,
            gap: isWide ? 36 : 30,
          }}
        >
          {item.sections.map((sec, gi) => (
            <div key={gi}>
              <h5
                style={{
                  fontFamily: fonts.body,
                  fontSize: 11.5,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: colors.navy,
                  marginBottom: 12,
                  fontWeight: 700,
                  paddingBottom: 9,
                  borderBottom: `1px solid ${colors.border}`,
                }}
              >
                {sec.title}
              </h5>
              {sec.items.map((sub) => (
                <Link
                  key={sub.name}
                  href={sub.href}
                  onClick={onClose}
                  style={{
                    display: 'block',
                    padding: '7px 0',
                    color: colors.ink,
                    lineHeight: 1.3,
                    textDecoration: 'none',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      marginBottom: isWide ? 0 : 2,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: fonts.body,
                        fontSize: 14,
                        fontWeight: 500,
                        color: colors.ink,
                      }}
                    >
                      {sub.name}
                    </span>
                    {sub.live && <StatusChip tone="live" />}
                    {sub.soon && <StatusChip tone="soon" />}
                  </div>
                  {!isWide && sub.desc && (
                    <span
                      style={{
                        display: 'block',
                        fontSize: 12,
                        color: colors.muted,
                        fontFamily: fonts.body,
                        fontWeight: 400,
                        marginTop: 1,
                      }}
                    >
                      {sub.desc}
                    </span>
                  )}
                </Link>
              ))}
            </div>
          ))}
        </div>

        {showPromo && item.promo && (
          <div
            style={{
              background: colors.cream,
              borderRadius: 14,
              padding: 22,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: -40,
                right: -40,
                width: 140,
                height: 140,
                background: `radial-gradient(circle, ${promoAccent}33, transparent 70%)`,
                borderRadius: '50%',
              }}
            />
            <div style={{ position: 'relative' }}>
              <span
                style={{
                  fontFamily: fonts.body,
                  fontSize: 10.5,
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: promoAccent,
                }}
              >
                {item.promo.tag}
              </span>
              <h6
                style={{
                  fontFamily: fonts.heading,
                  fontSize: 18,
                  color: colors.navy,
                  margin: '8px 0 7px',
                  lineHeight: 1.15,
                  fontWeight: 600,
                }}
              >
                {item.promo.title}
              </h6>
              <p
                style={{
                  fontFamily: fonts.body,
                  fontSize: 12.5,
                  color: colors.muted,
                  marginBottom: 14,
                  lineHeight: 1.5,
                }}
              >
                {item.promo.desc}
              </p>
              <Link
                href={item.promo.href}
                onClick={onClose}
                style={{
                  fontFamily: fonts.body,
                  fontSize: 13.5,
                  fontWeight: 700,
                  color: colors.navy,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  textDecoration: 'none',
                }}
              >
                {item.promo.cta}
                <ArrowRight size={14} color={colors.navy} />
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div
      style={{
        position: 'fixed',
        top: 80,
        left: 0,
        right: 0,
        bottom: 0,
        background: '#fff',
        zIndex: 99,
        padding: '16px 20px 40px',
        overflowY: 'auto',
        display: 'block',
      }}
      className="ed-mobile-menu"
    >
      {NAV_DATA.map((item) => (
        <details
          key={item.id}
          style={{ borderBottom: `1px solid ${colors.border}` }}
        >
          <summary
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 9,
              padding: '15px 4px',
              fontSize: 16,
              fontWeight: 600,
              cursor: 'pointer',
              color: colors.navy,
              fontFamily: fonts.body,
              listStyle: 'none',
            }}
          >
            <NavDot tone={CATEGORY_TONE[item.id] ?? 'mix'} />
            {item.label}
            <span style={{ marginLeft: 'auto', opacity: 0.5 }}>
              <ChevronDown size={18} color={colors.navy} />
            </span>
          </summary>
          <div style={{ padding: '2px 0 14px 18px' }}>
            {item.sections.map((sec, gi) => (
              <div key={gi}>
                <h6
                  style={{
                    fontFamily: fonts.body,
                    fontSize: 11,
                    textTransform: 'uppercase',
                    letterSpacing: '0.07em',
                    color: colors.muted,
                    margin: '10px 0 2px',
                    fontWeight: 700,
                  }}
                >
                  {sec.title}
                </h6>
                {sec.items.map((it: NavSubItem) => (
                  <Link
                    key={it.name}
                    href={it.href}
                    onClick={onClose}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 6,
                      padding: '9px 4px',
                      fontSize: 14.5,
                      fontWeight: 500,
                      color: colors.ink,
                      textDecoration: 'none',
                    }}
                  >
                    {it.name}
                    {it.live && <StatusChip tone="live" />}
                    {it.soon && <StatusChip tone="soon" />}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </details>
      ))}
      <Link
        href="/life-insurance"
        onClick={onClose}
        className="ed-btn-primary"
        style={{ width: '100%', justifyContent: 'center', marginTop: 22 }}
      >
        Book a free call
      </Link>
    </div>
  );
}

function NavDot({ tone }: { tone: Tone }) {
  if (tone === 'mix') {
    return (
      <span
        aria-hidden="true"
        style={{
          width: 7,
          height: 7,
          borderRadius: '50%',
          background: `linear-gradient(90deg, ${colors.advisor} 33%, ${colors.learn} 33% 66%, ${colors.compare} 66%)`,
          flexShrink: 0,
        }}
      />
    );
  }
  const bg = tone === 'advisor' ? colors.advisor : tone === 'learn' ? colors.learn : colors.compare;
  return (
    <span
      aria-hidden="true"
      style={{
        width: 7,
        height: 7,
        borderRadius: '50%',
        background: bg,
        flexShrink: 0,
      }}
    />
  );
}

function StatusChip({ tone }: { tone: 'live' | 'soon' }) {
  const palette =
    tone === 'live'
      ? { bg: 'rgba(16,185,129,.12)', fg: colors.advisorInk }
      : { bg: 'rgba(224,162,39,.15)', fg: colors.accent };
  return (
    <span
      style={{
        fontFamily: fonts.body,
        fontSize: 8.5,
        fontWeight: 800,
        letterSpacing: 1,
        padding: '2px 5px',
        borderRadius: 3,
        background: palette.bg,
        color: palette.fg,
        textTransform: 'uppercase',
      }}
    >
      {tone}
    </span>
  );
}
