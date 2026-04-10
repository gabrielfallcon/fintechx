"use client";
import { InputFieldTag, LogoIcon, ScreenTag } from "@/src/components";

import { useRouter } from "next/navigation";
import { WarningsTag } from "../..";
import { FiCopy, FiEdit, FiSend, FiShare } from "react-icons/fi";
import styles from "./chat.module.scss";
import { useApp } from "@/src/hooks/app/useApp.hook";
import { useState } from "react";
import { useChat } from "@/src/hooks/chat/useChat.hook";

const Chat = () => {
  const { messages } = useChat();

  return (
    <section className={styles.container}>
      {messages.map((msg) =>
        msg.type === "request" ? (
          <div className={styles.chatRequest} key={msg.id}>
            <div className={styles.info}>
              <img src="/images/png/rocket.png" alt="" />
              <span>{msg.content}</span>
            </div>

            <FiEdit size={20} color="#BDBDBD" />
          </div>
        ) : (
          <div key={msg.id} className={styles.chatResponse}>
            <div className={styles.header}>
              <LogoIcon />
              <div>
                <FiCopy size={20} color="#BDBDBD" />
                <FiShare size={20} color="#BDBDBD" />
              </div>
            </div>

            <span>{msg.content}</span>
          </div>
        ),
      )}
    </section>
  );
};

const ChatInput = ({ onSend }: { onSend: (text: string) => void }) => {
  const [text, setText] = useState<string>("");

  const handleSend = () => {
    if (!text.trim()) return;
    onSend(text);
    setText("");
  };

  return (
    <InputFieldTag
      value={text}
      onChange={(e) => setText(e.target.value)}
      placeholder="Send a message..."
      iconRight={<FiSend size={24} onClick={handleSend} />}
    />
  );
};

const ChatComponent = () => {
  const router = useRouter();
  const { setStepScreen } = useApp();
  const { sendMessage, messages } = useChat();

  return (
    <ScreenTag
      title="Health"
      rightIcon={"..."}
      onRightClick={() => setStepScreen("profile")}
      onBack={() => router.push("welcome")}
    >
      {messages.length === 0 ? <WarningsTag /> : <Chat />}

      <ChatInput onSend={sendMessage} />
    </ScreenTag>
  );
};

export default ChatComponent;
