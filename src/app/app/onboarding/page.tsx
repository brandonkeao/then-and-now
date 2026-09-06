import { redirect } from "next/navigation";
import { getCurrentUser } from "@/modules/identity/data/get-current-user";
import { getProfile } from "@/modules/identity/data/get-profile";
import { ProfileForm } from "@/modules/identity/components/profile-form";
import { PageHeader } from "@/shared/ui/page-header";
import styles from "../app-shell.module.css";

export default async function OnboardingPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in?next=/app/onboarding");

  const profile = await getProfile(user.id);
  const browserTimezone = profile?.timezone || "America/Denver";
  const timezones = Intl.supportedValuesOf("timeZone");

  return (
    <main className={styles.main} id="main-content">
      <PageHeader
        description="Just enough information to make invitations recognizable and reminders arrive at a respectful time."
        eyebrow="Your account"
        title="How should we know you?"
      />
      <section className={styles.profilePanel}>
        <ProfileForm
          adultAcknowledged={Boolean(profile?.adult_acknowledged_at)}
          defaultName={profile?.display_name || undefined}
          defaultTimezone={browserTimezone}
          timezones={timezones}
        />
      </section>
    </main>
  );
}
