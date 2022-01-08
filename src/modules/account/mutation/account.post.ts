import { instance } from '../../../axios';
import { controllers } from '../../../constance/controllers';

const { ACCOUNT } = controllers;
export const createAccount = async () => {
  const { data } = await instance.post(ACCOUNT, {
    email: 'good66612@gmail.com',
    password: 'tienpvse',
  });
  return data;
};
