import React, { useState, useEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { resetServerContext } from 'react-beautiful-dnd'
import { elements } from '../list'
import ListItem from './ListItem'

const DragAndDropList = () => {

  resetServerContext()
  const [items, setItems] = useState(elements)

  useEffect(() => {
    resetServerContext()
  }, [items])

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
  }
    console.log('result', result)
    const newItems = [...items]
    const [removed] = newItems.splice(result.source.index, 1)
    newItems.splice(result.destination.index, 0, removed)
    setItems(newItems)
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {items.map((item, index) => (
              <Draggable draggableId={item.id} index={index} key={index}>
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                  >
                    <ListItem item={item} />
                  </div>
                )}
              </Draggable>
            ))}

          </div>
        )}
      </Droppable>
    </DragDropContext>
  )
}

export default DragAndDropList

// RESULT OBJECT
// interface DraggableLocation {
//   droppableId: string;
//   index: number;
// }

// interface Combine {
//   draggableId: string;
//   droppableId: string;
// }

// interface DragResult {
//   reason: 'DROP' | 'CANCEL';
//   destination?: DraggableLocation;
//   source: DraggableLocation;
//   combine?: Combine;
//   mode: 'FLUID' | 'SNAP';
//   draggableId: DraggableId;
// }