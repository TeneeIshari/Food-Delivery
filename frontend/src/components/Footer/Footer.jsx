import React from 'react'
import './Footer.css'
import { assets } from '../../assets/frontend_assets/assets'

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-content">
        {/* Left section */}
        <div className="footer-content-left">
          <img src={assets.logo} alt="Logo" className="footer-logo" />
          <p>
            Tomato is your trusted food delivery partner, bringing delicious meals right to your door.
          </p>
          <div className="footer-social-icons">
            <img src={assets.facebook_icon} alt="Facebook" />
            <img src={assets.twitter_icon} alt="Twitter" />
            <img src={assets.linkedin_icon} alt="LinkedIn" />
          </div>
        </div>

        {/* Middle section */}
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* Right section */}
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>📞 +1-212-456-7890</li>
            <li>📧 contact@tomato.com</li>
          </ul>
        </div>
      </div>

      <hr />
      <p className="footer-copyright">
        © 2025 Tomato.com — All Rights Reserved.
      </p>
    </footer>
  )
}

export default Footer
