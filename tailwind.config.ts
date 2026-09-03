import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        orchid: "#C48FD9",
        peri: "#8E9AF0",
        cyan: "#22B6E0",
        amber: "#F5B95C",
        rose: "#E5709B",
        panel: "#111117",
        panelLight: "#141419",
        panelDark: "#0A0A0E",
        line: "rgba(255, 255, 255, 0.11)",
        line2: "rgba(255, 255, 255, 0.18)",
        tx: "#EDEDF2",
        tx2: "#9A9AAB",
        tx3: "#6F6F80",
      },
      fontFamily: {
        bricolage: ["var(--font-bricolage)", "sans-serif"],
        instrument: ["var(--font-instrument)", "system-ui", "-apple-system", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
