import './Footer.css'
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'

export default function Footer() {
  return (
    <footer className="footer" id="contact-us">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <span>🍽️</span>
            <div>
              <div className="footer-logo-name">CaterUs</div>
              <div className="footer-logo-tag">EXCEPTIONAL TASTE, FLAWLESS SERVICE</div>
            </div>
          </div>
          <p className="footer-brand-desc">
            Crafting unforgettable culinary experiences for every occasion with passion and premium quality.
          </p>
        </div>

        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            {['Home', 'Services', 'Events', 'Menu', 'Gallery', 'About Us', 'FAQ', 'Contact Us'].map(l => (
              <li key={l}><a href={`#${l.toLowerCase().replace(' ', '-')}`}>{l}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>OUR SERVICES</h4>
          <ul>
            {['Big Event Catering', 'Formal Event Catering', 'Special Event Catering', 'Live Catering Experience', 'Premium Buffet Setup'].map(s => (
              <li key={s}><a href="#services">{s}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer-col">
          <h4>CONTACT US</h4>
          <ul className="footer-contact">
            <li>
              <FiMapPin />
              <span>123, Culinary Street, Gurugram, Haryana 122001</span>
            </li>
            <li>
              <FiPhone />
              <a href="tel:+919311729700">+91 93117 29700</a>
            </li>
            <li>
              <FiMail />
              <a href="mailto:Caterus@honeyanddough.in">Caterus@honeyanddough.in</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>WE SERVE</h4>
          <p className="footer-serve">Serving: Delhi, Gurugram, Noida & Delhi NCR</p>
          <h4 style={{ marginTop: 20 }}>FOLLOW US</h4>
          <div className="footer-socials">
            <a href="#" aria-label="Instagram"><FiInstagram /></a>
            <a href="#" aria-label="Facebook"><FiFacebook /></a>
            <a href="#" aria-label="YouTube"><FiYoutube /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>© {new Date().getFullYear()} CaterUs. All rights reserved. | Crafted with ❤️ for every celebration.</p>
        </div>
      </div>
    </footer>
  )
}
