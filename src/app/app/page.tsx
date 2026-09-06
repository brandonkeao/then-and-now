import Link from "next/link";
import { redirect } from "next/navigation";
import { getCurrentUser } from "@/modules/identity/data/get-current-user";
import { getProfile } from "@/modules/identity/data/get-profile";
import { PageHeader } from "@/shared/ui/page-header";
import { StatusBadge } from "@/shared/ui/status-badge";
import { Button } from "@/shared/ui/button";
import styles from "./app-shell.module.css";

export default async function ExchangeHome() {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in?next=/app");

  const profile = await getProfile(user.id);
  if (!profile?.display_name || !profile.adult_acknowledged_at)
    redirect("/app/onboarding");

  return (
    <main className={styles.main} id="main-content">
      <PageHeader
        description="A private place for two people to choose, reveal, and remember one meaningful story at a time."
        eyebrow="Exchange 01"
        title={`Welcome, ${profile.display_name}.`}
      />
      <section className={`${styles.section} ${styles.ritual}`}>
        <p className={styles.sectionLabel}>Your relationship</p>
        <StatusBadge tone="warning">Waiting to begin</StatusBadge>
        <h2 className={styles.emptyQuestion}>Who would you like to know differently?</h2>
        <p className={styles.copy}>
          Invite one person to trade a book or film. You will each choose privately, and
          neither choice is revealed until both are ready.
        </p>
        <div aria-label="Two empty sealed choices" className={styles.pairedPlaceholder}>
          <div className={styles.placeholderHalf}>Your choice will stay sealed here.</div>
          <div className={styles.placeholderHalf}>
            Their choice will stay sealed here.
          </div>
        </div>
        <div className={styles.actions}>
          <Button aria-describedby="invite-availability" disabled>
            Invite someone
          </Button>
          <Link href="/">Review how it works</Link>
        </div>
        <p className={styles.copy} id="invite-availability">
          Invitations are the next implementation slice. Your account and privacy
          foundation are already in place.
        </p>
      </section>
    </main>
  );
}
