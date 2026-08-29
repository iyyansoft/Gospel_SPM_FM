import React from 'react'
import { FaFacebookF, FaYoutube, FaInstagram, FaXTwitter, FaWhatsapp } from 'react-icons/fa6'
import { socialLinks } from '../data/channels.js'
import './SocialConnect.css'

const ICONS = {
  facebook: FaFacebookF,
  youtube: FaYoutube,
  instagram: FaInstagram,
  twitter: FaXTwitter,
  whatsapp: FaWhatsapp,
}

export default function SocialConnect() {
  return (
    <div className="panel social-card">
      <span className="eyebrow">Connect With Us</span>
      <div className="social-icons">
        {socialLinks.map((link) => {
          const Icon = ICONS[link.id]
          return (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`social-icon icon-${link.id}`}
            >
              <Icon />
            </a>
          )
        })}
      </div>
      <div className="eq" aria-hidden="true">
        {Array.from({ length: 22 }).map((_, i) => (
          <span key={i} style={{ '--i': i }} />
        ))}
      </div>
    </div>
  )
}
