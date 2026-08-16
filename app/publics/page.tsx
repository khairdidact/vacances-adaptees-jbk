import type { Metadata } from "next";
import { NextPage, PageIntro, Tip } from "@/components/page-intro";

export const metadata: Metadata = { title: "Publics" };

const portraits = [
  { title: "Déficience intellectuelle", note: "Des besoins très variables, jamais une identité unique.", body: "Elle peut influencer l’apprentissage, l’abstraction, la mémorisation, la résolution de problème ou la généralisation. Une personne peut être très autonome dans des routines connues et demander davantage d’appui dans un lieu nouveau. On adapte avec des consignes concrètes, des repères visuels, du temps et une vérification respectueuse de la compréhension.", cues: ["langage clair", "démonstration", "choix concrets"] },
  { title: "Trouble du spectre de l’autisme", note: "Un fonctionnement singulier, avec ou sans déficience intellectuelle.", body: "La communication sociale, la flexibilité, le traitement sensoriel et le besoin de prévisibilité peuvent être concernés. Certaines personnes parlent beaucoup sans toujours décoder l’implicite ; d’autres utilisent des pictogrammes, des gestes ou une communication alternative. Prévenir les transitions et offrir un espace de retrait change souvent l’expérience.", cues: ["prévisibilité", "sensorialité", "communication"] },
  { title: "Handicap psychique", note: "Les capacités peuvent fluctuer selon les périodes et le contexte.", body: "Des troubles de l’humeur, psychotiques, anxieux ou de la personnalité peuvent retentir sur l’élan, l’organisation, le sommeil, la relation ou la perception de la réalité. L’accompagnement cherche des repères stables, une alliance non jugeante, l’accès aux soins si besoin et la prévention des ruptures — sans interpréter chaque comportement par le diagnostic.", cues: ["alliance", "continuité", "signaux précoces"] },
  { title: "Polyhandicap et handicaps associés", note: "Plusieurs dimensions d’aide se combinent.", body: "Déficiences intellectuelles sévères, motrices, sensorielles, troubles de santé ou de communication peuvent coexister. Le confort postural, les transferts, l’alimentation, la douleur, la communication fine et la fatigabilité demandent une préparation précise. La personne reste un sujet de choix : regards, mimiques, tensions ou détentes sont aussi des réponses.", cues: ["confort", "soins coordonnés", "micro-choix"] },
  { title: "Lésion cérébrale acquise", note: "Après un traumatisme crânien, un AVC ou une autre atteinte.", body: "Fatigue, mémoire, inhibition, impulsivité, attention ou conscience des difficultés peuvent être touchées. Les compétences anciennes et nouvelles ne sont pas toujours homogènes. Des étapes courtes, des pauses et un retour factuel — jamais infantilisant — sécurisent l’activité.", cues: ["fatigabilité", "étapes", "feedback factuel"] },
  { title: "Vieillissement et fragilités somatiques", note: "L’âge, les traitements et la santé transforment parfois les besoins.", body: "Vision, audition, mobilité, continence, sommeil ou endurance peuvent évoluer, parfois avec une maladie neurodégénérative. Il faut comparer les signes au fonctionnement habituel, adapter le rythme et ne pas attribuer trop vite un changement au handicap initial.", cues: ["observation", "rythme", "vigilance santé"] },
];

const needs = [
  ["Comprendre & être compris", "Phrases courtes, une information à la fois, supports faciles à lire, pictogrammes si connus, reformulation sans interrogation scolaire."],
  ["Anticiper & se repérer", "Photos du lieu, déroulé visuel, horaires souples mais annoncés, rituel d’arrivée, signal clair avant les transitions."],
  ["Réguler le sensoriel", "Repérer bruit, lumière, foule, textures et odeurs ; prévoir casque, place en bordure, temps calme et possibilité de retrait."],
  ["Prendre soin de sa santé", "Informations utiles et proportionnées, traitements sécurisés, habitudes alimentaires, douleur, sommeil, épilepsie, allergies et contacts de recours."],
  ["Choisir & consentir", "Options accessibles, droit de changer d’avis, temps pour répondre, refus pris au sérieux et recherche d’une alternative valorisante."],
  ["Être en relation", "Petits groupes, rôles concrets, médiation par l’activité, codes explicités, soutien discret et droit à la solitude."],
];

