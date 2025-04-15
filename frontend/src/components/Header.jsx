import React from 'react';
import { motion } from 'framer-motion';
import { FaHome, FaBrain, FaChartLine, FaHeartbeat } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
    const navItems = [
        { to: '/', icon: FaHome, text: 'Home' },
        { to: '/ml-overview', icon: FaBrain, text: 'ML Overview' },
        { to: '/prediction', icon: FaChartLine, text: 'Predict' }
    ];

    return (
        <motion.header
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
                duration: 0.8,
                ease: "easeOut"
            }}
            className="bg-gradient-to-r from-blue-50 to-indigo-50 shadow-lg border-b border-blue-100"
        >
            <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:justify-between md:items-center">
                {/* Logo Section */}
                <Link to="/" className="flex items-center group">
                    <motion.div
                        className="text-3xl mr-2 text-blue-600"
                        animate={{ rotate: [0, 10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    >
                        <FaHeartbeat />
                    </motion.div>
                    <div className="flex flex-col">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                        >
                            Diabetes Predictor
                        </motion.div>
                        <span className="text-xs text-gray-500 -mt-1">Powered by Machine Learning</span>
                    </div>
                </Link>

                {/* Navigation */}
                <nav className="flex mt-4 md:mt-0 space-x-2 md:space-x-6">
                    {navItems.map((item, index) => (
                        <Link
                            key={item.to}
                            to={item.to}
                            className="group flex items-center px-3 py-2 rounded-lg hover:bg-white hover:shadow-md transition-all duration-300"
                        >
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 * index + 0.5 }}
                                className="flex items-center"
                            >
                                <item.icon className="mr-2 text-blue-500 group-hover:text-blue-700 transition-colors duration-300" />
                                <span className="text-gray-700 group-hover:text-blue-600 font-medium transition-colors duration-300">
                                    {item.text}
                                </span>
                            </motion.div>
                        </Link>
                    ))}

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="ml-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                    >
                        Get Started
                    </motion.button>
                </nav>
            </div>
        </motion.header>
    );
};

export default Header;