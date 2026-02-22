import { useContext, useState } from 'react'
import Brightness2Icon from '@material-ui/icons/Brightness2'
import WbSunnyRoundedIcon from '@material-ui/icons/WbSunnyRounded'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'

import { ThemeContext } from '../../contexts/theme'
import { useLanguage } from '../../contexts/language'
import './Navbar.css'

const Navbar = () => {
  const [{ themeName, toggleTheme }] = useContext(ThemeContext)
  const { lang, setLang, portfolio } = useLanguage()

  const { about, experiences, projects, skills, contact } = portfolio

  const [showNavList, setShowNavList] = useState(false)
  const toggleNavList = () => setShowNavList(!showNavList)

  const toggleLanguage = () => setLang(lang === 'en' ? 'zh' : 'en')

  return (
    <nav className='center nav'>
      <ul
        style={{ display: showNavList ? 'flex' : null }}
        className='nav__list'
      >
        {about?.description || about?.name ? (
          <li className='nav__list-item'>
            <a href='#about' onClick={toggleNavList} className='link link--nav'>
              {lang === 'zh' ? '关于' : 'About'}
            </a>
          </li>
        ) : null}

        {experiences?.length ? (
          <li className='nav__list-item'>
            <a
              href='#experience'
              onClick={toggleNavList}
              className='link link--nav'
            >
              {lang === 'zh' ? '经历' : 'Experience'}
            </a>
          </li>
        ) : null}

        {projects?.length ? (
          <li className='nav__list-item'>
            <a
              href='#projects'
              onClick={toggleNavList}
              className='link link--nav'
            >
              {lang === 'zh' ? '项目' : 'Projects'}
            </a>
          </li>
        ) : null}

        {skills?.length ? (
          <li className='nav__list-item'>
            <a href='#skills' onClick={toggleNavList} className='link link--nav'>
              {lang === 'zh' ? '技能' : 'Skills'}
            </a>
          </li>
        ) : null}

        {contact?.email ? (
          <li className='nav__list-item'>
            <a
              href='#contact'
              onClick={toggleNavList}
              className='link link--nav'
            >
              {lang === 'zh' ? '联系' : 'Contact'}
            </a>
          </li>
        ) : null}
      </ul>

      {/* 语言切换按钮：放在 theme 按钮左边 */}
      <button
        type='button'
        onClick={toggleLanguage}
        className='btn btn--icon nav__lang'
        aria-label='toggle language'
        title={lang === 'zh' ? 'Switch to English' : '切换中文'}
      >
        {lang === 'zh' ? 'EN' : '中文'}
      </button>

      <button
        type='button'
        onClick={toggleTheme}
        className='btn btn--icon'
        aria-label='toggle theme'
      >
        {themeName === 'dark' ? <WbSunnyRoundedIcon /> : <Brightness2Icon />}
      </button>

      <button
        type='button'
        onClick={toggleNavList}
        className='btn btn--icon nav__hamburger'
        aria-label='toggle navigation'
      >
        {showNavList ? <CloseIcon /> : <MenuIcon />}
      </button>
    </nav>
  )
}

export default Navbar