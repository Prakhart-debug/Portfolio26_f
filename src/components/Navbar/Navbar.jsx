import React, { useState } from 'react'
import { createPortal } from 'react-dom'
import { MenuToggle } from './menuToggle'
import { motion, AnimatePresence } from 'framer-motion'
import Socials from './Navsocials'
import Logo from '/public/BF Logo Final.png?url'
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
              <img className='w-10 max-w-none' src={Logo} alt='logo' />
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

        {typeof document !== 'undefined' &&
          createPortal(
            <AnimatePresence>
              {toggleMenu && (
                <motion.div
                  className='fixed inset-0 z-[60] flex flex-col items-center justify-center gap-2 bg-skin-bg lg:hidden'
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <button
                    onClick={() => setToggleMenu(false)}
                    aria-label='Close menu'
                    className='absolute right-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-bordersubtle bg-skin-muted text-skin-accent outline-none transition-colors duration-200 hover:border-bordermain focus-visible:ring-2 focus-visible:ring-skin-accent'
                  >
                    <svg width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round'>
                      <line x1='4' y1='4' x2='20' y2='20' />
                      <line x1='20' y1='4' x2='4' y2='20' />
                    </svg>
                  </button>

                  <ul className='flex w-full max-w-xs flex-col items-center gap-8 font-paragraph text-3xl text-skin-base'>
                    {['about', 'skills', 'projects', 'contact'].map((link, i) => (
                      <motion.li
                        key={link}
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.25, delay: 0.05 * i }}
                      >
                        <a
                          href={`#${link}`}
                          onClick={() => setToggleMenu(false)}
                          className='capitalize transition-colors duration-200 hover:text-skin-accent'
                        >
                          {link.charAt(0).toUpperCase() + link.slice(1)}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>,
            document.body
          )}
      </div>
    </motion.nav>
  )
}

export default Navbar
