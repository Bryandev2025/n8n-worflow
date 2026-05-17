export function validateEmail(email) {
  if (!email) return false
  // simple email regex (sufficient for basic validation)
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export function validateRequired(value) {
  if (value === null || value === undefined) return false
  return String(value).trim().length > 0
}
