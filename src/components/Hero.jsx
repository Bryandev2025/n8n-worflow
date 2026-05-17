import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="card" aria-labelledby="hero-heading" style={{ marginBottom: '1.5rem' }}>
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 id="hero-heading">Build modern experiences with Vite & React</h1>
        <p className="small-muted">Fast dev server, instant HMR, accessible markup, and delightful animations.</p>
        <p>
          <a href="#contact" className="btn" aria-label="Contact us">
            Get in touch
          </a>
        </p>
      </motion.div>
    </section>
  )
}
