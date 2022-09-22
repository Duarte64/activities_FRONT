import axios, { AxiosRequestConfig } from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 2500,
});

const request = async (config: AxiosRequestConfig) => {
    return await api.request(config)
} 

export default request;