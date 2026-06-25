import { useEffect, useState, type MouseEvent } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSectionNavigation } from '../hooks/useSectionNavigation'

const navLinks = [
  { id: 'accueil', label: 'Accueil' },
  { id: 'forfaits', label: 'Forfaits / Vacances' },
  { id: 'activites', label: 'Activités' },
  { id: 'investissement', label: 'Investissement' },
  { id: 'contact', label: 'Nous joindre' },
]

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const { goToSection, isHome } = useSectionNavigation()
  const isHomePage = pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMenu = () => setMenuOpen(false)
  const showScrolled = !isHomePage || scrolled

  const handleSectionClick = (e: MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    closeMenu()
    goToSection(sectionId)
  }

  const handleLogoClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    closeMenu()
  }

  return (
    <header className={`site-header${showScrolled ? ' scrolled' : ''}`} id="top">
      <nav className="nav-container">
        <Link to="/" className="nav-logo" onClick={handleLogoClick}>
          <img src="/images/logo-dgp-horizontal-2025.png" alt="Le Domaine du Grand-Portneuf" />
        </Link>
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
            <li key={link.id}>
              <a href={`/#${link.id}`} onClick={(e) => handleSectionClick(e, link.id)}>
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#" className="nav-lang" onClick={closeMenu}>
              EN
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}
