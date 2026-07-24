export default function Loader({ visible }) {
  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-navy-950 transition-opacity duration-700 ${
        visible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
      aria-hidden={!visible}
    >
      <div className="absolute inset-0 bg-grad-radial" />
      <div className="relative flex flex-col items-center gap-6">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full bg-grad-primary bg-[length:200%_200%] animate-gradient-shift blur-xl opacity-70" />
          <div className="relative w-24 h-24 rounded-full glass flex items-center justify-center text-2xl font-heading font-bold gradient-text">
            RK
          </div>
        </div>
        <h1 className="text-xl sm:text-2xl font-heading font-semibold text-slate-100 tracking-wide">
          Rama Krishnan L
        </h1>
        <p className="text-sm text-slate-400 tracking-[0.2em] uppercase">
          Initializing Portfolio
          <span className="inline-block animate-pulse">...</span>
        </p>
        <div className="w-48 h-1 rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-1/2 bg-grad-primary bg-[length:200%_200%] animate-gradient-shift rounded-full" />
        </div>
      </div>
    </div>
  )
}
