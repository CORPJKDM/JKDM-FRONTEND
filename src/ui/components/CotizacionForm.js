import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import api from '../services/api';

const CotizacionForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [cotizacion, setCotizacion] = useState({
    cliente: '',
    descripcion: '',
    fecha: '',
    estado: '',
    monto: '',
  });

  useEffect(() => {
    if (id) {
      const fetchCotizacionDetail = async () => {
        try {
          const response = await api.getCotizacionDetail(id);
          setCotizacion(response.data);
        } catch (error) {
          console.error('Error fetching cotizacion detail:', error);
        }
      };

      fetchCotizacionDetail();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCotizacion({ ...cotizacion, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await api.updateCotizacion(id, cotizacion);
      } else {
        await api.createCotizacion(cotizacion);
      }
      navigate('/cotizaciones');
    } catch (error) {
      console.error('Error saving cotizacion:', error);
    }
  };

  return (
    <div>
      <h2>{id ? 'Edit Cotizacion' : 'Create Cotizacion'}</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Cliente:</label>
          <input type="text" name="cliente" value={cotizacion.cliente} onChange={handleChange} />
        </div>
        <div>
          <label>Descripción:</label>
          <input type="text" name="descripcion" value={cotizacion.descripcion} onChange={handleChange} />
        </div>
        <div>
          <label>Fecha:</label>
          <input type="date" name="fecha" value={cotizacion.fecha} onChange={handleChange} />
        </div>
        <div>
          <label>Estado:</label>
          <input type="text" name="estado" value={cotizacion.estado} onChange={handleChange} />
        </div>
        <div>
          <label>Monto:</label>
          <input type="number" name="monto" value={cotizacion.monto} onChange={handleChange} />
        </div>
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default CotizacionForm;
