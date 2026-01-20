import { useTranslation } from 'react-i18next'

function LanguageSelector() {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const newLang = i18n.language === 'es' ? 'en' : 'es'
    i18n.changeLanguage(newLang)
  }

  return (
    <button
      onClick={toggleLanguage}
      className="button ghost small"
      style={{ padding: '0.5rem', minWidth: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
      aria-label="Cambiar idioma / Change language"
    >
      <span style={{ fontSize: '1.2rem' }}>🌐</span>
      <span style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>
        {i18n.language === 'es' ? 'EN' : 'ES'}
      </span>
    </button>
  )
}

export default LanguageSelector
