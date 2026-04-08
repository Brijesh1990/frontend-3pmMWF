import axios from 'axios';
import { auth } from '../firebase/config';

// Base API instance (Mock JSON API or real backend)
const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || 'https://jsonplaceholder.typicode.com', // Replace with your real API URL
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor to attach Firebase ID Token
api.interceptors.request.use(
  async (config) => {
    const user = auth.currentUser;
    if (user) {
      const token = await user.getIdToken();
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
api.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    // Check if the error is unauthenticated
    if (error.response && error.response.status === 401) {
      // Possible token expiration, handle refresh or redirect to login
      console.error('Unauthorized, token might be expired.');
    }
    return Promise.reject(error);
  }
);

export default api;
