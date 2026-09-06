import { PageHeader } from "@/shared/ui/page-header";
import { InlineMessage } from "@/shared/ui/inline-message";
import styles from "../../app-shell.module.css";

export default function NotificationSettingsPage() {
  return (
    <main className={styles.main} id="main-content">
      <PageHeader
        description="Control gentle reminders without turning the Exchange into a deadline."
        eyebrow="You · Notifications"
        title="Reminders"
      />
      <section className={`${styles.section} ${styles.ritual}`}>
        <InlineMessage title="Defaults are quiet">
          <p>
            Essential invitation and reveal emails will be available first. Reminder
            timing and quiet hours arrive with the complete Exchange loop.
          </p>
        </InlineMessage>
      </section>
    </main>
  );
}
