import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import BackgroundEffects from './components/BackgroundEffects.jsx'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import ChannelsPage from './pages/Channels.jsx'
import Live from './pages/Live.jsx'
import BibleVersePage from './pages/BibleVerse.jsx'
import TV from './pages/TV.jsx'
import AppPage from './pages/App.jsx'
import Contact from './pages/Contact.jsx'

export default function App() {
  return (
    <div className="app-shell">
      <BackgroundEffects />
      <div className="bg-ambience" aria-hidden="true" />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/channels" element={<ChannelsPage />} />
          <Route path="/live" element={<Live />} />
          <Route path="/bible-verse" element={<BibleVersePage />} />
          <Route path="/tv" element={<TV />} />
          <Route path="/app" element={<AppPage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
