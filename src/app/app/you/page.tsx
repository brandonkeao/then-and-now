import Link from "next/link";
import { PageHeader } from "@/shared/ui/page-header";
import styles from "../app-shell.module.css";

const settings = [
  {
    href: "/app/you/account",
    title: "Account",
    description: "Name, email, timezone, and access.",
  },
  {
    href: "/app/you/notifications",
    title: "Notifications",
    description: "Reminders and quiet behavior.",
  },
  {
    href: "/app/you/relationship",
    title: "Relationship",
    description: "Cadence, pause, leave, and safety.",
  },
  {
    href: "/app/you/privacy",
    title: "Privacy and data",
    description: "Export, deletion, invites, and blocks.",
  },
];

export default function YouPage() {
  return (
    <main className={styles.main} id="main-content">
      <PageHeader
        description="Your personal settings stay separate from the relationship you share with someone else."
        eyebrow="You"
        title="Your settings"
      />
      <section aria-label="Settings sections" className={styles.settingsGrid}>
        {settings.map((setting) => (
          <Link className={styles.settingsItem} href={setting.href} key={setting.href}>
            <h2>{setting.title}</h2>
            <p>{setting.description}</p>
          </Link>
        ))}
      </section>
    </main>
  );
}
