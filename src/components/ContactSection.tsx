import { type FormEvent, useState } from 'react'
import FadeIn from './FadeIn'

const CONTACT_EMAIL = 'info@domainedugrandportneuf.com'

const INTEREST_LABELS: Record<string, string> = {
  sejour: 'Un séjour / forfait vacances',
  investissement: 'Un investissement immobilier',
  info: "De l'information générale",
}

function buildMailtoUrl(form: HTMLFormElement) {
  const data = new FormData(form)
  const nom = String(data.get('nom') ?? '').trim()
  const email = String(data.get('email') ?? '').trim()
  const telephone = String(data.get('telephone') ?? '').trim()
  const interetKey = String(data.get('interet') ?? '')
  const message = String(data.get('message') ?? '').trim()
  const interet = INTEREST_LABELS[interetKey] ?? interetKey

  const subject = `Nouvelle demande — ${nom}`
  const body = [
    'Bonjour,',
    '',
    'Voici ma demande depuis le site web du Domaine du Grand-Portneuf :',
    '',
    `Nom : ${nom}`,
    `Courriel : ${email}`,
    telephone ? `Téléphone : ${telephone}` : null,
    `Intérêt : ${interet}`,
    '',
    'Message :',
    message,
  ]
    .filter((line) => line !== null)
    .join('\n')

  const params = new URLSearchParams({
    subject,
    body,
  })

  return `mailto:${CONTACT_EMAIL}?${params.toString()}`
}

export default function ContactSection() {
  const [opened, setOpened] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form.reportValidity()) return

    window.location.href = buildMailtoUrl(form)
    setOpened(true)
    window.setTimeout(() => setOpened(false), 6000)
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
              <span className="contact-icon">✉️</span>
              <div>
                <strong>Courriel</strong>
                <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
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
              <input
                type="text"
                id="nom"
                name="nom"
                placeholder="Votre nom"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Courriel</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="votre@courriel.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telephone">Téléphone</label>
              <input type="tel" id="telephone" name="telephone" placeholder="418-XXX-XXXX" />
            </div>
            <div className="form-group">
              <label htmlFor="interet">Je suis intéressé(e) par</label>
              <select id="interet" name="interet" defaultValue="" required>
                <option value="">-- Choisir --</option>
                <option value="sejour">Un séjour / forfait vacances</option>
                <option value="investissement">Un investissement immobilier</option>
                <option value="info">De l&apos;information générale</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="Votre message…"
                required
              />
            </div>
            {opened && (
              <p className="form-success" role="status">
                Votre application de courriel (Gmail, Outlook, etc.) s&apos;ouvre avec le message
                prérempli. Il ne reste qu&apos;à cliquer sur Envoyer.
              </p>
            )}
            <button type="submit" className="btn btn-primary full-width">
              Envoyer ma demande
            </button>
          </form>
        </FadeIn>
      </div>
    </section>
  )
}
