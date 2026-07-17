import { useEffect } from 'react'
import { FiCheck, FiHome, FiMessageCircle, FiPhone } from 'react-icons/fi'
import './ThankYouPage.css'

export default function ThankYouPage() {
  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Thank You | CaterUs'

    let robotsMeta = document.querySelector('meta[name="robots"]')
    const createdRobotsMeta = !robotsMeta
    const previousRobotsContent = robotsMeta?.getAttribute('content') ?? null

    if (!robotsMeta) {
      robotsMeta = document.createElement('meta')
      robotsMeta.setAttribute('name', 'robots')
      document.head.appendChild(robotsMeta)
    }
    robotsMeta.setAttribute('content', 'noindex, nofollow')

    return () => {
      document.title = previousTitle
      if (createdRobotsMeta) robotsMeta.remove()
      else if (previousRobotsContent === null) robotsMeta.removeAttribute('content')
      else robotsMeta.setAttribute('content', previousRobotsContent)
    }
  }, [])

  return (
    <main className="thank-you-page">
      <a className="thank-you-brand" href="/" aria-label="CaterUs home">
        <img src="/logo.png" alt="CaterUs by Honey & Dough" width="475" height="119" />
      </a>

      <section className="thank-you-card" aria-labelledby="thank-you-heading">
        <div className="thank-you-icon" aria-hidden="true">
          <FiCheck />
        </div>
        <p className="thank-you-eyebrow">Enquiry Received</p>
        <h1 id="thank-you-heading">Thank You!</h1>
        <p className="thank-you-message">
          Your catering enquiry has been submitted successfully. Our team will contact you shortly
          to discuss your event and menu requirements.
        </p>

        <div className="thank-you-actions">
          <a className="btn-primary" href="/">
            <FiHome />
            Back to Home
          </a>
          <a
            className="thank-you-whatsapp"
            href="https://wa.me/919311729700"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FiMessageCircle />
            WhatsApp Us
          </a>
          <a className="thank-you-call" href="tel:+919311729700">
            <FiPhone />
            Call Us
          </a>
        </div>
      </section>
    </main>
  )
}
