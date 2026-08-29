import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiTv } from 'react-icons/fi'
import { tvChannels } from '../data/channels.js'
import './GospelTV.css'

export default function GospelTV() {
  const [active, setActive] = useState(0)

  return (
    <div className="panel tv-card">
      <div className="panel-head">
        <span className="eyebrow">
          <FiTv /> Gospel TV
        </span>
        <Link to="/tv" className="view-all">
          View All
        </Link>
      </div>
      <div className="tv-grid">
        {tvChannels.map((tv, i) => (
          <button
            key={tv.id}
            className={`tv-tile ${active === i ? 'is-active' : ''}`}
            style={{ '--tv-color': tv.color }}
            onClick={() => setActive(i)}
          >
            <FiTv />
            <span>{tv.name}</span>
          </button>
        ))}
      </div>
      <div className="tv-dots">
        {tvChannels.map((tv, i) => (
          <span key={tv.id} className={`dot ${active === i ? 'is-active' : ''}`} />
        ))}
      </div>
    </div>
  )
}
