import { useState } from 'react';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import { PipeLineColumn } from './column';

export const Pipeline = () => {

  const pipeLinesData = [
    {
      id: 'todo',
      dataCard: [
        {
          id: 't1',
          title: '',
          description: ''
        },
        {
          id: 't2',
          title: '',
          description: ''
        },
        {
          id: 't3',
          title: '',
          description: ''
        }
      ]
    },
    {
      id: 'inProgress',
      dataCard: [
        {
          id: 'i1',
          title: '',
          description: ''
        },
        {
          id: 'i2',
          title: '',
          description: ''
        }
      ]
    },
    {
      id: 'report',
      dataCard: []
    },
    {
      id: 'done',
      dataCard: []
    }, {
      id: 'done2',
      dataCard: []
    }
  ]

  // const pipeLineDataApi = [
  //   {
  //     name: "string",
  //     account: {},
  //     pipelineColumns: [
  //       {
  //         name: "todo",
  //         pipeline: "string",
  //         pipelineItems: [
  //           {
  //             name: "string",
  //             pipelineColumn: "string"
  //           }
  //         ]
  //       },
  //       {
  //         name: "inProgress",
  //         pipeline: "string",
  //         pipelineItems: [
  //           {
  //             name: "string",
  //             pipelineColumn: "string"
  //           }
  //         ]
  //       }
  //     ]
  //   }
  // ]

  const [state, setState] = useState(pipeLinesData);


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
    if (result.type == 'column') {
      const items = Array.from(state);
      //lấy ra dữ liệu và vị trí card đang được nắm kéo
      const [newItemColumn] = items.splice(source.index, 1);
      //thêm dữ liệu card đang được nắm bỏ vào vị trí điểm đến (destination.index)
      items.splice(destination.index, 0, newItemColumn);
      setState(items);
      console.log('column:', result);
    }

    //Xử lý cho kéo thả item
    if (result.type == 'task') {
      // const start = result.source.index;
      // const finish = result.destination?.index;
      // if (start === finish) {

      // }
      // const column = state

      // const items = Array.from(state[0].dataCard);

      // const [newItem] = items.splice(source.index, 1);

      // items.splice(destination.index, 0, newItem);

      // const newColumn = [
      //   {

      //   }
      // ]

      // const newstate = [
      //   ...state,

      // ]

      // setState(items);
      // console.log('test:', state['todo']);
      
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
              className='droppable-wrapper-columns'
              {...providedColumns.droppableProps}
              ref={providedColumns.innerRef}
            >

              {state.map((pipeline, index) =>
                <PipeLineColumn index={index} key={pipeline.id} pipeline={pipeline} />)
              }

              {providedColumns.placeholder}
            </div>
          </div>

        )}
      </Droppable>
    </DragDropContext>
  )
}
