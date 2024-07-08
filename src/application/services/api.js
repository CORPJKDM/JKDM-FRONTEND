import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Asegúrate de que esta URL sea correcta

export const login = async (username, password) => {
    const response = await axios.post(`${API_URL}/token/`, {
        username,
        password,
    });
    if (response.data.access) {
        localStorage.setItem('token', response.data.access);
    }
    return response.data;
};

export const getCotizaciones = async () => {
    const response = await axios.get(`${API_URL}/cotizaciones/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
};

export const getCotizacionDetail = async (id) => {
    const response = await axios.get(`${API_URL}/cotizaciones/${id}/`, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    });
    return response.data;
};
