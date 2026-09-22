export type Project = {
  /** project name shown on the card */
  title: string
  /** image path (put files in /public, e.g. '/projects/weather.png') or a full URL */
  thumbnail: string
  /** live link for the "visit" button */
  visit: string
  /** optional source code link */
  repo?: string
  /** a sentence or two about it */
  description: string
  /** tech stack / technologies used */
  tech: string[]
}

/**
 * Add your projects here and they'll show up on the /projects page.
 * While this array is empty, the page shows a "coming soon" station instead.
 *
 * Example:
 * {
 *   title: 'Smart Plant Monitor',
 *   thumbnail: '/projects/plant-monitor.png',
 *   visit: 'https://plant-monitor.vercel.app',
 *   repo: 'https://github.com/Aldissu/plant-monitor',
 *   description: 'An Arduino soil-moisture sensor that sends readings to a little React dashboard.',
 *   tech: ['Arduino', 'C++', 'React', 'Tailwind'],
 * },
 */
export const projects: Project[] = []
