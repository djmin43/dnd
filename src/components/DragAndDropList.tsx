import React, { useState, useEffect, useLayoutEffect } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'
// import { resetServerContext } from 'react-beautiful-dnd'
import { elements } from '../list'
import ListItem from './ListItem'
import { css } from '@emotion/css'

const DragAndDropList = () => {
  const [items, setItems] = useState(elements)
  const [winReady, setWinReady] = useState(false)

  // useEffect(() => {
  //   resetServerContext()
  // }, [items])

  useEffect(() => {
    setWinReady(true)
  }, [])

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
      {winReady &&
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided, snapshot) => (
          <div
            className={containerStyle}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {provided.placeholder}
            {items.map((item, index) => (
              <Draggable draggableId={item.id} index={index} key={item.id}>
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
      }
       {winReady &&
      <Droppable droppableId="droppable" direction="horizontal">
        {(provided, snapshot) => (
          <div
            className={containerStyle}
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {provided.placeholder}
            {items.map((item, index) => (
              <Draggable draggableId={item.id} index={index} key={item.id}>
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
      }
    </DragDropContext>
  )
}

const containerStyle = css`
  display: inline-flex;
`

export default DragAndDropList
