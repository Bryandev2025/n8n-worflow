import React from 'react'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <p className="small-muted">© {new Date().getFullYear()} ModernSite. Built with Vite & React.</p>
      </div>
    </footer>
  )
}
