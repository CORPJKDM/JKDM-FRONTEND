import React, { useContext } from 'react';
import { UserContext } from '../../application/context/UserContext';
import '../../ui/styles/Home.css'; // Asegúrate de que esta ruta sea correcta
import { Link } from 'react-router-dom';

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="home-container">
      <div className="sidebar">
        <img src="/logo.png" alt="Logo" className="logo" />
        <nav>
          <ul>
            <li className="active"><Link to="/home">Dashboard</Link></li>
            <li><Link to="/cotizaciones">Cotizaciones</Link></li>
            <li><Link to="#">Historial</Link></li>
            <li><Link to="#">Plantillas</Link></li>
          </ul>
        </nav>
        <div className="support">
          <a href="#">Cerrar Sesión</a>
        </div>
      </div>
      <div className="main-content">
        <div className="welcome">
          <h1>Bienvenido {user?.name} {user?.surname}</h1>
          <p>Información importante:</p>
        </div>
        <div className="buttons">
          <button className="primary-button">NUEVA COTIZACIÓN</button>
          <button className="secondary-button">COTIZAR DESDE PLANTILLA</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
