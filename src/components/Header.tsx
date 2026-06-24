import { useEffect, useState } from 'react'

const navLinks = [
  { href: '#accueil', label: 'Accueil' },
  { href: '#forfaits', label: 'Forfaits / Vacances' },
  { href: '#activites', label: 'Activités' },
  { href: '#investissement', label: 'Investissement' },
  { href: '#contact', label: 'Nous joindre' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = () => setMenuOpen(false)

  return (
    <header className={`site-header${scrolled ? ' scrolled' : ''}`} id="top">
      <nav className="nav-container">
        <a href="#top" className="nav-logo">
          <img src="/images/logo-dgp-horizontal-2025.png" alt="Le Domaine du Grand-Portneuf" />
        </a>
        <button
          className="nav-toggle"
          aria-label="Menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
        <ul className={`nav-links${menuOpen ? ' open' : ''}`}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleNavClick}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#" className="nav-lang" onClick={handleNavClick}>
              EN
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
