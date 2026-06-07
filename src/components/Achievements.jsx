import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaStar } from 'react-icons/fa';
import { timelineItems, championAchievement } from '../data/achievementsData';
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

                    {timelineItems.map((item, index) => (
                        <TimelineItem
                            key={index}
                            year={item.year}
                            title={item.title}
                            awards={item.awards}
                            side={item.side}
                            delay={item.delay}
                        />
                    ))}

                    <motion.div
                        className="timeline-item center highlight-year"
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                    >
                        <div className="timeline-content champion-card">
                            <div className="champion-icon"><FaTrophy /></div>
                            <div className="year-badge big">{championAchievement.year}</div>
                            <h3 className="achievement-title big">{championAchievement.title}</h3>
                            <div className="champion-grid">
                                {championAchievement.awards.map((award, idx) => (
                                    <span key={idx}>
                                        <FaMedal className="icon-sm" />
                                        {award}
                                    </span>
                                ))}
                            </div>
                            <p className="special-mention">
                                <FaStar /> {championAchievement.specialMention}
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Achievements;