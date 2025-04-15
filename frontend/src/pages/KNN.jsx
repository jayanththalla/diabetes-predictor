import React, { useState } from 'react';

const KNNComponent = () => {
    const [activeTab, setActiveTab] = useState('introduction');

    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
            <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">K-Nearest Neighbors (KNN) Algorithm</h1>

            {/* Navigation Tabs */}
            <div className="flex flex-wrap mb-6 border-b">
                <button
                    className={`px-4 py-2 font-medium ${activeTab === 'introduction' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('introduction')}
                >
                    Introduction
                </button>
                <button
                    className={`px-4 py-2 font-medium ${activeTab === 'working' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('working')}
                >
                    How It Works
                </button>
                <button
                    className={`px-4 py-2 font-medium ${activeTab === 'example' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('example')}
                >
                    Example
                </button>
                <button
                    className={`px-4 py-2 font-medium ${activeTab === 'implementation' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('implementation')}
                >
                    Implementation
                </button>
                <button
                    className={`px-4 py-2 font-medium ${activeTab === 'proscons' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('proscons')}
                >
                    Pros & Cons
                </button>
                <button
                    className={`px-4 py-2 font-medium ${activeTab === 'applications' ? 'text-blue-700 border-b-2 border-blue-700' : 'text-gray-600'}`}
                    onClick={() => setActiveTab('applications')}
                >
                    Applications
                </button>
            </div>

            {/* Content Area */}
            <div className="mt-4">
                {activeTab === 'introduction' && (
                    <div>
                        <p className="mb-4">
                            K-nearest neighbors (KNN) algorithm is a type of supervised ML algorithm which can be used for both classification as well as regression predictive problems. However, it is mainly used for classification predictive problems in industry.
                        </p>
                        <p className="mb-4">
                            The main idea behind KNN is to find the k-nearest data points to a given test data point and use these nearest neighbors to make a prediction. The value of k is a hyperparameter that needs to be tuned, and it represents the number of neighbors to consider.
                        </p>

                        <div className="bg-blue-50 p-4 rounded-lg mt-6">
                            <h3 className="text-lg font-semibold mb-2">For Classification Problems:</h3>
                            <p>The KNN algorithm assigns the test data point to the class that appears most frequently among the k-nearest neighbors. In other words, the class with the highest number of neighbors is the predicted class.</p>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg mt-4">
                            <h3 className="text-lg font-semibold mb-2">For Regression Problems:</h3>
                            <p>The KNN algorithm assigns the test data point the average of the k-nearest neighbors' values.</p>
                        </div>

                        <p className="mt-4">
                            The distance metric used to measure the similarity between two data points is an essential factor that affects the KNN algorithm's performance. The most commonly used distance metrics are Euclidean distance, Manhattan distance, and Minkowski distance.
                        </p>

                        <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-2">Key Properties of KNN:</h3>
                            <ul className="list-disc pl-5">
                                <li className="mb-2"><span className="font-medium">Lazy learning algorithm</span> — KNN is a lazy learning algorithm because it does not have a specialized training phase and uses all the data for training while classification.</li>
                                <li><span className="font-medium">Non-parametric learning algorithm</span> — KNN is also a non-parametric learning algorithm because it doesn't assume anything about the underlying data.</li>
                            </ul>
                        </div>
                    </div>
                )}

                {activeTab === 'working' && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">How Does K-Nearest Neighbors Algorithm Work?</h2>
                        <p className="mb-4">
                            K-nearest neighbors (KNN) algorithm uses 'feature similarity' to predict the values of new datapoints which further means that the new data point will be assigned a value based on how closely it matches the points in the training set.
                        </p>

                        <div className="bg-gray-50 p-4 rounded-lg">
                            <h3 className="text-lg font-semibold mb-3">Step-by-Step Process:</h3>

                            <div className="mb-3">
                                <div className="bg-blue-100 rounded p-2 mb-2">
                                    <span className="font-medium">Step 1</span> — For implementing any algorithm, we need dataset. So during the first step of KNN, we must load the training as well as test data.
                                </div>

                                <div className="bg-blue-100 rounded p-2 mb-2">
                                    <span className="font-medium">Step 2</span> — Next, we need to choose the value of K i.e. the nearest data points. K can be any integer.
                                </div>

                                <div className="bg-blue-100 rounded p-2 mb-2">
                                    <span className="font-medium">Step 3</span> — For each point in the test data do the following:
                                    <div className="pl-4 mt-2">
                                        <div className="bg-blue-50 rounded p-2 mb-1">
                                            <span className="font-medium">3.1</span> — Calculate the distance between test data and each row of training data with the help of any of the method namely: Euclidean, Manhattan or Hamming distance. The most commonly used method to calculate distance is Euclidean.
                                        </div>
                                        <div className="bg-blue-50 rounded p-2 mb-1">
                                            <span className="font-medium">3.2</span> — Now, based on the distance value, sort them in ascending order.
                                        </div>
                                        <div className="bg-blue-50 rounded p-2 mb-1">
                                            <span className="font-medium">3.3</span> — Next, it will choose the top K rows from the sorted array.
                                        </div>
                                        <div className="bg-blue-50 rounded p-2">
                                            <span className="font-medium">3.4</span> — Now, it will assign a class to the test point based on most frequent class of these rows.
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-blue-100 rounded p-2">
                                    <span className="font-medium">Step 4</span> — End
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'example' && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Example of KNN Algorithm</h2>
                        <p className="mb-4">
                            The following is an example to understand the concept of K and working of KNN algorithm:
                        </p>

                        <div className="bg-gray-50 p-4 rounded-lg mb-4">
                            <p className="mb-2">Suppose we have a dataset which can be plotted as shown in the diagram. Now, we need to classify a new data point (black dot at point 60,60) into blue or red class.</p>
                            <p>We are assuming K = 3, meaning it would find three nearest data points.</p>
                        </div>

                        <div className="bg-yellow-50 p-4 rounded-lg">
                            <p>Looking at the three nearest neighbors of the data point with black dot, we can see that among those three, two of them lie in the Red class. Hence, the black dot will also be assigned to the red class.</p>
                        </div>

                        <h3 className="text-xl font-semibold mt-6 mb-3">Building a K Nearest Neighbors Model</h3>
                        <div className="bg-gray-50 p-4 rounded-lg">
                            <p className="mb-2">We can follow these steps to build a KNN model:</p>
                            <ol className="list-decimal pl-5">
                                <li className="mb-2"><span className="font-medium">Load the data</span> — The first step is to load the dataset into memory using libraries like pandas or numpy.</li>
                                <li className="mb-2"><span className="font-medium">Split the data</span> — Next, split the data into training and test sets.</li>
                                <li className="mb-2"><span className="font-medium">Normalize the data</span> — Before training, normalize the data to ensure each feature contributes equally.</li>
                                <li className="mb-2"><span className="font-medium">Calculate distances</span> — Calculate distances between test data point and each training data point.</li>
                                <li className="mb-2"><span className="font-medium">Select k-nearest neighbors</span> — Select the k-nearest neighbors based on calculated distances.</li>
                                <li className="mb-2"><span className="font-medium">Make a prediction</span> — Assign class based on majority vote (classification) or average (regression).</li>
                                <li><span className="font-medium">Evaluate performance</span> — Evaluate using metrics like accuracy, precision, recall, and F1-score.</li>
                            </ol>
                        </div>
                    </div>
                )}

                {activeTab === 'implementation' && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Implementation of KNN Algorithm in Python</h2>
                        <p className="mb-4">
                            KNN algorithm can be used for both classification as well as regression. Here are examples for both:
                        </p>

                        <div className="mb-6">
                            <h3 className="text-xl font-semibold mb-3 bg-blue-100 p-2 rounded">KNN as Classifier</h3>
                            <p className="mb-2">First, import necessary Python packages:</p>
                            <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                                import numpy as np<br />
                                import matplotlib.pyplot as plt<br />
                                import pandas as pd
                            </div>

                            <p className="mt-3 mb-2">Download the iris dataset:</p>
                            <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                                path = "https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data"
                            </div>

                            <p className="mt-3 mb-2">Assign column names to the dataset:</p>
                            <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                                headernames = ['sepal-length', 'sepal-width', 'petal-length', 'petal-width', 'Class']
                            </div>

                            <p className="mt-3 mb-2">Read dataset into pandas dataframe:</p>
                            <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                                dataset = pd.read_csv(path, names=headernames)<br />
                                dataset.head()
                            </div>

                            <p className="mt-3 mb-2">Data preprocessing:</p>
                            <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                                X = dataset.iloc[:, :-1].values<br />
                                y = dataset.iloc[:, 4].values
                            </div>

                            <p className="mt-3 mb-2">Split into training and testing data:</p>
                            <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                                from sklearn.model_selection import train_test_split<br />
                                X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.40)
                            </div>

                            <p className="mt-3 mb-2">Data scaling:</p>
                            <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                                from sklearn.preprocessing import StandardScaler<br />
                                scaler = StandardScaler()<br />
                                scaler.fit(X_train)<br />
                                X_train = scaler.transform(X_train)<br />
                                X_test = scaler.transform(X_test)
                            </div>

                            <p className="mt-3 mb-2">Train the model:</p>
                            <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                                from sklearn.neighbors import KNeighborsClassifier<br />
                                classifier = KNeighborsClassifier(n_neighbors=8)<br />
                                classifier.fit(X_train, y_train)
                            </div>

                            <p className="mt-3 mb-2">Make prediction and print results:</p>
                            <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                                y_pred = classifier.predict(X_test)<br /><br />

                                from sklearn.metrics import classification_report, confusion_matrix, accuracy_score<br />
                                result = confusion_matrix(y_test, y_pred)<br />
                                print("Confusion Matrix:")<br />
                                print(result)<br />
                                result1 = classification_report(y_test, y_pred)<br />
                                print("Classification Report:")<br />
                                print(result1)<br />
                                result2 = accuracy_score(y_test,y_pred)<br />
                                print("Accuracy:",result2)
                            </div>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold mb-3 bg-green-100 p-2 rounded">KNN as Regressor</h3>
                            <p className="mb-2">Import necessary Python packages:</p>
                            <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                                import numpy as np<br />
                                import pandas as pd
                            </div>

                            <p className="mt-3 mb-2">Download the iris dataset and prepare data:</p>
                            <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                                path = "https://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data"<br />
                                headernames = ['sepal-length', 'sepal-width', 'petal-length', 'petal-width', 'Class']<br />
                                data = pd.read_csv(url, names=headernames)<br />
                                array = data.values<br />
                                X = array[:,:2]<br />
                                Y = array[:,2]<br />
                                data.shape
                            </div>

                            <p className="mt-3 mb-2">Import KNeighborsRegressor and fit model:</p>
                            <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                                from sklearn.neighbors import KNeighborsRegressor<br />
                                knnr = KNeighborsRegressor(n_neighbors=10)<br />
                                knnr.fit(X, y)
                            </div>

                            <p className="mt-3 mb-2">Calculate MSE:</p>
                            <div className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                                print("The MSE is:",format(np.power(y-knnr.predict(X),2).mean()))
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'proscons' && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Pros and Cons of KNN</h2>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-green-50 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3 text-green-700">Pros</h3>
                                <ul className="list-disc pl-5">
                                    <li className="mb-2">Very simple algorithm to understand and interpret.</li>
                                    <li className="mb-2">Very useful for nonlinear data because there is no assumption about data.</li>
                                    <li className="mb-2">Versatile algorithm - can be used for classification as well as regression.</li>
                                    <li>Relatively high accuracy (but there are better supervised learning models).</li>
                                </ul>
                            </div>

                            <div className="bg-red-50 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3 text-red-700">Cons</h3>
                                <ul className="list-disc pl-5">
                                    <li className="mb-2">Computationally expensive because it stores all training data.</li>
                                    <li className="mb-2">High memory storage required compared to other algorithms.</li>
                                    <li className="mb-2">Prediction is slow in case of big N.</li>
                                    <li>Very sensitive to the scale of data and irrelevant features.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'applications' && (
                    <div>
                        <h2 className="text-2xl font-semibold mb-4">Applications of KNN</h2>
                        <p className="mb-4">
                            The following are some of the areas in which KNN can be applied successfully:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6">
                            <div className="bg-blue-50 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3">Banking System</h3>
                                <p>
                                    KNN can be used in banking system to predict whether an individual is fit for loan approval. It helps determine if an individual has characteristics similar to defaulters.
                                </p>
                            </div>

                            <div className="bg-purple-50 p-4 rounded-lg">
                                <h3 className="text-xl font-semibold mb-3">Calculating Credit Ratings</h3>
                                <p>
                                    KNN algorithms can be used to find an individual's credit rating by comparing with persons having similar traits.
                                </p>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default KNNComponent;