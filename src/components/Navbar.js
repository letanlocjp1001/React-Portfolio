import React, { useState, useEffect } from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.scss'
// import Logo from '../img/logo.png'
import Logo1 from '../img/icon.svg'

const getStorageTheme = () => {
  let theme = 'dark__theme'
  if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme')
  }
  return theme
}

function Navbar() {
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
            <Link to='/'>
              <button className='btn'>
                <FaIcons.FaHome />
              </button>
            </Link>
          </li>
          <li className='side-nav__item'>
            <Link to='/about'>
              <button className='btn'>
                <FaIcons.FaRegAddressBook />
              </button>
            </Link>
          </li>
          <li className='side-nav__item'>
            <Link to='/skill'>
              <button className='btn'>
                <FaIcons.FaCode />
              </button>
            </Link>
          </li>
          <li className='side-nav__item'>
            <Link to='/project'>
              <button className='btn'>
                <FaIcons.FaBusinessTime />
              </button>
            </Link>
          </li>
          <li className='side-nav__item'>
            <Link to='/contact'>
              <button className='btn'>
                <FaIcons.FaPhoneSquare />
              </button>
            </Link>
          </li>
        </ul>
        <ul className='side-nav'>
          <li className='side-nav__item'>
            <button className='btn'>
              <FaIcons.FaFacebook />
            </button>
          </li>
          <li className='side-nav__item'>
            <button className='btn'>
              <FaIcons.FaInstagram />
            </button>
          </li>
          <li className='side-nav__item'>
            <button className='btn'>
              <FaIcons.FaGithub />
            </button>
          </li>
        </ul>
      </div>
      <div className='siderow'>
        <Link to='/'>
          <div className='siderow__logo'>
            <img src={Logo1} alt='Logo' />
            <span className='text-logo'>LETANLOC</span>
          </div>
        </Link>

        <div className='darkmore'>
          <button className='btn darkmore__btn' onClick={toggleTheme}>
            <FaIcons.FaSun />
          </button>
          <button className='btn'>
            <FaIcons.FaGlobe />
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
