import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>JKDM SYSTEM</h2>
      </div>
      <ul className="sidebar-menu">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/cotizaciones">Cotizaciones</Link></li>
        <li><Link to="/perfil">Perfil</Link></li>
        <li><Link to="/configuracion">Configuración</Link></li>
        <li><Link to="/ayuda">Ayuda</Link></li>
        <li><Link to="/logout">Cerrar sesión</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;
