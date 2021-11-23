import React from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

const sampleList = [
  { id: 1, text: '고양이' },
  { id: 2, text: '강아지' },
  { id: 3, text: '조랑말' },
  { id: 4, text: '호랑이' },
  { id: 5, text: '코끼리' },
  { id: 6, text: '민동준' },
]

interface Item {
  id: number,
  text: string,
}

const MainPart = () => {
  return (
    <div>
      <DragDropContext>
        <Droppable droppableId="sampleList" >
          {(provided) => (
            <ul
              className="sampleList"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {sampleList.map((item: Item) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  index={item.id}>
                  {(provided) => <li>{item.text}</li>}
                </Draggable>
              ))}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  )
}

export default MainPart
