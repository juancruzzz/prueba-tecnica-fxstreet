import { useState } from 'react';
import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const api = axios.create({
    baseURL: import.meta.env.VITE_URL_API,
  });

  api.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      setLoading(true);
      return config;
    },
    (error: AxiosError) => {
      setLoading(false);
      return Promise.reject(error);
    }
  );

  // Interceptor para manejar respuestas y errores
  api.interceptors.response.use(
    (response: AxiosResponse) => {
      setLoading(false);
      return response;
    },
    (error: AxiosError) => {
      setLoading(false);
      setError(error.message);
      return Promise.reject(error);
    }
  );

  return { api, loading, error };
};

export default useApi;
