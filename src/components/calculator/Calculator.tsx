"use client";

import React, { useState } from "react";
import AmountInput from "./AmountInput";
import MilestoneSlider from "./MilestoneSlider";
import PresetChips from "./PresetChips";
import LedgerBreakdown from "./LedgerBreakdown";
import { useMilestoneLedger } from "@/hooks/useMilestoneLedger";

export default function Calculator() {
  const [amount, setAmount] = useState<number>(10000);
  const ledger = useMilestoneLedger(amount);

  return (
    <section>
      <div className="flex items-baseline gap-3">
        <div className="w-6 h-6 rounded-lg brand-gradient-bg text-black font-bricolage font-extrabold text-xs flex items-center justify-center flex-none">
          7
        </div>
        <h2 className="font-bricolage font-bold text-xl md:text-2xl text-white tracking-tight">
          Any milestone, end to end
        </h2>
      </div>

      <p className="text-xs sm:text-sm text-tx2 ml-9 mt-1 mb-5 max-w-[76ch]">
        Change the milestone value and the whole split recalculates, including the payout band Cashfree charges at that transfer size.
      </p>

      {/* Controls Bar */}
      <div className="flex flex-wrap items-center gap-4 sm:gap-6 p-4 sm:p-5 rounded-2xl plate-gradient border border-line2">
        <div className="text-xs sm:text-[12.4px] text-tx2 font-semibold">
          Milestone value
        </div>

        <AmountInput value={amount} min={1} max={350000} onChange={setAmount} />

        <MilestoneSlider value={amount} min={1} max={350000} onChange={setAmount} />

        <PresetChips currentValue={amount} onSelect={setAmount} />

      </div>

      {/* Side-by-Side Ledger */}
      <LedgerBreakdown ledger={ledger} />
    </section>
  );
}

