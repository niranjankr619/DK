import React from "react";

export default function MoneyFlowSvg() {
  return (
    <svg viewBox="0 0 1140 486" xmlns="http://www.w3.org/2000/svg" role="img" className="w-full h-auto max-w-[1140px] select-none mx-auto block">

      <defs>
        <marker id="ah5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M0,0.5 L10,5 L0,9.5 z" fill="#8A8A9E"/>
        </marker>
        <marker id="ahd5" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M0,0.5 L10,5 L0,9.5 z" fill="#F5B95C"/>
        </marker>
        <linearGradient id="hub5" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C48FD9"/>
          <stop offset="52%" stopColor="#8E9AF0"/>
          <stop offset="100%" stopColor="#22B6E0"/>
        </linearGradient>
        <style>{`
          .ntm{font:600 13.5px 'Instrument Sans',system-ui,sans-serif;fill:#FFFFFF}
          .nd{font:400 11.5px 'Instrument Sans',system-ui,sans-serif;fill:#9A9AAB}
          .el{font:600 11px 'Instrument Sans',system-ui,sans-serif;fill:#E8E8F0}
          .cap{font:600 12px 'Instrument Sans',system-ui,sans-serif;fill:#FFFFFF}
          .capd{font:400 11.5px 'Instrument Sans',system-ui,sans-serif;fill:#9A9AAB}
          .num{font:800 12px 'Bricolage Grotesque','Instrument Sans',sans-serif;fill:#0A0A0D}
        `}</style>
      </defs>

      {/* Box: Client pays */}
      <g>
        <rect x="24" y="40" width="226" height="84" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="31" y="52" width="3.5" height="60" rx="2" fill="#C48FD9"/>
        <text className="ntm" x="42" y="68.5">Client pays</text>
        <text className="nd" x="42" y="91.5">Milestone + GST + the 5%</text>
        <text className="nd" x="42" y="106.5">commission + GST.</text>
      </g>


      <path d="M250,82 L326,82" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah5)"/>

      {/* Box: Cashfree Payment Gateway */}
      <g>
        <rect x="328" y="40" width="226" height="84" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="335" y="52" width="3.5" height="60" rx="2" fill="#F5B95C"/>
        <text className="ntm" x="354" y="59.0">Cashfree Payment</text>
        <text className="ntm" x="354" y="78.0">Gateway</text>
        <text className="nd" x="354" y="101.0">1.95-2.05% + GST, added on</text>
        <text className="nd" x="354" y="116.0">top and paid by the client.</text>
        <circle cx="328" cy="82.0" r="13" fill="#F5B95C" stroke="#000000" strokeWidth="3"/>
        <text className="num" x="328" y="86.3" textAnchor="middle">12</text>
      </g>

      <path d="M554,82 L630,82" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah5)"/>

      {/* Box: DezinersKnot current account */}
      <g>
        <rect x="632" y="24" width="258" height="116" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="639" y="36" width="3.5" height="92" rx="2" fill="#8E9AF0"/>
        <text className="ntm" x="650" y="51.5">DezinersKnot current</text>
        <text className="ntm" x="650" y="70.5">
          account <tspan fill="#22B6E0" fontWeight="700">(HDFC)</tspan>
        </text>

        <text className="nd" x="650" y="93.5">Milestone money is held here.</text>
        <text className="nd" x="650" y="108.5">Commission from both sides stays.</text>
        <text className="nd" x="650" y="123.5">GST collected is remitted.</text>
      </g>

      {/* Path to Payouts wallet with Whitelisted transfer pill */}
      <path d="M761,140 L761,178 L400,178 L400,222" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah5)"/>
      <rect x="458.0" y="168" width="124.0" height="20" rx="10" fill="#16161C" stroke="rgba(255,255,255,.14)"/>
      <text className="el" x="520" y="182" textAnchor="middle">Whitelisted transfer</text>

      {/* Path to Secure ID wallet with Whitelisted transfer pill */}
      <path d="M761,140 L761,178 L900,178 L900,222" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah5)"/>
      <rect x="774.0" y="168" width="124.0" height="20" rx="10" fill="#16161C" stroke="rgba(255,255,255,.14)"/>
      <text className="el" x="836" y="182" textAnchor="middle">Whitelisted transfer</text>



      {/* Box: Cashfree Payouts wallet */}
      <g>
        <rect x="276" y="224" width="248" height="96" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="283" y="236" width="3.5" height="72" rx="2" fill="#F5B95C"/>
        <text className="ntm" x="302" y="258.5">Cashfree Payouts wallet</text>
        <text className="nd" x="302" y="281.5">Recharged by bank transfer from</text>
        <text className="nd" x="302" y="296.5">the whitelisted DK account.</text>
        <circle cx="276" cy="272.0" r="13" fill="#F5B95C" stroke="#000000" strokeWidth="3"/>
        <text className="num" x="276" y="276.3" textAnchor="middle">14</text>
      </g>

      {/* Box: Cashfree Secure ID wallet */}
      <g>
        <rect x="776" y="224" width="248" height="96" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="783" y="236" width="3.5" height="72" rx="2" fill="#F5B95C"/>
        <text className="ntm" x="802" y="258.5">Cashfree Secure ID wallet</text>
        <text className="nd" x="802" y="281.5">Same recharge route. Pays for</text>
        <text className="nd" x="802" y="296.5">each verification check.</text>
        <circle cx="776" cy="272.0" r="13" fill="#F5B95C" stroke="#000000" strokeWidth="3"/>
        <text className="num" x="776" y="276.3" textAnchor="middle">13</text>
      </g>

      {/* Path down to Designer bank account with less 7% + GST pill */}
      <path d="M400,320 L400,368" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah5)"/>
      <rect x="314" y="334" width="172" height="20" rx="10" fill="#16161C" stroke="rgba(255,255,255,.14)"/>
      <text className="el" x="400" y="348" textAnchor="middle">less 7% + GST (via DK admin)</text>


      {/* Path down to PAN/GST checks */}
      <path d="M900,320 L900,368" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah5)"/>

      {/* Box: Designer's bank account */}
      <g>
        <rect x="276" y="370" width="248" height="92" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="283" y="382" width="3.5" height="68" rx="2" fill="#22B6E0"/>
        <text className="ntm" x="294" y="402.5">Designer&apos;s bank account</text>
        <text className="nd" x="294" y="425.5">Fee and GST, less the 7%</text>
        <text className="nd" x="294" y="440.5">designer commission.</text>
      </g>

      {/* Box: PAN, GST and bank checks */}
      <g>
        <rect x="776" y="370" width="248" height="92" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="783" y="382" width="3.5" height="68" rx="2" fill="#22B6E0"/>
        <text className="ntm" x="794" y="402.5">PAN, GST &amp; bank checks</text>
        <text className="nd" x="794" y="425.5">PAN &amp; GST before sending proposal.</text>
        <text className="nd" x="794" y="440.5">Bank before submitting deliverables.</text>
      </g>


      {/* Recharge rule note */}
      <g>
        <rect x="24" y="370" width="226" height="92" rx="12" fill="rgba(255,255,255,.035)" stroke="rgba(255,255,255,.20)" strokeDasharray="5 4"/>
        <text className="cap" x="40" y="394" fill="#ffffff">Recharge rule</text>
        <text className="capd" x="40" y="413">Cashfree only accepts wallet</text>
        <text className="capd" x="40" y="428">recharges from whitelisted</text>
        <text className="capd" x="40" y="443">accounts, by RTGS/NEFT/IMPS.</text>
      </g>
    </svg>
  );
}

