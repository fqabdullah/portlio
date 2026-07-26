import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0B0E14",       // base background — deep graphite-navy
        surface: "#12161F",  // card / panel background
        surface2: "#1A1F2B", // slightly raised surface (hover states)
        border: "#232936",   // hairline borders
        signal: "#FF8A3D",   // primary accent — "build status amber"
        online: "#5EEAD4",   // secondary accent — "system online" teal
        text: "#E6E8EB",     // primary text
        muted: "#8B93A1",    // secondary / caption text
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      animation: {
        "pipeline-fill": "pipelineFill 2.4s ease-in-out forwards",
        "blink-slow": "blink 2.6s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease-out forwards",
      },
      keyframes: {
        pipelineFill: {
          "0%": { strokeDashoffset: "1000" },
          "100%": { strokeDashoffset: "0" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
