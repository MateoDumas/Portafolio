import React, { useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { projects } from '../data/projects'
import Header from '../components/Header'
import Footer from '../components/Footer'
import PageTransition from '../components/PageTransition'
import { motion } from 'framer-motion'

function ProjectDetail() {
  const { t } = useTranslation()
  const { id } = useParams()
  const navigate = useNavigate()
  const project = projects.find((p) => p.id === id)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    console.error('Project not found for id:', id)
    return (
      <PageTransition className="container" style={{ padding: '4rem 0', textAlign: 'center' }}>
        <h2>{t('project_detail.not_found')}</h2>
        <p>{t('project_detail.not_found_desc', { id })}</p>
        <Link to="/" className="button primary" style={{ marginTop: '1rem' }}>
          {t('project_detail.back_home')}
        </Link>
      </PageTransition>
    )
  }

  const getFullUrl = (url) => {
    if (!url) return null;
    
    // Handle Google Drive links to use the embeddable preview
    if (url.includes('drive.google.com')) {
      return url.replace('/view?usp=drive_link', '/preview').replace('/view', '/preview');
    }

    if (url.startsWith('http')) {
      if (url.includes('youtube.com') || url.includes('youtu.be')) {
        const videoId = url.split('v=')[1] || url.split('/').pop();
        return `https://www.youtube.com/embed/${videoId}`;
      }
      return url;
    }
    
    // Explicitly handle the /Portafolio base path for production
    const isProduction = window.location.hostname !== 'localhost';
    const basePath = isProduction ? '/Portafolio' : '';
    const cleanUrl = url.startsWith('/') ? url : `/${url}`;
    
    return `${basePath}${cleanUrl}`;
  };

  // Special case for BoardWave to ensure video shows up immediately
  const boardwaveVideo = 'https://drive.google.com/file/d/1FvFxqMTq-fZ_lIVL5oWRebAKoiTeNWsM/preview';
  const displayVideoUrl = project.id === 'boardwave' ? boardwaveVideo : (project.videoUrl || project.video_url || t(`projects.${project.id}.videoUrl`));
  const videoSrc = getFullUrl(displayVideoUrl);
  const isYouTube = displayVideoUrl && (
    displayVideoUrl.includes('youtube.com') || 
    displayVideoUrl.includes('youtu.be') || 
    displayVideoUrl.includes('drive.google.com')
  );

  // Fetch translations for dynamic content
  const projectTitle = t(`projects.${project.id}.title`)
  const projectDescription = t(`projects.${project.id}.description`)
  const projectFullDescription = t(`projects.${project.id}.fullDescription`)
  const projectRole = t(`projects.${project.id}.role`)
  const projectFeatures = t(`projects.${project.id}.features`, { returnObjects: true }) || []

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    }
  }

  return (
    <PageTransition>
      <div style={{ background: '#ff0000', color: 'white', padding: '1rem', textAlign: 'center', fontWeight: 'bold' }}>
        ¡SI VES ESTO, EL CÓDIGO SE ACTUALIZÓ!
      </div>
      <Header activeSection="projects" onNavigate={() => navigate('/')} />
      
      <main className="project-detail">
        <motion.div 
          className="container"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants}>
            <Link to="/" className="back-link" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem', color: 'var(--color-text-soft)', textDecoration: 'none' }}>
              {t('project_detail.back')}
            </Link>
          </motion.div>

          <article className="project-content">
            <header style={{ marginBottom: '3rem' }}>
              <motion.h1 variants={itemVariants} className="project-title-large" style={{ marginBottom: '1.5rem' }}>
                {projectTitle}
              </motion.h1>

              <div className="project-header-grid">
                <motion.div variants={itemVariants} style={{ flex: '1', minWidth: 0 }}>
                  <p className="project-description-lead" style={{ marginTop: 0 }}>
                    {projectDescription}
                  </p>

                  <div className="project-actions">
                    {project.demoUrl && (
                      <a href={project.demoUrl} target="_blank" rel="noreferrer" className="button primary small">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                          <polyline points="15 3 21 3 21 9"></polyline>
                          <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        {t('project_detail.demo')}
                      </a>
                    )}
                    
                    {project.repoUrl && (
                      <a href={project.repoUrl} target="_blank" rel="noreferrer" className="button ghost small">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        {t('project_detail.repo')}
                      </a>
                    )}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants} className="project-meta-container">
                  <div className="project-meta-item">
                    <span className="meta-icon">👤</span>
                    <span className="meta-label">{projectRole}</span>
                  </div>
                  <div className="project-meta-item">
                    <span className="meta-icon">🏷️</span>
                    <span className="meta-label">
                      {project.type.charAt(0).toUpperCase() + project.type.slice(1)}
                    </span>
                  </div>
                </motion.div>
              </div>
            </header>

            {displayVideoUrl && (
              <motion.div variants={itemVariants} id="project-video" className="project-video-container" style={{ marginBottom: '4rem', borderRadius: '1rem', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                {isYouTube ? (
                  <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                    <iframe
                      src={videoSrc}
                      title={projectTitle}
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ) : (
                  <video 
                    key={videoSrc}
                    controls 
                    playsInline 
                    preload="auto" 
                    style={{ width: '100%', display: 'block', backgroundColor: '#000', minHeight: '300px' }}
                  >
                    <source src={videoSrc} type="video/mp4" />
                    <p style={{ padding: '2rem', textAlign: 'center', color: 'white' }}>
                      Si no puedes ver el video, puedes <a href={videoSrc} target="_blank" rel="noreferrer" style={{ color: '#4ade80', textDecoration: 'underline' }}>descargarlo aquí</a>.
                    </p>
                  </video>
                )}
              </motion.div>
            )}

            {/* DEBUG INFO - REMOVE AFTER FIXING */}
            {project.id === 'boardwave' && (
              <div style={{ background: '#f0f0f0', padding: '1rem', marginBottom: '2rem', borderRadius: '0.5rem', color: '#333', fontSize: '0.8rem' }}>
                <p><strong>Debug Info:</strong></p>
                <p>ID: {project.id}</p>
                <p>Video URL: {displayVideoUrl}</p>
                <p>Video Src: {videoSrc}</p>
              </div>
            )}

            <div className="project-body">
              <motion.div variants={itemVariants} className="project-info">
                <h2>Sobre el proyecto</h2>
                <p>
                  {projectFullDescription || projectDescription}
                </p>

                {projectFeatures && projectFeatures.length > 0 && (
                  <div className="project-features">
                    <h3>Características principales</h3>
                    <ul>
                      {projectFeatures.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </motion.div>

              <motion.div variants={itemVariants} className="project-sidebar">
                <div className="card tech-stack-card">
                  <h3 className="card-title">Tecnologías</h3>
                  <div className="tags-container" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {project.tags.map((tag) => (
                      <span key={tag} className="pill">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </article>
        </motion.div>
      </main>

      <Footer />
    </PageTransition>
  )
}

export default ProjectDetail
