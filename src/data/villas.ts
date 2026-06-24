export type Villa = {
  id: string
  name: string
  image: string
  alt: string
  tag: string
  description: string
  delay: 0 | 1 | 2
}

export const featuredVillas: Villa[] = [
  {
    id: 'la-bonita',
    name: 'La Bonita',
    image: '/images/villas/la-bonita.jpg',
    alt: 'La Bonita — Domaine du Grand-Portneuf',
    tag: 'Disponible',
    description:
      'Villa lumineuse aux tons bois et blanc, parfaite pour une escapade en famille au cœur du boisé.',
    delay: 0,
  },
  {
    id: 'evasion',
    name: 'Évasion',
    image: '/images/villas/evasion.jpg',
    alt: 'Évasion — Domaine du Grand-Portneuf',
    tag: 'Coup de cœur',
    description:
      'Architecture moderne et bois bleuté pour un séjour dépaysant, entre confort et nature.',
    delay: 1,
  },
  {
    id: 'la-relache',
    name: 'La Relâche',
    image: '/images/villas/la-relache.jpg',
    alt: 'La Relâche — Domaine du Grand-Portneuf',
    tag: 'Disponible',
    description:
      'Chalet contemporain au design épuré, idéal pour se ressourcer en toute tranquillité.',
    delay: 2,
  },
  {
    id: 'charmante',
    name: 'Charmante',
    image: '/images/villas/charmante.jpg',
    alt: 'Charmante — Domaine du Grand-Portneuf',
    tag: 'Hiver & Été',
    description:
      'Villa grise aux lignes modernes, intégrée harmonieusement à la forêt environnante.',
    delay: 0,
  },
  {
    id: 'north-star',
    name: 'North Star',
    image: '/images/villa-7e-ciel.jpg',
    alt: 'North Star — Domaine du Grand-Portneuf',
    tag: 'Disponible',
    description:
      'Grande villa vitrée avec terrasse et vue forêt. Idéale pour les familles ou groupes d\'amis.',
    delay: 1,
  },
  {
    id: 'le-wapiti',
    name: 'Le Wapiti',
    image: '/images/villas/le-wapiti.jpg',
    alt: 'Le Wapiti — Domaine du Grand-Portneuf',
    tag: 'Spa privatif',
    description:
      'Villa blanche d\'hiver avec spa extérieur et terrasse — confort nordique en toute saison.',
    delay: 2,
  },
  {
    id: 'le-coureur-des-bois',
    name: 'Le coureur des bois',
    image: '/images/villas/le-coureur-des-bois.png',
    alt: 'Le coureur des bois — Domaine du Grand-Portneuf',
    tag: 'Nature',
    description:
      'Refuge boisé chaleureux pour les amoureux de la forêt et des longues promenades.',
    delay: 0,
  },
  {
    id: 'l-elegance',
    name: "L'Élégance",
    image: '/images/gen_spa_sauna.jpg',
    alt: "L'Élégance — Domaine du Grand-Portneuf",
    tag: 'Coup de cœur',
    description:
      'Ambiance raffinée et détente absolue — spa, sauna et confort haut de gamme en milieu boisé.',
    delay: 1,
  },
]
