import Link from "next/link";
import { Wordmark } from "@/shared/brand/wordmark";
import styles from "./page.module.css";

const steps = [
  {
    title: "Choose privately",
    description:
      "Each person chooses one book or film and explains why it matters. Neither choice is sent to the other person yet.",
  },
  {
    title: "Reveal together",
    description:
      "When both choices are locked, the pair is revealed at the same time. No one has to go first.",
  },
  {
    title: "Remember what changed",
    description:
      "Experience the other person’s choice at your own pace, reflect honestly, and preserve the exchange as a private Chapter.",
  },
];

export default function MarketingPage() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <Wordmark />
        <Link className={styles.headerAction} href="/sign-in">
          Sign in
        </Link>
      </header>
      <main className={styles.main} id="main-content">
        <section className={styles.hero}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>A private cultural exchange</p>
            <h1 className={styles.heroTitle}>
              Trade one story that explains who you are.
            </h1>
            <p className={styles.heroDescription}>
              Choose a book or film for someone you care about. Their choice stays sealed
              too. When both are ready, you discover them together.
            </p>
            <div className={styles.heroActions}>
              <Link className="button-link-primary" href="/sign-in">
                Start an Exchange
              </Link>
              <a className={styles.secondaryLink} href="#how-it-works">
                See how it works
              </a>
            </div>
          </div>
          <div
            aria-label="Two choices remain sealed until both people are ready"
            className={styles.pairedObject}
            role="img"
          >
            <div className={styles.sealedHalf}>
              <div aria-hidden="true" className={styles.seal}>
                Then
              </div>
              <p className={styles.sealMeta}>Choice 01 · Sealed</p>
            </div>
            <div className={styles.sealedHalf}>
              <div aria-hidden="true" className={styles.seal}>
                Now
              </div>
              <p className={styles.sealMeta}>Choice 02 · Sealed</p>
            </div>
          </div>
        </section>

        <section className={styles.mechanism} id="how-it-works">
          <p className={styles.sectionLabel}>The exchange</p>
          <h2 className={styles.sectionTitle}>One choice each. No one goes first.</h2>
          <div className={styles.steps}>
            {steps.map((step, index) => (
              <article className={styles.step} key={step.title}>
                <p className={styles.stepNumber}>0{index + 1}</p>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.promptSection}>
          <div className={styles.promptIntro}>
            <p className={styles.sectionLabel}>A place to begin</p>
            <h2 className={styles.sectionTitle}>
              The prompt gives both choices a shared purpose.
            </h2>
          </div>
          <div className={styles.prompt}>
            <blockquote>
              “Choose something that shaped how you see the world before I knew you.”
            </blockquote>
            <p>Reflective prompt · Each choice stays private until both are locked.</p>
          </div>
        </section>

        <section className={styles.privacy}>
          <div>
            <p className={styles.privacyLabel}>Private by construction</p>
            <h2>Sealed means absent—not blurred.</h2>
          </div>
          <div className={styles.privacyCopy}>
            <p>
              Your draft belongs to you. The other person cannot retrieve it before both
              choices are locked. After reveal, the Exchange remains private to the two of
              you.
            </p>
            <p>No public profiles, ratings, feeds, streaks, or relationship scores.</p>
          </div>
        </section>
      </main>
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
