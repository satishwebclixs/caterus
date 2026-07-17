import QuickInquiry from './QuickInquiry'
import './Hero.css'

const MENU_LINK = 'https://drive.google.com/drive/folders/1B16fSR8fSrhfgIk0HWGlFV3_K4lk0ln5'
const WHATSAPP_LINK = 'https://wa.me/919311729700'

const serviceIcons = [
  { icon: '💍', label: 'Wedding\nCatering' },
  { icon: '🏢', label: 'Corporate\nCatering' },
  { icon: '🍲', label: 'Live\nCounters' },
  { icon: '🥂', label: 'Luxury Buffet\nSetup' },
  { icon: '📋', label: 'Customized\nMenus' },
]

export default function Hero({ onOpenModal }) {
  return (
    <section className="hero" id="home">
      <div className="hero-overlay" />
      <div className="hero-inner container">

        {/* LEFT — headline, desc, btns, icons */}
        <div className="hero-left">
          <h1 className="hero-title">
            Premium Catering<br />Services For<br />
            <span className="hero-teal">Every Celebration</span>
          </h1>
          <p className="hero-desc">
            Luxury catering solutions for weddings, engagements,<br />
            corporate events, exhibitions, birthdays, house parties &amp;<br />
            live food experiences.
          </p>
          <div className="hero-btns">
            <button className="btn-primary" onClick={onOpenModal}>Get Free Quote</button>
            <a href="tel:+919311729700" className="btn-outline-white">Book Catering</a>
            <a
              href={MENU_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white"
            >
              Explore Menu
            </a>
          </div>
          <div className="hero-services">
            {serviceIcons.map(s => (
              <div key={s.label} className="service-icon-item">
                <div className="service-icon-circle">{s.icon}</div>
                <span>{s.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE — Quick Inquiry form */}
        <div className="hero-form">
          <QuickInquiry />
        </div>

        {/* RIGHT — QR cards stacked vertically */}
        <div className="hero-qr">

          {/* Card 1 — Menu PDF */}
          <a href={MENU_LINK} target="_blank" rel="noopener noreferrer" className="qr-card">
            <div className="qr-card-title">SCAN FOR<br />MENU PDF</div>
            <div className="qr-code-wrap">
              <img src="/menu-qr.png" alt="Scan for Menu PDF" width="90" height="90" decoding="async" />
            </div>
            <div className="qr-card-desc">Scan to view our complete menu</div>
          </a>

          {/* Card 2 — WhatsApp */}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="qr-card">
            <div className="qr-card-title">CHAT ON<br />WHATSAPP</div>
            <div className="qr-code-wrap">
              <img src="/chat on whatsapp.jpeg" alt="Chat on WhatsApp" width="90" height="90" decoding="async" />
            </div>
            <div className="qr-card-desc">Scan to start a chat with us</div>
          </a>

        </div>

      </div>
    </section>
  )
}
