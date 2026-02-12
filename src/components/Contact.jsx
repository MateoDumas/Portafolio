import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import AnimatedSection from './AnimatedSection'

function Contact() {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState(null) // null | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error')
      return
    }

    setStatus('loading')

    try {
      const response = await fetch('https://formspree.io/f/meelaobg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
        setTimeout(() => setStatus(null), 5000)
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  return (
    <AnimatedSection id="contacto" className="section" aria-labelledby="contacto-titulo">
      <div className="container contact-grid">
        <div>
          <p className="section-kicker">{t('contact.kicker')}</p>
          <h2 id="contacto-titulo" className="section-title">
            {t('contact.title')}
          </h2>
          <p className="contact-desc">
            {t('contact.body')}
          </p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              {t('contact.form.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-input"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              {t('contact.form.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-input"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message" className="form-label">
              {t('contact.form.message')}
            </label>
            <textarea
              id="message"
              name="message"
              className="form-input"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button 
            type="submit" 
            className={`button primary full-width ${status === 'loading' ? 'loading' : ''}`}
            disabled={status === 'loading'}
          >
            {status === 'loading' ? t('contact.form.sending') || 'Enviando...' : t('contact.form.submit')}
          </button>
          {status === 'error' && (
            <p className="form-message error" role="alert">
              {t('contact.form.error')}
            </p>
          )}
          {status === 'success' && (
            <p className="form-message success" role="alert">
              {t('contact.form.success')}
            </p>
          )}
        </form>
      </div>
    </AnimatedSection>
  )
}

export default Contact
