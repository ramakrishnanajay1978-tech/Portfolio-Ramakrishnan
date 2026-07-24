const SERVICES = [
  {
    icon: '🎨',
    title: 'UI/UX Design',
    desc: 'Design clean, modern, and user-friendly interfaces focused on excellent user experience.',
  },
  {
    icon: '🗃️',
    title: 'Database Design',
    desc: 'Design efficient, scalable, and optimized database structures for modern applications.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center reveal">
          <p className="section-eyebrow">How I Can Help</p>
          <h2 className="section-title">Services</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Focused on the two disciplines that connect great user experience with solid
            engineering underneath it.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {SERVICES.map((s, i) => (
            <div
              key={s.title}
              className="group glass-card p-10 text-center hover:-translate-y-3 hover:shadow-glow transition-all duration-500 reveal"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className="w-16 h-16 mx-auto rounded-2xl bg-grad-primary bg-[length:200%_200%] group-hover:animate-gradient-shift flex items-center justify-center text-3xl shadow-glow">
                {s.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mt-6">{s.title}</h3>
              <p className="text-slate-400 mt-3 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
