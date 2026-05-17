import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { motion } from 'framer-motion'

export default function Features() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    axios
      .get('https://jsonplaceholder.typicode.com/posts?_limit=3')
      .then((res) => {
        if (!cancelled) setItems(res.data)
      })
      .catch((err) => {
        if (!cancelled) setError(err.message || 'Failed to fetch')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })

    return () => {
      cancelled = true
    }
  }, [])

  return (
    <section aria-labelledby="features-heading" style={{ marginBottom: '1.5rem' }}>
      <h2 id="features-heading">Features</h2>
      {loading && <p className="small-muted">Loading features...</p>}
      {error && <p className="small-muted">Error: {error}</p>}
      <div className="grid grid-cols-3" style={{ gap: '1rem' }}>
        {items.map((item, idx) => (
          <motion.article
            key={item.id}
            className="card"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * idx }}
            aria-labelledby={`feature-${item.id}-title`}
          >
            <h3 id={`feature-${item.id}-title`}>{item.title}</h3>
            <p className="small-muted">{item.body}</p>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
