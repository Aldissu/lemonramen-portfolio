import { PageTitle } from '../components/Window'
import { site } from '../data/site'

const journey = [
  {
    tag: 'code',
    color: 'bg-lemon',
    title: 'Python first, always',
    text: 'Python is my home base — scripts, automation, data wrangling, and most of my machine learning experiments.',
  },
  {
    tag: 'hardware',
    color: 'bg-mint',
    title: 'Arduino & electronics',
    text: 'Wiring up sensors, LEDs and motors on breadboards and writing the C++ that makes them do stuff. Blinking an LED never gets old.',
  },
  {
    tag: 'ai',
    color: 'bg-sky',
    title: 'Machine learning',
    text: 'Learning how models actually learn — cleaning datasets, training classifiers, and slowly making sense of neural nets.',
  },
  {
    tag: 'web',
    color: 'bg-pink',
    title: 'Web development',
    text: 'HTML, CSS, JavaScript and React for building interfaces (like this one!), deployed with Vercel.',
  },
  {
    tag: 'tech',
    color: 'bg-lilac',
    title: 'PCs & networks',
    text: 'Building PCs, troubleshooting hardware for friends & family, and designing networks in Cisco Packet Tracer.',
  },
]

function AboutCode() {
  return (
    <div className="overflow-hidden rounded-lg border border-line bg-night/70 font-mono text-xs shadow-inner sm:text-[13px]">
      <div className="flex items-center gap-1.5 border-b border-line/70 px-3 py-2">
        <span className="size-2.5 rounded-full bg-pink" />
        <span className="size-2.5 rounded-full bg-lemon" />
        <span className="size-2.5 rounded-full bg-mint" />
        <span className="ml-2 text-[11px] text-muted">about_me.py</span>
      </div>
      <pre className="scrollbar-soft overflow-x-auto p-3 leading-relaxed sm:p-4">
        <code>
          <span className="text-lilac">class</span> <span className="text-sky">Developer</span>:{'\n'}
          {'    '}name = <span className="text-mint">"{site.name}"</span>
          {'\n'}
          {'    '}alias = <span className="text-mint">"{site.handle}"</span>
          {'\n'}
          {'    '}studying = [<span className="text-mint">"arduino"</span>, <span className="text-mint">"ml"</span>,{' '}
          <span className="text-mint">"python"</span>]{'\n'}
          {'    '}hobbies = [<span className="text-mint">"pc building"</span>,{' '}
          <span className="text-mint">"breaking & fixing things"</span>]{'\n'}
          {'\n'}
          {'    '}
          <span className="text-lilac">def</span> <span className="text-lemon">fuel</span>(self):{'\n'}
          {'        '}
          <span className="text-lilac">return</span> <span className="text-mint">"lemon ramen 🍋🍜"</span>
        </code>
      </pre>
    </div>
  )
}

export function AboutPage() {
  return (
    <div>
      <PageTitle kicker="stop 01 · about" title="a little about me (◕ᴗ◕✿)">
        I'm {site.name} — known around the internet as <span className="text-lemon">{site.handle}</span>. I'm a
        software developer and student who loves the spot where software meets hardware.
      </PageTitle>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)]">
        <div className="min-w-0 space-y-4 leading-relaxed text-[#c7d0e6]">
          <p>
            Right now I'm studying <b className="text-mint">Arduino</b>, <b className="text-sky">machine learning</b>{' '}
            and <b className="text-lemon">Python</b>. I like projects I can physically poke — a sensor reading data,
            a model making a guess from it, and a little dashboard showing what's going on.
          </p>
          <p>
            Outside of that I build web stuff with HTML, CSS, JavaScript and React, put PCs together, and am the
            unofficial tech support for everyone I know. If it has a power button, I'll probably try to open it up.
          </p>
          <p>
            I'm always learning, always breaking things, and always down to collab on something fun.
          </p>
          <AboutCode />
        </div>

        <ol className="relative space-y-5 border-l-2 border-dotted border-line pl-6">
          {journey.map((j) => (
            <li key={j.title} className="relative">
              <span className={`absolute top-1.5 -left-[1.95rem] size-3.5 rounded-full ring-4 ring-panel ${j.color}`} />
              <p className="font-mono text-[10px] tracking-widest text-muted uppercase">{j.tag}</p>
              <h3 className="font-round font-bold text-cream">{j.title}</h3>
              <p className="text-sm text-muted">{j.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  )
}
