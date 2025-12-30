import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';
import './Achievements.css';

const TimelineItem = ({ year, title, awards, side, delay }) => {
    return (
        <motion.div
            className={`timeline-item ${side}`}
            initial={{ opacity: 0, x: side === 'left' ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
        >
            <div className="timeline-content">
                <div className="year-badge">{year}</div>
                <h3 className="achievement-title">{title}</h3>
                <ul className="achievement-list">
                    {awards.map((award, i) => (
                        <li key={i}>{award}</li>
                    ))}
                </ul>
            </div>
        </motion.div>
    );
};

const Achievements = () => {
    return (
        <section id="achievements" className="achievements-section">
            <div className="container">
                <motion.h2
                    className="section-title text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Our Journey & Achievements
                </motion.h2>

                <div className="timeline">
                    <div className="timeline-line"></div>

                    <TimelineItem
                        year="2022"
                        title="Early Success"
                        awards={[
                            "2nd Runner Up (SEVC)",
                            "Best Build Quality",
                            "Best Captain (Arvind M)",
                            "Virtual Round Winner"
                        ]}
                        side="left"
                        delay={0.1}
                    />

                    <TimelineItem
                        year="2023"
                        title="Rising Momentum"
                        awards={[
                            "1st Runner Up (SEVC)",
                            "Maneuverability Award",
                            "Hovering & Drag Award",
                            "Shutterbag Winner"
                        ]}
                        side="right"
                        delay={0.2}
                    />

                    <TimelineItem
                        year="2024"
                        title="Innovation Excellence"
                        awards={[
                            "1st Runner Up (SEVC Dynamic)",
                            "Solar Endurance Award",
                            "Innovation Award",
                            "Shutterbag Winner"
                        ]}
                        side="left"
                        delay={0.3}
                    />

                    <motion.div
                        className="timeline-item center highlight-year"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="timeline-content champion-card">
                            <div className="champion-icon"><FaTrophy /></div>
                            <div className="year-badge big">2025</div>
                            <h3 className="achievement-title big">Overall BSVC Champions</h3>
                            <div className="champion-grid">
                                <span><FaMedal className="icon-sm" /> Design</span>
                                <span><FaMedal className="icon-sm" /> Cost</span>
                                <span><FaMedal className="icon-sm" /> Acceleration</span>
                                <span><FaMedal className="icon-sm" /> Autocross</span>
                                <span><FaMedal className="icon-sm" /> Skidpad</span>
                                <span><FaMedal className="icon-sm" /> Endurance</span>
                            </div>
                            <p className="special-mention"><FaStar /> "Lightest Vehicle" Award</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;
