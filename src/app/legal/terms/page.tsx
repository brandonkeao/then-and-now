import Link from "next/link";
import styles from "../legal.module.css";

export default function TermsPage() {
  return (
    <main className={styles.main} id="main-content">
      <Link className={styles.back} href="/">
        ← Then &amp; Now
      </Link>
      <h1>Terms for an early experiment.</h1>
      <p className={styles.status}>Draft for Alpha 0.2 · Not yet production terms</p>
      <p>
        Then &amp; Now is under active development and is not yet open for external use.
        The product is intended for adults aged 18 or older.
      </p>
      <h2>Participation is voluntary</h2>
      <p>
        Either person may decline, pause, or leave without explaining why. The product
        does not provide therapy, mediation, or professional advice.
      </p>
      <h2>Respectful use</h2>
      <p>
        Do not use an Exchange to threaten, harass, surveil, or pressure another person.
        Safety and reporting procedures will be complete before an external pilot begins.
      </p>
    </main>
  );
}
