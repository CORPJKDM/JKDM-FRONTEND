import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './ui/components/Login';
import Home from './ui/components/Home';
import { UserContext } from './application/context/UserContext';
import { ToastContainer } from 'react-toastify';

const PrivateRoute = ({ element: Component, ...rest }) => {
  const { user } = useContext(UserContext);
  return user ? <Component {...rest} /> : <Navigate to="/login" />;
};

function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<PrivateRoute element={Home} />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
