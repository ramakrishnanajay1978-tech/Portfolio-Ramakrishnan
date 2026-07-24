import { useEffect, useState } from 'react'
import Loader from './components/Loader.jsx'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Stats from './components/Stats.jsx'
import Skills from './components/Skills.jsx'
import Services from './components/Services.jsx'
import Projects from './components/Projects.jsx'
import Achievements from './components/Achievements.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import BackToTop from './components/BackToTop.jsx'
import CursorGlow from './components/CursorGlow.jsx'
import useReveal from './hooks/useReveal.js'

export default function App() {
  const [loading, setLoading] = useState(true)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1600)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme])

  useReveal([loading])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <Loader visible={loading} />
      <CursorGlow />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Stats />
        <Skills />
        <Services />
        <Projects />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  )
}
