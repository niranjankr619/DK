import React from "react";

export default function ContractPreEndSvg() {
  return (
    <svg viewBox="0 0 1140 330" xmlns="http://www.w3.org/2000/svg" role="img" className="w-full h-auto max-w-[1140px] select-none mx-auto block">

      <defs>
        <marker id="ah2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M0,0.5 L10,5 L0,9.5 z" fill="#8A8A9E"/>
        </marker>
        <marker id="ahd2" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M0,0.5 L10,5 L0,9.5 z" fill="#F5B95C"/>
        </marker>
        <linearGradient id="hub2" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C48FD9"/>
          <stop offset="52%" stopColor="#8E9AF0"/>
          <stop offset="100%" stopColor="#22B6E0"/>
        </linearGradient>
        <style>{`
          .ntm{font:600 13.5px 'Instrument Sans',system-ui,sans-serif;fill:#FFFFFF}
          .nd{font:400 11.5px 'Instrument Sans',system-ui,sans-serif;fill:#9A9AAB}
          .el{font:600 11px 'Instrument Sans',system-ui,sans-serif;fill:#E8E8F0}
          .hb{font:700 15px 'Instrument Sans',system-ui,sans-serif;fill:#0A0A0D}
        `}</style>
      </defs>

      {/* Box: Contract ended */}
      <g>
        <rect x="30" y="106" width="250" height="82" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="37" y="118" width="3.5" height="58" rx="2" fill="#E5709B"/>
        <text className="ntm" x="48" y="133.5">Contract ended</text>
        <text className="nd" x="48" y="156.5">Declined by the designer, or the</text>
        <text className="nd" x="48" y="171.5">client rejected the edit request.</text>
      </g>

      <path d="M280,147 L352,147" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah2)"/>

      {/* Hub: Client chooses */}
      <g>
        <rect x="354" y="122" width="176" height="50" rx="25.0" fill="url(#hub2)"/>
        <text className="hb" x="442.0" y="152.5" textAnchor="middle">Client chooses</text>
      </g>

      {/* Top Branch: Stay closed */}
      <path d="M530,147 L570,147 L570,72 L636,72" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah2)"/>
      <rect x="550" y="62" width="80" height="20" rx="10" fill="#16161C" stroke="rgba(255,255,255,.14)"/>
      <text className="el" x="590" y="76" textAnchor="middle">Stay closed</text>

      {/* Bottom Branch: Reopen */}
      <path d="M530,147 L570,147 L570,238 L636,238" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah2)"/>
      <rect x="560" y="228" width="60" height="20" rx="10" fill="#16161C" stroke="rgba(255,255,255,.14)"/>
      <text className="el" x="590" y="242" textAnchor="middle">Reopen</text>


      {/* Box: Send it to another designer who already proposed */}
      <g>
        <rect x="638" y="24" width="460" height="96" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="645" y="36" width="3.5" height="72" rx="2" fill="#8E9AF0"/>
        <text className="ntm" x="656" y="58.5">Send it to another designer who already proposed</text>
        <text className="nd" x="656" y="81.5">The board stays closed. Only the people who proposed before the</text>
        <text className="nd" x="656" y="96.5">first contract went out are reachable.</text>
      </g>

      {/* Box: Reopen the opportunity to the public */}
      <g>
        <rect x="638" y="190" width="460" height="116" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="645" y="202" width="3.5" height="92" rx="2" fill="#C48FD9"/>
        <text className="ntm" x="656" y="227.0">Reopen the opportunity to the public</text>
        <text className="nd" x="656" y="250.0">The listing goes live again and new designers can propose.</text>
        <text className="nd" x="656" y="265.0">The designer who declined becomes eligible again, so the client</text>
        <text className="nd" x="656" y="280.0">may send them a fresh contract.</text>
      </g>
    </svg>
  );
}
