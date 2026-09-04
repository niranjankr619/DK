import React from "react";
import TabSessionGuard from "@/components/auth/TabSessionGuard";
import Masthead from "@/components/layout/Masthead";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/hero/HeroSection";
import Calculator from "@/components/calculator/Calculator";
import CommissionCards from "@/components/sections/CommissionCards";
import ContractRail from "@/components/sections/ContractRail";
import PayoutZones from "@/components/sections/PayoutZones";
import DiagramPlate from "@/components/diagrams/DiagramPlate";
import ContractCreationSvg from "@/components/diagrams/ContractCreationSvg";
import ContractPreEndSvg from "@/components/diagrams/ContractPreEndSvg";
import RunningMilestonesSvg from "@/components/diagrams/RunningMilestonesSvg";
import MoneyFlowSvg from "@/components/diagrams/MoneyFlowSvg";
import AppendixSection from "@/components/appendix/AppendixSection";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function Home() {
  return (
    <TabSessionGuard>
      <main className="space-y-12 md:space-y-16">
      {/* Brand Masthead */}
      <ScrollReveal direction="none" duration={0.5}>
        <Masthead />
      </ScrollReveal>


      {/* Hero: 12% Metric & Pitch */}
      <ScrollReveal delay={0.1}>
        <HeroSection />
      </ScrollReveal>

      {/* Section 1: Award and contract */}
      <ScrollReveal delay={0.15}>
        <section>
          <div className="flex items-baseline gap-3">
            <div className="w-6 h-6 rounded-lg brand-gradient-bg text-black font-bricolage font-extrabold text-xs flex items-center justify-center flex-none">
              1
            </div>
            <h2 className="font-bricolage font-bold text-xl md:text-2xl text-white tracking-tight">
              Award and contract
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-tx2 ml-9 mt-1 mb-5 max-w-[76ch]">
            A brief goes public, proposals come in, one designer is chosen. Issuing a contract closes the board, and the designer holds the next move.
          </p>
          <DiagramPlate>
            <ContractCreationSvg />
          </DiagramPlate>
        </section>
      </ScrollReveal>

      {/* Section 2: When a contract ends before it starts */}
      <ScrollReveal delay={0.15}>
        <section>
          <div className="flex items-baseline gap-3">
            <div className="w-6 h-6 rounded-lg brand-gradient-bg text-black font-bricolage font-extrabold text-xs flex items-center justify-center flex-none">
              2
            </div>
            <h2 className="font-bricolage font-bold text-xl md:text-2xl text-white tracking-tight">
              When a contract ends before it starts
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-tx2 ml-9 mt-1 mb-5 max-w-[76ch]">
            A decline does not kill the opportunity. The client either re-issues to someone who already proposed, or reopens the brief to the public.
          </p>
          <DiagramPlate>
            <ContractPreEndSvg />
          </DiagramPlate>
        </section>
      </ScrollReveal>

      {/* Section 3: What a contract holds */}
      <ScrollReveal delay={0.15}>
        <ContractRail />
      </ScrollReveal>

      {/* Section 4: Running the milestones */}
      <ScrollReveal delay={0.15}>
        <section>
          <div className="flex items-baseline gap-3">
            <div className="w-6 h-6 rounded-lg brand-gradient-bg text-black font-bricolage font-extrabold text-xs flex items-center justify-center flex-none">
              4
            </div>
            <h2 className="font-bricolage font-bold text-xl md:text-2xl text-white tracking-tight">
              Running the milestones
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-tx2 ml-9 mt-1 mb-5 max-w-[76ch]">
            Every milestone is funded before work starts and released only after sign-off. The revision loop is capped at three rounds.
          </p>
          <DiagramPlate>
            <RunningMilestonesSvg />
          </DiagramPlate>
        </section>
      </ScrollReveal>

      {/* Section 5: Where the money and checks flow */}
      <ScrollReveal delay={0.15}>
        <section>
          <div className="flex items-baseline gap-3">
            <div className="w-6 h-6 rounded-lg brand-gradient-bg text-black font-bricolage font-extrabold text-xs flex items-center justify-center flex-none">
              5
            </div>
            <h2 className="font-bricolage font-bold text-xl md:text-2xl text-white tracking-tight">
              Where the money and the checks flow
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-tx2 ml-9 mt-1 mb-5 max-w-[76ch]">
            Money in through the Cashfree gateway, money out through Payouts, identity checks through Secure ID. Both wallets are funded from a whitelisted DezinersKnot account.
          </p>
          <DiagramPlate>
            <MoneyFlowSvg />
          </DiagramPlate>
        </section>
      </ScrollReveal>

      {/* Section 6: How we make money */}
      <ScrollReveal delay={0.15}>
        <CommissionCards />
      </ScrollReveal>

      {/* Section 7: Interactive Milestone Calculator */}
      <ScrollReveal delay={0.15}>
        <Calculator />
      </ScrollReveal>

      {/* Section 8: Ending a contract */}
      <ScrollReveal delay={0.15}>
        <PayoutZones />
      </ScrollReveal>

      {/* Appendix Section */}
      <ScrollReveal delay={0.15}>
        <AppendixSection />
      </ScrollReveal>

      {/* Footer */}
      <Footer />
    </main>
  </TabSessionGuard>
  );
}
