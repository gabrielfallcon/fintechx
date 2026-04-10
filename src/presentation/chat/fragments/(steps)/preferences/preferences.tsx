"use client";
import { ScreenTag } from "@/src/components";
import {
  FiCreditCard,
  FiEye,
  FiMoon,
  FiPenTool,
  FiSettings,
  FiSun,
  FiUser,
} from "react-icons/fi";

import styles from "./preferences.module.scss";
import { useApp } from "@/src/hooks/app/useApp.hook";
import { clsx } from "clsx";
import { useTheme } from "next-themes";
import { useAppTheme } from "@/src/hooks/theme/useTheme.hook";

const PreferencesComponent = () => {
  const { setStepScreen } = useApp();
  const { theme, toggleTheme } = useAppTheme();

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

          <div className={clsx(styles.item)} onClick={toggleTheme}>
            <div>
              <FiSettings size={28} />

              <p>Theme Colour</p>

              {theme === "dark" ? (
                <FiSun className={styles.iconTheme} size={20} />
              ) : (
                <FiMoon className={styles.iconTheme} size={20} />
              )}
            </div>

            <span>Change Your Theme Colour</span>
          </div>
        </div>
      </section>
    </ScreenTag>
  );
};

export default PreferencesComponent;
