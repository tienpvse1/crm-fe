import { IAccount } from "@interfaces/account";
import { IBase } from "@interfaces/base";

export interface IPipeline {
  name: string;
  account: IAccount;
  pipelineColumns: IPipelineColumn[]
}

export interface IPipelineItem extends IBase{
  name: string;
  pipelineColumn: IPipelineColumn;
}

export interface IPipelineColumn {
  name: string;
  pipeline: string;
  pipelineItems: IPipelineItem[];
}