import React from 'react'
import { Link } from 'react-router-dom'
import { FaCross } from 'react-icons/fa'
import { verseOfTheDay } from '../data/channels.js'
import './BibleVerse.css'

export default function BibleVerse() {
  return (
    <div className="panel verse-card">
      <div className="verse-image-container" aria-hidden="true">
        <img src="/bible_lantern.jpg" alt="Open Bible and Lantern" className="verse-img" />
        <div className="verse-img-overlay" />
      </div>
      <span className="eyebrow verse-eyebrow">Bible Verse</span>
      <p className="verse-text">{verseOfTheDay.text}</p>
      <span className="verse-ref">{verseOfTheDay.reference}</span>
      <Link to="/bible-verse" className="verse-link">
        Read More
      </Link>
    </div>
  )
}
