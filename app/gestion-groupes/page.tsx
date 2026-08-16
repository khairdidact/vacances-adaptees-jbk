import type { Metadata } from "next";
import { NextPage, PageIntro, Tip } from "@/components/page-intro";
import { RhythmPlanner } from "@/components/rhythm-planner";

export const metadata: Metadata = { title: "Gestion des groupes" };

const roles = [
  ["Responsable de séjour", "Tient la vision d’ensemble, les arbitrages, les liens externes et la sécurité. Ne porte pas tout seul."],
  ["Référent de personne", "Connaît les repères utiles, suit le projet personnel et veille à ce que la parole de la personne circule."],
  ["Référent activité", "Prépare lieu, matériel, accessibilité, météo, prestataire, risques, transport et plan B."],
  ["Référent santé", "Sécurise prescriptions, traitements, transmissions utiles, recours et traçabilité dans la limite des compétences."],
  ["Référent logistique", "Repas, courses, véhicules, clés, argent commun, stocks, horaires et interface avec l’hébergement."],
  ["Veille relationnelle", "Observe les dynamiques, soutient les médiations et aide l’équipe à ne pas transformer un conflit en étiquette."],
];

export default function GroupesPage() {
  return (
    <main id="contenu">
      <PageIntro index="04" kicker="Gestion des groupes" title="Un cadre qui tient," italic="un programme qui respire." lead="Le collectif donne de l’élan, des rencontres et des souvenirs communs. Il devient inclusif quand il garde de la place pour les projets personnels, les rythmes singuliers et le droit de bifurquer." accent="coral" />
      <section className="content-section intro-grid"><div><p className="section-kicker">Trois projets emboîtés</p><h2>Ni colonie uniforme, ni addition de prises en charge.</h2></div><div><p className="lead-serif">La qualité naît de la négociation entre le sens commun du séjour, les désirs de chacun et les capacités réelles de l’équipe.</p><p>Le projet collectif donne un cap ; les projets personnels donnent de la valeur ; l’organisation rend leurs rencontres possibles. Aucun niveau n’écrase les deux autres.</p></div></section>

      <section className="project-layers">
        <article className="layer collective"><span>01</span><div><p>Le cap partagé</p><h2>Projet collectif</h2><p>Pourquoi partons-nous ensemble ? Quel style de vacances, quelles règles de vie et quelles expériences communes souhaitons-nous ?</p></div></article>
        <article className="layer personal"><span>02</span><div><p>Les aspirations singulières</p><h2>Projets personnels</h2><p>Se reposer, voir la mer, danser, appeler moins souvent chez soi, payer seul au restaurant, essayer une activité, être tranquille.</p></div></article>
        <article className="layer operational"><span>03</span><div><p>Les conditions de possibilité</p><h2>Projet opérationnel</h2><p>Équipe, budget, sous-groupes, véhicules, compétences, horaires, santé, lieux et plans de repli.</p></div></article>
      </section>

      <section className="content-section soft-bg">
        <div className="section-heading"><div><p className="section-kicker">Le laboratoire du rythme</p><h2>Faites varier l’énergie et les conditions.</h2></div><p>Un exemple de journée se recompose pour illustrer une planification modulable. L’observation prime toujours sur l’outil.</p></div>
        <RhythmPlanner />
      </section>

      <section className="content-section">
        <div className="section-heading"><div><p className="section-kicker">Des temporalités différentes</p><h2>Le temps n’est pas neutre.</h2></div><p>Pour certains, attendre coûte plus que faire ; pour d’autres, passer trop vite d’une étape à l’autre empêche de participer.</p></div>
        <div className="time-grid"><article><span>↘</span><h3>Temps de compréhension</h3><p>Laisser l’information être traitée avant de reformuler ou de choisir à la place.</p></article><article><span>↺</span><h3>Temps de transition</h3><p>Annoncer, ritualiser, visualiser et accepter qu’un passage demande un détour.</p></article><article><span>≈</span><h3>Temps de récupération</h3><p>Le sommeil ne suffit pas : prévoir aussi des pauses sans sollicitation sociale.</p></article><article><span>✦</span><h3>Temps d’initiative</h3><p>Ne pas remplir chaque blanc ; laisser naître une proposition, un détour, une rencontre.</p></article></div>
        <Tip>Un programme souple n’est pas un programme flou. Le cadre est clair sur ce qui ne peut pas bouger, et explicite sur les espaces de choix.</Tip>
      </section>

      <section className="content-section dark-section">
        <div className="section-heading"><div><p className="section-kicker light">L’équipe comme système</p><h2>Distribuer les attentions.</h2></div><p>Les rôles peuvent tourner, mais leur attribution doit être visible à chaque demi-journée.</p></div>
        <div className="role-grid">{roles.map(([title, text], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="content-section debrief-section">
        <div><p className="section-kicker">Le point d’équipe en 15 minutes</p><h2>Observer → comprendre → décider.</h2></div>
        <ol><li><span>3 min</span><div><h3>Faits</h3><p>Ce que chacun a vu ou entendu, sans diagnostic ni intention prêtée.</p></div></li><li><span>4 min</span><div><h3>Hypothèses</h3><p>Plusieurs explications possibles : fatigue, douleur, incompréhension, besoin de lien, refus.</p></div></li><li><span>5 min</span><div><h3>Ajustements</h3><p>Une ou deux modifications concrètes, responsables nommés et effet attendu.</p></div></li><li><span>3 min</span><div><h3>Vérification</h3><p>Quand et auprès de qui vérifier, y compris avec la personne concernée.</p></div></li></ol>
      </section>
      <NextPage href="/administration" label="05" title="Sécuriser sans bureaucratiser" />
    </main>
  );
}
