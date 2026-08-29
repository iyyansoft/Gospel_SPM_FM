import React from 'react'
import { motion } from 'framer-motion'
import { FiPlay } from 'react-icons/fi'
import { FaCross, FaPrayingHands, FaDove } from 'react-icons/fa'
import { usePlayer } from '../context/PlayerContext.jsx'
import './ChannelCard.css'

const ICONS = {
  pray: FaPrayingHands,
  music: FaDove,
  cross: FaCross,
}

export default function ChannelCard({ channel, index = 0 }) {
  const { activeChannel, selectChannel } = usePlayer()
  const Icon = ICONS[channel.icon] || FaCross
  const isActive = activeChannel.id === channel.id

  return (
    <motion.div
      className={`channel-card ${isActive ? 'is-active' : ''}`}
      style={{ '--card-accent': channel.accent, '--card-accent-soft': channel.accentSoft }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.45, delay: index * 0.08 }}
      whileHover={{ y: -4 }}
    >
      <div className="channel-icon">
        <Icon />
      </div>
      <h3 className="channel-name">{channel.name}</h3>
      <p className="channel-tagline">{channel.tagline}</p>
      <p className="channel-desc">{channel.description}</p>
      <button className="btn btn-outline btn-small btn-block channel-btn" onClick={() => selectChannel(channel.id)}>
        <FiPlay /> Listen Live
      </button>
    </motion.div>
  )
}
