import { PageHeader } from "@/shared/ui/page-header";
import { InlineMessage } from "@/shared/ui/inline-message";
import styles from "../../app-shell.module.css";

export default function RelationshipSettingsPage() {
  return (
    <main className={styles.main} id="main-content">
      <PageHeader
        description="Both people remain peers. Either person can pause, leave, or ask for help."
        eyebrow="You · Relationship"
        title="Shared rhythm"
      />
      <section className={`${styles.section} ${styles.ritual}`}>
        <InlineMessage title="No relationship yet" tone="warning">
          <p>Cadence and relationship controls appear after an invitation is accepted.</p>
        </InlineMessage>
      </section>
    </main>
  );
}
