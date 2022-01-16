import { IPipeline } from "@interfaces/pipeline";

export interface IAccount {
  firstName: string;
  lastName: string;
  photo: string;
  email: string;
  password: string;
  isSocialAccount: boolean;
  //t chưa xác định được interface của Role và emailTemplates nên để tạm null thông cảm
  role: null;
  emailTemplates: null;
  //
  pipeline: IPipeline;
}