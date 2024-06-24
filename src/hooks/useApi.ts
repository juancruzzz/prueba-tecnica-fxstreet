import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useState } from 'react';

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const api = axios.create({
    baseURL: import.meta.env.VITE_URL_API,
  });

  api.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      setLoading(true);
      return config;
    },
    (error: AxiosError) => {
      setLoading(false);
      return Promise.reject(error);
    }
  );

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
