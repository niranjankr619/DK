import React from "react";

export default function VerificationList() {
  return (
    <div className="space-y-2 text-xs sm:text-[13.4px] text-tx2">
      <div className="flex justify-between gap-4 py-2 border-b border-white/5">
        <span>Bank account penny-drop verification</span>
        <i className="not-italic text-white tabular-nums">₹2.95</i>
      </div>
      <div className="flex justify-between gap-4 py-2 border-b border-white/5">
        <span>PAN direct verification</span>
        <i className="not-italic text-white tabular-nums">₹1.48</i>
      </div>
      <div className="flex justify-between gap-4 py-2 border-b border-white/5">
        <span>GSTIN verification & filing status</span>
        <i className="not-italic text-white tabular-nums">₹0.89</i>
      </div>
      <div className="flex justify-between gap-4 py-2.5 font-bold text-white border-t border-line2 mt-1">
        <span>Total onboarding check cost per designer (incl. GST)</span>
        <i className="not-italic text-white tabular-nums">₹5.32</i>
      </div>

      <div className="flex justify-between gap-4 py-2 border-b border-white/5 mt-4">
        <span>Payment gateway fee on client inflow</span>
        <i className="not-italic text-white tabular-nums">1.95% – 2.05%</i>
      </div>
      <div className="flex justify-between gap-4 py-2 border-b border-white/5">
        <span>Setup, activation and annual maintenance</span>
        <i className="not-italic text-white tabular-nums">₹0.00</i>
      </div>

      <p className="text-xs text-tx2 mt-3.5 leading-relaxed">
        The gateway fee is added on top at client checkout, so it never diminishes DezinersKnot platform revenue or designer take-home earnings.
      </p>
    </div>
  );
}
