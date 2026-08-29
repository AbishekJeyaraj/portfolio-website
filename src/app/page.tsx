import HeroSection from "@/components/HeroSection"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Intern from "@/components/Intern"
import Certifications from "@/components/Certifications"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import Footer from "@/components/Footer"
import BackgroundCyber from "@/components/BackgroundCyber"

export default function Home() {
  return (
    <main id="main-content" className="flex-grow z-10 relative">
      <BackgroundCyber />
      <HeroSection />
      <About />
      <Skills />
      <Intern />
      <Certifications />
      <Projects />
      <Contact />
      <Footer />
    </main>
  )
}
