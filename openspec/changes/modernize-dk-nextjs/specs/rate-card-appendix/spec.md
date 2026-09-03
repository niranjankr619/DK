## ADDED Requirements

### Requirement: Interactive Appendix Rate Cards
The system SHALL display collapsible accordion sections detailing Cashfree payout fee schedules, payment gateway charges, and designer verification KYC costs.

#### Scenario: Expanding a Rate Card Details Accordion
- **WHEN** the user clicks on an accordion header (e.g. "Cashfree Payouts pricing")
- **THEN** the panel smoothly expands to reveal the full structured matrix table with IMPS, NEFT, RTGS, and Card payout tiers.

### Requirement: Verification Cost Transparency
The system SHALL itemize regulatory onboarding verification costs per designer (Bank account ₹2.95, PAN ₹1.48, GSTIN ₹0.89, Total ₹5.32 incl. GST).

#### Scenario: Viewing Verification Fees
- **WHEN** the user opens the "Verification and gateway costs" accordion
- **THEN** the system displays all three verification line items and the subtotal summary line.
