import React, { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiPlay, FiPause } from 'react-icons/fi'
import { usePlayer } from '../context/PlayerContext.jsx'
import './ThreeChannelPlayer.css'

const CHANNEL_LOGOS = {
  'prayer-fm': '/logo_prayer.png',
  'music-fm': '/logo_music.png',
  'praise-fm': '/logo_praise.png',
}

const CHANNEL_THEMES = {
  'prayer-fm': { 
    color: '#f5b942', 
    glow: 'rgba(245, 185, 66, 0.2)', 
    freq: '90.5 FM', 
    tagline: 'Bringing Light into Your Night',
    isAntenna: true 
  },
  'music-fm': { 
    color: '#a855f7', 
    glow: 'rgba(168, 85, 247, 0.2)', 
    freq: '92.7 FM', 
    tagline: 'Uplifting grace and gospel hymns.',
    isAntenna: false 
  },
  'praise-fm': { 
    color: '#3b82f6', 
    glow: 'rgba(59, 130, 246, 0.2)', 
    freq: '93.5 FM', 
    tagline: 'Exalting hope and faith together.',
    isAntenna: false 
  },
}

export default function ThreeChannelPlayer() {
  const { 
    channels, 
    activeChannel, 
    isPlaying, 
    togglePlay, 
    selectChannel 
  } = usePlayer()

  const handleChannelClick = (channelId) => {
    selectChannel(channelId)
  }

  const activeTheme = CHANNEL_THEMES[activeChannel.id] || CHANNEL_THEMES['prayer-fm']
  const activeLogo = CHANNEL_LOGOS[activeChannel.id] || '/logo_prayer.png'
  const inactiveChannels = channels.filter(c => c.id !== activeChannel.id)

  const eqBarsActive = Array.from({ length: 32 }, (_, i) => i + 1)
  const eqBarsInactive = Array.from({ length: 24 }, (_, i) => i + 1)

  return (
    <div className="split-deck-section">
      <div className="split-layout-container">
        
        {/* LEFT: Active Player Card */}
        <div 
          className="split-active-card"
          style={{
            borderColor: activeTheme.color,
            boxShadow: `0 16px 45px rgba(0, 0, 0, 0.75), 0 0 30px ${activeTheme.glow}`
          }}
        >
          <div className="glass-glare" aria-hidden="true" />
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeChannel.id}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 12 }}
              transition={{ duration: 0.25 }}
              className="active-inner-motion"
            >
              <div className="active-top-content">
                {/* Left inside card: Circular Logo */}
                <div className="active-visual-column">
                  <div className="active-logo-circle">
                    <img src={activeLogo} alt={activeChannel.name} className="active-avatar-img" />
                  </div>
                </div>

                {/* Center inside card: Details */}
                <div className="active-details-column">
                  <div className="active-title-row">
                    <h3 className="active-station-title">{activeChannel.name}</h3>
                    <div className="live-pill-badge">LIVE</div>
                  </div>
                  <div className="active-freq-digits" style={{ color: activeTheme.color }}>
                    {activeTheme.freq.split(' ')[0]}
                    <span className="active-freq-unit"> FM</span>
                  </div>
                  <p className="active-desc-text">
                    {activeChannel.description}
                  </p>
                </div>

                {/* Right inside card: Play/Pause Button */}
                <div className="active-play-column">
                  <button 
                    onClick={togglePlay} 
                    className="active-circle-toggle"
                    style={{ borderColor: activeTheme.color, color: activeTheme.color }}
                    aria-label={isPlaying ? 'Pause' : 'Play'}
                  >
                    {isPlaying ? <FiPause /> : <FiPlay className="active-play-offset" />}
                  </button>
                </div>
              </div>

              {/* Bottom Equalizer visualizer */}
              <div className="active-wave-container">
                {eqBarsActive.map((bar) => (
                  <div 
                    key={bar} 
                    className={`active-eq-bar bar-${bar} ${isPlaying ? 'pulsing' : ''}`}
                    style={{
                      animationDelay: `${(bar % 6) * 0.1}s`,
                      height: isPlaying ? undefined : `${2 + (bar % 4) * 4}px`,
                      backgroundColor: activeTheme.color,
                      boxShadow: isPlaying ? `0 0 6px ${activeTheme.color}` : 'none'
                    }}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* RIGHT: Stacked Inactive Cards */}
        <div className="split-inactive-column">
          <AnimatePresence mode="popLayout">
            {inactiveChannels.map((chan) => {
              const logo = CHANNEL_LOGOS[chan.id] || '/logo_prayer.png'
              const theme = CHANNEL_THEMES[chan.id] || CHANNEL_THEMES['prayer-fm']

              return (
                <motion.div 
                  key={chan.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="inactive-deck-item"
                  style={{
                    borderColor: theme.color,
                    boxShadow: `0 6px 20px rgba(0, 0, 0, 0.35)`
                  }}
                  onClick={() => handleChannelClick(chan.id)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                >
                  <div className="glass-glare" aria-hidden="true" />
                  
                  <div className="inactive-main-row">
                    {/* Left: circular logo */}
                    <img src={logo} alt={chan.name} className="inactive-logo-avatar" />

                    {/* Middle: Details */}
                    <div className="inactive-meta-block">
                      <div className="inactive-title-row">
                        <span className="inactive-name">{chan.name}</span>
                        <div className="live-pill-badge">LIVE</div>
                      </div>
                      <div className="inactive-freq-digits" style={{ color: theme.color }}>
                        {theme.freq.split(' ')[0]}
                        <span className="inactive-freq-unit"> FM</span>
                      </div>
                      <span className="inactive-live-tag">LIVE • CHRISTIAN RADIO</span>
                    </div>

                    {/* Right: circular Play button */}
                    <div 
                      className="inactive-play-trigger"
                      style={{ borderColor: theme.color, color: theme.color }}
                    >
                      <FiPlay className="mini-play-offset" />
                    </div>
                  </div>

                  {/* Bottom: static color-coded equalizer */}
                  <div className="inactive-wave-container">
                    {eqBarsInactive.map((bar) => (
                      <div 
                        key={bar} 
                        className="inactive-eq-bar"
                        style={{
                          height: `${2 + (bar % 3) * 3}px`,
                          backgroundColor: theme.color,
                          opacity: 0.4
                        }}
                      />
                    ))}
                  </div>

                </motion.div>
              )
            })}
          </AnimatePresence>
        </div>

      </div>
    </div>
  )
}
