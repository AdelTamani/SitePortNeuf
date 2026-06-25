export type Villa = {
  id: string
  name: string
  image: string
  alt: string
  tag: string
  description: string
  bookingUrl: string
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
    bookingUrl: 'https://chaletsconfort.guestybookings.com/listings/62d6f59b3ad9be003275823a',
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
    bookingUrl: 'https://chaletsconfort.guestybookings.com/listings/62d6f6b5eee79a0036cd457d',
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
    bookingUrl: 'https://chaletsconfort.guestybookings.com/listings/62d6f594d3a827003774fe1e',
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
    bookingUrl:
      'https://booking.alchalet.ca/fr-FR/l/6982136a6cf53900333df165/la-charmante-cozy-et-familial?region=%7B%22city%22%3A%22pont-rouge%22%2C%22country%22%3A%22CA%22%7D&currency=CAD',
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
    bookingUrl:
      'https://fleximmobilier.com/fr-ca/hebergement/north-star-de-portneuf-spa-prive-en-foret/',
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
    bookingUrl:
      'https://fleximmobilier.com/fr-ca/hebergement/spa-prive-piscine-sentiers-le-wapiti-de-portneuf/',
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
    bookingUrl:
      'https://fleximmobilier.com/fr-ca/hebergement/coureur-des-bois-portneuf-spa-prive-sauna/',
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
    bookingUrl: 'https://www.maisonsetchaletsalouer.com/fr/chalets/324-l-elegance-de-portneuf.html',
    delay: 1,
  },
]
