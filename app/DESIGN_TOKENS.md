# TopRates.ca — Design Tokens

Source of truth: [src/styles/tokens.ts](src/styles/tokens.ts) +
[src/styles/globals.css](src/styles/globals.css).

The codebase uses **inline styles** with the `fonts` and `colors` exports from
`tokens.ts`. Tailwind's `@theme` block in `globals.css` mirrors the same values
for utility classes.

---

## Font families

> One headline + body font. One mono. That's it.

| Token | Stack | Used for |
|---|---|---|
| `fonts.display` | `'Inter Tight', system-ui, sans-serif` | All H1/H2/H3, hero numbers, big stats |
| `fonts.body` | `'Inter Tight', system-ui, sans-serif` | Body copy, paragraphs (also the global `body` font) |
| `fonts.mono` | `'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace` | Eyebrows, data labels, small caps text |

Display and body are the **same family** — distinction is by weight + size.

Aliases (`fonts.heading`, `fonts.serif`) still resolve to Inter Tight so legacy
call-sites keep working during migration.

CSS-variable equivalents (in `globals.css` `@theme`):
- `--font-sans: 'Inter Tight', system-ui, sans-serif;`
- `--font-heading: 'Inter Tight', system-ui, sans-serif;`

Loaded via Google Fonts CDN in `src/app/layout.tsx`:
`Inter Tight` weights 400/500/600/700/800/900 + `JetBrains Mono` 400/600/700.

---

## Font sizes (px)

The scale is inline, not centralized. Use the closest size from this list — do
not invent new values.

### Display / hero
| Size | Use | Where |
|---|---|---|
| **64** | Hero H1 (desktop) | `.hero-h1-v2` |
| **48** | Hero H1 (tablet ≤1024px) | media query |
| **38** | Section hero H1 (auto / home insurance) | inline |
| **36** | Hero H1 (mobile ≤640px) | media query |

### Headings
| Size | Use |
|---|---|
| **30** | Major section H2 (homepage, about) |
| **28** | Stat numbers, BEFORE/AFTER values |
| **26** | Card title — primary, mid-section H2 |
| **22** | Card title — secondary |
| **20** | Subhead, FAQ summary |
| **18** | Eyebrow large, sub-card title, button text-large |

### Body
| Size | Use |
|---|---|
| **17** | Hero subtitle / oversized lead paragraph |
| **16** | Form inputs (prevents iOS auto-zoom) |
| **15** | Body default, button text |
| **14** | Body secondary, list items, card body |
| **13** | Captions, fine-print body, footer copy |
| **12** | Tag/chip text, micro-labels |

### Mono / labels
| Size | Use |
|---|---|
| **11** | Stat label, footer category heading, eyebrow |
| **10** | Sample-card eyebrow ("SAMPLE SAVINGS") |
| **9** | Smallest legal label, AFTER/BEFORE eyebrow |

---

## Font weights

Inter Tight handles all weight needs.

| Weight | When to use |
|---|---|
| **400** | Body |
| **500** | Body emphasis |
| **600** | Subheads, button labels |
| **700** | Card titles, mid-headings |
| **800** | Section headings, mono labels (always 800) |
| **900** | Hero H1, hero stat numbers |

---

## Line heights & letter spacing

- Hero H1: `line-height: 1.02`, `letter-spacing: -2.2px` desktop / `-1.6px` tablet / `-1.1px` mobile
- Section H2 (Inter Tight 800): `line-height: 1.1`, `letter-spacing: -0.8px`
- Body (Inter Tight 400/500): `line-height: 1.5–1.6`, default tracking
- Mono labels: `line-height: 1.7`, `letter-spacing: 1.5–1.8` (uppercase tracking)

---

## Colors

From [src/styles/tokens.ts](src/styles/tokens.ts):

| Token | Hex | Use |
|---|---|---|
| `colors.paper` | `#ffffff` | Page background |
| `colors.surface` | `#fbf8f0` | Soft cream sections |
| `colors.cream` | `#f6efe0` | Editorial accent background |
| `colors.teal` | `#0A7E8C` | Primary brand, CTAs, links |
| `colors.tealHover` | `#0d9aa8` | Hover state |
| `colors.tealDark` | `#086874` | Pressed/active |
| `colors.navy` | `#1B2A4A` | Headings, hero background |
| `colors.navyDark` | `#0f1e38` | Footer background |
| `colors.gold` | `#B8960C` | Accent badges |
| `colors.text` | `#2D2D2D` | Body text |
| `colors.muted` | `#6b7b8d` | Secondary text |
| `colors.green` | `#0D8050` | Success / positive |
| `colors.red` | `#CC3333` | Error / warning |

---

## Quick rules

1. **Always import `fonts` and `colors` from `@/styles/tokens`.** Don't hardcode `'Inter Tight'` or `#0A7E8C` in component files.
2. **Use the size scale above.** If a Figma file says 17.5px, round to 17 or 18.
3. **Mono is uppercase + tracked.** Always pair `fonts.mono` with `letterSpacing: 1.5+` and `textTransform: 'uppercase'`.
4. **Body sits at 14–15.** 16 is for forms (iOS auto-zoom prevention).
5. **Display uses weight 700+.** Inter Tight at 800/900 with negative tracking is the brand voice; weight ≤ 600 looks weak as a headline.
