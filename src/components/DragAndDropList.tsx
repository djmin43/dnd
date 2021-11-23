import React, { useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { elements } from '../list'
import ListItem from './ListItem'

const DragAndDropList = () => {
  const [items, setItems] = useState(elements)

  const onDragEnd = () => {
    
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="droppable">
        {(provided, snapshot) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {elements.map((item, index) => (
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
