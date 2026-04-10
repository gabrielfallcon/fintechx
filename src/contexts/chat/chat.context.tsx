import { createContext } from "react";

export type Message = {
  id: string;
  type: "request" | "response";
  content: string;
};

export type ChatContextType = {
  messages: Message[];
  sendMessage: (text: string) => Promise<void>;
};

export const ChatContext = createContext<ChatContextType | null>(null);
