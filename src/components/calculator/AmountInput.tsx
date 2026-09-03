"use client";

import React, { useState, useEffect, ChangeEvent } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

interface AmountInputProps {
  value: number;
  onChange: (value: number) => void;
  min?: number;
  max?: number;
}

export default function AmountInput({
  value,
  onChange,
  min = 1,
  max = 350000,
}: AmountInputProps) {
  const [localVal, setLocalVal] = useState<string>(value ? value.toString() : "1");

  useEffect(() => {
    setLocalVal(value ? Math.min(max, value).toString() : "1");
  }, [value, max]);

  const handleTextChange = (e: ChangeEvent<HTMLInputElement>) => {
    const rawDigits = e.target.value.replace(/[^0-9]/g, "");
    if (rawDigits === "") {
      setLocalVal("");
      return;
    }
    const num = parseInt(rawDigits, 10);
    if (!isNaN(num)) {
      if (num > max) {
        setLocalVal(max.toString());
        onChange(max);
      } else {
        setLocalVal(rawDigits);
        onChange(num);
      }
    }
  };

  const handleBlur = () => {
    if (localVal === "" || parseInt(localVal, 10) < min) {
      setLocalVal(min.toString());
      onChange(min);
    } else {
      const num = Math.min(max, parseInt(localVal, 10));
      setLocalVal(num.toString());
      onChange(num);
    }
  };

  const handleIncrement = () => {
    const next = Math.min(max, (value || 0) + 1000);
    onChange(next);
  };

  const handleDecrement = () => {
    const next = Math.max(min, (value || 0) - 1000);
    onChange(next);
  };

  return (
    <div className="flex items-center border border-line2 rounded-xl bg-[#0B0B10] focus-within:border-peri transition-colors overflow-hidden">
      <div className="flex items-center gap-1.5 px-3 py-2">
        <span className="font-bricolage font-bold text-lg md:text-xl text-tx2 select-none">₹</span>
        <input
          type="text"
          inputMode="numeric"
          pattern="[0-9]*"
          maxLength={6}
          value={localVal}
          onChange={handleTextChange}
          onBlur={handleBlur}
          className="w-24 sm:w-28 bg-transparent text-white font-bricolage font-bold text-lg md:text-xl tracking-tight tabular-nums outline-none"
          aria-label="Milestone value in rupees (up to ₹3,50,000)"
        />
      </div>

      {/* Styled Stepper Chevrons */}
      <div className="flex flex-col border-l border-white/10 bg-white/[0.02]">
        <button
          type="button"
          onClick={handleIncrement}
          className="px-1.5 py-1 hover:bg-white/10 text-tx3 hover:text-white transition-colors flex items-center justify-center border-b border-white/5"
          aria-label="Increase milestone value by ₹1,000"
        >
          <ChevronUp className="w-3.5 h-3.5" />
        </button>
        <button
          type="button"
          onClick={handleDecrement}
          className="px-1.5 py-1 hover:bg-white/10 text-tx3 hover:text-white transition-colors flex items-center justify-center"
          aria-label="Decrease milestone value by ₹1,000"
        >
          <ChevronDown className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
