import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Vacances adaptées — Jean-Baptiste Khair",
    template: "%s | Vacances adaptées",
  },
  description:
    "Ressources pratiques pour concevoir des séjours de vacances inclusifs, sûrs et désirables avec des adultes en situation de handicap mental.",
  other: { "codex-preview": "development" },
  icons: { icon: "/favicon.svg", shortcut: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr">
      <body>
        <a className="skip-link" href="#contenu">Aller au contenu</a>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
