import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid'

const itemsFromBackend = [
  {id: uuidv4(), content: 'First task'},
  {id: uuidv4(), content: 'Second task'},
]

const columnsFromBackend = [
  {
    [uuidv4()]: {
      name: 'Todo',
      items: [itemsFromBackend]
    }
  }
]

const KanbanBoard = () => {
  const [columns, setColumns] = useState(columnsFromBackend)

  const [winReady, setWinReady] = useState(false)

  useEffect(() => {
    setWinReady(true)
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100%'}}>

      {winReady &&
        <DragDropContext onDragEnd={result => console.log(result)}>
          {Object.entries(columns).map(([id, column]) => {
            <Droppable droppableId={id}>
              {(provided, snapshot) => {
                return (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={{
                      background: snapshot.isDraggingOver ? 'lightblue' : 'lightgrey',
                      padding: 4,
                      width: 250,
                      minHeight: 500
                    }}
                  >
                    
                  </div>
                )
              }}
            </Droppable>
          })}
        </DragDropContext> 
      }
    </div>
  )
}

export default KanbanBoard
