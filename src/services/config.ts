import axios from 'axios';
import { TIMEOUT } from '../constants';

const axiosInstance = axios.create({
  baseURL: `${process.env.REACT_APP_BASE_URL}`,
  timeout: TIMEOUT,
  responseType: 'json',
});

axiosInstance.interceptors.request.use((config) => {
  return config;
});

axiosInstance.interceptors.request.use(async (config) => {
  // Handle config
  return config;
});

axiosInstance.interceptors.response.use(async (response) => {
  if (response && response.data) {
    // Handle response data
    return response.data;
  }

  return response;
});

export default axiosInstance;
