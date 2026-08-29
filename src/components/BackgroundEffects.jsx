import React, { useEffect, useState } from 'react'
import './BackgroundEffects.css'

export default function BackgroundEffects() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    // Generate soft gold incense particles
    const particleCount = 20
    setParticles(
      Array.from({ length: particleCount }).map((_, i) => ({
        id: i,
        top: `${Math.random() * 100}%`,
        left: `${Math.random() * 100}%`,
        size: Math.random() * 4 + 1.5,
        delay: `${Math.random() * 5}s`,
        duration: `${Math.random() * 12 + 8}s`,
      }))
    )
  }, [])

  return (
    <div className="bg-effects-sunrise" aria-hidden="true">
      {/* Sunrise Horizon Glow */}
      <div className="sunrise-sky-base" />
      <div className="sunrise-horizon-glow" />

      {/* Rotating Sunbeams / Divine Light Rays */}
      <div className="sunbeams-container">
        <svg viewBox="0 0 100 100" className="sunbeams-svg">
          <circle cx="50" cy="50" r="1" fill="none" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (360 / 12) * i
            return (
              <path
                key={i}
                d="M 50 50 L 0 0 L 100 0 Z"
                className="sunbeam-ray"
                style={{
                  transform: `rotate(${angle}deg)`,
                  transformOrigin: '50px 50px',
                }}
              />
            )
          })}
        </svg>
      </div>

      {/* Soft drifting clouds layers */}
      <div className="sunrise-cloud cloud-alpha" />
      <div className="sunrise-cloud cloud-beta" />

      {/* Glowing Gold Christianity Cross (Left Column Backdrop) */}
      <div className="sunrise-cross-container">
        <svg viewBox="0 0 200 300" className="sunrise-cross-svg">
          {/* Inner gold glow filter */}
          <defs>
            <filter id="gold-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="10" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Cross body with sunburst behind it */}
          <g filter="url(#gold-glow)">
            {/* Horizontal beam */}
            <path d="M 40 90 L 160 90 L 160 110 L 40 110 Z" fill="url(#cross-gold-gradient)" />
            {/* Vertical beam */}
            <path d="M 90 30 L 110 30 L 110 270 L 90 270 Z" fill="url(#cross-gold-gradient)" />
          </g>

          {/* Golden gradients */}
          <defs>
            <linearGradient id="cross-gold-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="35%" stopColor="#ffc857" />
              <stop offset="100%" stopColor="#f6b93b" />
            </linearGradient>
          </defs>

          {/* Halo rings around intersection */}
          <circle cx="100" cy="100" r="28" fill="none" stroke="rgba(255, 200, 87, 0.4)" strokeWidth="1.5" strokeDasharray="3 3" />
          <circle cx="100" cy="100" r="18" fill="none" stroke="rgba(255, 255, 255, 0.5)" strokeWidth="1" />
        </svg>
      </div>

      {/* Floating White Dove Silhouette */}
      <div className="sunrise-dove-container">
        <svg viewBox="0 0 100 100" className="sunrise-dove-svg" width="36" height="36">
          <path d="M 50 45 C 35 30, 15 35, 10 50 C 25 50, 42 48, 50 45 Z" fill="#ffffff" opacity="0.6" />
          <path d="M 50 45 C 65 30, 85 35, 90 50 C 75 50, 58 48, 50 45 Z" fill="#ffffff" opacity="0.6" />
          <path d="M 50 45 L 50 68 C 47 70, 42 75, 48 78 C 50 78, 53 72, 50 68 Z" fill="#ffffff" opacity="0.6" />
        </svg>
      </div>

      {/* Golden Rising Particles */}
      <div className="sunrise-particles-layer">
        {particles.map((p) => (
          <span
            key={p.id}
            className="gold-particle"
            style={{
              left: p.left,
              top: p.top,
              width: `${p.size}px`,
              height: `${p.size}px`,
              animationDelay: p.delay,
              animationDuration: p.duration,
            }}
          />
        ))}
      </div>
    </div>
  )
}
