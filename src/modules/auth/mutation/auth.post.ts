import { instance } from '../../../axios';
import { controllers } from '../../../constance/controllers';
import { setToken } from '../../../cookies';

const { AUTH } = controllers;
export const authenticateUser = async () => {
  const { data } = await instance.post(AUTH, {
    email: 'chuongtest@gmail.com',
    password: '0123456789',
  });
  setToken(data.data);
  return data;
};
