import { controllers } from '../../../constance/controllers';
import { Axios } from '../../../server/axios';
const { AUTH } = controllers;
const authenticateUser = () => {
  const { instance } = new Axios();
  instance.post(AUTH);
};
