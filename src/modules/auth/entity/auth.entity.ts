import { Role } from "@interfaces/type-roles";

export interface IAuth {
  data: {
    token: string;
    publicData: {
      role: Role;
      email: string;
      id: string;
    }
  };
  message: string;
  statusCode: string;
}
