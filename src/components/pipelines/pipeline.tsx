import { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import { PipeLineColumn } from './column';

export const Pipeline = () => {
  const pipeLineDataApi = [
    {
      name: "string",
      account: {},
      pipelineColumns: [
        {
          name: "todo",
          pipeline: "string",
          pipelineItems: [
            {
              id: "t1",
              name: "my todo 1",
              pipelineColumn: "string"
            },
            {
              id: "t2",
              name: "my todo 2",
              pipelineColumn: "string"
            },
            {
              id: "t3",
              name: "my todo 3",
              pipelineColumn: "string"
            },
            {
              id: "t4",
              name: "my todo 4",
              pipelineColumn: "string"
            }
          ]
        },
        {
          name: "inProgress",
          pipeline: "string",
          pipelineItems: [
            {
              id: "i1",
              name: "my progress 1",
              pipelineColumn: "string"
            },
            {
              id: "i2",
              name: "my progress 2",
              pipelineColumn: "string"
            },
            {
              id: "i3",
              name: "my progress 3",
              pipelineColumn: "string"
            }
          ]
        },
        {
          name: "report",
          pipeline: "string",
          pipelineItems: [
            {
              id: "r1",
              name: "my report 1",
              pipelineColumn: "string"
            }
          ]
        },
        {
          name: "done",
          pipeline: "string",
          pipelineItems: [
            {
              id: "d1",
              name: "done 1",
              pipelineColumn: "string"
            }
          ]
        },
        {
          name: "done2",
          pipeline: "string",
          pipelineItems: [
            {
              id: "d2",
              name: "done 1",
              pipelineColumn: "string"
            }
          ]
        }
      ]
    }
  ]

  const totalColumn = pipeLineDataApi[0].pipelineColumns.length;


  const [state, setState] = useState(pipeLineDataApi);


  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    //nếu ko có vị trí điểm đến -> return
    if (!destination) return
    //nếu kéo thả ở 1 vị trí cũ -> return tránh xử lý code bên dưới -> giảm tải 
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) return

    //copy ra mảng mới


    //Xử lý cho kéo thả cột
    //di chuyển đổi chỗ cột
    if (result.type == 'column') {
      const items = Array.from(state[0].pipelineColumns);
      // //lấy ra dữ liệu và vị trí card đang được nắm kéo
      const [newItemColumn] = items.splice(source.index, 1);
      // //thêm dữ liệu card đang được nắm bỏ vào vị trí điểm đến (destination.index)
      items.splice(destination.index, 0, newItemColumn);

      const newState = [
        {
          ...state[0],
          pipelineColumns: items
        }
      ]

      setState(newState);
      console.log('column:', newState);
    }

    //Xử lý cho kéo thả item
    if (result.type == 'task') {
      const start = result.source.droppableId;
      const finish = result.destination?.droppableId;

      //di chuyển các item trong 1 cột
      if (start === finish) {
        //find
        const column = state[0].pipelineColumns.find(value =>
          value.name == result.source.droppableId)

        const items = Array.from(column!.pipelineItems);
        // // //lấy ra dữ liệu và vị trí card đang được nắm kéo
        const [newItemColumn] = items.splice(source.index, 1);
        // // //thêm dữ liệu card đang được nắm bỏ vào vị trí điểm đến (destination.index)
        items.splice(destination.index, 0, newItemColumn);

        const newColumn = state[0].pipelineColumns.map((item) => {
          if (item.name == result.source.droppableId) {
            return { ...item, pipelineItems: items };
          } else {
            return item;
          }
        })

        const newState = [
          {
            ...state[0],
            pipelineColumns: newColumn
          }
        ]

        setState(newState);
      }

      //di chuyển các item qua lại nhiều cột


      console.log('task:', result);
    }

  }

  return (

    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="all-columns"
        direction="horizontal"
        type="column"
      >

        {(providedColumns) => (
          <div className='scroll-menu'>
            <div
              className='wrapper-droppable-columns'
              style={{ width: `${ 335 * totalColumn}px` }}
              {...providedColumns.droppableProps}
              ref={providedColumns.innerRef}
            >

              {state[0].pipelineColumns.map((pipeline, index) =>
                <PipeLineColumn index={index} key={pipeline.name} pipeline={pipeline} />)
              }

              {providedColumns.placeholder}
            </div>
          </div>

        )}
      </Droppable>
    </DragDropContext>
  )
}
