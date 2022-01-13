import { Axios } from '@axios';
import { controllers } from '@constance/controllers';
import { Response } from '@modules/response';
import { useQuery } from 'react-query';
import { IPipeline } from '../entity/pipeline.entity';

// constance
const { PIPELINE } = controllers;
export const PIPELINE_FETCH_KEY = 'pipeline';

const fetcher = async () => {
  const { instance } = new Axios();

  const { data } = await instance.get(PIPELINE);
  return data as Response<IPipeline[]>;
};

export const useGetPipeline = () => useQuery(PIPELINE_FETCH_KEY, fetcher);
