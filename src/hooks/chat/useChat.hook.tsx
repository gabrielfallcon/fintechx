import { ChatContext } from "@/src/contexts";
import { useContext } from "react";

export const useChat = () => {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error("useChat must be used within a ChatProvider");

  return ctx;
};
