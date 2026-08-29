import React from 'react'
import SocialConnect from '../components/SocialConnect.jsx'

export default function Contact() {
  return (
    <section className="shell-inner page-hero">
      <span className="eyebrow" style={{ marginBottom: 14 }}>
        Contact
      </span>
      <h1>Let&rsquo;s stay connected.</h1>
      <p style={{ marginBottom: 28 }}>
        Reach out on any platform — we&rsquo;d love to pray with you.
      </p>
      <div style={{ maxWidth: 380, paddingBottom: 40 }}>
        <SocialConnect />
      </div>
    </section>
  )
}
