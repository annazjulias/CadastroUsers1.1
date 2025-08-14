// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cadastro-users1-1.vercel.app/', // Porta do seu backend
});

export default api;
