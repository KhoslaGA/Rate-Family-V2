import { Bo, type BoPose, type BoAccessory } from '../brand/Bo';
import { colors, fonts } from '@/styles/homeTokens';

const BEATS: { pose: BoPose; accessory: BoAccessory; tag: string; title: string; desc: string }[] = [
  {
    pose: 'clipboard',
    accessory: 'hardhat',
    tag: 'STEP 01',
    title: 'Bo gets the basics',
    desc: "A few plain-English questions about your vehicle, driving record, home, and coverage history — no jargon, no fine print to dig through.",
  },
  {
    pose: 'thinking',
    accessory: 'hardhat',
    tag: 'STEP 02',
    title: 'Bo does the math',
    desc: "Your driving record, home size, bundling options, Ontario reform rules — Bo models every carrier's default and runs the comparison.",
  },
  {
    pose: 'thumbs',
    accessory: 'hardhat',
    tag: 'STEP 03',
    title: 'Bo hands it over',
    desc: "Ranked quotes, plain-English trade-offs, no sponsored placements. You pick. You switch. Or you don't. No pressure, ever.",
  },
];

export default function MeetBo() {
  return (
    <section
      style={{
        padding: '96px 0',
        background: 'linear-gradient(180deg, #fff 0%, #fbf8f0 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          opacity: 0.04,
          backgroundImage: `linear-gradient(${colors.navy} 1px, transparent 1px), linear-gradient(90deg, ${colors.navy} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
        }}
      />
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div
            style={{
              fontFamily: fonts.mono,
              fontSize: 11,
              letterSpacing: 2,
              color: colors.teal,
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: 10,
            }}
          >
            Meet Bo · your insurance guide
          </div>
          <h2
            style={{
              fontFamily: fonts.heading,
              fontWeight: 900,
              fontSize: 42,
              color: colors.navy,
              margin: '0 0 14px',
              letterSpacing: '-1.3px',
            }}
          >
            Canada&apos;s most diligent beaver.
          </h2>
          <p
            style={{
              fontFamily: fonts.heading,
              fontSize: 17,
              color: colors.muted,
              maxWidth: 640,
              margin: '0 auto',
              lineHeight: 1.55,
            }}
          >
            Bo does the boring part of insurance shopping — reading fine print, running numbers, and
            keeping carriers honest. You get to skip straight to the saving.
          </p>
        </div>

        <div
          className="meetbo-grid-v2"
          style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}
        >
          {BEATS.map((b) => (
            <div
              key={b.tag}
              style={{
                background: colors.paper,
                borderRadius: 20,
                border: `1px solid ${colors.borderSoft}`,
                padding: '30px 28px',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 10px 30px -20px rgba(27,42,74,0.15)',
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: 64,
                  height: 64,
                  background: `linear-gradient(225deg, ${colors.gold}22 0%, transparent 60%)`,
                }}
              />
              <div
                style={{
                  fontFamily: fonts.mono,
                  fontSize: 10,
                  letterSpacing: 2,
                  color: colors.gold,
                  fontWeight: 800,
                  marginBottom: 18,
                  position: 'relative',
                }}
              >
                {b.tag}
              </div>
              <div
                style={{
                  width: 140,
                  height: 140,
                  margin: '0 auto 8px',
                  background: 'radial-gradient(circle, rgba(10,126,140,0.08) 0%, transparent 70%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Bo size={130} pose={b.pose} accessory={b.accessory} />
              </div>
              <h3
                style={{
                  fontFamily: fonts.heading,
                  fontWeight: 900,
                  fontSize: 20,
                  color: colors.navy,
                  margin: '0 0 10px',
                  letterSpacing: '-0.4px',
                  textAlign: 'center',
                }}
              >
                {b.title}
              </h3>
              <p
                style={{
                  fontFamily: fonts.heading,
                  fontSize: 14,
                  color: colors.muted,
                  lineHeight: 1.55,
                  margin: 0,
                  textAlign: 'center',
                }}
              >
                {b.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
