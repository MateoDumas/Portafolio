import { useTranslation } from 'react-i18next'
import AnimatedSection from './AnimatedSection'

function Process() {
  const { t } = useTranslation()

  const steps = [
    {
      title: t('process.steps.discovery.title'),
      description: t('process.steps.discovery.description'),
    },
    {
      title: t('process.steps.structure.title'),
      description: t('process.steps.structure.description'),
    },
    {
      title: t('process.steps.development.title'),
      description: t('process.steps.development.description'),
    },
    {
      title: t('process.steps.delivery.title'),
      description: t('process.steps.delivery.description'),
    },
  ]

  return (
    <AnimatedSection id="proceso" className="section" aria-labelledby="proceso-titulo">
      <div className="container">
        <p className="section-kicker">{t('process.kicker')}</p>
        <h2 id="proceso-titulo" className="section-title">
          {t('process.title')}
        </h2>
        <div className="process-grid">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <h3 className="process-step-title">{step.title}</h3>
              <p>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default Process
