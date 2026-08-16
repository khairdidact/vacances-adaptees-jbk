# Vacances adaptées — Jean-Baptiste Khair

Site éditorial, interactif et responsive consacré aux séjours de vacances adaptés pour adultes en situation de handicap mental.

## Contenu

- Accueil : vision, boussole pédagogique et table d’exploration.
- Publics : repères non stigmatisants, besoins, aidants et inclusion.
- Lieux d’accueil : solutions banalisées, spécialisées et hybrides, avec filtre.
- Activités : catalogue filtrable et leviers d’adaptation.
- Gestion des groupes : projets, temporalités, rôles et planificateur modulable.
- Administration : cadre VAO, boîte à outils et checklist locale.
- Formation : banque de 105 questions, trois formats et corrections expliquées.

## Modifier facilement le site

Les pages sont dans `app/` et utilisent une syntaxe HTML enrichie (TSX). Les composants interactifs sont dans `components/`. La banque du test se trouve dans `data/quiz.ts` : chaque ligne contient une question, la bonne réponse, trois distracteurs et l’explication.

Les couleurs, espacements et règles responsives sont centralisés dans `app/globals.css`. Le portrait de Jean-Baptiste Khair est dans `public/jean-baptiste-khair.png`.

## Développement

Prérequis : Node.js 22.13 ou version ultérieure.

```bash
npm install
npm run dev
```

Vérification de production :

```bash
npm run build
npm test
```

## Mise en ligne depuis GitHub

Le projet est prêt à être versionné dans un dépôt GitHub. Il utilise Vinext et produit un Worker ESM compatible avec un hébergement Cloudflare. Conserver le fichier `.openai/hosting.json` pour les déploiements via ChatGPT Sites. Pour un autre hébergeur, adapter la configuration de build à sa cible plutôt que de modifier le contenu des pages.

## Prudence juridique

Les repères réglementaires ont été vérifiés au 16 août 2026 et renvoient aux sources officielles. Ils restent généraux : vérifier les textes, formulaires et instructions applicables avant chaque séjour.

## Auteur

Jean-Baptiste Khair — ingénierie pédagogique.
