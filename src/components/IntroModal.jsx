import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import bannerImg from '../assets/banner.jpeg';
import './IntroModal.css';

const IntroModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        // Check sessionStorage to only show the welcome banner once per session
        const hasSeenIntro = sessionStorage.getItem('astraIntroSeen');
        if (!hasSeenIntro) {
            // Slight delay before launching the modal for a better UX transition
            const timer = setTimeout(() => {
                setIsOpen(true);
            }, 800);
            return () => clearTimeout(timer);
        }
    }, []);

    const handleClose = () => {
        setIsOpen(false);
        sessionStorage.setItem('astraIntroSeen', 'true');
    };

    // Close modal on Escape key press
    useEffect(() => {
        if (!isOpen) return;
        const handleKeyDown = (e) => {
            if (e.key === 'Escape') {
                handleClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="intro-modal-overlay"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={handleClose}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="intro-modal-title"
                >
                    <motion.div
                        className="intro-modal-content"
                        initial={{ scale: 0.85, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.85, opacity: 0 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button 
                            className="intro-modal-close" 
                            onClick={handleClose}
                            aria-label="Close welcome banner"
                        >
                            <FaTimes />
                        </button>

                        <div className="intro-modal-body">
                            <h2 id="intro-modal-title" className="sr-only">Latest Updates & Achievements</h2>
                            <img 
                                src={bannerImg} 
                                alt="Astra Championship Banner" 
                                className="intro-modal-banner"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default IntroModal;
