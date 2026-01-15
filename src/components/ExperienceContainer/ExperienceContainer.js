import uniqid from 'uniqid'
import './ExperienceContainer.css'

const ExperienceContainer = ({ experience }) => {
  const { company, role, period, description, stack } = experience

  return (
    <div className='experience'>
      <h3 className='experience__company'>{company}</h3>
      <p className='experience__meta'>
        <span className='experience__role'>{role}</span>
        {period && <span className='experience__period'> · {period}</span>}
      </p>

      {Array.isArray(description) ? (
        <ul className='experience__bullets'>
          {description.map((line) => (
            <li key={uniqid()} className='experience__bullet'>
              {line}
            </li>
          ))}
        </ul>
      ) : (
        description && <p className='experience__description'>{description}</p>
      )}

      {stack && (
        <ul className='experience__stack'>
          {stack.map((item) => (
            <li key={uniqid()} className='experience__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default ExperienceContainer
