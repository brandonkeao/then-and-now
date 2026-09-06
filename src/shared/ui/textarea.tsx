import { forwardRef, type TextareaHTMLAttributes } from "react";
import styles from "./ui.module.css";

export const Textarea = forwardRef<
  HTMLTextAreaElement,
  TextareaHTMLAttributes<HTMLTextAreaElement>
>(function Textarea({ className, ...props }, ref) {
  return (
    <textarea
      className={[styles.textarea, className].filter(Boolean).join(" ")}
      ref={ref}
      {...props}
    />
  );
});
