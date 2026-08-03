"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid rendering theme-dependent UI until mounted, so SSR/CSR match.
  useEffect(() => setMounted(true), []);

  const isDark = mounted ? resolvedTheme === "dark" : true;

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={mounted ? `Switch to ${isDark ? "light" : "dark"} mode` : "Toggle theme"}
      className="relative flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-md border border-border text-muted transition-all duration-300 hover:border-signal/40 hover:text-signal active:scale-90"
    >
      <span className="relative h-4 w-4">
        <Sun
          size={16}
          className={`absolute inset-0 transition-all duration-500 ease-out ${
            mounted && !isDark
              ? "rotate-0 scale-100 opacity-100"
              : "rotate-90 scale-0 opacity-0"
          }`}
        />
        <Moon
          size={16}
          className={`absolute inset-0 transition-all duration-500 ease-out ${
            mounted && isDark
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-0 opacity-0"
          }`}
        />
      </span>
    </button>
  );
}
