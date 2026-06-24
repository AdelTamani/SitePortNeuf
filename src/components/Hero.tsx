import { useEffect, useState } from 'react'

const slides = [
  '/images/gen_hero_hiver.jpg',
  '/images/villa-7e-ciel.jpg',
  '/images/gen_spa_sauna.jpg',
]

export default function Hero() {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToSlide = (index: number) => setCurrent(index)

  return (
    <section className="hero" id="accueil">
      <div className="hero-slider">
        {slides.map((src, index) => (
          <div
            key={src}
            className={`hero-slide${index === current ? ' active' : ''}`}
            style={{ backgroundImage: `url('${src}')` }}
          />
        ))}
      </div>
      <div className="hero-overlay" />
      <div className="hero-content">
        <span className="hero-eyebrow">Pont-Rouge, Québec · À 20 min de Québec</span>
        <h1 className="hero-title">
          Votre oasis
          <br />
          <em>toute saison</em>
        </h1>
        <p className="hero-subtitle">
          Villas contemporaines de style scandinave, nichées dans un boisé naturel protégé.
        </p>
        <div className="hero-cta">
          <a href="#forfaits" className="btn btn-primary">
            Réserver un séjour
          </a>
          <a href="#investissement" className="btn btn-outline">
            Investir ici
          </a>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span />
      </div>
      <div className="hero-dots">
        {slides.map((_, index) => (
          <button
            key={index}
            type="button"
            className={`dot${index === current ? ' active' : ''}`}
            aria-label={`Slide ${index + 1}`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  )
}
