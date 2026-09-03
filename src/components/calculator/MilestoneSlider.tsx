"use client";

import React, { ChangeEvent } from "react";

interface MilestoneSliderProps {
  value: number;
  min?: number;
  max?: number;
  step?: number;
  onChange: (value: number) => void;
}

export default function MilestoneSlider({
  value,
  min = 1,
  max = 350000,
  step = 500,
  onChange,
}: MilestoneSliderProps) {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  return (
    <div className="flex-1 min-w-[180px] flex items-center">
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={Math.min(value, max)}
        onChange={handleChange}
        className="w-full h-1.5 rounded-lg appearance-none cursor-pointer bg-gradient-to-r from-orchid via-peri to-cyan outline-none accent-white shadow-sm"
        aria-label="Milestone slider range"
      />
    </div>
  );
}
