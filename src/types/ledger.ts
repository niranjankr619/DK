export interface MilestoneLedgerResult {
  /** Base milestone amount entered by the user */
  M: number;
  /** 18% GST on the base milestone fee */
  fgst: number;
  /** Client commission (5% of base fee) */
  cc: number;
  /** 18% GST on client commission */
  ccg: number;
  /** Gateway fee total (1.95% on subtotal + 18% GST on gateway fee) */
  gwTot: number;
  /** Total amount paid by the client */
  pays: number;
  /** Designer commission (7% of base fee) */
  dc: number;
  /** 18% GST on designer commission */
  dcg: number;
  /** Base Cashfree IMPS payout charge */
  pf: number;
  /** Cashfree IMPS payout charge + 18% GST */
  pfTot: number;
  /** Net amount received by the designer in bank */
  des: number;
  /** DezinersKnot net platform margin */
  dk: number;
  /** Government share (total GST collected) */
  gv: number;
  /** Cashfree share (gateway in + payout out) */
  cf: number;
  /** Whether designer is GST registered */
  isGstRegistered?: boolean;
}

