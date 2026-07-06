'use client';

import Link from 'next/link';
import { colors, fonts, shadows } from '@/styles/editorialTokens';
import { Eyebrow } from './Pill';
import { ArrowRight, ChevronDown, Shield, CheckCircle, Globe, Users, DollarSign } from './icons';
import { WebhubLink } from '@/components/legal/WebhubLink';

export default function EditorialHero() {
  return (
    <section
      style={{
        background: colors.cream,
        position: 'relative',
        overflow: 'hidden',
        padding: '84px 0 96px',
      }}
    >
      {/* gold radial glow top-right */}
      <div
        aria-hidden="true"
        style={{
          content: '""',
          position: 'absolute',
          top: -120,
          right: -120,
          width: 520,
          height: 520,
          background: 'radial-gradient(circle, rgba(224,162,39,.18), transparent 70%)',
          borderRadius: '50%',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          padding: '0 24px',
          position: 'relative',
        }}
      >
        <div className="ed-hero-grid">
          <div>
            <Eyebrow>Independent Canadian insurance &amp; money education</Eyebrow>
            <h1
              style={{
                fontFamily: fonts.heading,
                fontWeight: 600,
                fontSize: 'clamp(40px, 5.2vw, 62px)',
                margin: '18px 0 22px',
                color: colors.navy,
                lineHeight: 1.1,
                letterSpacing: '-0.01em',
              }}
            >
              Big money decisions, explained in{' '}
              <em
                style={{
                  fontStyle: 'italic',
                  color: colors.accentWarm,
                }}
              >
                plain English
              </em>
              .
            </h1>
            <p
              style={{
                fontFamily: fonts.body,
                fontSize: 19,
                color: '#374151',
                maxWidth: 520,
                marginBottom: 32,
                lineHeight: 1.6,
              }}
            >
              We publish straight-talking guides to insurance, credit cards and mortgages —
              and connect you with a licensed Canadian advisor when you want real help
              with life or disability coverage.
            </p>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 18,
                flexWrap: 'wrap',
              }}
            >
              <Link href="/life-insurance" className="ed-btn-primary">
                Book a free call
                <ArrowRight size={18} color={colors.navy} />
              </Link>
              <a href="#tiers" className="ed-btn-ghost">
                See how it works
                <ChevronDown size={14} color={colors.navy} />
              </a>
            </div>

            <div
              style={{
                display: 'flex',
                gap: 26,
                marginTop: 34,
                flexWrap: 'wrap',
              }}
            >
              {[
                { icon: <Shield size={20} color={colors.advisor} />, text: 'Referrals routed to a FSRA-licensed advisor' },
                { icon: <CheckCircle size={20} color={colors.advisor} />, text: 'No obligation & no cost to you' },
                { icon: <Globe size={20} color={colors.advisor} />, text: 'Canadian rules, rates & tax only' },
              ].map((it, i) => (
                <div
                  key={i}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    fontFamily: fonts.body,
                    fontSize: 14,
                    fontWeight: 600,
                    color: colors.navyMid,
                  }}
                >
                  {it.icon}
                  {it.text}
                </div>
              ))}
            </div>

            <p
              style={{
                fontSize: 13,
                color: colors.muted,
                marginTop: 26,
                maxWidth: 480,
                lineHeight: 1.5,
                fontFamily: fonts.body,
              }}
            >
              TopRates.ca is published by <WebhubLink />. We are not a licensed insurance broker;
              licensed advice is provided by our referral partner, KLC Group Canada Inc.
            </p>
          </div>

          <div className="ed-hero-visual">
            <div
              style={{
                borderRadius: 24,
                overflow: 'hidden',
                boxShadow: shadows.lg,
                aspectRatio: '4 / 5',
                background: `linear-gradient(150deg, ${colors.navyMid}, ${colors.navy})`,
                position: 'relative',
              }}
            >
              <div
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'radial-gradient(circle at 30% 20%, rgba(224,162,39,.25), transparent 55%)',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '62%',
                  background:
                    'linear-gradient(180deg, transparent, rgba(11,37,69,.55))',
                  display: 'flex',
                  alignItems: 'flex-end',
                  padding: 28,
                }}
              >
                <div
                  style={{
                    fontFamily: fonts.heading,
                    color: '#fff',
                    fontSize: 15,
                    opacity: 0.85,
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;We finally understood our coverage — in one phone call.&rdquo;
                </div>
              </div>
            </div>

            {/* Floating cards */}
            <div className="ed-float ed-float-1">
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: 'rgba(16,185,129,.14)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <Users size={22} color={colors.advisorInk} />
              </div>
              <div>
                <b
                  style={{
                    display: 'block',
                    fontSize: 14,
                    color: colors.navy,
                    fontFamily: fonts.body,
                  }}
                >
                  Licensed advisor
                </b>
                <small
                  style={{
                    fontSize: 12,
                    color: colors.muted,
                    fontFamily: fonts.body,
                  }}
                >
                  LLQP · regulated by FSRA
                </small>
              </div>
            </div>

            <div className="ed-float ed-float-2">
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 10,
                  background: 'rgba(224,162,39,.16)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0,
                }}
              >
                <DollarSign size={22} color="#B07d12" />
              </div>
              <div>
                <b
                  style={{
                    display: 'block',
                    fontSize: 14,
                    color: colors.navy,
                    fontFamily: fonts.body,
                  }}
                >
                  $0 to talk
                </b>
                <small
                  style={{
                    fontSize: 12,
                    color: colors.muted,
                    fontFamily: fonts.body,
                  }}
                >
                  Your price never goes up
                </small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
