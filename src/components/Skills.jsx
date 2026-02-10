import { useTranslation } from 'react-i18next'
import AnimatedSection from './AnimatedSection'

function Skills() {
  const { t } = useTranslation()

  const skills = [
    {
      category: t('skills.categories.frontend'),
      items: [
        'React',
        'Next.js',
        'TypeScript',
        'JavaScript',
        'Tailwind',
        'Three.js',
        'Zustand',
        'HTML5/CSS3',
      ],
    },
    {
      category: t('skills.categories.backend'),
      items: [
        'Node.js',
        'NestJS',
        'GraphQL',
        'Prisma',
        'PostgreSQL',
        'MongoDB',
        'WebRTC',
        'Socket.io',
      ],
    },
    {
      category: t('skills.categories.tools'),
      items: ['Git/GitHub', 'Docker', 'AWS', 'Vercel', 'Postman', 'Linux'],
    },
    {
      category: t('skills.categories.soft'),
      items: [
        t('skills.items.communication'),
        t('skills.items.teamwork'),
        t('skills.items.problem_solving'),
        t('skills.items.time_management'),
        t('skills.items.self_management'),
      ],
    },
    {
      category: t('skills.categories.languages'),
      items: [
        t('skills.items.spanish_native'),
        t('skills.items.english_b2'),
      ],
    },
  ]

  return (
    <AnimatedSection id="habilidades" className="section" aria-labelledby="habilidades-titulo">
      <div className="container">
        <p className="section-kicker">{t('skills.kicker')}</p>
        <h2 id="habilidades-titulo" className="section-title">
          {t('skills.title')}
        </h2>
        <div className="skills-grid" role="list">
          {skills.map((group) => (
            <article key={group.category} className="card skill-card" role="listitem">
              <h3 className="card-title">{group.category}</h3>
              <ul className="pill-list">
                {group.items.map((item) => (
                  <li key={item} className="pill">
                    {item}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

export default Skills
