import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid'

const KanbanBoard = () => {
  const [winReady, setWinReady] = useState(true)

  useEffect(() => {
    setWinReady(true)
  }, [])
  return (
    <div style={{ display: 'flex', justifyContent: 'center', height: '100%'}}>
      {winReady &&
        <div></div>
      }
    </div>
  )
}

export default KanbanBoard
