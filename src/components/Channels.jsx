import React from 'react'
import { Link } from 'react-router-dom'
import { PiWaveformBold } from 'react-icons/pi'
import { channels } from '../data/channels.js'
import ChannelCard from './ChannelCard.jsx'
import './Channels.css'

export default function Channels() {
  return (
    <div className="panel channels-panel">
      <div className="panel-head">
        <span className="eyebrow">
          <PiWaveformBold /> Our Channels
        </span>
        <Link to="/channels" className="view-all">
          View All
        </Link>
      </div>
      <div className="channels-grid">
        {channels.map((channel, i) => (
          <ChannelCard channel={channel} index={i} key={channel.id} />
        ))}
      </div>
    </div>
  )
}
