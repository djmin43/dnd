import React, { useEffect, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
import { css } from '@emotion/css'
import { feDevs, beDevs, DevList, Developer } from '../prototype-list'

const PrototypeDnd = () => {

  const [isListActive, setIsListActive] = useState(false)

  const [items, setItems] = useState(feDevs)

  useEffect(() => {
    setIsListActive(true)
  }, [])

  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
  }
    console.log(result)
    const newItems = [...items]
    const [removed] = newItems.splice(result.source.index, 1)
    newItems.splice(result.destination.index, 0, removed)
    setItems(newItems)
  }

  return (
    <div>
      FE List
      {isListActive &&
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="fe" direction="vertical" type="front-end">
            {(provided, snapshot) => (
              <div
                className={boardStyle}
                {...provided.droppableProps}
                ref={provided.innerRef}
                
              >
                {feDevs.map((card: Developer, index: number) => (
                  <Draggable draggableId={card.id} index={index} key={card.id}>
                    {(provided, snapshot) => (
                      <div
                        className={itemStyle}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {card.name}
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            ) }
          </Droppable>
          <Droppable droppableId="fe2" direction="vertical" type="back-end" >
            {(provided, snapshot) => (
              <div
                className={boardStyle}
                {...provided.droppableProps}
                ref={provided.innerRef}
                
              >
                {beDevs.map((card: Developer, index: number) => (
                  <Draggable draggableId={card.id} index={index} key={card.id}>
                    {(provided, snapshot) => (
                      <div
                        className={itemStyle}
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {card.name}
                      </div>
                    )}
                  </Draggable>
                ))}
              </div>
            ) }
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
