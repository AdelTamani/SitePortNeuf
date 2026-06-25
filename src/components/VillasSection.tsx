import FadeIn from './FadeIn'
import { featuredVillas } from '../data/villas'

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
          {featuredVillas.map((villa) => (
            <FadeIn key={villa.id} className="villa-card" delay={villa.delay}>
              <div className="villa-img-wrap">
                <img src={villa.image} alt={villa.alt} loading="lazy" />
                <span className="villa-tag">{villa.tag}</span>
              </div>
              <div className="villa-info">
                <h3>{villa.name}</h3>
                <p>{villa.description}</p>
                <a
                  href={villa.bookingUrl}
                  className="btn btn-sm btn-primary"
                  target="_blank"
                  rel="noopener noreferrer"
                >
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
