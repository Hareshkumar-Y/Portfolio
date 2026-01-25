import React from 'react';
import { motion } from 'framer-motion';
import { FaBolt, FaBatteryFull, FaTachometerAlt, FaShieldAlt, FaDesktop, FaEye } from 'react-icons/fa';
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
                    <TechCard
                        icon={<FaBolt />}
                        title="Powertrain"
                        specs={[
                            "4 kW HSRM Powertrain",
                            "High efficiency motor controller",
                            "Optimized for solar application"
                        ]}
                        delay={0.1}
                    />
                    <TechCard
                        icon={<FaBatteryFull />}
                        title="Energy Storage"
                        specs={[
                            "60V 100Ah NMC Battery",
                            "IP67 Rated Battery Pack",
                            "IP67 Rated BMS Protection"
                        ]}
                        delay={0.2}
                    />
                    <TechCard
                        icon={<FaTachometerAlt />}
                        title="Performance"
                        specs={[
                            "3 Drive Modes (Ride modes)",
                            "Eco / City / Sport optimized",
                            "Responsive throttle mapping"
                        ]}
                        delay={0.3}
                    />
                    <TechCard
                        icon={<FaDesktop />}
                        title="Smart Dash"
                        specs={[
                            "ASTRA ASEV2503 Dashboard",
                            "7\" HMI Touch Display",
                            "Fully customizable interface"
                        ]}
                        delay={0.4}
                    />
                    <TechCard
                        icon={<FaEye />}
                        title="Safety & Vision"
                        specs={[
                            "Optical Ultrawave Technology",
                            "Blind Spot Detection",
                            "Rear Collision Warnings",
                            "Overtake Alerts"
                        ]}
                        delay={0.5}
                    />
                </div>
            </div>
        </section>
    );
};

export default TechSpecs;
