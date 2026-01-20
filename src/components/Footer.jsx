import { useTranslation } from 'react-i18next'

function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="footer">
      <div className="container footer-content">
        <p className="footer-text">{t('footer.text', { year: new Date().getFullYear() })}</p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="https://github.com/Mateodumas" target="_blank" rel="noreferrer" className="nav-link">GitHub</a>
          <a href="https://www.linkedin.com/in/mateo-dumas" target="_blank" rel="noreferrer" className="nav-link">LinkedIn</a>
          <a href="mailto:dumasmateo2005@gmail.com" className="nav-link">Email</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
