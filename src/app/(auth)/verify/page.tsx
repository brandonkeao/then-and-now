import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { VerifyCodeForm } from "@/modules/identity/components/verify-code-form";
import { getPendingAuthContext } from "@/modules/identity/lib/auth-context";
import styles from "../auth-shell.module.css";

export const metadata: Metadata = { title: "Check your email" };

export default async function VerifyPage() {
  const { email } = await getPendingAuthContext();
  if (!email) redirect("/sign-in");

  return (
    <main className={styles.main} id="main-content">
      <section className={styles.intro}>
        <p className={styles.eyebrow}>One quiet step</p>
        <h1 className={styles.title}>Check your email.</h1>
        <p className={styles.description}>
          Enter the short code we sent. We keep the address private and never include it
          in product analytics.
        </p>
        <div aria-hidden="true" className={styles.pairedRule}>
          <span />
          <span />
        </div>
      </section>
      <section aria-labelledby="verify-heading" className={styles.panel}>
        <h2 className={styles.panelTitle} id="verify-heading">
          Enter your code
        </h2>
        <p className={styles.panelDescription}>Sent to {maskEmail(email)}</p>
        <VerifyCodeForm />
      </section>
    </main>
  );
}

function maskEmail(email: string) {
  const [name, domain] = email.split("@");
  if (!name || !domain) return "your email address";
  return `${name.slice(0, 1)}${"•".repeat(Math.min(Math.max(name.length - 1, 2), 6))}@${domain}`;
}
