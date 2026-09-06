"use server";

import { redirect } from "next/navigation";
import { z } from "zod";
import { isSupabaseConfigured } from "@/shared/config/env";
import { createClient } from "@/shared/supabase/server";
import {
  clearPendingAuthContext,
  getPendingAuthContext,
  setPendingAuthContext,
} from "../lib/auth-context";
import { authIntents, shouldCreateUserFor } from "../lib/auth-intent";
import { safeAppPath } from "../lib/auth-path";

export type AuthActionState = {
  fieldErrors?: { code?: string; email?: string };
  formError?: string;
};

const emailSchema = z.object({
  email: z.string().trim().email("Enter a valid email address."),
  intent: z.enum(authIntents),
  next: z.string().optional(),
});

const codeSchema = z.object({
  code: z
    .string()
    .trim()
    .regex(/^\d{6,8}$/, "Enter the code from your email."),
});

export async function requestSignInCode(
  _previousState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  if (!isSupabaseConfigured()) {
    return {
      formError:
        "Email sign-in is not connected in this environment yet. Configure the Supabase variables and try again.",
    };
  }

  const result = emailSchema.safeParse({
    email: formData.get("email"),
    intent: formData.get("intent"),
    next: formData.get("next"),
  });

  if (!result.success) {
    const emailIssue = result.error.issues.find((issue) => issue.path[0] === "email");
    return emailIssue
      ? { fieldErrors: { email: emailIssue.message } }
      : { formError: "Choose sign in or create account and try again." };
  }

  const destination = safeAppPath(result.data.next);
  const supabase = await createClient();
  const { error } = await supabase.auth.signInWithOtp({
    email: result.data.email,
    options: { shouldCreateUser: shouldCreateUserFor(result.data.intent) },
  });

  if (error) {
    return {
      formError:
        "We could not send a code. Check the address, wait a moment, and try again.",
    };
  }

  await setPendingAuthContext(result.data.email, destination);
  redirect("/verify");
}

export async function verifySignInCode(
  _previousState: AuthActionState,
  formData: FormData,
): Promise<AuthActionState> {
  if (!isSupabaseConfigured()) {
    return { formError: "Email sign-in is not connected in this environment yet." };
  }

  const result = codeSchema.safeParse({ code: formData.get("code") });
  if (!result.success) {
    return { fieldErrors: { code: result.error.issues[0]?.message } };
  }

  const context = await getPendingAuthContext();
  if (!context.email) {
    return {
      formError:
        "This sign-in request has expired. Return to sign in and request a new code.",
    };
  }

  const supabase = await createClient();
  const { error } = await supabase.auth.verifyOtp({
    email: context.email,
    token: result.data.code,
    type: "email",
  });

  if (error) {
    return {
      formError:
        "That code is expired or incorrect. Request a new code if the problem continues.",
    };
  }

  await clearPendingAuthContext();
  redirect(context.destination);
}

export async function signOut() {
  if (isSupabaseConfigured()) {
    const supabase = await createClient();
    await supabase.auth.signOut();
  }
  redirect("/sign-in");
}
