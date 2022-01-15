import { Axios } from '@axios';
import { controllers } from '@constance/controllers';
const { EMAIL_TEMPLATE } = controllers;
export const getTemplateById = async (id: string = '') => {
  const { instance } = new Axios();
  const { data } = await instance.get(`${EMAIL_TEMPLATE}/${id}`);
  return data;
};

export const findAllTemplates = async () => {
  const { instance } = new Axios();
  const { data } = await instance.get(`${EMAIL_TEMPLATE}`);
  return data;
};
