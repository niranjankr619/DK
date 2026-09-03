## Context

The current `DK.html` is a self-contained 137KB HTML document detailing the milestone escrow lifecycle, Indian payment rails (Cashfree IMPS/NEFT/PG), regulatory verification costs (Bank, PAN, GSTIN), and an interactive split calculator. To optimize for stakeholder sharing, responsive layout, seamless Vercel deployment, and modular future extension, the application will be refactored into a modern Next.js + Tailwind CSS + TypeScript project.

## Goals / Non-Goals

**Goals:**
- **Next.js Project Architecture**: Structure code into modular components (`layout/`, `hero/`, `calculator/`, `sections/`, `diagrams/`, `appendix/`).
- **Mathematical Accuracy**: Implement `useMilestoneLedger` custom hook maintaining 100% parity with the paisa-rounded accounting formula in `DK.html`.
- **High-Fidelity Visual Design**: Maintain the custom dark-mode aesthetic, gradients (`orchid`, `peri`, `cyan`, `amber`, `rose`), glassmorphism, and responsive auto-panning SVG diagrams.
- **Interactive Experiences**: Provide instant slider/input/chip interactions for milestone amounts, animated metric counters, scroll progress bar, and collapsible accordion rate cards.
- **Vercel Native Deployment**: Enable zero-config deployment to Vercel with fast static builds and clean metadata.

**Non-Goals:**
- No backend database or authentication required for this static interactive briefing.
- No live Cashfree API integration; the financial model reflects verified standard contract pricing schedules.

## Decisions

1. **Framework: Next.js (App Router) + TypeScript**
   - *Rationale*: Built by Vercel, offers zero-config deployment, excellent typing safety, automatic font optimization (`next/font/google`), and metadata support.
   - *Alternatives Considered*: Vite + React SPA (good, but lacks built-in metadata/OG image optimization).

2. **Styling: Tailwind CSS with Custom Token Mapping**
   - *Rationale*: Declares colors (`--orchid`, `--peri`, `--cyan`, `--amber`, `--rose`, `--panel`, `--line`) and font families in `tailwind.config.ts` or CSS variables, eliminating monolithic inline CSS while keeping styles clean and maintainable.
   - *Alternatives Considered*: Raw CSS files (harder to maintain modularity across multi-file React components).

3. **Decoupled Financial Engine (`useMilestoneLedger`)**
   - *Rationale*: Pure calculation logic separated from rendering ensures tests can verify GST, commissions, gateway fees, and payout band formulas independently.

## Risks / Trade-offs

- **[Risk] Complex SVG responsiveness on mobile** → *Mitigation*: Wrap SVGs in `DiagramPlate` container with horizontal touch-scroll and "Swipe to inspect" hint on mobile viewports.
- **[Risk] Float rounding errors in ledger display** → *Mitigation*: Use two-decimal paisa-rounding (`Math.round(val * 100) / 100`) and format with `Intl.NumberFormat('en-IN')` ensuring ledger credits and debits always sum exactly to the displayed client total.
