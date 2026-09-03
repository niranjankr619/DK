"use client";

import React, { useState } from "react";
import AmountInput from "./AmountInput";
import MilestoneSlider from "./MilestoneSlider";
import PresetChips from "./PresetChips";
import LedgerBreakdown from "./LedgerBreakdown";
import { useMilestoneLedger } from "@/hooks/useMilestoneLedger";

export default function Calculator() {
  const [amount, setAmount] = useState<number>(10000);
  const [isGstRegistered, setIsGstRegistered] = useState<boolean>(true);
  const ledger = useMilestoneLedger(amount, isGstRegistered);

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
        Change the milestone value and designer GST status to recalculate the complete breakdown, including Cashfree payout bands.
      </p>

      {/* Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 sm:p-5 rounded-2xl plate-gradient border border-line2">
        <div className="flex flex-wrap items-center gap-4 sm:gap-6 flex-1 min-w-[300px]">
          <div className="text-xs sm:text-[12.4px] text-tx2 font-semibold">
            Milestone value
          </div>

          <AmountInput value={amount} min={1} max={350000} onChange={setAmount} />

          <MilestoneSlider value={amount} min={1} max={350000} onChange={setAmount} />

          <PresetChips currentValue={amount} onSelect={setAmount} />
        </div>

        {/* GST Registration Toggle */}
        <div className="flex items-center gap-1 p-1 rounded-xl bg-black/50 border border-white/10 text-xs">
          <button
            type="button"
            onClick={() => setIsGstRegistered(true)}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              isGstRegistered
                ? "bg-gradient-to-r from-peri/30 to-cyan/30 text-white border border-cyan/40 shadow-sm"
                : "text-tx3 hover:text-white"
            }`}
          >
            GST Registered (18%)
          </button>
          <button
            type="button"
            onClick={() => setIsGstRegistered(false)}
            className={`px-3 py-1.5 rounded-lg font-medium transition-all ${
              !isGstRegistered
                ? "bg-gradient-to-r from-orchid/30 to-peri/30 text-white border border-orchid/40 shadow-sm"
                : "text-tx3 hover:text-white"
            }`}
          >
            Non-GST Designer (0%)
          </button>
        </div>
      </div>

      {/* Side-by-Side Ledger */}
      <LedgerBreakdown ledger={ledger} />
    </section>
  );
}
