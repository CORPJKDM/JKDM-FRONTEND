import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCotizacionDetail } from '../../application/services/api';

const CotizacionDetail = () => {
  const { id } = useParams();
  const [cotizacion, setCotizacion] = useState(null);

  useEffect(() => {
    const fetchCotizacion = async () => {
      const data = await getCotizacionDetail(id);
      setCotizacion(data);
    };

    fetchCotizacion();
  }, [id]);

  if (!cotizacion) {
    return <div>Loading...</div>;
  }

  return (
    <div className="cotizacion-detail">
      <h1>Detalle de Cotización</h1>
      <p>Descripción: {cotizacion.descripcion}</p>
      <p>Fecha: {cotizacion.fecha}</p>
      <p>Estado: {cotizacion.estado}</p>
      <p>Monto: {cotizacion.monto}</p>
    </div>
  );
};

export default CotizacionDetail;
