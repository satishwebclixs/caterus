import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiPhone, FiMenu, FiX } from 'react-icons/fi'
import './Header.css'

const navLinks = [
  { label: 'Home',     href: '/' },
  { label: 'Services', href: '/#services' },
  { label: 'Events',   href: '/#events' },
  { label: 'Menu',     href: '/#menu' },
  { label: 'Gallery',  href: '/#gallery' },
  { label: 'About Us', href: '/#about' },
  { label: 'FAQ',      href: '/faq' },
  { label: 'Contact',  href: '/#contact' },
]

export default function Header({ onOpenModal }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner container">
        <Link to="/" className="logo">
          <span className="logo-icon">🍽️</span>
          <div>
            <div className="logo-name">CaterUs</div>
            <div className="logo-tagline">EXCEPTIONAL TASTE, FLAWLESS SERVICE</div>
          </div>
        </Link>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          {navLinks.map(link => (
            link.href.startsWith('/faq')
              ? <Link key={link.label} to={link.href} className="nav-link" onClick={() => setMenuOpen(false)}>{link.label}</Link>
              : <a key={link.label} href={link.href} className="nav-link" onClick={() => setMenuOpen(false)}>{link.label}</a>
          ))}
        </nav>

        <div className="header-actions">
          <a href="tel:+919311729700" className="btn-call">
            <FiPhone size={15} />
            Call Now
          </a>
          <button className="btn-primary" onClick={onOpenModal}>Get Quote</button>
          <button className="hamburger" onClick={() => setMenuOpen(o => !o)}>
            {menuOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </div>
    </header>
  )
}
