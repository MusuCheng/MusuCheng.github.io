import uniqid from 'uniqid'
import { useLanguage } from '../../contexts/language'
import ProjectContainer from '../ProjectContainer/ProjectContainer'
import './Projects.css'

const Projects = () => {
  const { lang, portfolio } = useLanguage()
  const { projects } = portfolio

  if (!projects || !projects.length) return null

  return (
    <section id='projects' className='section projects'>
      <h2 className='section__title'>{lang === 'zh' ? '项目' : 'Projects'}</h2>

      <div className='projects__grid'>
        {projects.map((project) => (
          <ProjectContainer key={uniqid()} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects