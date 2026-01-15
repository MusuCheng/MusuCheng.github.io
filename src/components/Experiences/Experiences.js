import uniqid from 'uniqid'
import { experiences } from '../../portfolio'
import ExperienceContainer from '../ExperienceContainer/ExperienceContainer'
import './Experiences.css'

const Experiences = () => {
  if (!experiences || !experiences.length) return null

  return (
    <section id='experience' className='section experiences'>
      <h2 className='section__title'>Experience</h2>

      <div className='experiences__grid'>
        {experiences.map((exp) => (
          <ExperienceContainer key={uniqid()} experience={exp} />
        ))}
      </div>
    </section>
  )
}

export default Experiences
