import { redirect } from "next/navigation";
import { getCurrentUser } from "@/modules/identity/data/get-current-user";
import { getProfile } from "@/modules/identity/data/get-profile";
import { AppHeader } from "@/shared/shell/app-header";

export const dynamic = "force-dynamic";

export default async function ProductLayout({ children }: { children: React.ReactNode }) {
  const user = await getCurrentUser();
  if (!user) redirect("/sign-in?next=/app");

  const profile = await getProfile(user.id);

  return (
    <>
      <AppHeader displayName={profile?.display_name || undefined} />
      {children}
    </>
  );
}
