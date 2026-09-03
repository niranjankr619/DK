import React from "react";

export default function ContractCreationSvg() {
  return (
    <svg viewBox="0 0 1140 966" xmlns="http://www.w3.org/2000/svg" role="img" className="w-full h-auto max-w-[1140px] select-none mx-auto block">

      <defs>
        <marker id="ah1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M0,0.5 L10,5 L0,9.5 z" fill="#8A8A9E"/>
        </marker>
        <marker id="ahd1" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6.5" markerHeight="6.5" orient="auto-start-reverse">
          <path d="M0,0.5 L10,5 L0,9.5 z" fill="#F5B95C"/>
        </marker>
        <linearGradient id="hub1" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#C48FD9"/>
          <stop offset="52%" stopColor="#8E9AF0"/>
          <stop offset="100%" stopColor="#22B6E0"/>
        </linearGradient>
        <style>{`
          .nt{font:600 15px 'Instrument Sans',system-ui,sans-serif;fill:#FFFFFF}
          .ntm{font:600 13.5px 'Instrument Sans',system-ui,sans-serif;fill:#FFFFFF}
          .nd{font:400 11.5px 'Instrument Sans',system-ui,sans-serif;fill:#9A9AAB}
          .el{font:600 11px 'Instrument Sans',system-ui,sans-serif;fill:#E8E8F0}
          .elx{font:600 11px 'Instrument Sans',system-ui,sans-serif;fill:#F5B95C}
          .hb{font:700 15px 'Instrument Sans',system-ui,sans-serif;fill:#0A0A0D}
          .cap{font:600 12px 'Instrument Sans',system-ui,sans-serif;fill:#FFFFFF}
          .capd{font:400 11.5px 'Instrument Sans',system-ui,sans-serif;fill:#9A9AAB}
          .num{font:800 12px 'Bricolage Grotesque','Instrument Sans',sans-serif;fill:#0A0A0D}
        `}</style>
      </defs>

      {/* Step 1: Client posts an opportunity */}
      <g>
        <rect x="425.0" y="18" width="290" height="70" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="432.0" y="30" width="3.5" height="46" rx="2" fill="#C48FD9"/>
        <text className="nt" x="451.0" y="47.0">Client posts an opportunity</text>
        <text className="nd" x="451.0" y="70.0">Brief, scope and budget go public.</text>
        <circle cx="425.0" cy="53.0" r="13" fill="#C48FD9" stroke="#000000" strokeWidth="3"/>
        <text className="num" x="425.0" y="57.3" textAnchor="middle">1</text>
      </g>

      <path d="M570,88 L570,124" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah1)"/>

      {/* Step 2: Designers send proposals */}
      <g>
        <rect x="425.0" y="126" width="290" height="82" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="432.0" y="138" width="3.5" height="58" rx="2" fill="#22B6E0"/>
        <text className="nt" x="451.0" y="153.5">Designers send proposals</text>
        <text className="nd" x="451.0" y="176.5">Every proposal carries the</text>
        <text className="nd" x="451.0" y="191.5">compliance pack shown at right.</text>
        <circle cx="425.0" cy="167.0" r="13" fill="#22B6E0" stroke="#000000" strokeWidth="3"/>
        <text className="num" x="425.0" y="171.3" textAnchor="middle">2</text>
      </g>

      <g>
        <rect x="778" y="120" width="312" height="94" rx="12" fill="rgba(255,255,255,.035)" stroke="rgba(255,255,255,.20)" strokeDasharray="5 4"/>
        <text className="cap" x="794" y="144" fill="#ffffff">Compliance pack, per proposal</text>
        <text className="capd" x="794" y="163">Tax residency · PAN · signed declaration</text>
        <text className="capd" x="794" y="178">GST status: registered or not registered.</text>
        <text className="capd" x="794" y="193">If registered, the GSTIN is mandatory.</text>
      </g>

      <path d="M570,208 L570,244" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah1)"/>

      {/* Step 3: Client offers a contract */}
      <g>
        <rect x="425.0" y="246" width="290" height="88" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="432.0" y="258" width="3.5" height="64" rx="2" fill="#C48FD9"/>
        <text className="nt" x="451.0" y="276.5">Client offers a contract</text>
        <text className="nd" x="451.0" y="299.5">Built from milestones, with reference</text>
        <text className="nd" x="451.0" y="314.5">files attached for the designer.</text>
        <circle cx="425.0" cy="290.0" r="13" fill="#C48FD9" stroke="#000000" strokeWidth="3"/>
        <text className="num" x="425.0" y="294.3" textAnchor="middle">3</text>
      </g>


      <g>
        <rect x="778" y="232" width="312" height="116" rx="12" fill="rgba(255,255,255,.035)" stroke="rgba(255,255,255,.20)" strokeDasharray="5 4"/>
        <text className="cap" x="794" y="256" fill="#ffffff">Split into milestones</text>
        <text className="capd" x="794" y="275">Defined by the client and locked once the</text>
        <text className="capd" x="794" y="290">designer accepts. Each carries its own due</text>
        <text className="capd" x="794" y="305">date and cost, and is funded separately.</text>
      </g>

      <path d="M715,290 L772,290" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah1)" strokeDasharray="6 5"/>
      <rect x="794" y="330" width="90" height="8" rx="4" fill="url(#hub1)"/>
      <text className="capd" x="794" y="326" style={{ fontSize: "10px" }}>M1</text>
      <rect x="889" y="330" width="108" height="8" rx="4" fill="rgba(255,255,255,.16)"/>
      <text className="capd" x="889" y="326" style={{ fontSize: "10px" }}>M2</text>
      <rect x="1002" y="330" width="72" height="8" rx="4" fill="rgba(255,255,255,.16)"/>
      <text className="capd" x="1002" y="326" style={{ fontSize: "10px" }}>M3</text>

      <g>
        <rect x="58" y="252" width="300" height="78" rx="12" fill="rgba(255,255,255,.035)" stroke="rgba(255,255,255,.20)" strokeDasharray="5 4"/>
        <text className="cap" x="74" y="276" fill="#ffffff">The board closes here</text>
        <text className="capd" x="74" y="295">Issuing a contract takes the opportunity</text>
        <text className="capd" x="74" y="310">off the public board straight away.</text>
      </g>

      <path d="M358,291 L412,291" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah1)" strokeDasharray="6 5"/>
      <path d="M570,334 L570,374" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah1)"/>

      <g>
        <rect x="425.0" y="376" width="290" height="62" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="432.0" y="388" width="3.5" height="38" rx="2" fill="#8E9AF0"/>
        <text className="nt" x="443.0" y="402.0">Contract goes to the</text>
        <text className="nt" x="443.0" y="421.0">designer</text>
      </g>

      <path d="M570,438 L570,474" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah1)"/>

      {/* Hub: Designer reviews the contract */}
      <g>
        <rect x="410" y="476" width="320" height="50" rx="25.0" fill="url(#hub1)"/>
        <text className="hb" x="570.0" y="506.5" textAnchor="middle">Designer reviews the contract</text>
      </g>

      {/* Left branch: Declines */}
      <path d="M570,526 L570,548 L200,548 L200,588" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah1)"/>
      <rect x="265.4" y="528" width="69.2" height="20" rx="10" fill="#16161C" stroke="rgba(255,255,255,.14)"/>
      <text className="el" x="300" y="542" textAnchor="middle">Declines</text>

      {/* Middle branch: Asks for edits */}
      <path d="M570,526 L570,588" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah1)"/>
      <rect x="516.2" y="548" width="107.6" height="20" rx="10" fill="#16161C" stroke="rgba(255,255,255,.14)"/>
      <text className="el" x="570" y="562" textAnchor="middle">Asks for edits</text>

      {/* Right branch: Accepts */}
      <path d="M570,526 L570,548 L940,548 L940,588" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah1)"/>
      <rect x="808.6" y="528" width="62.8" height="20" rx="10" fill="#16161C" stroke="rgba(255,255,255,.14)"/>
      <text className="el" x="840" y="542" textAnchor="middle">Accepts</text>

      <g>
        <rect x="75" y="590" width="290" height="58" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="82" y="602" width="3.5" height="34" rx="2" fill="#E5709B"/>
        <text className="ntm" x="93" y="623.5">Designer declines</text>
      </g>

      <g>
        <rect x="445" y="590" width="290" height="58" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="452" y="602" width="3.5" height="34" rx="2" fill="#22B6E0"/>
        <text className="ntm" x="463" y="623.5">Designer asks for edits</text>
      </g>

      <g>
        <rect x="815" y="590" width="290" height="58" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="822" y="602" width="3.5" height="34" rx="2" fill="#22B6E0"/>
        <text className="ntm" x="833" y="623.5">Designer accepts</text>
      </g>

      <path d="M200,648 L200,772" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah1)"/>
      <path d="M570,648 L570,684" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah1)"/>

      {/* Step 7: Client accepts or declines */}
      <g>
        <rect x="415" y="686" width="310" height="78" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="422" y="698" width="3.5" height="54" rx="2" fill="#C48FD9"/>
        <text className="ntm" x="441" y="711.5">Client accepts or declines</text>
        <text className="nd" x="441" y="734.5">No counter-offer. Those are the only</text>
        <text className="nd" x="441" y="749.5">two moves available.</text>
        <circle cx="415" cy="725.0" r="13" fill="#C48FD9" stroke="#000000" strokeWidth="3"/>
        <text className="num" x="415" y="729.3" textAnchor="middle">7</text>
      </g>

      <path d="M415,725 L200,725 L200,772" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah1)"/>
      <rect x="277.4" y="705" width="69.2" height="20" rx="10" fill="#16161C" stroke="rgba(255,255,255,.14)"/>
      <text className="el" x="312" y="719" textAnchor="middle">Declines</text>

      <path d="M725,725 L940,725 L940,772" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah1)"/>
      <rect x="798.6" y="705" width="62.8" height="20" rx="10" fill="#16161C" stroke="rgba(255,255,255,.14)"/>
      <text className="el" x="830" y="719" textAnchor="middle">Accepts</text>

      <path d="M940,648 L940,772" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah1)"/>

      <g>
        <rect x="75" y="774" width="290" height="74" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="82" y="786" width="3.5" height="50" rx="2" fill="#E5709B"/>
        <text className="ntm" x="93" y="805.0">Contract ends</text>
        <text className="nd" x="93" y="828.0">Nothing is owed by either side.</text>
      </g>

      {/* Step 8: Contract is locked */}
      <g>
        <rect x="815" y="774" width="290" height="74" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="822" y="786" width="3.5" height="50" rx="2" fill="#8E9AF0"/>
        <text className="ntm" x="841" y="805.0">Contract is locked</text>
        <text className="nd" x="841" y="828.0">The client can no longer decline.</text>
        <circle cx="815" cy="811.0" r="13" fill="#8E9AF0" stroke="#000000" strokeWidth="3"/>
        <text className="num" x="815" y="815.3" textAnchor="middle">8</text>
      </g>

      <path d="M940,848 L940,886" fill="none" stroke="#8A8A9E" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ah1)"/>

      <g>
        <rect x="815" y="888" width="290" height="58" rx="13" fill="#0F0F14" stroke="rgba(255,255,255,.13)"/>
        <rect x="822" y="900" width="3.5" height="34" rx="2" fill="#C48FD9"/>
        <text className="ntm" x="833" y="921.5">Client activates the contract</text>
      </g>

      <path d="M200,848 L200,900 L360,900" fill="none" stroke="#F5B95C" strokeWidth="2.1" strokeLinecap="round" strokeLinejoin="round" markerEnd="url(#ahd1)" strokeDasharray="6 5"/>
      <text className="elx" x="372" y="904">Re-issue options — see next panel</text>
    </svg>
  );
}
