import { useEffect, useState } from 'react'
import { site } from '../data/site'
import { Train } from '../components/Train'

const roles = ['software developer', 'arduino tinkerer', 'ml student', 'python enjoyer', 'pc builder', 'web dev']

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), 1600)
      return () => clearTimeout(t)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setIndex((i) => (i + 1) % words.length)
      return
    }
    const t = setTimeout(
      () => setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1)),
      deleting ? 40 : 85,
    )
    return () => clearTimeout(t)
  }, [text, deleting, index, words])

  return text
}

export function HomePage() {
  const role = useTypewriter(roles)

  return (
    <div className="space-y-10">
      <section className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
        <div className="relative shrink-0">
          <div className="absolute -inset-2 animate-[spin_12s_linear_infinite] rounded-full border-2 border-dashed border-lemon/50" />
          <img
            src={site.avatar}
            alt={`${site.name}'s avatar`}
            className="relative size-28 rounded-full border-4 border-panel object-cover sm:size-32"
          />
          <span className="absolute -right-1 bottom-1 grid size-8 place-items-center rounded-full border-4 border-panel bg-mint text-sm">
            🍋
          </span>
        </div>
        <div className="space-y-2">
          <p className="font-mono text-xs tracking-[0.25em] text-pink uppercase">hi hello, i'm</p>
          <h1 className="font-round text-5xl leading-none font-extrabold sm:text-6xl">
            <span className="bg-gradient-to-r from-lemon via-cream to-pink bg-clip-text text-transparent">
              {site.handle}
            </span>
          </h1>
          <p className="font-round text-lg text-muted">
            a.k.a. <span className="font-bold text-sky">{site.name}</span> · a{' '}
            <span className="block min-h-7 font-mono text-mint sm:inline">
              {role}
              <span className="ml-0.5 inline-block w-2 animate-pulse text-lemon">▍</span>
            </span>
          </p>
          <p className="max-w-lg pt-1 text-sm leading-relaxed text-[#c7d0e6]">
            I write code that talks to sensors, trains little models, and sometimes becomes a website. Studying
            Arduino, machine learning & Python — powered by instant noodles.
          </p>
        </div>
      </section>

      <section aria-label="site navigation" className="space-y-1">
        <p className="text-center font-mono text-xs tracking-widest text-muted">
          ~ all aboard! pick a stop ~<span className="block text-[10px] opacity-70 sm:hidden">(swipe the train →)</span>
        </p>
        <Train />
      </section>

      <section className="grid gap-3 sm:grid-cols-3">
        {[
          { k: 'now building', v: 'arduino sensor gizmos', c: 'text-mint' },
          { k: 'now learning', v: 'neural networks in python', c: 'text-sky' },
          { k: 'now fueled by', v: 'lemon ramen, obviously', c: 'text-lemon' },
        ].map((s) => (
          <div key={s.k} className="rounded-lg border border-line/70 bg-panel-2/60 px-4 py-3">
            <p className="flex items-center gap-2 font-mono text-[10px] tracking-widest text-muted uppercase">
              <span className="size-1.5 animate-pulse rounded-full bg-mint" /> {s.k}
            </p>
            <p className={`mt-1 font-round font-bold ${s.c}`}>{s.v}</p>
          </div>
        ))}
      </section>
    </div>
  )
}
