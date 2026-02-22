import { useLanguage } from '../../contexts/language'
import Navbar from '../Navbar/Navbar'
import './Header.css'

const Header = () => {
  const { portfolio } = useLanguage()
  const { homepage, title } = portfolio.header

  return (
    <header className='header center'>
      <h3>
        {homepage ? (
          <a href={homepage} className='link'>
            {title}
          </a>
        ) : (
          title
        )}
      </h3>
      <Navbar />
    </header>
  )
}

export default Header