import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, Mail, Menu } from 'lucide-react'; // Using Menu icon
import '../../styles/styles.css';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? 'nav-link active' : 'nav-link';
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        
        {/* Top Info Bar */}
        <div className="top-info-bar">
          <div className="info-item">
            <div className="icon-box">
              <Mail size={20} />
            </div>
            <div className="info-text">
              <p>Mail Us</p>
              <a href="mailto:info@example.org">Kalyankekadamfoundation@gmail.com</a>
            </div>
          </div>

          <div className="info-item">
            <div className="icon-box">
              <Phone size={20} />
            </div>
            <div className="info-text">
              <p>Call Us</p>
              <a href="tel:+918178129395">+91 8178129395</a>
            </div>
          </div>
        </div>

        {/* Main Navigation */}
        <nav className="main-nav">
          <Link to="/" className="logo">Kalyan Ke Kadam</Link>

          <div className="hamburger" onClick={toggleMenu}>
            <Menu size={28} />
          </div>

          <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
            <Link to="/about" className={isActive('/about')} onClick={toggleMenu}>About Us</Link>
            <Link to="/contact" className={isActive('/contact')} onClick={toggleMenu}>Contact Us</Link>
            <Link to="/csr" className={isActive('/csr')} onClick={toggleMenu}>CSR</Link>
            <Link to="/board-of-trustees" className={isActive('/board-of-trustees')} onClick={toggleMenu}>Board Of Trustees</Link>
            <Link to="/donate" className="donate-btn" onClick={toggleMenu}>Donate Now</Link>
          </div>
        </nav>

      </div>
    </header>
  );
};

export default Header;
