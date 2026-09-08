import React from 'react'
import Hero from '../components/Hero.jsx'
import BibleVerse from '../components/BibleVerse.jsx'
import AppDownload from '../components/AppDownload.jsx'
import SocialConnect from '../components/SocialConnect.jsx'
import './Home.css'

export default function Home() {
  return (
    <>
      <Hero />

      <section className="shell-inner">
        <div className="dash-grid-3">
          <BibleVerse />
          <AppDownload />
          <SocialConnect />
        </div>
      </section>
    </>
  )
}
