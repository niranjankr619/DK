import { calculateMilestoneLedger } from "../hooks/useMilestoneLedger";
import { formatINR } from "./formatters";

function testBands() {
  const testAmounts = [500, 2500, 10000, 25000, 50000, 100000, 250000];

  console.log("--------------------------------------------------------------------------------");
  console.log("MILESTONE LEDGER ACCURACY VERIFICATION");
  console.log("--------------------------------------------------------------------------------");

  for (const M of testAmounts) {
    const res = calculateMilestoneLedger(M);
    const sumOutflow = Math.round((res.des + res.dk + res.cf + res.gv) * 100) / 100;
    const diff = Math.abs(res.pays - sumOutflow);

    console.log(`Milestone: ${formatINR(M)}`);
    console.log(`  Client Pays:   ${formatINR(res.pays)}`);
    console.log(`  Designer Net:  ${formatINR(res.des)}`);
    console.log(`  DK Margin:     ${formatINR(res.dk)}`);
    console.log(`  Cashfree Fee:  ${formatINR(res.cf)} (IMPS band: ₹${res.pf})`);
    console.log(`  Govt (GST):    ${formatINR(res.gv)}`);
    console.log(`  Exact Balance Check: ${diff === 0 ? "PASSED (exact to the paise)" : `FAILED (diff: ${diff})`}`);
    console.log("--------------------------------------------------------------------------------");

    if (diff !== 0) {
      throw new Error(`Ledger imbalance detected for amount ${M}`);
    }
  }

  console.log("ALL MILESTONE TEST BANDS PASSED WITH 100% PAISA PRECISION!");
}

testBands();
