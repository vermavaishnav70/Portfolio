"use client";

import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="rounded-full border border-white/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-100 transition hover:bg-white/10 dark:text-slate-100"
      aria-label="Toggle color theme"
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
