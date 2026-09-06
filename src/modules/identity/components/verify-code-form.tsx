"use client";

import Link from "next/link";
import { useActionState } from "react";
import { verifySignInCode, type AuthActionState } from "../actions/auth";
import { Button } from "@/shared/ui/button";
import { fieldDescriptionIds, FormField } from "@/shared/ui/form-field";
import { InlineMessage } from "@/shared/ui/inline-message";
import { Input } from "@/shared/ui/input";
import styles from "./auth-form.module.css";

const initialState: AuthActionState = {};

export function VerifyCodeForm() {
  const [state, action, pending] = useActionState(verifySignInCode, initialState);
  const codeError = state.fieldErrors?.code;

  return (
    <form action={action} className={styles.form} noValidate>
      {state.formError ? (
        <InlineMessage title="Code not accepted" tone="error">
          <p>{state.formError}</p>
        </InlineMessage>
      ) : null}
      <FormField
        error={codeError}
        hint="The code expires shortly and can only be used once."
        htmlFor="code"
        label="Email code"
      >
        <Input
          aria-describedby={fieldDescriptionIds(
            "code",
            "The code expires shortly and can only be used once.",
            codeError,
          )}
          aria-invalid={Boolean(codeError)}
          autoComplete="one-time-code"
          autoFocus
          id="code"
          inputMode="numeric"
          maxLength={8}
          name="code"
          pattern="[0-9]*"
          required
        />
      </FormField>
      <div className={styles.actions}>
        <Button loading={pending} type="submit">
          {pending ? "Checking code" : "Open my Exchange"}
        </Button>
        <p className={styles.resend}>
          No code? <Link href="/sign-in">Request another</Link>
        </p>
      </div>
    </form>
  );
}
