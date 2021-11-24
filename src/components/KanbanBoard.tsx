import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid'

const columnsFromBackend = [
  {

  }
]

const KanbanBoard = () => {

  const [winReady, setWinReady] = useState(false)

  useEffect(() => {
    setWinReady(true)
  }, [])

  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100%'}}>

      {winReady &&
        <DragDropContext onDragEnd={result => console.log(result)}>
          
        </DragDropContext> 
      }
    </div>
  )
}

export default KanbanBoard
