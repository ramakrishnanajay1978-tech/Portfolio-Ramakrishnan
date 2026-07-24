import { useEffect } from 'react'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    if (project) {
      document.addEventListener('keydown', onKey)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} details`}
    >
      <div className="absolute inset-0 bg-navy-950/80 backdrop-blur-sm" onClick={onClose} />
      <div className="relative glass-card max-w-2xl w-full max-h-[85vh] overflow-y-auto p-8 sm:p-10 animate-fade-up">
        <button
          onClick={onClose}
          aria-label="Close project details"
          className="absolute top-5 right-5 w-9 h-9 rounded-full glass flex items-center justify-center hover:shadow-glow-cyan transition-shadow"
        >
          ✕
        </button>

        <h3 className="text-2xl font-heading font-bold gradient-text pr-10">{project.title}</h3>

        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 rounded-full text-xs font-medium border border-white/10 bg-white/5 text-slate-300"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="mt-6 space-y-6 text-sm leading-relaxed text-slate-300">
          <div>
            <h4 className="text-white font-semibold mb-2">Project Overview</h4>
            <p>{project.overview}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Key Features</h4>
            <ul className="space-y-1.5">
              {project.features.map((f) => (
                <li key={f} className="flex gap-2">
                  <span className="text-accent-cyan">▹</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Architecture</h4>
            <p>{project.architecture}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Technologies Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-medium border border-accent-purple/30 bg-accent-purple/10 text-accent-purple"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Challenges Faced</h4>
            <p>{project.challenges}</p>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-2">Future Improvements</h4>
            <p>{project.improvements}</p>
          </div>
        </div>

        <div className="flex gap-3 mt-8">
          <a
            href={project.github}
            onClick={(e) => e.preventDefault()}
            title="GitHub link coming soon"
            className="btn-outline flex-1 text-center"
          >
            View on GitHub
          </a>
          <button onClick={onClose} className="btn-primary flex-1">
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
