"use client";

import { InputHTMLAttributes } from "react";
import styles from "./input-field.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
}

const InputComponent = ({ iconLeft, iconRight, ...props }: InputProps) => {
  return (
    <div className={styles.chatInput}>
      {iconLeft && <div className={styles.iconLeft}>{iconLeft}</div>}

      <input className={styles.input} {...props} />

      {iconRight && <div className={styles.iconRight}>{iconRight}</div>}
    </div>
  );
};

export default InputComponent;
