import FadeIn from './FadeIn'

const experiences = [
  {
    image: '/images/gen_spa_sauna.jpg',
    title: 'Spa nordique',
    description: 'Piscine chauffée, sauna baril, bain tourbillon quatre saisons.',
    delay: 0 as const,
  },
  {
    image: '/images/gen_sentier_nature.jpg',
    title: 'Sentiers de randonnée',
    description: 'Des kilomètres de sentiers boisés au fil de la rivière Portneuf.',
    delay: 1 as const,
  },
  {
    image: '/images/batiment-services.jpg',
    title: 'Bâtiment de services',
    description: 'Billard, salle commune, équipements partagés — comme à l\'hôtel.',
    delay: 2 as const,
  },
]

export default function ExperiencesSection() {
  return (
    <section className="experiences-section section-padding" id="activites">
      <div className="container">
        <FadeIn className="section-header center">
          <span className="section-label">Expériences</span>
          <h2 className="section-title">Vivez le domaine toute l&apos;année</h2>
        </FadeIn>
        <div className="exp-grid">
          {experiences.map((exp) => (
            <FadeIn
              key={exp.title}
              className="exp-card"
              style={{ backgroundImage: `url('${exp.image}')` }}
              delay={exp.delay}
            >
              <div className="exp-overlay" />
              <div className="exp-content">
                <h3>{exp.title}</h3>
                <p>{exp.description}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
