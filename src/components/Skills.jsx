const CATEGORIES = [
  {
    title: 'Backend',
    icon: '🛠️',
    skills: [
      { name: 'Spring Boot', level: 75 },
      { name: 'REST API', level: 80 },
    ],
  },
  {
    title: 'Databases',
    icon: '🗄️',
    skills: [
      { name: 'MySQL', level: 80 },
      { name: 'PostgreSQL', level: 70 },
      { name: 'MongoDB', level: 65 },
    ],
  },
  {
    title: 'AI / Machine Learning',
    icon: '🤖',
    skills: [
      { name: 'Machine Learning', level: 65 },
      { name: 'Deep Learning', level: 55 },
    ],
  },
  {
    title: 'Tools',
    icon: '🧰',
    skills: [
      { name: 'Git', level: 80 },
      { name: 'GitHub', level: 80 },
      { name: 'VS Code', level: 85 },
      { name: 'Docker', level: 60 },
      { name: 'Figma', level: 65 },
    ],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center reveal">
          <p className="section-eyebrow">What I Work With</p>
          <h2 className="section-title">Skills &amp; Technologies</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A toolbox spanning backend engineering, databases, applied AI/ML and the tools that
            keep my workflow smooth.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-6">
          {CATEGORIES.map((cat, ci) => (
            <div
              key={cat.title}
              className="glass-card p-8 hover:shadow-glow transition-all duration-300 reveal"
              style={{ transitionDelay: `${ci * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {cat.skills.map((s) => (
                  <span
                    key={s.name}
                    className="px-3 py-1.5 rounded-full text-xs font-medium border border-white/10 text-slate-300 bg-white/5 hover:border-accent-cyan hover:text-accent-cyan hover:shadow-glow-cyan transition-all duration-300"
                  >
                    {s.name}
                  </span>
                ))}
              </div>

              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <div key={s.name}>
                    <div className="flex justify-between text-xs text-slate-400 mb-1">
                      <span>{s.name}</span>
                      <span>{s.level}%</span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/10 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-grad-primary bg-[length:200%_200%] animate-gradient-shift transition-all duration-1000"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
