import React from 'react'
import { motion } from 'framer-motion'
import { FiPlay } from 'react-icons/fi'
import { FaCross, FaPrayingHands, FaDove } from 'react-icons/fa'
import { usePlayer } from '../context/PlayerContext.jsx'
import TiltCard from './TiltCard.jsx'
import './ChannelCard.css'

const ICONS = {
  pray: FaPrayingHands,
  music: FaDove,
  cross: FaCross,
}

export default function ChannelCard({ channel, index = 0 }) {
  const { activeChannel } = usePlayer()
  const Icon = ICONS[channel.icon] || FaCross
  const isActive = activeChannel.id === channel.id

  const handleCardClick = (e) => {
    e.preventDefault()
    if (channel.link) {
      window.open(channel.link, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <TiltCard
      className={`channel-card ${isActive ? 'is-active' : ''}`}
      style={{ '--card-accent': channel.accent, '--card-accent-soft': channel.accentSoft, cursor: 'pointer' }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      onClick={handleCardClick}
    >
      <div className="channel-icon">
        <Icon />
      </div>
      <h3 className="channel-name">{channel.name}</h3>
      <p className="channel-tagline">{channel.tagline}</p>
      <p className="channel-desc">{channel.description}</p>
      <a
        href={channel.link || '#'}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-outline btn-small btn-block channel-btn"
        onClick={handleCardClick}
        style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <FiPlay /> Listen Live
      </a>
    </TiltCard>
  )
}
