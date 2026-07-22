import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { carouselSlides, achievements, insideAstra, pitPeek } from '../data/galleryData';
import './Gallery.css';

const HeroCarousel = ({ slides }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
    };

    return (
        <div className="hero-carousel-container">
            <div className="hero-carousel-track">
                <AnimatePresence mode='wait'>
                    <motion.div
                        key={currentIndex}
                        className="hero-carousel-slide"
                        initial={{ opacity: 0, x: 100 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -100 }}
                        transition={{ duration: 0.28, ease: "easeInOut" }}
                    >
                        <img src={slides[currentIndex].src} alt={slides[currentIndex].caption} className="hero-carousel-image" />
                        <div className="hero-carousel-overlay">
                            <h3>{slides[currentIndex].caption}</h3>
                            <p>{slides[currentIndex].description}</p>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            <button className="carousel-nav-btn prev" onClick={prevSlide}><FaChevronLeft /></button>
            <button className="carousel-nav-btn next" onClick={nextSlide}><FaChevronRight /></button>

            <div className="carousel-indicators">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
};

const GallerySection = ({ title, items, delayOffset = 0 }) => (
    <div className="gallery-category-section">
        <motion.h3
            className="category-title"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.28, delay: delayOffset * 0.57 }}
        >
            {title}
        </motion.h3>
        <div className="gallery-grid">
            {items.map((item, index) => (
                <motion.div
                    key={item.id}
                    className="gallery-item"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.28, delay: delayOffset * 0.57 + (index * 0.06) }}
                >
                    <img src={item.src} alt={item.caption} className="gallery-image" loading="lazy" />
                    <div className="gallery-overlay">
                        <p className="gallery-caption">{item.caption}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

const Gallery = () => {
    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <motion.h2
                    className="section-title text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.28 }}
                >
                    Gallery
                </motion.h2>

                <HeroCarousel slides={carouselSlides} />

                <GallerySection title="Achievement Highlights" items={achievements} delayOffset={0.2} />
                <GallerySection title="A Peek Into The Pit" items={pitPeek} delayOffset={0.3} />
                <GallerySection title="Inside Astra" items={insideAstra} delayOffset={0.4} />
            </div>
        </section>
    );
};

export default Gallery;

