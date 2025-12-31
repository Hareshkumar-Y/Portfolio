import React from 'react';
import { motion } from 'framer-motion';
import './Background.css';

const Background = () => {
    return (
        <div className="global-background">
            {/* Large floating Red Blob */}
            <motion.div
                className="blob blob-red-1"
                animate={{
                    x: [0, 100, -50, 0],
                    y: [0, -50, 100, 0],
                    rotate: [0, 360],
                    scale: [1, 1.2, 0.9, 1]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
            />

            {/* Floating White/Grey Blob */}
            <motion.div
                className="blob blob-white-1"
                animate={{
                    x: [0, -80, 40, 0],
                    y: [0, 60, -80, 0],
                    scale: [1, 1.3, 0.8, 1]
                }}
                transition={{
                    duration: 25,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />

            {/* Secondary Red Blob */}
            <motion.div
                className="blob blob-red-2"
                animate={{
                    x: [0, -40, 80, 0],
                    y: [0, 100, -50, 0],
                    rotate: [0, -180, 0],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
            />
        </div>
    );
};

export default Background;
