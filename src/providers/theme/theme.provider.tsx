"use client";
import { ThemeProvider } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const scriptProps =
    typeof window === "undefined"
      ? undefined
      : ({ type: "application/json" } as const);
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      scriptProps={scriptProps}
    >
      {children}
    </ThemeProvider>
  );
}
