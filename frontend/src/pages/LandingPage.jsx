import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {
    Activity,
    Heart,
    Award,
    Clock,
    Database,
    Zap,
    PieChart,
    Brain,
    Droplet,
    AlertTriangle,
    Shield,
    Users,
    Clipboard,
    Utensils,
    Footprints,
    Pill
} from 'lucide-react';

const LandingPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeTab, setActiveTab] = useState('type1');
    const [isInView, setIsInView] = useState({
        stats: false,
        features: false,
        types: false,
        symptoms: false,
        prevention: false,
        models: false
    });

    const statsRef = useRef(null);
    const featuresRef = useRef(null);
    const typesRef = useRef(null);
    const symptomsRef = useRef(null);
    const preventionRef = useRef(null);
    const modelsRef = useRef(null);

    const statsControls = useAnimation();
    const featuresControls = useAnimation();
    const typesControls = useAnimation();
    const symptomsControls = useAnimation();
    const preventionControls = useAnimation();
    const modelsControls = useAnimation();

    useEffect(() => {
        setIsVisible(true);

        const timer = setTimeout(() => {
            const cards = document.querySelectorAll('.stat-card');
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.add('animate-pulse');
                    setTimeout(() => {
                        card.classList.remove('animate-pulse');
                    }, 1000);
                }, index * 300);
            });
        }, 1500);

        // Set up intersection observers for each section
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        if (entry.target === statsRef.current) {
                            setIsInView(prev => ({ ...prev, stats: true }));
                            statsControls.start({ opacity: 1, y: 0 });
                        } else if (entry.target === featuresRef.current) {
                            setIsInView(prev => ({ ...prev, features: true }));
                            featuresControls.start({ opacity: 1, y: 0 });
                        } else if (entry.target === typesRef.current) {
                            setIsInView(prev => ({ ...prev, types: true }));
                            typesControls.start({ opacity: 1, y: 0 });
                        } else if (entry.target === symptomsRef.current) {
                            setIsInView(prev => ({ ...prev, symptoms: true }));
                            symptomsControls.start({ opacity: 1, y: 0 });
                        } else if (entry.target === preventionRef.current) {
                            setIsInView(prev => ({ ...prev, prevention: true }));
                            preventionControls.start({ opacity: 1, y: 0 });
                        } else if (entry.target === modelsRef.current) {
                            setIsInView(prev => ({ ...prev, models: true }));
                            modelsControls.start({ opacity: 1, y: 0 });
                        }
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (statsRef.current) observer.observe(statsRef.current);
        if (featuresRef.current) observer.observe(featuresRef.current);
        if (typesRef.current) observer.observe(typesRef.current);
        if (symptomsRef.current) observer.observe(symptomsRef.current);
        if (preventionRef.current) observer.observe(preventionRef.current);
        if (modelsRef.current) observer.observe(modelsRef.current);

        return () => {
            clearTimeout(timer);
            observer.disconnect();
        };
    }, [statsControls, featuresControls, typesControls, symptomsControls, preventionControls, modelsControls]);

    const stats = [
        { icon: <Activity size={24} />, title: "422 Million", description: "Adults with diabetes worldwide" },
        { icon: <Clock size={24} />, title: "50%", description: "People with diabetes remain undiagnosed" },
        { icon: <Heart size={24} />, title: "2-3x", description: "Higher risk of heart attacks and strokes" },
        { icon: <Award size={24} />, title: "95% Accuracy", description: "In our prediction models" }
    ];

    const features = [
        {
            icon: <Database size={32} className="text-blue-500" />,
            title: "Advanced Data Processing",
            description: "Using comprehensive health metrics for accurate analysis"
        },
        {
            icon: <Zap size={32} className="text-purple-500" />,
            title: "Real-time Predictions",
            description: "Get instant risk assessment based on your health indicators"
        },
        {
            icon: <PieChart size={32} className="text-green-500" />,
            title: "Visual Analytics",
            description: "Interactive charts to understand your health metrics"
        },
        {
            icon: <Brain size={32} className="text-red-500" />,
            title: "Multi-Model Intelligence",
            description: "Four different ML classifiers for reliable predictions"
        }
    ];

    const diabetesTypes = {
        type1: {
            title: "Type 1 Diabetes",
            description: "An autoimmune condition where the body attacks and destroys insulin-producing cells in the pancreas. Usually diagnosed in children and young adults.",
            facts: [
                "Affects approximately 5-10% of all diabetes cases",
                "Not preventable or related to lifestyle",
                "Requires insulin therapy for life",
                "Symptoms typically develop quickly"
            ],
            icon: <Shield size={48} className="text-blue-500" />
        },
        type2: {
            title: "Type 2 Diabetes",
            description: "The body becomes resistant to insulin or doesn't produce enough. Most common type, typically developing in adults and related to lifestyle factors.",
            facts: [
                "Accounts for 90-95% of all diabetes cases",
                "Often develops gradually over years",
                "Can be managed with lifestyle changes",
                "Risk increases with age, obesity, and inactivity"
            ],
            icon: <Users size={48} className="text-purple-500" />
        },
        gestational: {
            title: "Gestational Diabetes",
            description: "Develops during pregnancy when the body cannot produce enough insulin to meet increased needs. Usually resolves after childbirth.",
            facts: [
                "Affects 2-10% of pregnancies",
                "Increases risk of type 2 diabetes later",
                "Can affect the baby's health",
                "Managed with diet, exercise, and sometimes insulin"
            ],
            icon: <Heart size={48} className="text-pink-500" />
        },
        prediabetes: {
            title: "Prediabetes",
            description: "Blood sugar levels are higher than normal but not high enough to be classified as type 2 diabetes. An important warning sign.",
            facts: [
                "Affects 88 million adults in the US alone",
                "Most don't know they have it",
                "Can be reversed with lifestyle changes",
                "Without intervention, often progresses to type 2"
            ],
            icon: <AlertTriangle size={48} className="text-yellow-500" />
        }
    };

    const symptoms = [
        {
            icon: <Droplet size={32} className="text-blue-500" />,
            title: "Increased Thirst",
            description: "Excessive thirst (polydipsia) is one of the classic symptoms"
        },
        {
            icon: <Clipboard size={32} className="text-red-500" />,
            title: "Frequent Urination",
            description: "Passing urine more often than usual, especially at night"
        },
        {
            icon: <AlertTriangle size={32} className="text-yellow-500" />,
            title: "Unexplained Weight Loss",
            description: "Losing weight without trying, particularly in type 1"
        },
        {
            icon: <Activity size={32} className="text-green-500" />,
            title: "Fatigue",
            description: "Feeling very tired despite adequate rest"
        },
        {
            icon: <Zap size={32} className="text-purple-500" />,
            title: "Blurred Vision",
            description: "Vision changes due to fluid changes in eye tissues"
        },
        {
            icon: <Clock size={32} className="text-orange-500" />,
            title: "Slow-Healing Wounds",
            description: "Cuts and wounds take longer to heal than usual"
        }
    ];

    const preventionSteps = [
        {
            icon: <Utensils size={48} className="text-green-500" />,
            title: "Healthy Diet",
            description: "Focus on fruits, vegetables, whole grains, and lean proteins. Limit processed foods, sugary drinks, and excessive carbohydrates.",
            animation: "slideRight"
        },
        {
            icon: <Footprints size={48} className="text-blue-500" />,
            title: "Regular Exercise",
            description: "Aim for at least 150 minutes of moderate activity per week. Both aerobic exercise and strength training are beneficial.",
            animation: "slideLeft"
        },
        {
            icon: <Activity size={48} className="text-red-500" />,
            title: "Weight Management",
            description: "Even modest weight loss (5-7% of body weight) can significantly reduce diabetes risk in overweight individuals.",
            animation: "slideRight"
        },
        {
            icon: < Pill size={48} className="text-purple-500" />,
            title: "Regular Check-ups",
            description: "Monitor blood glucose, blood pressure, and cholesterol levels. Early detection allows for better outcomes.",
            animation: "slideLeft"
        }
    ];

    const getAnimationVariant = (type) => {
        switch (type) {
            case 'slideRight':
                return {
                    hidden: { x: -100, opacity: 0 },
                    visible: { x: 0, opacity: 1 }
                };
            case 'slideLeft':
                return {
                    hidden: { x: 100, opacity: 0 },
                    visible: { x: 0, opacity: 1 }
                };
            default:
                return {
                    hidden: { y: 50, opacity: 0 },
                    visible: { y: 0, opacity: 1 }
                };
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50">
            <Header />

            {/* Hero Section */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: isVisible ? 1 : 0 }}
                transition={{ duration: 1 }}
                className="relative overflow-hidden py-16 md:py-24"
            >
                <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.6 }}
                    transition={{ delay: 1, duration: 2, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute -right-24 top-12 w-64 h-64 rounded-full bg-blue-400 filter blur-3xl"
                />

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 0.4 }}
                    transition={{ delay: 1.5, duration: 2.5, repeat: Infinity, repeatType: "reverse" }}
                    className="absolute -left-24 bottom-12 w-64 h-64 rounded-full bg-purple-400 filter blur-3xl"
                />

                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col md:flex-row items-center">
                        <motion.div
                            initial={{ x: -100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.8 }}
                            className="md:w-1/2 text-center md:text-left mb-8 md:mb-0"
                        >
                            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4 leading-tight">
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                >
                                    Predict
                                </motion.span>{" "}
                                <motion.span
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 1.1, duration: 0.5 }}
                                    className="text-blue-600 relative"
                                >
                                    Diabetes Risk
                                    <motion.span
                                        initial={{ scaleX: 0 }}
                                        animate={{ scaleX: 1 }}
                                        transition={{ delay: 1.6, duration: 0.8 }}
                                        className="absolute bottom-0 left-0 h-1 bg-blue-600 w-full origin-left"
                                    />
                                </motion.span>{" "}
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 1.4, duration: 0.5 }}
                                >
                                    With AI Precision
                                </motion.span>
                            </h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 1.7, duration: 0.8 }}
                                className="text-xl text-gray-600 mb-8 max-w-lg"
                            >
                                Our advanced machine learning platform provides early detection and personalized insights to manage your health proactively.
                            </motion.p>
                            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 2, duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to="/prediction"
                                        className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center"
                                    >
                                        <span>Get Your Prediction</span>
                                        <motion.span
                                            animate={{ x: [0, 5, 0] }}
                                            transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                                            className="ml-2"
                                        >
                                            →
                                        </motion.span>
                                    </Link>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 2.2, duration: 0.5 }}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    <Link
                                        to="/ml-overview"
                                        className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition duration-300 border border-blue-600 shadow-lg"
                                    >
                                        Learn How It Works
                                    </Link>
                                </motion.div>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ x: 100, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.8 }}
                            className="md:w-1/2"
                        >
                            <div className="relative">
                                <motion.div
                                    animate={{
                                        opacity: [0.5, 0.8, 0.5],
                                        scale: [0.98, 1.02, 0.98]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                    className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75"
                                ></motion.div>
                                <div className="relative bg-white rounded-lg overflow-hidden shadow-xl">
                                    <img
                                        src="/lp.png"
                                        alt="AI Diabetes Prediction Dashboard"
                                        className="w-full h-auto"
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                        <p className="text-white font-medium">Advanced ML-powered health analytics dashboard</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </motion.div>

            {/* Stats Section */}
            <section ref={statsRef} className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={statsControls}
                        transition={{ duration: 0.7 }}
                        className="grid grid-cols-2 lg:grid-cols-4 gap-6"
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ y: 50, opacity: 0 }}
                                animate={isInView.stats ? { y: 0, opacity: 1 } : {}}
                                transition={{ delay: 0.2 * index, duration: 0.5 }}
                                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                                className="stat-card bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-lg shadow-md text-center border border-blue-100"
                            >
                                <motion.div
                                    className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 text-blue-600 rounded-full mb-4"
                                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                                    transition={{ duration: 2, delay: index * 0.3, repeat: Infinity, repeatDelay: 4 }}
                                >
                                    {stat.icon}
                                </motion.div>
                                <h3 className="text-2xl font-bold text-gray-800 mb-1">{stat.title}</h3>
                                <p className="text-gray-600">{stat.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Understanding Diabetes Types */}
            <section ref={typesRef} className="py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={typesControls}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Understanding Different <span className="text-blue-600">Types of Diabetes</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Diabetes comes in several forms, each with unique characteristics, causes, and management approaches.
                        </p>
                    </motion.div>

                    <div className="mb-8">
                        <div className="flex flex-wrap justify-center gap-4 mb-8">
                            {Object.keys(diabetesTypes).map((type) => (
                                <motion.button
                                    key={type}
                                    onClick={() => setActiveTab(type)}
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === type
                                        ? 'bg-blue-600 text-white shadow-lg'
                                        : 'bg-white text-gray-600 hover:bg-blue-50'
                                        }`}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {diabetesTypes[type].title}
                                </motion.button>
                            ))}
                        </div>

                        <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="p-8"
                                >
                                    <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                                        <motion.div
                                            className="flex-shrink-0 p-6 bg-blue-50 rounded-full"
                                            animate={{
                                                scale: [1, 1.05, 1],
                                                rotate: [0, 5, 0, -5, 0]
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                repeatType: "reverse"
                                            }}
                                        >
                                            {diabetesTypes[activeTab].icon}
                                        </motion.div>
                                        <div className="flex-grow text-center md:text-left">
                                            <h3 className="text-2xl font-bold text-gray-800 mb-4">{diabetesTypes[activeTab].title}</h3>
                                            <p className="text-gray-600 mb-6">{diabetesTypes[activeTab].description}</p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {diabetesTypes[activeTab].facts.map((fact, index) => (
                                                    <motion.div
                                                        key={index}
                                                        initial={{ opacity: 0, x: -10 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.1 * index }}
                                                        className="flex items-start"
                                                    >
                                                        <span className="flex-shrink-0 h-5 w-5 bg-blue-500 rounded-full mr-2 mt-1"></span>
                                                        <span>{fact}</span>
                                                    </motion.div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </section>

            {/* Common Symptoms */}
            <section ref={symptomsRef} className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={symptomsControls}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Common <span className="text-red-500">Symptoms</span> to Watch For
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Recognizing these warning signs early can lead to better outcomes through timely intervention.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {symptoms.map((symptom, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView.symptoms ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.15 * index, duration: 0.5 }}
                                whileHover={{
                                    y: -10,
                                    boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                                    transition: { duration: 0.3 }
                                }}
                                className="bg-white rounded-lg p-6 shadow-md border border-blue-100 hover:border-blue-300 transition-all duration-300"
                            >
                                <motion.div
                                    animate={{
                                        y: [0, -5, 0],
                                        rotateZ: [0, 5, 0, -5, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        delay: index * 0.2,
                                        repeat: Infinity,
                                        repeatDelay: 3
                                    }}
                                    className="mb-4"
                                >
                                    {symptom.icon}
                                </motion.div>
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{symptom.title}</h3>
                                <p className="text-gray-600">{symptom.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Prevention Tips */}
            <section ref={preventionRef} className="py-16 bg-gradient-to-r from-green-50 to-blue-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={preventionControls}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            <span className="text-green-600">Prevention</span> is Better Than Cure
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Simple lifestyle changes can significantly reduce your risk of developing type 2 diabetes.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {preventionSteps.map((step, index) => (
                            <motion.div
                                key={index}
                                variants={getAnimationVariant(step.animation)}
                                initial="hidden"
                                animate={isInView.prevention ? "visible" : "hidden"}
                                transition={{ delay: 0.3 * index, duration: 0.6 }}
                                className="bg-white rounded-xl p-6 shadow-lg flex items-start gap-6 hover:shadow-xl transition-all duration-300"
                            >
                                <motion.div
                                    animate={{
                                        scale: [1, 1.1, 1],
                                        rotate: index % 2 === 0 ? [0, 10, 0] : [0, -10, 0]
                                    }}
                                    transition={{
                                        duration: 3,
                                        repeat: Infinity,
                                        repeatType: "reverse"
                                    }}
                                    className="flex-shrink-0"
                                >
                                    {step.icon}
                                </motion.div>
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                                    <p className="text-gray-600">{step.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why This Project is Unique */}
            <section ref={featuresRef} className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={featuresControls}
                        transition={{ duration: 0.7 }}
                    >
                        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
                            Why This Project is <span className="text-purple-600">Revolutionary</span>
                        </h2>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView.features ? { opacity: 1, y: 0 } : {}}
                                    transition={{ delay: 0.2 * index, duration: 0.5 }}
                                    whileHover={{
                                        y: -15,
                                        transition: { duration: 0.3 }
                                    }}

                                    className="bg-white p-6 rounded-lg shadow-lg border border-blue-100 text-center"
                                >
                                    <div className="flex items-center justify-center w-16 h-16 bg-white rounded-full mb-4 mx-auto">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Prediction Models */}
            <section ref={modelsRef} className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={modelsControls}
                        transition={{ duration: 0.7 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl font-bold text-gray-800 mb-4">
                            Advanced <span className="text-blue-600">Prediction Models</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Our platform uses a combination of machine learning algorithms to provide accurate and reliable predictions.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView.models ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                                transition: { duration: 0.3 }
                            }}
                            className="bg-white rounded-lg p-6 shadow-md border border-blue-100"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Support Vector Machine (SVM)</h3>
                            <p className="text-gray-600">A supervised learning model used for classification and regression analysis.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView.models ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                                transition: { duration: 0.3 }
                            }}
                            className="bg-white rounded-lg p-6 shadow-md border border-blue-100
                            "
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Random Forest</h3>
                            <p className="text-gray-600">An ensemble learning method for classification, regression, and other tasks.</p>

                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView.models ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                                transition: { duration: 0.3 }
                            }}
                            className="bg-white rounded-lg p-6 shadow-md border border-blue-100"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Logistic Regression</h3>
                            <p className="text-gray-600">A statistical model used for binary classification problems.</p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView.models ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            whileHover={{
                                y: -10,
                                boxShadow: "0 10px 25px -5px rgba(59, 130, 246, 0.4)",
                                transition: { duration: 0.3 }
                            }}
                            className="bg-white rounded-lg p-6 shadow-md border border-blue-100"
                        >
                            <h3 className="text-xl font-semibold text-gray-800 mb-2">Gradient Boosting</h3>
                            <p className="text-gray-600">A powerful ensemble technique that builds models sequentially to correct errors.</p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Footer Section */}
            <Footer />
        </div>
    );
};

export default LandingPage;