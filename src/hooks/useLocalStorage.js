import { useState, useEffect } from 'react'

// Simple hook wrapping localStorage with SSR-safety
export default function useLocalStorage(key, initialValue) {
  const [state, setState] = useState(() => {
    try {
      const raw = typeof window !== 'undefined' ? window.localStorage.getItem(key) : null
      return raw ? JSON.parse(raw) : initialValue
    } catch (e) {
      return initialValue
    }
  })

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(state))
    } catch (e) {
      // ignore write errors
    }
  }, [key, state])

  return [state, setState]
}
