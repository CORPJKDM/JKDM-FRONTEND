import React, { useEffect, useState } from 'react';
import { getCotizaciones } from '../../application/services/api';
import { Link } from 'react-router-dom';
import '../../ui/styles/Cotizaciones.css';

const Cotizaciones = () => {
  const [cotizaciones, setCotizaciones] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortType, setSortType] = useState('');

  useEffect(() => {
    const fetchCotizaciones = async () => {
      const data = await getCotizaciones();
      setCotizaciones(data);
    };

    fetchCotizaciones();
  }, []);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSortChange = (e) => {
    setSortType(e.target.value);
  };

  const getFilteredCotizaciones = () => {
    let filteredCotizaciones = cotizaciones.filter((cotizacion) =>
      cotizacion.cliente.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (sortType === 'price-asc') {
      filteredCotizaciones.sort((a, b) => a.monto - b.monto);
    } else if (sortType === 'price-desc') {
      filteredCotizaciones.sort((a, b) => b.monto - a.monto);
    } else if (sortType === 'date-asc') {
      filteredCotizaciones.sort((a, b) => new Date(a.fecha) - new Date(b.fecha));
    } else if (sortType === 'date-desc') {
      filteredCotizaciones.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));
    }

    return filteredCotizaciones;
  };

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
          <div className="search-sort">
            <input
              type="text"
              placeholder="Buscar por cliente..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="search-input"
            />
            <select onChange={handleSortChange} className="sort-select">
              <option value="">Ordenar por...</option>
              <option value="price-asc">Precio: Menor a Mayor</option>
              <option value="price-desc">Precio: Mayor a Menor</option>
              <option value="date-asc">Fecha: Más antigua a más reciente</option>
              <option value="date-desc">Fecha: Más reciente a más antigua</option>
            </select>
          </div>
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
              {getFilteredCotizaciones().map((cotizacion) => (
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
