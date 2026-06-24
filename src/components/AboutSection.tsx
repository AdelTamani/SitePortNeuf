import FadeIn from './FadeIn'

const features = [
  'Situé tout près du Golf Grand-Portneuf',
  'À seulement 20 minutes de Québec',
  "Multitude d'activités plein air",
  'Vues spectaculaires sur la forêt boréale',
  'Location Airbnb permise à 100 %',
  'Environnement naturel et enchanteur',
]

export default function AboutSection() {
  return (
    <section className="about-section section-padding" id="apropos">
      <div className="container grid-2col">
        <FadeIn className="about-text">
          <span className="section-label">À propos</span>
          <h2 className="section-title">Un domaine récréotouristique qui a tout pour plaire</h2>
          <p>
            Situé à Pont-Rouge, face au prestigieux Golf le Grand Portneuf (36 trous), le Domaine
            compte plusieurs unités décorées avec goût et parfaitement intégrées à la nature sauvage
            de cet immense boisé arpenté par la rivière Portneuf.
          </p>
          <p>
            Que vous soyez en quête d&apos;une escapade de fin de semaine, d&apos;un séjour prolongé ou
            d&apos;un investissement immobilier rentable, le Domaine du Grand-Portneuf offre une
            expérience unique alliant confort haut de gamme et nature préservée.
          </p>
          <ul className="about-features">
            {features.map((feature) => (
              <li key={feature}>
                <span className="feature-icon">✦</span> {feature}
              </li>
            ))}
          </ul>
        </FadeIn>
        <FadeIn className="about-image" delay={1}>
          <img
            src="/images/aerienne-ete.jpg"
            alt="Vue aérienne du Domaine du Grand-Portneuf — piscine et bâtiment de services"
          />
          <div className="about-badge">
            <strong>20 min</strong>
            <span>de Québec</span>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
