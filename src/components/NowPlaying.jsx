import React from 'react'
import { FiPlay, FiPause, FiSkipBack, FiSkipForward, FiVolume2, FiMusic } from 'react-icons/fi'
import { GiMicrophone } from 'react-icons/gi'
import { usePlayer } from '../context/PlayerContext.jsx'
import './NowPlaying.css'

export default function NowPlaying() {
  const {
    activeChannel,
    isPlaying,
    togglePlay,
    volume,
    setVolume,
    progress,
    setProgress,
    nextChannel,
    prevChannel,
  } = usePlayer()

  const bars = Array.from({ length: 28 })

  return (
    <div className="panel now-playing">
      <div className="panel-head">
        <span className="eyebrow">
          <FiMusic className="now-playing-head-icon" /> NOW PLAYING
        </span>
        <span className="live-pill">
          <span className="live-dot" /> LIVE
        </span>
      </div>

      <div className="now-playing-body">
        <div className="art-container">
          <div
            className="art"
            style={{
              backgroundImage: `url(${activeChannel.image || '/main_bg_exact_v2.jpg'})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              '--art-accent': activeChannel.accent,
            }}
          />
          <div className="art-badge">
            <GiMicrophone className="badge-icon" />
          </div>
        </div>

        <div className="np-info">
          <h3>{activeChannel.name}</h3>
          <p className="np-tagline">{activeChannel.tagline}</p>
          <p className="np-small">You are listening to Night Signal</p>
        </div>

        <div className={`waveform ${isPlaying ? 'is-active' : ''}`} aria-hidden="true">
          {bars.map((_, i) => (
            <span key={i} style={{ '--i': i }} />
          ))}
        </div>
      </div>

      <div className="np-progress-row">
        <FiVolume2 className="vol-icon vol-low" />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(Number(e.target.value))}
          className="progress-bar volume-slider"
          style={{ '--fill': `${volume}%` }}
          aria-label="Volume"
        />
        <FiVolume2 className="vol-icon vol-high" />
      </div>

      <div className="np-controls">
        <button className="ctrl-btn" onClick={prevChannel} aria-label="Previous channel">
          <FiSkipBack />
        </button>
        <button className="play-btn" onClick={togglePlay} aria-label={isPlaying ? 'Pause' : 'Play'}>
          {isPlaying ? <FiPause /> : <FiPlay />}
        </button>
        <button className="ctrl-btn" onClick={nextChannel} aria-label="Next channel">
          <FiSkipForward />
        </button>
      </div>
    </div>
  )
}
