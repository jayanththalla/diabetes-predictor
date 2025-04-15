import React, { useState } from 'react';

const DecisionTreeComponent = () => {
    const [activeSection, setActiveSection] = useState('introduction');

    // Sample decision tree visualization using SVG
    const DecisionTreeSVG = () => (
        <svg viewBox="0 0 600 300" className="w-full h-64 bg-gray-50 rounded-lg">
            <rect x="270" y="10" width="60" height="30" rx="5" fill="#4f46e5" />
            <text x="300" y="30" textAnchor="middle" fill="white" fontSize="12">Age?</text>

            <line x1="300" y1="40" x2="200" y2="70" stroke="#666" strokeWidth="2" />
            <line x1="300" y1="40" x2="400" y2="70" stroke="#666" strokeWidth="2" />

            <text x="240" y="60" textAnchor="middle" fill="#666" fontSize="10">&lt; 30</text>
            <text x="360" y="60" textAnchor="middle" fill="#666" fontSize="10">&gt;= 30</text>

            <rect x="170" y="70" width="60" height="30" rx="5" fill="#4f46e5" />
            <text x="200" y="90" textAnchor="middle" fill="white" fontSize="12">Exercise?</text>

            <rect x="370" y="70" width="60" height="30" rx="5" fill="#4f46e5" />
            <text x="400" y="90" textAnchor="middle" fill="white" fontSize="12">Diet?</text>

            <line x1="200" y1="100" x2="150" y2="130" stroke="#666" strokeWidth="2" />
            <line x1="200" y1="100" x2="250" y2="130" stroke="#666" strokeWidth="2" />

            <line x1="400" y1="100" x2="350" y2="130" stroke="#666" strokeWidth="2" />
            <line x1="400" y1="100" x2="450" y2="130" stroke="#666" strokeWidth="2" />

            <text x="170" y="120" textAnchor="middle" fill="#666" fontSize="10">Yes</text>
            <text x="230" y="120" textAnchor="middle" fill="#666" fontSize="10">No</text>

            <text x="370" y="120" textAnchor="middle" fill="#666" fontSize="10">Healthy</text>
            <text x="430" y="120" textAnchor="middle" fill="#666" fontSize="10">Unhealthy</text>

            <rect x="120" y="130" width="60" height="30" rx="5" fill="#10b981" />
            <text x="150" y="150" textAnchor="middle" fill="white" fontSize="12">Fit</text>

            <rect x="220" y="130" width="60" height="30" rx="5" fill="#ef4444" />
            <text x="250" y="150" textAnchor="middle" fill="white" fontSize="12">Unfit</text>

            <rect x="320" y="130" width="60" height="30" rx="5" fill="#10b981" />
            <text x="350" y="150" textAnchor="middle" fill="white" fontSize="12">Fit</text>

            <rect x="420" y="130" width="60" height="30" rx="5" fill="#ef4444" />
            <text x="450" y="150" textAnchor="middle" fill="white" fontSize="12">Unfit</text>
        </svg>
    );

    // Sample Python code results visualization
    const PythonResultSVG = () => (
        <svg viewBox="0 0 600 400" className="w-full h-64 bg-gray-50 rounded-lg">
            <text x="300" y="30" textAnchor="middle" fill="#1e40af" fontSize="16" fontWeight="bold">Decision Tree for Iris Dataset</text>

            <rect x="250" y="50" width="100" height="50" rx="5" fill="#4f46e5" />
            <text x="300" y="75" textAnchor="middle" fill="white" fontSize="12">petal length &lt;= 2.45</text>
            <text x="300" y="90" textAnchor="middle" fill="white" fontSize="10">gini = 0.667</text>

            <line x1="300" y1="100" x2="200" y2="130" stroke="#666" strokeWidth="2" />
            <line x1="300" y1="100" x2="400" y2="130" stroke="#666" strokeWidth="2" />

            <rect x="150" y="130" width="100" height="50" rx="5" fill="#10b981" />
            <text x="200" y="155" textAnchor="middle" fill="white" fontSize="12">setosa</text>
            <text x="200" y="170" textAnchor="middle" fill="white" fontSize="10">gini = 0.0</text>

            <rect x="350" y="130" width="100" height="50" rx="5" fill="#4f46e5" />
            <text x="400" y="155" textAnchor="middle" fill="white" fontSize="12">petal width &lt;= 1.75</text>
            <text x="400" y="170" textAnchor="middle" fill="white" fontSize="10">gini = 0.5</text>

            <line x1="400" y1="180" x2="300" y2="210" stroke="#666" strokeWidth="2" />
            <line x1="400" y1="180" x2="500" y2="210" stroke="#666" strokeWidth="2" />

            <rect x="250" y="210" width="100" height="50" rx="5" fill="#a855f7" />
            <text x="300" y="235" textAnchor="middle" fill="white" fontSize="12">versicolor</text>
            <text x="300" y="250" textAnchor="middle" fill="white" fontSize="10">gini = 0.168</text>

            <rect x="450" y="210" width="100" height="50" rx="5" fill="#ec4899" />
            <text x="500" y="235" textAnchor="middle" fill="white" fontSize="12">virginica</text>
            <text x="500" y="250" textAnchor="middle" fill="white" fontSize="10">gini = 0.043</text>

            <text x="300" y="300" textAnchor="middle" fill="#1e40af" fontSize="14">Accuracy: 0.9777777777777777</text>
        </svg>
    );

    const GiniIndexVisualization = () => (
        <div className="bg-gray-50 p-4 rounded-lg">
            <div className="flex justify-center items-center mb-4">
                <div className="w-64 h-6 bg-gradient-to-r from-green-500 to-red-500 rounded-md">
                    <div className="relative">
                        <div className="absolute -top-6 left-0 text-xs">Perfect (0)</div>
                        <div className="absolute -top-6 right-0 text-xs">Worst (0.5)</div>
                        <div className="absolute top-8 left-0 w-full text-center text-xs">Gini Index Scale (for 2 class problem)</div>
                    </div>
                </div>
            </div>
        </div>
    );

    const SectionButton = ({ id, title }) => (
        <button
            className={`px-4 py-2 rounded-lg mr-2 mb-2 ${activeSection === id
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
            onClick={() => setActiveSection(id)}
        >
            {title}
        </button>
    );

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'introduction':
                return (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Decision Tree Algorithm</h2>
                        <p className="mb-4">
                            The decision tree algorithm is a hierarchical tree-based algorithm that is used to classify or predict outcomes based on a set of rules. It works by splitting the data into subsets based on the values of the input features. The algorithm recursively splits the data until it reaches a point where the data in each subset belongs to the same class or has the same value for the target variable.
                        </p>
                        <p className="mb-4">
                            The Decision Tree algorithm works by selecting the best feature to split the data at each node. The best feature is the one that provides the most information gain or the most reduction in entropy. Information gain is a measure of the amount of information gained by splitting the data at a particular feature, while entropy is a measure of the randomness or disorder in the data.
                        </p>
                        <div className="mb-4">
                            <h3 className="text-lg font-semibold mb-2">Example Decision Tree:</h3>
                            <p className="mb-2">Binary tree for predicting whether a person is fit or unfit based on age, eating habits, and exercise habits:</p>
                            <DecisionTreeSVG />
                            <p className="mt-2 text-sm text-gray-600">In this decision tree, the questions are decision nodes and final outcomes are leaves.</p>
                        </div>
                    </div>
                );
            case 'types':
                return (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Types of Decision Tree Algorithm</h2>
                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-indigo-50 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-2">Classification Tree</h3>
                                <p>
                                    A classification tree is used to classify data into different classes or categories. It works by splitting the data into subsets based on the values of the input features and assigning each subset to a different class.
                                </p>
                            </div>
                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-2">Regression Tree</h3>
                                <p>
                                    A regression tree is used to predict numerical values or continuous variables. It works by splitting the data into subsets based on the values of the input features and assigning each subset a numerical value.
                                </p>
                            </div>
                        </div>
                    </div>
                );
            case 'implementation':
                return (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Implementing Decision Tree Algorithm</h2>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Gini Index</h3>
                            <p className="mb-4">
                                It is the name of the cost function that is used to evaluate the binary splits in the dataset and works with the categorial target variable "Success" or "Failure".
                            </p>
                            <p className="mb-2">
                                Higher the value of Gini index, higher the homogeneity. A perfect Gini index value is 0 and worst is 0.5 (for 2 class problem).
                            </p>
                            <GiniIndexVisualization />
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Split Creation</h3>
                            <p>A split includes an attribute in the dataset and a value. We can create a split with:</p>
                            <ol className="list-decimal pl-6 space-y-2 my-2">
                                <li><span className="font-medium">Calculating Gini Score</span> - Using the formula p²+q², which is the sum of the square of probability for success and failure.</li>
                                <li><span className="font-medium">Splitting a dataset</span> - Separating a dataset into two lists of rows having index of an attribute and a split value.</li>
                                <li><span className="font-medium">Evaluating all splits</span> - Finding the best possible split by evaluating the cost of each split.</li>
                            </ol>
                        </div>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-2">Building a Tree</h3>
                            <div className="bg-gray-50 p-4 rounded-lg mb-4">
                                <h4 className="font-medium mb-1">Terminal Node Creation</h4>
                                <p>We decide when to stop growing the tree using:</p>
                                <ul className="list-disc pl-6 my-2">
                                    <li><strong>Maximum Tree Depth</strong> - The maximum number of nodes in a tree after root node.</li>
                                    <li><strong>Minimum Node Records</strong> - The minimum number of training patterns that a node is responsible for.</li>
                                </ul>
                            </div>

                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h4 className="font-medium mb-1">Recursive Splitting</h4>
                                <p>
                                    Once a node is created, we can create child nodes recursively on each group of data by calling the same function again and again.
                                </p>
                            </div>
                        </div>
                    </div>
                );
            case 'python':
                return (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Implementation in Python</h2>
                        <p className="mb-4">
                            Below is an implementation of the Decision Tree algorithm in Python using the Iris dataset, which contains 150 samples of iris flowers with four features and three classes.
                        </p>

                        <div className="bg-gray-800 text-gray-200 p-4 rounded-lg mb-6 overflow-x-auto">
                            <pre className="text-sm">
                                {`import numpy as np
from sklearn.datasets import load_iris
from sklearn.model_selection import train_test_split
from sklearn.tree import DecisionTreeClassifier

# Load the iris dataset
iris = load_iris()

# Split the dataset into training and testing sets
X_train, X_test, y_train, y_test = train_test_split(iris.data, iris.target, test_size=0.3, random_state=0)

# Create a Decision Tree classifier
dtc = DecisionTreeClassifier()

# Fit the classifier to the training data
dtc.fit(X_train, y_train)

# Make predictions on the testing data
y_pred = dtc.predict(X_test)

# Calculate the accuracy of the classifier
accuracy = np.sum(y_pred == y_test) / len(y_test)
print("Accuracy:", accuracy)

# Visualize the Decision Tree using Matplotlib
import matplotlib.pyplot as plt
from sklearn.tree import plot_tree
plt.figure(figsize=(20,10))
plot_tree(dtc, filled=True, feature_names=iris.feature_names, class_names=iris.target_names)
plt.show()`}
                            </pre>
                        </div>

                        <h3 className="text-lg font-semibold mb-2">Result Visualization:</h3>
                        <PythonResultSVG />
                        <p className="mt-2 text-sm text-gray-600">The accuracy of the model on the test set is approximately 97.78%.</p>
                    </div>
                );
            case 'assumptions':
                return (
                    <div>
                        <h2 className="text-xl font-bold mb-4">Assumptions in Decision Trees</h2>
                        <div className="bg-amber-50 p-4 rounded-lg">
                            <ul className="list-disc pl-6 space-y-2">
                                <li>While preparing decision trees, the training set is as root node.</li>
                                <li>Decision tree classifier prefers the features values to be categorical. Continuous values must be discretized prior to model building.</li>
                                <li>Based on the attribute's values, the records are recursively distributed.</li>
                                <li>Statistical approach will be used to place attributes at any node position i.e. as root node or internal node.</li>
                            </ul>
                        </div>
                    </div>
                );
            default:
                return <div>Select a section to view content</div>;
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6 text-center">Decision Tree Algorithm</h1>

            <div className="mb-6">
                <SectionButton id="introduction" title="Introduction" />
                <SectionButton id="types" title="Types" />
                <SectionButton id="implementation" title="Implementation" />
                <SectionButton id="python" title="Python Example" />
                <SectionButton id="assumptions" title="Assumptions" />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
                {renderActiveSection()}
            </div>

            <div className="mt-6 text-center text-sm text-gray-500">
                <p>Enroll in our online courses and learn new skills at your own pace.</p>
                <p>Become a certified expert to boost your career.</p>
            </div>
        </div>
    );
};

export default DecisionTreeComponent;