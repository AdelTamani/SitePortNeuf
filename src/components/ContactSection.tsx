import { type FormEvent, useState } from 'react'
import FadeIn from './FadeIn'

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitted(true)
    e.currentTarget.reset()
    window.setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section className="contact-section section-padding" id="contact">
      <div className="container grid-2col">
        <FadeIn className="contact-info">
          <span className="section-label">Nous joindre</span>
          <h2 className="section-title">Planifiez votre séjour ou votre investissement</h2>
          <p>
            Notre équipe est disponible pour répondre à toutes vos questions concernant les
            forfaits, les disponibilités ou les opportunités d&apos;investissement.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong>Chantale Aubin</strong>
                <a href="tel:4185714994">418-571-4994</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <div>
                <strong>Ligne générale</strong>
                <a href="tel:4184403235">418-440-3235</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="contact-icon">📍</span>
              <div>
                <strong>Adresse</strong>
                <span>Pont-Rouge, Québec</span>
              </div>
            </div>
          </div>
        </FadeIn>
        <FadeIn className="contact-form" delay={1}>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nom">Nom complet</label>
              <input type="text" id="nom" name="nom" placeholder="Votre nom" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Courriel</label>
              <input type="email" id="email" name="email" placeholder="votre@courriel.com" />
            </div>
            <div className="form-group">
              <label htmlFor="telephone">Téléphone</label>
              <input type="tel" id="telephone" name="telephone" placeholder="418-XXX-XXXX" />
            </div>
            <div className="form-group">
              <label htmlFor="interet">Je suis intéressé(e) par</label>
              <select id="interet" name="interet" defaultValue="">
                <option value="">-- Choisir --</option>
                <option value="sejour">Un séjour / forfait vacances</option>
                <option value="investissement">Un investissement immobilier</option>
                <option value="info">De l&apos;information générale</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Votre message…" />
            </div>
            <button
              type="submit"
              className="btn btn-primary full-width"
              disabled={submitted}
              style={submitted ? { background: '#2D4A35' } : undefined}
            >
              {submitted ? 'Message envoyé ✓' : 'Envoyer ma demande'}
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
