"use client";

import { useActionState } from "react";
import { requestSignInCode, type AuthActionState } from "../actions/auth";
import type { AuthIntent } from "../lib/auth-intent";
import { Button } from "@/shared/ui/button";
import { fieldDescriptionIds, FormField } from "@/shared/ui/form-field";
import { InlineMessage } from "@/shared/ui/inline-message";
import { Input } from "@/shared/ui/input";
import styles from "./auth-form.module.css";

const initialState: AuthActionState = {};

export function SignInForm({
  destination = "/app",
  intent,
}: {
  destination?: string;
  intent: AuthIntent;
}) {
  const [state, action, pending] = useActionState(requestSignInCode, initialState);
  const emailError = state.fieldErrors?.email;

  return (
    <form action={action} className={styles.form} noValidate>
      {state.formError ? (
        <InlineMessage title="Code not sent" tone="error">
          <p>{state.formError}</p>
        </InlineMessage>
      ) : null}
      <input name="intent" type="hidden" value={intent} />
      <input name="next" type="hidden" value={destination} />
      <FormField
        error={emailError}
        hint="Use the address where you want to receive private Exchange invitations."
        htmlFor="email"
        label="Email address"
      >
        <Input
          aria-describedby={fieldDescriptionIds(
            "email",
            "Use the address where you want to receive private Exchange invitations.",
            emailError,
          )}
          aria-invalid={Boolean(emailError)}
          autoComplete="email"
          autoFocus
          id="email"
          inputMode="email"
          name="email"
          placeholder="you@example.com"
          required
          type="email"
        />
      </FormField>
      <Button loading={pending} type="submit">
        {pending
          ? "Sending code"
          : intent === "signup"
            ? "Create account with email"
            : "Email me a sign-in code"}
      </Button>
    </form>
  );
}
