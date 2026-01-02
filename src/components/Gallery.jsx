import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Gallery.css';

// Import images
import hero1 from '../assets/hero1.jpg';
import hero2 from '../assets/hero2.jpg';
import hero3 from '../assets/hero3.jpg';
import trophy1 from '../assets/trophy1.jpg';
import trophy2 from '../assets/trophy2.jpg';
import trophy3 from '../assets/trophy3.jpg';
import inside1 from '../assets/inside1.jpeg';
import inside2 from '../assets/inside2.jpeg';
import inside3 from '../assets/inside3.jpeg';
import pit1 from '../assets/pit_1.jpg';
import pit2 from '../assets/pit_2.jpg';
import pit3 from '../assets/pit_3.jpg';

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
                        transition={{ duration: 0.5, ease: "easeInOut" }}
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
            transition={{ duration: 0.5, delay: delayOffset }}
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
                    transition={{ duration: 0.5, delay: delayOffset + (index * 0.1) }}
                >
                    <img src={item.src} alt={item.caption} className="gallery-image" />
                    <div className="gallery-overlay">
                        <p className="gallery-caption">{item.caption}</p>
                    </div>
                </motion.div>
            ))}
        </div>
    </div>
);

const Gallery = () => {
    // Carousel Data - High Impact Images
    const carouselSlides = [
        {
            id: 1,
            src: hero1,
            caption: 'The team',
            description: 'Team Astra securing 1st place. Moment that made team anxious.'
        },
        {
            id: 2,
            src: hero2,
            caption: 'The twins of MCT, SKCET',
            description: 'One for speed on tracks, another for precision in every move.'
        },
        {
            id: 3,
            src: hero3,
            caption: 'Unity - The power of team',
            description: 'The power of unity in every move.'
        },
    ];

    // Categorized Data
    const achievements = [
        { id: 'a1', src: trophy1, caption: 'First hand-on' },
        { id: 'a2', src: trophy2, caption: 'It rained trophies' },
        { id: 'a3', src: trophy3, caption: 'The overall winner' },
    ];

    const insideAstra = [
        { id: 'i1', src: inside1, caption: 'The Workshop' },
        { id: 'i2', src: inside2, caption: 'Our car Our work' },
        { id: 'i3', src: inside3, caption: 'The skeleton' },
    ];

    const pitPeek = [
        { id: 'p1', src: pit1, caption: 'Team Spirit' },
        { id: 'p2', src: pit2, caption: 'Pit Stop Action' },
        { id: 'p3', src: pit3, caption: 'Race Day Vibe' },
    ];

    return (
        <section id="gallery" className="gallery-section">
            <div className="container">
                <motion.h2
                    className="section-title text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
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
