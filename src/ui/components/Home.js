import React, { useContext } from 'react';
import { UserContext } from '../../application/context/UserContext';
import '../../ui/styles/Home.css'; // Asegúrate de que esta ruta sea correcta

const Home = () => {
  const { user } = useContext(UserContext);

  return (
    <div className="home-container">
      <div className="sidebar">
        <img src="/logo.png" alt="Logo" className="logo" />
        <nav>
          <ul>
            <li className="active"><a href="#">Dashboard</a></li>
            <li><a href="#">Cotizaciones</a></li>
            <li><a href="#">Historial</a></li>
            <li><a href="#">Plantillas</a></li>
          </ul>
        </nav>
        <div className="support">
          <a href="#">Cerrar Sesión</a>
          <div className="user">
            <img src="/src/assets/user.png" alt="User" className="user-image" />
            <div className="user-info">
              <span className="user-name">{user?.first_name} {user?.last_name}</span>
              <span className="user-role">Admin</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="header">
          <span className="date">August 8<sup>th</sup> 2022 · 09:00 AM</span>
          <div className="search">
            <input type="text" placeholder="Search" />
          </div>
        </div>
        <div className="welcome">
          <h1>Bienvenido {user?.first_name} {user?.last_name}</h1>
          <p>Here is some important information for you:</p>
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
