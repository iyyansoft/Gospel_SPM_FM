import React from 'react'
import { motion } from 'framer-motion'
import { FiUser, FiMapPin, FiPhone, FiChevronRight } from 'react-icons/fi'
import { FaFacebookF, FaYoutube, FaInstagram, FaXTwitter, FaWhatsapp } from 'react-icons/fa6'
import { socialLinks } from '../data/channels.js'
import './Contact.css'

const SOCIAL_CONFIG = {
  facebook: { icon: FaFacebookF, className: 'social-brand-facebook' },
  youtube: { icon: FaYoutube, className: 'social-brand-youtube' },
  instagram: { icon: FaInstagram, className: 'social-brand-instagram' },
  twitter: { icon: FaXTwitter, className: 'social-brand-twitter' },
  whatsapp: { icon: FaWhatsapp, className: 'social-brand-whatsapp' },
}

export default function Contact() {
  return (
    <section className="shell-inner page-hero contact-section">
      {/* Header */}
      <div className="contact-header">
        <span className="contact-eyebrow">† Get In Touch</span>
        <h1 className="contact-main-heading">LET&rsquo;S STAY CONNECTED.</h1>
        <p className="contact-sub-text">
          Reach out to SPM Gospel FM for prayer requests, worship feedback, or ministry support.
        </p>
      </div>

      {/* Master Unified Card */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="contact-master-card"
      >
        {/* Left Side: Ministry Info */}
        <div className="contact-left-pane">
          <div>
            <h2 className="contact-pane-title">Ministry Address & Helplines</h2>
            <p className="contact-pane-sub">Official contact details for SPM Gospel FM International</p>

            <div className="contact-info-grid">
              {/* Contact Person */}
              <div className="contact-info-row">
                <div className="contact-badge-icon">
                  <FiUser />
                </div>
                <div>
                  <span className="contact-field-label">Contact Person</span>
                  <span className="contact-person-name">BRO Ebenezer Daniel</span>
                </div>
              </div>

              {/* Address */}
              <div className="contact-info-row">
                <div className="contact-badge-icon">
                  <FiMapPin />
                </div>
                <div>
                  <span className="contact-field-label">Location Address</span>
                  <div className="contact-address-text">
                    88/42 Brindavan Nagar, 5th Street,<br />
                    Ernavoor, Chennai - 600057,<br />
                    Tamil Nadu, India.
                  </div>
                </div>
              </div>

              {/* Phone Numbers */}
              <div className="contact-info-row">
                <div className="contact-badge-icon">
                  <FiPhone />
                </div>
                <div>
                  <span className="contact-field-label">Phone & Helpline Numbers</span>
                  <div className="contact-phone-chips">
                    <a href="tel:+919840857022" className="contact-phone-chip">
                      <FiPhone style={{ color: '#f5b942' }} />
                      +91 98408 57022
                    </a>

                    <a href="tel:+919840137167" className="contact-phone-chip">
                      <FiPhone style={{ color: '#f5b942' }} />
                      +91 98401 37167
                    </a>

                    <a
                      href="https://wa.me/919840857022"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="contact-phone-chip contact-wa-chip"
                    >
                      <FaWhatsapp />
                      WhatsApp Chat
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Social Media Links */}
        <div className="contact-right-pane">
          <div>
            <h2 className="contact-pane-title">Follow & Connect</h2>
            <p className="contact-pane-sub">Stay updated with live broadcasts & social channels</p>

            <div className="contact-social-list">
              {socialLinks.map((item) => {
                const cfg = SOCIAL_CONFIG[item.id] || { icon: FaFacebookF, className: '' }
                const IconComp = cfg.icon
                return (
                  <a
                    key={item.id}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="contact-social-button"
                  >
                    <div className={`social-brand-icon ${cfg.className}`}>
                      <IconComp />
                    </div>
                    <span style={{ flex: 1 }}>{item.label}</span>
                    <FiChevronRight style={{ opacity: 0.5 }} />
                  </a>
                )
              })}
            </div>
          </div>

          <div className="contact-prayer-box">
            <div className="contact-prayer-title">24/7 Prayer Request</div>
            <p className="contact-prayer-text">
              Call or message us on WhatsApp anytime for prayer & blessings.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
