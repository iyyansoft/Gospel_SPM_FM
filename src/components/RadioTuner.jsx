import React from 'react'
import { FiRadio } from 'react-icons/fi'
import { PiWaveformBold } from 'react-icons/pi'
import { usePlayer } from '../context/PlayerContext.jsx'
import './RadioTuner.css'

const FM_MARKS = ['88', '92', '96', '100', '104']
const AM_MARKS = ['530', '700', '1000', '1400', '1700']

export default function RadioTuner({ compact = false }) {
  const { isPlaying, activeChannel } = usePlayer()

  return (
    <div className={`tuner ${compact ? 'tuner-compact' : ''}`}>
      {/* Tuner Card Head */}
      <div className="panel-head tuner-header">
        <span className="eyebrow">
          <FiRadio className="tuner-icon-head" /> RADIO TUNER
        </span>
        <span className="live-pill-top">
          <span className="live-dot" /> LIVE
        </span>
      </div>

      {/* Tuner Card Face */}
      <div className="tuner-face">
        {/* Top: Frequency Scale Display Screen */}
        <div className="tuner-display">
          <div className="glass-glare" aria-hidden="true" />

          <div className="freq-row">
            <span className="band-label">FM</span>
            <div className="freq-track">
              {FM_MARKS.map((m) => (
                <span key={m} className="freq-mark">
                  {m}
                </span>
              ))}
            </div>
            <span className="unit-label">MHz</span>
          </div>

          <div className="freq-ticks" aria-hidden="true">
            {Array.from({ length: 29 }).map((_, i) => (
              <span key={i} className={i % 4 === 0 ? 'tick tall' : 'tick'} />
            ))}
          </div>

          <div className={`tuning-line ${isPlaying ? 'is-live' : ''}`} />

          <div className="freq-ticks" aria-hidden="true">
            {Array.from({ length: 29 }).map((_, i) => (
              <span key={i} className={i % 4 === 0 ? 'tick tall' : 'tick'} />
            ))}
          </div>

          <div className="freq-row">
            <span className="band-label">AM</span>
            <div className="freq-track">
              {AM_MARKS.map((m) => (
                <span key={m} className="freq-mark">
                  {m}
                </span>
              ))}
            </div>
            <span className="unit-label">kHz</span>
          </div>
        </div>

        {/* Bottom: Controls Flex Row */}
        {!compact && (
          <div className="tuner-controls-row">
            {/* Volume Control */}
            <div className="tuner-knob">
              <div className="knob-wrapper">
                <span className="knob-symbol knob-minus">—</span>
                <div className="knob-dial">
                  <span className="knob-notch" />
                </div>
                <span className="knob-symbol knob-plus">+</span>
              </div>
              <span className="knob-label">Volume</span>
            </div>

            {/* Status Readout Box */}
            <div className="tuner-status-box">
              <PiWaveformBold className="status-wave-icon" />
              <div className="status-meta">
                <span className="status-freq">{activeChannel.frequency}</span>
                <span className="status-name">{activeChannel.name}</span>
              </div>
            </div>

            {/* Tuning Control */}
            <div className="tuner-knob">
              <div className="knob-wrapper">
                <span className="knob-symbol knob-minus">—</span>
                <div className="knob-dial knob-dial-live">
                  <span className="knob-notch" />
                </div>
                <span className="knob-symbol knob-plus">+</span>
              </div>
              <span className="knob-label">Tuning</span>
            </div>
          </div>
        )}
      </div>

      {/* Decorative tagline */}
      {!compact && (
        <div className="tuner-footer-tagline">
          <div className="tagline-deco-left" />
          <span className="tuner-tagline-text">Bringing Light into Your Night</span>
          <div className="tagline-deco-right" />
        </div>
      )}
    </div>
  )
}
