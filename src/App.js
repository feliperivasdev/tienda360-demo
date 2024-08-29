// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import UserProfile from './components/UserProfile';
import ProductRecommendations from './components/ProductRecommendations';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path="/dashboard" element={isLoggedIn ? <Dashboard /> : <Navigate to="/" />} />
        <Route path="/profile" element={isLoggedIn ? <UserProfile /> : <Navigate to="/" />} />
        <Route path="/recommendations" element={isLoggedIn ? <ProductRecommendations /> : <Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
