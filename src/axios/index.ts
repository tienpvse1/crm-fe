import axios, { AxiosInstance } from 'axios';
import { getToken } from '../cookies';
import { envVars } from '../env/var.env';

const baseURL = envVars.VITE_BE_BASE_URL;

export class Axios {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    this.instance.interceptors.response.use(function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      
      return response.data;
    }, function (error) {
      // Any status codes that falls outside the range of 2xx cause this function to trigger
      // Do something with response error
      return Promise.reject(error);
    });
  }
}
