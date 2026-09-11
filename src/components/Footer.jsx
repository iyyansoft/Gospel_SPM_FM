import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell-inner footer-inner">
        <div className="footer-left">
          <span className="footer-cross">†</span> Copyright © 2026 All rights reserved
        </div>

        <div className="footer-center">
          <a
            href="https://www.iyyansoft.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="footer-dev-link"
            title="Developed by Iyyansoft - Visit Website"
          >
            <span className="dev-by-text">Developed by</span>
            <svg
              className="dev-heart-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ff3b81"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span className="dev-brand-text">Iyyansoft</span>
          </a>
        </div>

        <div className="footer-right">
          <a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>Privacy Policy</a>
          <span className="footer-divider">|</span>
          <a href="#" className="footer-link" onClick={(e) => e.preventDefault()}>Terms & Conditions</a>
        </div>
      </div>
    </footer>
  )
}

