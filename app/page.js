import GSAPBackground from '../components/GSAPBackground'
import LenisProvider from '../components/LenisProvider'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Education from '../components/Education'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <LenisProvider>
      {/* Animated background — always behind everything */}
      <GSAPBackground />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>

      <Footer />
    </LenisProvider>
  )
}
