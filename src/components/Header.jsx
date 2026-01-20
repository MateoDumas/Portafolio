import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import ThemeToggle from './ThemeToggle'
import LanguageSelector from './LanguageSelector'

function Header({ activeSection, onNavigate }) {
  const [menuOpen, setMenuOpen] = useState(false)
  const { t } = useTranslation()

  const handleNavigate = (sectionId) => {
    onNavigate(sectionId)
    setMenuOpen(false)
  }

  return (
    <header className="header">
      <div className="container header-content">
        <a href="#inicio" className="brand" onClick={() => handleNavigate('inicio')}>
          <span className="brand-mark">M</span>
          <span className="brand-text">Mateo Dumas</span>
        </a>
        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Navegación principal">
          <button
            type="button"
            className={`nav-link ${activeSection === 'inicio' ? 'nav-link-active' : ''}`}
            aria-current={activeSection === 'inicio' ? 'page' : undefined}
            onClick={() => handleNavigate('inicio')}
          >
            {t('nav.home')}
          </button>
          <button
            type="button"
            className={`nav-link ${activeSection === 'sobre-mi' ? 'nav-link-active' : ''}`}
            aria-current={activeSection === 'sobre-mi' ? 'page' : undefined}
            onClick={() => handleNavigate('sobre-mi')}
          >
            {t('nav.about')}
          </button>
          <button
            type="button"
            className={`nav-link ${activeSection === 'habilidades' ? 'nav-link-active' : ''}`}
            aria-current={activeSection === 'habilidades' ? 'page' : undefined}
            onClick={() => handleNavigate('habilidades')}
          >
            {t('nav.skills')}
          </button>
          <button
            type="button"
            className={`nav-link ${activeSection === 'proceso' ? 'nav-link-active' : ''}`}
            aria-current={activeSection === 'proceso' ? 'page' : undefined}
            onClick={() => handleNavigate('proceso')}
          >
            {t('nav.process')}
          </button>
          <button
            type="button"
            className={`nav-link ${activeSection === 'proyectos' ? 'nav-link-active' : ''}`}
            aria-current={activeSection === 'proyectos' ? 'page' : undefined}
            onClick={() => handleNavigate('proyectos')}
          >
            {t('nav.projects')}
          </button>
          <button
            type="button"
            className={`nav-link nav-cta ${activeSection === 'contacto' ? 'nav-link-active' : ''}`}
            aria-current={activeSection === 'contacto' ? 'page' : undefined}
            onClick={() => handleNavigate('contacto')}
          >
            {t('nav.contact')}
          </button>
          <a
            href="/cv.pdf"
            className="nav-link"
            target="_blank"
            rel="noreferrer"
          >
            CV
          </a>
        </nav>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <LanguageSelector />
          <ThemeToggle />
          <button
            className="nav-toggle"
            aria-label={menuOpen ? t('nav.toggle_close') : t('nav.toggle_open')}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span className="nav-toggle-bar" />
            <span className="nav-toggle-bar" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
