import { useEffect, useState } from 'react'

const LINKS = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'services', label: 'Services' },
  { id: 'projects', label: 'Projects' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar({ theme, toggleTheme }) {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  const handleClick = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
    >
      <nav
        className={`mx-auto max-w-6xl px-5 sm:px-8 flex items-center justify-between rounded-full transition-all duration-500 ${
          scrolled ? 'glass py-2 shadow-glow' : 'py-1'
        }`}
      >
        <button
          onClick={() => handleClick('home')}
          className="font-heading font-bold text-lg gradient-text"
        >
          RK<span className="text-slate-300">.</span>
        </button>

        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map((link) => (
            <li key={link.id}>
              <button
                onClick={() => handleClick(link.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  active === link.id
                    ? 'text-white bg-white/10 shadow-glow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            aria-label="Toggle dark and light mode"
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:shadow-glow-cyan transition-shadow"
          >
            {theme === 'dark' ? '🌙' : '☀️'}
          </button>
          <button
            className="md:hidden w-10 h-10 rounded-full glass flex items-center justify-center"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span className="text-lg">{menuOpen ? '✕' : '☰'}</span>
          </button>
        </div>
      </nav>

      {menuOpen && (
        <div className="md:hidden mx-5 mt-2 glass rounded-2xl overflow-hidden animate-fade-up">
          {LINKS.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`block w-full text-left px-6 py-3 text-sm font-medium border-b border-white/5 last:border-none ${
                active === link.id ? 'text-accent-cyan' : 'text-slate-300'
              }`}
            >
              {link.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
