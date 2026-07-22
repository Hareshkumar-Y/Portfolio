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

    const navSections = [
        {
            title: 'Explore',
            links: [
                { name: 'Introduction', href: '#intro' },
                { name: 'About Us', href: '#about' },
                { name: 'Technical Overview', href: '#tech' },
                { name: 'Knowledge by ASTRA', href: '#knowledge' },
            ],
        },
        {
            title: 'Highlights',
            links: [
                { name: 'Achievements', href: '#achievements' },
                { name: 'News', href: '#news' },
                { name: 'Gallery', href: '#gallery' },
            ],
        },
        {
            title: 'Connect',
            links: [
                { name: 'The Team', href: '#team' },
                { name: 'Sponsors', href: '#sponsors' },
                { name: 'Contact', href: '#contact' },
            ],
        },
    ];

    const navLinks = navSections.flatMap((section) => section.links);

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
                    {navSections.map((section) => (
                        <div key={section.title} className="nav-group">
                            <button type="button" className="nav-group-toggle">
                                {section.title}
                            </button>
                            <div className="nav-dropdown">
                                {section.links.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => scrollToSection(e, link.href)}
                                        className="nav-link nav-dropdown-link"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div
                    className="mobile-toggle"
                    role="button"
                    tabIndex={0}
                    aria-label="Toggle navigation menu"
                    aria-expanded={mobileMenuOpen}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setMobileMenuOpen(!mobileMenuOpen);
                        }
                    }}
                >
                    {mobileMenuOpen ? <FaTimes /> : <FaBars />}
                </div>

                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="mobile-menu"
                    >
                        <button
                            type="button"
                            className="mobile-close-btn"
                            aria-label="Close navigation menu"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            <FaTimes />
                        </button>
                        {navSections.map((section) => (
                            <div key={section.title} className="mobile-menu-section">
                                <span className="mobile-section-title">{section.title}</span>
                                <div className="mobile-section-links">
                                    {section.links.map((link) => (
                                        <a
                                            key={link.name}
                                            href={link.href}
                                            onClick={(e) => scrollToSection(e, link.href)}
                                            className="mobile-link"
                                        >
                                            {link.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </motion.div>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
