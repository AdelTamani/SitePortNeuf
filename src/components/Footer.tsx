const footerLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#forfaits', label: 'Forfaits' },
  { href: '#activites', label: 'Activités' },
  { href: '#investissement', label: 'Investissement' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
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
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="footer-legal">
          <p>&copy; 2026 Domaine du Grand-Portneuf. Tous droits réservés.</p>
          <a href="#">Politique de confidentialité</a>
          <a href="#">Termes et conditions</a>
        </div>
      </div>
    </footer>
  )
}
