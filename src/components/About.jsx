const ACADEMIC_TIMELINE = [
  { year: 'Year I', title: 'Foundations', desc: 'Core engineering fundamentals, mathematics and programming basics.' },
  { year: 'Year II', title: 'Core AI & DS', desc: 'Data structures, databases and the foundations of AI & Data Science.' },
  { year: 'Year III', title: 'Applied Development', desc: 'Backend development, applied ML and full-stack project work — currently here.' },
]

const TECH_TIMELINE = [
  { title: 'Backend Foundations', desc: 'Built REST APIs and services with Spring Boot.' },
  { title: 'Database Design', desc: 'Worked across MySQL, PostgreSQL and MongoDB.' },
  { title: 'AI & ML Exploration', desc: 'Began exploring machine learning and deep learning concepts.' },
  { title: 'UI/UX & Tooling', desc: 'Picked up Figma, Docker and Git-based workflows.' },
]

const HOBBIES = [
  { icon: '💻', label: 'Coding' },
  { icon: '🎮', label: 'Gaming' },
  { icon: '✈️', label: 'Travelling' },
]

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center reveal">
          <p className="section-eyebrow">About Me</p>
          <h2 className="section-title">Who I Am</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A closer look at my education, growth, and the things that keep me curious outside of code.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-2 gap-8">
          {/* Academic info card */}
          <div className="glass-card p-8 reveal">
            <h3 className="text-xl font-semibold text-white mb-6">Education</h3>
            <ul className="space-y-4 text-slate-300">
              <li className="flex items-start gap-3">
                <span className="text-accent-cyan mt-1">▹</span>
                B.Tech in Artificial Intelligence and Data Science (AI &amp; DS)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-cyan mt-1">▹</span>
                Sri Krishna College of Engineering and Technology (SKCET)
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-cyan mt-1">▹</span>
                III Year
              </li>
              <li className="flex items-start gap-3">
                <span className="text-accent-cyan mt-1">▹</span>
                CGPA: <span className="text-accent-purple font-semibold">7.05</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-8 mb-4">Hobbies</h3>
            <div className="flex gap-4">
              {HOBBIES.map((h) => (
                <div
                  key={h.label}
                  className="flex-1 glass-card p-4 text-center hover:shadow-glow transition-shadow"
                >
                  <div className="text-2xl">{h.icon}</div>
                  <div className="text-sm mt-2 text-slate-300">{h.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Academic timeline */}
          <div className="glass-card p-8 reveal">
            <h3 className="text-xl font-semibold text-white mb-6">Academic Timeline</h3>
            <ol className="relative border-l border-white/10 ml-2 space-y-8">
              {ACADEMIC_TIMELINE.map((item) => (
                <li key={item.year} className="ml-6">
                  <span className="absolute -left-[7px] w-3.5 h-3.5 rounded-full bg-grad-primary shadow-glow" />
                  <p className="text-xs uppercase tracking-wider text-accent-cyan font-semibold">
                    {item.year}
                  </p>
                  <h4 className="font-semibold text-white mt-1">{item.title}</h4>
                  <p className="text-sm text-slate-400 mt-1">{item.desc}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Technical growth timeline */}
        <div className="mt-8 glass-card p-8 reveal">
          <h3 className="text-xl font-semibold text-white mb-8">Technical Growth</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_TIMELINE.map((item, i) => (
              <div
                key={item.title}
                className="glass-card p-5 hover:-translate-y-2 hover:shadow-glow transition-all duration-300 reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <div className="w-9 h-9 rounded-lg bg-grad-primary flex items-center justify-center text-sm font-bold text-white mb-4">
                  {i + 1}
                </div>
                <h4 className="font-semibold text-white">{item.title}</h4>
                <p className="text-sm text-slate-400 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
