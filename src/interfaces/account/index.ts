import { IPipeline } from "@interfaces/pipeline";
import { Role } from "@interfaces/type-roles";

export interface IAccount {
  firstName: string;
  lastName: string;
  photo: string;
  email: string;
  password: string;
  isSocialAccount: boolean;
  role: Role;
  //chưa xác định được interface của emailTemplates nên để tạm null thông cảm
  emailTemplates: null;
  //
  pipeline: IPipeline;
}