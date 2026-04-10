"use client";
import { ChatContext, Message } from "@/src/contexts";
import { useEffect, useState } from "react";

export const ChatProvider = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = async (text: string) => {
    const userMessage: Message = {
      id: crypto.randomUUID(),
      type: "request",
      content: text,
    };

    setMessages((prev) => [...prev, userMessage]);

    // placeholder da IA
    const tempId = crypto.randomUUID();

    setMessages((prev) => [
      ...prev,
      {
        id: tempId,
        type: "response",
        content: "Pensando...",
      },
    ]);

    // 🔥 chamada API
    const res = await fetch("/api/chat", {
      method: "POST",
      body: JSON.stringify({ message: text }),
    });

    const data = await res.json();

    setMessages((prev) =>
      prev.map((msg) =>
        msg.id === tempId ? { ...msg, content: data.content } : msg,
      ),
    );
  };

  return (
    <ChatContext.Provider value={{ messages, sendMessage }}>
      {children}
    </ChatContext.Provider>
  );
};
