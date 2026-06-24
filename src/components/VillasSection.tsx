import FadeIn from './FadeIn'

const villas = [
  {
    id: 'villa-7e-ciel',
    image: '/images/villa-7e-ciel.jpg',
    alt: 'Villa 7e Ciel — Domaine du Grand-Portneuf',
    tag: 'Disponible',
    title: (
      <>
        Villa 7<sup>e</sup> Ciel
      </>
    ),
    description:
      "Grande villa vitrée avec terrasse et vue forêt. Idéale pour les familles ou groupes d'amis.",
    delay: 0 as const,
  },
  {
    id: 'la-scandinave',
    image: '/images/gen_interieur_villa.jpg',
    alt: "Intérieur luxueux d'une villa — Domaine du Grand-Portneuf",
    tag: 'Coup de cœur',
    title: 'La Scandinave',
    description:
      'Intérieur chaleureux, cheminée en pierre et vue panoramique sur la forêt depuis le salon.',
    delay: 1 as const,
  },
  {
    id: 'le-bosquet',
    image: '/images/gen_hero_hiver.jpg',
    alt: 'Villa hiver avec spa extérieur — Domaine du Grand-Portneuf',
    tag: 'Hiver & Été',
    title: 'Le Bosquet',
    description:
      'Spa extérieur privatif, terrasse chauffée et ambiance cocooning en toute saison.',
    delay: 2 as const,
  },
]

export default function VillasSection() {
  return (
    <section className="villas-section section-padding bg-dark" id="villas">
      <div className="container">
        <FadeIn className="section-header center">
          <span className="section-label light">Nos résidences</span>
          <h2 className="section-title light">Louez la villa de vos rêves</h2>
          <p className="section-intro light">
            Chaque villa est une invitation au dépaysement total — architecture contemporaine,
            matériaux nobles et intégration parfaite à la nature.
          </p>
        </FadeIn>
        <div className="villas-grid">
          {villas.map((villa) => (
            <FadeIn key={villa.id} className="villa-card" delay={villa.delay}>
              <div className="villa-img-wrap">
                <img src={villa.image} alt={villa.alt} />
                <span className="villa-tag">{villa.tag}</span>
              </div>
              <div className="villa-info">
                <h3>{villa.title}</h3>
                <p>{villa.description}</p>
                <a href="#contact" className="btn btn-sm btn-primary">
                  Réserver
                </a>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
