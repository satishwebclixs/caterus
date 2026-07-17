import './Footer.css'
import { FiPhone, FiMail, FiMapPin, FiInstagram, FiFacebook, FiYoutube } from 'react-icons/fi'

const quickLinks = [
  { label: 'Home',       href: '/' },
  { label: 'Services',   href: '/#services' },
  { label: 'Menu',       href: '/#menu' },
  { label: 'Gallery',    href: '/#gallery' },
  { label: 'About Us',   href: '/#about' },
  { label: 'FAQ',        href: '/#faq' },
  { label: 'Contact Us', href: '/#contact-us' },
]

export default function Footer() {
  return (
    <footer className="footer" id="contact-us">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="footer-logo">
            <img
              src="/logo.png"
              alt="CaterUs by Honey & Dough"
              className="footer-logo-img"
              width="475"
              height="119"
              loading="lazy"
              decoding="async"
            />
          </div>
          <p className="footer-brand-desc">
            Crafting unforgettable culinary experiences for every occasion with passion and premium quality.
          </p>
        </div>

        <div className="footer-col">
          <h4>QUICK LINKS</h4>
          <ul>
            {quickLinks.map(l => (
              <li key={l.label}>
                <a href={l.href}>{l.label}</a>
              </li>
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
              <span>Lot No. 167, Basement Floor, Patparganj Industrial Area, Delhi 110092</span>
            </li>
            <li>
              <FiPhone />
              <a href="tel:+919311729700">+91 93117 29700</a>
            </li>
            <li>
              <FiMail />
              <a href="mailto:caterus@honeyanddough.in">caterus@honeyanddough.in</a>
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
          <p>
            © {new Date().getFullYear()} CaterUs | All rights reserved | Designed by{' '}
            <a href="https://webclixs.com/" target="_blank" rel="noopener noreferrer">WebClixs</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
