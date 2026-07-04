// Central place for environment-derived configuration.
// Swap VITE_API_BASE_URL in .env (see .env.example) once a real backend exists.
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || '/api';
