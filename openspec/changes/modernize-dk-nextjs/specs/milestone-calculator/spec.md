## ADDED Requirements

### Requirement: Milestone Split Calculation Engine
The system SHALL compute client charges, platform commissions, gateway fees, GST taxes (18%), and designer net payouts according to exact DezinersKnot contract rules.

#### Scenario: Standard ₹10,000 Milestone Calculation
- **WHEN** the user inputs or selects a milestone amount of ₹10,000
- **THEN** the system calculates client total paid as ₹13,018.84, designer net payout as ₹11,870.40, DezinersKnot net platform margin as ₹1,180.00, and Cashfree gateway/payout costs accurately.

#### Scenario: Cashfree IMPS Payout Tier Adjustment
- **WHEN** milestone payout amount is ≤ ₹1,000
- **THEN** the system applies the ₹6.00 IMPS payout fee tier.
- **WHEN** milestone payout amount is between ₹1,001 and ₹25,000
- **THEN** the system applies the ₹8.00 IMPS payout fee tier.
- **WHEN** milestone payout amount is > ₹25,000
- **THEN** the system applies the ₹15.00 IMPS payout fee tier.

### Requirement: Interactive Milestone Controls
The system SHALL provide synchronized inputs (range slider from ₹500 to ₹500,000, numerical input field, and preset chip buttons for ₹2.5k, ₹10k, ₹25k, ₹50k, ₹100k, ₹250k) that update the calculation in real time.

#### Scenario: User clicks preset chip
- **WHEN** the user clicks on the "₹50,000" chip
- **THEN** the range slider, amount input, and ledger breakdown immediately update to ₹50,000 and the chip displays the active state.
