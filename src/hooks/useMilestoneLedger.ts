import { useMemo } from "react";
import { MilestoneLedgerResult } from "@/types/ledger";

/**
 * Cashfree IMPS payout band based on transfer amount
 */
export function getImpsBand(amt: number): number {
  if (amt <= 1000) return 6;
  if (amt <= 25000) return 8;
  return 15;
}

/**
 * Round to two decimal places (paise precision)
 */
export function round2(n: number): number {
  return Math.round(n * 100) / 100;
}

/**
 * Pure calculation function for milestone ledger accounting
 */
export function calculateMilestoneLedger(M: number): MilestoneLedgerResult {
  const G = 0.18; // 18% GST

  const fgst = round2(M * G);
  const cc = round2(M * 0.05); // 5% client commission
  const ccg = round2(cc * G);
  const sub = M + fgst + cc + ccg;

  const gw = round2(sub * 0.0195); // 1.95% payment gateway fee
  const gwg = round2(gw * G);
  const gwTot = round2(gw + gwg);
  const pays = round2(sub + gwTot);

  const dc = round2(M * 0.07); // 7% designer commission
  const dcg = round2(dc * G);
  const des = round2(M + fgst - dc - dcg);

  const pf = getImpsBand(des);
  const pfTot = round2(pf * (1 + G));

  const dk = round2(cc + dc - pfTot);
  const gv = round2(ccg + dcg);
  const cf = round2(gwTot + pfTot);

  return {
    M,
    fgst,
    cc,
    ccg,
    gwTot,
    pays,
    des,
    dk,
    gv,
    cf,
    dc,
    dcg,
    pf,
    pfTot,
  };
}

/**
 * Hook providing reactive milestone ledger computation
 */
export function useMilestoneLedger(amount: number): MilestoneLedgerResult {
  return useMemo(() => calculateMilestoneLedger(amount), [amount]);
}
