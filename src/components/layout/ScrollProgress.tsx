"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        setProgress((window.scrollY / totalHeight) * 100);
      } else {
        setProgress(0);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      id="prog"
      className="fixed top-0 left-0 h-[2px] z-50 transition-all duration-75"
      style={{
        width: `${progress}%`,
        background: "linear-gradient(90deg, var(--orchid), var(--peri), var(--cyan))",
      }}
    />
  );
}
