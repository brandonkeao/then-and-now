import { redirect } from "next/navigation";
import { getCurrentUser } from "@/modules/identity/data/get-current-user";
import { getProfile } from "@/modules/identity/data/get-profile";
import { ProfileForm } from "@/modules/identity/components/profile-form";
import { PageHeader } from "@/shared/ui/page-header";
import styles from "../../app-shell.module.css";

export default async function AccountSettingsPage() {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in?next=/app/you/account");
  const profile = await getProfile(user.id);

  return (
    <main className={styles.main} id="main-content">
      <PageHeader
        description="The name and timezone used across your private Exchanges."
        eyebrow="You · Account"
        title="Account details"
      />
      <section className={styles.profilePanel}>
        <ProfileForm
          adultAcknowledged={Boolean(profile?.adult_acknowledged_at)}
          defaultName={profile?.display_name || undefined}
          defaultTimezone={profile?.timezone || "America/Denver"}
          timezones={Intl.supportedValuesOf("timeZone")}
        />
      </section>
    </main>
  );
}
