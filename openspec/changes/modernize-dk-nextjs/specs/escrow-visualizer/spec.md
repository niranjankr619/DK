## ADDED Requirements

### Requirement: Escrow and Contract Flow Visualization
The system SHALL display interactive diagrams depicting the DezinersKnot payment sequence, money inflow, nodal escrow hold, milestone approval triggers, and Cashfree payout outflow.

#### Scenario: Diagram Rendering and Responsiveness
- **WHEN** viewed on mobile or narrow desktop screens (< 768px)
- **THEN** the system enables smooth horizontal touch panning for the diagrams and displays a helper hint.

### Requirement: Contract Milestone Lifecycle Rail
The system SHALL illustrate the 3-stage contract progress (Milestone 1 Discovery & Brand, Milestone 2 Design System, Milestone 3 Final Handoff) with visual status indicators and progress bar animations.

#### Scenario: Milestone Progress Display
- **WHEN** the contract rail renders
- **THEN** the active milestone displays a distinct gradient index badge, "Active / in escrow" status tag, and animated progress bar.

### Requirement: Payout Zone Guidance
The system SHALL present structured callouts indicating permitted payout scenarios (valid delivery, approved milestones) versus restricted payout scenarios (disputed deliverables, unverified KYC).

#### Scenario: Hovering or Viewing Zone Callouts
- **WHEN** user views the payout zone cards
- **THEN** permitted zones display in emerald/mint green styling with check guidance, and restricted zones display in rose/red styling with caution guidance.
