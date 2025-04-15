import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import MLOverviewPage from './pages/MLOverviewPage';
import PredictionPage from './pages/PredictionPage';
import SvmComponent from './pages/SVM';
import KNNComponent from './pages/KNN';
import RandomForestComponent from './pages/rf';
import DecisionTreeComponent from './pages/dt';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/ml-overview" element={<MLOverviewPage />} />
        <Route path="/prediction" element={<PredictionPage />} />
        <Route path="/svm" element={<SvmComponent />} />
        <Route path="/knn" element={<KNNComponent />} />
        <Route path="/rf" element={<RandomForestComponent />} />
        <Route path="/dt" element={<DecisionTreeComponent />} />
      </Routes>
    </Router>
  );
};

export default App;