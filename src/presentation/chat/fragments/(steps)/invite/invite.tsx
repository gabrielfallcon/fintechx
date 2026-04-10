"use client";
import { GiftIcon, ScreenTag } from "@/src/components";

import styles from "./invite.module.scss";
import { useApp } from "@/src/hooks/app/useApp.hook";
import { FiCopy } from "react-icons/fi";

const InviteComponent = () => {
  const { setStepScreen } = useApp();

  return (
    <ScreenTag
      title="invite Friends"
      onBack={() => setStepScreen("preferences")}
    >
      <section className={styles.inviteContainer}>
        <GiftIcon />

        <span className={styles.refer}>Refer A Friend</span>

        <p className={styles.infoGift}>
          Share Your Promo Code & Get $3 For Each Friend
        </p>

        <div className={styles.btnCopy}>
          BrainAiPartnerMR
          <FiCopy size={24} />
        </div>
      </section>
    </ScreenTag>
  );
};

export default InviteComponent;
