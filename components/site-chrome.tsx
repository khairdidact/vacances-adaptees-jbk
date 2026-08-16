"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
  ["/publics", "Publics"], ["/lieux", "Lieux"], ["/activites", "Activités"],
  ["/gestion-groupes", "Groupes"], ["/administration", "Administration"], ["/formation", "Formation"],
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <Link className="brand" href="/" onClick={() => setOpen(false)} aria-label="Accueil — Vacances adaptées">
        <span className="brand-mark" aria-hidden="true">VA</span>
        <span>Vacances<br /><strong>adaptées</strong></span>
      </Link>
      <button className="menu-toggle" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen(!open)}>
        <span className="sr-only">{open ? "Fermer" : "Ouvrir"} le menu</span>
        <i /><i />
      </button>
      <nav id="navigation" className={open ? "nav-open" : ""} aria-label="Navigation principale">
        {nav.map(([href, label]) => <Link key={href} className={pathname === href ? "active" : ""} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>
      <Link className="header-cta" href="/formation">Faire le test <span aria-hidden="true">↗</span></Link>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand"><span className="brand-mark">VA</span><p><strong>Vacances adaptées</strong><br />Un guide vivant par Jean-Baptiste Khair</p></div>
      <p className="footer-note">Contenu pédagogique généraliste · Les informations juridiques sont à vérifier pour chaque projet et territoire.</p>
      <div className="footer-links"><Link href="/administration">Cadre juridique</Link><Link href="/formation">Test de formation</Link><a href="#contenu">Haut de page ↑</a></div>
    </footer>
  );
}
