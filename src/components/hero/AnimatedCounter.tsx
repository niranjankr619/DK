"use client";

import React, { useEffect, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
}

export default function AnimatedCounter({
  target,
  prefix = "",
  suffix = "",
  decimals = 0,
  duration = 1000,
}: AnimatedCounterProps) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let frameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // cubic ease-out
      const ease = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(target * ease);

      if (progress < 1) {
        frameId = requestAnimationFrame(step);
      }
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [target, duration]);

  const formatted = new Intl.NumberFormat("en-IN", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(displayValue);

  return (
    <span>
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
