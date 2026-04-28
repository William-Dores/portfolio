import { Header } from './components/Header'
import { HeroSection } from './components/HeroSection'
import { AboutSection } from './components/AboutSection'
import { SkillSection } from './components/SkillSection'
import { StackSection } from './components/StackSection'
import { ProjectCarousel } from './components/ProjectCarousel'
import { ContactSection } from './components/ContactSection'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Header />

      <main>
        <HeroSection />
        <AboutSection />
        <SkillSection />
        <StackSection />
        <ProjectCarousel />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}