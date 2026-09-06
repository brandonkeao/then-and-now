import { PageHeader } from "@/shared/ui/page-header";
import { InlineMessage } from "@/shared/ui/inline-message";
import styles from "../../app-shell.module.css";

export default function PrivacySettingsPage() {
  return (
    <main className={styles.main} id="main-content">
      <PageHeader
        description="Account data and shared relationship content have separate controls and consequences."
        eyebrow="You · Privacy and data"
        title="Your information"
      />
      <section className={`${styles.section} ${styles.ritual}`}>
        <InlineMessage title="Private to the two members">
          <p>
            Then &amp; Now does not place private content in general analytics, logs,
            invitation-link metadata, or public product examples.
          </p>
        </InlineMessage>
      </section>
    </main>
  );
}
