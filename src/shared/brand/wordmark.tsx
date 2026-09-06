import Link from "next/link";
import styles from "./wordmark.module.css";

export function Wordmark({ href = "/" }: { href?: string }) {
  return (
    <Link aria-label="Then and Now home" className={styles.wordmark} href={href}>
      <span className={styles.then}>Then</span>
      <span aria-hidden="true" className={styles.ampersand}>
        &amp;
      </span>
      <span className={styles.now}>Now</span>
    </Link>
  );
}
