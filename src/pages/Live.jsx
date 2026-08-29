import React from 'react'
import CompactChannelPlayer from '../components/CompactChannelPlayer.jsx'
import NowPlaying from '../components/NowPlaying.jsx'
import Channels from '../components/Channels.jsx'
import BibleVerse from '../components/BibleVerse.jsx'
import AppDownload from '../components/AppDownload.jsx'
import GospelTV from '../components/GospelTV.jsx'
import SocialConnect from '../components/SocialConnect.jsx'
import './Home.css'

export default function Live() {
  return (
    <>
      <section className="shell-inner page-hero" style={{ paddingBottom: 0 }}>
        <div className="banner-live-badge">
          <span className="live-dot" />
          <span>LIVE</span>
        </div>
        <h1 className="banner-title">YOU&rsquo;RE LISTENING LIVE.</h1>
        <div className="banner-underline" />
        <p className="banner-subtitle">
          Select a channel and let the Gospel play.
        </p>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr',
            gap: 80,
            paddingBottom: 40,
            alignItems: 'stretch',
            maxWidth: '1240px',
            margin: '0 auto -30px',
            transform: 'scale(0.92)',
            transformOrigin: 'top center',
          }}
          className="live-grid"
        >
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <CompactChannelPlayer />
          </div>
          <NowPlaying />
        </div>
        <style>{`
          @media (max-width: 900px) {
            .live-grid { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </section>

      <section className="shell-inner dashboard-channels-section">
        <div className="dash-row-channels">
          <Channels />
        </div>
      </section>

      <section className="shell-inner" style={{ paddingBottom: 60 }}>
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
