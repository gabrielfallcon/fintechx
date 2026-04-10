"use client";

import { useTheme } from "next-themes";

export function useAppTheme() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return {
    theme,
    toggleTheme,
    setTheme,
  };
}
