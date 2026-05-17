import React, { useState } from 'react'
import { validateEmail, validateRequired } from '../utils/validators.js'
import { motion } from 'framer-motion'

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((s) => ({ ...s, [name]: value }))
    setErrors((s) => ({ ...s, [name]: undefined }))
  }

  function validate() {
    const e = {}
    if (!validateRequired(form.name)) e.name = 'Name is required.'
    if (!validateEmail(form.email)) e.email = 'A valid email is required.'
    if (!validateRequired(form.message)) e.message = 'Please include a message.'
    return e
  }

  function handleSubmit(e) {
    e.preventDefault()
    const eObj = validate()
    setErrors(eObj)
    if (Object.keys(eObj).length) return

    setSubmitting(true)
    setSuccess(false)

    // Simulate async submission
    setTimeout(() => {
      setSubmitting(false)
      setSuccess(true)
      setForm({ name: '', email: '', message: '' })
    }, 1200)
  }

  return (
    <motion.section id="contact" aria-labelledby="contact-heading" className="card">
      <h2 id="contact-heading">Contact us</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-field">
          <label htmlFor="name">Name</label>
          <input id="name" name="name" value={form.name} onChange={handleChange} />
          {errors.name && <small role="alert" style={{ color: 'var(--accent)' }}>{errors.name}</small>}
        </div>

        <div className="form-field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" value={form.email} onChange={handleChange} />
          {errors.email && <small role="alert" style={{ color: 'var(--accent)' }}>{errors.email}</small>}
        </div>

        <div className="form-field">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" value={form.message} onChange={handleChange} />
          {errors.message && <small role="alert" style={{ color: 'var(--accent)' }}>{errors.message}</small>}
        </div>

        <div style={{ marginTop: '0.75rem' }}>
          <button className="btn" type="submit" disabled={submitting} aria-busy={submitting}>
            {submitting ? 'Sending...' : 'Send message'}
          </button>
        </div>

        <div aria-live="polite" style={{ marginTop: '0.75rem' }}>
          {success && <div style={{ color: 'var(--primary)' }}>Thanks — we will get back to you soon!</div>}
        </div>
      </form>
    </motion.section>
  )
}
