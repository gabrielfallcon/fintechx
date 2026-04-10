"use client";

import { createContext } from "react";

export type User = {
  name: string;
  email: string;
  password: string;
};

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
  user: User;
  updateUser: (data: Partial<User>) => void;
};

export const AppContext = createContext<AppContextType | null>(null);
