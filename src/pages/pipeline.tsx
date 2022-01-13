import { useBasePost } from '@modules/base/mutate/base.post';
import { ICreatePipelineDto } from '@modules/pipeline/dto/create-pipeline.dto';
import {
  PIPELINE_FETCH_KEY,
  useGetPipeline,
} from '@modules/pipeline/get/pipeline.get';
import { fetcher } from '@modules/pipeline/mutate/pipeline.post';
import { Button } from 'antd';
import React from 'react';

interface PipelineProps {}

export const Pipeline: React.FC<PipelineProps> = ({}) => {
  const { data, error, isFetching } = useGetPipeline();
  const mutator = useBasePost<ICreatePipelineDto>(PIPELINE_FETCH_KEY, fetcher);
  return (
    <>
      <Button
        type='default'
        onClick={() => mutator.mutate({ name: 'buoi dai 20cm' })}
      >
        add pipeline
      </Button>

      {!isFetching && (
        <div>
          {data?.data.map((item) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      )}
    </>
  );
};
