import { useState } from 'react'
import { FiPhone, FiMenu, FiX } from 'react-icons/fi'
import './Header.css'

const navLinks = ['Home', 'Services', 'Events', 'Menu', 'Gallery', 'About Us', 'FAQ', 'Contact']

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner container">
        <a href="#" className="logo">
          <span className="logo-icon">🍽️</span>
          <div>
            <div className="logo-name">CaterUs</div>
            <div className="logo-tagline">EXCEPTIONAL TASTE, FLAWLESS SERVICE</div>
          </div>
        </a>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          {navLinks.map(link => (
            <a key={link} href={`#${link.toLowerCase().replace(' ', '-')}`} className="nav-link">
              {link}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="tel:+919876543210" className="btn-call">
            <FiPhone size={15} />
            Call Now
          </a>
          <a href="#contact" className="btn-primary">Get Quote</a>
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)}>
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}
