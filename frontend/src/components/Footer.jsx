import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeartbeat, FaArrowUp, FaCode } from 'react-icons/fa';

const Footer = () => {
    const [showTooltip, setShowTooltip] = useState(null);

    // Footer wave animation
    const waveVariants = {
        animate: {
            x: [0, -1000],
            transition: {
                x: {
                    repeat: Infinity,
                    repeatType: "loop",
                    duration: 20,
                    ease: "linear",
                }
            }
        }
    };

    // Social links with descriptive tooltips
    const socialLinks = [
        { id: 'github', icon: FaGithub, url: 'https://github.com/yourusername', tooltip: 'View Code on GitHub' },
        { id: 'linkedin', icon: FaLinkedin, url: 'https://linkedin.com/in/yourusername', tooltip: 'Connect on LinkedIn' },
        { id: 'email', icon: FaEnvelope, url: 'mailto:youremail@example.com', tooltip: 'Send Email' },
        { id: 'code', icon: FaCode, url: '#', tooltip: 'View Project Source' }
    ];

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-b from-gray-800 to-gray-900 text-white pt-12 pb-8 relative overflow-hidden"
        >
            {/* Wave animation in background */}
            <div className="absolute top-0 left-0 w-full overflow-hidden">
                <motion.div
                    variants={waveVariants}
                    animate="animate"
                    className="w-[2000px]"
                >
                    <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="h-16 w-full fill-gray-700">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
                    </svg>
                </motion.div>
            </div>

            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    {/* Logo and about */}
                    <div className="text-center md:text-left">
                        <motion.div
                            className="flex items-center justify-center md:justify-start mb-4"
                            initial={{ x: -50, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                        >
                            <FaHeartbeat className="text-blue-400 text-3xl mr-2" />
                            <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                                Diabetes Predictor
                            </span>
                        </motion.div>
                        <motion.p
                            className="text-gray-400 text-sm"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Providing accurate diabetes risk assessment through advanced machine learning models.
                        </motion.p>
                    </div>

                    {/* Quick links */}
                    <motion.div
                        className="text-center"
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                    >
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
                        <ul className="space-y-2">
                            {['Home', 'ML Overview', 'Prediction', 'About'].map((link) => (
                                <motion.li
                                    key={link}
                                    whileHover={{ x: 5 }}
                                    transition={{ type: "spring", stiffness: 400 }}
                                >
                                    <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-300">
                                        {link}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Contact & Connect */}
                    <motion.div
                        className="text-center md:text-right"
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.5 }}
                    >
                        <h3 className="text-lg font-semibold mb-4 text-gray-200">Connect With Us</h3>
                        <div className="flex justify-center md:justify-end space-x-4">
                            {socialLinks.map((social) => (
                                <div key={social.id} className="relative">
                                    <motion.a
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ y: -5, scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onMouseEnter={() => setShowTooltip(social.id)}
                                        onMouseLeave={() => setShowTooltip(null)}
                                        className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-gray-300 hover:text-white hover:bg-blue-600 transition-all duration-300"
                                    >
                                        <social.icon className="text-xl" />
                                    </motion.a>
                                    {showTooltip === social.id && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-blue-600 text-white text-xs rounded whitespace-nowrap"
                                        >
                                            {social.tooltip}
                                            <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-blue-600"></div>
                                        </motion.div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Divider */}
                <motion.div
                    className="h-px bg-gradient-to-r from-transparent via-gray-500 to-transparent mb-6"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ delay: 0.6, duration: 0.8 }}
                />

                {/* Copyright and back to top */}
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <motion.p
                        className="text-gray-400 text-sm mb-4 md:mb-0"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                    >
                        &copy; {new Date().getFullYear()} Diabetes Predictor. All rights reserved.
                    </motion.p>

                    <motion.button
                        onClick={scrollToTop}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="group flex items-center text-gray-400 hover:text-blue-400 transition-colors duration-300"
                    >
                        <span className="mr-2">Back to top</span>
                        <motion.div
                            animate={{ y: [0, -4, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                            className="bg-gray-700 group-hover:bg-blue-600 rounded-full p-2 transition-colors duration-300"
                        >
                            <FaArrowUp className="text-sm" />
                        </motion.div>
                    </motion.button>
                </div>
            </div>
        </motion.footer>
    );
};

export default Footer;