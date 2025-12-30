import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import './Sponsorship.css';

const PackageCard = ({ tier, price, features, recommended, delay }) => {
    return (
        <motion.div
            className={`package-card ${recommended ? 'recommended' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
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
    const brands = ["Solidworks", "Ansys", "MRF Tyres", "Saktheeswaran", "Auroville Energy", "Airgap Technology"];

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
                    <PackageCard
                        tier="Bronze"
                        price="1k - 5k"
                        features={[
                            "Logo on T-shirt",
                            "Social Media Mentions",
                            "Digital Creative Inclusion"
                        ]}
                        delay={0.1}
                    />
                    <PackageCard
                        tier="Silver"
                        price="6k - 10k"
                        features={[
                            "Vehicle Stickers",
                            "Event Coverage Tags",
                            "Banner/Poster Branding",
                            "All Bronze Benefits"
                        ]}
                        delay={0.2}
                        recommended={true}
                    />
                    <PackageCard
                        tier="Gold"
                        price="11k+"
                        features={[
                            "Prominent Car Branding",
                            "Priority Mentions",
                            "Booklet Logo",
                            "All Silver Benefits"
                        ]}
                        delay={0.3}
                    />
                    <PackageCard
                        tier="Special"
                        price="1L+"
                        features={[
                            "Exclusive Title Sponsor",
                            "Pit Area Display Stand",
                            "High Visibility Branding",
                            "All Gold Benefits"
                        ]}
                        delay={0.4}
                    />
                </div>

                <div className="partners-section">
                    <h3 className="partners-title">Trusted By Industry Leaders</h3>
                    <div className="partners-grid">
                        {brands.map((brand, i) => (
                            <motion.div
                                key={i}
                                className="partner-logo"
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                {brand}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsorship;
