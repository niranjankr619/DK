"use client";

import React from "react";
import AnimatedCounter from "./AnimatedCounter";

export default function HeroSection() {
  return (
    <div className="py-8 md:py-10 border-b border-line w-full">
      <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-8 lg:gap-12 items-center">
        {/* Left Column: Narrative & Pitch */}
        <div>
          <h2 className="font-bricolage font-bold text-2xl sm:text-3xl md:text-[32px] text-white tracking-tight leading-snug">
            DezinersKnot connects clients to designers and holds the money in between.
          </h2>

          <p className="text-sm sm:text-base text-tx2 mt-4 leading-relaxed">
            Nothing is released until work is approved, and we take a cut from both sides of every milestone. The gateway fee is passed through to the client, and the only cost we carry is a flat payout fee of ₹6 to ₹15 per transfer — the same whether the milestone is ₹2,000 or ₹2,00,000.
          </p>

        </div>

        {/* Right Column: Hero Stats Plate */}
        <div className="plate-gradient border border-line2 rounded-2xl p-6 sm:p-7 shadow-xl shadow-black/40">
          <div className="flex items-end justify-between gap-4 border-b border-white/10 pb-5">
            <div>
              <div className="text-xs text-tx3 font-semibold uppercase tracking-wider">
                Combined Take Rate
              </div>
              <div className="font-bricolage font-extrabold text-5xl sm:text-6xl brand-gradient-text tracking-tight mt-1 tabular-nums">
                <AnimatedCounter target={12} suffix="%" duration={1200} />
              </div>
            </div>
            <div className="pb-1.5 text-right">
              <span className="text-xs sm:text-[13px] text-tx3 font-medium">Per Milestone</span>
            </div>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-5">
            {/* Split 1: Client */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="text-xs font-semibold text-white flex items-center justify-between">
                <span>From Client</span>
                <span className="text-cyan font-bold">+5%</span>
              </div>
              <div className="text-[11.5px] text-tx3 mt-1 leading-snug">
                Added on top at checkout before work begins.
              </div>
            </div>

            {/* Split 2: Designer */}
            <div className="p-3.5 rounded-xl bg-white/[0.03] border border-white/5">
              <div className="text-xs font-semibold text-white flex items-center justify-between">
                <span>From Designer</span>
                <span className="text-orchid font-bold">+7%</span>
              </div>

              <div className="text-[11.5px] text-tx3 mt-1 leading-snug">
                Deducted on client sign-off before IMPS payout.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
