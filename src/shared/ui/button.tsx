import type { ButtonHTMLAttributes } from "react";
import styles from "./ui.module.css";

type ButtonVariant = "primary" | "secondary" | "quiet" | "danger";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  loading?: boolean;
  variant?: ButtonVariant;
};

const variantClass: Record<ButtonVariant, string | undefined> = {
  primary: undefined,
  secondary: styles.buttonSecondary,
  quiet: styles.buttonQuiet,
  danger: styles.buttonDanger,
};

export function Button({
  children,
  className,
  disabled,
  loading = false,
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  const classes = [
    styles.button,
    variantClass[variant],
    loading && styles.buttonBusy,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button className={classes} disabled={disabled || loading} type={type} {...props}>
      {loading ? <span aria-hidden="true" className={styles.spinner} /> : null}
      <span>{children}</span>
    </button>
  );
}
