import type { Metadata } from "next";
import { NextPage, PageIntro, Tip } from "@/components/page-intro";
import { VenueMatcher } from "@/components/venue-matcher";

export const metadata: Metadata = { title: "Lieux d’accueil" };

const ordinary = [
  ["Gîtes & maisons de groupe", "Un chez-soi temporaire, privatisable, propice aux rythmes différenciés et à la participation quotidienne."],
  ["Villages vacances & résidences", "Restauration, loisirs et services sur place ; potentiel inclusif fort si l’équipe du lieu est préparée."],
  ["Hôtels & auberges", "Pertinents pour les escapades urbaines et itinérantes, avec une logistique légère mais des espaces communs limités."],
  ["Campings & hébergements de plein air", "Mobil-homes, chalets ou tentes aménagées ; expérience sensorielle riche et vie collective informelle."],
  ["Auberges de jeunesse & centres internationaux", "Rencontres, cuisine collective, tarifs accessibles ; attention au bruit, aux sanitaires et aux dortoirs."],
  ["Fermes, chambres d’hôtes & écolieux", "Petites capacités, contact avec les hôtes et activités de proximité ; excellente médiation par le quotidien."],
];

const specialized = [
  ["Maisons de vacances adaptées", "Hébergements conçus avec matériel, repérage et espaces facilitants ; niveau d’accompagnement variable."],
  ["Centres de répit ou de vacances spécialisés", "Ressources professionnelles et équipements renforcés pour les besoins complexes ou le polyhandicap."],
  ["Établissements médico-sociaux avec accueil temporaire", "Solution encadrée relevant d’un autre régime qu’un simple séjour touristique ; vérifier admission et autorisations."],
  ["Réseaux associatifs et plateformes dédiées", "Lieux sélectionnés, retours d’expérience et parfois soutien à l’organisation du séjour."],
  ["Dispositifs passerelles", "Hébergement ordinaire associé à une équipe mobile, un partenariat de soins ou une base spécialisée à proximité."],
  ["Séjours à domicile ou de proximité", "Formules très individualisées, petits groupes, répit aidant et continuité des repères habituels."],
];

export default function LieuxPage() {
  return (
    <main id="contenu">
      <PageIntro index="02" kicker="Lieux d’accueil" title="Un décor de vacances," italic="un environnement facilitant." lead="Le bon lieu n’est pas celui qui affiche le plus d’équipements. C’est celui dont les espaces, l’équipe et le territoire peuvent soutenir les projets réels du groupe." accent="sky" />
      <section className="content-section intro-grid">
        <div><p className="section-kicker">Deux familles, mille nuances</p><h2>Banalisé ou spécialisé : sortir du faux choix.</h2></div>
        <div><p className="lead-serif">Un lieu ordinaire peut être très facilitant. Un lieu spécialisé peut offrir une liberté autrement impossible.</p><p>On ne choisit pas une catégorie par principe. On met en regard les besoins, le projet de vacances, les ressources humaines, le territoire et les marges d’ajustement. Les solutions hybrides — hébergement ordinaire et appuis spécialisés — sont souvent fécondes.</p></div>
      </section>

      <section className="split-catalog">
        <div className="catalog-column ordinary"><p className="catalog-label">Accueil banalisé</p><h2>Vivre les vacances dans les lieux de tout le monde.</h2>{ordinary.map(([title, text], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
        <div className="catalog-column specialized"><p className="catalog-label">Accueil spécialisé</p><h2>Mobiliser un environnement conçu pour certains besoins.</h2>{specialized.map(([title, text], i) => <article key={title}><span>{String(i + 1).padStart(2, "0")}</span><div><h3>{title}</h3><p>{text}</p></div></article>)}</div>
      </section>

      <section className="content-section soft-bg">
        <div className="section-heading"><div><p className="section-kicker">Explorateur de lieux</p><h2>Filtrez des pistes, puis enquêtez sur le terrain.</h2></div><p>Ce mini-outil ne décide pas à votre place. Il ouvre des hypothèses selon trois critères structurants.</p></div>
        <VenueMatcher />
      </section>

      <section className="content-section">
        <div className="section-heading"><div><p className="section-kicker">La visite technique</p><h2>Observer le parcours, pas seulement le bâtiment.</h2></div><p>Photographiez avec accord, mesurez, testez et faites le trajet réel : arrivée, chambre, repas, activité, nuit, départ.</p></div>
        <div className="audit-grid">
          <article><span>①</span><h3>Se repérer</h3><ul><li>Entrée identifiable et adresse fiable</li><li>Circulations lisibles, contrastes, pictogrammes utiles</li><li>Clés, badges et portes simples à manipuler</li><li>Point de rassemblement connu</li></ul></article>
          <article><span>②</span><h3>Habiter</h3><ul><li>Chambres individuelles ou partagées choisies</li><li>Sanitaires réellement utilisables</li><li>Espace calme accessible sans justification</li><li>Température, acoustique, occultation, literie</li></ul></article>
          <article><span>③</span><h3>Prendre soin</h3><ul><li>Stockage sécurisé des médicaments</li><li>Réfrigération si nécessaire</li><li>Espace confidentiel et hygiénique</li><li>Accès secours, médecin, pharmacie, hôpital</li></ul></article>
          <article><span>④</span><h3>Vivre dehors</h3><ul><li>Commerces et loisirs accessibles</li><li>Transports et stationnement réalistes</li><li>Accueil du voisinage et des prestataires</li><li>Solutions de repli météo ou fatigue</li></ul></article>
        </div>
        <Tip tone="mint">Demandez au gestionnaire : « Qu’est-ce qui peut bouger ? » Un repas décalé, une salle disponible ou un référent joignable valent parfois plus qu’un équipement standard.</Tip>
      </section>

      <section className="content-section dark-section">
        <div className="section-heading"><div><p className="section-kicker light">Accord d’accueil</p><h2>Six points à confirmer par écrit.</h2></div><p>Un échange précis évite les promesses vagues et construit un partenariat équilibré.</p></div>
        <ol className="big-checklist"><li><strong>Configuration</strong><span>Plan, chambres, couchages, sanitaires, accès, espaces communs.</span></li><li><strong>Prestations</strong><span>Repas, linge, ménage, matériel, horaires, animations, wifi.</span></li><li><strong>Adaptations convenues</strong><span>Repas mixé, salle calme, table réservée, arrivée progressive, signalétique.</span></li><li><strong>Sécurité</strong><span>Évacuation, alarmes perceptibles, astreinte, registre et consignes.</span></li><li><strong>Responsabilités</strong><span>Ce qui relève du lieu, de l’organisateur, des prestataires et des vacanciers.</span></li><li><strong>Imprévus</strong><span>Annulation, casse, maladie, canicule, relogement, départ anticipé.</span></li></ol>
      </section>
      <NextPage href="/activites" label="03" title="Composer des activités réellement choisissables" />
    </main>
  );
}
