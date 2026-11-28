import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom'
import { AppRoutes } from './App'

export function renderPage(pathname: string): string {
  return renderToString(
    <StaticRouter location={pathname}>
      <AppRoutes />
    </StaticRouter>,
  )
}
