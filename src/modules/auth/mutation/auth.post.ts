import { instance } from '../../../axios';
import { controllers } from '../../../constance/controllers';
import { setToken } from '../../../cookies';

const { AUTH } = controllers;
export const authenticateUser = async () => {
  const { data } = await instance.post(AUTH, {
    email: 'good66612@gmail.com',
    password: 'tienpvse',
  });
  setToken(data.data);
  return data;
};
