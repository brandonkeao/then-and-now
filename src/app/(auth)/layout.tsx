import Link from "next/link";
import { Wordmark } from "@/shared/brand/wordmark";
import styles from "./auth-shell.module.css";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Wordmark />
        <Link href="/">About the Exchange</Link>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>A Brandon Keao experiment.</p>
        <nav aria-label="Legal" className={styles.footerLinks}>
          <Link href="/legal/privacy">Privacy</Link>
          <Link href="/legal/terms">Terms</Link>
        </nav>
      </footer>
    </div>
  );
}
