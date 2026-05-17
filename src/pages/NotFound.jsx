import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="card">
      <h1>404 — Not found</h1>
      <p className="small-muted">We couldn't find the page you were looking for.</p>
      <p>
        <Link to="/" className="btn">Go home</Link>
      </p>
    </section>
  )
}
