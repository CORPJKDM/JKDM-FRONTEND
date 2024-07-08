import React, { useEffect, useState } from 'react';
import { getCotizaciones } from '../../application/services/api';
import { Link } from 'react-router-dom';
import '../../ui/styles/Cotizaciones.css';

const Cotizaciones = () => {
  const [cotizaciones, setCotizaciones] = useState([]);

  useEffect(() => {
    const fetchCotizaciones = async () => {
      const data = await getCotizaciones();
      setCotizaciones(data);
    };

    fetchCotizaciones();
  }, []);

  return (
    <div className="home-container">
      <div className="sidebar">
        <img src="/logo.png" alt="Logo" className="logo" />
        <nav>
          <ul>
            <li><Link to="/home">Dashboard</Link></li>
            <li className="active"><Link to="/cotizaciones">Cotizaciones</Link></li>
            <li><Link to="#">Historial</Link></li>
            <li><Link to="#">Plantillas</Link></li>
          </ul>
        </nav>
        <div className="support">
          <Link to="#">Cerrar Sesión</Link>
          <div className="user">
            <img src="/src/assets/user.png" alt="User" className="user-image" />
            <div className="user-info">
              <span className="user-name">Usuario</span>
              <span className="user-role">Admin</span>
            </div>
          </div>
        </div>
      </div>
      <div className="main-content">
        <div className="cotizaciones-container">
          <h1>Lista de Cotizaciones</h1>
          <table className="cotizaciones-table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Cliente</th>
                <th>Descripción</th>
                <th>Fecha</th>
                <th>Estado</th>
                <th>Monto</th>
              </tr>
            </thead>
            <tbody>
              {cotizaciones.map((cotizacion) => (
                <tr key={cotizacion.id}>
                  <td>{cotizacion.id}</td>
                  <td>{cotizacion.cliente}</td>
                  <td>{cotizacion.descripcion}</td>
                  <td>{cotizacion.fecha}</td>
                  <td>{cotizacion.estado}</td>
                  <td>{cotizacion.monto}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cotizaciones;
