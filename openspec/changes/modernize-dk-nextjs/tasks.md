## 1. Project Initialization & Setup

- [x] 1.1 Initialize Next.js project with TypeScript, Tailwind CSS, and App Router configuration
- [x] 1.2 Configure Tailwind CSS color tokens (`orchid`, `peri`, `cyan`, `amber`, `rose`, `panel`, `line`) and typography tokens (`Bricolage Grotesque`, `Instrument Sans`)
- [x] 1.3 Install and configure supporting libraries (Lucide React icons, clsx / tailwind-merge)

## 2. Core Logic & Calculation Engine

- [x] 2.1 Implement `useMilestoneLedger` custom React hook for exact paisa-rounded accounting calculations
- [x] 2.2 Create INR currency (`₹ en-IN`) and percentage formatting utilities in `lib/formatters.ts`
- [x] 2.3 Implement unit tests or validation checks verifying exact ledger credit/debit parity across all milestone bands

## 3. UI Components & Layout

- [x] 3.1 Build `Masthead` (logo, title, status indicator) and `ScrollProgress` bar components
- [x] 3.2 Build `HeroSection` with animated metric count-up display
- [x] 3.3 Build `Calculator` component with synchronized range slider, currency input, and quick-select preset chips
- [x] 3.4 Build `LedgerBreakdown` and `SharePills` side-by-side payout cards
- [x] 3.5 Build `CommissionCards`, `ContractRail` 3-stage milestone timeline, and `PayoutZones` guidance callouts

## 4. Vector Diagrams & Appendix

- [x] 4.1 Build responsive `DiagramPlate` container with horizontal pan and touch scrolling for mobile
- [x] 4.2 Convert payment sequence and state machine SVGs into clean, high-DPI React vector components
- [x] 4.3 Build `AppendixSection` with smooth expandable accordions, transaction rate card table, and KYC verification pricing

## 5. Verification & Vercel Readiness

- [x] 5.1 Assemble all components into `src/app/page.tsx` with proper layout, footer, and SEO metadata
- [x] 5.2 Validate production build (`npm run build`) for zero TypeScript/linting errors
- [x] 5.3 Test responsive viewports (mobile, tablet, desktop) and interactive calculator behaviors
