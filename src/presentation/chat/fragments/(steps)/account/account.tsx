"use client";
import { ScreenTag } from "@/src/components";

import styles from "./account.module.scss";
import { useApp } from "@/src/hooks/app/useApp.hook";

const AccountComponent = () => {
  const { setStepScreen } = useApp();

  return (
    <ScreenTag
      title="Edit Information"
      onBack={() => setStepScreen("preferences")}
    >
      <section className={styles.accountContainer}>editi</section>
    </ScreenTag>
  );
};

export default AccountComponent;
