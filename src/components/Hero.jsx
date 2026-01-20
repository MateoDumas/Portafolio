import { useTranslation } from 'react-i18next'

function Hero({ onContactClick }) {
  const { t } = useTranslation()

  return (
    <section id="inicio" className="section hero" aria-label="Presentación">
      <div className="container hero-grid">
        <div className="hero-text">
          <p className="hero-kicker">{t('hero.kicker')}</p>
          <h1 className="hero-title">
            {t('hero.title')}
          </h1>
          <p className="hero-subtitle">
            {t('hero.subtitle')}
          </p>
          <div className="hero-actions">
            <button type="button" className="button primary" onClick={onContactClick}>
              {t('hero.cta_primary')}
            </button>
            <a href="#proyectos" className="button ghost">
              {t('hero.cta_secondary')}
            </a>
            <a href="/cv.pdf" className="button ghost subtle" target="_blank" rel="noreferrer">
              {t('hero.cta_cv')}
            </a>
          </div>
        </div>
        <div className="hero-highlight" aria-hidden="true">
          <div className="hero-card">
            <span className="hero-badge">{t('hero.badge')}</span>
            <p className="hero-metric">
              <span className="hero-metric-number">+2</span>
              <span className="hero-metric-label">{t('hero.years')}</span>
            </p>
            <p className="hero-metric">
              <span className="hero-metric-number">Ing.</span>
              <span className="hero-metric-label">{t('hero.student')}</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
