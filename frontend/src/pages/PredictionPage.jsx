import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const PredictionPage = () => {
    const [selectedClassifier, setSelectedClassifier] = useState(null);
    const [formData, setFormData] = useState({
        pregnancies: '',
        glucose: '',
        bloodPressure: '',
        skinThickness: '',
        insulin: '',
        bmi: '',
        diabetesPedigree: '',
        age: ''
    });
    const [predictionResult, setPredictionResult] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const classifiers = [
        {
            name: 'SVM',
            id: 'svm',
            description: 'Support Vector Machine classifier focuses on finding the optimal boundary between diabetes and non-diabetes cases.',
            color: 'blue'
        },
        {
            name: 'Random Forest',
            id: 'random_forest',
            description: 'Combines multiple decision trees to provide robust predictions with reduced overfitting.',
            color: 'green'
        },
        {
            name: 'KNN',
            id: 'knn',
            description: 'K-Nearest Neighbors classifies based on similar patient profiles in the training data.',
            color: 'purple'
        },
        {
            name: 'Decision Tree',
            id: 'decision_tree',
            description: 'Creates a flowchart-like model that makes decisions based on feature thresholds.',
            color: 'yellow'
        },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!selectedClassifier) {
            alert('Please select a classifier');
            return;
        }

        setIsLoading(true);

        try {
            const response = await fetch(`https://diabetes-predictor-oj1b.onrender.com/diagnosis/${selectedClassifier}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                mode: 'cors',
                credentials: 'omit',
                body: JSON.stringify({
                    pregnancies: parseFloat(formData.pregnancies),
                    glucose: parseFloat(formData.glucose),
                    bloodPressure: parseFloat(formData.bloodPressure),
                    skinThickness: parseFloat(formData.skinThickness),
                    insulin: parseFloat(formData.insulin),
                    bmi: parseFloat(formData.bmi),
                    diabetesPedigree: parseFloat(formData.diabetesPedigree),
                    age: parseFloat(formData.age)
                })
            });

            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.error || `HTTP error! status: ${response.status}`);
            }

            const data = await response.json();

            // Generate recommendations based on the model's prediction
            let riskLevel;
            let recommendations;

            if (data.result === 'Diabetic') {
                riskLevel = 'high';
                recommendations = [
                    'Immediate consultation with a healthcare provider',
                    'Comprehensive diabetes screening',
                    'Develop a diabetes management plan',
                    'Lifestyle modifications urgently recommended'
                ];
            } else {
                riskLevel = 'low';
                recommendations = [
                    'Maintain a healthy diet',
                    'Regular exercise',
                    'Annual check-ups'
                ];
            }

            setPredictionResult({
                prediction: data.result,
                riskLevel: riskLevel,
                recommendations: recommendations,
                accuracy: data.accuracy
            });

        } catch (error) {
            console.error('There was a problem with the prediction:', error);
            alert(error.message || 'Error making prediction. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const resetForm = () => {
        setFormData({
            pregnancies: '',
            glucose: '',
            bloodPressure: '',
            skinThickness: '',
            insulin: '',
            bmi: '',
            diabetesPedigree: '',
            age: ''
        });
        setPredictionResult(null);
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
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
                <h1 className="text-5xl font-bold text-gray-800 mb-6 text-center">
                    Diabetes Risk Prediction
                </h1>
                <p className="text-xl text-gray-600 mb-8 text-center max-w-3xl mx-auto">
                    Enter your health metrics below and select a classifier to predict your diabetes risk. Our tool uses machine learning algorithms to analyze your data and provide risk assessment.
                </p>

                {/* Two-column layout for desktop */}
                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left column - Form */}
                    <div className="lg:w-2/3">
                        <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
                                Enter Your Health Metrics
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-700 mb-2" htmlFor="glucose">
                                            Glucose Level (mg/dL)
                                        </label>
                                        <input
                                            type="number"
                                            id="glucose"
                                            name="glucose"
                                            value={formData.glucose}
                                            onChange={handleInputChange}
                                            placeholder="70-200"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                        <p className="text-sm text-gray-500 mt-1">
                                            Plasma glucose concentration after 2 hours in an oral glucose tolerance test
                                        </p>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2" htmlFor="insulin">
                                            Insulin (µU/ml)
                                        </label>
                                        <input
                                            type="number"
                                            id="insulin"
                                            name="insulin"
                                            value={formData.insulin}
                                            onChange={handleInputChange}
                                            placeholder="0-300"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                        <p className="text-sm text-gray-500 mt-1">
                                            2-Hour serum insulin
                                        </p>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2" htmlFor="bmi">
                                            BMI (kg/m²)
                                        </label>
                                        <input
                                            type="number"
                                            id="bmi"
                                            name="bmi"
                                            value={formData.bmi}
                                            onChange={handleInputChange}
                                            placeholder="15-50"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                        <p className="text-sm text-gray-500 mt-1">
                                            Body mass index
                                        </p>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2" htmlFor="diabetesPedigree">
                                            Diabetes Pedigree Function
                                        </label>
                                        <input
                                            type="number"
                                            id="diabetesPedigree"
                                            name="diabetesPedigree"
                                            value={formData.diabetesPedigree}
                                            onChange={handleInputChange}
                                            placeholder="0.08-2.42"
                                            step="0.01"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                        <p className="text-sm text-gray-500 mt-1">
                                            Diabetes mellitus genetic score
                                        </p>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2" htmlFor="age">
                                            Age (years)
                                        </label>
                                        <input
                                            type="number"
                                            id="age"
                                            name="age"
                                            value={formData.age}
                                            onChange={handleInputChange}
                                            placeholder="21-81"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2" htmlFor="pregnancies">
                                            Pregnancies
                                        </label>
                                        <input
                                            type="number"
                                            id="pregnancies"
                                            name="pregnancies"
                                            value={formData.pregnancies}
                                            onChange={handleInputChange}
                                            placeholder="0-17"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                        <p className="text-sm text-gray-500 mt-1">
                                            Number of times pregnant
                                        </p>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2" htmlFor="bloodPressure">
                                            Blood Pressure (mm Hg)
                                        </label>
                                        <input
                                            type="number"
                                            id="bloodPressure"
                                            name="bloodPressure"
                                            value={formData.bloodPressure}
                                            onChange={handleInputChange}
                                            placeholder="60-140"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                        <p className="text-sm text-gray-500 mt-1">
                                            Diastolic blood pressure
                                        </p>
                                    </div>
                                    <div>
                                        <label className="block text-gray-700 mb-2" htmlFor="skinThickness">
                                            Skin Thickness (mm)
                                        </label>
                                        <input
                                            type="number"
                                            id="skinThickness"
                                            name="skinThickness"
                                            value={formData.skinThickness}
                                            onChange={handleInputChange}
                                            placeholder="10-50"
                                            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                            required
                                        />
                                        <p className="text-sm text-gray-500 mt-1">
                                            Triceps skin fold thickness
                                        </p>
                                    </div>
                                </div>

                                <div className="pt-4">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">
                                        Select a Classifier
                                    </h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                        {classifiers.map((classifier) => (
                                            <motion.div
                                                key={classifier.id}
                                                whileHover={{ scale: 1.03 }}
                                                whileTap={{ scale: 0.98 }}
                                                className={`p-4 rounded-lg cursor-pointer border-2 ${selectedClassifier === classifier.id
                                                    ? `border-${classifier.color}-500 bg-${classifier.color}-50`
                                                    : 'border-gray-200 bg-white'
                                                    }`}
                                                onClick={() => setSelectedClassifier(classifier.id)}
                                            >
                                                <h4 className="text-lg font-semibold text-gray-800">
                                                    {classifier.name}
                                                </h4>
                                                <p className="text-sm text-gray-600 mt-2">
                                                    {classifier.description}
                                                </p>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>

                                <div className="flex justify-between pt-4">
                                    <button
                                        type="button"
                                        onClick={resetForm}
                                        className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition duration-300"
                                    >
                                        Reset
                                    </button>
                                    <button
                                        type="submit"
                                        disabled={!selectedClassifier || isLoading}
                                        className={`px-8 py-3 rounded-lg transition duration-300 ${!selectedClassifier || isLoading
                                            ? 'bg-gray-400 text-white cursor-not-allowed'
                                            : 'bg-blue-600 text-white hover:bg-blue-700'
                                            }`}
                                    >
                                        {isLoading ? 'Processing...' : 'Predict Diabetes Risk'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>

                    {/* Right column - Results */}
                    <div className="lg:w-1/3">
                        {predictionResult ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className={`bg-white p-8 rounded-lg shadow-lg mb-8 border-l-4 ${predictionResult.riskLevel === 'low'
                                    ? 'border-green-500'
                                    : 'border-red-500'
                                    }`}
                            >
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    Prediction Result
                                </h2>
                                <div className="space-y-4">
                                    <div>
                                        <h3 className="text-lg font-medium text-gray-700">
                                            Risk Level:
                                        </h3>
                                        <p className={`text-xl font-bold ${predictionResult.riskLevel === 'low'
                                            ? 'text-green-600'
                                            : 'text-red-600'
                                            }`}>
                                            {predictionResult.prediction}
                                        </p>
                                    </div>

                                    {predictionResult.accuracy && (
                                        <div>
                                            <h3 className="text-lg font-medium text-gray-700">
                                                Model Confidence:
                                            </h3>
                                            <p className="text-gray-600">
                                                {Math.round(predictionResult.accuracy * 100)}%
                                            </p>
                                        </div>
                                    )}

                                    <div>
                                        <h3 className="text-lg font-medium text-gray-700">
                                            Recommendations:
                                        </h3>
                                        <ul className="list-disc list-inside text-gray-600">
                                            {predictionResult.recommendations.map((rec, index) => (
                                                <li key={index} className="mb-2">
                                                    {rec}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <button
                                    onClick={resetForm}
                                    className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
                                >
                                    Start Over
                                </button>
                            </motion.div>
                        ) : (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                className="bg-white p-8 rounded-lg shadow-lg"
                            >
                                <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                                    How It Works
                                </h2>
                                <p className="text-gray-600 mb-4">
                                    Enter your health metrics and select a classifier to predict your diabetes risk. The system will analyze your data using advanced machine learning algorithms and provide a detailed risk assessment.
                                </p>
                                <p className="text-gray-600">
                                    The results will include your risk level, probability, and personalized recommendations to help you manage your health.
                                </p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </motion.div>
            <Footer />
        </div>
    );
};

export default PredictionPage;