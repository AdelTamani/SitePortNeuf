import Header from './components/Header'
import Hero from './components/Hero'
import UrgencyBanner from './components/UrgencyBanner'
import AboutSection from './components/AboutSection'
import VillasSection from './components/VillasSection'
import ExperiencesSection from './components/ExperiencesSection'
import ForfaitsSection from './components/ForfaitsSection'
import InvestSection from './components/InvestSection'
import MediaSection from './components/MediaSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <UrgencyBanner />
        <AboutSection />
        <VillasSection />
        <ExperiencesSection />
        <ForfaitsSection />
        <InvestSection />
        <MediaSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  )
}

export default App
