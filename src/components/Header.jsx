import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle.jsx'

// Inline SVG logo for minimal external assets and crisp rendering
function Logo() {
  return (
    <svg viewBox="0 0 48 48" fill="none" aria-hidden>
      <rect width="48" height="48" rx="10" fill="url(#g)" />
      <defs>
        <linearGradient id="g" x1="0" x2="48" y1="0" y2="48" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0ea5e9" />
          <stop offset="1" stopColor="#7c3aed" />
        </linearGradient>
      </defs>
      <g transform="translate(8 8)">
        <circle cx="16" cy="16" r="10" fill="#fff" opacity="0.12" />
        <path d="M6 20 L18 8" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 8h12v12" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  )
}

export default function Header() {
  return (
    <header className="site-header" role="banner">
      <div className="header-inner">
        <NavLink to="/" className="brand" aria-label="Home">
          <Logo />
          <div>
            <strong>ModernSite</strong>
            <div className="small-muted">Fast. Accessible. Clean.</div>
          </div>
        </NavLink>

        <nav className="nav" role="navigation" aria-label="Main navigation">
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}
