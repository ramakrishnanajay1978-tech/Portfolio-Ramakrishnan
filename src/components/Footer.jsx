const SOCIALS = [
  { label: 'LinkedIn', icon: 'in', href: 'https://www.linkedin.com/in/rama-krishnan-565664326/' },
  { label: 'GitHub', icon: 'gh', href: 'https://github.com/ramakrishnanajay1978-tech' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-12 reveal">
      <div className="mx-auto max-w-6xl px-6 flex flex-col items-center gap-6 text-center">
        <p className="font-heading font-bold text-lg gradient-text">Rama Krishnan L</p>
        <p className="text-slate-400 text-sm max-w-md">
          "Building innovative solutions with passion and technology."
        </p>

        <div className="flex gap-3">
          {SOCIALS.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-xs font-bold text-slate-300 hover:text-accent-cyan hover:shadow-glow-cyan transition-all"
            >
              {s.icon}
            </a>
          ))}
        </div>

        <p className="text-xs text-slate-500">
          © 2026 Rama Krishnan L. All Rights Reserved.
        </p>
      </div>
    </footer>
  )
}
