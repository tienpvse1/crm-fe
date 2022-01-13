import { Role } from '@constance/role';
import { IPipeline } from '@modules/pipeline/entity/pipeline.entity';
export interface IAccount {
  firstName: string;
  lastName: string;
  photo: string;
  email: string;
  password: string;
  isSocialAccount: boolean;
  role: Role;
  pipeline: IPipeline;
}
