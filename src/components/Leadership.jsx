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
    { name: "Sri Prenesh", role: "Captain", collegeRole: "Third Year, Mechatronics Engineering", color: "#E53935", image: CaptainImg, quote: "Leading with vision, driving with passion." },
    { name: "Raj Shri Varshini", role: "Vice Captain", collegeRole: "Third Year, Mechatronics Engineering", color: "#43A047", image: ViceCaptainImg, quote: "Excellence is not an act, but a habit." },
    { name: "Shenbagaraja", role: "Manager", collegeRole: "Third Year, Mechatronics Engineering", color: "#1E88E5", image: ManagerImg, quote: "Efficiency is the key to success." },
    { name: "Siddharth", role: "Dynamic Head", collegeRole: "Third Year, Mechatronics Engineering", color: "#FB8C00", image: DynamicHeadImg, quote: "Motion defines our progress." },
    { name: "Sanjiv B", role: "Static Head", collegeRole: "Third Year, Mechatronics Engineering", color: "#8E24AA", image: StaticHeadImg, quote: "Stability creates the strongest achievements." },
    { name: "Sahaana", role: "Head of Business", collegeRole: "Third Year, Mechatronics Engineering", color: "#00ACC1", image: BusinessHeadImg, quote: "Turning ideas into sustainable value." },
    { name: "Navith Sanjay", role: "Treasurer", collegeRole: "Third Year, Mechatronics Engineering", color: "#546E7A", image: TreasurerImg, quote: "Precision in every calculation." },
    { name: "Nitin S", role: "Head of Event Division", collegeRole: "Third Year, Mechatronics Engineering", color: "#FDD835", image: EventHeadImg, quote: "Creating moments that inspire." },
    { name: "Owshick J", role: "Head of Marketing", collegeRole: "Third Year, Mechatronics Engineering", color: "#D81B60", image: MarketingHeadImg, quote: "Amplifying our voice to the world." },
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

                <div className="mentor-showcase">
                    <div className="mentor-image-wrapper">
                        <img
                            src="https://placehold.co/400x400/263238/FFF?text=Mentor"
                            alt="Team Mentor"
                            className="mentor-image"
                        />
                    </div>
                    <div className="mentor-content">
                        <h3 className="mentor-name">Dr. A. Mentor Name</h3>
                        <p className="mentor-role">MENTOR</p>
                        <p className="mentor-college-role">Assistant Professor, Mechatronics Department</p>
                        <blockquote className="mentor-quote">
                            "Guiding minds to innovate, explore, and conquer new horizons in engineering excellence."
                        </blockquote>
                    </div>
                </div>

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
                            <p className="member-college-role">{member.collegeRole}</p>
                            <p className="member-role" style={{ color: member.color }}>{member.role}</p>
                            <p className="member-quote">"{member.quote}"</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Leadership;
