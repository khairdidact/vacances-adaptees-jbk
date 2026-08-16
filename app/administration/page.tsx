import type { Metadata } from "next";
import { AdminChecklist } from "@/components/admin-checklist";
import { NextPage, PageIntro, Tip } from "@/components/page-intro";

export const metadata: Metadata = { title: "Administration" };

const toolset = [
  ["Fiche séjour", "Finalités, publics, dates, lieux, transport, équipe, activités, budget, risques et solutions de repli."],
  ["Questionnaire préalable", "Besoins, santé, communication, habitudes, choix et personnes ressources — limité à ce qui est utile au séjour."],
  ["Fiche repères individuelle", "Version opérationnelle courte : ce qui aide, signes d’alerte, conduite à tenir, priorités personnelles."],
  ["Plan de traitements", "Prescription à jour, préparation, stockage, distribution, traçabilité, incidents et relais professionnel."],
  ["Main courante", "Faits significatifs, horaires, décisions, appels, transmissions et suivi — écriture factuelle et respectueuse."],
  ["Registre d’argent", "Sommes confiées, dépenses, justificatifs, solde, double contrôle et restitution selon l’accord établi."],
  ["Plan transport", "Conducteurs, véhicules, assurances, places, pauses, contacts, bagages, rendez-vous et procédures de retard."],
  ["Plan d’urgence", "Scénarios, rôles, numéros, lieux de recours, évacuation, rapatriement, communication et continuité du groupe."],
  ["Fiche événement", "Faits, mesures immédiates, personnes informées, signalements, suites, analyse et prévention de la répétition."],
  ["Bilan de séjour", "Parole des vacanciers, objectifs, participation, incidents, équipe, prestataires, finances et améliorations."],
];

