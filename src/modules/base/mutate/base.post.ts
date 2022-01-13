import { Response } from '@modules/response';
import { useMutation } from 'react-query';
import { queryClient } from '../../../main';

export const useBasePost = <T>(
  key: string,
  mutateFn: (item: any) => Promise<Response<T>>
) =>
  useMutation((item: Partial<T>) => mutateFn(item), {
    onMutate: async (newItem: T) => {
      await queryClient.cancelQueries(key);
      const previousItems = queryClient.getQueryData<Response<T[]>>(key);
      if (previousItems) {
        queryClient.setQueryData<Response<T[]>>(key, {
          ...previousItems,
          data: [
            ...previousItems.data,
            { ...newItem, id: Date.now().toString() },
          ],
        });
        return { previousItems };
      } else {
        const something = {
          message: 'ok',
          statusCode: 200,
          data: [
            {
              ...newItem,
              id: Date.now().toString(),
            },
          ],
        };
        console.log(something);
        queryClient.setQueryData<Response<T[]>>(key, something);
        return { previousItems: something };
      }
    },
    onError: (_err, _variables, context) => {
      if (context?.previousItems) {
        queryClient.setQueryData<Response<T[]>>(key, context.previousItems);
      }
    },
    onSettled: () => {
      queryClient.invalidateQueries(key);
    },
  });
