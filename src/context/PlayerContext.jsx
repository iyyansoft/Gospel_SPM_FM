import React, { createContext, useContext, useEffect, useRef, useState } from 'react'
import { channels } from '../data/channels.js'

const PlayerContext = createContext(null)

const STREAM_URLS = {
  'prayer-fm': 'https://centova71.instainternet.com/proxy/spmgospelfm?mp=/stream',
  'music-fm': 'https://centova71.instainternet.com/proxy/spmgospelmusic?mp=/stream',
  'praise-fm': 'https://centova71.instainternet.com/proxy/gospelpraisefm?mp=/stream',
}

export function PlayerProvider({ children }) {
  const [activeChannelId, setActiveChannelId] = useState('prayer-fm')
  const [isPlaying, setIsPlaying] = useState(false) // Set default to false to comply with browser autoplay policies
  const [volume, setVolume] = useState(72)
  const [progress, setProgress] = useState(18)
  const intervalRef = useRef(null)
  const audioRef = useRef(null)

  const activeChannel = channels.find((c) => c.id === activeChannelId) || channels[0]

  // Initialize Audio element once
  useEffect(() => {
    audioRef.current = new Audio()
    audioRef.current.volume = volume / 100

    return () => {
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.src = ''
      }
    }
  }, [])

  // Update volume
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
    }
  }, [volume])

  // Sync playback stream
  useEffect(() => {
    if (!audioRef.current) return

    const streamUrl = STREAM_URLS[activeChannelId]

    if (isPlaying) {
      if (!audioRef.current.src || audioRef.current.src !== streamUrl) {
        audioRef.current.src = streamUrl
        audioRef.current.load()
      }
      audioRef.current.play().catch((err) => {
        console.warn('Playback failed or was interrupted:', err)
        setIsPlaying(false)
      })
    } else {
      audioRef.current.pause()
      // Clear src to stop buffering live stream in background
      audioRef.current.src = ''
    }
  }, [activeChannelId, isPlaying])

  // Mock progress bar increments
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
