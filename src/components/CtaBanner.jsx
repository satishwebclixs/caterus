import './CtaBanner.css'
import { FiMessageCircle, FiPhone } from 'react-icons/fi'

export default function CtaBanner({ onOpenModal }) {
  return (
    <section className="cta-banner" id="contact">
      <img
        className="cta-bg"
        src="/pp3.webp"
        alt=""
        width="1672"
        height="941"
        loading="lazy"
        decoding="async"
        aria-hidden="true"
      />
      <div className="container cta-content">
        <h2>Let&apos;s Make Your Event Extraordinary</h2>
        <p>
          Book premium catering services with CaterUs and<br />
          give your guests an unforgettable dining experience.
        </p>
        <div className="cta-btns">
          <button className="btn-primary" onClick={onOpenModal}>Get Free Quote</button>
          <a href="https://wa.me/919311729700" className="btn-whatsapp">
            <FiMessageCircle />
            WhatsApp Now
          </a>
          <a href="tel:+919311729700" className="btn-call-white">
            <FiPhone />
            Call Our Team
          </a>
        </div>
      </div>
    </section>
  )
}
