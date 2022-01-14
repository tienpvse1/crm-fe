import { Draggable, Droppable } from "react-beautiful-dnd"
import { PipelineItem } from "./item"

interface PipeLineColumnProps {
  pipeline: any,
  index: number;
}

export const PipeLineColumn = ({ pipeline, index }: PipeLineColumnProps) => {
  return (
    <Draggable draggableId={pipeline.id} index={index}>
      {(providedColumn) => (
        <div
          ref={providedColumn.innerRef}
          {...providedColumn.draggableProps}
        >
          <Droppable droppableId={pipeline.id} type="task">
            {(provided) => (
              <div
                className="pipeline-column"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                <div className="pipeline-column-header" >
                  <h1 {...providedColumn.dragHandleProps} >{pipeline.id.toUpperCase()}</h1>
                </div>
                {pipeline.dataCard.map((data: any, index: number) =>
                  <Draggable key={data.id} draggableId={data.id} index={index}>
                    {(provided) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <h1>{data.id}</h1>
                        <PipelineItem />
                      </div>
                    )}
                  </Draggable>)}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </div>

      )}
    </Draggable>

  )
}
