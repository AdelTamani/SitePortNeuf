import FadeIn from './FadeIn'

const forfaits = [
  {
    icon: '⛳',
    title: 'Forfait Golf',
    description:
      'Hébergement + accès au Golf Grand-Portneuf (36 trous). Formules 2, 3 ou 4 nuits disponibles.',
    href: 'tel:4185714994',
    cta: '418-571-4994',
    delay: 0 as const,
  },
  {
    icon: '🌿',
    title: 'Escapade Nature',
    description:
      'Séjour en villa avec accès aux sentiers, spa nordique et bâtiment de services inclus.',
    href: 'tel:4184403235',
    cta: '418-440-3235',
    delay: 1 as const,
  },
  {
    icon: '❄️',
    title: 'Forfait Hiver',
    description:
      'Motoneige, ski de fond, raquettes — profitez de la magie hivernale du Portneuf.',
    href: '#contact',
    cta: 'Nous contacter',
    delay: 2 as const,
  },
]

export default function ForfaitsSection() {
  return (
    <section className="forfaits-section section-padding bg-light" id="forfaits">
      <div className="container">
        <FadeIn className="section-header center">
          <span className="section-label">Forfaits vacances</span>
          <h2 className="section-title">Plusieurs forfaits hébergement / golf disponibles</h2>
          <p className="section-intro">(3 terrains de golf accessibles)</p>
        </FadeIn>
        <div className="forfaits-grid">
          {forfaits.map((forfait) => (
            <FadeIn key={forfait.title} className="forfait-card" delay={forfait.delay}>
              <div className="forfait-icon">{forfait.icon}</div>
              <h3>{forfait.title}</h3>
              <p>{forfait.description}</p>
              <a href={forfait.href} className="btn btn-outline-dark">
                {forfait.cta}
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
