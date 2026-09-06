import type { Metadata } from "next";
import Link from "next/link";
import { isSupabaseConfigured } from "@/shared/config/env";
import { SignInForm } from "@/modules/identity/components/sign-in-form";
import { authIntentFrom } from "@/modules/identity/lib/auth-intent";
import { safeAppPath } from "@/modules/identity/lib/auth-path";
import { InlineMessage } from "@/shared/ui/inline-message";
import styles from "../auth-shell.module.css";

export const metadata: Metadata = { title: "Sign in" };

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; mode?: string; next?: string }>;
}) {
  const params = await searchParams;
  const configured = isSupabaseConfigured();
  const intent = authIntentFrom(params.mode);
  const destination = safeAppPath(params.next);
  const isSignUp = intent === "signup";
  const modeHref = (mode: "signin" | "signup") =>
    `/sign-in?mode=${mode}&next=${encodeURIComponent(destination)}`;

  return (
    <main className={styles.main} id="main-content">
      <section className={styles.intro}>
        <p className={styles.eyebrow}>
          {isSignUp ? "Begin a private Exchange" : "Your private Exchange"}
        </p>
        <h1 className={styles.title}>
          {isSignUp
            ? "Make room for a story worth keeping."
            : "Come back to what you’re learning."}
        </h1>
        <p className={styles.description}>
          {isSignUp
            ? "Create an account with a short-lived email code. Then invite someone you care about when you’re ready."
            : "Use a short-lived email code—no password to remember. Your choices remain private until both people lock theirs."}
        </p>
        <div aria-hidden="true" className={styles.pairedRule}>
          <span />
          <span />
        </div>
      </section>
      <section aria-labelledby="sign-in-heading" className={styles.panel}>
        <nav aria-label="Account access" className={styles.modeNav}>
          <Link
            aria-current={isSignUp ? undefined : "page"}
            className={styles.modeLink}
            data-active={!isSignUp}
            href={modeHref("signin")}
          >
            Sign in
          </Link>
          <Link
            aria-current={isSignUp ? "page" : undefined}
            className={styles.modeLink}
            data-active={isSignUp}
            href={modeHref("signup")}
          >
            Create account
          </Link>
        </nav>
        <h2 className={styles.panelTitle} id="sign-in-heading">
          {isSignUp ? "Create your account" : "Sign in"}
        </h2>
        <p className={styles.panelDescription}>
          {isSignUp
            ? "One address is all we need to make your private space."
            : "Use the address connected to your private Exchange."}
        </p>
        {params.error ? (
          <InlineMessage title="Sign-in link not accepted" tone="error">
            <p>That link is expired or invalid. Request a new email code below.</p>
          </InlineMessage>
        ) : null}
        {!configured ? (
          <InlineMessage title="Local setup needed" tone="warning">
            <p>
              Authentication will become active when this environment is connected to
              Supabase.
            </p>
          </InlineMessage>
        ) : null}
        <SignInForm destination={destination} intent={intent} />
      </section>
    </main>
  );
}
