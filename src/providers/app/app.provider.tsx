"use client";

import { AppContext, StepScreen } from "@/src/contexts";
import { useState } from "react";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [stepScreen, setStepScreen] = useState<StepScreen>("chat");

  return (
    <AppContext.Provider
      value={{ isMenuOpen, setIsMenuOpen, stepScreen, setStepScreen }}
    >
      {children}
    </AppContext.Provider>
  );
}
