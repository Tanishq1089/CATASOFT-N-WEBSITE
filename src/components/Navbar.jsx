import { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navLinks = [
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/training', label: 'Training' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true))
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 bg-white transition-all duration-300 fade-down ${
        visible ? 'visible' : ''
      } ${scrolled ? 'border-b border-border-color shadow-sm' : ''}`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/catasoft-logo.png" alt="Catasoft Solutions" className="h-9" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `font-inter text-[15px] font-medium transition-colors duration-200 ${
                  isActive ? 'text-primary' : 'text-text-secondary hover:text-primary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* CTA + Hamburger */}
        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="hidden md:inline-flex rotating-border-btn rotating-border-btn-filled items-center px-[26px] py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-hover transition-colors duration-200"
          >
            Get a Quote
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-[5px] p-2"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-5 h-[2px] bg-text-primary transition-all duration-300 ${
                menuOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-text-primary transition-all duration-300 ${
                menuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-5 h-[2px] bg-text-primary transition-all duration-300 ${
                menuOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-white ${
          menuOpen ? 'max-h-80 border-b border-border-color' : 'max-h-0'
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `font-inter text-[15px] font-medium ${
                  isActive ? 'text-primary' : 'text-text-secondary'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={() => setMenuOpen(false)}
            className="inline-flex items-center justify-center px-[26px] py-3 rounded-full bg-primary text-white text-sm font-semibold"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  )
}
