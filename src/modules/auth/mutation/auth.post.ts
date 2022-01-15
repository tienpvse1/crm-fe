import { instance } from '../../../axios';
import { controllers } from '../../../constance/controllers';
import { setToken } from '../../../cookies';

const { AUTH } = controllers;
export const authenticateUser = async () => {
  const { data } = await instance.post(AUTH, {
    email: 'tienpvse1@gmail.com',
    password: 'tienpvse1@gmail.com',
  });
  setToken(data.data);
  return data;
};
