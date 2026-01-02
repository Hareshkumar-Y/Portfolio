import React, { useState } from 'react';
import { FaInstagram, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import ContactModal from './ContactModal';
import './Footer.css';

const Footer = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <footer id="contact" className="footer">
            <div className="container footer-content">
                <div className="footer-cta">
                    <h2>Ready to Step Into The Future?</h2>
                    <button onClick={() => setIsModalOpen(true)} className="btn btn-primary big-btn">Contact Us Today</button>
                    <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
                </div>

                <div className="footer-grid">
                    <div className="contact-info">
                        <h3>Get In Touch</h3>
                        <a href="tel:+919003567752" className="contact-link"><FaPhone /> +91 90035 67752</a>
                        <a href="tel:+916383549287" className="contact-link"><FaPhone /> +91 63835 49287</a>
                        <a href="mailto:astraskcet@gmail.com" className="contact-link"><FaEnvelope /> astraskcet@gmail.com</a>
                        <a href="mailto:astrabussiness26@gmail.com" className="contact-link"><FaEnvelope /> astrabussiness26@gmail.com</a>
                        <a href="https://maps.google.com/?q=Sri+Krishna+College+of+Engineering+and+Technology,+Coimbatore" target="_blank" rel="noopener noreferrer" className="contact-link"><FaMapMarkerAlt /> Sri Krishna College of Engineering and Technology, Coimbatore - 641008</a>
                    </div>

                    <div className="social-links">
                        <h3>Follow Us</h3>
                        <a href="https://instagram.com/TEAM_ASTRA_SKCET" target="_blank" rel="noopener noreferrer" className="social-link">
                            <FaInstagram /> TEAM_ASTRA_SKCET
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; 2025 Team ASTRA. Per Aspera Ad Astra.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
