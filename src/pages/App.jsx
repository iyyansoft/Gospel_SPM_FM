import React from 'react'
import { motion } from 'framer-motion'
import { SiAndroid } from 'react-icons/si'
import { FiRadio, FiVolume2, FiBookOpen, FiZap, FiCheckCircle } from 'react-icons/fi'
import TiltCard from '../components/TiltCard.jsx'
import './App.css'

export default function AppPage() {
  const features = [
    {
      icon: FiRadio,
      title: '3 HD Live Radio Channels',
      desc: 'Stream Gospellive, BIBLE, and Gospeltv 24/7 with crystal-clear audio quality.',
    },
    {
      icon: FiVolume2,
      title: 'Background Audio Playback',
      desc: 'Listen seamlessly while driving, exercising, working, or using other apps.',
    },
    {
      icon: FiBookOpen,
      title: 'Daily Scripture & Verses',
      desc: 'Access daily scripture readings in Tamil & English with high-contrast text.',
    },
    {
      icon: FiZap,
      title: 'Lightweight & Zero Ads',
      desc: 'Instant streaming with minimal battery and data consumption. 100% Free forever.',
    },
  ]

  return (
    <section className="shell-inner page-hero app-page-container">
      <span className="eyebrow" style={{ marginBottom: 14 }}>
        Mobile App
      </span>
      <h1 className="app-page-heading">SPM GOSPEL FM, IN YOUR POCKET.</h1>
      
      <p className="app-page-intro">
        Take your spiritual sanctuary with you wherever you go. Stream live gospel radio, read daily scripture readings, and stay connected with our worldwide Christian family.
      </p>

      {/* Main 2-Column Hero Showcase Grid */}
      <div className="app-showcase-grid">
        {/* Left Side: Features List & Stats */}
        <div className="app-features-column">
          <div className="app-features-grid">
            {features.map((feat, idx) => {
              const IconComp = feat.icon
              return (
                <motion.div
                  key={idx}
                  className="app-feature-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                >
                  <div className="app-feature-icon-box">
                    <IconComp />
                  </div>
                  <div className="app-feature-info">
                    <h3 className="app-feature-title">{feat.title}</h3>
                    <p className="app-feature-desc">{feat.desc}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>

          <div className="app-stats-row">
            <div className="app-stat-item">
              <span className="app-stat-val">4.9 ★</span>
              <span className="app-stat-lbl">User Rating</span>
            </div>
            <div className="app-stat-divider" />
            <div className="app-stat-item">
              <span className="app-stat-val">10,000+</span>
              <span className="app-stat-lbl">Active Listeners</span>
            </div>
            <div className="app-stat-divider" />
            <div className="app-stat-item">
              <span className="app-stat-val">100% Free</span>
              <span className="app-stat-lbl">No Ads Always</span>
            </div>
          </div>
        </div>

        {/* Right Side: Interactive Phone Mockup & Download Card */}
        <motion.div
          className="app-mockup-column"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <TiltCard className="app-download-hero-card">
            <div className="app-phone-stage">
              <div className="app-phone-frame">
                <div className="app-phone-speaker" />
                <div className="app-phone-screen">
                  <img src="/phone_app_screen.jpg" alt="SPM Gospel FM Mobile App" className="app-screen-img" />
                </div>
              </div>
            </div>

            <div className="app-download-actions">
              <h3 className="app-card-title">Download Official App</h3>
              <p className="app-card-sub">Available now for Android devices. Fast APK download.</p>

              <a
                href="#"
                className="btn btn-primary app-main-btn"
                onClick={(e) => e.preventDefault()}
              >
                <SiAndroid className="btn-icon-lg" />
                <span className="app-btn-text">
                  <strong>Download Android App</strong>
                  <small>Direct APK • v2.4 (14 MB)</small>
                </span>
              </a>

              <div className="app-badges-list">
                <span className="badge-pill"><FiCheckCircle /> Android 7.0+</span>
                <span className="badge-pill"><FiCheckCircle /> Auto-reconnect</span>
                <span className="badge-pill"><FiCheckCircle /> Low Data</span>
              </div>
            </div>
          </TiltCard>
        </motion.div>
      </div>
    </section>
  )
}
