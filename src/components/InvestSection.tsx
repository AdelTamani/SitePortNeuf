import FadeIn from './FadeIn'

const investPoints = [
  'Location à court terme (style Airbnb) permise à 100 %',
  'Revenus passifs intéressants et investissement autofinançable',
  'À partir de 100 000 $ de mise de fonds',
  "100 % de la TPS et de la TVQ remboursable à l'achat",
  'Partenariats avec plusieurs agences de gestion locative',
]

export default function InvestSection() {
  return (
    <section className="invest-section section-padding" id="investissement">
      <div className="container grid-2col reverse">
        <FadeIn className="invest-image">
          <img
            src="/images/gen_hero_hiver.jpg"
            alt="Villa haut de gamme — investissement immobilier Domaine du Grand-Portneuf"
          />
        </FadeIn>
        <FadeIn className="invest-text" delay={1}>
          <span className="section-label">Investissement</span>
          <h2 className="section-title">
            Devenez copropriétaire d&apos;un actif immobilier distinctif
          </h2>
          <p>
            Le Domaine du Grand Portneuf vous propose des villas modernes à l&apos;architecture
            contemporaine de style scandinave, situées dans un environnement naturel protégé,
            conçues pour allier rentabilité et qualité de vie.
          </p>
          <ul className="invest-list">
            {investPoints.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
          <div className="invest-badge">
            <strong>+90&nbsp;%</strong>
            <span>du projet déjà vendu</span>
          </div>
          <a href="#contact" className="btn btn-primary">
            Contactez-nous dès maintenant
          </a>
        </FadeIn>
      </div>
    </section>
  )
}
