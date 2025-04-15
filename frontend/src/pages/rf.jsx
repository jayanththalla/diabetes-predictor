import React, { useState } from 'react';

const RandomForestComponent = () => {
    const [activeTab, setActiveTab] = useState('introduction');

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6 text-green-700">Random Forest Algorithm</h1>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap mb-6 border-b">
                <button
                    className={`px-4 py-2 font-medium ${activeTab === 'introduction' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('introduction')}
                >
                    Introduction
                </button>
                <button
                    className={`px-4 py-2 font-medium ${activeTab === 'working' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('working')}
                >
                    How It Works
                </button>
                <button
                    className={`px-4 py-2 font-medium ${activeTab === 'advantages' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('advantages')}
                >
                    Advantages
                </button>
                <button
                    className={`px-4 py-2 font-medium ${activeTab === 'implementation' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('implementation')}
                >
                    Implementation
                </button>
                <button
                    className={`px-4 py-2 font-medium ${activeTab === 'proscons' ? 'text-green-700 border-b-2 border-green-700' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('proscons')}
                >
                    Pros & Cons
                </button>
            </div>

            {/* Content Area */}
            <div className="mt-4">
                {activeTab === 'introduction' && (
                    <div>
                        <p className="mb-4">
                            Random Forest is a machine learning algorithm that uses an ensemble of decision trees to make predictions. The algorithm was first introduced by Leo Breiman in 2001. The key idea behind the algorithm is to create a large number of decision trees, each of which is trained on a different subset of the data. The predictions of these individual trees are then combined to produce a final prediction.
                        </p>

                        <div className="bg-gray-50 p-4 rounded-lg mt-6">
                            <h3 className="text-lg font-semibold mb-2">Flexibility of Random Forest</h3>
                            <p>Random Forest is a flexible algorithm that can be used for both classification and regression tasks:</p>
                            <ul className="list-disc pl-5 mt-2">
                                <li className="mb-2"><span className="font-medium">Classification Tasks:</span> The algorithm uses the mode of the predictions of the individual trees to make the final prediction.</li>
                                <li><span className="font-medium">Regression Tasks:</span> The algorithm uses the mean of the predictions of the individual trees.</li>
                            </ul>
                        </div>

                        <div className="mt-6 flex justify-center">
                            <div className="bg-green-50 p-4 rounded-lg max-w-md">
                                <h3 className="text-lg font-semibold mb-2 text-center">Key Concept</h3>
                                <p className="text-center">
                                    Random Forest combines multiple decision trees to improve accuracy and reduce overfitting.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'working' && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">How Random Forest Algorithm Works</h2>
                        <p className="mb-4">
                            We can understand the working of Random Forest algorithm with the help of the following steps:
                        </p>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-3">Step-by-Step Process:</h3>

                            <div className="mb-3">
                                <div className="bg-green-100 rounded p-2 mb-2">
                                    <span className="font-medium">Step 1</span> — First, start with the selection of random samples from a given dataset.
                                </div>

                                <div className="bg-green-100 rounded p-2 mb-2">
                                    <span className="font-medium">Step 2</span> — Next, this algorithm will construct a decision tree for every sample. Then it will get the prediction result from every decision tree.
                                </div>

                                <div className="bg-green-100 rounded p-2 mb-2">
                                    <span className="font-medium">Step 3</span> — In this step, voting will be performed for every predicted result.
                                </div>

                                <div className="bg-green-100 rounded p-2">
                                    <span className="font-medium">Step 4</span> — At last, select the most voted prediction result as the final prediction result.
                                </div>
                            </div>
                        </div>

                        <div className="mt-6">
                            <div className="flex justify-center mb-4">
                                <div className="bg-gray-100 p-3 rounded-lg">
                                    <h3 className="text-lg font-semibold text-center mb-2">Random Forest Visualization</h3>
                                    <div className="flex justify-center">
                                        <div className="w-64 h-64 bg-gray-200 flex items-center justify-center rounded-lg">
                                            <span className="text-gray-500">Random Forest Algorithm Diagram</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'advantages' && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Advantages of Random Forest Algorithm</h2>
                        <p className="mb-4">
                            Random Forest algorithm has several advantages over other machine learning algorithms:
                        </p>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-2">Robustness to Overfitting</h3>
                                <p>
                                    Random Forest algorithm is known for its robustness to overfitting. This is because the algorithm uses an ensemble of decision trees, which helps to reduce the impact of outliers and noise in the data.
                                </p>
                            </div>

                            <div className="bg-green-50 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-2">High Accuracy</h3>
                                <p>
                                    Random Forest algorithm is known for its high accuracy. This is because the algorithm combines the predictions of multiple decision trees, which helps to reduce the impact of individual decision trees that may be biased or inaccurate.
                                </p>
                            </div>

                            <div className="bg-green-50 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-2">Handles Missing Data</h3>
                                <p>
                                    Random Forest algorithm can handle missing data without the need for imputation. This is because the algorithm only considers the features that are available for each data point and does not require all features to be present for all data points.
                                </p>
                            </div>

                            <div className="bg-green-50 p-4 rounded-lg">
                                <h3 className="text-lg font-semibold mb-2">Non-Linear Relationships</h3>
                                <p>
                                    Random Forest algorithm can handle non-linear relationships between the features and the target variable. This is because the algorithm uses decision trees, which can model non-linear relationships.
                                </p>
                            </div>

                            <div className="bg-green-50 p-4 rounded-lg md:col-span-2">
                                <h3 className="text-lg font-semibold mb-2">Feature Importance</h3>
                                <p>
                                    Random Forest algorithm can provide information about the importance of each feature in the model. This information can be used to identify the most important features in the data and can be used for feature selection and feature engineering.
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'implementation' && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Implementation of Random Forest Algorithm in Python</h2>
                        <p className="mb-4">
                            Let's take a look at the implementation of Random Forest Algorithm in Python using the scikit-learn library:
                        </p>

                        <div className="mb-6">
                            <h3 className="text-lg font-semibold mb-3 bg-green-100 p-2 rounded">Step 1 — Importing the Libraries</h3>
                            <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                                import pandas as pd<br />
                                from sklearn.ensemble import RandomForestClassifier
                            </div>

                            <h3 className="text-lg font-semibold mt-4 mb-3 bg-green-100 p-2 rounded">Step 2 — Loading the Data</h3>
                            <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                                # Loading the iris dataset<br /><br />
                                iris = pd.read_csv('https://archive.ics.uci.edu/ml/machine-learningdatabases/iris/iris.data', header=None)<br /><br />
                                iris.columns = ['sepal_length', 'sepal_width', 'petal_length','petal_width', 'species']
                            </div>

                            <h3 className="text-lg font-semibold mt-4 mb-3 bg-green-100 p-2 rounded">Step 3 — Data Preprocessing</h3>
                            <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                                # Separating the features and target variable<br />
                                X = iris.iloc[:, :-1]<br />
                                y = iris.iloc[:, -1]<br /><br />
                                # Splitting the data into training and testing sets<br />
                                from sklearn.model_selection import train_test_split<br /><br />
                                X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.35, random_state=42)
                            </div>

                            <h3 className="text-lg font-semibold mt-4 mb-3 bg-green-100 p-2 rounded">Step 4 — Training the Model</h3>
                            <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                                # Creating the Random Forest classifier object<br />
                                rfc = RandomForestClassifier(n_estimators=100)<br /><br />
                                # Training the model on the training data<br />
                                rfc.fit(X_train, y_train)
                            </div>

                            <h3 className="text-lg font-semibold mt-4 mb-3 bg-green-100 p-2 rounded">Step 5 — Making Predictions</h3>
                            <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                                # Making predictions on the test data<br />
                                y_pred = rfc.predict(X_test)
                            </div>

                            <h3 className="text-lg font-semibold mt-4 mb-3 bg-green-100 p-2 rounded">Step 6 — Evaluating the Model</h3>
                            <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                                # Importing the metrics library<br />
                                from sklearn.metrics import accuracy_score, precision_score, recall_score, f1_score<br /><br />
                                # Calculating the accuracy, precision, recall, and F1-score<br />
                                accuracy = accuracy_score(y_test, y_pred)<br />
                                precision = precision_score(y_test, y_pred, average='weighted')<br />
                                recall = recall_score(y_test, y_pred, average='weighted')<br />
                                f1 = f1_score(y_test, y_pred, average='weighted')<br /><br />
                                print("Accuracy:", accuracy)<br />
                                print("Precision:", precision)<br />
                                print("Recall:", recall)<br />
                                print("F1-score:", f1)
                            </div>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-3">Results</h3>
                            <div className="bg-white p-3 rounded border border-yellow-200">
                                <p className="font-mono">
                                    Accuracy: 0.9811320754716981<br />
                                    Precision: 0.9821802935010483<br />
                                    Recall: 0.9811320754716981<br />
                                    F1-score: 0.9811157396063056
                                </p>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'proscons' && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Pros and Cons of Random Forest</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3 text-green-700">Pros</h3>
                                <ul className="list-disc pl-5">
                                    <li className="mb-2">It overcomes the problem of overfitting by averaging or combining the results of different decision trees.</li>
                                    <li className="mb-2">Random forests work well for a large range of data items than a single decision tree does.</li>
                                    <li className="mb-2">Random forest has less variance than a single decision tree.</li>
                                    <li className="mb-2">Random forests are very flexible and possess very high accuracy.</li>
                                    <li>Scaling of data is not required in random forest algorithm. It maintains good accuracy even after providing data without scaling.</li>
                                </ul>
                            </div>

                            <div className="bg-red-50 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3 text-red-700">Cons</h3>
                                <ul className="list-disc pl-5">
                                    <li className="mb-2">Complexity is the main disadvantage of Random forest algorithms.</li>
                                    <li className="mb-2">Construction of Random forests are much harder and time-consuming than decision trees.</li>
                                    <li className="mb-2">More computational resources are required to implement Random Forest algorithm.</li>
                                    <li>It is less intuitive in case when we have a large collection of decision trees.</li>
                                    <li>The prediction process using random forests is very time-consuming in comparison with other algorithms.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default RandomForestComponent;