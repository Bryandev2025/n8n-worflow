import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import useLocalStorage from '../hooks/useLocalStorage.js'

export default function ThemeToggle() {
  const [theme, setTheme] = useLocalStorage('theme', 'light')

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  function toggle() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <motion.button
      onClick={toggle}
      aria-pressed={theme === 'dark'}
      aria-label={`Toggle theme (currently ${theme})`}
      style={{ background: 'transparent', border: 'none', cursor: 'pointer' }}
      whileTap={{ scale: 0.96 }}
    >
      {theme === 'light' ? (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M12 3v2" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 19v2" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M4.22 4.22l1.42 1.42" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M18.36 18.36l1.42 1.42" stroke="#0f172a" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="12" cy="12" r="4" stroke="#0f172a" strokeWidth="1.6" />
        </svg>
      ) : (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" fill="#e6eef8" />
        </svg>
      )}
    </motion.button>
  )
}
