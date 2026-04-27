import { Outlet } from 'react-router-dom'
import SiteHeader from './SiteHeader'
import SiteFooter from './SiteFooter'

export default function Layout() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <Outlet />
      <SiteFooter />
      <div className="mobile-sticky-cta" aria-label="Ações rápidas">
        <a href="tel:+351914383288">Ligar</a>
        <a href="/#contactos">Orçamento</a>
      </div>
    </div>
  )
}
