import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Cambia esto según la configuración de tu backend

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login/`, { username, password });
    return response.data;
  } catch (error) {
    throw new Error('Error de autenticación');
  }
};

export default { login };
