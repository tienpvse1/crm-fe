import axios, { AxiosInstance } from 'axios';

const baseURL = import.meta.env.VITE_BE_BASE_URL;

export class Axios {
  instance: AxiosInstance;
  constructor(token = '') {
    this.instance = axios.create({
      baseURL,
      headers: {
        Authorization: token,
      },
    });
  }
}
