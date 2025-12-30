import React from 'react';
import { motion } from 'framer-motion';
import './Leadership.css';

const teamMembers = [
    { name: "Sri Prenesh", role: "Captain", color: "#E53935" },
    { name: "Raj Shri Varshini", role: "Vice Captain", color: "#43A047" },
    { name: "Shenbagaraja", role: "Manager", color: "#1E88E5" },
    { name: "Siddharth", role: "Dynamic Head", color: "#FB8C00" },
    { name: "Sanjiv B", role: "Static Head", color: "#8E24AA" },
    { name: "Sahaana", role: "Head of Business", color: "#00ACC1" },
    { name: "Navith Sanjay", role: "Treasurer", color: "#546E7A" },
    { name: "Nitin S", role: "Head of Event Division", color: "#FDD835" },
    { name: "Owshick J", role: "Head of Marketing", color: "#D81B60" },
];

const Leadership = () => {
    return (
        <section id="team" className="team-section">
            <div className="container">
                <motion.h2
                    className="section-title text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Meet The Leadership
                </motion.h2>

                <div className="team-grid">
                    {teamMembers.map((member, index) => (
                        <motion.div
                            key={index}
                            className="team-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                        >
                            <div className="member-image-wrapper">
                                <img
                                    src={`https://ui-avatars.com/api/?name=${member.name}&background=random&color=fff&size=128`}
                                    alt={member.name}
                                    className="member-image"
                                />
                            </div>
                            <h3 className="member-name">{member.name}</h3>
                            <p className="member-role" style={{ color: member.color }}>{member.role}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;
