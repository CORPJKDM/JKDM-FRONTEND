import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../../application/services/api';
import { UserContext } from '../../application/context/UserContext';
import '../../ui/styles/Login.css'; // Asegúrate de que esta ruta sea correcta

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userData = await login(username, password);
      setUser({ username: userData.username });
      alert('Inicio de sesión exitoso');
      navigate('/home');
    } catch (error) {
      alert('Error de autenticación');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <img src="/logo.png" alt="Logo" className="logo" />
        <h1>Inicia Sesión</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="form-group">
            <img src="/iconloginmail.png" alt="Email Icon" />
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
        <img src="fondologin.png" alt="Login Illustration" />
      </div>
    </div>
  );
};

export default Login;
