"use client";

import { useEffect, useState } from "react";

const groups = [
  { title: "Cadre & projet", tasks: ["Vérifier si le séjour entre dans le champ VAO", "Contrôler validité et périmètre de l’agrément", "Définir public, projet, calendrier, prix et conditions", "Vérifier assurance RC et rapatriement", "Identifier les règles tourisme applicables"] },
  { title: "Deux mois avant", tasks: ["Déclarer le séjour au(x) préfet(s) concerné(s)", "Joindre la copie de l’agrément", "Sécuriser contrats d’hébergement et de transport", "Constituer l’équipe et vérifier compétences", "Tracer la vérification du bulletin n° 3 selon le cadre applicable"] },
  { title: "Dossiers individuels", tasks: ["Recueillir choix, besoins et habitudes utiles", "Vérifier prescriptions et modalités de traitement", "Collecter contacts et conduites à tenir", "Formaliser argent personnel et autorisations utiles", "Informer sur l’usage et la protection des données"] },
  { title: "Huit jours avant", tasks: ["Confirmer le déroulement du séjour", "Actualiser liste, équipe, lieux et transports", "Partager les informations strictement nécessaires", "Tester téléphones, astreinte et numéros de recours", "Faire la revue finale évacuation / rapatriement"] },
  { title: "Pendant & après", tasks: ["Tenir main courante et traçabilités utiles", "Signaler sans délai tout événement grave", "Informer le préfet de région ayant délivré l’agrément", "Organiser retour et transmission à la personne", "Archiver, supprimer et produire le bilan annuel"] },
];
const all = groups.flatMap(g => g.tasks);

export function AdminChecklist() {
  const [done, setDone] = useState<string[]>([]);
  useEffect(() => { try { setDone(JSON.parse(localStorage.getItem("vao-checklist") || "[]")); } catch {} }, []);
  function toggle(task: string) { const next = done.includes(task) ? done.filter(x => x !== task) : [...done, task]; setDone(next); localStorage.setItem("vao-checklist", JSON.stringify(next)); }
  const percent = Math.round(done.length / all.length * 100);
  return (
    <div className="admin-tool">
      <div className="progress-panel"><div><p>Progression locale</p><strong>{percent}%</strong></div><div className="progress-track"><i style={{ width: `${percent}%` }} /></div><span>{done.length} / {all.length} repères cochés</span><button onClick={() => { setDone([]); localStorage.removeItem("vao-checklist"); }}>Réinitialiser</button><button onClick={() => window.print()}>Imprimer</button></div>
      <div className="check-groups">{groups.map((group, i) => <section key={group.title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{group.title}</h3>{group.tasks.map(task => <label key={task}><input type="checkbox" checked={done.includes(task)} onChange={() => toggle(task)} /><i />{task}</label>)}</section>)}</div>
      <p className="tool-note">Les cases restent uniquement dans ce navigateur. Cette liste est un support de préparation, pas une preuve de conformité ni un avis juridique.</p>
    </div>
  );
}
