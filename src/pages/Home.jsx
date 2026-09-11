import React from 'react'
import Hero from '../components/Hero.jsx'
import ChannelCard from '../components/ChannelCard.jsx'
import { channelsPageList } from '../data/channels.js'
import AppDownload from '../components/AppDownload.jsx'
import SocialConnect from '../components/SocialConnect.jsx'
import './Home.css'

export default function Home() {
  return (
    <>
      {/* Top Hero Section: Active Radio Player & Bible Reading */}
      <Hero />

      {/* Horizontal Section Divider Line below Bible Reading / Hero */}
      <div className="shell-inner">
        <div className="section-divider" style={{ margin: '36px 0 24px' }}>
          <div className="divider-wing-left" />
          <span className="divider-text">✦ Our Channels ✦</span>
          <div className="divider-wing-right" />
        </div>
      </div>


      {/* 3 Live Channels Grid (CHURCH LIVE, BIBLE, GOSPELTV) */}
      <section className="shell-inner" style={{ paddingBottom: 20 }}>
        <div className="dash-grid-3">
          {channelsPageList.map((channel, i) => (
            <ChannelCard channel={channel} index={i} key={channel.id} />
          ))}
        </div>
      </section>

      {/* Section Divider Line before App Download & Social Connect */}
      <div className="shell-inner">
        <div className="section-divider" style={{ margin: '40px 0 24px' }}>
          <div className="divider-wing-left" />
          <span className="divider-text">✦ Connect & Download ✦</span>
          <div className="divider-wing-right" />
        </div>
      </div>

      {/* Mobile App & Social Connect Section */}
      <section className="shell-inner" style={{ paddingBottom: 60 }}>
        <div className="dash-row">
          <AppDownload />
          <SocialConnect />
        </div>
      </section>
    </>
  )
}


