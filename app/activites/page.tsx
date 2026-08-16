import type { Metadata } from "next";
import { ActivityLab } from "@/components/activity-lab";
import { NextPage, PageIntro, Tip } from "@/components/page-intro";

export const metadata: Metadata = { title: "Activités" };

const levers = [
  ["Avant", "Donner à voir", "Photo, objet, mini-vidéo, menu de choix, essai à blanc, durée et déroulé accessibles."],
  ["Entrée", "Permettre d’observer", "Arriver tôt, regarder avant de participer, identifier une personne-repère et une sortie."],
  ["Consigne", "Montrer le premier pas", "Une action à la fois, démonstration, support visuel, vocabulaire concret et vérification en situation."],
  ["Action", "Graduer l’engagement", "Faire seul, en binôme, avec guidage, sur une durée courte ou dans un rôle périphérique mais utile."],
  ["Rythme", "Inscrire des respirations", "Pauses annoncées, hydratation, alternance intensité/calme et attention aux signes de fatigue."],
  ["Fin", "Sortir dignement", "Possibilité de s’arrêter, activité parallèle, point de retour et valorisation de ce qui a été tenté."],
];

export default function ActivitesPage() {
  return (
    <main id="contenu">
      <PageIntro index="03" kicker="Activités" title="Adapter l’accès," italic="préserver le désir." lead="Une activité n’est pas adaptée une fois pour toutes. Elle le devient quand ses règles, son environnement et son accompagnement permettent à chacun de choisir une manière d’y prendre part." accent="sun" />
      <section className="content-section intro-grid"><div><p className="section-kicker">La règle d’or</p><h2>Adapter la situation, pas diminuer la personne.</h2></div><div><p className="lead-serif">Le bon objectif n’est pas que tout le monde fasse pareil. C’est que chacun puisse vivre une expérience qui a du sens.</p><p>On peut modifier le temps, le matériel, le nombre d’étapes, la taille du groupe, le niveau de bruit ou le rôle proposé. On évite de retirer d’emblée l’aventure, l’esthétique, le défi ou la dimension adulte.</p></div></section>

      <section className="content-section soft-bg">
        <div className="section-heading"><div><p className="section-kicker">Le catalogue intelligent</p><h2>Explorez selon l’énergie et l’intention.</h2></div><p>Filtrez les idées puis ouvrez chaque carte pour voir les points d’adaptation essentiels.</p></div>
        <ActivityLab />
      </section>

      <section className="content-section">
        <div className="section-heading"><div><p className="section-kicker">Les six leviers</p><h2>Concevoir une chaîne d’accessibilité.</h2></div><p>Une adaptation utile ne se limite pas au moment de l’activité : elle commence avant et prévoit la sortie.</p></div>
        <div className="lever-track">{levers.map(([time, title, text], i) => <article key={time}><span>{i + 1}</span><small>{time}</small><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="content-section dark-section">
        <div className="section-heading"><div><p className="section-kicker light">Le test des 8 questions</p><h2>Avant de confirmer une activité.</h2></div><p>Si une réponse manque, on appelle le prestataire ou l’on prépare une option.</p></div>
        <div className="question-cards"><article><b>01</b><p>Qui a réellement choisi cette activité, et à partir de quelles informations ?</p></article><article><b>02</b><p>Quelles habiletés sont nécessaires : comprendre, attendre, marcher, manipuler, tolérer ?</p></article><article><b>03</b><p>Quels risques sont propres à l’activité et quelles qualifications sont requises ?</p></article><article><b>04</b><p>Quels éléments sensoriels peuvent soutenir ou gêner : bruit, lumière, eau, foule, odeurs ?</p></article><article><b>05</b><p>Comment entrer progressivement et comment s’arrêter sans être mis en échec ?</p></article><article><b>06</b><p>Quel rôle valorisant existe pour une participation partielle ou différente ?</p></article><article><b>07</b><p>Quel temps de transport, d’attente et de récupération faut-il ajouter ?</p></article><article><b>08</b><p>Quel plan B garde la même intention : bouger, découvrir, créer ou rencontrer ?</p></article></div>
        <Tip tone="coral">Un plan B n’est pas une punition. Il doit conserver la promesse de départ : si l’on renonce à la mer, on garde l’eau, le dehors ou l’évasion.</Tip>
      </section>

      <section className="content-section choice-section"><div><p className="section-kicker">Rendre le choix réel</p><h2>Oui, non, pas maintenant, autrement.</h2></div><div className="choice-demo"><article><span className="choice-yes">Oui</span><p>Je participe dans les conditions proposées.</p></article><article><span className="choice-no">Non</span><p>Mon refus est entendu, sans chantage ni justification forcée.</p></article><article><span className="choice-later">Plus tard</span><p>J’observe, je me prépare ou je rejoins après le début.</p></article><article><span className="choice-other">Autrement</span><p>Je prends un autre rôle ou une version ajustée.</p></article></div></section>
      <NextPage href="/gestion-groupes" label="04" title="Faire vivre un collectif à géométrie variable" />
    </main>
  );
}
