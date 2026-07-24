import { useState } from 'react'

const FIELDS = [
  { name: 'name', label: 'Your Name', type: 'text' },
  { name: 'email', label: 'Your Email', type: 'email' },
  { name: 'subject', label: 'Subject', type: 'text' },
]

const CONTACT_INFO = [
  { icon: '✉️', label: 'Email', value: 'ramakrishnanajat1978@gmail.com', href: 'mailto:ramakrishnanajat1978@gmail.com' },
  { icon: '📱', label: 'Phone', value: '+91 9514105271', href: 'tel:+919514105271' },
  { icon: '📍', label: 'Location', value: 'Coimbatore, Tamil Nadu', href: null },
]

const SOCIALS = [
  { label: 'LinkedIn', icon: 'in', href: 'https://www.linkedin.com/in/rama-krishnan-565664326/' },
  { label: 'GitHub', icon: 'gh', href: 'https://github.com/ramakrishnanajay1978-tech' },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const validate = () => {
    const next = {}
    if (!form.name.trim()) next.name = 'Name is required'
    if (!form.email.trim()) next.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Enter a valid email'
    if (!form.subject.trim()) next.subject = 'Subject is required'
    if (!form.message.trim()) next.message = 'Message is required'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSubmitted(true)
    setForm({ name: '', email: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 4000)
  }

  const field = (name, label, type = 'text') => (
    <div className="relative">
      <input
        id={name}
        type={type}
        value={form[name]}
        onChange={(e) => setForm({ ...form, [name]: e.target.value })}
        placeholder=" "
        className={`peer w-full bg-white/5 border rounded-xl px-4 pt-5 pb-2 text-slate-100 placeholder-transparent outline-none transition-colors ${
          errors[name] ? 'border-red-400' : 'border-white/10 focus:border-accent-cyan'
        }`}
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-3.5 text-slate-400 text-sm transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-accent-cyan peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs"
      >
        {label}
      </label>
      {errors[name] && <p className="text-xs text-red-400 mt-1">{errors[name]}</p>}
    </div>
  )

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center reveal">
          <p className="section-eyebrow">Get In Touch</p>
          <h2 className="section-title">Contact</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or just want to say hello? My inbox is open.
          </p>
        </div>

        <div className="mt-14 grid lg:grid-cols-[0.8fr_1.2fr] gap-8">
          {/* Info */}
          <div className="glass-card p-8 reveal">
            <h3 className="text-lg font-semibold text-white mb-2">Rama Krishnan L</h3>
            <p className="text-sm text-slate-400 mb-6">Feel free to reach out through any of these.</p>

            <div className="space-y-5">
              {CONTACT_INFO.map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <span className="w-10 h-10 rounded-xl glass flex items-center justify-center text-lg shrink-0">
                    {c.icon}
                  </span>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-wider">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-slate-200 hover:text-accent-cyan transition-colors break-all">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-slate-200">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3 mt-8">
              {SOCIALS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full glass flex items-center justify-center text-xs font-bold text-slate-300 hover:text-accent-cyan hover:shadow-glow-cyan transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5 reveal">
            <div className="grid sm:grid-cols-2 gap-5">
              {field('name', 'Your Name')}
              {field('email', 'Your Email', 'email')}
            </div>
            {field('subject', 'Subject')}

            <div className="relative">
              <textarea
                id="message"
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder=" "
                className={`peer w-full bg-white/5 border rounded-xl px-4 pt-5 pb-2 text-slate-100 placeholder-transparent outline-none transition-colors resize-none ${
                  errors.message ? 'border-red-400' : 'border-white/10 focus:border-accent-cyan'
                }`}
              />
              <label
                htmlFor="message"
                className="absolute left-4 top-3.5 text-slate-400 text-sm transition-all duration-200 peer-placeholder-shown:top-3.5 peer-placeholder-shown:text-base peer-focus:top-1.5 peer-focus:text-xs peer-focus:text-accent-cyan peer-[:not(:placeholder-shown)]:top-1.5 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Message
              </label>
              {errors.message && <p className="text-xs text-red-400 mt-1">{errors.message}</p>}
            </div>

            <button type="submit" className="btn-primary w-full">
              Send Message
            </button>

            {submitted && (
              <div className="animate-fade-up mt-2 px-4 py-3 rounded-xl bg-emerald-500/10 border border-emerald-400/30 text-emerald-300 text-sm text-center">
                Message sent successfully — I'll get back to you soon!
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
