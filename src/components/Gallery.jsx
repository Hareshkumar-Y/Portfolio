import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { carouselSlides, achievements, insideAstra, pitPeek } from '../data/galleryData';
import './Gallery.css';

const HeroCarousel = ({ slides }) => {
    const scrollRef = useRef(null);
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const container = scrollRef.current;
                const nextScroll = container.scrollLeft + container.clientWidth;
                const maxScroll = container.scrollWidth - container.clientWidth;
                container.scrollTo({ left: nextScroll > maxScroll ? 0 : nextScroll, behavior: 'smooth' });
            }
        }, 4500);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero-carousel-container">
            <div className="hero-carousel-scroll" ref={scrollRef} aria-label="Gallery highlights">
                {slides.map((slide) => (
                    <article
                        key={slide.id}
                        className="hero-carousel-card simple"
                        onClick={() => setSelectedImage(slide)}
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                setSelectedImage(slide);
                            }
                        }}
                    >
                        <img src={slide.src} alt={slide.caption} className="hero-carousel-image" loading="lazy" />
                        <div className="hero-carousel-card-overlay">
                            <h3>{slide.caption}</h3>
                            <p>{slide.description}</p>
                        </div>
                    </article>
                ))}
            </div>

            {selectedImage && (
                <div className="image-popup-overlay" role="dialog" aria-modal="true">
                    <div className="image-popup-content">
                        <button
                            type="button"
                            className="popup-close-btn"
                            onClick={() => setSelectedImage(null)}
                            aria-label="Close image preview"
                        >
                            ×
                        </button>
                        <img src={selectedImage.src} alt={selectedImage.caption} className="popup-image" />
                        <div className="popup-caption">
                            <h3>{selectedImage.caption}</h3>
                            <p>{selectedImage.description}</p>
                        </div>
                    </div>
                </div>
            )}
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

