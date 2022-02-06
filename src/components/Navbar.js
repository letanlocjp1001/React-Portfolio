import React, { useState, useEffect } from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.scss'
import '../i18n'
import { useTranslation } from 'react-i18next'

// import Logo from '../img/logo.png'
import Logo1 from '../img/project2.svg'

const getStorageTheme = () => {
  let theme = 'dark__theme'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

function Navbar() {
  const { t, i18n } = useTranslation()
  const changleLanguage = (lang) => {
    i18n.changeLanguage(lang)
  }

  const [theme, setTheme] = useState(getStorageTheme())

  const toggleTheme = () => {
    if (theme === 'dark__theme') {
      setTheme('light__theme')
    } else {
      setTheme('dark__theme')
    }
  }
  useEffect(() => {
    document.documentElement.className = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <>
      <div className='sidebar'>
        <ul className='side-nav'>
          <li className='side-nav__item'>
            <a href='#home'>
              <button className='btn'>
                <FaIcons.FaHome />
              </button>
            </a>
          </li>
          <li className='side-nav__item'>
            <a href='#about'>
              <button className='btn'>
                <FaIcons.FaRegAddressBook />
              </button>
            </a>
          </li>
          <li className='side-nav__item'>
            <a href='#skill'>
              <button className='btn'>
                <FaIcons.FaCode />
              </button>
            </a>
          </li>
          <li className='side-nav__item'>
            <a href='#project'>
              <button className='btn'>
                <FaIcons.FaBusinessTime />
              </button>
            </a>
          </li>
          <li className='side-nav__item'>
            <a href='#contact'>
              <button className='btn'>
                <FaIcons.FaPhoneSquare />
              </button>
            </a>
          </li>
        </ul>
        <ul className='side-nav'>
          <li className='side-nav__item'>
            <a href='https://www.facebook.com/profile.php?id=100015611534207'>
              <button className='btn'>
                <FaIcons.FaFacebook />
              </button>
            </a>
          </li>
          <li className='side-nav__item'>
            <a href='https://www.instagram.com/?hl=en'>
              <button className='btn'>
                <FaIcons.FaInstagram />
              </button>
            </a>
          </li>
          <li className='side-nav__item'>
            <a href='https://github.com/letanlocjp1001'>
              <button className='btn'>
                <FaIcons.FaGithub />
              </button>
            </a>
          </li>
        </ul>
      </div>
      <div className='siderow'>
        <Link to='/'>
          <div className='siderow__logo'>
            <img src={Logo1} alt='Logo' />
            <span className='text-logo'>{t('about.name')}</span>
          </div>
        </Link>

        <div className='darkmore'>
          <button className='btn darkmore__btn' onClick={toggleTheme}>
            <FaIcons.FaSun />
          </button>
          <button className='btn' onClick={() => changleLanguage('en')}>
            EN
          </button>
          <button className='btn' onClick={() => changleLanguage('ja')}>
            JA
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
