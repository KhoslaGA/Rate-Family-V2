'use client';

import { useEffect, useRef, useState } from 'react';
import { colors, fonts } from '@/styles/homeTokens';
import { Icon } from '@/components/brand/Icon';
import { Bo } from '@/components/brand/Bo';

type QA = { q: string; a: string };

const FAQS: QA[] = [
  {
    q: 'Are you actually selling insurance yet?',
    a: "Not yet. TopRates.ca is an independent insurance education platform today. Quote comparison launches once KLC Group Canada Inc. completes RIBO registration. Life insurance is the one exception — you can talk to a LLQP-licensed advisor at KLC Group right now.",
  },
  {
    q: 'Who actually runs TopRates.ca?',
    a: "TopRates.ca is operated by Webhub Inc. KLC Group Canada Inc. is a separate company that will handle the regulated quote/sale side once RIBO-registered. We publish that distinction on every page because it matters.",
  },
  {
    q: 'Will TopRates.ca be free?',
    a: "Yes — comparing rates will always be free. When the marketplace launches, carriers pay a referral fee only if you actually switch. You never pay us directly and we never mark up your premium.",
  },
  {
    q: 'Why is your content reviewed by an LLQP-licensed advisor?',
    a: "Life insurance content has to be accurate, not approximate — so it's reviewed by LLQP-licensed advisors at KLC Group Canada Inc. before it goes live. Auto/home content is reviewed by the editorial team using the same standard.",
  },
  {
    q: "What's the 2026 Ontario auto reform?",
    a: "Starting July 1, 2026, most accident benefits in Ontario auto policies become optional. Premiums will drop for many drivers — but you have to actively pick what to keep. Our 2026 guide walks through every optional benefit and who should keep what.",
  },
  {
    q: 'How do I know your guides are not selling me something?',
    a: "Because we're not selling anything yet. The guides exist to help you understand insurance before the marketplace exists. When it launches, we'll publish every commission we earn and you can compare with or without our quote engine.",
  },
  {
    q: 'When does the quote comparison launch?',
    a: "Once KLC Group Canada Inc. completes RIBO registration and the first carrier integrations go live. Join the waitlist below and we'll email you the day it does — no other emails between now and then.",
  },
];

type Msg = { who: 'bo' | 'user'; text: string };

