import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-brand">
                        <h2 className="footer-logo">Lamosa<span className="dot">.</span></h2>
                        <p>Elevating brands through premium design and engineering.</p>
                    </div>

                    <div className="footer-newsletter">
                        <h4>Join our newsletter</h4>
                        <div className="newsletter-form">
                            <input type="email" placeholder="Enter your email" />
                            <button className="btn-accent">Subscribe</button>
                        </div>
                    </div>
                </div>

                <div className="footer-grid">
                    <div className="footer-col">
                        <h5>Company</h5>
                        <ul>
                            <li><a href="#about">About</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#work">Work</a></li>
                            <li><a href="#careers">Careers</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h5>Socials</h5>
                        <ul>
                            <li><a href="#twitter">Twitter</a></li>
                            <li><a href="#instagram">Instagram</a></li>
                            <li><a href="#linkedin">LinkedIn</a></li>
                            <li><a href="#dribbble">Dribbble</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h5>Resources</h5>
                        <ul>
                            <li><a href="#blog">Blog</a></li>
                            <li><a href="#templates">Templates</a></li>
                            <li><a href="#tutorials">Tutorials</a></li>
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h5>Contact</h5>
                        <ul>
                            <li><a href="mailto:hello@lamosa.design">hello@lamosa.design</a></li>
                            <li><a href="#book">Book a Call</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="huge-logo">LAMOSA</div>
                    <div className="footer-legal">
                        <p>&copy; 2026 Lamosa Studio Inc. All rights reserved.</p>
                        <div className="legal-links">
                            <a href="#privacy">Privacy</a>
                            <a href="#terms">Terms</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
