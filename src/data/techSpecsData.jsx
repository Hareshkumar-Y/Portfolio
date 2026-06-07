import React from 'react';
import { FaBolt, FaBatteryFull, FaTachometerAlt, FaDesktop, FaEye } from 'react-icons/fa';

export const techSpecs = [
    {
        icon: <FaBolt />,
        title: "Powertrain",
        specs: [
            "4 kW HSRM Powertrain",
            "High efficiency motor controller",
            "Optimized for solar application"
        ],
        delay: 0.1
    },
    {
        icon: <FaBatteryFull />,
        title: "Energy Storage",
        specs: [
            "60V 100Ah NMC Battery",
            "IP67 Rated Battery Pack",
            "IP67 Rated BMS Protection",
            "600Wh solar panel"
        ],
        delay: 0.2
    },
    {
        icon: <FaTachometerAlt />,
        title: "Performance",
        specs: [
            "3 Drive Modes (Ride modes)",
            "Eco / Boost / Rev optimized",
            "Responsive throttle mapping",
            "60kmph Top Speed"
        ],
        delay: 0.3
    },
    {
        icon: <FaDesktop />,
        title: "Smart Dash",
        specs: [
            "ASTRA ASEV2503 Dashboard",
            "7\" HMI Touch Display",
            "Fully customizable interface"
        ],
        delay: 0.4
    },
    {
        icon: <FaEye />,
        title: "Safety & Vision",
        specs: [
            "Optical Ultrawave Technology",
            "Blind Spot Detection",
            "Distance Measurement"
        ],
        delay: 0.5
    }
];
