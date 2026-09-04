# Change: Add Secure Gatekeeper Authentication

## Problem
Currently, the DezinersKnot (DK) financial escrow visualizer and rate cards are publicly accessible without authentication. Proprietary ledger math, fee structures, and overview PDFs must be protected from unauthorized public access and web scrapers.

## Requirements
- **FR-01 (Gatekeeper Middleware):** Block unauthenticated access to the main application (`/`), API data, and PDFs at the server level.
- **FR-02 (Data Isolation):** Zero dashboard/ledger code or data rendered or transmitted to unauthenticated visitors.
- **FR-03 (Separated Auth Route):** Standalone, aesthetically crafted `/login` interface completely segregated from data rendering.
- **FR-04 (Secret Privacy):** Passcode managed strictly via server-side environment variables (`.env.local`), never bundled to client-side JS.
- **FR-05 (Secure Session):** Encrypted/signed `HttpOnly`, `SameSite=Lax`, `Secure` session cookies.
- **FR-06 (Sign Out):** Accessible session termination / lock button in the header/footer.
