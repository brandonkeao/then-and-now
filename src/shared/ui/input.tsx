import { forwardRef, type InputHTMLAttributes, type SelectHTMLAttributes } from "react";
import styles from "./ui.module.css";

export const Input = forwardRef<HTMLInputElement, InputHTMLAttributes<HTMLInputElement>>(
  function Input({ className, ...props }, ref) {
    return (
      <input
        className={[styles.input, className].filter(Boolean).join(" ")}
        ref={ref}
        {...props}
      />
    );
  },
);

export const Select = forwardRef<
  HTMLSelectElement,
  SelectHTMLAttributes<HTMLSelectElement>
>(function Select({ className, ...props }, ref) {
  return (
    <select
      className={[styles.select, className].filter(Boolean).join(" ")}
      ref={ref}
      {...props}
    />
  );
});
