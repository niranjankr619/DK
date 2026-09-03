import React from "react";

export default function ContractRail() {
  return (
    <section>
      <div className="flex items-baseline gap-3">
        <div className="w-6 h-6 rounded-lg brand-gradient-bg text-black font-bricolage font-extrabold text-xs flex items-center justify-center flex-none">
          3
        </div>
        <h2 className="font-bricolage font-bold text-xl md:text-2xl text-white tracking-tight">
          What a contract holds
        </h2>
      </div>

      <p className="text-xs sm:text-sm text-tx2 ml-9 mt-1 mb-5 max-w-[76ch]">
        Milestones are defined when the client builds the contract and locked the moment the designer accepts. They run in order, and each is funded separately before its work begins.
      </p>

      <div className="border border-line2 rounded-2xl overflow-hidden plate-gradient">
        {/* Contract Header */}
        <div className="flex flex-wrap items-baseline gap-6 sm:gap-8 p-5 sm:p-6 border-b border-line">
          <div>
            <div className="font-bricolage font-extrabold text-2xl text-white tracking-tight tabular-nums">
              ₹30,000
            </div>
            <div className="text-xs text-tx2 mt-0.5">Contract value</div>
          </div>
          <div>
            <div className="font-bricolage font-extrabold text-2xl text-white tracking-tight tabular-nums">
              3
            </div>
            <div className="text-xs text-tx2 mt-0.5">Milestones, fixed at creation</div>
          </div>
          <div className="sm:ml-auto text-xs text-[#C7BCFB] border border-peri/40 px-3 py-1 rounded-full bg-peri/10">
            Activating the contract is not the same as activating milestone one
          </div>
        </div>

        {/* Milestone Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-line">
          {/* Milestone 1: Live */}
          <div className="bg-[#12121A] p-5 hover:bg-[#161622] transition-colors border-y md:border-y-0 border-peri/30">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-md brand-gradient-bg text-black font-bricolage font-extrabold text-[11px] grid place-items-center">
                1
              </div>
              <span className="text-[11.5px] font-semibold text-[#8BEBBE]">Funded, in progress</span>
            </div>
            <h3 className="text-sm font-semibold text-white">Discovery and wireframes</h3>
            <div className="text-xs text-tx3 mt-1">Due day 12</div>
            <div className="font-bricolage font-bold text-lg text-white mt-3 tabular-nums">₹10,000</div>
            <div className="h-[3px] rounded-full bg-white/10 mt-3 overflow-hidden">
              <div className="h-full w-full bg-gradient-to-r from-orchid to-cyan" />
            </div>
          </div>

          {/* Milestone 2: Waiting */}
          <div className="bg-[#0B0B10] p-5 hover:bg-[#131319] transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-md bg-white/10 text-tx3 font-bricolage font-extrabold text-[11px] grid place-items-center">
                2
              </div>
              <span className="text-[11.5px] font-semibold text-tx3">Waiting on milestone one</span>
            </div>
            <h3 className="text-sm font-semibold text-white">Visual design</h3>
            <div className="text-xs text-tx3 mt-1">Due day 26</div>
            <div className="font-bricolage font-bold text-lg text-white mt-3 tabular-nums">₹12,000</div>
            <div className="h-[3px] rounded-full bg-white/10 mt-3 overflow-hidden">
              <div className="h-full w-0" />
            </div>
          </div>

          {/* Milestone 3: Waiting */}
          <div className="bg-[#0B0B10] p-5 hover:bg-[#131319] transition-colors">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-5 h-5 rounded-md bg-white/10 text-tx3 font-bricolage font-extrabold text-[11px] grid place-items-center">
                3
              </div>
              <span className="text-[11.5px] font-semibold text-tx3">Waiting on milestone two</span>
            </div>
            <h3 className="text-sm font-semibold text-white">Handoff and assets</h3>
            <div className="text-xs text-tx3 mt-1">Due day 40</div>
            <div className="font-bricolage font-bold text-lg text-white mt-3 tabular-nums">₹8,000</div>
            <div className="h-[3px] rounded-full bg-white/10 mt-3 overflow-hidden">
              <div className="h-full w-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




