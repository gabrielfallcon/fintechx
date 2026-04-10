"use client";

import { AppContext, StepScreen } from "@/src/contexts";
import { useState } from "react";

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [stepScreen, setStepScreen] = useState<StepScreen>("chat");
  const [user, setUser] = useState({
    name: "John Doe",
    email: "john@fintechx.com",
    password: "123456",
  });

  const updateUser = (data: Partial<typeof user>) => {
    setUser((prev) => ({
      ...prev,
      ...data,
    }));
  };

  return (
    <AppContext.Provider
      value={{
        isMenuOpen,
        setIsMenuOpen,
        stepScreen,
        setStepScreen,
        updateUser,
        user,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}
