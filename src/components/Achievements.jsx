const CATEGORIES = [
  { icon: '📜', title: 'Certifications' },
  { icon: '🧩', title: 'Coding Profiles' },
  { icon: '🚀', title: 'Hackathons' },
  { icon: '🧑\u200d🏫', title: 'Workshops' },
  { icon: '🏆', title: 'Awards' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center reveal">
          <p className="section-eyebrow">Recognition</p>
          <h2 className="section-title">Achievements</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            This section will grow as certifications, hackathons and awards come in — for now,
            here's what's on the way.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CATEGORIES.map((c, i) => (
            <div
              key={c.title}
              className="glass-card p-8 text-center hover:shadow-glow transition-all duration-300 reveal"
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="text-3xl">{c.icon}</div>
              <h3 className="font-semibold text-white mt-4">{c.title}</h3>
              <span className="inline-block mt-4 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider border border-accent-cyan/30 text-accent-cyan bg-accent-cyan/5">
                Coming Soon
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
