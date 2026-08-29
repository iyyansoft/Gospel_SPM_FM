import React from 'react'
import { channels } from '../data/channels.js'
import ChannelCard from '../components/ChannelCard.jsx'

export default function ChannelsPage() {
  return (
    <section className="shell-inner page-hero">
      <span className="eyebrow" style={{ marginBottom: 14 }}>
        Channels
      </span>
      <h1>Three signals, one mission.</h1>
      <p style={{ marginBottom: 28 }}>
        Every channel is crafted for a different moment of your day — prayer,
        music, and praise, streaming live around the clock.
      </p>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))',
          gap: 16,
          paddingBottom: 40,
        }}
      >
        {channels.map((channel, i) => (
          <ChannelCard channel={channel} index={i} key={channel.id} />
        ))}
      </div>
    </section>
  )
}
