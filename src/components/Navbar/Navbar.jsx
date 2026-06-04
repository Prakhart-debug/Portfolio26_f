import React, { useState } from 'react'
import { MenuToggle } from './menuToggle'
import { motion } from 'framer-motion'
import Socials from './Navsocials'
import Logo from '/public/BF Logo Final.png'
import { useTheme } from '../../ThemeContext'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const handleToggle = () => setToggleMenu(!toggleMenu)

  return (
    <motion.nav
      className='sticky top-0 z-50 bg-skin-trans py-4 border-b border-bordersubtle'
      style={{ backdropFilter: 'blur(12px)' }}
    >
      <div className='flex h-6 flex-row-reverse items-center justify-between py-6 lg:flex-row lg:justify-between px-6'>
        <div className='flex items-center gap-4'>
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className='flex items-center justify-center w-10 h-10 rounded-full border border-bordersubtle bg-skin-muted hover:border-bordermain transition-all duration-200'
            aria-label='Toggle theme'
            title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className='text-skin-accent'>
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className='text-skin-accent'>
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
              </svg>
            )}
          </button>
          <MenuToggle toggle={handleToggle} isOpen={toggleMenu} />
        </div>

        <ul className='ml-20 hidden w-1/4 items-center justify-between font-paragraph text-2xl text-skin-base lg:flex'>
          <li className='px-4'>
            <a href='#home'>
              <img className='md:w-10' src={Logo} alt='logo' />
            </a>
          </li>
          {['about', 'skills', 'projects', 'contact'].map(link => (
            <li key={link} className='px-4'>
              <a
                href={`#${link}`}
                className='hover:text-skin-accent transition-colors duration-200 capitalize'
              >
                {link.charAt(0).toUpperCase() + link.slice(1)}
              </a>
            </li>
          ))}
        </ul>

        <Socials />

        {toggleMenu && (
          <div className='fixed top-0 left-0 z-40 mx-auto my-0 h-full w-screen flex-row-reverse items-center justify-center bg-skin-bg py-2 text-lg'>
            <ul className='mx-auto my-6 flex h-5/6 w-1/4 flex-col items-center justify-evenly font-paragraph text-2xl text-skin-base'>
              {['about', 'skills', 'projects', 'contact'].map(link => (
                <li key={link} className='px-4 hover:text-skin-accent'>
                  <a href={`#${link}`} onClick={() => setToggleMenu(false)} className='capitalize'>
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar
