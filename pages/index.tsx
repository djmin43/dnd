import type { NextPage } from 'next'
import DragAndDropList from '../src/components/DragAndDropList'
import DragList from '../src/components/DragList'
import { css } from '@emotion/css'

const Home: NextPage = () => {
  return (
    <div >
      <DragAndDropList />
      <DragList />
    </div>
  )
}


export default Home
