import React, { useState, useEffect } from 'react'
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.css'
import Logo from '../img/logo.png'
import moment from 'moment'

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
        <Link to='#' />
        <ul className='side-nav'>
          <li className='side-nav__item'>
            <a href='#home' className='btn side-nav__link'>
              <FaIcons.FaHome />
            </a>
          </li>
          <li className='side-nav__item'>
            <a href='#about' className='btn side-nav__link'>
              <FaIcons.FaRegAddressBook />
            </a>
          </li>
          <li className='side-nav__item'>
            <a href='#skill' className='btn side-nav__link'>
              <FaIcons.FaCode />
            </a>
          </li>
          <li className='side-nav__item'>
            <button className='btn side-nav__link'>
              <FaIcons.FaBusinessTime />
            </button>
          </li>
          <li className='side-nav__item'>
            <button className='btn side-nav__link'>
              <FaIcons.FaPhoneSquare />
            </button>
          </li>
        </ul>
        <ul className='side-nav'>
          <li className='side-nav__item'>
            <button className='btn side-nav__link'>
              <FaIcons.FaFacebook />
            </button>
          </li>
          <li className='side-nav__item'>
            <button className='btn side-nav__link'>
              <FaIcons.FaInstagram />
            </button>
          </li>
          <li className='side-nav__item'>
            <button className='btn side-nav__link'>
              <FaIcons.FaGithub />
            </button>
          </li>
        </ul>
      </div>
      <div className='siderow'>
        <div className='siderow__logo'>
          <img src={Logo} alt='Logo' />
        </div>

        <div className='darkmore'>
          <span>{moment().format('MMM ddd Do YYYY')}</span>
          <button className='btn darkmore__btn' onClick={toggleTheme}>
            <FaIcons.FaSun />
          </button>
          <button className='btn global__btn'>
            <FaIcons.FaGlobe />
          </button>
        </div>
      </div>
    </>
  )
}

export default Navbar
