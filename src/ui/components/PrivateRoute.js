// src/ui/components/PrivateRoute.js
import React, { useContext } from 'react';
import { Route, Navigate } from 'react-router-dom';
import { UserContext } from '../../application/context/UserContext';

const PrivateRoute = ({ element, ...rest }) => {
  const { user } = useContext(UserContext);

  return user ? element : <Navigate to="/login" />;
};

export default PrivateRoute;
