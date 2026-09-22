import { useMemo, useState } from 'react'
import { site } from '../data/site'

const STAR_GLYPHS = ['✦', '✧', '⋆', '˚', '·', '✩']

function Stars() {
  const stars = useMemo(
    () =>
      Array.from({ length: 46 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 48,
        size: 8 + Math.random() * 12,
        delay: Math.random() * 3,
        duration: 2 + Math.random() * 3,
        glyph: STAR_GLYPHS[i % STAR_GLYPHS.length],
        color: ['text-lemon', 'text-pink', 'text-sky', 'text-mint', 'text-white'][i % 5],
      })),
    [],
  )
  return (
    <>
      {stars.map((s) => (
        <span
          key={s.id}
          className={`absolute animate-twinkle select-none ${s.color}`}
          style={{
            left: `${s.left}%`,
            top: `${s.top}%`,
            fontSize: s.size,
            animationDelay: `${s.delay}s`,
            animationDuration: `${s.duration}s`,
          }}
        >
          {s.glyph}
        </span>
      ))}
    </>
  )
}

/** the little lemon-ramen bowl mascot bobbing in the corner */
export function RamenBowl({ className = '' }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 110" className={className} aria-hidden>
      {/* steam */}
      <g fill="none" stroke="#e7ecf7" strokeWidth="4" strokeLinecap="round" opacity="0.7">
        <path d="M40 30c-6-8 6-12 0-22">
          <animate attributeName="opacity" values="0;0.8;0" dur="2.6s" repeatCount="indefinite" />
        </path>
        <path d="M60 28c-6-8 6-12 0-22">
          <animate attributeName="opacity" values="0;0.8;0" dur="2.6s" begin="0.8s" repeatCount="indefinite" />
        </path>
        <path d="M80 30c-6-8 6-12 0-22">
          <animate attributeName="opacity" values="0;0.8;0" dur="2.6s" begin="1.6s" repeatCount="indefinite" />
        </path>
      </g>
      {/* chopsticks */}
      <path d="M78 18l30 30" stroke="#ffbdd1" strokeWidth="5" strokeLinecap="round" />
      <path d="M72 22l28 34" stroke="#f7a8bf" strokeWidth="5" strokeLinecap="round" />
      {/* broth + noodles */}
      <ellipse cx="60" cy="52" rx="48" ry="12" fill="#ffd27a" />
      <path
        d="M22 52c6-6 12 6 18 0s12 6 18 0 12 6 18 0 12 6 18 0"
        fill="none"
        stroke="#fff2c9"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      {/* lemon slice */}
      <circle cx="44" cy="48" r="11" fill="#ffe091" stroke="#f5c542" strokeWidth="3" />
      <path d="M44 38v20M34 48h20M37 41l14 14M51 41L37 55" stroke="#f5c542" strokeWidth="1.6" />
      {/* bowl */}
      <path d="M12 54h96c0 26-20 44-48 44S12 80 12 54z" fill="#99d4ff" />
      <path d="M12 54h96c-1 6-3 11-5 15H17c-2-4-4-9-5-15z" fill="#c4eeff" />
      <rect x="44" y="96" width="32" height="8" rx="4" fill="#7fbfe8" />
      {/* face */}
      <circle cx="46" cy="78" r="3.5" fill="#2b3150" />
      <circle cx="74" cy="78" r="3.5" fill="#2b3150" />
      <path d="M55 82q5 5 10 0" fill="none" stroke="#2b3150" strokeWidth="3" strokeLinecap="round" />
      <ellipse cx="38" cy="84" rx="5" ry="3" fill="#ffbdd1" opacity="0.8" />
      <ellipse cx="82" cy="84" rx="5" ry="3" fill="#ffbdd1" opacity="0.8" />
    </svg>
  )
}

function PeekingAvatar() {
  const [hover, setHover] = useState(false)
  return (
    <div
      className="pointer-events-auto absolute top-[8%] right-0 hidden sm:block"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`relative transition-transform duration-500 ${hover ? '' : 'animate-peek'}`}
        style={hover ? { transform: 'translateX(-4%) rotate(0deg)' } : undefined}
      >
        <div
          className={`absolute top-6 -left-36 rounded-2xl border-2 border-dotted border-lemon bg-panel px-3 py-2 font-round text-sm text-cream transition-all duration-300 ${
            hover ? 'translate-x-0 opacity-100' : 'translate-x-4 opacity-0'
          }`}
        >
          hiii! (｡•̀ᴗ-)✧
        </div>
        <img
          src={site.avatar}
          alt=""
          className="size-32 rounded-full border-4 border-lemon object-cover shadow-[0_10px_40px_-10px_rgb(0_0_0/0.6)] lg:size-40"
        />
      </div>
    </div>
  )
}

export function Scene() {
  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_35%,#3a4470_0%,#2b3150_60%)]" />
      <Stars />
      <div className="grid-floor" />
      <PeekingAvatar />
      <div className="absolute bottom-6 left-4 hidden animate-float md:block">
        <RamenBowl className="w-24 lg:w-28" />
      </div>
    </div>
  )
}
