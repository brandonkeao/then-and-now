"use client";

import * as DialogPrimitive from "@radix-ui/react-dialog";
import type { ReactNode } from "react";
import { Button } from "./button";
import styles from "./ui.module.css";

type DialogProps = {
  cancelLabel?: string;
  children: ReactNode;
  confirmLabel: string;
  description: string;
  onConfirm?: () => void;
  title: string;
  triggerLabel: string;
};

export function Dialog({
  cancelLabel = "Cancel",
  children,
  confirmLabel,
  description,
  onConfirm,
  title,
  triggerLabel,
}: DialogProps) {
  return (
    <DialogPrimitive.Root>
      <DialogPrimitive.Trigger asChild>
        <Button variant="secondary">{triggerLabel}</Button>
      </DialogPrimitive.Trigger>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay className={styles.dialogOverlay} />
        <DialogPrimitive.Content className={styles.dialogContent}>
          <DialogPrimitive.Title className={styles.dialogTitle}>
            {title}
          </DialogPrimitive.Title>
          <DialogPrimitive.Description className={styles.dialogDescription}>
            {description}
          </DialogPrimitive.Description>
          {children}
          <div className={styles.dialogActions}>
            <DialogPrimitive.Close asChild>
              <Button variant="quiet">{cancelLabel}</Button>
            </DialogPrimitive.Close>
            <DialogPrimitive.Close asChild>
              <Button onClick={onConfirm}>{confirmLabel}</Button>
            </DialogPrimitive.Close>
          </div>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}
