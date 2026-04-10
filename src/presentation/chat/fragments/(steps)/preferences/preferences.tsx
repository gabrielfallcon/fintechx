"use client";
import { ScreenTag } from "@/src/components";
import {
  FiCreditCard,
  FiEye,
  FiPenTool,
  FiSettings,
  FiUser,
} from "react-icons/fi";

import styles from "./preferences.module.scss";
import { useApp } from "@/src/hooks/app/useApp.hook";
import { clsx } from "clsx";

const PreferencesComponent = () => {
  const { setStepScreen } = useApp();

  return (
    <ScreenTag title="Preference" onBack={() => setStepScreen("profile")}>
      <section className={styles.preferencesContainer}>
        <div className={styles.listMenu}>
          <div
            className={clsx(styles.item)}
            onClick={() => setStepScreen("account")}
          >
            <div>
              <FiUser size={28} />

              <p>Account Information</p>
            </div>

            <span>Change your Account information</span>
          </div>

          <div className={clsx(styles.item)}>
            <div>
              <FiEye size={28} />

              <p>Password</p>
            </div>

            <span>Change your Password</span>
          </div>

          <div className={clsx(styles.item)}>
            <div>
              <FiCreditCard size={28} />

              <p>Payment Methods</p>
            </div>

            <span>Add Your Credit / Credit Cards</span>
          </div>

          <div
            className={clsx(styles.item)}
            onClick={() => setStepScreen("invite")}
          >
            <div>
              <FiPenTool size={28} />

              <p>Invite Your Friends</p>
            </div>

            <span>Get $3 For Each Invitation!</span>
          </div>

          <div className={clsx(styles.item)}>
            <div>
              <FiSettings size={28} />

              <p>Theme Colour</p>
            </div>

            <span>Change Your Theme Colour</span>
          </div>
        </div>
      </section>
    </ScreenTag>
  );
};

export default PreferencesComponent;