export default function ChatFAQ() {
  const [log, setLog] = useState<Msg[]>([
    {
      who: 'bo',
      text: "Hey, I'm Bo. Ask me anything about TopRates — here are common questions to start with.",
    },
  ]);
  const [typing, setTyping] = useState(false);
  const [asked, setAsked] = useState<Set<string>>(new Set());
  const logRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (logRef.current) logRef.current.scrollTop = logRef.current.scrollHeight;
  }, [log, typing]);

  const ask = (item: QA) => {
    setLog((l) => [...l, { who: 'user', text: item.q }]);
    setAsked((a) => new Set([...a, item.q]));
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setLog((l) => [...l, { who: 'bo', text: item.a }]);
    }, 800);
  };

  const remaining = FAQS.filter((f) => !asked.has(f.q));

  return (
    <section style={{ padding: '96px 0', background: colors.cream }}>
      <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 44 }}>
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
            Ask Bo
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
            Straight answers — no sales pitch.
          </h2>
        </div>

        <div className="chat-faq-grid">
          {/* Bo sidebar */}
          <div
            style={{
              background: '#fff',
              borderRadius: 18,
              border: `1px solid ${colors.border}`,
              padding: '26px 22px',
              textAlign: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                top: -40,
                left: -40,
                right: -40,
                height: 140,
                background:
                  'radial-gradient(circle at top, rgba(180,83,9,0.18), transparent 70%)',
              }}
            />
            <div style={{ position: 'relative' }}>
              <Bo size={130} pose="wave" accessory="none" />
            </div>
            <div
              style={{
                fontFamily: fonts.heading,
                fontWeight: 900,
                fontSize: 18,
                color: colors.navy,
                marginTop: 10,
                letterSpacing: '-0.4px',
              }}
            >
              Bo
            </div>
            <div
              style={{
                fontFamily: fonts.sans,
                fontSize: 10,
                color: colors.muted,
                letterSpacing: 1.2,
                marginTop: 4,
                textTransform: 'uppercase',
                fontWeight: 700,
              }}
            >
              Your insurance guide
            </div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                marginTop: 14,
                padding: '5px 11px',
                borderRadius: 999,
                background: 'rgba(13,128,80,0.12)',
                fontFamily: fonts.sans,
                fontSize: 10,
                fontWeight: 800,
                letterSpacing: 1,
                color: colors.green,
              }}
            >
              <span
                style={{
                  width: 7,
                  height: 7,
                  borderRadius: '50%',
                  background: colors.green,
                  boxShadow: `0 0 0 3px rgba(13,128,80,0.25)`,
                }}
              />
              ONLINE
            </div>
          </div>

          {/* Chat panel */}
          <div
            style={{
              background: '#fff',
              borderRadius: 18,
              border: `1px solid ${colors.border}`,
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              boxShadow: '0 20px 50px -30px rgba(27,42,74,0.16)',
            }}
          >
            <div
              style={{
                background: colors.navy,
                color: '#fff',
                padding: '14px 22px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderBottom: `3px solid ${colors.teal}`,
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#4ade80',
                  }}
                />
                <span
                  style={{
                    fontFamily: fonts.heading,
                    fontWeight: 800,
                    fontSize: 14,
                    letterSpacing: '-0.2px',
                  }}
                >
                  TopRates Help · Bo
                </span>
              </div>
              <div
                style={{
                  fontFamily: fonts.sans,
                  fontSize: 10,
                  letterSpacing: 1.5,
                  color: colors.amber,
                  fontWeight: 700,
                }}
              >
                PRE-LAUNCH
              </div>
            </div>

            <div
              ref={logRef}
              style={{
                flex: 1,
                minHeight: 340,
                maxHeight: 420,
                overflowY: 'auto',
                padding: '22px 24px',
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                background: 'linear-gradient(180deg, #FBF7EE 0%, #fff 100%)',
              }}
            >
              {log.map((m, i) => (
                <ChatBubble key={i} msg={m} />
              ))}
              {typing && <TypingDots />}
            </div>

            <div
              style={{
                padding: '14px 20px 18px',
                borderTop: `1px solid ${colors.borderFaint}`,
                background: '#fff',
              }}
            >
              {remaining.length > 0 ? (
                <>
                  <div
                    style={{
                      fontFamily: fonts.sans,
                      fontSize: 9,
                      letterSpacing: 1.5,
                      color: colors.muted,
                      fontWeight: 700,
                      textTransform: 'uppercase',
                      marginBottom: 10,
                    }}
                  >
                    Suggested questions
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {remaining.slice(0, 5).map((item) => (
                      <button
                        key={item.q}
                        onClick={() => ask(item)}
                        disabled={typing}
                        style={{
                          background: colors.cream,
                          border: `1px solid ${colors.border}`,
                          borderRadius: 999,
                          padding: '8px 14px',
                          fontFamily: fonts.heading,
                          fontWeight: 700,
                          fontSize: 12,
                          color: colors.navy,
                          cursor: typing ? 'default' : 'pointer',
                          opacity: typing ? 0.5 : 1,
                          transition: 'all 0.15s',
                        }}
                      >
                        {item.q}
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <div
                  style={{
                    fontFamily: fonts.heading,
                    fontSize: 13,
                    color: colors.muted,
                    padding: '6px 0',
                    textAlign: 'center',
                  }}
                >
                  That&rsquo;s all the common questions —{' '}
                  <a
                    href="/contact"
                    style={{ color: colors.teal, fontWeight: 700, textDecoration: 'none' }}
                  >
                    contact us
                  </a>{' '}
                  for anything else.
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatBubble({ msg }: { msg: Msg }) {
  const isBo = msg.who === 'bo';
  return (
    <div
      style={{
        display: 'flex',
        gap: 10,
        alignItems: 'flex-end',
        flexDirection: isBo ? 'row' : 'row-reverse',
      }}
    >
      {isBo && (
        <div
          style={{
            width: 32,
            height: 32,
            borderRadius: '50%',
            background: colors.teal,
            flexShrink: 0,
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff',
            fontFamily: fonts.heading,
            fontWeight: 900,
            fontSize: 13,
          }}
        >
          B
        </div>
      )}
      <div
        style={{
          maxWidth: '78%',
          padding: '11px 15px',
          borderRadius: isBo ? '14px 14px 14px 4px' : '14px 14px 4px 14px',
          background: isBo ? '#fff' : colors.teal,
          color: isBo ? colors.navy : '#fff',
          border: isBo ? `1px solid ${colors.border}` : 'none',
          fontFamily: fonts.heading,
          fontSize: 14,
          lineHeight: 1.55,
          boxShadow: isBo
            ? '0 2px 6px rgba(27,42,74,0.04)'
            : '0 2px 6px rgba(10,126,140,0.25)',
        }}
      >
        {msg.text}
      </div>
    </div>
  );
}

function TypingDots() {
  return (
    <div style={{ display: 'flex', gap: 10, alignItems: 'flex-end' }}>
      <div
        style={{
          width: 32,
          height: 32,
          borderRadius: '50%',
          background: colors.teal,
          flexShrink: 0,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff',
          fontFamily: fonts.heading,
          fontWeight: 900,
          fontSize: 13,
        }}
      >
        B
      </div>
      <div
        style={{
          padding: '14px 16px',
          borderRadius: '14px 14px 14px 4px',
          background: '#fff',
          border: `1px solid ${colors.border}`,
          display: 'flex',
          gap: 4,
          alignItems: 'center',
        }}
      >
        {[0, 0.15, 0.3].map((d, i) => (
          <span
            key={i}
            className="chat-faq-dot"
            style={{
              width: 7,
              height: 7,
              borderRadius: '50%',
              background: colors.muted,
              animationDelay: `${d}s`,
              display: 'inline-block',
            }}
          />
        ))}
      </div>
    </div>
  );
}
