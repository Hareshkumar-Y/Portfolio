import React from 'react';
import { motion } from 'framer-motion';
import { FaLeaf, FaLightbulb, FaGraduationCap, FaGlobeAmericas } from 'react-icons/fa';
import './Introduction.css';

const IntroCard = ({ icon, title, text, delay }) => {
    return (
        <motion.div
            className="intro-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ y: -10 }}
        >
            <div className="intro-icon-wrapper">
                {icon}
            </div>
            <h3 className="intro-card-title">{title}</h3>
            <p className="intro-card-text">{text}</p>
        </motion.div>
    );
};

const Introduction = () => {
    return (
        <section id="intro" className="intro-section">
            <div className="container">
                <motion.div
                    className="intro-header"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Who We Are</h2>
                    <p className="section-subtitle">
                        The future of mobility is being reshaped by the urgent need for sustainable energy and environmentally responsible transportation.
                    </p>
                </motion.div>

                <div className="intro-grid">
                    <IntroCard
                        icon={<FaGlobeAmericas />}
                        title="Mission"
                        text="ASTRA is a student-driven Solar Electric Vehicle (SEV) team from Sri Krishna College of Engineering and Technology."
                        delay={0.2}
                    />
                    <IntroCard
                        icon={<FaLightbulb />}
                        title="Goal"
                        text="To transform academic knowledge into real-world engineering solutions through the design and development of a solar-powered electric vehicle."
                        delay={0.4}
                    />
                    <IntroCard
                        icon={<FaGraduationCap />}
                        title="Impact"
                        text="A platform for innovation, collaboration, and nurturing industry-ready engineers in clean technology."
                        delay={0.6}
                    />
                </div>
            </div>
        </section>
    );
};

export default Introduction;
