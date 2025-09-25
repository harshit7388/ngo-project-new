import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";
import logo from '../../assets/logo.png'
import "../../styles/styles.css";

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const isActive = (path: string) => {
    return location.pathname === path ? "nav-link active" : "nav-link";
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="container">
        {/* Top Row: Logo + Site Name (Centered) */}
        <div className="header-top">
          <Link to="/" className="logo-link">
            <img src={logo} alt="Foundation Logo" className="logo-img" />
            <span className="site-name">Kalyan Ke Kadam Foundation</span>
          </Link>

          {/* Hamburger Menu (Mobile) */}
          <div className="hamburger" onClick={toggleMenu}>
            <Menu size={28} />
          </div>
        </div>

        {/* Bottom Row: Navigation */}
        <nav className={`nav-links ${menuOpen ? "show" : ""}`}>
          <div className={`nav-links ${menuOpen ? "show" : ""}`}>
            <Link to="/" className={isActive("/")} onClick={toggleMenu}>
              Home
            </Link>

            <Link
              to="/about"
              className={isActive("/about")}
              onClick={toggleMenu}
            >
              About Us
            </Link>

            <Link
              to="/impactstories"
              className={isActive("/ImpactStories")}
              onClick={toggleMenu}
            >
              Impact Stories
            </Link>

            {/* Dropdown Example */}
            <div className="dropdown">
              <button className="nav-link dropdown-toggle">Our Work</button>
              <div className="dropdown-menu">
                <Link to="/programs" onClick={toggleMenu}>
                  Programs
                </Link>
                <Link to="/reach" onClick={toggleMenu}>
                  Reach
                </Link>
                <Link to="/impact" onClick={toggleMenu}>
                  Impact
                </Link>
                <Link to="/partners" onClick={toggleMenu}>
                  Partners
                </Link>
              </div>
            </div>

            <div className="dropdown">
              <button className="nav-link dropdown-toggle">Compliance</button>
              <div className="dropdown-menu">
                <Link to="/" onClick={toggleMenu}>
                  12 A
                </Link>
                <Link to="/" onClick={toggleMenu}>
                  80G Certificate
                </Link>
                <Link to="/" onClick={toggleMenu}>
                  CSR – 1
                </Link>
              </div>
            </div>

            

            <div className="dropdown">
              <button className="nav-link dropdown-toggle">Media</button>
              <div className="dropdown-menu">
                <Link to="/" onClick={toggleMenu}>
                  Press Release
                </Link>
                <Link to="/" onClick={toggleMenu}>
                  Image Gallery
                </Link>
                <Link to="/" onClick={toggleMenu}>
                  Video Gallery
                </Link>
              </div>
            </div>

            <div className="dropdown">
              <button className="nav-link dropdown-toggle">Reports </button>
              <div className="dropdown-menu">
                <Link to="/" onClick={toggleMenu}>
                  Balance Sheet
                </Link>
                <Link to="/" onClick={toggleMenu}>
                  Annual Reports
                </Link>
              </div>
            </div>

            <div className="dropdown">
              <button className="nav-link dropdown-toggle">
                Get Involved{" "}
              </button>
              <div className="dropdown-menu">
                <Link to="/" onClick={toggleMenu}>
                  Volunteering Activities
                </Link>
                <Link to="/" onClick={toggleMenu}>
                  Donation Drive
                </Link>
                <Link to="/" onClick={toggleMenu}>
                  Internship{" "}
                </Link>
              </div>
            </div>

            <div className="dropdown">
              <button className="nav-link dropdown-toggle">Contact Us </button>
              <div className="dropdown-menu">
                <Link to="/" onClick={toggleMenu}>
                  For partnership
                </Link>
                <Link to="/" onClick={toggleMenu}>
                  For carrers
                </Link>
              </div>
            </div>

            <Link to="/donate" className="donate-btn" onClick={toggleMenu}>
              Donate Now
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
