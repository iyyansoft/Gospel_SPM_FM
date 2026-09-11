import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { HiOutlineMenu, HiX } from 'react-icons/hi'
import { FiRadio } from 'react-icons/fi'
import spmHeaderLogo from '../assets/spm_header_logo.png'
import './Navbar.css'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/channels', label: 'Channels' },
  { to: '/app', label: 'Mobile App' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="navbar">
      <div className="shell-inner navbar-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <img src={spmHeaderLogo} alt="SPM Gospel FM Logo" className="brand-logo-img" />
          <span className="brand-text">
            <span className="brand-name">SPM GOSPEL FM</span>
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
