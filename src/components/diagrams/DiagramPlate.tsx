import React from "react";

interface DiagramPlateProps {
  children: React.ReactNode;
}

export default function DiagramPlate({ children }: DiagramPlateProps) {
  return (
    <div className="relative border border-line2 rounded-2xl p-4 sm:p-6 md:p-8 plate-gradient overflow-x-auto flex justify-center">
      <div className="min-w-[720px] md:min-w-0 w-full flex justify-center items-center">
        {children}
      </div>
      <div className="md:hidden text-[11px] text-tx3 pt-2 text-center select-none sticky left-0">
        ← Swipe horizontally to inspect full system diagram →
      </div>
    </div>
  );
}

