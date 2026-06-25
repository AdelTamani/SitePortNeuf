import { Link } from 'react-router-dom'
import { useSectionNavigation } from '../hooks/useSectionNavigation'
import type { MouseEvent } from 'react'

const footerLinks = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'forfaits', label: 'Forfaits' },
  { id: 'activites', label: 'Activités' },
  { id: 'investissement', label: 'Investissement' },
  { id: 'contact', label: 'Contact' },
]

export default function Footer() {
  const { goToSection } = useSectionNavigation()

  const handleSectionClick = (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    goToSection(sectionId)
  }

  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-logo">
          <img src="/images/logo-dgp-horizontal-2025.png" alt="Le Domaine du Grand-Portneuf" />
          <p>
            Résidences Haut de Gamme
            <br />
            Pont-Rouge, Québec
          </p>
        </div>
        <nav className="footer-nav">
          {footerLinks.map((link) => (
            <a key={link.id} href={`/#${link.id}`} onClick={(e) => handleSectionClick(e, link.id)}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="footer-legal">
          <p>&copy; 2026 Domaine du Grand-Portneuf. Tous droits réservés.</p>
          <Link to="/politique-de-confidentialite">Politique de confidentialité</Link>
          <Link to="/termes-et-conditions">Termes et conditions</Link>
        </div>
      </div>
    </footer>
  )
}
