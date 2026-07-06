# Design Mockups — Source of Truth

These are the locked visual/interaction references for every page. They are
**reference only** — do not import from this folder into the app.

When porting a mockup to the Next.js app:
1. Open the source JSX in this folder
2. Read design tokens (`TEAL`, `NAVY`, `GOLD`) and port them to the shared theme
3. Split page logic/state from markup; move reusable pieces into `src/components/`
4. Replace the inline `<link>` Google Fonts tag with a proper `next/font` import in the root layout
5. Replace local `useState` data with Sanity queries where the content is editorial

## Map to app routes

| Mockup file                         | Target route                          | Status |
| ----------------------------------- | ------------------------------------- | ------ |
| toprates-homepage.jsx               | `/`                                   | todo   |
| toprates-about.jsx                  | `/about`                              | todo   |
| toprates-auto-insurance-ontario.jsx | `/insurance/auto`                     | todo   |
| toprates-home-insurance-ontario.jsx | `/insurance/home`                     | todo   |
| toprates-guides-hub.jsx             | `/guides` (or `/blog`)                | todo   |
| toprates-article-template.jsx       | `/blog/[slug]`                        | todo   |
| toprates-self-assessment.jsx        | `/tools/self-assessment`              | Week 5–6 |
| toprates-smart-start.jsx            | `/quote/start`                        | Post-summer 2027 |
| toprates-quotes-screen.jsx          | `/quote/results`                      | Post-summer 2027 |
| toprates-responsive-preview.jsx     | dev-only showcase (do not ship)       | skip   |

## Design tokens (locked)

- Teal: `#0A7E8C`
- Navy: `#1B2A4A`
- Gold: `#B8960C`
- Border: `#e8ecf0`
- Subtle bg: `#f8fafb`
- Muted text: `#6b7b8d`
- Fonts: Outfit (headings), DM Sans (body), Newsreader (long-form serif)
- Max width: 1080px
- Styling: inline styles, not Tailwind classes
