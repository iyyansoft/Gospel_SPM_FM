import React from 'react'
import GospelTV from '../components/GospelTV.jsx'

export default function TV() {
  return (
    <section className="shell-inner page-hero">
      <span className="eyebrow" style={{ marginBottom: 14 }}>
        Gospel TV
      </span>
      <h1>Watch, worship, and grow.</h1>
      <p style={{ marginBottom: 28 }}>
        Stream Comforter TV, Joy TV, and Elim TV — gospel television built for
        the whole family.
      </p>
      <div style={{ maxWidth: 420, paddingBottom: 40 }}>
        <GospelTV />
      </div>
    </section>
  )
}
