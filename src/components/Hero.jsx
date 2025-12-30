import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import CarImage from '../assets/astra_solar_car.png';
import './Hero.css';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -100]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    return (
        <section id="hero" className="hero-section">
            <div className="container hero-container">
                <motion.div
                    className="hero-content"
                    style={{ y: y1, opacity }}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="hero-year"
                    >
                        2025-2026
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="hero-title"
                    >
                        TEAM ASTRA
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="hero-motto"
                    >
                        PER ASPERA AD ASTRA
                    </motion.p>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="hero-institution"
                    >
                        Sri Krishna College of Engineering and Technology
                    </motion.p>

                    <motion.div
                        className="hero-buttons"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1 }}
                    >
                        <a href="#sponsors" className="btn btn-primary">Partner With Us</a>
                        <a href="#about" className="btn btn-outline">Explore Mission</a>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="hero-visual"
                    style={{ y: y2 }}
                >
                    <motion.div
                        animate={{
                            y: [0, -20, 0],
                            rotateZ: [0, 1, 0]
                        }}
                        transition={{
                            duration: 6,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="car-wrapper"
                    >
                        <img src={CarImage} alt="ASTRA Solar Car" className="car-image" />

                        {/* Floating Stats */}
                        <motion.div
                            className="stat-card stat-1"
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
                        >
                            <span className="stat-value">60V</span>
                            <span className="stat-label">100Ah Battery</span>
                        </motion.div>

                        <motion.div
                            className="stat-card stat-2"
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 2 }}
                        >
                            <span className="stat-value">4kW</span>
                            <span className="stat-label">Powertrain</span>
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>

            <div className="hero-background">
                <div className="blob blob-1"></div>
                <div className="blob blob-2"></div>
            </div>
        </section>
    );
};

export default Hero;
