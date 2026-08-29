import React from 'react'
import { FiPlay, FiPause } from 'react-icons/fi'
import { usePlayer } from '../context/PlayerContext.jsx'
import './CompactChannelPlayer.css'

export default function CompactChannelPlayer() {
  const { isPlaying, togglePlay } = usePlayer()

  const eqBars = Array.from({ length: 28 }, (_, i) => i + 1)

  return (
    <div className="compact-player-card">
      <div className="glass-glare" aria-hidden="true" />
      
      <div className="compact-player-top-row">
        {/* Left: Gold Antenna Icon */}
        <div className="compact-antenna-box">
          <svg viewBox="0 0 24 24" className="antenna-svg-icon" fill="none" stroke="currentColor" strokeWidth="1.8">
            <circle cx="12" cy="11" r="1.5" fill="currentColor" />
            <path d="M12 12.5v7m-2.5 1.5h5" strokeLinecap="round" />
            <path d="M9.5 8.5a3.5 3.5 0 0 1 5 0m-7.5-2.5a7 7 0 0 1 10 0m-12.5-2.5a10.5 10.5 0 0 1 15 0" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Center: Metadata */}
        <div className="compact-player-details">
          <h4 className="compact-title-station">PRAYER FM</h4>
          <div className="compact-freq-row">
            <span className="compact-freq-num">90.5</span>
            <span className="compact-freq-unit">FM</span>
          </div>
          <span className="compact-live-subtitle">LIVE • CHRISTIAN RADIO</span>
          <span className="compact-light-tagline">Bringing Light into Your Night</span>
        </div>

        {/* Right: Controls */}
        <div className="compact-controls-wrapper">
          <div className="compact-live-badge">LIVE</div>
          <button 
            onClick={togglePlay} 
            className="compact-circular-play-btn"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <FiPause className="play-icon-inner" />
            ) : (
              <FiPlay className="play-icon-inner offset-play" />
            )}
          </button>
        </div>
      </div>

      {/* Bottom: Animated Full Width Equalizer */}
      <div className="compact-eq-waveform">
        {eqBars.map((barNum) => (
          <div 
            key={barNum} 
            className={`eq-bar bar-${barNum} ${isPlaying ? 'wave-animate' : ''}`}
            style={{
              animationDelay: `${(barNum % 7) * 0.1}s`,
              height: `${4 + (barNum % 5) * 4}px`
            }}
          />
        ))}
      </div>
    </div>
  )
}
