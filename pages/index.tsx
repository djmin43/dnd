import type { NextPage } from 'next'
import DragAndDropList from '../src/components/DragAndDropList'

const Home: NextPage = () => {
  return (
    <div className="App">
      <DragAndDropList />
    </div>
  )
}

export default Home
