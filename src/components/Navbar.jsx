import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/astra.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: "Introduction", href: "#intro" },
        { name: "The Team", href: "#team" },
        { name: "About Us", href: "#about" },
        { name: "Solar Car", href: "#hero" },
        { name: "Technical Overview", href: "#tech" },
        { name: "Achievements", href: "#achievements" },
        { name: "Sponsors", href: "#sponsors" },
        { name: "Contact", href: "#contact" },
    ];

    const scrollToSection = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <a href="#hero" className="logo" onClick={(e) => scrollToSection(e, '#hero')}>
                    <motion.div
                        initial={{ y: 0 }}
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        className="logo-icon"
                    >
                        {/* Abstract Bird/Wing Logo Placeholder */}
                        <img src={logo} alt="logo" className="logo-icon" />
                    </motion.div>
                    <div className="logo-text">
                        <span className="team-name">ASTRA</span>
                        <span className="motto">Per Aspera Ad Astra</span>
                    </div>
                </a>

                <div className="desktop-menu">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="nav-link"
                        >
                            {link.name}
                        </a>
                    ))}
                </div>

                <div className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mobile-menu"
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.href)}
                                className="mobile-link"
                            >
                                {link.name}
                            </a>
                        ))}
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
