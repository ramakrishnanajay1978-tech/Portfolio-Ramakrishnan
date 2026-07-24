import useCountUp from '../hooks/useCountUp.js'

function StatCard({ end, suffix = '', label }) {
  const [ref, value] = useCountUp(end)
  return (
    <div ref={ref} className="glass-card p-8 text-center hover:shadow-glow transition-shadow reveal">
      <div className="text-4xl sm:text-5xl font-heading font-extrabold gradient-text">
        {value}
        {suffix}
      </div>
      <p className="mt-2 text-sm text-slate-400 tracking-wide">{label}</p>
    </div>
  )
}

export default function Stats() {
  return (
    <section className="relative py-16">
      <div className="mx-auto max-w-6xl px-6 grid grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard end={2} suffix="+" label="Projects Completed" />
        <StatCard end={10} suffix="+" label="Technologies" />
        <div className="glass-card p-8 text-center hover:shadow-glow transition-shadow reveal flex flex-col items-center justify-center">
          <div className="text-2xl sm:text-3xl font-heading font-extrabold gradient-text">AI &amp; DS</div>
          <p className="mt-2 text-sm text-slate-400 tracking-wide">Student</p>
        </div>
        <div className="glass-card p-8 text-center hover:shadow-glow transition-shadow reveal flex flex-col items-center justify-center">
          <div className="text-2xl sm:text-3xl font-heading font-extrabold gradient-text">∞</div>
          <p className="mt-2 text-sm text-slate-400 tracking-wide">Continuous Learning</p>
        </div>
      </div>
    </section>
  )
}
