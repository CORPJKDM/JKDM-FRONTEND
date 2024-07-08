import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../application/services/api';
import { UserContext } from '../../application/context/UserContext';
import '../../ui/styles/Login.css';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login(username, password);
      setUser(userData);
      navigate('/home');
    } catch (error) {
      toast.error('Contraseña o Usuario Incorrectos');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1>Inicia Sesión</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <img src="iconloginmail.png" alt="Email Icon" />
            <input
              type="text"
              id="username"
              placeholder="Usuario"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <img src="iconloginpass.png" alt="Password Icon" />
            <input
              type="password"
              id="password"
              placeholder="Contraseña"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Iniciar Sesión</button>
        </form>
      </div>
      <div className="login-image">
        <img src="/fondologin.png" alt="fondologin" />
      </div>
    </div>
  );
};

export default Login;
