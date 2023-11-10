import { NODE_ENV, url } from '@/constants/environmentVariables';
import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const axiosiInstance = axios.create({
  baseURL: url[NODE_ENV],
});

const api = (axios: AxiosInstance) => {
  return {
    get: function <T>(url: string, config: AxiosRequestConfig = {}) {
      return axios.get<T>(url, config);
    },
    put: function <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) {
      return axios.put<T>(url, body, config);
    },
    post: function <T>(url: string, body: unknown, config: AxiosRequestConfig = {}) {
      return axios.post<T>(url, body, config);
    },
    delete: function <T>(url: string, config: AxiosRequestConfig = {}) {
      return axios.delete<T>(url, config);
    },
  };
};

export default api(axiosiInstance);
