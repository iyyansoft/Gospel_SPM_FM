import React from 'react'
import { motion } from 'framer-motion'
import { FiUser, FiMapPin, FiPhone, FiMail } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa6'
import SocialConnect from '../components/SocialConnect.jsx'
import TiltCard from '../components/TiltCard.jsx'
import './Contact.css'

export default function Contact() {
  return (
    <section className="shell-inner page-hero contact-container">
      <span className="eyebrow" style={{ marginBottom: 14 }}>
        Contact Us
      </span>
      <h1 className="contact-hero-heading">LET&rsquo;S STAY CONNECTED.</h1>
      <p className="contact-hero-subtitle">
        Reach out to SPM Gospel FM for prayer requests, worship inquiries, or to connect with our ministry team.
      </p>

      <div className="contact-showcase-grid">
        {/* Left Column: Official Contact & Address Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <TiltCard className="contact-info-card">
            <div className="contact-info-header">
              <h2 className="contact-card-title">Ministry Contact Details</h2>
              <p className="contact-card-sub">Official address and helpline numbers for SPM Gospel FM</p>
            </div>

            <div className="contact-details-list">
              {/* Name Item */}
              <div className="contact-item">
                <div className="contact-icon-box">
                  <FiUser />
                </div>
                <div className="contact-text-content">
                  <span className="contact-item-label">Contact Person</span>
                  <span className="contact-item-val" style={{ fontSize: 18, color: '#f5b942' }}>
                    BRO Ebenezer Daniel
                  </span>
                </div>
              </div>

              {/* Address Item */}
              <div className="contact-item">
                <div className="contact-icon-box">
                  <FiMapPin />
                </div>
                <div className="contact-text-content">
                  <span className="contact-item-label">Ministry Address</span>
                  <div className="contact-address-lines">
                    <strong>88/42 Brindavan Nagar</strong><br />
                    5th Street, Ernavoor,<br />
                    Chennai - 600057,<br />
                    Tamil Nadu, India.
                  </div>
                </div>
              </div>

              {/* Phone Numbers Item */}
              <div className="contact-item">
                <div className="contact-icon-box">
                  <FiPhone />
                </div>
                <div className="contact-text-content">
                  <span className="contact-item-label">Phone & Helpline Numbers</span>
                  <div className="contact-phone-group">
                    <a href="tel:+919840857022" className="contact-phone-link">
                      <FiPhone style={{ color: '#f5b942' }} />
                      +91 98408 57022
                      <span className="contact-wa-badge"><FaWhatsapp /> WhatsApp</span>
                    </a>

                    <a href="tel:+919840137167" className="contact-phone-link">
                      <FiPhone style={{ color: '#f5b942' }} />
                      +91 98401 37167
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Right Column: Social Media Links Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          className="contact-social-column"
        >
          <div className="contact-connect-box">
            <SocialConnect />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
