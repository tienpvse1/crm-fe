import { instance } from '../../../axios';
import { controllers } from '../../../constance/controllers';
import { setToken } from '../../../cookies';
import { IAuthDto } from '../dto/auth.dto';
import { IAuth } from '../entity/auth.entity';

const { AUTH } = controllers;
export const authenticateUser = async (authDto: IAuthDto) => {
  const { data } = await instance.post(AUTH, {
    ...authDto,
  });
  setToken(data.data.token);
  return data as IAuth;
};
