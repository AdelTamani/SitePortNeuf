# SitePortNeuf

Refonte de la page d'accueil du **[Domaine du Grand-Portneuf](https://domainedugrandportneuf.com/)** — résidences haut de gamme à Pont-Rouge, Québec.

Application front-end autonome basée sur un design moderne (palette crème / vert forêt / or), avec contenu et visuels alignés sur le site existant du domaine.

## Stack technique

| Couche | Technologie | Rôle |
|--------|-------------|------|
| **UI** | [React 19](https://react.dev/) | Composants modulaires (Header, Hero, sections…) |
| **Langage** | [TypeScript 5.8](https://www.typescriptlang.org/) | Typage statique, autocomplétion, moins d'erreurs |
| **Build & dev** | [Vite 6](https://vite.dev/) | Serveur de dev rapide, hot reload, build production |
| **Styles** | CSS vanilla | Design system dans `src/index.css` (pas de Tailwind ni CSS-in-JS) |
| **Typographie** | [Google Fonts](https://fonts.google.com/) | Cormorant Garamond (titres) + Montserrat (texte) |
| **Déploiement** | Site statique (`dist/`) | HTML/CSS/JS compilés, sans serveur Node en production |

**Dépendances principales** : `react`, `react-dom`  
**Outils de dev** : `@vitejs/plugin-react`, `typescript`, `@types/react`, `@types/react-dom`

> Ce projet **n'utilise pas WordPress** en tant que CMS ou backend. Le site [domainedugrandportneuf.com](https://domainedugrandportneuf.com/) (WordPress) sert de référence pour le contenu et certaines images.

## Aperçu

La page comprend les sections suivantes :

| Section | Composant | Description |
|---------|-----------|-------------|
| Navigation | `Header` | Menu fixe, effet au scroll, menu mobile |
| Hero | `Hero` | Bannière plein écran avec slider (3 images) |
| Urgence | `UrgencyBanner` | Bande « Dernière phase » — investissement |
| À propos | `AboutSection` | Présentation du domaine + liste d'atouts |
| Résidences | `VillasSection` | Grille de 8 villas en location |
| Expériences | `ExperiencesSection` | Spa, sentiers, bâtiment de services |
| Forfaits | `ForfaitsSection` | Golf, nature, hiver |
| Investissement | `InvestSection` | Copropriété et opportunités |
| Presse | `MediaSection` | Citation média |
| Contact | `ContactSection` | Coordonnées + formulaire |
| Pied de page | `Footer` | Logo, liens, mentions légales |

## Prérequis

- [Node.js](https://nodejs.org/) 18 ou plus récent
- npm

## Démarrage

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:5173](http://localhost:5173).

## Scripts

| Commande | Description |
|----------|-------------|
| `npm run dev` | Serveur de développement Vite (hot reload) |
| `npm run build` | Compilation TypeScript + build production dans `dist/` |
| `npm run preview` | Prévisualisation du build local |

## Structure du projet

```
SitePortNeuf/
├── public/
│   └── images/
│       ├── villas/              # Photos des villas (site WordPress)
│       ├── logo-dgp-horizontal-2025.png
│       ├── villa-7e-ciel.jpg
│       ├── aerienne-ete.jpg
│       └── …                    # Autres visuels du design
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── UrgencyBanner.tsx
│   │   ├── AboutSection.tsx
│   │   ├── VillasSection.tsx
│   │   ├── ExperiencesSection.tsx
│   │   ├── ForfaitsSection.tsx
│   │   ├── InvestSection.tsx
│   │   ├── MediaSection.tsx
│   │   ├── ContactSection.tsx
│   │   ├── Footer.tsx
│   │   └── FadeIn.tsx           # Animation au scroll (IntersectionObserver)
│   ├── data/
│   │   └── villas.ts            # Liste des villas mises en avant
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css                # Styles globaux et design system
├── index.html
├── vite.config.ts
└── package.json
```

## Design system

Palette et typographie définies dans `src/index.css` :

| Token | Valeur | Usage |
|-------|--------|-------|
| `--cream` | `#FAF8F5` | Fond principal |
| `--dark` | `#0F0F0F` | Texte, sections sombres |
| `--forest` | `#2D4A35` | Boutons, accents verts |
| `--gold` | `#C8A96E` | Labels, survols |
| `--font-serif` | Cormorant Garamond | Titres |
| `--font-sans` | Montserrat | Corps de texte |

## Modifier les villas affichées

Les résidences de la section « Louez la villa de vos rêves » sont centralisées dans `src/data/villas.ts`.

Pour ajouter ou modifier une villa :

1. Placer l'image dans `public/images/villas/`
2. Ajouter un objet dans le tableau `featuredVillas` :

```ts
{
  id: 'ma-villa',
  name: 'Ma Villa',
  image: '/images/villas/ma-villa.jpg',
  alt: 'Ma Villa — Domaine du Grand-Portneuf',
  tag: 'Disponible',
  description: 'Courte description de la villa.',
  delay: 0, // 0, 1 ou 2 — décalage d'animation
}
```

Les photos des villas proviennent du site [domainedugrandportneuf.com](https://domainedugrandportneuf.com/) (médiathèque WordPress). Le logo officiel est `logo-dgp-horizontal-2025.png`.

## Assets et images

- **Logo** : récupéré depuis `wp-content/uploads/2025/04/logo-dgp-horizontal-2025.png`
- **Villas** : images extraites du CSS Elementor du site live
- **Hero / expériences** : visuels du design initial (Manus) + photos du domaine

Les fichiers de scraping local (`scrape-home.html`, `scrape-post-7.css`) sont ignorés par Git.

## Déploiement

Le build génère un site statique dans `dist/`, déployable sur :

- **Netlify / Vercel** — connecter le dépôt GitHub, build `npm run build`, dossier de sortie `dist`
- **Hébergement classique** — uploader le contenu de `dist/` via FTP
- **Intégration WordPress** — possible via thème enfant ou page HTML intégrée (à planifier)

```bash
npm run build
# Le résultat est dans dist/
```

## Pistes d'évolution

- Pages intérieures : Forfaits, Activités, Investissement, version anglaise
- Liens de réservation directs (Guesty, Alchalet, etc.) sur chaque villa
- Connexion du formulaire de contact à un service d'envoi (Formspree, API, etc.)
- Catalogue complet des 50+ unités du domaine
- Optimisation des images (compression, formats WebP)

## Licence

Projet privé — © Domaine du Grand-Portneuf. Tous droits réservés.
