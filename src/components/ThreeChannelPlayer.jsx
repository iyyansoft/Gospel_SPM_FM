import React, { useEffect, useState } from 'react'
import { motion, LayoutGroup } from 'framer-motion'
import { FiPlay, FiPause } from 'react-icons/fi'
import { usePlayer } from '../context/PlayerContext.jsx'
import './ThreeChannelPlayer.css'

import TiltCard from './TiltCard.jsx'

import logoPrayer from '../assets/logo_prayer.png'
import logoMusic from '../assets/logo_music.png'
import logoPraise from '../assets/logo_praise.png'

const CHANNEL_LOGOS = {
  'prayer-fm': logoPrayer,
  'music-fm': logoMusic,
  'praise-fm': logoPraise,
}

const CHANNEL_THEMES = {
  'prayer-fm': { 
    color: '#f5b942', 
    glow: 'rgba(245, 185, 66, 0.25)', 
    freq: '90.5 FM', 
    tagline: 'Bringing Light into Your Night',
    logoBg: 'transparent',
  },
  'music-fm': { 
    color: '#a855f7', 
    glow: 'rgba(168, 85, 247, 0.25)', 
    freq: '92.7 FM', 
    tagline: 'Uplifting grace and gospel hymns.',
    logoBg: 'transparent',
  },
  'praise-fm': { 
    color: '#3b82f6', 
    glow: 'rgba(59, 130, 246, 0.25)', 
    freq: '93.5 FM', 
    tagline: 'Exalting hope and faith together.',
    logoBg: 'transparent',
  },
}

const ALL_STATION_IDS = ['prayer-fm', 'music-fm', 'praise-fm']

function swapSlots(prevSlots, targetId) {
  if (!prevSlots || prevSlots.length !== 3 || new Set(prevSlots).size !== 3) {
    prevSlots = [...ALL_STATION_IDS]
  }
  const targetIdx = prevSlots.indexOf(targetId)
  if (targetIdx <= 0) return prevSlots

  const prevMain = prevSlots[0]
  const next = [...prevSlots]
  next[0] = targetId
  next[targetIdx] = prevMain
  return next
}

export default function ThreeChannelPlayer() {
  const { 
    channels, 
    currentChannel, 
    isPlaying, 
    togglePlay, 
    selectChannel 
  } = usePlayer()

  // Explicit slot order: [MainLeftId, TopRightId, BottomRightId]
  const [slotOrder, setSlotOrder] = useState(['prayer-fm', 'music-fm', 'praise-fm'])

  // Sync slotOrder if currentChannel changes externally (e.g. from navbar or live page)
  useEffect(() => {
    if (currentChannel && slotOrder[0] !== currentChannel) {
      setSlotOrder((prev) => swapSlots(prev, currentChannel))
    }
  }, [currentChannel])

  const handleCardClick = (channelId, isMain) => {
    if (isMain) {
      togglePlay()
      return
    }

    setSlotOrder((prev) => swapSlots(prev, channelId))
    selectChannel(channelId)
  }

  // Ensure activeChannelId and rightSlotChannelIds are strictly unique
  const activeChannelId = slotOrder[0]
  const rightSlotChannelIds = slotOrder.slice(1)

  const eqBarsActive = Array.from({ length: 28 }, (_, i) => i + 1)
  const eqBarsInactive = Array.from({ length: 14 }, (_, i) => i + 1)

  return (
    <LayoutGroup>
      <div className="split-deck-section">
        <div className="split-layout-container">
          
          {/* LEFT SLOT: Main Active Station */}
          {(() => {
            const chan = channels.find((c) => c.id === activeChannelId) || channels[0]
            const logo = chan.logo || CHANNEL_LOGOS[chan.id] || logoPrayer
            const theme = CHANNEL_THEMES[chan.id] || CHANNEL_THEMES['prayer-fm']

            return (
              <motion.div
                key={chan.id}
                layoutId={`station-card-${chan.id}`}
                transition={{ type: 'spring', stiffness: 220, damping: 26, mass: 0.85 }}
                style={{ flex: 1.5 }}
              >
                <TiltCard 
                  className="split-active-card"
                  style={{
                    borderColor: theme.color,
                    boxShadow: `0 16px 45px rgba(0, 0, 0, 0.75), 0 0 32px ${theme.glow}`
                  }}
                >
                  <div className="glass-glare" aria-hidden="true" />
                  
                  <div className="active-inner-motion">
                    <div className="active-top-content">
                      {/* Left inside card: Circular Logo */}
                      <div className="active-visual-column">
                        <div className="active-logo-circle" style={{ background: theme.logoBg || '#080a14', borderColor: theme.color }}>
                          <img src={logo} alt={chan.name} className="active-avatar-img" />
                        </div>
                      </div>

                      {/* Center inside card: Details */}
                      <div className="active-details-column">
                        <div className="active-title-row">
                          <h3 className="active-station-title">
                            {chan.name}
                          </h3>
                          <div className="live-pill-badge">LIVE</div>
                        </div>
                        <div className="active-freq-digits" style={{ color: theme.color }}>
                          {theme.freq.split(' ')[0]}
                          <span className="active-freq-unit"> FM</span>
                        </div>
                        <p className="active-desc-text">
                          {chan.description}
                        </p>
                      </div>

                      {/* Right inside card: Play/Pause Button */}
                      <div className="active-play-column">
                        <button 
                          onClick={togglePlay} 
                          className="active-circle-toggle"
                          style={{ borderColor: theme.color, color: theme.color }}
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
                            backgroundColor: theme.color,
                            boxShadow: isPlaying ? `0 0 6px ${theme.color}` : 'none'
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            )
          })()}

          {/* RIGHT SLOTS: Stacked Inactive Stations */}
          <div className="split-inactive-column">
            {rightSlotChannelIds.map((chanId) => {
              const chan = channels.find((c) => c.id === chanId) || channels[1]
              const logo = chan.logo || CHANNEL_LOGOS[chan.id] || logoPrayer
              const theme = CHANNEL_THEMES[chan.id] || CHANNEL_THEMES['prayer-fm']

              return (
                <motion.div 
                  key={chan.id}
                  layoutId={`station-card-${chan.id}`}
                  transition={{ type: 'spring', stiffness: 220, damping: 26, mass: 0.85 }}
                  className="inactive-deck-item"
                  style={{
                    borderColor: theme.color,
                    boxShadow: `0 6px 20px rgba(0, 0, 0, 0.35)`
                  }}
                  onClick={() => handleCardClick(chan.id, false)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="glass-glare" aria-hidden="true" />
                  
                  <div className="inactive-main-row">
                    {/* Left: circular logo */}
                    <div className="inactive-logo-avatar-wrapper" style={{ background: theme.logoBg || '#080a14' }}>
                      <img src={logo} alt={chan.name} className="inactive-logo-avatar" />
                    </div>

                    {/* Middle: Details */}
                    <div className="inactive-meta-block">
                      <div className="inactive-title-row">
                        <span className="inactive-name">
                          {chan.name}
                        </span>
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
          </div>

        </div>
      </div>
    </LayoutGroup>
  )
}
