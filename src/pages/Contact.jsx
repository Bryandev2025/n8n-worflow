import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = 'Name is required';
    if (!form.email.trim()) e.email = 'Email is required';n    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email is invalid';
    if (!form.message.trim()) e.message = 'Message is required';
    return e;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const e = validate();
    setErrors(e);
    if (Object.keys(e).length === 0) {
      // In a real app you would POST to an API. Here we simulate success.
      setTimeout(() => setSubmitted(true), 600);
    }
  };

  if (submitted) {
    return (
      <section className="container">
        <h1>Contact</h1>
        <p className="muted">Thanks! Your message has been received. We'll get back to you shortly.</p>
      </section>
    );
  }

  return (
    <section className="container">
      <h1>Contact</h1>
      <form onSubmit={handleSubmit} noValidate style={{ marginTop: 12, display: 'grid', gap: 12, maxWidth: 700 }}>
        <label className="form-row">
          <span className="muted">Name</span>
          <input
            className="input"
            value={form.name}
            onChange={(e) => setForm((s) => ({ ...s, name: e.target.value }))}
            aria-invalid={!!errors.name}
            aria-describedby={errors.name ? 'err-name' : undefined}
          />
          {errors.name && (
            <div id="err-name" className="error" role="alert">
              {errors.name}
            </div>
          )}
        </label>

        <label className="form-row">
          <span className="muted">Email</span>
          <input
            className="input"
            type="email"
            value={form.email}
            onChange={(e) => setForm((s) => ({ ...s, email: e.target.value }))}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? 'err-email' : undefined}
          />
          {errors.email && (
            <div id="err-email" className="error" role="alert">
              {errors.email}
            </div>
          )}
        </label>

        <label className="form-row">
          <span className="muted">Message</span>
          <textarea
            className="input"
            rows={6}
            value={form.message}
            onChange={(e) => setForm((s) => ({ ...s, message: e.target.value }))}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? 'err-message' : undefined}
          />
          {errors.message && (
            <div id="err-message" className="error" role="alert">
              {errors.message}
            </div>
          )}
        </label>

        <div>
          <button type="submit" className="btn">
            Send Message
          </button>
        </div>
      </form>
    </section>
  );
}
