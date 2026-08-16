import Link from "next/link";

const routes = [
  { href: "/publics", n: "01", icon: "◎", title: "Publics", text: "Comprendre sans réduire une personne à un diagnostic.", color: "mint" },
  { href: "/lieux", n: "02", icon: "⌂", title: "Lieux d’accueil", text: "Choisir entre milieu ordinaire, accueil spécialisé et solutions hybrides.", color: "sky" },
  { href: "/activites", n: "03", icon: "◇", title: "Activités", text: "Adapter l’environnement, les consignes et le rythme — pas l’envie.", color: "sun" },
  { href: "/gestion-groupes", n: "04", icon: "∞", title: "Gestion des groupes", text: "Faire dialoguer projet collectif, choix personnels et imprévus.", color: "coral" },
  { href: "/administration", n: "05", icon: "✓", title: "Administration", text: "Transformer les obligations en outils de qualité et de sécurité.", color: "violet" },
  { href: "/formation", n: "06", icon: "↗", title: "Formation", text: "S’entraîner avec une banque de plus de 100 questions corrigées.", color: "rose" },
];

export default function Home() {
  return (
    <main id="contenu">
      <section className="hero home-hero">
        <div className="hero-copy">
          <p className="eyebrow"><span>Guide vivant</span> · loisirs & inclusion</p>
          <h1>Des vacances<br /><em>qui ressemblent</em><br />aux vacanciers.</h1>
          <p className="hero-lead">
            Un site-outil pour imaginer, préparer et conduire des séjours adaptés avec des adultes en situation de handicap mental — à partir de leurs goûts, de leurs choix et de leurs capacités d’agir.
          </p>
          <div className="hero-actions">
            <Link className="button button-primary" href="#explorer">Explorer le guide <span aria-hidden="true">↓</span></Link>
            <Link className="button button-ghost" href="/formation">Tester mes connaissances</Link>
          </div>
          <ul className="hero-proof" aria-label="Principes du site">
            <li><strong>7</strong><span>pages pratiques</span></li>
            <li><strong>100+</strong><span>questions</span></li>
            <li><strong>1</strong><span>boussole : le choix</span></li>
          </ul>
        </div>
        <div className="portrait-stage" aria-label="Jean-Baptiste Khair, ingénierie pédagogique">
          <div className="portrait-sun" aria-hidden="true" />
          <div className="portrait-card">
            <img src="/jean-baptiste-khair.png" alt="Jean-Baptiste Khair, ingénierie pédagogique" />
          </div>
          <div className="author-tag">
            <span className="tag-spark" aria-hidden="true">✦</span>
            <p><strong>Jean-Baptiste Khair</strong><br />Ingénierie pédagogique</p>
          </div>
          <p className="scribble-note">Transmettre des repères,<br />ouvrir des possibles ↗</p>
        </div>
      </section>

      <section className="manifesto" aria-labelledby="vision-title">
        <div>
          <p className="section-kicker">Notre point de départ</p>
          <h2 id="vision-title">Le handicap n’est jamais<br />toute l’histoire.</h2>
        </div>
        <div className="manifesto-copy">
          <p className="large-copy">Une personne ne se résume ni à ses limitations, ni à son dossier, ni au niveau d’aide qu’on lui attribue.</p>
          <p>Le handicap apparaît dans l’interaction entre des caractéristiques personnelles et un environnement plus ou moins facilitant. En séjour, adapter consiste donc à agir sur les rythmes, les espaces, la communication, le choix et l’accompagnement.</p>
          <div className="principle-line">
            <span>Autodétermination</span><span>Accessibilité</span><span>Participation</span><span>Plaisir</span>
          </div>
        </div>
      </section>

      <section className="route-section" id="explorer" aria-labelledby="explore-title">
        <div className="section-heading">
          <div>
            <p className="section-kicker">La table d’exploration</p>
            <h2 id="explore-title">Choisissez votre prochaine étape.</h2>
          </div>
          <p>Six portes d’entrée complémentaires. Survolez, ouvrez, revenez : le guide est conçu pour une lecture non linéaire.</p>
        </div>
        <div className="route-grid">
          {routes.map((route) => (
            <Link href={route.href} className={`route-card ${route.color}`} key={route.href}>
              <span className="route-number">{route.n}</span>
              <span className="route-icon" aria-hidden="true">{route.icon}</span>
              <h3>{route.title}</h3>
              <p>{route.text}</p>
              <span className="route-link">Ouvrir la page <b aria-hidden="true">↗</b></span>
            </Link>
          ))}
        </div>
      </section>

      <section className="compass-section" aria-labelledby="compass-title">
        <div className="compass-visual" aria-hidden="true">
          <div className="orbit orbit-one"><span>envies</span></div>
          <div className="orbit orbit-two"><span>rythmes</span></div>
          <div className="compass-core">la<br /><strong>personne</strong></div>
        </div>
        <div className="compass-copy">
          <p className="section-kicker light">Une boussole simple</p>
          <h2 id="compass-title">Préparer avec.<br />Jamais seulement pour.</h2>
          <div className="compass-steps">
            <article><span>1</span><div><h3>Écouter</h3><p>Faire émerger envies, habitudes, signaux de confort et de refus.</p></div></article>
            <article><span>2</span><div><h3>Proposer</h3><p>Rendre les options compréhensibles, concrètes et réellement choisissables.</p></div></article>
            <article><span>3</span><div><h3>Ajuster</h3><p>Observer, demander, modifier — sans transformer le programme en contrainte.</p></div></article>
          </div>
        </div>
      </section>

      <section className="home-callout">
        <p className="eyebrow"><span>À garder en tête</span></p>
        <blockquote>« Une bonne adaptation se remarque moins par ce qu’elle interdit que par tout ce qu’elle rend possible. »</blockquote>
        <Link className="text-link" href="/publics">Commencer par les publics <span aria-hidden="true">→</span></Link>
      </section>
    </main>
  );
}
