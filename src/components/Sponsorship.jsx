import React from 'react';
import { motion } from 'framer-motion';
import { FaCheck } from 'react-icons/fa';
import './Sponsorship.css';

import SolidworksLogo from '../assets/Solidworks.png';
import AnsysLogo from '../assets/ansys.png';
import MrfLogo from '../assets/mrf.png';
import SaktheeswaranLogo from '../assets/saktheeswaran.png';
import AirgapLogo from '../assets/airgap.png';
import UnitekLogo from '../assets/unitek.png';
import InoproLogo from '../assets/inopro.png';
import SlvLogo from '../assets/slv.png';
import GpLogo from '../assets/gp.png';
import AurovilleLogo from '../assets/auroville.png';
import SakthiLogo from '../assets/sakthe.png';
import EswaraLogo from '../assets/eswara.png';

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
    const allBrands = [
        { name: "Solidworks", logo: SolidworksLogo },
        { name: "Ansys", logo: AnsysLogo },
        { name: "MRF Tyres", logo: MrfLogo },
        { name: "Saktheeswaran", logo: SaktheeswaranLogo },
        { name: "Airgap Technology", logo: AirgapLogo },
        { name: "UinTek hydraulics", logo: UnitekLogo },
        { name: "Inopro solutions", logo: InoproLogo },
        { name: "SLV-PRO MECA", logo: SlvLogo },
        { name: "GP industries", logo: GpLogo },
        { name: "Auroville Energy", logo: AurovilleLogo },
        { name: "Eco fab", logo: null }, // No logo available
        { name: "Sakthi Tools", logo: SakthiLogo },
        { name: "Easwara agro", logo: EswaraLogo }
    ];

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
                                    duration: 80,
                                    ease: "linear"
                                }
                            }}
                        >
                            {[...brandsRow1, ...brandsRow1].map((brand, i) => (
                                <div key={i} className="partner-logo">
                                    {brand.logo ? (
                                        <img src={brand.logo} alt={brand.name} className="partner-logo-img" />
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
                                    duration: 80,
                                    ease: "linear"
                                }
                            }}
                            style={{ marginTop: '30px' }}
                        >
                            {[...brandsRow2, ...brandsRow2].map((brand, i) => (
                                <div key={i} className="partner-logo">
                                    {brand.logo ? (
                                        <img src={brand.logo} alt={brand.name} className="partner-logo-img" />
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
