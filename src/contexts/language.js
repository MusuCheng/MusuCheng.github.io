import { createContext, useContext, useState, useEffect } from 'react'
import * as portfolioEN from '../portfolio'
import * as portfolioZH from '../portfolio.zh'

const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(
    localStorage.getItem('lang') || 'en'
  )

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const portfolio = lang === 'zh' ? portfolioZH : portfolioEN

  return (
    <LanguageContext.Provider value={{ lang, setLang, portfolio }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)