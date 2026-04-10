"use client";

import { StepScreen } from "@/src/contexts";
import { useApp } from "@/src/hooks/app/useApp.hook";
import React from "react";
import {
  AccountTag,
  ChatTag,
  InviteTag,
  PreferencesTag,
  ProfileTag,
} from "../(steps)";

const StepComponent = () => {
  const mapStep: Record<StepScreen, React.ReactNode> = {
    chat: <ChatTag />,
    profile: <ProfileTag />,
    account: <AccountTag />,
    invite: <InviteTag />,
    preferences: <PreferencesTag />,
  };
  const { stepScreen } = useApp();

  return mapStep[stepScreen];
};

export default StepComponent;
