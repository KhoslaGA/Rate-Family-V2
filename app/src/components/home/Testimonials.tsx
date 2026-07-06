'use client';

import { colors, fonts } from '@/styles/homeTokens';
import { Icon } from '@/components/brand/Icon';
import PreviewBadge from './PreviewBadge';

type Quote = {
  name: string;
  role: string;
  body: string;
  save: string;
};

const QUOTES: Quote[] = [
  {
    name: 'Priya K.',
    role: 'New to Canada · Brampton',
    body: "No Canadian credit history made every carrier quote me $5,800+. TopRates found me one that accepts international driving records — saved over $2,000.",
    save: '$2,100/yr',
  },
  {
    name: 'Marcus T.',
    role: 'Homeowner · Ottawa',
    body: "Bundled my auto and home in ten minutes. The sample savings card wasn't fluff — I really did save what they showed. Switched that afternoon.",
    save: '$782/yr',
  },
  {
    name: 'Sarah L.',
    role: 'Young driver · Toronto',
    body: "G2 license and 23 years old means insurers treat you like a criminal. Found a telematics program that cut my quote in half.",
    save: '$1,450/yr',
  },
  {
    name: 'David W.',
    role: 'Parent of teen · Mississauga',
    body: "Adding my son was going to be $3,200/yr extra with my current carrier. Compared and found another at a third of that.",
    save: '$2,140/yr',
  },
  {
    name: 'Jennifer R.',
    role: 'Condo owner · Vaughan',
    body: "Loved that I didn't have to talk to a single salesperson. Compared, picked, switched. The broker only showed up when I needed help.",
    save: '$340/yr',
  },
  {
    name: 'Ahmed S.',
    role: 'Rideshare driver · Scarborough',
    body: "Most carriers won't cover rideshare. TopRates filtered them out automatically so I only saw policies that work for me.",
    save: '$880/yr',
  },
];

export default function Testimonials() {
  return (
    <section
      style={{
        padding: '96px 0',
        background: 'linear-gradient(180deg, #FBF7EE 0%, #f0e8d2 100%)',
      }}
    >
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <PreviewBadge />
        </div>

        <div style={{ textAlign: 'center', marginBottom: 56 }}>
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
            What the experience will look like
          </div>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 900,
              fontSize: 42,
              color: colors.navy,
              margin: '0 0 12px',
              letterSpacing: '-1.3px',
            }}
          >
            Canadians who stopped overpaying.
          </h2>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 24,
              marginTop: 18,
              fontFamily: fonts.heading,
              fontSize: 13,
              color: colors.muted,
              fontStyle: 'italic',
            }}
          >
            (Real reviews replace these once the marketplace opens.)
          </div>
        </div>

        <div className="testimonials-grid">
          {QUOTES.map((q) => (
            <div
              key={q.name}
              style={{
                background: '#fff',
                borderRadius: 16,
                border: `1px solid ${colors.border}`,
                padding: 24,
                position: 'relative',
              }}
            >
              <div style={{ display: 'flex', gap: 3, marginBottom: 14 }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Icon key={i} name="star" size={13} color={colors.amber} />
                ))}
              </div>
              <p
                style={{
                  fontFamily: fonts.heading,
                  fontSize: 14,
                  color: colors.navy,
                  lineHeight: 1.6,
                  margin: '0 0 20px',
                }}
              >
                &ldquo;{q.body}&rdquo;
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: 16,
                  borderTop: `1px solid ${colors.borderFaint}`,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: fonts.heading,
                      fontWeight: 800,
                      fontSize: 13,
                      color: colors.navy,
                    }}
                  >
                    {q.name}{' '}
                    <span
                      style={{
                        fontFamily: fonts.sans,
                        fontSize: 9,
                        color: colors.red,
                        fontWeight: 700,
                        letterSpacing: 0.5,
                      }}
                    >
                      · SAMPLE
                    </span>
                  </div>
                  <div
                    style={{
                      fontFamily: fonts.sans,
                      fontSize: 10,
                      color: colors.muted,
                      letterSpacing: 0.3,
                    }}
                  >
                    {q.role}
                  </div>
                </div>
                <div
                  style={{
                    background: 'rgba(13,128,80,0.12)',
                    color: colors.green,
                    borderRadius: 8,
                    padding: '6px 10px',
                    fontFamily: fonts.heading,
                    fontWeight: 800,
                    fontSize: 12,
                  }}
                >
                  {q.save}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
