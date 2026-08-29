import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineMenu, HiX } from 'react-icons/hi'
import { FiRadio } from 'react-icons/fi'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/channels', label: 'Channels' },
  { to: '/tv', label: 'TV' },
  { to: '/app', label: 'MobileApp' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="shell-inner navbar-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-icon-wrapper">
            <svg viewBox="0 0 100 100" className="brand-logo-svg" width="38" height="38">
              <circle cx="50" cy="50" r="42" stroke="url(#goldGradient)" strokeWidth="2.5" fill="none" />
              <line x1="50" y1="20" x2="50" y2="80" stroke="url(#goldGradient)" strokeWidth="4.5" strokeLinecap="round" />
              <line x1="32" y1="40" x2="68" y2="40" stroke="url(#goldGradient)" strokeWidth="4.5" strokeLinecap="round" />
              <path d="M40 30 A 15 15 0 0 0 40 50" stroke="url(#goldGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M32 22 A 25 25 0 0 0 32 58" stroke="url(#goldGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M60 30 A 15 15 0 0 1 60 50" stroke="url(#goldGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <path d="M68 22 A 25 25 0 0 1 68 58" stroke="url(#goldGradient)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              <defs>
                <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#fff2a3" />
                  <stop offset="70%" stopColor="#f5b942" />
                  <stop offset="100%" stopColor="#c28613" />
                </linearGradient>
              </defs>
            </svg>
          </span>
          <span className="brand-text">
            <span className="brand-name">GOSPEL RADIO</span>
            <span className="brand-tagline">Bringing Light into Your Night</span>
          </span>
        </NavLink>

        <nav className={`nav-links ${open ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="navbar-actions">
          <NavLink to="/live" className="btn btn-outline btn-small listen-live-btn">
            <FiRadio /> Listen Live
          </NavLink>
          <button
            className="menu-toggle"
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <HiX /> : <HiOutlineMenu />}
          </button>
        </div>
      </div>
    </header>
  )
}
