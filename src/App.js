import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './ui/components/Home';
import Login from './ui/components/Login';
import PrivateRoute from './ui/components/PrivateRoute';
import CotizacionList from './ui/components/CotizacionList';
import CotizacionDetail from './ui/components/CotizacionDetail';
import { UserProvider } from './application/context/UserContext';
import './ui/styles/App.css';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/cotizaciones" element={<CotizacionList />} />
            <Route path="/cotizaciones/:id" element={<CotizacionDetail />} />
            <Route path="/" element={<Navigate to="/home" />} />
          </Route>
          <Route path="*" element={<Navigate to="/login" />} /> {/* Redirecciona cualquier ruta desconocida al login */}
        </Routes>
      </Router>
    </UserProvider>
  );
};

export default App;
