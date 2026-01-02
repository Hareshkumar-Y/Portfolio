import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import logo from '../assets/astra.png';
import skiLogo from '../assets/skiLogo.png';

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
        { name: "About Us", href: "#about" },
        { name: "Technical Overview", href: "#tech" },
        { name: "Achievements", href: "#achievements" },
        { name: "The Team", href: "#team" },
        { name: "Sponsors", href: "#sponsors" },
        { name: "Gallery", href: "#gallery" },
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
                    <img src={logo} alt="Astra Logo" className="logo-icon" />
                    <span className="logo-separator">|</span>
                    <img src={skiLogo} alt="SKI Logo" className="logo-icon" />
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
