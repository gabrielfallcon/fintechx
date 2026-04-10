"use client";
import { ScreenTag } from "@/src/components";
import {
  FiChevronRight,
  FiHelpCircle,
  FiLock,
  FiLogOut,
  FiSettings,
} from "react-icons/fi";

import styles from "./profile.module.scss";
import { useApp } from "@/src/hooks/app/useApp.hook";
import { clsx } from "clsx";

const ProfileComponent = () => {
  const { setStepScreen } = useApp();

  return (
    <ScreenTag title="Profile" onBack={() => setStepScreen("chat")}>
      <section className={styles.profileContainer}>
        <div className={styles.profileInfo}>
          <img src="/images/png/rocket.png" alt="" />

          <div className={styles.profileData}>
            <h3 className={styles.name}>Tom Hilton</h3>
            <span>tomhill@gmail.com</span>
          </div>
        </div>

        <div className={styles.listMenu}>
          <div
            className={styles.item}
            onClick={() => setStepScreen("preferences")}
          >
            <FiSettings size={28} />

            <p>Preferences</p>

            <FiChevronRight
              size={24}
              color="#A7A7AB"
              className={styles.icEnter}
            />
          </div>

          <div className={clsx(styles.item, styles.security)}>
            <div>
              <FiLock size={28} />

              <p>Account Security</p>

              <FiChevronRight
                size={24}
                color="#A7A7AB"
                className={styles.icEnter}
              />
            </div>

            <span>progress</span>

            <span>Span</span>
          </div>

          <div
            className={styles.item}
            onClick={() => setStepScreen("preferences")}
          >
            <FiHelpCircle size={28} />

            <p>Customer Support</p>

            <FiChevronRight
              size={24}
              color="#A7A7AB"
              className={styles.icEnter}
            />
          </div>

          <div className={styles.item}>
            <FiLogOut size={28} />

            <p>Logout</p>
          </div>
        </div>
      </section>
    </ScreenTag>
  );
};

export default ProfileComponent;
