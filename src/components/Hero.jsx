import profile from '../assets/profile.jpg'
import Particles from './Particles.jsx'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden"
    >
      <div className="absolute inset-0 bg-grad-radial" />
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-accent-purple/30 rounded-full blur-[120px]" />
      <div className="absolute -bottom-40 -right-20 w-96 h-96 bg-accent-cyan/20 rounded-full blur-[120px]" />
      <Particles />

      <div className="relative mx-auto max-w-6xl w-full px-6 grid md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
        <div className="reveal in-view text-center md:text-left order-2 md:order-1">
          <p className="section-eyebrow justify-center md:justify-start flex items-center gap-2">
            <span className="w-8 h-px bg-accent-cyan" /> Hello, I'm
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold mt-3 leading-tight">
            <span className="gradient-text">Rama Krishnan L</span>
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-slate-300 font-medium">
            Engineering Student <span className="text-accent-purple">|</span> AI &amp; Data Science
            Enthusiast <span className="text-accent-purple">|</span> Backend Developer
          </p>
          <p className="mt-6 text-slate-400 leading-relaxed max-w-xl mx-auto md:mx-0">
            I am an Engineering student passionate about building scalable web applications,
            designing efficient databases, and exploring Artificial Intelligence and Machine
            Learning. I enjoy solving real-world problems through technology and continuously
            improving my technical skills.
          </p>

          <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
            <button onClick={() => scrollTo('projects')} className="btn-primary">
              View Projects
            </button>
            <button onClick={() => scrollTo('contact')} className="btn-outline">
              Contact Me
            </button>
            <a
              href="#resume"
              onClick={(e) => e.preventDefault()}
              title="Resume coming soon"
              className="btn-outline opacity-70 cursor-not-allowed"
            >
              Download Resume
            </a>
          </div>
        </div>

        <div className="order-1 md:order-2 flex justify-center reveal in-view">
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 animate-float">
            <div className="absolute inset-0 rounded-full bg-grad-primary bg-[length:200%_200%] animate-gradient-shift blur-2xl opacity-60" />
            <div className="relative w-full h-full rounded-full p-1.5 bg-grad-primary bg-[length:200%_200%] animate-gradient-shift">
              <div className="w-full h-full rounded-full overflow-hidden glass">
                <img
                  src={profile}
                  alt="Portrait of Rama Krishnan L"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
