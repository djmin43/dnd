import type { NextPage } from 'next'
import DragAndDropList from '../src/components/DragAndDropList'
import DragList from '../src/components/DragList'
import KanbanBoard from '../src/components/KanbanBoard'
import PrototypeDnd from '../src/components/PrototypeDnd'

const Home: NextPage = () => {
  return (
    <div >
      <PrototypeDnd />
    </div>
  )
}


export default Home
