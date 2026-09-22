import { Link } from '@tanstack/react-router'
import { site, accentBg, accentText, type Accent } from '../data/site'

function Wheel({ size = 'size-6', delay = 0 }: { size?: string; delay?: number }) {
  return (
    <svg viewBox="0 0 24 24" className={`${size} group-hover:animate-spin-slow`} style={{ animationDelay: `${delay}s` }}>
      <circle cx="12" cy="12" r="11" fill="#2b3150" />
      <circle cx="12" cy="12" r="8" fill="#56628a" />
      <path d="M12 4v16M4 12h16M6.3 6.3l11.4 11.4M17.7 6.3L6.3 17.7" stroke="#2b3150" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="3" fill="#ffe091" />
    </svg>
  )
}

function Cloud({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 32" className={className} aria-hidden>
      <path
        d="M14 30a10 10 0 0 1-1-20 14 14 0 0 1 26-4 10 10 0 0 1 14 8 8 8 0 0 1-1 16z"
        fill="#f3f5fb"
      />
    </svg>
  )
}

function Engine() {
  return (
    <Link to="/about" className="group relative block h-28 w-32 shrink-0 sm:w-36" aria-label="about me">
      {/* smoke */}
      <span className="absolute bottom-[5.5rem] left-5 size-5 animate-puff rounded-full bg-white/80" />
      <span
        className="absolute bottom-[5.5rem] left-5 size-4 animate-puff rounded-full bg-white/70"
        style={{ animationDelay: '0.8s' }}
      />
      <span
        className="absolute bottom-[5.5rem] left-5 size-6 animate-puff rounded-full bg-white/60"
        style={{ animationDelay: '1.6s' }}
      />
      <div className="absolute inset-x-0 bottom-3 h-24 animate-chug">
        {/* chimney */}
        <div className="absolute bottom-12 left-4 h-7 w-5 rounded-sm bg-raised">
          <div className="absolute -top-1.5 -left-1 h-2.5 w-7 rounded-sm bg-lemon" />
        </div>
        {/* boiler */}
        <div className="absolute bottom-0 left-0 h-12 w-24 rounded-l-3xl rounded-r-md bg-raised shadow-inner">
          <div className="absolute inset-y-0 left-8 w-1.5 bg-lemon/80" />
          <div className="absolute inset-y-0 left-14 w-1.5 bg-lemon/80" />
          <div className="absolute top-3.5 left-1.5 size-4 rounded-full bg-cream shadow-[0_0_14px_4px_rgb(255_224_145/0.55)]" />
        </div>
        {/* cab */}
        <div className="absolute right-0 bottom-0 h-20 w-16 rounded-t-md bg-lemon sm:w-[4.5rem]">
          <div className="absolute -top-2 -right-1.5 -left-1.5 h-3 rounded-md bg-cream" />
          <div className="absolute top-3.5 left-1/2 size-11 -translate-x-1/2 overflow-hidden rounded-lg border-[3px] border-night/70 bg-sky transition group-hover:scale-110">
            <img src={site.avatar} alt="" className="size-full object-cover" />
          </div>
          <div className="absolute inset-x-2 bottom-2 h-1.5 rounded-full bg-night/20" />
        </div>
      </div>
      {/* cowcatcher + wheels */}
      <div className="absolute bottom-0 left-0 flex w-full items-end justify-between pr-2 pl-3">
        <div className="flex gap-1">
          <Wheel size="size-6" />
          <Wheel size="size-6" delay={0.1} />
        </div>
        <Wheel size="size-9" delay={0.2} />
      </div>
      <span className="pointer-events-none absolute -top-5 right-0 rounded-full bg-night/80 px-2 py-0.5 font-mono text-[10px] text-cream opacity-0 transition group-hover:opacity-100">
        that's me!
      </span>
    </Link>
  )
}

const hoverText: Record<Accent, string> = {
  lemon: 'group-hover:text-lemon',
  pink: 'group-hover:text-pink',
  mint: 'group-hover:text-mint',
  sky: 'group-hover:text-sky',
  lilac: 'group-hover:text-lilac',
}

type CarProps = {
  to: '/about' | '/skills' | '/projects' | '/contact'
  label: string
  icon: string
  accent: Accent
  delay: number
}

function Car({ to, label, icon, accent, delay }: CarProps) {
  return (
    <Link to={to} className="group relative flex h-28 w-24 shrink-0 flex-col items-center justify-end sm:w-28">
      {/* clouds */}
      <div className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-end gap-0.5 transition duration-500 group-hover:-translate-y-2">
        <Cloud className="w-4 animate-bob" />
        <Cloud className="w-10 animate-bob [animation-delay:0.4s]" />
      </div>
      {/* label on the roof */}
      <span
        className={`relative z-10 mb-[-0.35rem] font-round text-lg font-extrabold text-white transition duration-300 [text-shadow:0_2px_0_#2b3150,0_0_12px_rgb(0_0_0/0.3)] group-hover:-translate-y-1.5 sm:text-xl ${hoverText[accent]}`}
      >
        {label}
      </span>
      {/* body */}
      <div className="w-full animate-chug" style={{ animationDelay: `${delay}s` }}>
        <div className="relative h-12 w-full rounded-t-lg rounded-b-sm bg-raised transition duration-300 group-hover:-translate-y-1 group-hover:bg-line">
          <div className={`absolute inset-x-0 bottom-0 h-2 rounded-b-sm ${accentBg[accent]}`} />
          <div className="flex h-10 items-center justify-center gap-2 px-2">
            <span className={`grid size-6 place-items-center rounded bg-night/40 text-xs ${accentText[accent]}`}>
              {icon}
            </span>
            <span className="grid size-6 place-items-center rounded bg-night/40" />
            <span className="grid size-6 place-items-center rounded bg-night/40" />
          </div>
        </div>
      </div>
      <div className="flex w-full justify-between px-2">
        <Wheel size="size-6" delay={delay} />
        <Wheel size="size-6" delay={delay + 0.1} />
      </div>
    </Link>
  )
}

const cars: Omit<CarProps, 'delay'>[] = [
  { to: '/about', label: 'about', icon: '☺', accent: 'pink' },
  { to: '/skills', label: 'skills', icon: '⚡', accent: 'mint' },
  { to: '/projects', label: 'projects', icon: '✦', accent: 'sky' },
  { to: '/contact', label: 'contact', icon: '✉', accent: 'lemon' },
]

export function Train() {
  return (
    <div className="scrollbar-soft -mx-2 overflow-x-auto px-2 pt-10 pb-2">
      <div className="relative mx-auto w-max">
        <div className="flex items-end gap-1.5">
          <Engine />
          {cars.map((c, i) => (
            <div key={c.to} className="flex items-end gap-1.5">
              <div className="mb-3.5 h-1.5 w-2 rounded-full bg-line" aria-hidden />
              <Car {...c} delay={(i + 1) * 0.12} />
            </div>
          ))}
        </div>
        {/* track */}
        <div className="relative mt-0.5 h-3" aria-hidden>
          <div className="absolute inset-x-0 top-0 h-[3px] rounded-full bg-muted/60" />
          <div className="absolute inset-x-0 top-[3px] h-2 bg-[repeating-linear-gradient(90deg,#56628a_0_8px,transparent_8px_20px)]" />
        </div>
      </div>
    </div>
  )
}
