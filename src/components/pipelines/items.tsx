import { Draggable, DraggableProvided, Droppable } from 'react-beautiful-dnd'
import { PipelineCardItem } from './card-item'

interface PipelineItemsProps {
  pipeline: any;
  providedColumn: DraggableProvided;
}

export const PipelineItems = ({ pipeline, providedColumn }: PipelineItemsProps) => {
  return (
    <>
      <Droppable droppableId={pipeline.name} type="task">
        {(provided) => (
          <div
            className="pipeline-column"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <div className="pipeline-column-header" >
              <h1 {...providedColumn.dragHandleProps}>
                {pipeline.name.toUpperCase()}
              </h1>
            </div>
            {pipeline.pipelineItems.map((data: any, index: number) =>
              <Draggable key={data.id} draggableId={data.id} index={index}>
                {(provided) => (
                  <div
                    className='wrapper-draggable-card'
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <PipelineCardItem dataCardPipeline={data} />
                  </div>
                )}
              </Draggable>)}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </>
  )
}
