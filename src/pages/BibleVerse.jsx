import React from 'react'
import { verseOfTheDay } from '../data/channels.js'

export default function BibleVersePage() {
  return (
    <section className="shell-inner page-hero">
      <span className="eyebrow" style={{ marginBottom: 14 }}>
        Bible Verse
      </span>
      <h1>Verse of the day.</h1>
      <div
        className="panel"
        style={{ padding: 32, maxWidth: 560, marginTop: 12 }}
      >
        <p
          style={{
            fontFamily: 'var(--font-script)',
            fontStyle: 'italic',
            fontSize: 24,
            lineHeight: 1.5,
            color: 'var(--text-main)',
            margin: '0 0 14px',
          }}
        >
          {verseOfTheDay.text}
        </p>
        <span
          style={{
            fontSize: 12,
            fontWeight: 700,
            letterSpacing: '0.08em',
            textTransform: 'uppercase',
            color: 'var(--accent-gold)',
          }}
        >
          {verseOfTheDay.reference}
        </span>
      </div>
    </section>
  )
}
