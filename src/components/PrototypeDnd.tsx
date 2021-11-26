import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { css } from '@emotion/css'
import { feDevList, beDevList, devList } from '../prototype-list'

const PrototypeDnd = () => {

  const [isListActive, setIsListActive] = useState(false)

  const [items, setItems] = useState(devList)

  useEffect(() => {
    setIsListActive(true)
  }, [])

  const onDragEnd = (result: any) => {
  //   if (!result.destination) {
  //     return;
  // }
  //   const newItems = [...items]
  //   const [removed] = newItems.splice(result.source.index, 1)
  //   newItems.splice(result.destination.index, 0, removed)
  //   setItems(newItems)
  }

  return (
    <div>
      FE List
      {isListActive &&
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="main" >
            {(provided, snapshot) => (
              
            )}
          </Droppable>
        </DragDropContext>
      }
    </div>
  )
}

const boardStyle = css`
  width: 30vw;
`

const itemStyle = css`
  border: 1px solid black;
  background-color: pink;
  border-radius: 4px;
`

export default PrototypeDnd
