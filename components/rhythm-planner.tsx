"use client";

import { useState } from "react";

export function RhythmPlanner() {
  const [energy, setEnergy] = useState(3);
  const [weather, setWeather] = useState<"beau" | "pluie">("beau");
  const [choice, setChoice] = useState(true);
  const intense = energy >= 4;
  return (
    <div className="rhythm-planner">
      <div className="planner-controls">
        <label>Énergie observée du groupe <span>{energy}/5</span><input type="range" min="1" max="5" value={energy} onChange={e => setEnergy(Number(e.target.value))} /></label>
        <div><span>Météo</span><button className={weather === "beau" ? "active" : ""} onClick={() => setWeather("beau")}>☀ Soleil</button><button className={weather === "pluie" ? "active" : ""} onClick={() => setWeather("pluie")}>☂ Pluie</button></div>
        <label className="check-control"><input type="checkbox" checked={choice} onChange={e => setChoice(e.target.checked)} /> Conserver deux choix</label>
      </div>
      <div className="sample-day" aria-live="polite">
        <article><time>08:00–10:00</time><span className="pace-soft">Réveil échelonné</span><p>Petit-déjeuner souple, informations du jour et point individuel.</p></article>
        <article><time>10:30</time><span className={intense ? "pace-active" : "pace-soft"}>{intense ? (weather === "beau" ? "Grande sortie" : "Activité dynamique couverte") : (weather === "beau" ? "Balade courte" : "Atelier tranquille")}</span><p>{intense ? "Un défi principal avec pause et alternative." : "Une expérience accessible, sans accélérer artificiellement."}</p></article>
        <article><time>12:30–15:30</time><span className="pace-pause">Déjeuner + temps libre</span><p>Repos réel : chambre, dehors, musique ou lien social choisi.</p></article>
        <article><time>16:00</time><span className="pace-choice">{choice ? "Deux options" : "Proposition commune"}</span><p>{choice ? "Petit groupe en sortie / temps créatif au lieu de séjour." : "Activité collective courte avec plusieurs rôles."}</p></article>
        <article><time>Soirée</time><span className="pace-soft">Décision à 18 h</span><p>On confirme selon fatigue, envies et signaux observés — pas par inertie du programme.</p></article>
      </div>
    </div>
  );
}
