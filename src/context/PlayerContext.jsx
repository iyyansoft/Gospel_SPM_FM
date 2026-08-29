import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { channels } from '../data/channels.js'

const PlayerContext = createContext(null)

export function PlayerProvider({ children }) {
  const [activeChannelId, setActiveChannelId] = useState('prayer-fm')
  const [isPlaying, setIsPlaying] = useState(true)
  const [volume, setVolume] = useState(72)
  const [progress, setProgress] = useState(18)
  const intervalRef = useRef(null)

  const activeChannel = channels.find((c) => c.id === activeChannelId) || channels[0]

  useEffect(() => {
    if (isPlaying) {
      intervalRef.current = setInterval(() => {
        setProgress((p) => (p >= 100 ? 0 : p + 0.4))
      }, 220)
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current)
    }
    return () => clearInterval(intervalRef.current)
  }, [isPlaying])

  const togglePlay = () => setIsPlaying((p) => !p)

  const selectChannel = (id) => {
    setActiveChannelId(id)
    setProgress(0)
    setIsPlaying(true)
  }

  const nextChannel = () => {
    const idx = channels.findIndex((c) => c.id === activeChannelId)
    const next = channels[(idx + 1) % channels.length]
    selectChannel(next.id)
  }

  const prevChannel = () => {
    const idx = channels.findIndex((c) => c.id === activeChannelId)
    const prev = channels[(idx - 1 + channels.length) % channels.length]
    selectChannel(prev.id)
  }

  const value = {
    channels,
    activeChannel,
    isPlaying,
    volume,
    progress,
    setVolume,
    setProgress,
    togglePlay,
    selectChannel,
    nextChannel,
    prevChannel,
  }

  return <PlayerContext.Provider value={value}>{children}</PlayerContext.Provider>
}

export function usePlayer() {
  const ctx = useContext(PlayerContext)
  if (!ctx) throw new Error('usePlayer must be used within a PlayerProvider')
  return ctx
}
