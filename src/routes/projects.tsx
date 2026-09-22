import { PageTitle } from '../components/Window'
import { ArrowIcon, GithubIcon } from '../components/Icons'
import { RamenBowl } from '../components/Scene'
import { projects, type Project } from '../data/projects'
import { site } from '../data/site'

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-line bg-panel-2/70 transition duration-300 hover:-translate-y-1 hover:border-sky/70">
      <div className="relative aspect-video overflow-hidden bg-night">
        <img
          src={project.thumbnail}
          alt={`${project.title} thumbnail`}
          loading="lazy"
          className="size-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <h2 className="font-round text-lg font-extrabold text-cream">{project.title}</h2>
        <p className="flex-1 text-sm text-muted">{project.description}</p>
        <ul className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li key={t} className="rounded-full bg-night/50 px-2.5 py-0.5 font-mono text-[11px] text-mint">
              {t}
            </li>
          ))}
        </ul>
        <div className="flex gap-2 pt-1">
          <a
            href={project.visit}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-lemon px-4 py-1.5 text-sm font-bold text-night transition hover:bg-cream"
          >
            visit <ArrowIcon className="size-3.5" />
          </a>
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-1.5 text-sm text-cream transition hover:border-sky hover:text-sky"
            >
              <GithubIcon className="size-3.5" /> code
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

function ComingSoonCard({ i }: { i: number }) {
  const labels = ['arduino thing', 'ml experiment', 'web app']
  return (
    <div className="relative overflow-hidden rounded-xl border border-dashed border-line bg-panel-2/40" aria-hidden>
      <div className="shimmer absolute inset-0" style={{ animationDelay: `${i * 0.3}s` }} />
      <div className="grid aspect-video place-items-center bg-night/40 font-mono text-xs text-muted">
        [ thumbnail loading... ]
      </div>
      <div className="space-y-2.5 p-4">
        <div className="h-4 w-2/3 rounded bg-raised" />
        <div className="h-3 w-full rounded bg-raised/60" />
        <div className="h-3 w-4/5 rounded bg-raised/60" />
        <div className="flex gap-1.5 pt-1">
          <span className="rounded-full bg-night/50 px-2.5 py-0.5 font-mono text-[11px] text-muted">
            {labels[i % labels.length]}
          </span>
          <span className="rounded-full bg-night/50 px-2.5 py-0.5 font-mono text-[11px] text-muted">???</span>
        </div>
      </div>
    </div>
  )
}

export function ProjectsPage() {
  return (
    <div>
      <PageTitle kicker="stop 03 · featured projects" title="things i've made ✦">
        A collection of builds, experiments and websites.
      </PageTitle>

      {projects.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.title} project={p} />
          ))}
        </div>
      ) : (
        <div className="space-y-8">
          <div className="flex flex-col items-center gap-4 rounded-xl border-2 border-dotted border-lemon/60 bg-night/30 px-6 py-8 text-center">
            <RamenBowl className="w-20 animate-bob" />
            <div>
              <p className="font-mono text-xs tracking-[0.3em] text-pink uppercase">coming soon</p>
              <h2 className="mt-1 font-round text-2xl font-extrabold text-cream">projects are still cooking (˶ᵔ ᵕ ᵔ˶)</h2>
              <p className="mt-2 max-w-md text-sm text-muted">
                The noodles need 3 more minutes. Featured projects will pull into this station soon — meanwhile,
                peek at what I'm working on over on GitHub.
              </p>
            </div>
            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-lemon px-5 py-2 text-sm font-bold text-night transition hover:-translate-y-0.5 hover:bg-cream"
            >
              <GithubIcon /> github.com/{site.githubUser}
            </a>
          </div>
          <div className="grid gap-5 sm:grid-cols-3">
            {[0, 1, 2].map((i) => (
              <ComingSoonCard key={i} i={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
