import React from 'react';
import { motion } from 'framer-motion';
import { FaRocket, FaHandshake, FaSolarPanel } from 'react-icons/fa';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-layout">
                    <motion.div
                        className="about-content"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="section-title">About Team ASTRA</h2>
                        <h3 className="about-subtitle">Multidisciplinary Engineering Startup</h3>
                        <p className="about-text">
                            We function as a student-run technology startup within the academic ecosystem of Sri Krishna College of Engineering and Technology.
                            Our team consists of 45 dedicated members across three years of study, working under the expert guidance of our faculty mentor,
                            <span className="highlight"> Dr. Gopinathan R.</span>
                        </p>
                    </motion.div>

                    <div className="vision-mission-grid">
                        <motion.div
                            className="vm-card vision"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <div className="vm-header">
                                <FaRocket className="vm-icon" />
                                <h3>Our Vision</h3>
                            </div>
                            <ul className="vm-list">
                                <li>To drive innovation in sustainable solar-powered mobility.</li>
                                <li>To contribute to a greener transportation future.</li>
                                <li>To inspire student-led engineering excellence.</li>
                            </ul>
                        </motion.div>

                        <motion.div
                            className="vm-card mission"
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.4 }}
                        >
                            <div className="vm-header">
                                <FaSolarPanel className="vm-icon" />
                                <h3>Our Mission</h3>
                            </div>
                            <ul className="vm-list">
                                <li>Design and build an efficient solar electric vehicle.</li>
                                <li>Provide hands-on, industry-relevant engineering experience.</li>
                                <li>Collaborate with industry to advance clean mobility solutions.</li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
