import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './ui/styles/index.css'; // Asegúrate de que este archivo exista
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './application/context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>
  </React.StrictMode>
);

reportWebVitals();
