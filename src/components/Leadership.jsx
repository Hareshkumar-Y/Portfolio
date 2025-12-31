import React from 'react';
import { motion } from 'framer-motion';
import './Leadership.css';

import CaptainImg from '../assets/captain.png';
import ViceCaptainImg from '../assets/viceCaptain.png';
import ManagerImg from '../assets/manager.png';
import DynamicHeadImg from '../assets/dynamicHead.png';
import StaticHeadImg from '../assets/staticHead.png';
import BusinessHeadImg from '../assets/buissnessHead.png';
import TreasurerImg from '../assets/treasurer.png';
import EventHeadImg from '../assets/EventHead.png';
import MarketingHeadImg from '../assets/marketingHead.png';

const teamMembers = [
    { name: "Sri Prenesh", role: "Captain", color: "#E53935", image: CaptainImg },
    { name: "Raj Shri Varshini", role: "Vice Captain", color: "#43A047", image: ViceCaptainImg },
    { name: "Shenbagaraja", role: "Manager", color: "#1E88E5", image: ManagerImg },
    { name: "Siddharth", role: "Dynamic Head", color: "#FB8C00", image: DynamicHeadImg },
    { name: "Sanjiv B", role: "Static Head", color: "#8E24AA", image: StaticHeadImg },
    { name: "Sahaana", role: "Head of Business", color: "#00ACC1", image: BusinessHeadImg },
    { name: "Navith Sanjay", role: "Treasurer", color: "#546E7A", image: TreasurerImg },
    { name: "Nitin S", role: "Head of Event Division", color: "#FDD835", image: EventHeadImg },
    { name: "Owshick J", role: "Head of Marketing", color: "#D81B60", image: MarketingHeadImg },
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
                                    src={member.image}
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
