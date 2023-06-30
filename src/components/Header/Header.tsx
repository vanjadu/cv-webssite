import { useState } from 'react'
import './Header.sass'
import { FiGlobe } from 'react-icons/fi'
import { useTranslation } from 'react-i18next'

const languages = [
  {
    name: 'English',
    code: 'en',
  },
  {
    name: 'Serbian',
    code: 'sr',
  },
]

const Header = () => {
  const [open, setOpen] = useState<boolean>(false)

  const { i18n } = useTranslation()

  return (
    <header className='header'>
      <h1 className='header__name' onClick={() => window.scrollTo(0, 0)}>
        Vanja Dulikravic
      </h1>
      <div className='header__language'>
        <FiGlobe className='header__icon' onClick={() => setOpen(!open)} />
        <div className={`header__menu ${open && 'show'}`}>
          {languages.map((lang) => (
            <button
              key={lang.code}
              className='header__button'
              onClick={() => {
                i18n.changeLanguage(lang.code)
                setOpen(false)
              }}
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
