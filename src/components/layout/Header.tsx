import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Facebook, Twitter, Instagram, Linkedin as LinkedIn } from 'lucide-react';
import '../../styles/styles.css'

const Header = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  return (
    <header className="header">
      <div className="container">
        {/* Top bar */}
        <div className="top-bar">
          <div className="top-left">
            <a href="tel:+1234567890" className="contact-link">
              <Phone size={16} className="phone-icon" />
              <span className="contact-number">+91 8178129395</span>
            </a>
          </div>
          <div className="top-right">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Facebook size={18} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Twitter size={18} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
              <LinkedIn size={18} />
            </a>
          </div>
        </div>
        
        {/* Main navigation */}
        <nav className="main-nav">
          <Link to="/" className="logo">Kalyan Ke Kadam</Link>
          <div className="nav-links">
            <Link to="/about" className={isActive('/about')}>About Us</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact Us</Link>
            <Link to="/csr" className={isActive('/csr')}>CSR</Link>
            <Link to="/board-of-trustees" className={isActive('/board-of-trustees')}>Board Of Trustees</Link>
            <Link to="/donate" className="donate-btn">Donate Now</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
