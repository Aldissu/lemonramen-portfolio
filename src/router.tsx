import { createRootRoute, createRoute, createRouter, Link, Outlet } from '@tanstack/react-router'
import { Scene } from './components/Scene'
import { Window } from './components/Window'
import { HomePage } from './routes/home'
import { AboutPage } from './routes/about'
import { SkillsPage } from './routes/skills'
import { ProjectsPage } from './routes/projects'
import { ContactPage } from './routes/contact'

const rootRoute = createRootRoute({
  component: () => (
    <>
      <Scene />
      <div className="relative flex min-h-dvh items-start justify-center px-4 py-10 sm:items-center sm:py-16">
        <Window>
          <Outlet />
        </Window>
      </div>
    </>
  ),
  notFoundComponent: () => (
    <div className="space-y-4 py-10 text-center">
      <p className="font-round text-5xl text-lemon">(╥﹏╥)</p>
      <p className="font-round text-2xl font-bold text-cream">this stop doesn't exist</p>
      <Link to="/" className="inline-block rounded-full bg-lemon px-5 py-2 font-bold text-night">
        back to the station
      </Link>
    </div>
  ),
})

const routeTree = rootRoute.addChildren([
  createRoute({ getParentRoute: () => rootRoute, path: '/', component: HomePage }),
  createRoute({ getParentRoute: () => rootRoute, path: '/about', component: AboutPage }),
  createRoute({ getParentRoute: () => rootRoute, path: '/skills', component: SkillsPage }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/projects',
    component: ProjectsPage,
  }),
  createRoute({
    getParentRoute: () => rootRoute,
    path: '/contact',
    component: ContactPage,
  }),
])

export const router = createRouter({ routeTree, scrollRestoration: true })

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
