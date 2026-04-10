"use client";
import { LogoIcon, ScreenTag } from "@/src/components";

import { useRouter } from "next/navigation";
import { WarningsTag } from "../..";
import { FiCopy, FiEdit, FiShare } from "react-icons/fi";
import styles from "./chat.module.scss";
import { useApp } from "@/src/hooks/app/useApp.hook";

const Chat = () => {
  return (
    <section className={styles.container}>
      <div className={styles.chatRequest}>
        <div className={styles.info}>
          <img src="/images/png/rocket.png" alt="" />
          <span>Natural Foods for Cancer patients</span>
        </div>

        <FiEdit size={20} color="#BDBDBD" />
      </div>
      <div className={styles.chatResponse}>
        <div className={styles.header}>
          <LogoIcon />
          <div>
            <FiCopy size={20} color="#BDBDBD" />
            <FiShare size={20} color="#BDBDBD" />
          </div>
        </div>

        <span>
          A diet rich in natural foods can be beneficial for cancer patients.
          Here are some natural foods that you may consider: Leafy green
          vegetables - spinach, kale, collard greens, and others are packed with
          vitamins, minerals, and antioxidants that can help to boost the immune
          system and fight cancer.
        </span>
      </div>
    </section>
  );
};

const ChatComponent = () => {
  const router = useRouter();
  const { setStepScreen } = useApp();

  return (
    <ScreenTag
      title="Health"
      rightIcon={"..."}
      onRightClick={() => setStepScreen("profile")}
      onBack={() => router.push("welcome")}
    >
      {/* <WarningsTag /> */}
      <Chat />
    </ScreenTag>
  );
};

export default ChatComponent;
