import { Axios } from '@axios';
import { controllers } from '@constance/controllers';
import { Response } from '@modules/response';
import { ICreatePipelineDto } from '../dto/create-pipeline.dto';
import { IPipeline } from '../entity/pipeline.entity';

// constance
const { PIPELINE } = controllers;

export const fetcher = async (pipeline: ICreatePipelineDto) => {
  const { instance } = new Axios();
  const { data } = await instance.post(PIPELINE, pipeline);
  return data as Response<IPipeline>;
};
