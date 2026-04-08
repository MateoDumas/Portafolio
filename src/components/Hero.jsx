import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

function Hero({ onContactClick, onProjectsClick }) {
  const { t, i18n } = useTranslation()
  const currentLang = i18n.language || 'es'
  const cvUrl = `${import.meta.env.BASE_URL}${currentLang.startsWith('es') ? 'cv_es.pdf' : 'cv_en.pdf'}`

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section id="inicio" className="section hero" aria-label="Presentación">
      <div className="container hero-grid">
        <motion.div 
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p variants={itemVariants} className="hero-kicker">{t('hero.kicker')}</motion.p>
          <motion.h1 variants={itemVariants} className="hero-title">
            {t('hero.title')}
          </motion.h1>
          <motion.p variants={itemVariants} className="hero-subtitle">
            {t('hero.subtitle')}
          </motion.p>
          <motion.div variants={itemVariants} className="hero-actions">
            <button type="button" className="button primary" onClick={onContactClick}>
              {t('hero.cta_primary')}
            </button>
            <a 
              href="#proyectos" 
              className="button ghost" 
              onClick={(e) => {
                e.preventDefault()
                onProjectsClick && onProjectsClick()
              }}
            >
              {t('hero.cta_secondary')}
            </a>
            <a href={cvUrl} className="button ghost subtle" target="_blank" rel="noreferrer">
              {t('hero.cta_cv')}
            </a>
          </motion.div>
        </motion.div>
        <div className="hero-highlight" aria-hidden="true">
          <motion.div 
            className="hero-card"
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
            whileHover={{ scale: 1.05, rotate: 2, transition: { duration: 0.3 } }}
          >
            <span className="hero-badge">{t('hero.badge')}</span>
            <p className="hero-metric">
              <span className="hero-metric-number">+2</span>
              <span className="hero-metric-label">{t('hero.years')}</span>
            </p>
            <p className="hero-metric">
              <span className="hero-metric-number">Ing.</span>
              <span className="hero-metric-label">{t('hero.student')}</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
