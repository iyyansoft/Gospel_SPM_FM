import React from 'react'
import AppDownload from '../components/AppDownload.jsx'

export default function AppPage() {
  return (
    <section className="shell-inner page-hero">
      <span className="eyebrow" style={{ marginBottom: 14 }}>
        App
      </span>
      <h1>Gospel Radio, in your pocket.</h1>
      <div style={{ maxWidth: 480, paddingBottom: 40 }}>
        <AppDownload />
      </div>
    </section>
  )
}
