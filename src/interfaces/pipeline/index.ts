import { IAccount } from "@interfaces/account";
import { IBase } from "@interfaces/base";

export interface IPipeline {
  name: string;
  account: IAccount;
  pipelineColumns: IPipelineColumns[]

}

export interface IPipelineItem extends IBase{
  name: string;
  pipelineColumn: IPipelineColumns;
}

export interface IPipelineColumns {
  name: string;
  pipeline: string;
  pipelineItems: IPipelineItem[];
}