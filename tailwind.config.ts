import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Each color reads from a CSS variable (set per-theme in globals.css)
        // so existing utilities like bg-signal/10 or text-muted stay theme-aware.
        bg: "rgb(var(--color-bg) / <alpha-value>)",
        surface: "rgb(var(--color-surface) / <alpha-value>)",
        surface2: "rgb(var(--color-surface2) / <alpha-value>)",
        border: "rgb(var(--color-border) / <alpha-value>)",
        signal: "rgb(var(--color-signal) / <alpha-value>)",
        online: "rgb(var(--color-online) / <alpha-value>)",
        text: "rgb(var(--color-text) / <alpha-value>)",
        muted: "rgb(var(--color-muted) / <alpha-value>)",
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      animation: {
        "pipeline-fill": "pipelineFill 2.4s ease-in-out forwards",
        "blink-slow": "blink 2.6s ease-in-out infinite",
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "glow-pulse": "glowPulse 8s ease-in-out infinite",
        "spin-slow": "spin 16s linear infinite",
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
        glowPulse: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.6", transform: "scale(1.06)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