export default function AdministrationPage() {
  return (
    <main id="contenu">
      <PageIntro index="05" kicker="Administration" title="Le droit comme socle," italic="les outils comme appui." lead="Une administration utile protège les personnes, rend les responsabilités lisibles et libère l’équipe des improvisations évitables. Elle reste proportionnée, compréhensible et vivante." accent="violet" />
      <section className="legal-alert"><span>Information juridique</span><p>Cette page propose des repères généraux vérifiés le <strong>16 août 2026</strong>. Elle ne remplace ni les textes en vigueur, ni les instructions préfectorales, ni un conseil adapté à votre organisme.</p></section>

      <section className="content-section intro-grid"><div><p className="section-kicker">Le périmètre VAO</p><h2>Trois seuils cumulatifs à connaître.</h2></div><div><p className="lead-serif">Le régime « vacances adaptées organisées » vise, en France ou à l’étranger, des vacances avec hébergement de plus de cinq jours, destinées exclusivement à un groupe de plus de trois adultes handicapés.</p><p>L’organisateur doit alors détenir l’agrément VAO. Le transport jusqu’au lieu de séjour est inclus lorsqu’il fait partie de sa prestation. D’autres règles peuvent s’ajouter selon la vente du voyage, les activités, les lieux, les salariés, le transport ou les soins.</p></div></section>

      <section className="legal-timeline">
        <article><time>En amont</time><span>1</span><h3>Agrément</h3><p>Délivré par le préfet de région pour cinq ans. Le dossier décrit compétences, séjours, équipe, transport, santé, activités, urgences, budget personnel et questionnaire préalable.</p></article>
        <article><time>Chaque année</time><span>2</span><h3>Bilan</h3><p>Transmission d’un bilan circonstancié quantitatif, qualitatif et financier, avec les mesures prises après d’éventuels dysfonctionnements.</p></article>
        <article><time>J − 2 mois</time><span>3</span><h3>Déclaration</h3><p>Information du ou des préfets des départements d’accueil, avec copie de l’agrément. Le délai peut être réduit à un mois en cas d’urgence motivée.</p></article>
        <article><time>J − 8 jours</time><span>4</span><h3>Confirmation</h3><p>Confirmation du déroulement auprès des mêmes services, sur le formulaire réglementaire ou via le système d’information dédié.</p></article>
        <article><time>Sans délai</time><span>5</span><h3>Événement grave</h3><p>Information du préfet du lieu pour tout accident grave ou risque grave pour la santé, l’intégrité ou le bien-être ; information aussi du préfet ayant délivré l’agrément.</p></article>
      </section>

      <section className="content-section soft-bg">
        <div className="section-heading"><div><p className="section-kicker">Tableau de bord</p><h2>Une checklist qui reste sur votre appareil.</h2></div><p>Cochez au fil de la préparation, imprimez si utile et complétez avec les exigences de votre région et de votre organisme.</p></div>
        <AdminChecklist />
      </section>

      <section className="content-section">
        <div className="section-heading"><div><p className="section-kicker">La boîte à outils</p><h2>Dix documents qui évitent les angles morts.</h2></div><p>Chaque outil a un propriétaire, une date de mise à jour, des destinataires définis et une durée de conservation justifiée.</p></div>
        <div className="tool-grid">{toolset.map(([title, text], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section className="content-section dark-section data-section">
        <div><p className="section-kicker light">Données personnelles & santé</p><h2>Collecter moins, protéger mieux.</h2><p className="lead-serif">Une information sensible n’est pas « utile au cas où ». Elle doit servir une finalité explicite et être accessible uniquement aux personnes qui en ont besoin.</p></div>
        <div className="data-rules"><article><span>1</span><h3>Finalité</h3><p>Dire pourquoi chaque donnée est demandée et ne pas la réutiliser pour un autre but incompatible.</p></article><article><span>2</span><h3>Minimisation</h3><p>Préférer le besoin opérationnel au détail diagnostique : conduite à tenir plutôt qu’histoire médicale exhaustive.</p></article><article><span>3</span><h3>Habilitation</h3><p>Distinguer les informations nécessaires au responsable, au référent santé, à l’accompagnant ou au prestataire.</p></article><article><span>4</span><h3>Cycle de vie</h3><p>Transport sécurisé, stockage protégé, durée définie, archivage justifié et destruction effective.</p></article></div>
        <Tip tone="coral">Une conversation dans un couloir, une photo de prescription sur un téléphone personnel ou un groupe de messagerie non maîtrisé sont aussi des traitements de données.</Tip>
      </section>

      <section className="content-section sources-section">
        <div><p className="section-kicker">Sources officielles</p><h2>Vérifier avant chaque séjour.</h2></div>
        <div className="source-list">
          <a href="https://handicap.gouv.fr/organisateurs-de-vacances-adaptees-organisees-vao-comment-obtenir-lagrement" target="_blank" rel="noreferrer"><span>Ministère</span><strong>Agrément et déclaration VAO</strong><b>↗</b></a>
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030344775/" target="_blank" rel="noreferrer"><span>Légifrance</span><strong>Code du tourisme · R. 412-8</strong><b>↗</b></a>
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000039644882/" target="_blank" rel="noreferrer"><span>Légifrance</span><strong>Déclaration · R. 412-14</strong><b>↗</b></a>
          <a href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000030342454/" target="_blank" rel="noreferrer"><span>Légifrance</span><strong>Événements graves · R. 412-14-1</strong><b>↗</b></a>
          <a href="https://vao.social.gouv.fr" target="_blank" rel="noreferrer"><span>Service public</span><strong>Plateforme numérique SI-VAO</strong><b>↗</b></a>
          <a href="https://www.cnil.fr/fr/reglement-europeen-protection-donnees" target="_blank" rel="noreferrer"><span>CNIL</span><strong>Principes de protection des données</strong><b>↗</b></a>
        </div>
      </section>
      <NextPage href="/formation" label="06" title="Évaluer et consolider les compétences" />
    </main>
  );
}
