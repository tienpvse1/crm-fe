import { IPipelineColumn } from "@interfaces/pipeline"
import { Draggable } from "react-beautiful-dnd"
import { PipelineItems } from "./items"

interface PipeLineColumnProps {
  pipelineColumn: IPipelineColumn,
  index: number;
}

export const PipeLineColumn = ({ pipelineColumn, index }: PipeLineColumnProps) => {
  return (
    <Draggable draggableId={pipelineColumn.name} index={index}>
      {(providedColumn) => (
        <div
          className="wrapper-draggable-pipeline-column"
          ref={providedColumn.innerRef}
          {...providedColumn.draggableProps}
        >
          <div className="pipeline-column-header" >
            <h1 {...providedColumn.dragHandleProps}>
              {pipelineColumn.name.toUpperCase()}
            </h1>
          </div>
          <PipelineItems pipelineColumn={pipelineColumn} />
        </div>

      )}
    </Draggable>

  )
}
