import React from 'react';
import { motion } from 'framer-motion';
import { mentorData, teamMembers } from '../data/leadershipData';
import './Leadership.css';

const defaultAvatar = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2395a5a6' width='150' height='150'><rect width='100%' height='100%' fill='%23ecf0f1'/><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/></svg>";

const Leadership = () => {
    return (
        <section id="team" className="team-section">
            <div className="container">
                <motion.h2
                    className="section-title text-center"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    Meet The Leadership
                </motion.h2>

                {/* Mentor Section */}
                <div className="mentor-showcase">
                    <div className="mentor-image-wrapper">
                        <img
                            src={mentorData.image || defaultAvatar}
                            alt={mentorData.name}
                            className="mentor-image"
                            loading="lazy"
                        />
                    </div>
                    <div className="mentor-content">
                        <h3 className="mentor-name">{mentorData.name}</h3>
                        <p className="mentor-role">{mentorData.role}</p>
                        <p className="mentor-college-role">{mentorData.collegeRole}</p>
                        <blockquote className="mentor-quote">
                            "{mentorData.quote}"
                        </blockquote>
                    </div>
                </div>

                {/* Team Grid */}
                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="member-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.28, delay: index * 0.06 }}
                        >
                            <div className="member-image-wrapper">
                                <img
                                    src={member.image || defaultAvatar}
                                    alt={member.name}
                                    className="member-image"
                                    loading="lazy"
                                />
                            </div>
                            <div className="member-content">
                                <h3 className="member-name">{member.name}</h3>
                                <p className="member-role" style={{ color: member.color }}>{member.role.toUpperCase()}</p>
                                <p className="member-college-role">{member.collegeRole}</p>
                                <blockquote className="member-quote">
                                    "{member.quote}"
                                </blockquote>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;
