import React, { FC } from 'react'

interface IProps {
  colIndex?: number
  rowIndex?: number
}

const Block: FC<IProps> = ({ colIndex, rowIndex }) => {
  return (
    <div data-cy="block">
      |{colIndex}
      {rowIndex}|
    </div>
  )
}

export default Block
