import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MLOverviewPage = () => {
    // Animation variants for staggered animations
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50">
            <Header />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="container mx-auto px-4 py-12"
            >
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-bold text-gray-800 mb-6">
                        Machine Learning Overview
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Discover how machine learning powers our diabetes prediction tool, enabling early risk assessment through pattern recognition in health data.
                    </p>
                </div>

                {/* ML Introduction Section */}
                <motion.div
                    className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <h2 className="text-3xl font-semibold text-gray-800 mb-6">
                        What is Machine Learning?
                    </h2>

                    <div className="flex flex-col md:flex-row items-center mb-8">
                        <div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
                            <p className="text-gray-600 mb-4">
                                Machine learning is a branch of artificial intelligence that enables computers to learn from data and make predictions without being explicitly programmed.
                            </p>
                            <p className="text-gray-600">
                                For diabetes prediction, our models analyze patterns in patient data such as glucose levels, BMI, blood pressure, and other health metrics to identify risk factors and predict likelihood of diabetes development.
                            </p>
                        </div>
                        <div className="md:w-1/2 flex justify-center">
                            <img
                                src="/ml.png"
                                alt="Machine Learning Concept Diagram"
                                className="rounded-lg shadow-md"
                            />
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">
                            How Our Model Works
                        </h3>
                        <ol className="list-decimal list-inside text-gray-600 space-y-2">
                            <li>Collection of health data (glucose levels, BMI, etc.)</li>
                            <li>Data preprocessing and normalization</li>
                            <li>Feature selection to identify key indicators</li>
                            <li>Training multiple classifier models</li>
                            <li>Model evaluation and selection</li>
                            <li>Prediction based on user-entered data</li>
                        </ol>
                    </div>
                </motion.div>

                {/* Classifier Section */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="max-w-4xl mx-auto mb-12"
                >
                    <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
                        Classifiers Used in Our Model
                    </h2>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* SVM Classifier */}
                        <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="bg-blue-100 p-3 rounded-full mr-4">
                                    <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">Support Vector Machine (SVM)</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                SVM works by finding the optimal hyperplane that separates classes in high-dimensional space, making it effective for diabetes prediction with multiple health metrics.
                            </p>
                            <div className="flex justify-center">
                                <img
                                    src="/svm.png"
                                    alt="SVM Classifier Visualization"
                                    className="rounded-lg shadow-sm"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <Link
                                    to="/svm"
                                    className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300"
                                >
                                    Read More
                                </Link>
                            </div>
                        </motion.div>

                        {/* Random Forest Classifier */}
                        <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="bg-green-100 p-3 rounded-full mr-4">
                                    <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">Random Forest</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Random Forest combines multiple decision trees to make predictions, providing robust results by averaging predictions across trees and reducing overfitting.
                            </p>
                            <div className="flex justify-center">
                                <img
                                    src="/rf.png"
                                    alt="Random Forest Visualization"
                                    className="rounded-lg shadow-sm"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <Link
                                    to="/rf"
                                    className="inline-block px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition duration-300"
                                >
                                    Read More
                                </Link>
                            </div>
                        </motion.div>

                        {/* K-Nearest Neighbors Classifier */}
                        <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="bg-purple-100 p-3 rounded-full mr-4">
                                    <svg className="h-8 w-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">K-Nearest Neighbors (KNN)</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                KNN classifies new data points based on the majority class of their k nearest neighbors, making it intuitive for identifying diabetes risks based on similar patient profiles.
                            </p>
                            <div className="flex justify-center">
                                <img
                                    src="/knn.png"
                                    alt="KNN Classifier Visualization"
                                    className="rounded-lg shadow-sm"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <Link
                                    to="/knn"
                                    className="inline-block px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 transition duration-300"
                                >
                                    Read More
                                </Link>
                            </div>
                        </motion.div>

                        {/* Decision Tree Classifier */}
                        <motion.div variants={itemVariants} className="bg-white p-6 rounded-lg shadow-lg">
                            <div className="flex items-center mb-4">
                                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                                    <svg className="h-8 w-8 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                                    </svg>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800">Decision Tree</h3>
                            </div>
                            <p className="text-gray-600 mb-4">
                                Decision Trees create a flowchart-like structure to make decisions based on feature values, providing transparent and interpretable predictions for diabetes risk factors.
                            </p>
                            <div className="flex justify-center">
                                <img
                                    src="/dt.png"
                                    alt="Decision Tree Visualization"
                                    className="rounded-lg shadow-sm"
                                />
                            </div>
                            <div className="mt-4 text-center">
                                <Link
                                    to="/dt"
                                    className="inline-block px-4 py-2 bg-yellow-600 text-white rounded hover:bg-yellow-700 transition duration-300"
                                >
                                    Read More
                                </Link>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Model Performance Graph */}
                <motion.div
                    className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                        Model Performance Comparison
                    </h2>
                    <div className="flex justify-center">
                        <img
                            src="/image.png"
                            alt="Classifier Performance Comparison"
                            className="rounded-lg shadow-md"
                        />
                    </div>
                    <div className="mt-6 text-gray-600">
                        <p>
                            Our evaluations show that combining these four classifiers provides more reliable diabetes predictions than any single model. Each classifier excels in different aspects of the prediction task:
                        </p>
                        <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2">
                            <li className="flex items-center">
                                <span className="h-3 w-3 rounded-full bg-blue-500 mr-2"></span>
                                <span>SVM: 82% accuracy</span>
                            </li>
                            <li className="flex items-center">
                                <span className="h-3 w-3 rounded-full bg-green-500 mr-2"></span>
                                <span>Random Forest: 85% accuracy</span>
                            </li>
                            <li className="flex items-center">
                                <span className="h-3 w-3 rounded-full bg-purple-500 mr-2"></span>
                                <span>KNN: 79% accuracy</span>
                            </li>
                            <li className="flex items-center">
                                <span className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></span>
                                <span>Decision Tree: 76% accuracy</span>
                            </li>
                        </ul>
                    </div>
                </motion.div>

                {/* CTA Section */}
                <div className="text-center">
                    <Link
                        to="/prediction"
                        className="inline-block px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-lg hover:bg-blue-700 transition duration-300 shadow-lg"
                    >
                        Let's Predict Your Diabetes Risk
                    </Link>
                    <p className="text-gray-600 mt-4">
                        Take the first step toward proactive health management
                    </p>
                </div>
            </motion.div>

            <Footer />
        </div>
    );
};

export default MLOverviewPage;