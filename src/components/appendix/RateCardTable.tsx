import React from "react";

export default function RateCardTable() {
  return (
    <div className="overflow-x-auto -mx-2 sm:mx-0">
      <table className="w-full text-left text-xs sm:text-[13.2px] border-collapse min-w-[500px]">
        <thead>
          <tr className="border-b border-line2 text-tx2 font-semibold text-[11px] sm:text-[11.8px]">
            <th className="py-2.5 px-3">Transfer Band</th>
            <th className="py-2.5 px-3 text-right">IMPS</th>
            <th className="py-2.5 px-3 text-right">NEFT</th>
            <th className="py-2.5 px-3 text-right">RTGS</th>
            <th className="py-2.5 px-3 text-right">UPI</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-white/5 text-tx2">
          <tr>
            <td className="py-2.5 px-3 font-medium text-white">Up to ₹1,000</td>
            <td className="py-2.5 px-3 text-right text-white tabular-nums">₹6.00</td>
            <td className="py-2.5 px-3 text-right text-white tabular-nums">₹2.50</td>
            <td className="py-2.5 px-3 text-right text-tx3 tabular-nums">—</td>
            <td className="py-2.5 px-3 text-right text-white tabular-nums">₹3.00</td>
          </tr>
          <tr>
            <td className="py-2.5 px-3 font-medium text-white">₹1,001 to ₹25,000</td>
            <td className="py-2.5 px-3 text-right text-white tabular-nums">₹8.00</td>
            <td className="py-2.5 px-3 text-right text-white tabular-nums">₹4.00</td>
            <td className="py-2.5 px-3 text-right text-tx3 tabular-nums">—</td>
            <td className="py-2.5 px-3 text-right text-white tabular-nums">₹5.00</td>
          </tr>
          <tr>
            <td className="py-2.5 px-3 font-medium text-white">Above ₹25,000</td>
            <td className="py-2.5 px-3 text-right text-white tabular-nums">₹15.00</td>
            <td className="py-2.5 px-3 text-right text-white tabular-nums">₹8.00</td>
            <td className="py-2.5 px-3 text-right text-white tabular-nums">₹20.00</td>
            <td className="py-2.5 px-3 text-right text-white tabular-nums">₹8.00</td>
          </tr>
        </tbody>
      </table>

      <p className="text-xs text-tx2 mt-3.5 leading-relaxed">
        Card payouts are ₹15.00 up to ₹1,000 and ₹20.00 above it. Cashfree sets pricing per merchant contract; these standard bands govern DezinersKnot transfers.
      </p>
    </div>
  );
}
