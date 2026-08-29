import React from 'react'
import { FiRadio } from 'react-icons/fi'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell-inner footer-inner">
        <div className="footer-left">
          <span className="footer-cross">†</span> © 2024 Gospel Radio. All Rights Reserved.
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
