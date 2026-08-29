import React from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero.jsx'
import ThreeChannelPlayer from '../components/ThreeChannelPlayer.jsx'
import Channels from '../components/Channels.jsx'
import BibleVerse from '../components/BibleVerse.jsx'
import AppDownload from '../components/AppDownload.jsx'
import GospelTV from '../components/GospelTV.jsx'
import SocialConnect from '../components/SocialConnect.jsx'
import './Home.css'

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  return (
    <>
      <Hero />

      <div className="shell-inner">
        <div className="section-divider" aria-hidden="true">
          <div className="divider-wing-left" />
          <span className="divider-text">Bringing Light into Your Night</span>
          <div className="divider-wing-right" />
        </div>
      </div>



      <section className="shell-inner dashboard-channels-section">
        <div className="dash-row-channels">
          <Channels />
        </div>
      </section>

      <section className="shell-inner">
        <div className="dash-grid-4">
          <BibleVerse />
          <AppDownload />
          <GospelTV />
          <SocialConnect />
        </div>
      </section>
    </>
  )
}
