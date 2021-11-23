import React from 'react'
import { css } from '@emotion/css'

interface Props {
  item: {
    id: string;
    content: string;
  }
}

const itemStyle = css`
  width: 100px;
  height: 100px;
  border: 2px black solid;
`

const ListItem = ({item}: Props) => {
  return (
    <div className={itemStyle}>
      {item.content}
    </div>
  )
}

export default ListItem
