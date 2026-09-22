import { PageTitle } from '../components/Window'
import { skillGroups } from '../data/skills'
import { accentBg, accentBorder, accentText } from '../data/site'

const learning = ['neural networks', 'computer vision', 'IoT dashboards', 'TypeScript', 'embedded C', 'data viz']

export function SkillsPage() {
  return (
    <div>
      <PageTitle kicker="stop 02 · skills" title="my toolbox ⚒">
        Things I've picked up so far — from blinking LEDs to training models to shipping websites.
      </PageTitle>

      <div className="grid gap-4 sm:grid-cols-2">
        {skillGroups.map((g, i) => (
          <section
            key={g.title}
            className={`group relative overflow-hidden rounded-xl border bg-panel-2/70 p-5 transition duration-300 hover:-translate-y-1 hover:bg-panel-2 ${accentBorder[g.accent]} ${
              i === skillGroups.length - 1 && skillGroups.length % 2 === 1 ? 'sm:col-span-2' : ''
            }`}
          >
            <div className={`absolute inset-x-0 top-0 h-1 ${accentBg[g.accent]}`} />
            <div className="mb-3 flex items-center gap-3">
              <span
                className={`grid size-10 place-items-center rounded-lg bg-night/50 text-lg transition group-hover:rotate-12 ${accentText[g.accent]}`}
              >
                {g.icon}
              </span>
              <div>
                <h2 className={`font-round text-lg font-extrabold ${accentText[g.accent]}`}>{g.title}</h2>
                <p className="text-xs text-muted">{g.blurb}</p>
              </div>
            </div>
            <ul className="flex flex-wrap gap-2">
              {g.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-line bg-night/40 px-3 py-1 font-mono text-xs text-[#dbe2f2] transition hover:border-current hover:text-cream"
                >
                  {item}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-dashed border-line p-4">
        <p className="mb-3 font-mono text-[10px] tracking-widest text-muted uppercase">next stops · currently learning</p>
        <div className="flex flex-wrap gap-2">
          {learning.map((l) => (
            <span key={l} className="rounded-full bg-raised px-3 py-1 font-round text-sm text-lemon">
              ⋆ {l}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
