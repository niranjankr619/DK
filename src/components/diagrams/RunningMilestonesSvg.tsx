import React from "react";

export default function RunningMilestonesSvg() {
  return (
    <svg viewBox="0 0 1140 486" xmlns="http://www.w3.org/2000/svg" role="img" className="w-full h-auto max-w-[1140px] select-none mx-auto block">

      <defs>
        <marker id="ah4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M0,0.5 L10,5 L0,9.5 z" fill="#8A8A9E"/>
        </marker>
        <marker id="ahd4" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M0,0.5 L10,5 L0,9.5 z" fill="#F5B95C"/>
        </marker>
        <linearGradient id="hub4" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C48FD9"/>
          <stop offset="52%" stopColor="#8E9AF0"/>
          <stop offset="100%" stopColor="#22B6E0"/>
        </linearGradient>
        <style>{`
          .ntm{font:600 13.5px 'Instrument Sans',system-ui,sans-serif;fill:#FFFFFF}
          .nd{font:400 11.5px 'Instrument Sans',system-ui,sans-serif;fill:#9A9AAB}
          .el{font:600 11px 'Instrument Sans',system-ui,sans-serif;fill:#E8E8F0}
          .hb{font:700 15px 'Instrument Sans',system-ui,sans-serif;fill:#0A0A0D}
          .num{font:800 12px 'Bricolage Grotesque','Instrument Sans',sans-serif;fill:#0A0A0D}
        `}</style>
      </defs>

      {/* Step 9: Client activates a milestone */}
      <g>
        <rect x="70" y="40" width="268" height="92" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="77" y="52" width="3.5" height="68" rx="2" fill="#C48FD9"/>
        <text className="ntm" x="96" y="63.0">Client activates a</text>
        <text className="ntm" x="96" y="82.0">milestone</text>
        <text className="nd" x="96" y="105.0">Milestone fee + 18% GST + the</text>
        <text className="nd" x="96" y="120.0">5% client commission + GST.</text>
        <circle cx="70" cy="86.0" r="13" fill="#C48FD9" stroke="#000000" strokeWidth="3"/>
        <text className="num" x="70" y="90.3" textAnchor="middle">9</text>
      </g>

      <path d="M338,86 L392,86" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah4)"/>

      {/* Box: Funds sit with DezinersKnot */}
      <g>
        <rect x="400" y="40" width="250" height="92" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="407" y="52" width="3.5" height="68" rx="2" fill="#8E9AF0"/>
        <text className="ntm" x="418" y="63.0">Funds sit with</text>
        <text className="ntm" x="418" y="82.0">DezinersKnot</text>
        <text className="nd" x="418" y="105.0">Held until the client signs off</text>
        <text className="nd" x="418" y="120.0">on this milestone.</text>
      </g>

      <path d="M650,86 L704,86" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah4)"/>

      {/* Step 10: Designer works and submits */}
      <g>
        <rect x="712" y="40" width="250" height="92" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="719" y="52" width="3.5" height="68" rx="2" fill="#22B6E0"/>
        <text className="ntm" x="738" y="63.0">Designer works and</text>
        <text className="ntm" x="738" y="82.0">submits</text>
        <text className="nd" x="738" y="105.0">Reference files from the</text>
        <text className="nd" x="738" y="120.0">contract stay available.</text>
        <circle cx="712" cy="86.0" r="13" fill="#22B6E0" stroke="#000000" strokeWidth="3"/>
        <text className="num" x="712" y="90.3" textAnchor="middle">10</text>
      </g>

      <path d="M837,132 L837,181" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah4)"/>

      {/* Hub: Client reviews the submission */}
      <g>
        <rect x="700" y="183" width="274" height="50" rx="25.0" fill="url(#hub4)"/>
        <text className="hb" x="837.0" y="213.5" textAnchor="middle">Client reviews the submission</text>
      </g>

      {/* Top loop: Asks for edits */}
      <path d="M974,208 L1038,208 L1038,62 L966,62" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah4)"/>
      <rect x="958.6" y="138" width="158.8" height="20" rx="10" fill="#16161C" stroke="rgba(255,255,255,.14)"/>
      <text className="el" x="1038" y="152" textAnchor="middle">Asks for edits — max 3</text>

      {/* Bottom path: Approves */}
      <path d="M700,208 L618,208 L618,322 L566,322" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah4)"/>
      <rect x="583.4" y="252" width="69.2" height="20" rx="10" fill="#16161C" stroke="rgba(255,255,255,.14)"/>
      <text className="el" x="618" y="266" textAnchor="middle">Approves</text>

      {/* Box: Admin releases payment */}
      <g>
        <rect x="300" y="276" width="266" height="94" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="307" y="288" width="3.5" height="70" rx="2" fill="#8E9AF0"/>
        <text className="ntm" x="318" y="309.5">Admin releases payment</text>
        <text className="nd" x="318" y="332.5">The designer&apos;s 7% commission</text>
        <text className="nd" x="318" y="347.5">and GST on it come off here.</text>
      </g>

      <path d="M300,323 L278,323" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah4)"/>

      {/* Box: Designer is paid */}
      <g>
        <rect x="60" y="276" width="210" height="94" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="67" y="288" width="3.5" height="70" rx="2" fill="#22B6E0"/>
        <text className="ntm" x="78" y="317.0">Designer is paid</text>
        <text className="nd" x="78" y="340.0">Fee + GST, less 7% + GST.</text>
      </g>

      <path d="M433,370 L433,402" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah4)" strokeDasharray="6 5"/>

      {/* Step 11: More milestones left? */}
      <g>
        <rect x="312" y="404" width="698" height="78" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="319" y="416" width="3.5" height="54" rx="2" fill="#8E9AF0"/>
        <text className="ntm" x="338" y="437.0">More milestones left? The client activates and pays for the next one.</text>
        <text className="nd" x="338" y="460.0">When the last milestone is approved and paid, the contract closes cleanly.</text>
        <circle cx="312" cy="443.0" r="13" fill="#8E9AF0" stroke="#000000" strokeWidth="3"/>
        <text className="num" x="312" y="447.3" textAnchor="middle">11</text>
      </g>

      <path d="M312,443 L24,443 L24,86 L64,86" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah4)" strokeDasharray="6 5"/>
      <rect x="122.2" y="425" width="107.6" height="20" rx="10" fill="#16161C" stroke="rgba(255,255,255,.14)"/>
      <text className="el" x="176" y="439" textAnchor="middle">Next milestone</text>
    </svg>
  );
}
