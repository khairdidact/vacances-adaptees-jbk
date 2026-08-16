"use client";

import { useMemo, useState } from "react";

const venues = [
  { name: "Gîte ou maison de groupe", type: "ordinaire", calm: true, collective: true, medical: false, note: "Privatisation, cuisine et rythme domestique ; vérifier chambres, escaliers, voisinage et renfort possible." },
  { name: "Village vacances", type: "ordinaire", calm: false, collective: true, medical: false, note: "Services et animations sur place ; anticiper foule, signalétique, files d’attente et espaces de retrait." },
  { name: "Hôtel ou auberge", type: "ordinaire", calm: false, collective: false, medical: false, note: "Séjour urbain ou itinérant ; négocier chambres proches, petit-déjeuner, clés et interlocuteur référent." },
  { name: "Camping aménagé", type: "ordinaire", calm: false, collective: true, medical: false, note: "Vie dehors et souplesse ; évaluer sanitaires, chaleur, bruit nocturne, repérage et fermeture du site." },
  { name: "Maison de vacances adaptée", type: "specialise", calm: true, collective: true, medical: true, note: "Matériel et espaces pensés pour l’accompagnement ; clarifier ce qui est fourni et la présence professionnelle réelle." },
  { name: "Centre spécialisé", type: "specialise", calm: true, collective: true, medical: true, note: "Équipement, protocoles et partenariats de soins ; préserver une ambiance de vacances, non institutionnelle." },
  { name: "Séjour en partenariat médico-social", type: "hybride", calm: true, collective: true, medical: true, note: "Lieu touristique + ressources locales/établissement partenaire ; formaliser rôles, horaires et urgences." },
  { name: "Location diffuse accompagnée", type: "hybride", calm: true, collective: false, medical: false, note: "Petits sous-groupes dans des logements ordinaires ; coordination d’équipe et continuité nocturne indispensables." },
];

export function VenueMatcher() {
  const [type, setType] = useState("tous");
  const [calm, setCalm] = useState(false);
  const [medical, setMedical] = useState(false);
  const result = useMemo(() => venues.filter(v => (type === "tous" || v.type === type) && (!calm || v.calm) && (!medical || v.medical)), [type, calm, medical]);
  return (
    <div className="matcher">
      <div className="matcher-controls">
        <label>Type d’accueil<select value={type} onChange={e => setType(e.target.value)}><option value="tous">Tous</option><option value="ordinaire">Banalisé</option><option value="specialise">Spécialisé</option><option value="hybride">Hybride</option></select></label>
        <label className="check-control"><input type="checkbox" checked={calm} onChange={e => setCalm(e.target.checked)} /> Environnement calme</label>
        <label className="check-control"><input type="checkbox" checked={medical} onChange={e => setMedical(e.target.checked)} /> Ressources renforcées</label>
      </div>
      <p className="result-count" aria-live="polite"><strong>{result.length}</strong> pistes à approfondir</p>
      <div className="matcher-results">{result.map(v => <article key={v.name}><span>{v.type === "ordinaire" ? "Accueil banalisé" : v.type === "specialise" ? "Accueil spécialisé" : "Solution hybride"}</span><h3>{v.name}</h3><p>{v.note}</p></article>)}</div>
    </div>
  );
}
