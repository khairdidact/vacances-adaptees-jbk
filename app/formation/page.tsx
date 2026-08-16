import type { Metadata } from "next";
import { PageIntro, Tip } from "@/components/page-intro";
import { QuizClient } from "@/components/quiz-client";

export const metadata: Metadata = { title: "Formation" };

export default function FormationPage() {
  return (
    <main id="contenu">
      <PageIntro index="06" kicker="Formation" title="Comprendre, décider," italic="ajuster en situation." lead="Un grand test pour mesurer les savoirs, les savoir-faire et les savoir-être mobilisés dans les séjours de vacances adaptées — avec corrections immédiates et réponses remélangées à chaque partie." accent="rose" />
      <section className="content-section competency-section">
        <div className="competency-card"><span>Savoirs</span><h2>Connaître</h2><p>Publics, besoins, droit, sécurité, accessibilité, santé, outils et responsabilités.</p><i>01</i></div>
        <div className="competency-card"><span>Savoir-faire</span><h2>Agir</h2><p>Observer, préparer, adapter, communiquer, planifier, tracer, décider et évaluer.</p><i>02</i></div>
        <div className="competency-card"><span>Savoir-être</span><h2>Se situer</h2><p>Écouter, respecter, coopérer, douter utilement, soutenir le choix et rester fiable.</p><i>03</i></div>
      </section>

      <section className="content-section quiz-section">
        <div className="section-heading"><div><p className="section-kicker">À vous de jouer</p><h2>Composez votre parcours.</h2></div><p>Choisissez un format et une thématique. Le grand test mobilise les 105 questions de la banque.</p></div>
        <QuizClient />
      </section>

      <section className="content-section learning-loop">
        <div><p className="section-kicker">Après le score</p><h2>Passer de la bonne réponse au bon réflexe.</h2></div>
        <div><ol><li><span>1</span><p><strong>Nommer</strong> le repère que vous venez d’apprendre.</p></li><li><span>2</span><p><strong>Raconter</strong> une situation de terrain où il s’applique.</p></li><li><span>3</span><p><strong>Décider</strong> d’un ajustement concret dans vos outils ou pratiques.</p></li><li><span>4</span><p><strong>Vérifier</strong> l’effet avec les personnes concernées.</p></li></ol><Tip tone="mint">Un score n’est pas une habilitation. Il donne une photographie de connaissances et ouvre une discussion d’équipe, une analyse de pratique ou une formation approfondie.</Tip></div>
      </section>
    </main>
  );
}
