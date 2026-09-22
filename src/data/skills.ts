import type { Accent } from './site'

export type SkillGroup = {
  title: string
  icon: string
  accent: Accent
  blurb: string
  items: string[]
}

export const skillGroups: SkillGroup[] = [
  {
    title: 'Programming',
    icon: '⌨',
    accent: 'lemon',
    blurb: 'the languages i reach for first',
    items: ['Python', 'JavaScript', 'TypeScript', 'C / C++ (Arduino)'],
  },
  {
    title: 'Web Development',
    icon: '✦',
    accent: 'pink',
    blurb: 'building things people can click on',
    items: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS', 'Vite', 'Responsive Design'],
  },
  {
    title: 'Machine Learning',
    icon: '◎',
    accent: 'sky',
    blurb: 'teaching computers to guess better',
    items: ['NumPy', 'Pandas', 'scikit-learn', 'Jupyter', 'Data Cleaning', 'Model Training'],
  },
  {
    title: 'Hardware & IoT',
    icon: '⚡',
    accent: 'mint',
    blurb: 'where code meets the real world',
    items: [
      'Arduino',
      'Sensors & Circuits',
      'Breadboarding',
      'PC Building',
      'Hardware Troubleshooting',
    ],
  },
  {
    title: 'Tools & Networking',
    icon: '⚙',
    accent: 'lilac',
    blurb: 'the stuff that keeps it all running',
    items: ['Git & GitHub', 'Vercel', 'Cisco Packet Tracer', 'VS Code', 'Linux Basics'],
  },
]
