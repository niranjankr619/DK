import React from "react";
import { MilestoneLedgerResult } from "@/types/ledger";
import { formatINR, formatPct } from "@/lib/formatters";

interface LedgerBreakdownProps {
  ledger: MilestoneLedgerResult;
}

export default function LedgerBreakdown({ ledger }: LedgerBreakdownProps) {
  const desPct = (ledger.des / ledger.pays) * 100;
  const dkPct = (ledger.dk / ledger.pays) * 100;
  const cfPct = (ledger.cf / ledger.pays) * 100;
  const gvPct = (ledger.gv / ledger.pays) * 100;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.15fr] border border-line2 rounded-2xl overflow-hidden mt-4">
      {/* Left Column: Money in */}
      <div className="p-6 sm:p-7 plate-gradient">
        <div className="text-xs text-tx3 font-semibold">
          Money in
        </div>
        <div className="font-bricolage font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-none mt-3 tabular-nums">
          {formatINR(ledger.pays)}
        </div>
        <div className="text-xs sm:text-[12.6px] text-tx2 mt-2 leading-normal">
          One client payment at checkout. Nothing starts until it clears.
        </div>

        <div className="mt-5 pt-2 border-t border-white/10 space-y-2 text-xs sm:text-[12.9px] text-tx3">
          <div className="flex justify-between gap-3 py-1">
            <span>Milestone fee</span>
            <i className="not-italic text-tx2 tabular-nums">{formatINR(ledger.M)}</i>
          </div>
          <div className="flex justify-between gap-3 py-1">
            <span>
              {ledger.isGstRegistered ? "GST at 18% on the milestone" : "GST on milestone (Non-GST Designer)"}
            </span>
            <i className="not-italic text-tx2 tabular-nums">
              {ledger.isGstRegistered ? formatINR(ledger.fgst) : "₹0.00"}
            </i>
          </div>
          <div className="flex justify-between gap-3 py-1">
            <span>Client commission at 5%</span>
            <i className="not-italic text-tx2 tabular-nums">{formatINR(ledger.cc)}</i>
          </div>
          <div className="flex justify-between gap-3 py-1">
            <span>GST at 18% on that commission</span>
            <i className="not-italic text-tx2 tabular-nums">{formatINR(ledger.ccg)}</i>
          </div>
          <div className="flex justify-between gap-3 py-1">
            <span>Gateway fee at 1.95% plus GST</span>
            <i className="not-italic text-tx2 tabular-nums">{formatINR(ledger.gwTot)}</i>
          </div>
        </div>
      </div>

      {/* Right Column: Where it goes */}
      <div className="p-6 sm:p-7 plate-gradient lg:border-l border-t lg:border-t-0 border-line2">
        <div className="text-xs text-tx3 font-semibold">
          Where it goes
        </div>

        <div className="mt-3.5 space-y-3.5">
          {/* Designer row */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] gap-x-4 gap-y-1 items-baseline pb-3 border-b border-white/10 hover:bg-white/[0.045] transition-colors rounded-lg px-2 -mx-2">
            <div className="text-sm font-semibold text-tx">Designer</div>
            <div className="text-xs text-tx3 tabular-nums sm:text-right">{formatPct(desPct)}</div>
            <div className="font-bricolage font-bold text-lg sm:text-xl text-white tabular-nums sm:text-right">
              {formatINR(ledger.des)}
            </div>
            <div className="text-[11.9px] text-tx3 sm:col-span-3 -mt-1">
              {ledger.isGstRegistered
                ? `${formatINR(ledger.M)} fee + 18% GST (${formatINR(ledger.fgst)}) − 7% commission (${formatINR(ledger.dc)}) − 18% GST on fee (${formatINR(ledger.dcg)})`
                : `${formatINR(ledger.M)} fee (No GST) − 7% commission (${formatINR(ledger.dc)}) − 18% GST on fee (${formatINR(ledger.dcg)})`}
            </div>
          </div>


          {/* DezinersKnot row */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] gap-x-4 gap-y-1 items-baseline p-3 -mx-3 rounded-xl bg-gradient-to-r from-peri/15 to-transparent">
            <div className="text-sm font-semibold text-[#C7BCFB]">DezinersKnot</div>
            <div className="text-xs text-tx3 tabular-nums sm:text-right">{formatPct(dkPct)}</div>
            <div className="font-bricolage font-bold text-lg sm:text-xl text-white tabular-nums sm:text-right">
              {formatINR(ledger.dk)}
            </div>
            <div className="text-[11.9px] text-tx3 sm:col-span-3 -mt-1">
              5% client fee ({formatINR(ledger.cc)}) + 7% designer fee ({formatINR(ledger.dc)}), less {formatINR(ledger.pfTot)} payout transfer fee
            </div>
          </div>

          {/* Cashfree row */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] gap-x-4 gap-y-1 items-baseline pb-3 border-b border-white/10 hover:bg-white/[0.045] transition-colors rounded-lg px-2 -mx-2">
            <div className="text-sm font-semibold text-tx">Cashfree</div>
            <div className="text-xs text-tx3 tabular-nums sm:text-right">{formatPct(cfPct)}</div>
            <div className="font-bricolage font-bold text-lg sm:text-xl text-white tabular-nums sm:text-right">
              {formatINR(ledger.cf)}
            </div>
            <div className="text-[11.9px] text-tx3 sm:col-span-3 -mt-1">
              1.95% + GST gateway in ({formatINR(ledger.gwTot)}), {formatINR(ledger.pfTot)} IMPS payout out
            </div>
          </div>

          {/* Government row */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] gap-x-4 gap-y-1 items-baseline pb-3 border-b border-white/10 hover:bg-white/[0.045] transition-colors rounded-lg px-2 -mx-2">
            <div className="text-sm font-semibold text-tx">Government</div>
            <div className="text-xs text-tx3 tabular-nums sm:text-right">{formatPct(gvPct)}</div>
            <div className="font-bricolage font-bold text-lg sm:text-xl text-white tabular-nums sm:text-right">
              {formatINR(ledger.gv)}
            </div>
            <div className="text-[11.9px] text-tx3 sm:col-span-3 -mt-1">
              18% GST on client fee ({formatINR(ledger.ccg)}) + 18% GST on designer fee ({formatINR(ledger.dcg)})
            </div>
          </div>


          {/* Balances to row */}
          <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_auto] gap-x-4 gap-y-1 items-baseline pt-2 border-t border-line2 px-2 -mx-2">
            <div className="text-sm font-medium text-tx2">Balances to</div>
            <div className="text-xs text-tx3 tabular-nums sm:text-right">100%</div>
            <div className="font-bricolage font-bold text-base text-tx2 tabular-nums sm:text-right">
              {formatINR(ledger.pays)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

