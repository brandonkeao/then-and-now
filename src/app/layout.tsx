import type { Metadata } from "next";
import "@fontsource-variable/inter";
import "@fontsource/source-serif-4/400.css";
import "@fontsource/source-serif-4/600.css";
import "@fontsource/dm-serif-display/400.css";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: {
    default: "Then & Now",
    template: "%s · Then & Now",
  },
  description:
    "A private recurring ritual where two people trade one meaningful story at a time.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html data-scroll-behavior="smooth" lang="en">
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        {children}
      </body>
    </html>
  );
}
