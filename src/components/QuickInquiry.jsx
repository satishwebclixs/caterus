import { useState } from 'react'
import { FiUser, FiPhone, FiCalendar, FiUsers, FiChevronDown } from 'react-icons/fi'
import './QuickInquiry.css'

export default function QuickInquiry() {
  const [form, setForm] = useState({
    name: '', phone: '', eventType: '', guests: '', eventDate: ''
  })
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const handleChange = e => {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async e => {
    e.preventDefault()
    if (!form.name || !form.phone || !form.eventType) return

    setStatus('sending')

    try {
      const res = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('Failed')
      setStatus('success')
      setForm({ name: '', phone: '', eventType: '', guests: '', eventDate: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (err) {
      console.error('Send error:', err)
      setStatus('error')
      setTimeout(() => setStatus('idle'), 4000)
    }
  }

  return (
    <div className="inquiry-card">
      <div className="inquiry-header">
        <h3>QUICK INQUIRY</h3>
      </div>
      {status === 'success' ? (
        <div className="inquiry-success">
          <div className="success-icon">✓</div>
          <p>Thank you! Your inquiry has been sent successfully. We will contact you shortly.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="inquiry-form">
          <div className="inq-field">
            <FiUser className="inq-icon" />
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inq-field">
            <FiPhone className="inq-icon" />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="inq-field select-wrap">
            <FiCalendar className="inq-icon" />
            <select name="eventType" value={form.eventType} onChange={handleChange} required>
              <option value="" disabled>Event Type</option>
              <option>Wedding Catering</option>
              <option>Engagement / Roka</option>
              <option>Corporate Event</option>
              <option>Birthday Party</option>
              <option>Kitty Party</option>
              <option>House Party</option>
              <option>School / College Event</option>
              <option>Exhibition / Trade Show</option>
              <option>Other</option>
            </select>
            <FiChevronDown className="select-arrow" />
          </div>
          <div className="inq-field">
            <FiUsers className="inq-icon" />
            <input
              type="number"
              name="guests"
              placeholder="Guest Count"
              value={form.guests}
              onChange={handleChange}
              min="1"
            />
          </div>
          <div className="inq-field">
            <FiCalendar className="inq-icon" />
            <input
              type="date"
              name="eventDate"
              placeholder="Event Date"
              value={form.eventDate}
              onChange={handleChange}
            />
          </div>

          {status === 'error' && (
            <p className="inq-error">Something went wrong. Please try again or call us directly.</p>
          )}

          <button type="submit" className="btn-primary inq-submit" disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending...' : 'Submit Inquiry'}
          </button>
        </form>
      )}
    </div>
  )
}
