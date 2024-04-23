// Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Company</h3>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li>Sell on Ecoyaan</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Links</h3>
          <ul>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/terms-of-use">Terms of Use</Link></li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Follow Us</h3>
          <div className="social-links">
            <FacebookIcon/>
            <InstagramIcon/>
            <LinkedInIcon />
          </div>
        </div>
        <div className="footer-column">
          <h3>Subscribe</h3>
          <p>Subscribe to receive updates on blogs, future launches, and more!</p>
          <form>
            <input className='email-input' type="email" placeholder="Your Email Address" />
            <button className='subs-btn' type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <button className="back-to-top" onClick={scrollToTop}>Back to Top</button>
    </footer>
  );
};

export default Footer;
