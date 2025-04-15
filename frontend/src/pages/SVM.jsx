import React from 'react';
import { motion } from 'framer-motion';

const SvmComponent = () => {
    return (
        <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 py-12">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="bg-white rounded-lg shadow-lg p-8 mb-10"
                >
                    <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Support Vector Machine (SVM)</h1>
                    <p className="text-lg text-gray-600 mb-6">
                        Support Vector Machines (SVMs) are powerful yet flexible supervised machine learning algorithms
                        used primarily for classification problems. First introduced in the 1960s and refined in the 1990s,
                        SVMs have become extremely popular due to their ability to handle multiple continuous and categorical variables.
                    </p>

                    {/* Main Concept Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How SVM Works</h2>
                        <div className="flex flex-col md:flex-row items-center gap-8 mb-6">
                            <div className="md:w-1/2">
                                <p className="text-gray-600">
                                    The primary goal of SVM is to find a hyperplane that optimally separates data points into different classes.
                                    In 2D space, this hyperplane is a line; in 3D, it's a plane; and in higher dimensions, it's a higher-dimensional surface.
                                </p>
                                <p className="text-gray-600 mt-4">
                                    SVM selects the hyperplane that maximizes the margin—the distance between the hyperplane and the
                                    closest data points from each class. These closest points are called "support vectors,"
                                    giving the algorithm its name.
                                </p>
                            </div>
                            <div className="md:w-1/2">
                                <img
                                    src="https://www.tutorialspoint.com/machine_learning/images/working_of_svm.jpg"
                                    alt="SVM Hyperplane and Margin"
                                    className="rounded-lg shadow-md w-full"
                                />
                                <p className="text-sm text-center text-gray-500 mt-2">
                                    SVM separating two classes with maximum margin hyperplane
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* Key Concepts Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Key Concepts in SVM</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            {/* Support Vectors */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.6 }}
                                className="bg-blue-50 p-6 rounded-lg shadow"
                            >
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Support Vectors</h3>
                                <p className="text-gray-600 mb-4">
                                    These are the data points closest to the hyperplane that influence its position and orientation.
                                    If these points were to move, the position of the hyperplane would change.
                                </p>
                                <div className="flex justify-center">
                                    <img
                                        src="https://www.tutorialspoint.com/machine_learning/images/svm_blobs_datapoints.jpg"
                                        alt="Support Vectors"
                                        className="rounded-lg shadow-sm"
                                    />
                                </div>
                            </motion.div>

                            {/* Hyperplane */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="bg-green-50 p-6 rounded-lg shadow"
                            >
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Hyperplane</h3>
                                <p className="text-gray-600 mb-4">
                                    A decision boundary that separates different classes. In 2D space, it's a line
                                    defined by w·x + b = 0, where w is the weight vector perpendicular to the hyperplane,
                                    x is an input feature vector, and b is the bias term.
                                </p>
                                <div className="flex justify-center">
                                    <img
                                        src="https://www.tutorialspoint.com/machine_learning/images/svm_line_hyperplane.jpg"
                                        alt="Hyperplane Example"
                                        className="rounded-lg shadow-sm"
                                    />
                                </div>
                            </motion.div>

                            {/* Margin */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4, duration: 0.6 }}
                                className="bg-purple-50 p-6 rounded-lg shadow"
                            >
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Margin</h3>
                                <p className="text-gray-600 mb-4">
                                    The gap between two parallel hyperplanes that pass through the support vectors.
                                    A larger margin generally leads to better generalization and classification performance.
                                </p>
                                <div className="flex justify-center">
                                    <img
                                        src="https://www.tutorialspoint.com/machine_learning/images/svm_maximum_marginal_hyperplane.jpg"
                                        alt="Margin Visualization"
                                        className="rounded-lg shadow-sm"
                                    />
                                </div>
                            </motion.div>

                            {/* Kernel Trick */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.6 }}
                                className="bg-yellow-50 p-6 rounded-lg shadow"
                            >
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Kernel Trick</h3>
                                <p className="text-gray-600 mb-4">
                                    A method that transforms non-linearly separable data into a higher-dimensional space
                                    where it becomes linearly separable. This is done without explicitly computing the coordinates
                                    in the higher-dimensional space.
                                </p>
                                <div className="flex justify-center">
                                    <img
                                        src="https://www.tutorialspoint.com/machine_learning/images/svm_best_fit_hyperplane.jpg"
                                        alt="Kernel Trick"
                                        className="rounded-lg shadow-sm"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </section>

                    {/* SVM Kernels Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">SVM Kernels</h2>

                        <p className="text-gray-600 mb-6">
                            Kernels transform input data space into the required form, allowing SVM to handle
                            non-linearly separable problems. They convert complex problems into simpler ones by
                            adding more dimensions to the data.
                        </p>

                        <div className="space-y-6">
                            {/* Linear Kernel */}
                            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Linear Kernel</h3>
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="md:w-2/3">
                                        <p className="text-gray-600 mb-2">
                                            Used as a dot product between observations. Suitable for linearly separable data.
                                        </p>
                                        <div className="bg-gray-100 p-4 rounded">
                                            <code>K(x, xi) = sum(x * xi)</code>
                                        </div>
                                        <p className="text-gray-600 mt-2">
                                            Where x and xi are feature vectors, and the kernel computes the sum of their element-wise products.
                                        </p>
                                    </div>

                                </div>
                            </div>

                            {/* Polynomial Kernel */}
                            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Polynomial Kernel</h3>
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="md:w-2/3">
                                        <p className="text-gray-600 mb-2">
                                            A generalized form of the linear kernel that can handle non-linear input spaces and curved decision boundaries.
                                        </p>
                                        <div className="bg-gray-100 p-4 rounded">
                                            <code>K(x, xi) = (1 + sum(x * xi))^d</code>
                                        </div>
                                        <p className="text-gray-600 mt-2">
                                            Where d is the degree of the polynomial, which must be specified manually.
                                        </p>
                                    </div>

                                </div>
                            </div>

                            {/* RBF Kernel */}
                            <div className="bg-white p-6 rounded-lg shadow border border-gray-200">
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">Radial Basis Function (RBF) Kernel</h3>
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="md:w-2/3">
                                        <p className="text-gray-600 mb-2">
                                            Maps input space to an infinite-dimensional space. Commonly used in SVM classification for complex, non-linear data.
                                        </p>
                                        <div className="bg-gray-100 p-4 rounded">
                                            <code>K(x, xi) = exp(-gamma * sum((x - xi)^2))</code>
                                        </div>
                                        <p className="text-gray-600 mt-2">
                                            Where gamma controls the influence of each training example, with values typically between 0 and 1. A good default is 0.1.
                                        </p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </section>

                    {/* SVM Parameters Section */}
                    <section className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Tuning SVM Parameters</h2>

                        <div className="bg-blue-50 p-6 rounded-lg shadow mb-6">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Important Parameters</h3>
                            <ul className="list-disc pl-6 space-y-3 text-gray-600">
                                <li>
                                    <strong>Kernel:</strong> Determines the type of transformation applied to the data (linear, polynomial, RBF, sigmoid).
                                </li>
                                <li>
                                    <strong>C (Regularization):</strong> Controls the trade-off between maximizing the margin and minimizing classification error.
                                    Higher values prioritize correct classification over margin size.
                                </li>
                                <li>
                                    <strong>Gamma:</strong> For RBF kernel, defines how far the influence of a single training example reaches.
                                    Higher values mean closer points have greater influence.
                                </li>
                                <li>
                                    <strong>Degree:</strong> For polynomial kernel, specifies the degree of the polynomial function.
                                </li>
                                <li>
                                    <strong>Coef0:</strong> Independent term in kernel functions; affects polynomial and sigmoid kernels.
                                </li>
                            </ul>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-lg shadow">
                            <h3 className="text-xl font-semibold text-gray-800 mb-3">Parameter Tuning with GridSearchCV</h3>
                            <div className="bg-gray-100 p-4 rounded-lg">
                                <pre className="text-sm overflow-x-auto">
                                    <code>
                                        {`from sklearn.model_selection import GridSearchCV
from sklearn.svm import SVC

# Define parameter grid
param_grid = {
    'C': [0.1, 1, 10, 100],
    'kernel': ['linear', 'poly', 'rbf', 'sigmoid'],
    'degree': [2, 3, 4],
    'gamma': ['scale', 'auto', 0.1, 0.01]
}

# Create SVM classifier
svm = SVC()

# Perform grid search
grid_search = GridSearchCV(svm, param_grid, cv=5)
grid_search.fit(X_train, y_train)

# Get best parameters
best_params = grid_search.best_params_
best_score = grid_search.best_score_`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </section>

                    {/* Pros and Cons Section */}
                    <section>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Pros and Cons of SVM</h2>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-green-50 p-6 rounded-lg shadow">
                                <h3 className="text-xl font-semibold text-green-700 mb-4">Advantages</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">Effective in high-dimensional spaces</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">Works well with clear margin of separation</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 text-green-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">Effective in cases where number of dimensions is greater than the number of samples</span>
                                    </li>
                                </ul>
                            </div>

                            <div className="bg-red-50 p-6 rounded-lg shadow">
                                <h3 className="text-xl font-semibold text-red-700 mb-4">Disadvantages</h3>
                                <ul className="space-y-2">
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">Not suitable for large datasets</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">Doesn't perform well with overlapping classes</span>
                                    </li>
                                    <li className="flex items-start">
                                        <svg className="h-6 w-6 text-red-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                                        </svg>
                                        <span className="text-gray-700">Sensitive to the choice of kernel parameters</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </motion.div>

                {/* References Section */}
                <div className="text-center mt-8 text-gray-600">
                    <p>
                        This guide is based on the official documentation and tutorials from{' '}
                        <a
                            href="https://scikit-learn.org/stable/modules/svm.html"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            scikit-learn
                        </a>
                        .
                    </p>
                    <p>
                        For more information on SVM and its applications, please refer to the{' '}
                        <a
                            href="https://en.wikipedia.org/wiki/Support_vector_machine"
                            target="_blank"
                            rel="noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Wikipedia page
                        </a>
                        .
                    </p>
                </div>
            </div>
        </div>
    );
}

export default SvmComponent;