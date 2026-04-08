import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'
import AnimatedSection from './AnimatedSection'
import { motion } from 'framer-motion'

function Projects() {
  const { t } = useTranslation()
  const [activeFilter, setActiveFilter] = useState('todos')

  const filters = [
    { id: 'todos', label: t('projects_section.filters.all') },
    { id: 'frontend', label: t('projects_section.filters.frontend') },
    { id: 'backend', label: t('projects_section.filters.backend') },
    { id: 'fullstack', label: t('projects_section.filters.fullstack') },
  ]

  const visibleProjects =
    activeFilter === 'todos'
      ? projects
      : projects.filter((project) => project.type === activeFilter)

  // Helper function to resolve asset paths for GitHub Pages
  const getAssetPath = (path) => {
    if (!path || typeof path !== 'string') return null
    if (path.startsWith('http')) return path
    // Remove leading slash to avoid double slashes with BASE_URL
    const cleanPath = path.startsWith('/') ? path.slice(1) : path
    return `${import.meta.env.BASE_URL}${cleanPath}`
  }

  return (
    <AnimatedSection id="proyectos" className="section" aria-labelledby="proyectos-titulo">
      <div className="container">
        <div className="section-header">
          <div>
            <p className="section-kicker">{t('projects_section.kicker')}</p>
            <h2 id="proyectos-titulo" className="section-title">
              {t('projects_section.title')}
            </h2>
          </div>
          <div className="filters" role="tablist" aria-label="Filtrar proyectos por tipo">
            {filters.map((filter) => (
              <button
                key={filter.id}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter.id}
                className={`pill-button ${activeFilter === filter.id ? 'pill-button-active' : ''}`}
                onClick={() => setActiveFilter(filter.id)}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          className="projects-grid"
          layout
        >
          {visibleProjects.map((project) => {
            return (
              <motion.article
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                key={project.id}
                className="card project-card"
              >
                <header className="project-header">
                  <div className={`project-logo-container logo-${project.type}`}>
                    {project.logoUrl ? (
                      <img 
                        src={getAssetPath(project.logoUrl)} 
                        alt={`Logo de ${project.title}`} 
                        className="project-logo-image"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                    ) : null}
                    <div className="project-logo-text" aria-hidden="true" style={{ display: project.logoUrl ? 'none' : 'flex' }}>
                      {project.title.slice(0, 2).toUpperCase()}
                    </div>
                  </div>
                  <div className="project-header-content">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '0.5rem' }}>
                      <h3 className="card-title">{t(`projects.${project.id}.title`)}</h3>
                      <span className="badge">
                        {project.type}
                      </span>
                    </div>
                    <p className="project-role">{t(`projects.${project.id}.role`)}</p>
                  </div>
                </header>
                <p className="project-description">{t(`projects.${project.id}.description`)}</p>
                <ul className="pill-list">
                  {project.tags.slice(0, 4).map((tag) => (
                    <li key={tag} className="pill">
                      {tag}
                    </li>
                  ))}
                  {project.tags.length > 4 && <li className="pill">+{project.tags.length - 4}</li>}
                </ul>
                
                <Link
                  to={`/project/${project.id}`}
                  className="link-arrow project-link-button"
                  aria-label={`Ver detalles de ${project.title}`}
                >
                  {t('projects_section.view_project')}
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </Link>
              </motion.article>
            )
          })}
        </motion.div>
      </div>
    </AnimatedSection>
  )
}

export default Projects
