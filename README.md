# drag and drop your belongings

# DragDropContext
- context that contians all the informaiton about drag-and-drop lists. 
- it accepts the "onDrag" function -- key callback for controlling the data of list.
- having nested DragDropContext is not supported.
- more like provider component in react-redux.
- include responders as props!

# Droppable
- contains LISTS and DROP ZONE.
- must be identified with a dropaableId.
- must be wrapped around a function that returns a React element.
- this function is called with internal params and a snapshot with information about the STATE of the list.
- can be dropped on by a Draggable. Draggable must be contained.
- main props: droppableId(string) and direction!
- has children function with two arguments that returns a ReactElement!
  - provided:
    - "provided.innerRef": In order for the droppable to function correctly, you must bind the provided.innerRef to the highest possible DOM node in the ReactElement. We do this in order to avoid needing to use ReactDOM to look up your DOM node. (ref={provided.innerRef})
    - "provided.placeholder": it holds space for droppable. it is placed of the component that has ref provided.
    - "provided.droppableProps": samely placed as provided.innerRef. (insdie div, for example)
  - snapshot: literally snapshot of the drag motion
    - for example, 'snapshot.isDraggingOver returns boolean if item is being dragged over'

# Draggable
- container for all list elements.
- wrap every single list item with this element.
- children element is a function that's called with snapshot property.
- it is POSSIBLE to reorder dragable within its home droppable.
- it is POSSIBLE to move another.
- "Droppable" is free to control what it allows to be dropped on it.
- every draggable has a drag handle -> "drag handle" can be the draggable element itself, or a child of the draggable.
- REQUIRED props:
  - draggableId (must be string)
  - index: number that matches the order of the draggable. (must be consecutive. must be unique within droppable)
- children func (provided, snapshot): "React" children of a draggable must be a function that retunrs a "ReactNode"
  - "innerRef"
  - "provided.draggableProps": object that contains data attr and inline style.
  - must add key!
  

# side notes
- source: information where the element was before
- destination: where element was dropped

