import axios from 'axios';

const base = import.meta.env.VITE_API_URL || '/api';

const api = axios.create({
  baseURL: base, // uses VITE_API_URL when provided, otherwise Vite proxy '/api'
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' },
});

// Response interceptor to normalize errors
api.interceptors.response.use(
  (res) => res,
  (error) => {
    // Build a normalized error object for consumers
    const normalized = {
      message: error.message,
      isAxiosError: !!error.isAxiosError,
      code: error.code || null,
      status: error.response?.status || null,
      data: error.response?.data || null,
      config: error.config,
    };
    // Attach a toJSON for safer console logging
    normalized.toJSON = () => ({ message: normalized.message, status: normalized.status, data: normalized.data, code: normalized.code });
    return Promise.reject(normalized);
  }
);

export default api;
