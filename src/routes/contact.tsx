import { useState } from 'react'
import { PageTitle } from '../components/Window'
import { GithubIcon, MailIcon } from '../components/Icons'
import { site } from '../data/site'

function Ticket() {
  const [copied, setCopied] = useState(false)

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {
      window.location.href = `mailto:${site.email}`
    }
  }

  return (
    <div className="relative mx-auto flex max-w-2xl flex-col overflow-hidden rounded-2xl bg-cream text-night shadow-[0_20px_50px_-15px_rgb(0_0_0/0.6)] sm:flex-row">
      {/* main stub */}
      <div className="flex-1 space-y-4 p-6">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase opacity-60">boarding pass</p>
          <p className="font-mono text-[10px] font-bold tracking-widest uppercase opacity-60">no. 0621</p>
        </div>
        <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3">
          <div>
            <p className="font-mono text-[10px] uppercase opacity-60">from</p>
            <p className="font-round text-2xl font-extrabold">YOU</p>
          </div>
          <div className="relative flex w-20 items-center sm:w-32" aria-hidden>
            <span className="size-2 shrink-0 rounded-full bg-night/70" />
            <span className="h-0 flex-1 border-t-2 border-dashed border-night/40" />
            <span className="shrink-0 text-night/70">➤</span>
            <span className="absolute left-1/2 grid size-6 -translate-x-1/2 place-items-center rounded-full bg-pink text-xs text-night">
              ✦
            </span>
          </div>
          <div className="text-right">
            <p className="font-mono text-[10px] uppercase opacity-60">to</p>
            <p className="font-round text-2xl font-extrabold">INBOX</p>
          </div>
        </div>
        <div className="rounded-lg bg-night/5 p-3">
          <p className="font-mono text-[10px] uppercase opacity-60">destination address</p>
          <a
            href={`mailto:${site.email}`}
            className="font-mono text-base font-bold break-all underline decoration-pink decoration-2 underline-offset-4 sm:text-lg"
          >
            {site.email}
          </a>
        </div>
        <div className="flex flex-wrap gap-2">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-night px-4 py-2 text-sm font-bold text-cream transition hover:-translate-y-0.5"
          >
            <MailIcon /> send an email
          </a>
          <button
            onClick={copy}
            className="inline-flex items-center gap-2 rounded-full border-2 border-night/80 px-4 py-2 text-sm font-bold transition hover:-translate-y-0.5 hover:bg-night/5"
          >
            {copied ? 'copied! ✓' : 'copy address'}
          </button>
        </div>
      </div>
      {/* perforation */}
      <div className="relative hidden w-0 border-l-2 border-dashed border-night/25 sm:block">
        <span className="absolute -top-3 -left-3 size-6 rounded-full bg-panel" />
        <span className="absolute -bottom-3 -left-3 size-6 rounded-full bg-panel" />
      </div>
      <div className="border-t-2 border-dashed border-night/25 sm:hidden" />
      {/* side stub */}
      <div className="flex items-center gap-4 bg-lemon p-6 sm:w-44 sm:flex-col sm:justify-center sm:text-center">
        <img src={site.avatar} alt="" className="size-16 rounded-full border-4 border-cream object-cover" />
        <div className="space-y-1">
          <p className="font-round font-extrabold">{site.handle}</p>
          <p className="font-mono text-[10px] uppercase opacity-60">conductor</p>
          <p className="font-mono text-[10px] uppercase opacity-60">seat: any ✦</p>
        </div>
      </div>
    </div>
  )
}

export function ContactPage() {
  return (
    <div>
      <PageTitle kicker="stop 04 · contact" title="say hi! (っ◕‿◕)っ">
        Got a project idea, a question, want to collab, or just want to talk about Arduino, ML or PC parts? My inbox
        is always open.
      </PageTitle>

      <Ticket />

      <div className="mx-auto mt-6 flex max-w-2xl flex-col items-center justify-between gap-3 rounded-xl border border-line bg-panel-2/60 px-5 py-4 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="grid size-10 place-items-center rounded-lg bg-night/50 text-sky">
            <GithubIcon className="size-5" />
          </span>
          <div>
            <p className="font-round font-bold text-cream">GitHub</p>
            <p className="font-mono text-xs text-muted">code, experiments & works in progress</p>
          </div>
        </div>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-sky px-4 py-1.5 font-mono text-xs font-bold text-night transition hover:-translate-y-0.5"
        >
          @{site.githubUser} →
        </a>
      </div>
    </div>
  )
}
