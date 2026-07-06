'use client';

import Link from 'next/link';
import { colors, fonts } from '@/styles/homeTokens';
import { Icon } from '@/components/brand/Icon';
import type { IconName } from '@/components/brand/Icon';

type ArticleTag = 'REFORM' | 'GUIDE' | 'COMPARE' | 'PERSONA' | 'TOOL' | 'NEWS';

type SideArticle = {
  tag: ArticleTag;
  iconName: IconName;
  title: string;
  read: string;
  href: string;
};

const FEATURED = {
  tag: 'PILLAR GUIDE',
  read: '14 MIN READ',
  title: '2026 Ontario Auto Reform: The Complete Guide',
  desc: 'July 1, 2026 flips the script on Ontario accident benefits. This guide walks through every optional coverage, who should keep what, and the choices that change your premium.',
  href: '/blog',
  badge: 'REFORM · JULY 1, 2026',
};

const SIDE: SideArticle[] = [
  {
    tag: 'GUIDE',
    iconName: 'shield',
    title: 'Which accident benefits become optional in 2026?',
    read: '8 MIN',
    href: '/blog',
  },
  {
    tag: 'COMPARE',
    iconName: 'home',
    title: 'Home insurance 101: every Ontario homeowner edition',
    read: '6 MIN',
    href: '/blog',
  },
  {
    tag: 'GUIDE',
    iconName: 'card',
    title: 'Best Canadian credit cards of 2026: editorial picks',
    read: '5 MIN',
    href: '/blog',
  },
  {
    tag: 'REFORM',
    iconName: 'car',
    title: 'Income replacement benefits: do you actually need them?',
    read: '7 MIN',
    href: '/blog',
  },
];

export default function Articles() {
  return (
    <section style={{ padding: '96px 0', background: '#fff' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 44,
            flexWrap: 'wrap',
            gap: 16,
          }}
        >
          <div>
            <div
              style={{
                fontFamily: fonts.sans,
                fontSize: 11,
                letterSpacing: 2,
                color: colors.teal,
                fontWeight: 700,
                textTransform: 'uppercase',
                marginBottom: 10,
              }}
            >
              Latest from the newsroom
            </div>
            <h2
              style={{
                fontFamily: fonts.heading,
                fontWeight: 900,
                fontSize: 40,
                color: colors.navy,
                margin: 0,
                letterSpacing: '-1.2px',
              }}
            >
              Insurance news &amp; plain-English guides.
            </h2>
          </div>
          <Link
            href="/blog"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 6,
              fontFamily: fonts.heading,
              fontSize: 14,
              fontWeight: 700,
              color: colors.teal,
              textDecoration: 'none',
            }}
          >
            View all articles <Icon name="arrowRight" size={13} color={colors.amber} />
          </Link>
        </div>

        <div className="articles-grid">
          {/* Featured */}
          <Link
            href={FEATURED.href}
            style={{
              display: 'block',
              borderRadius: 18,
              overflow: 'hidden',
              border: `1px solid ${colors.border}`,
              textDecoration: 'none',
              background: '#fff',
              boxShadow: '0 20px 50px -30px rgba(27,42,74,0.2)',
            }}
          >
            <div
              style={{
                height: 260,
                background: `linear-gradient(135deg, ${colors.navy} 0%, ${colors.teal} 100%)`,
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.08,
                  backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  top: 20,
                  left: 20,
                  background: colors.amber,
                  color: '#fff',
                  fontFamily: fonts.sans,
                  fontSize: 9,
                  fontWeight: 800,
                  padding: '5px 11px',
                  borderRadius: 3,
                  letterSpacing: 1.5,
                }}
              >
                {FEATURED.badge}
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: 28,
                  left: 28,
                  right: 28,
                  fontFamily: fonts.heading,
                  fontWeight: 900,
                  fontSize: 32,
                  color: '#fff',
                  letterSpacing: '-1px',
                  lineHeight: 1.1,
                }}
              >
                The 2026 Guide.
              </div>
            </div>
            <div style={{ padding: '26px 28px' }}>
              <div
                style={{
                  display: 'flex',
                  gap: 12,
                  alignItems: 'center',
                  marginBottom: 14,
                  fontFamily: fonts.sans,
                  fontSize: 10,
                  letterSpacing: 1,
                  color: colors.muted,
                }}
              >
                <span
                  style={{
                    background: 'rgba(180,83,9,0.15)',
                    color: colors.amber,
                    padding: '3px 8px',
                    borderRadius: 4,
                    fontWeight: 800,
                  }}
                >
                  {FEATURED.tag}
                </span>
                <span>{FEATURED.read}</span>
              </div>
              <h3
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 900,
                  fontSize: 24,
                  color: colors.navy,
                  margin: '0 0 10px',
                  letterSpacing: '-0.5px',
                  lineHeight: 1.25,
                }}
              >
                {FEATURED.title}
              </h3>
              <p
                style={{
                  fontFamily: fonts.heading,
                  fontSize: 14,
                  color: colors.muted,
                  lineHeight: 1.6,
                  margin: 0,
                }}
              >
                {FEATURED.desc}
              </p>
            </div>
          </Link>

          {/* Side list */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {SIDE.map((a, i) => (
              <Link
                key={i}
                href={a.href}
                style={{
                  display: 'flex',
                  gap: 16,
                  alignItems: 'center',
                  padding: '18px 20px',
                  borderRadius: 14,
                  background: colors.cream,
                  border: `1px solid ${colors.border}`,
                  textDecoration: 'none',
                  flex: 1,
                }}
              >
                <div
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 12,
                    flexShrink: 0,
                    background: i % 2 ? colors.navy : colors.teal,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                  }}
                >
                  <Icon name={a.iconName} size={22} color="#fff" strokeWidth={1.8} />
                </div>
                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      display: 'flex',
                      gap: 10,
                      marginBottom: 6,
                      fontFamily: fonts.sans,
                      fontSize: 9,
                      letterSpacing: 1,
                      color: colors.muted,
                      fontWeight: 700,
                    }}
                  >
                    <span style={{ color: colors.teal }}>{a.tag}</span>
                    <span>·</span>
                    <span>{a.read}</span>
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.heading,
                      fontWeight: 800,
                      fontSize: 14,
                      color: colors.navy,
                      lineHeight: 1.35,
                      letterSpacing: '-0.2px',
                    }}
                  >
                    {a.title}
                  </div>
                </div>
                <Icon name="arrowRight" size={14} color={colors.muted} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
