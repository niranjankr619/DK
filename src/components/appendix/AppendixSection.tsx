import React from "react";
import RateCardTable from "./RateCardTable";
import VerificationList from "./VerificationList";

export default function AppendixSection() {
  return (
    <section className="mt-16 md:mt-20 pt-8 border-t border-line2">
      <h2 className="font-bricolage font-bold text-xl md:text-2xl text-white tracking-tight">
        Cashfree Account Pricing & Verification Rates
      </h2>

      <p className="text-xs sm:text-sm text-tx2 mt-1.5 mb-6 max-w-[74ch]">
        Reference cost structures governing payout rails, banking verification, and settlement processing.
      </p>

      <div className="space-y-3">
        {/* Accordion 1 */}
        <details className="group border border-line2 rounded-xl bg-[#101015] open:bg-[#131319] transition-colors overflow-hidden">
          <summary className="cursor-pointer p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white select-none">
            <span>Cashfree Payouts pricing schedule</span>
            <span className="text-xs font-normal text-tx3 mr-auto ml-2 hidden sm:inline">
              per-transfer rates
            </span>
            <span className="text-lg text-tx3 font-light transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="details-content px-4 pb-5 sm:px-5 sm:pb-6 pt-1 border-t border-white/5">
            <RateCardTable />
          </div>
        </details>

        {/* Accordion 2 */}
        <details className="group border border-line2 rounded-xl bg-[#101015] open:bg-[#131319] transition-colors overflow-hidden">
          <summary className="cursor-pointer p-4 sm:p-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-white select-none">
            <span>Verification and gateway costs</span>
            <span className="text-xs font-normal text-tx3 mr-auto ml-2 hidden sm:inline">
              our account rates
            </span>
            <span className="text-lg text-tx3 font-light transition-transform duration-200 group-open:rotate-45">
              +
            </span>
          </summary>
          <div className="details-content px-4 pb-5 sm:px-5 sm:pb-6 pt-1 border-t border-white/5">
            <VerificationList />
          </div>
        </details>
      </div>
    </section>
  );
}
