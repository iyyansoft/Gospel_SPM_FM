import React from 'react'
import './DesignerScripture.css'

export default function DesignerScripture() {
  return (
    <div className="designer-scripture-card">
      <div className="verse-section">
        <div className="verse-left-meta">
          <svg viewBox="0 0 24 24" className="bible-icon-svg" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 21c-1.2-1-3-1.5-5-1.5s-3.8.5-5 1.5V5c1.2-1 3-1.5 5-1.5s3.8.5 5 1.5m0 16c1.2-1 3-1.5 5-1.5s3.8.5 5 1.5V5c-1.2-1-3-1.5-5-1.5s-3.8.5-5 1.5m0 0v16" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="verse-vertical-bar" />
        <div className="verse-content-right">
          <p className="verse-text-body en-text">
            "Go ye into all the world, and preach the gospel to every creature."
            <span className="verse-citation">— MARK 16:15</span>
          </p>
        </div>
      </div>
      
      <div className="verse-separator-row">
        <div className="separator-line" />
        <span className="separator-diamond">✦</span>
        <div className="separator-line" />
      </div>

      <div className="verse-section">
        <div className="verse-left-meta">
          <svg viewBox="0 0 24 24" className="bible-icon-svg" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 21c-1.2-1-3-1.5-5-1.5s-3.8.5-5 1.5V5c1.2-1 3-1.5 5-1.5s3.8.5 5 1.5m0 16c1.2-1 3-1.5 5-1.5s3.8.5 5 1.5V5c-1.2-1-3-1.5-5-1.5s-3.8.5-5 1.5m0 0v16" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="verse-vertical-bar" />
        <div className="verse-content-right">
          <p className="verse-text-body ta-text">
            "நீங்கள் உலகமெங்கும் போய், சர்வ சிருஷ்டிக்கும் சுவிசேஷத்தைப் பிரசங்கியுங்கள்."
            <span className="verse-citation">— மாற்கு 16:15</span>
          </p>
        </div>
      </div>
    </div>
  )
}
