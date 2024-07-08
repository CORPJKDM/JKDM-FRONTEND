import React, { useEffect, useState } from 'react';
import { getCotizaciones } from '../../application/services/api'; // Asegúrate de tener esta función en tu API

const CotizacionList = () => {
  const [cotizaciones, setCotizaciones] = useState([]);

  useEffect(() => {
    const fetchCotizaciones = async () => {
      const data = await getCotizaciones();
      setCotizaciones(data);
    };
    fetchCotizaciones();
  }, []);

  return (
    <div>
      <h1>Lista de Cotizaciones</h1>
      <ul>
        {cotizaciones.map(cotizacion => (
          <li key={cotizacion.id}>{cotizacion.nombre}</li>
        ))}
      </ul>
    </div>
  );
};

export default CotizacionList;