export default function PublicsPage() {
  return (
    <main id="contenu">
      <PageIntro index="01" kicker="Publics" title="Connaître les besoins," italic="rencontrer la personne." lead="Les catégories donnent des repères. La préparation commence vraiment quand on découvre une personne, son histoire, ses préférences et sa manière de dire oui, non ou peut-être." accent="mint" />
      <section className="content-section intro-grid">
        <div><p className="section-kicker">Changer de focale</p><h2>Du « niveau d’autonomie » au niveau d’accompagnement utile.</h2></div>
        <div><p className="lead-serif">Deux personnes ayant le même diagnostic peuvent avoir des projets, des compétences et des besoins totalement différents.</p><p>Décrire un besoin est plus opérant que classer une personne. « A besoin d’un repère visuel pour rejoindre sa chambre » guide l’équipe ; « peu autonome » ne dit ni où, ni quand, ni comment aider.</p></div>
      </section>

      <section className="content-section soft-bg">
        <div className="section-heading"><div><p className="section-kicker">Repères, pas étiquettes</p><h2>Grandes situations fréquemment rencontrées.</h2></div><p>Ouvrez les cartes. Chaque description met l’accent sur les conditions qui facilitent la participation.</p></div>
        <div className="accordion-grid">
          {portraits.map((item, i) => <details key={item.title} className="info-accordion"><summary><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{item.title}</h3><p>{item.note}</p></div><b>+</b></summary><div className="details-body"><p>{item.body}</p><div className="chip-row">{item.cues.map(c => <span key={c}>{c}</span>)}</div></div></details>)}
        </div>
        <Tip>Le dossier prépare une rencontre ; il ne la remplace pas. Demandez toujours : « Qu’est-ce qui vous aide à passer une bonne journée ? »</Tip>
      </section>

      <section className="content-section">
        <div className="section-heading"><div><p className="section-kicker">La carte des besoins</p><h2>Six dimensions à explorer avant le départ.</h2></div><p>Pour chacune : ce qui aide, ce qui met en difficulté, les signes de confort ou de tension, et la juste place de l’accompagnant.</p></div>
        <div className="need-wheel">
          <div className="need-center"><span>Une personne</span><strong>singulière</strong><small>au centre du projet</small></div>
          <div className="need-list">{needs.map(([title, text], i) => <article key={title}><span>{i + 1}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        </div>
      </section>

      <section className="content-section dark-section social-section">
        <div><p className="section-kicker light">Socialisation & inclusion</p><h2>Aider à entrer en relation, sans imposer d’être sociable.</h2><p className="lead-serif">L’inclusion ne consiste pas à « normaliser » un comportement. Elle consiste à rendre possible une présence choisie, reconnue et contributive dans les lieux ordinaires.</p></div>
        <div className="do-dont">
          <article><h3>À privilégier</h3><ul><li>Partir des centres d’intérêt communs.</li><li>Proposer un rôle réel : choisir la musique, lire la carte, servir l’eau.</li><li>Introduire progressivement un lieu ou un groupe.</li><li>Expliciter les codes sans humilier.</li><li>Laisser une porte de sortie honorable.</li></ul></article>
          <article><h3>À éviter</h3><ul><li>Forcer les interactions « pour son bien ».</li><li>Parler de la personne comme si elle était absente.</li><li>Créer une animation infantilisante pour des adultes.</li><li>Confondre retrait, refus, fatigue et opposition.</li><li>Faire de l’accompagnant l’unique interlocuteur.</li></ul></article>
        </div>
      </section>

      <section className="content-section aidants-section">
        <div><p className="section-kicker">Les proches et aidants</p><h2>Une alliance à construire, une séparation à respecter.</h2></div>
        <div className="aidant-cards"><article><span>Avant</span><h3>Recueillir l’expertise</h3><p>Habitudes, signaux faibles, réussites, risques, stratégies qui fonctionnent — et ce que la personne souhaite transmettre elle-même.</p></article><article><span>Pendant</span><h3>Donner le bon niveau de nouvelles</h3><p>Convenir de la fréquence, du canal et des situations qui justifient un appel. Le répit suppose aussi de ne pas surveiller à distance chaque instant.</p></article><article><span>Après</span><h3>Raconter les possibles</h3><p>Partager les plaisirs, initiatives et découvertes, pas seulement les incidents. Identifier ce qui peut soutenir la suite du parcours.</p></article></div>
      </section>
      <NextPage href="/lieux" label="02" title="Choisir un lieu qui travaille avec le projet" />
    </main>
  );
}
