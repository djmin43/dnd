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
- main props: droppableId and direction!

# Draggable
- container for all list elements.
- wrap every single list item with this element
- children element is a function that's called with snapshot property

# side notes
- source: information where the element was before
- destination: where element was dropped

