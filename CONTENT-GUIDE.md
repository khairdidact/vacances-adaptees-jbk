# Guide d’enrichissement

## Ajouter une rubrique à une page

1. Ouvrir le fichier `app/<nom-de-page>/page.tsx`.
2. Ajouter une balise `<section className="content-section">` avant le lien de page suivante.
3. Utiliser un titre `<h2>`, des paragraphes et des listes sémantiques.
4. Réutiliser `Tip`, `PageIntro` ou `NextPage` depuis `components/page-intro.tsx`.

## Ajouter une question au test

Dans `data/quiz.ts`, ajouter une ligne au domaine choisi sous cette forme :

```ts
["Question ?", "Bonne réponse", "Distracteur 1", "Distracteur 2", "Distracteur 3", "Explication pédagogique."],
```

La bonne réponse est toujours placée en deuxième position dans la donnée source. Son affichage est automatiquement mélangé à chaque partie.

## Ajouter une activité

Dans `components/activity-lab.tsx`, compléter le tableau `activities` avec une icône, un titre, une famille, un niveau d’énergie, un cadre, un niveau sensoriel et un conseil d’adaptation.

## Actualiser le droit

1. Vérifier en priorité Légifrance, `handicap.gouv.fr`, la plateforme SI-VAO et la préfecture compétente.
2. Modifier la date de vérification sur la page Administration.
3. Distinguer clairement obligation réglementaire, bonne pratique et choix interne.
4. Ne jamais présenter le site comme un avis juridique individualisé.

## Accessibilité éditoriale

- Employer des phrases courtes et des titres explicites.
- Décrire les besoins en contexte, sans étiquettes globales.
- Ajouter un texte alternatif à toute image informative.
- Ne pas transmettre une information uniquement par la couleur.
- Tester la navigation au clavier et sur mobile après chaque ajout important.
