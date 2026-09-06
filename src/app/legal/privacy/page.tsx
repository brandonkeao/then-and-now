import Link from "next/link";
import styles from "../legal.module.css";

export default function PrivacyPage() {
  return (
    <main className={styles.main} id="main-content">
      <Link className={styles.back} href="/">
        ← Then &amp; Now
      </Link>
      <h1>Privacy, in ordinary language.</h1>
      <p className={styles.status}>
        Draft for Alpha 0.2 · Not yet a production privacy notice
      </p>
      <p>
        Then &amp; Now is designed for private cultural Exchanges between two people.
        Draft choices, personal prefaces, and reflections are not public content.
      </p>
      <h2>What the product protects</h2>
      <p>
        One person cannot retrieve the other person’s contribution before both choices are
        locked. The database—not an animation or a blurred screen—owns that reveal
        boundary.
      </p>
      <h2>What stays out of general analytics</h2>
      <p>
        Email addresses, invitation codes, book or film titles, source links, prefaces,
        content notes, and reflections are excluded from product analytics and general
        logs.
      </p>
      <h2>Before external use</h2>
      <p>
        A complete notice covering providers, retention, export, deletion, and support
        access will replace this draft before any external pilot.
      </p>
    </main>
  );
}
