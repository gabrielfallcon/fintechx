import { FiChevronLeft } from "react-icons/fi";
import styles from "./screen.module.scss";
import { ReactNode } from "react";
import clsx from "clsx";

type Props = {
  title: string;
  children: ReactNode;
  onBack?: () => void;
  rightIcon?: ReactNode;
  onRightClick?: () => void;
};

const ScreenComponent = ({
  title,
  children,
  onBack,
  rightIcon,
  onRightClick,
}: Props) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.iconBack}>
          <FiChevronLeft size={28} onClick={onBack} />
        </div>

        <h1 className={styles.title}>{title}</h1>

        <span
          className={clsx(rightIcon ? styles.showIcon : null, styles.menu)}
          onClick={onRightClick}
        >
          {rightIcon}
        </span>
      </header>

      <main className={styles.content}>{children}</main>
    </div>
  );
};

export default ScreenComponent;
