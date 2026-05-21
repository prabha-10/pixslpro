import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container navbar-content">
        <div className="logo">
          <a href="/">Lamosa<span className="dot">.</span></a>
        </div>
        
        <ul className="nav-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#work">Work</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#faq">FAQ</a></li>
          <li className="badge-new"><a href="#templates">Templates</a> <span className="badge">New</span></li>
        </ul>
        
        <div className="nav-actions">
          <button className="btn-primary">Get Template</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
