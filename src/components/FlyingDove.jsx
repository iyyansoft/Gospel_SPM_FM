import React from 'react'
import './FlyingDove.css'

export default function FlyingDove({ delay = 0, scale = 1, top = '25%', duration = '42s' }) {
  return (
    <div 
      className="animated-dove-flight-path"
      style={{
        top: top,
        animationDelay: `${delay}s`,
        animationDuration: duration,
        transform: `scale(${scale})`,
      }}
    >
      <div className="dove-bird-assembly">
        {/* Glow Aura behind Dove */}
        <div className="dove-divine-aura" />

        <svg viewBox="0 0 140 100" className="dove-master-svg">
          <defs>
            {/* Soft White & Pearl Feather Gradient */}
            <linearGradient id="featherGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="70%" stopColor="#f0f4f8" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#d9e2ec" stopOpacity="0.9" />
            </linearGradient>
            
            <linearGradient id="bodyGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="1" />
              <stop offset="60%" stopColor="#f7fafc" stopOpacity="0.98" />
              <stop offset="100%" stopColor="#e2e8f0" stopOpacity="0.9" />
            </linearGradient>

            <filter id="doveGlow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* BACK WING (Left Wing) */}
          <g className="dove-wing dove-wing-back">
            <path
              d="M 60 45 C 50 25, 30 5, 10 2 C 20 20, 35 32, 45 40 C 38 32, 22 20, 8 15 C 20 30, 38 42, 50 46 C 40 40, 26 30, 16 26 C 28 38, 45 46, 60 45 Z"
              fill="url(#featherGrad)"
              opacity="0.88"
            />
          </g>

          {/* DOVE BODY & TAIL */}
          <g className="dove-body-group">
            {/* Fan Tail Feathers */}
            <path
              d="M 52 50 Q 30 65 18 78 C 30 76 42 70 50 62 Q 22 75 10 88 C 26 82 42 72 52 64 M 52 50 Q 38 78 28 95 C 40 86 48 74 54 62"
              stroke="#e2e8f0"
              strokeWidth="2.5"
              fill="url(#featherGrad)"
              strokeLinecap="round"
            />
            
            {/* Main Body Curve */}
            <path
              d="M 50 48 C 58 46, 75 38, 90 35 C 105 32, 118 36, 122 42 C 124 45, 122 50, 115 52 C 98 56, 78 62, 60 56 C 52 54, 48 51, 50 48 Z"
              fill="url(#bodyGrad)"
              filter="url(#doveGlow)"
            />

            {/* Beak & Head Detail */}
            <polygon points="122,42 132,45 124,47" fill="#f5b942" />
            <circle cx="115" cy="40" r="1.8" fill="#1e293b" />
            <circle cx="115.5" cy="39.5" r="0.6" fill="#ffffff" />
          </g>

          {/* FRONT WING (Right Wing) */}
          <g className="dove-wing dove-wing-front">
            <path
              d="M 64 44 C 75 22, 98 2, 125 0 C 108 18, 90 32, 75 40 C 90 28, 112 12, 130 8 C 110 25, 88 40, 72 45 C 88 34, 108 22, 122 18 C 102 32, 80 43, 64 44 Z"
              fill="url(#featherGrad)"
            />
          </g>
        </svg>

        {/* Light sparkles trailing behind */}
        <div className="dove-trail-sparkle sparkle-1" />
        <div className="dove-trail-sparkle sparkle-2" />
      </div>
    </div>
  )
}
