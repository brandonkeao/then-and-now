import type { Metadata } from "next";
import { isSupabaseConfigured } from "@/shared/config/env";
import { SignInForm } from "@/modules/identity/components/sign-in-form";
import { InlineMessage } from "@/shared/ui/inline-message";
import styles from "../auth-shell.module.css";

export const metadata: Metadata = { title: "Sign in" };

export default async function SignInPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const params = await searchParams;
  const configured = isSupabaseConfigured();

  return (
    <main className={styles.main} id="main-content">
      <section className={styles.intro}>
        <p className={styles.eyebrow}>Your private Exchange</p>
        <h1 className={styles.title}>Come back to what you’re learning.</h1>
        <p className={styles.description}>
          We use a short-lived email code—no password to remember. Your choices remain
          private until both people lock theirs.
        </p>
        <div aria-hidden="true" className={styles.pairedRule}>
          <span />
          <span />
        </div>
      </section>
      <section aria-labelledby="sign-in-heading" className={styles.panel}>
        <h2 className={styles.panelTitle} id="sign-in-heading">
          Sign in or create an account
        </h2>
        <p className={styles.panelDescription}>
          One address is all we need to get started.
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
        <SignInForm destination={params.next} />
      </section>
    </main>
  );
}
