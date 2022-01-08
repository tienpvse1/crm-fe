import axios, { AxiosInstance } from 'axios';
import { getToken } from '../cookies';

const baseURL = import.meta.env.VITE_BE_BASE_URL;

export const instance = axios.create({
  baseURL,
  headers: {
    Authorization: getToken(),
  },
});

export class Axios {
  instance: AxiosInstance;

  constructor() {
    this.instance = axios.create({
      baseURL,
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
  }
}
