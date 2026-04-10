import { LogoIcon } from "../../icons";

import styles from "./loading.module.scss";

const LoadingComponent = () => {
  return (
    <section className={styles.loading}>
      <div className={styles.logo}>
        <LogoIcon />
      </div>

      <div className={styles.version}>
        <span>BrainBox</span>
        <p>Version 1.0</p>
      </div>
    </section>
  );
};

export default LoadingComponent;
