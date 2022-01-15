import { Draggable } from "react-beautiful-dnd"
import { PipelineItems } from "./items"

interface PipeLineColumnProps {
  pipeline: any,
  index: number;
}

export const PipeLineColumn = ({ pipeline, index }: PipeLineColumnProps) => {
  return (
    <Draggable draggableId={pipeline.id} index={index}>
      {(providedColumn) => (
        <div
          className="wrapper-pipeline-column"
          ref={providedColumn.innerRef}
          {...providedColumn.draggableProps}
        >
          <PipelineItems pipeline={pipeline} providedColumn={providedColumn} />
        </div>

      )}
    </Draggable>

  )
}
