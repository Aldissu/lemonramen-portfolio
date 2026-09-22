import { useEffect, useState, type ReactNode } from 'react'
import { Link, useNavigate, useRouterState } from '@tanstack/react-router'
import { site } from '../data/site'
import { GithubIcon, MailIcon, SearchIcon, StarIcon } from './Icons'

export const stations = [
  { to: '/', name: 'home' },
  { to: '/about', name: 'about' },
  { to: '/skills', name: 'skills' },
  { to: '/projects', name: 'projects' },
  { to: '/contact', name: 'contact' },
] as const

function StationSearch() {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const navigate = useNavigate()
  const [query, setQuery] = useState('')
  const [open, setOpen] = useState(false)

  const current = stations.find((s) => s.to === pathname)?.name ?? 'lost'
  const matches = stations.filter((s) => s.name.includes(query.trim().toLowerCase()))

  const go = (to: (typeof stations)[number]['to']) => {
    navigate({ to })
    setQuery('')
    setOpen(false)
  }

  return (
    <div className="relative w-24 sm:w-48">
      <label className="flex items-center gap-2 rounded-md bg-raised/70 px-3 py-1.5 font-mono text-xs text-cream focus-within:ring-2 focus-within:ring-lemon/60">
        <SearchIcon className="size-3.5 shrink-0" />
        <input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value)
            setOpen(true)
          }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 120)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && matches[0]) go(matches[0].to)
            if (e.key === 'Escape') (e.target as HTMLInputElement).blur()
          }}
          placeholder={`${current}...`}
          aria-label="jump to a page"
          className="w-full bg-transparent text-cream outline-none placeholder:text-cream"
        />
      </label>
      {open && (
        <ul className="absolute right-0 left-0 z-20 mt-1.5 overflow-hidden rounded-md border border-line bg-panel-2 py-1 font-mono text-xs shadow-xl">
          {matches.length === 0 && <li className="px-3 py-1.5 text-muted">no stop found (._.)</li>}
          {matches.map((s) => (
            <li key={s.to}>
              <button
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => go(s.to)}
                className="w-full px-3 py-1.5 text-left text-cream hover:bg-raised"
              >
                → {s.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function TitleBar() {
  return (
    <header className="flex items-center gap-2 rounded-lg border border-line bg-panel-2/80 px-2.5 py-2 sm:gap-3 sm:px-3">
      <nav className="flex items-center gap-2 text-lemon sm:gap-2.5">
        <Link to="/" aria-label="home" className="transition hover:scale-125 hover:text-pink">
          <StarIcon />
        </Link>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
          className="transition hover:scale-125 hover:text-sky"
        >
          <GithubIcon />
        </a>
        <Link to="/contact" aria-label="contact" className="transition hover:scale-125 hover:text-mint">
          <MailIcon />
        </Link>
      </nav>
      <Link
        to="/"
        className="mx-auto font-round text-xs font-bold tracking-[0.12em] text-cream uppercase transition hover:text-lemon sm:text-base sm:tracking-[0.2em]"
      >
        {site.handle}.dev
      </Link>
      <StationSearch />
    </header>
  )
}

export function Divider() {
  return (
    <p
      aria-hidden
      className="overflow-hidden text-center font-mono text-xs tracking-[0.3em] whitespace-nowrap text-muted/70 select-none"
    >
      ✩₊˚.⋆☾⋆⁺₊✧ · ⋆⭒˚｡⋆ · ⋆✴︎˚｡⋆ · ⋆ ｡˚✴︎⋆ · ⋆˚｡⭒⋆ · ✧₊⁺⋆☾⋆.˚₊✩
    </p>
  )
}

const pills = [
  { label: 'github', href: site.github, color: 'text-sky' },
  { label: 'email', href: `mailto:${site.email}`, color: 'text-pink' },
]

export function Window({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => {
    const page = stations.find((s) => s.to === pathname)?.name ?? 'lost'
    document.title = `${page} ✧ ${site.handle}`
  }, [pathname])

  return (
    <div className="dotted-frame relative mx-auto w-full max-w-4xl rounded-md bg-panel/95 p-2.5 backdrop-blur-sm sm:p-3">
      <TitleBar />
      <main key={pathname} className="animate-page-in px-2 pt-8 pb-6 sm:px-8">
        {children}
      </main>
      <footer className="space-y-4 px-2 pb-4">
        <div className="flex flex-wrap justify-center gap-2">
          {pills.map((p) => (
            <a
              key={p.label}
              href={p.href}
              target={p.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              className={`rounded-full bg-raised px-4 py-1 font-mono text-xs font-bold tracking-wider uppercase transition hover:-translate-y-0.5 hover:bg-line ${p.color}`}
            >
              {p.label}
            </a>
          ))}
          {stations.slice(1).map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="rounded-full bg-raised px-4 py-1 font-mono text-xs font-bold tracking-wider text-mint uppercase transition hover:-translate-y-0.5 hover:bg-line"
              activeProps={{ className: '!bg-lemon !text-night' }}
            >
              {s.name}
            </Link>
          ))}
        </div>
        <Divider />
        <p className="text-center text-sm text-muted">ヾ(＾∇＾) thank you for visiting!</p>
        <p className="text-center font-mono text-[10px] tracking-wider text-muted/60">
          © {new Date().getFullYear()} {site.handle} · built w/ vite + tanstack router + tailwind
        </p>
      </footer>
    </div>
  )
}

export function BackToStation() {
  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-xs text-muted transition hover:border-lemon hover:text-lemon"
    >
      <span className="transition group-hover:-translate-x-1">←</span> back to the station
    </Link>
  )
}

export function PageTitle({ kicker, title, children }: { kicker: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-8 space-y-3">
      <BackToStation />
      <p className="font-mono text-xs tracking-[0.25em] text-pink uppercase">{kicker}</p>
      <h1 className="font-round text-3xl font-extrabold text-cream sm:text-4xl">{title}</h1>
      {children && <p className="max-w-2xl text-muted">{children}</p>}
    </div>
  )
}
