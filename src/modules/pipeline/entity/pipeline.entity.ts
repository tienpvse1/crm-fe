import { IAccount } from '@modules/account/entity/account.entity';
import { BaseEntity } from '@modules/base/base.entity';

export interface IPipeline extends BaseEntity {
  name: string;
  account: IAccount;
}
