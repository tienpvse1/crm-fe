import { IPipelineColumns, IPipelineItem } from '@interfaces/pipeline'
import { Draggable, Droppable } from 'react-beautiful-dnd'
import { PipelineCardItem } from './card-item'

interface PipelineItemsProps {
  pipelineColumn: IPipelineColumns;
}

export const PipelineItems = ({ pipelineColumn }: PipelineItemsProps) => {
  return (
    <>
      <Droppable droppableId={pipelineColumn.name} type="task">
        {(provided) => (
          <div
            className="pipeline-column"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {pipelineColumn.pipelineItems.map((data: IPipelineItem, index: number) =>
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
