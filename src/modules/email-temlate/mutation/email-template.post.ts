import { Axios } from '@axios';
import { controllers } from '@constance/controllers';
import { Design } from 'react-email-editor';

const { EMAIL_TEMPLATE } = controllers;

export const createTemplate = async ({
  design,
  name,
}: {
  design: Design;
  name: string;
}) => {
  const { instance } = new Axios();
  const { data } = await instance.post(`${EMAIL_TEMPLATE}`, { name, design });
  return data;
};
