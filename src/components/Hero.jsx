import React from 'react'
import { motion } from 'framer-motion'
import ThreeChannelPlayer from './ThreeChannelPlayer.jsx'
import DesignerScripture from './DesignerScripture.jsx'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="shell-inner hero-grid">
        <motion.div
          className="hero-copy"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <h1 className="hero-heading">
            <span className="line-white">Tune In.</span>
            <span className="line-gold">God Is Speaking.</span>
          </h1>

          <p className="hero-subtitle-desc">
            24/7 Christian Radio Station spreading the Gospel, uplifting souls
            and sharing the love of Christ.
          </p>

          <ThreeChannelPlayer />
        </motion.div>

        <motion.div
          className="hero-verse-col"
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut', delay: 0.2 }}
        >
          <DesignerScripture />
        </motion.div>
      </div>
    </section>
  )
}
