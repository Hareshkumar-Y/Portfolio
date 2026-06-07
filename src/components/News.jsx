import React from 'react';
import { motion } from 'framer-motion';
import { FaRegCalendarAlt, FaChevronRight } from 'react-icons/fa';
import { newsPosts } from '../data/newsData';
import './News.css';

const NewsCard = ({ image, category, date, title, description, delay }) => {
    return (
        <motion.div
            className="news-card"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5, ease: 'easeOut' }}
            whileHover={{ y: -10 }}
        >
            <div className="news-image-wrapper">
                <img src={image} alt={title} className="news-image" loading="lazy" />
                <span className="news-category-tag">{category}</span>
            </div>
            <div className="news-content">
                <div className="news-date">
                    <FaRegCalendarAlt /> {date}
                </div>
                <h3 className="news-title">{title}</h3>
                <p className="news-description">{description}</p>
                <div className="news-footer">
                    <span className="read-more-link">
                        Read Story <FaChevronRight className="icon-arrow" />
                    </span>
                </div>
            </div>
        </motion.div>
    );
};

const News = () => {
    return (
        <section id="news" className="news-section">
            <div className="container">
                <motion.div
                    className="news-section-header text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    <h2 className="section-title">News & Announcements</h2>
                    <p className="section-subtitle">
                        Stay informed about Team ASTRA's latest updates, track events, and engineering breakthroughs.
                    </p>
                </motion.div>

                <div className="news-grid">
                    {newsPosts.map((post, index) => (
                        <NewsCard
                            key={post.id}
                            image={post.image}
                            category={post.category}
                            date={post.date}
                            title={post.title}
                            description={post.description}
                            delay={0.1 + index * 0.15}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default News;
