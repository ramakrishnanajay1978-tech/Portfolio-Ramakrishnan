const PARTICLES = Array.from({ length: 22 }, (_, i) => ({
  id: i,
  size: 2 + Math.random() * 5,
  left: Math.random() * 100,
  top: Math.random() * 100,
  delay: Math.random() * 6,
  duration: 5 + Math.random() * 8,
}))

export default function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p) => (
        <span
          key={p.id}
          className="absolute rounded-full bg-gradient-to-br from-accent-cyan to-accent-purple opacity-40"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.left}%`,
            top: `${p.top}%`,
            animation: `float ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  )
}
