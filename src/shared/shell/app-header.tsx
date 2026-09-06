"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "@/modules/identity/actions/auth";
import { Wordmark } from "@/shared/brand/wordmark";
import styles from "./app-header.module.css";

const destinations = [
  { href: "/app", label: "Exchange" },
  { href: "/app/archive", label: "Archive" },
  { href: "/app/you", label: "You" },
];

export function AppHeader({ displayName }: { displayName?: string }) {
  const pathname = usePathname();

  function isActive(href: string) {
    return href === "/app" ? pathname === href : pathname.startsWith(href);
  }

  const navigation = destinations.map(({ href, label }) => (
    <Link
      aria-current={isActive(href) ? "page" : undefined}
      className={[styles.link, isActive(href) && styles.linkActive]
        .filter(Boolean)
        .join(" ")}
      href={href}
      key={href}
    >
      {label}
    </Link>
  ));

  return (
    <>
      <header className={styles.header}>
        <Wordmark href="/app" />
        <span className={styles.context}>
          {displayName ? `${displayName} · Your Exchange` : "Your Exchange"}
        </span>
        <nav aria-label="Primary" className={styles.desktopNav}>
          {navigation}
          <form action={signOut} className={styles.signOut}>
            <button className={styles.signOutButton} type="submit">
              Sign out
            </button>
          </form>
        </nav>
      </header>
      <nav aria-label="Primary" className={styles.mobileNav}>
        {navigation}
      </nav>
    </>
  );
}
