import { useLanguage } from '../../contexts/language'
import './Contact.css'

const Contact = () => {
  const { lang, portfolio } = useLanguage()
  const { contact } = portfolio

  if (!contact?.email) return null

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>{lang === 'zh' ? '联系' : 'Contact'}</h2>
      <a href={`mailto:${contact.email}`}>
        <span type='button' className='btn btn--outline'>
          {lang === 'zh' ? '给我发邮件' : 'Email me'}
        </span>
      </a>
    </section>
  )
}

export default Contact