// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './ui/components/Home';
import Login from './ui/components/Login';
import PrivateRoute from './ui/components/PrivateRoute';
import CotizacionList from './ui/components/CotizacionList';
import CotizacionDetail from './ui/components/CotizacionDetail';
import './ui/styles/App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<PrivateRoute element={<Home />} />} />
        <Route path="/cotizaciones" element={<PrivateRoute element={<CotizacionList />} />} />
        <Route path="/cotizaciones/:id" element={<PrivateRoute element={<CotizacionDetail />} />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
