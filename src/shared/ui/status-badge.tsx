import type { ReactNode } from "react";
import styles from "./ui.module.css";

type StatusTone = "neutral" | "success" | "warning" | "accent";

const toneClass: Record<StatusTone, string | undefined> = {
  neutral: undefined,
  success: styles.badgeSuccess,
  warning: styles.badgeWarning,
  accent: styles.badgeAccent,
};

export function StatusBadge({
  children,
  tone = "neutral",
}: {
  children: ReactNode;
  tone?: StatusTone;
}) {
  return (
    <span className={[styles.badge, toneClass[tone]].filter(Boolean).join(" ")}>
      {children}
    </span>
  );
}
