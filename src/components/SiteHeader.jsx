import { Link } from 'react-router-dom'
import { useState } from 'react'
import { buildServices, navItems } from '../data/content'

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false)
  const services = buildServices()
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Portclima homepage" onClick={closeMenu}>
        <img src="/portclima-logo.png" alt="Portclima soluções de energia" />
      </Link>

      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="site-navigation"
        onClick={() => setMenuOpen((isOpen) => !isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
        Menu
      </button>

      <nav id="site-navigation" className={menuOpen ? 'site-nav is-open' : 'site-nav'}>
        {navItems.map((item) => (
          <a key={item.to} href={item.to} onClick={closeMenu}>
            {item.label}
          </a>
        ))}
        <div className="nav-dropdown">
          <span>Soluções técnicas</span>
          <div className="dropdown-panel">
            {services.map((service) => (
              <a
                key={service.title}
                href={`/#${service.title.toLowerCase().replaceAll(' ', '-')}`}
                onClick={closeMenu}
              >
                {service.title}
              </a>
            ))}
          </div>
        </div>
        <a className="nav-call" href="tel:+351914383288" onClick={closeMenu}>
          Ligar 914 383 288
        </a>
      </nav>
    </header>
  )
}
