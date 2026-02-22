import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { useLanguage } from '../../contexts/language'
import './About.css'

const About = () => {
  const { lang, portfolio } = useLanguage()
  const { about } = portfolio
  const { name, role, description, resume, social, picture } = about

  return (
    <div id='about' className='about center'>
      <div className='about__header'>
        <div className='about__intro'>
          {name && (
            <h1>
              {lang === 'zh' ? '你好，我是 ' : 'Hi, I am '}
              <span className='about__name'>{name}.</span>
            </h1>
          )}

          {picture && (
            <img
              src={`${process.env.PUBLIC_URL}/profile.jpg`}
              alt={name}
              className='about__picture'
            />
          )}

          {role && (
            <h2 className='about__role'>
              {lang === 'zh' ? '' : 'A '}
              {role}.
            </h2>
          )}

          {description && <p className='about__desc'>{description}</p>}
        </div>
      </div>

      <div className='about__contact center'>
        {resume && (
          <a href={resume}>
            <span type='button' className='btn btn--outline'>
              {lang === 'zh' ? '简历' : 'Resume'}
            </span>
          </a>
        )}

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About