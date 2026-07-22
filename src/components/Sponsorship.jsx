import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import { sponsorPackages, allBrands } from '../data/sponsorshipData';
import './Sponsorship.css';

const PackageCard = ({ tier, price, features, recommended, delay }) => {
    return (
        <motion.div
            className={`package-card ${recommended ? 'recommended' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: delay * 0.57, duration: 0.28 }}
            whileHover={{ y: -10 }}
        >
            {recommended && <div className="badge">Best Value</div>}
            <h3 className="package-tier">{tier}</h3>
            <p className="package-price">₹{price}</p>
            <ul className="package-features">
                {features.map((feature, i) => (
                    <li key={i}><FaCheck className="check-icon" /> {feature}</li>
                ))}
            </ul>
            <a href="#contact" className="btn-sponsor">Support Us</a>
        </motion.div>
    );
};

const Sponsorship = () => {
    // Split brands into two relatively equal parts
    const splitIndex = Math.ceil(allBrands.length / 2);
    const brandsRow1 = allBrands.slice(0, splitIndex);
    const brandsRow2 = allBrands.slice(splitIndex);

    return (
        <section id="sponsors" className="sponsorship-section">
            <div className="container">
                <div className="sponsor-header text-center">
                    <motion.h2
                        className="section-title"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                    >
                        Sponsorship & Partners
                    </motion.h2>
                    <p className="sponsor-intro">
                        Join us in driving the future of sustainable mobility. Sponsorship offers visibility among students, faculty, and industry professionals.
                    </p>
                </div>

                <div className="packages-grid">
                    {sponsorPackages.map((pkg, index) => (
                        <PackageCard
                            key={index}
                            tier={pkg.tier}
                            price={pkg.price}
                            features={pkg.features}
                            delay={pkg.delay}
                            recommended={pkg.recommended}
                        />
                    ))}
                </div>

                <div className="partners-section">
                    <h3 className="partners-title">Trusted By Industry Leaders</h3>

                    <div className="partners-carousel-wrapper">
                        {/* Row 1 - Scroll Left */}
                        <motion.div
                            className="partners-track"
                            animate={{
                                x: ["0%", "-50%"]
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 45.7,
                                    ease: "linear"
                                }
                            }}
                        >
                            {[...brandsRow1, ...brandsRow1].map((brand, i) => (
                                <div key={i} className="partner-logo">
                                    {brand.logo ? (
                                        <img src={brand.logo} alt={brand.name} className="partner-logo-img" loading="lazy" />
                                    ) : (
                                        <span className="brand-name">{brand.name}</span>
                                    )}
                                </div>
                            ))}
                        </motion.div>

                        {/* Row 2 - Scroll Right */}
                        <motion.div
                            className="partners-track"
                            animate={{
                                x: ["-50%", "0%"]
                            }}
                            transition={{
                                x: {
                                    repeat: Infinity,
                                    repeatType: "loop",
                                    duration: 45.7,
                                    ease: "linear"
                                }
                            }}
                            style={{ marginTop: '30px' }}
                        >
                            {[...brandsRow2, ...brandsRow2].map((brand, i) => (
                                <div key={i} className="partner-logo">
                                    {brand.logo ? (
                                        <img src={brand.logo} alt={brand.name} className="partner-logo-img" loading="lazy" />
                                    ) : (
                                        <span className="brand-name">{brand.name}</span>
                                    )}
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsorship;

