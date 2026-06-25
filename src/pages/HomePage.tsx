import Hero from '../components/Hero'
import UrgencyBanner from '../components/UrgencyBanner'
import AboutSection from '../components/AboutSection'
import VillasSection from '../components/VillasSection'
import ExperiencesSection from '../components/ExperiencesSection'
import ForfaitsSection from '../components/ForfaitsSection'
import InvestSection from '../components/InvestSection'
import MediaSection from '../components/MediaSection'
import ContactSection from '../components/ContactSection'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { scrollToSection } from '../utils/scrollToSection'

export default function HomePage() {
  const location = useLocation()

  useEffect(() => {
    const state = location.state as { scrollTo?: string } | null
    const target = state?.scrollTo ?? (location.hash ? location.hash.slice(1) : null)
    if (!target) return

    const timer = window.setTimeout(() => scrollToSection(target), 50)
    return () => window.clearTimeout(timer)
  }, [location.pathname, location.hash, location.state])

  return (
    <>
      <Hero />
      <UrgencyBanner />
      <AboutSection />
      <VillasSection />
      <ExperiencesSection />
      <ForfaitsSection />
      <InvestSection />
      <MediaSection />
      <ContactSection />
    </>
  )
}
