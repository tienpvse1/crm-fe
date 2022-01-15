import { Axios } from '@axios';
import { controllers } from '@constance/controllers';
import { CreateEmailDto } from '../dto/create-email.dto';
const { MAILER } = controllers;
export const postEmail = async (email: CreateEmailDto) => {
  const { instance } = new Axios();
  const { data } = await instance.post(`${MAILER}/send`, {
    ...email,
  });
  return data;
};
