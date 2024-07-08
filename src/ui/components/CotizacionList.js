import React, { useEffect, useState } from 'react';
import { getCotizaciones } from '../../application/services/api';

const CotizacionList = () => {
  const [cotizaciones, setCotizaciones] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCotizaciones = async () => {
      try {
        const data = await getCotizaciones();
        setCotizaciones(data);
      } catch (error) {
        setError('Error fetching cotizaciones');
        console.error('Error fetching cotizaciones:', error);
      }
    };

    fetchCotizaciones();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  if (!cotizaciones || cotizaciones.length === 0) {
    return <div>No hay cotizaciones disponibles</div>;
  }

  return (
    <div>
      <h1>Cotizaciones</h1>
      <ul>
        {cotizaciones.map((cotizacion) => (
          <li key={cotizacion.id}>
            <a href={`/cotizaciones/${cotizacion.id}`}>{cotizacion.nombre}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CotizacionList;
