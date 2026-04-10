"use client";

import { ButtonHTMLAttributes } from "react";
import styles from "./button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  label: string;
}

const ButtonCompent = ({
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`
        ${styles.button}
        ${styles[variant]}
        ${styles[size]}
        ${fullWidth ? styles.fullWidth : ""}
      `}
      {...props}
    >
      {iconLeft && <span className={styles.icon}>{iconLeft}</span>}

      {label && <span className={styles.label}>{label}</span>}

      {iconRight && <span className={styles.icon}>{iconRight}</span>}
    </button>
  );
};

export default ButtonCompent;
