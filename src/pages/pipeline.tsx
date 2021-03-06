import { WrapperRowTitle } from '@components/layout/title-pages/wrapper-row-title';
import { ScrollBarHorizontal } from '@components/pipelines/scrollbar/scrollbar-horizontal';
import { SearchBar } from '@components/search-bar';
import { useHandleDnD } from '@hooks/useHandleDnD';
import { IPipeline } from '@interfaces/pipeline';
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import { PipeLineColumn } from '../components/pipelines/column';

export const Pipeline = () => {

  const pipeLineDataApi: IPipeline[] = [
    {
      name: "string",
      account: null!,
      pipelineColumns: [
        {
          name: "todo",
          pipeline: "string",
          pipelineItems: [
            {
              id: "t1",
              name: "my todo 1",
              createdAt: null!,
              deletedAt: null!,
              updatedAt: null!,
              pipelineColumn: null!
            },
            {
              id: "t2",
              name: "my todo 2",
              createdAt: null!,
              deletedAt: null!,
              updatedAt: null!,
              pipelineColumn: null!
            },
            {
              id: "t3",
              name: "my todo 3",
              createdAt: null!,
              deletedAt: null!,
              updatedAt: null!,
              pipelineColumn: null!
            },
            {
              id: "t4",
              name: "my todo 4",
              createdAt: null!,
              deletedAt: null!,
              updatedAt: null!,
              pipelineColumn: null!
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
              createdAt: null!,
              deletedAt: null!,
              updatedAt: null!,
              pipelineColumn: null!
            },
            {
              id: "i2",
              name: "my progress 2",
              createdAt: null!,
              deletedAt: null!,
              updatedAt: null!,
              pipelineColumn: null!
            },
            {
              id: "i3",
              name: "my progress 3",
              createdAt: null!,
              deletedAt: null!,
              updatedAt: null!,
              pipelineColumn: null!
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
              createdAt: null!,
              deletedAt: null!,
              updatedAt: null!,
              pipelineColumn: null!
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
              createdAt: null!,
              deletedAt: null!,
              updatedAt: null!,
              pipelineColumn: null!
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
              createdAt: null!,
              deletedAt: null!,
              updatedAt: null!,
              pipelineColumn: null!
            }
          ]
        }
      ]
    }
  ]

  const totalColumn = pipeLineDataApi[0].pipelineColumns.length;
  const widthOfItem = 333;

  const {
    pipeline,
    handleMoveColumn,
    handleMoveItemColumn,
    handleMoveItemsBetweenColumns } = useHandleDnD(pipeLineDataApi)

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;
    //n???u ko c?? v??? tr?? ??i???m ?????n -> return
    if (!destination) return;

    const startIndex = source.index;
    const finishIndex = destination.index;
    const startColumnName = source.droppableId;
    const finishColumnName = destination.droppableId;

    //n???u k??o th??? ??? 1 v??? tr?? -> return tr??nh x??? l?? code b??n d?????i
    if (
      finishColumnName === startColumnName &&
      finishIndex === startIndex
    ) return;

    //X??? l?? cho k??o th??? c???t
    if (result.type == 'column') {
      handleMoveColumn(startIndex, finishIndex);
    }

    //X??? l?? cho k??o th??? item
    if (result.type == 'task') {
      //di chuy???n c??c card item trong 1 column
      if (startColumnName === finishColumnName) {
        handleMoveItemColumn(startIndex, finishIndex, startColumnName);
        return;
      }

      //di chuy???n c??c item qua l???i nhi???u c???t
      handleMoveItemsBetweenColumns(startIndex, finishIndex, startColumnName, finishColumnName);
    }
  }

  return (
    <>
      <WrapperRowTitle
        title="Agreements"
        titleSize="27px"
        children={<SearchBar placeholder="Search for id, name or phone number" />}
      />
      <ScrollBarHorizontal>
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable
            droppableId="all-columns"
            direction="horizontal"
            type="column"
          >
            {(providedColumns) => (
              <div
                className='wrapper-droppable-columns'
                style={{ width: `${widthOfItem * totalColumn}px` }}
                {...providedColumns.droppableProps}
                ref={providedColumns.innerRef}
              >
                {pipeline[0].pipelineColumns.map((pipeline, index) =>
                  <PipeLineColumn index={index} key={pipeline.name} pipelineColumn={pipeline} />)
                }
                {providedColumns.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </ScrollBarHorizontal>
    </>
  )
}
