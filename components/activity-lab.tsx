"use client";

import { useMemo, useState } from "react";

const activities = [
  { icon: "♒", title: "Baignade & eau", family: "bouger", energy: "moyenne", setting: "dehors", sensory: "fort", tip: "Repérage du bassin, température, vestiaires, profondeur, surveillance, flottaison et entrée progressive." },
  { icon: "⌁", title: "Balade nature", family: "explorer", energy: "douce", setting: "dehors", sensory: "doux", tip: "Distance annoncée, points de pause, binômes, météo, chaussures, trace du parcours et alternative courte." },
  { icon: "◉", title: "Visite de ville", family: "explorer", energy: "moyenne", setting: "dehors", sensory: "fort", tip: "Deux objectifs maximum, photos des étapes, temps libre encadré, toilettes repérées et rendez-vous clair." },
  { icon: "♫", title: "Concert & danse", family: "partager", energy: "haute", setting: "dedans", sensory: "fort", tip: "Volume, foule, place en bordure, casque, durée fractionnée et sortie possible sans perdre le groupe." },
  { icon: "✦", title: "Arts plastiques", family: "creer", energy: "douce", setting: "dedans", sensory: "doux", tip: "Modèle optionnel, gestes démontrés, outils préhensi­bles, protections et valorisation sans comparaison." },
  { icon: "♨", title: "Cuisine", family: "creer", energy: "moyenne", setting: "dedans", sensory: "fort", tip: "Rôles gradués, recettes imagées, allergies, chaleur, hygiène et dégustation jamais obligatoire." },
  { icon: "△", title: "Randonnée", family: "bouger", energy: "haute", setting: "dehors", sensory: "doux", tip: "Profil réel du chemin, rythme du plus lent, eau, soleil, douleur, demi-tour possible et transport de repli." },
  { icon: "◎", title: "Jeux coopératifs", family: "partager", energy: "moyenne", setting: "dedans", sensory: "doux", tip: "Règles visibles, manche d’essai, équipes équilibrées, rôles sans élimination et droit d’observer d’abord." },
  { icon: "▣", title: "Musée & patrimoine", family: "explorer", energy: "douce", setting: "dedans", sensory: "doux", tip: "Sélection de quelques œuvres, médiation concrète, assises, tarif groupe et créneau peu fréquenté." },
  { icon: "☀", title: "Marché local", family: "explorer", energy: "moyenne", setting: "dehors", sensory: "fort", tip: "Budget individuel, liste ou mission, foule, conservation des achats et point de ralliement visible." },
  { icon: "♟", title: "Jeux de société", family: "partager", energy: "douce", setting: "dedans", sensory: "doux", tip: "Choisir selon attention et motricité, simplifier sans dénaturer, jouer en binôme et éviter l’infantilisation." },
  { icon: "✺", title: "Jardin & ferme", family: "creer", energy: "moyenne", setting: "dehors", sensory: "fort", tip: "Contact choisi avec animaux et matières, lavage des mains, allergies, tâches concrètes et rythme saisonnier." },
  { icon: "◒", title: "Cinéma", family: "partager", energy: "douce", setting: "dedans", sensory: "fort", tip: "Synopsis accessible, durée, obscurité, volume, placement, collation et sortie anticipée possible." },
  { icon: "⚐", title: "Sport adapté", family: "bouger", energy: "haute", setting: "dehors", sensory: "doux", tip: "Encadrement qualifié si requis, essai du matériel, objectifs personnels, échauffement et signes de fatigue." },
  { icon: "☕", title: "Café & restaurant", family: "partager", energy: "douce", setting: "dedans", sensory: "fort", tip: "Carte anticipée, photos, budget, attente, table calme, textures alimentaires et paiement choisi." },
  { icon: "✎", title: "Carnet de voyage", family: "creer", energy: "douce", setting: "dedans", sensory: "doux", tip: "Photos, tickets, collage, dictée à un tiers ou audio : chacun choisit sa manière de laisser une trace." },
  { icon: "⛵", title: "Nautisme", family: "bouger", energy: "haute", setting: "dehors", sensory: "fort", tip: "Prestataire compétent, météo, gilet, transfert, compréhension des consignes et familiarisation à terre." },
  { icon: "☾", title: "Soirée calme", family: "partager", energy: "douce", setting: "dedans", sensory: "doux", tip: "Plusieurs coins, lumière modulée, tisane, musique choisie, jeu court et possibilité de se coucher avant." },
];

export function ActivityLab() {
  const [family, setFamily] = useState("toutes");
  const [energy, setEnergy] = useState("toutes");
  const [setting, setSetting] = useState("tous");
  const [surprise, setSurprise] = useState<string | null>(null);
  const filtered = useMemo(() => activities.filter(a => (family === "toutes" || a.family === family) && (energy === "toutes" || a.energy === energy) && (setting === "tous" || a.setting === setting)), [family, energy, setting]);
  function pick() { if (filtered.length) setSurprise(filtered[Math.floor(Math.random() * filtered.length)].title); }
  return (
    <div className="activity-lab">
      <div className="filter-bar">
        <label>Intention<select value={family} onChange={e => setFamily(e.target.value)}><option value="toutes">Toutes</option><option value="bouger">Bouger</option><option value="explorer">Explorer</option><option value="creer">Créer</option><option value="partager">Partager</option></select></label>
        <label>Énergie<select value={energy} onChange={e => setEnergy(e.target.value)}><option value="toutes">Toutes</option><option value="douce">Douce</option><option value="moyenne">Moyenne</option><option value="haute">Haute</option></select></label>
        <label>Cadre<select value={setting} onChange={e => setSetting(e.target.value)}><option value="tous">Dedans & dehors</option><option value="dedans">Dedans</option><option value="dehors">Dehors</option></select></label>
        <button onClick={pick}>Idée surprise ✦</button>
      </div>
      {surprise && <p className="surprise" aria-live="polite">À explorer : <strong>{surprise}</strong> — ouvrez sa carte ci-dessous.</p>}
      <p className="result-count"><strong>{filtered.length}</strong> activités correspondent</p>
      <div className="activity-grid">{filtered.map(a => <details className={surprise === a.title ? "highlight" : ""} key={a.title}><summary><span>{a.icon}</span><div><h3>{a.title}</h3><p>{a.energy} · {a.setting} · sensoriel {a.sensory}</p></div><b>+</b></summary><p>{a.tip}</p></details>)}</div>
    </div>
  );
}
