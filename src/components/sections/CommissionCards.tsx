import React from "react";

export default function CommissionCards() {
  return (
    <section>
      <div className="flex items-baseline gap-3">
        <div className="w-6 h-6 rounded-lg brand-gradient-bg text-black font-bricolage font-extrabold text-xs flex items-center justify-center flex-none">
          6
        </div>
        <h2 className="font-bricolage font-bold text-xl md:text-2xl text-white tracking-tight">
          How we make money
        </h2>
      </div>

      <p className="text-xs sm:text-sm text-tx2 ml-9 mt-1 mb-5 max-w-[76ch]">
        Commission is charged on both sides of every milestone, at different moments.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-line border border-line rounded-2xl overflow-hidden">
        {/* Card 1: From the client */}
        <div className="p-6 plate-gradient hover:bg-[#181820] transition-colors">
          <div className="font-bricolage font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-none">
            5%
          </div>
          <div className="text-sm font-semibold text-white mt-3">From the client</div>
          <div className="text-xs text-tx2 mt-1 leading-relaxed">
            Added at checkout, on top of the milestone value.
          </div>
        </div>

        {/* Card 2: From the designer */}
        <div className="p-6 plate-gradient hover:bg-[#181820] transition-colors">
          <div className="font-bricolage font-extrabold text-3xl sm:text-4xl text-white tracking-tight leading-none">
            7%
          </div>
          <div className="text-sm font-semibold text-white mt-3">From the designer</div>
          <div className="text-xs text-tx2 mt-1 leading-relaxed">
            Deducted at payout, after the client approves.
          </div>
        </div>

        {/* Card 3: Combined take rate */}
        <div className="p-6 plate-gradient hover:bg-[#181820] transition-colors">
          <div className="font-bricolage font-extrabold text-3xl sm:text-4xl brand-gradient-text tracking-tight leading-none">
            12%
          </div>
          <div className="text-sm font-semibold text-white mt-3">Combined take rate</div>
          <div className="text-xs text-tx2 mt-1 leading-relaxed">
            Our only cost against it is a flat fee per transfer, not a percentage.
          </div>
        </div>
      </div>
    </section>
  );
}

