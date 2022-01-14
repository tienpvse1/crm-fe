import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import { PipeLineColumn } from './column';
export const PipelineWrapper = () => {

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
        },
        {
          id: 't4',
          title: '',
          description: ''
        },
        {
          id: 't5',
          title: '',
          description: ''
        },
        {
          id: 't6',
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
    }
  ]


  const onDragEnd = (result: DropResult) => {
    // const {source, destination} = result;
    // if(!destination) return

    // const items = Array.from(todo);
    // const [newOrder] =items.splice(source.index, 1);
    // items.splice(destination.index, 0, newOrder);

    // setTodo(items);
    console.log(result);

  }

  return (

    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable
        droppableId="all-columns"
        direction="horizontal"
        type="column"
      >
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row'
            }}
          >
            {
              pipeLinesData.map((pipeline, index) =>
                <PipeLineColumn index={index} key={pipeline.id} pipeline={pipeline} />)
            }
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}
