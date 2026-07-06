/**
 * /life-insurance subtree layout — applies the COMMERCE template.
 *
 * Per SiteFontpostresearch.md Step 4e. Wraps every page under
 * /life-insurance in a div with `data-template="commerce"`, which
 * triggers the CSS variable override in globals.css:
 *
 *   :root                       — editorial defaults (cream bg, serif body)
 *   [data-template="commerce"]  — commerce override (white bg, sans body)
 *
 * Components below this layout don't need to know which template they
 * render in; they read --bg / --measure / --body-font from CSS vars.
 *
 * Rest of the site stays editorial because nothing else sets this
 * attribute. /learn/life/* sub-pillars (Phase 2) will get the same
 * wrapper at src/app/learn/life/layout.tsx.
 */

export default function LifeInsuranceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div data-template="commerce" className="min-h-screen bg-white">
      {children}
    </div>
  );
}
