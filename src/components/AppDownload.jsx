import React from 'react'
import { FiSmartphone } from 'react-icons/fi'
import { SiAndroid } from 'react-icons/si'
import './AppDownload.css'

export default function AppDownload() {
  return (
    <div className="panel app-card">
      <div className="phone-mock">
        <div className="phone-screen">
          <img src="/phone_app_screen.jpg" alt="App UI Mockup" className="phone-screen-img" />
        </div>
      </div>
      <div className="app-copy">
        <span className="eyebrow app-eyebrow">Download Our App</span>
        <p className="app-text">
          Stay connected anytime, anywhere. Download our official Android
          App now!
        </p>
        <a
          href="#"
          className="btn btn-outline btn-small app-btn"
          onClick={(e) => e.preventDefault()}
        >
          <SiAndroid /> Android Download App
        </a>
      </div>
    </div>
  )
}
