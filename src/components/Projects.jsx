import { useRef, useState } from 'react'
import projects from '../data/projects.js'
import ProjectModal from './ProjectModal.jsx'

function ProjectCard({ project, onOpen, index }) {
  const cardRef = useRef(null)

  const handleMove = (e) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const rotateX = ((y - rect.height / 2) / rect.height) * -8
    const rotateY = ((x - rect.width / 2) / rect.width) * 8
    card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`
  }

  const handleLeave = () => {
    if (cardRef.current) {
      cardRef.current.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)'
    }
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className="tilt-card glass-card p-8 border border-transparent hover:border-accent-purple/40 hover:shadow-glow transition-shadow duration-300 reveal"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="w-full h-40 rounded-xl bg-grad-primary bg-[length:200%_200%] animate-gradient-shift opacity-80 flex items-center justify-center text-4xl mb-6">
        {index === 0 ? '🎟️' : '🛕'}
      </div>
      <h3 className="text-xl font-semibold text-white">{project.title}</h3>
      <p className="text-slate-400 mt-2 text-sm leading-relaxed">{project.summary}</p>

      <div className="flex flex-wrap gap-2 mt-5">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-7">
        <a
          href={project.github}
          onClick={(e) => e.preventDefault()}
          title="GitHub link coming soon"
          className="flex-1 text-center px-4 py-2 rounded-full text-sm font-medium border border-white/10 text-slate-300 hover:border-accent-cyan hover:text-accent-cyan transition-colors"
        >
          GitHub
        </a>
        <button
          onClick={() => onOpen(project)}
          className="flex-1 text-center px-4 py-2 rounded-full text-sm font-medium bg-grad-primary bg-[length:200%_200%] hover:animate-gradient-shift text-white transition-transform hover:scale-105"
        >
          Learn More
        </button>
      </div>
    </div>
  )
}

export default function Projects() {
  const [active, setActive] = useState(null)

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center reveal">
          <p className="section-eyebrow">Selected Work</p>
          <h2 className="section-title">Projects</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A couple of builds that reflect how I like to work: solid backend logic paired with a
            clean, usable interface.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-8">
          {projects.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} onOpen={setActive} />
          ))}
        </div>
      </div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </section>
  )
}
