import React, { useContext } from 'react';
import { UserContext } from '../../application/context/UserContext';
import { Link } from 'react-router-dom';
import '../../ui/styles/Home.css';

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
          <Link to="#">Cerrar Sesión</Link>
          <div className="user">
            <img src="/src/assets/user.png" alt="User" className="user-image" />
            <div className="user-info">
              <span className="user-name">{user?.username}</span>
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
          <h1>Bienvenido {user?.username}</h1>
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
