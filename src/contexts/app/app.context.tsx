"use client";

import { createContext } from "react";

export type StepScreen =
  | "chat"
  | "profile"
  | "preferences"
  | "account"
  | "invite";

export type AppContextType = {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  stepScreen: StepScreen;
  setStepScreen: (step: StepScreen) => void;
};

export const AppContext = createContext<AppContextType | null>(null);
