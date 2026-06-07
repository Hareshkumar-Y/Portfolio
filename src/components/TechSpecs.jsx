import React from 'react';
import { motion } from 'framer-motion';
import { techSpecs } from '../data/techSpecsData';
import './TechSpecs.css';

const TechCard = ({ icon, title, specs, delay }) => {
    return (
        <motion.div
            className="tech-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            whileHover={{ y: -15, boxShadow: "0 20px 40px rgba(46, 125, 50, 0.15)" }}
        >
            <div className="tech-icon">{icon}</div>
            <h3 className="tech-title">{title}</h3>
            <ul className="tech-details">
                {specs.map((spec, i) => (
                    <li key={i}>{spec}</li>
                ))}
            </ul>
        </motion.div>
    );
};

const TechSpecs = () => {
    return (
        <section id="tech" className="tech-section">
            <div className="container">
                <motion.div
                    className="tech-header text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <h2 className="section-title">Technical Overview</h2>
                    <h3 className="tech-model">ASTRA 5.0</h3>
                </motion.div>

                <div className="tech-grid">
                    {techSpecs.map((tech, index) => (
                        <TechCard
                            key={index}
                            icon={tech.icon}
                            title={tech.title}
                            specs={tech.specs}
                            delay={tech.delay}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TechSpecs;

