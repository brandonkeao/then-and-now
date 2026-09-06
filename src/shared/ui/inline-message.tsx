import type { ReactNode } from "react";
import styles from "./ui.module.css";

type MessageTone = "info" | "success" | "warning" | "error";

type InlineMessageProps = {
  children: ReactNode;
  title?: string;
  tone?: MessageTone;
};

const toneClass: Record<MessageTone, string | undefined> = {
  info: undefined,
  success: styles.messageSuccess,
  warning: styles.messageWarning,
  error: styles.messageError,
};

export function InlineMessage({ children, title, tone = "info" }: InlineMessageProps) {
  return (
    <div
      className={[styles.message, toneClass[tone]].filter(Boolean).join(" ")}
      role={tone === "error" ? "alert" : "status"}
    >
      <div>
        {title ? <p className={styles.messageTitle}>{title}</p> : null}
        <div className={styles.messageBody}>{children}</div>
      </div>
    </div>
  );
}
