# Inventra — supports publicitaires (FR)

Cibles : **commerçants / propriétaires de boutique**. Langue : **français**.
Identité reprise de l'app : indigo `#6366f1 → #4f46e5`, fond sombre `#0c0b0e → #0d0320`,
polices **Anek Tamil** (titres) + **Inter** (texte).

## Contenu

| Fichier | Usage |
| --- | --- |
| `landing.html` | Page d'accueil complète (responsive) — à héberger ou ouvrir en local. |
| `posters/poster-1-hero.html` | Affiche A3 — accroche principale « sans abonnement, sans internet ». |
| `posters/poster-2-features.html` | Affiche A3 **principale (vue client)** — aperçu de l'app + bénéfices. |
| `posters/poster-3-offline.html` | Affiche A3 — argument « fonctionne hors ligne ». |
| `posters/print/` | **Affiches autonomes** (polices + logos embarqués) — prêtes pour un convertisseur HTML→PDF. |
| `assets/` | Logos officiels (`logo.svg`, `icon.svg`, `sovereign.svg`) + `qr-website.svg`, copiés depuis `public/images/logos/`. |

> **Important :** garder le dossier `assets/` à côté des fichiers HTML — les logos
> y sont référencés en chemin relatif. Mention « By Sovereign » présente en bas de
> chaque affiche et de la page d'accueil.

## Affiches autonomes (HTML → PDF)

Les fichiers de `posters/` référencent des polices (Google Fonts) et des logos
externes — pratique pour éditer, mais **un convertisseur HTML→PDF ne les résout pas
toujours**. Générez plutôt les versions **autonomes** : un seul fichier HTML par
affiche, polices et logos embarqués (aucune dépendance réseau ni fichier voisin).

```bash
node marketing/build-standalone.cjs
```

→ produit `posters/print/poster-1-hero.html`, `…-2-features.html`, `…-3-offline.html`.
Ces fichiers se convertissent à l'identique avec n'importe quel outil (Chrome
headless, Prince, etc.). Relancer le script après chaque modification d'une affiche
ou du code QR.

## Exporter une affiche en PDF / image

1. Ouvrir le fichier de `posters/print/` dans Chrome ou Edge (ou le passer au convertisseur).
2. `Ctrl + P` → Destination **« Enregistrer au format PDF »**.
3. Format **A3**, marges **Aucune**, cocher **« Graphiques d'arrière-plan »**
   (indispensable pour les fonds dégradés).

> Pour de l'impression pro, ajouter ~3 mm de fond perdu auprès de l'imprimeur.

## Code QR (affiches)

Les affiches affichent un **code QR vectoriel** (`assets/qr-website.svg`) à la place du
bouton — pratique pour une affiche imprimée ou sur écran. Il pointe actuellement vers le
**lien d'espace réservé** `https://www.inventra.app`.

Pour le régénérer avec votre vraie adresse :

```bash
node marketing/generate-qr.cjs "https://votre-domaine.com" "marketing/assets/qr-website.svg"
```

(SVG = vectoriel, donc net à n'importe quelle taille d'impression.)

## À personnaliser avant diffusion

- Coordonnées : `www.inventra.app` et `contact@inventra.app` sont des **espaces réservés**.
- Code QR : régénérer vers votre vrai domaine (voir ci-dessus) avant impression.
- Le tableau de bord de démo (`landing.html`) affiche la devise **DH** — adapter à votre marché.
- Liens des boutons CTA (`href="#"`) à pointer vers votre formulaire / page de contact.
- Les polices sont chargées depuis Google Fonts (connexion requise pour le rendu exact).
  Pour un usage 100% hors ligne, les remplacer par les WOFF2 déjà fournis dans l'app.
