import React from "react";
import Image from "next/image";

export default function Masthead() {
  return (
    <header className="flex items-center gap-3.5 pb-4 border-b border-line">

      <div className="w-9 h-9 sm:w-10 sm:h-10 flex-none flex items-center justify-center">
        <Image
          src="/logo.png"
          alt="DezinersKnot"
          width={40}
          height={40}
          className="w-full h-full object-contain"
          priority
        />
      </div>

      <div>
        <h1 className="font-bricolage font-bold text-[18px] sm:text-[19px] tracking-tight text-white leading-tight">
          DezinersKnot
        </h1>
        <p className="font-instrument font-normal text-[13px] sm:text-[13.5px] text-[#7E8E9F] tracking-normal mt-0.5">
          Freelance design work, paid out milestone by milestone
        </p>
      </div>
    </header>
  );
}



