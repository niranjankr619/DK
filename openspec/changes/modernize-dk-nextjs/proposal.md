## Why

DezinersKnot currently has a standalone 137KB monolithic HTML file (`DK.html`) explaining its milestone escrow economics, Cashfree payment flows, and regulatory compliance. To make this readily shareable with stakeholders (investors, leadership, enterprise clients), maintainable for future feature iterations, and deployable seamlessly to Vercel with zero-configuration, we need to convert it into a modular Next.js (App Router) + Tailwind CSS + TypeScript project with rich interactivity.

## What Changes

- **Next.js & Tailwind CSS Setup**: Scaffold a Next.js (TypeScript) project configured with custom typography (`Bricolage Grotesque`, `Instrument Sans`) and brand color tokens (`orchid`, `peri`, `cyan`, `amber`, `rose`, `panel`).
- **Milestone Split Engine**: Extract the deterministic financial calculation logic into a decoupled, paise-perfect TypeScript hook (`useMilestoneLedger`) with dynamic client/designer fee distributions, 18% GST rules, gateway fee surcharges, and tiered Cashfree IMPS payout bands.
- **Interactive UI Components**: Convert all monolithic sections into reusable React components (Hero with animated counters, Interactive Milestone Slider & Chips, Ledger Breakdown Cards, Milestone Progress Rail, Zone Badges, and Expandable Rate Card Appendix).
- **SVG Flow Diagrams**: Modularize the complex escrow lifecycle and payment sequence diagrams into inspectable, responsive React vector components with horizontal pan/zoom support.
- **Vercel Readiness**: Ensure clean production build scripts, fast SSR/SSG rendering, proper metadata/SEO headers, and zero-configuration Vercel deployment.

## Capabilities

### New Capabilities
- `milestone-calculator`: Interactive milestone split and ledger calculation engine with live updates, input validation, and share breakdown visualizers.
- `escrow-visualizer`: Interactive representation of DezinersKnot payment flows, contract milestone rails, allowed/restricted payout zones, and Cashfree banking rails.
- `rate-card-appendix`: Dynamic, accessible collapsible sections detailing KYC/verification rates, gateway pricing, and transaction tier matrices.

### Modified Capabilities
*(None - this is the initial migration from standalone HTML to Next.js project)*

## Impact

- **Codebase**: Creates a modern Next.js project structure in the repository (`src/app/`, `src/components/`, `src/hooks/`, `src/lib/`, `src/types/`).
- **Dependencies**: Introduces React, Next.js, TypeScript, Tailwind CSS, and Lucide Icons.
- **Deployment**: Native deployment support for Vercel, Netlify, or static web hosts via standard `npm run build`.
