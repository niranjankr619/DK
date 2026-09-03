"use client";

import React from "react";
import { formatINRWhole } from "@/lib/formatters";

interface PresetChipsProps {
  currentValue: number;
  onSelect: (value: number) => void;
}

const PRESETS = [2000, 10000, 50000, 150000];

export default function PresetChips({ currentValue, onSelect }: PresetChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {PRESETS.map((amt) => {
        const isActive = currentValue === amt;
        return (
          <button
            key={amt}
            type="button"
            onClick={() => onSelect(amt)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
              isActive
                ? "brand-gradient-bg text-black font-semibold shadow-md shadow-peri/15"
                : "border border-line2 bg-[#0B0B10] text-tx2 hover:border-peri hover:text-white"
            }`}
          >
            {formatINRWhole(amt)}
          </button>
        );
      })}
    </div>
  );
}
