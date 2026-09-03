import React from "react";

export default function PayoutZones() {
  return (
    <section>
      <div className="flex items-baseline gap-3">
        <div className="w-6 h-6 rounded-lg brand-gradient-bg text-black font-bricolage font-extrabold text-xs flex items-center justify-center flex-none">
          8
        </div>
        <h2 className="font-bricolage font-bold text-xl md:text-2xl text-white tracking-tight">
          Ending a contract
        </h2>
      </div>

      <p className="text-xs sm:text-sm text-tx2 ml-9 mt-1 mb-5 max-w-[76ch]">
        Exits sit at both ends of a contract. The window in between, once a milestone is funded but not yet approved, is closed by design.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Zone 1: Exit open */}
        <div className="p-6 rounded-2xl bg-gradient-to-b from-emerald-500/20 via-emerald-500/5 to-transparent border border-emerald-500/20 hover:brightness-110 transition-all">
          <div className="text-xs font-semibold text-[#8BEBBE]">Exit open</div>
          <h3 className="font-bricolage font-bold text-[17.5px] text-white mt-2 mb-2">
            Before activation
          </h3>
          <p className="text-xs sm:text-[13.4px] text-tx2 leading-relaxed">
            No milestone has been funded, so no money has moved. Either side walks away and nothing is owed.
          </p>
        </div>

        {/* Zone 2: No exit */}
        <div className="p-6 rounded-2xl bg-gradient-to-b from-rose/25 via-rose/5 to-transparent border border-rose/25 hover:brightness-110 transition-all">
          <div className="text-xs font-semibold text-[#F7A6C2]">No exit</div>
          <h3 className="font-bricolage font-bold text-[17.5px] text-white mt-2 mb-2">
            Funded and in progress
          </h3>
          <p className="text-xs sm:text-[13.4px] text-tx2 leading-relaxed">
            A milestone paid for but not yet approved cannot be exited. Both the money and the contract stay where they are until the client signs off.
          </p>
        </div>

        {/* Zone 3: Closes itself */}
        <div className="p-6 rounded-2xl bg-gradient-to-b from-emerald-500/20 via-emerald-500/5 to-transparent border border-emerald-500/20 hover:brightness-110 transition-all">
          <div className="text-xs font-semibold text-[#8BEBBE]">Closes itself</div>
          <h3 className="font-bricolage font-bold text-[17.5px] text-white mt-2 mb-2">
            After completion
          </h3>
          <p className="text-xs sm:text-[13.4px] text-tx2 leading-relaxed">
            The final milestone is approved and paid. The contract closes on its own with no action from either side.
          </p>
        </div>
      </div>
    </section>
  );
}

