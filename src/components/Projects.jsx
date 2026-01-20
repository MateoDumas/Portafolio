import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'

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

  return (
    <section id="proyectos" className="section" aria-labelledby="proyectos-titulo">
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

        <div className="projects-grid">
          {visibleProjects.map((project) => {
            return (
              <article
                key={project.id}
                className="card project-card"
              >
                <header className="project-header">
                  <div className={`project-logo-container logo-${project.type}`}>
                    {project.logoUrl ? (
                      <img 
                        src={project.logoUrl} 
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
                
                <div style={{ marginTop: '1.5rem' }}>
                  <Link 
                    to={`/project/${project.id}`} 
                    className="button ghost small project-link-button"
                    aria-label={`Ver detalles de ${project.title}`}
                  >
                    {t('projects_section.view_detail')}
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects
