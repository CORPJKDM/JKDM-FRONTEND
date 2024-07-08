import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './ui/styles/index.css'; 
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './application/context/UserContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <UserProvider>
      <App />
    </UserProvider>,
  document.getElementById('root')
  </React.StrictMode>
);

reportWebVitals();