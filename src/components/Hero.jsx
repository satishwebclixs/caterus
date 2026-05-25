import QuickInquiry from './QuickInquiry'
import './Hero.css'

const serviceIcons = [
  { icon: '💍', label: 'Wedding\nCatering' },
  { icon: '🏢', label: 'Corporate\nCatering' },
  { icon: '🍲', label: 'Live\nCounters' },
  { icon: '🥂', label: 'Luxury Buffet\nSetup' },
  { icon: '📋', label: 'Customized\nMenus' },
]

export default function Hero() {
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
            <button className="btn-primary">Get Free Quote</button>
            <button className="btn-outline-white">Book Catering</button>
            <button className="btn-outline-white">Explore Menu</button>
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
          <div className="qr-card">
            <div className="qr-card-title">SCAN FOR<br />MENU PDF</div>
            <div className="qr-code-wrap">
              <svg width="90" height="90" viewBox="0 0 56 56" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="2" stroke="#0d9488" strokeWidth="2"/>
                <rect x="8" y="8" width="8" height="8" fill="#0d9488"/>
                <rect x="34" y="2" width="20" height="20" rx="2" stroke="#0d9488" strokeWidth="2"/>
                <rect x="40" y="8" width="8" height="8" fill="#0d9488"/>
                <rect x="2" y="34" width="20" height="20" rx="2" stroke="#0d9488" strokeWidth="2"/>
                <rect x="8" y="40" width="8" height="8" fill="#0d9488"/>
                <rect x="34" y="34" width="5" height="5" fill="#0d9488"/>
                <rect x="42" y="34" width="5" height="5" fill="#0d9488"/>
                <rect x="34" y="42" width="5" height="5" fill="#0d9488"/>
                <rect x="47" y="47" width="7" height="7" fill="#0d9488"/>
                <rect x="23" y="23" width="3" height="3" fill="#0d9488"/>
                <rect x="28" y="23" width="3" height="3" fill="#0d9488"/>
                <rect x="23" y="28" width="3" height="3" fill="#0d9488"/>
              </svg>
            </div>
            <div className="qr-card-desc">Scan to view our complete menu</div>
          </div>

          {/* Card 2 — WhatsApp */}
          <div className="qr-card">
            <div className="qr-card-title">CHAT ON<br />WHATSAPP</div>
            <div className="qr-code-wrap">
              <svg width="90" height="90" viewBox="0 0 56 56" fill="none">
                <rect x="2" y="2" width="20" height="20" rx="2" stroke="#0d9488" strokeWidth="2"/>
                <rect x="8" y="8" width="8" height="8" fill="#0d9488"/>
                <rect x="34" y="2" width="20" height="20" rx="2" stroke="#0d9488" strokeWidth="2"/>
                <rect x="40" y="8" width="8" height="8" fill="#0d9488"/>
                <rect x="2" y="34" width="20" height="20" rx="2" stroke="#0d9488" strokeWidth="2"/>
                <rect x="8" y="40" width="8" height="8" fill="#0d9488"/>
                <rect x="34" y="34" width="5" height="5" fill="#0d9488"/>
                <rect x="47" y="34" width="7" height="7" fill="#0d9488"/>
                <rect x="34" y="47" width="7" height="7" fill="#0d9488"/>
                <rect x="44" y="44" width="10" height="10" fill="#0d9488"/>
                <rect x="23" y="23" width="3" height="3" fill="#0d9488"/>
                <rect x="28" y="28" width="3" height="3" fill="#0d9488"/>
                <rect x="23" y="33" width="3" height="3" fill="#0d9488"/>
              </svg>
            </div>
            <div className="qr-card-desc">Scan to start a chat with us</div>
          </div>

        </div>

      </div>
    </section>
  )
}
