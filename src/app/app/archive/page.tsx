import { PageHeader } from "@/shared/ui/page-header";
import { StatusBadge } from "@/shared/ui/status-badge";
import styles from "../app-shell.module.css";

export default function ArchivePage() {
  return (
    <main className={styles.main} id="main-content">
      <PageHeader
        description="Completed Exchanges become Chapters: a private record of what each person chose and what stayed with them."
        eyebrow="Archive"
        title="Your Chapters"
      />
      <section className={`${styles.section} ${styles.ritual}`}>
        <StatusBadge>Nothing archived yet</StatusBadge>
        <h2 className={styles.emptyQuestion}>
          The first Chapter begins when both reflections are shared.
        </h2>
        <p className={styles.copy}>
          This space will remain chronological and quiet—no ratings, rankings, or public
          history.
        </p>
      </section>
    </main>
  );
}
