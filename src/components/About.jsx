import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import AnimatedSection from './AnimatedSection'

function About() {
  const { t } = useTranslation()
  const [imageError, setImageError] = useState(false)

  return (
    <AnimatedSection id="sobre-mi" className="section" aria-labelledby="sobre-mi-titulo">
      <div className="container section-grid">
        <div>
          <p className="section-kicker">{t('about.kicker')}</p>
          <h2 id="sobre-mi-titulo" className="section-title">
            {t('about.title')}
          </h2>
          
          {!imageError && (
            <div className="about-profile-wrapper">
              <img 
                src={`${import.meta.env.BASE_URL}logos/Mateo.png`}
                alt="Mateo Dumas" 
                className="about-profile-image"
                onError={() => setImageError(true)}
              />
            </div>
          )}
        </div>
        <div className="section-body">
          <p>
            {t('about.body1')}
          </p>
          <p>
            {t('about.body2')}
          </p>
          <div style={{ marginTop: '2rem' }}>
            <h3 style={{ fontSize: '1.1rem', color: 'var(--color-heading)', marginBottom: '1rem' }}>{t('about.education.title')}</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '1rem' }}>
              {(t('about.education.items', { returnObjects: true }) || []).map((item, index) => (
                <li key={index}>
                  <strong style={{ color: 'var(--color-heading)' }}>{item.title}</strong>
                  <div style={{ fontSize: '0.9rem', color: 'var(--color-text-soft)' }}>{item.desc}</div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

export default About
