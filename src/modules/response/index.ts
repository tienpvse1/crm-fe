import { StatusCodes } from 'http-status-codes';
export interface Response<Type> {
  message: string;
  statusCode: StatusCodes;
  data: Type;
}
