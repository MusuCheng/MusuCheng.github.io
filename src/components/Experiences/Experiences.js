import uniqid from 'uniqid'
import { useLanguage } from '../../contexts/language'
import ExperienceContainer from '../ExperienceContainer/ExperienceContainer'
import './Experiences.css'

const Experiences = () => {
  const { lang, portfolio } = useLanguage()
  const { experiences } = portfolio

  if (!experiences || !experiences.length) return null

  return (
    <section id='experience' className='section experiences'>
      <h2 className='section__title'>{lang === 'zh' ? '经历' : 'Experience'}</h2>

      <div className='experiences__grid'>
        {experiences.map((exp) => (
          <ExperienceContainer key={uniqid()} experience={exp} />
        ))}
      </div>
    </section>
  )
}

export default Experiences