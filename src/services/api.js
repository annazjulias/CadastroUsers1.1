// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cadastro-dev-club2-c5uy.vercel.app', // Porta do seu backend
});

export default api;
