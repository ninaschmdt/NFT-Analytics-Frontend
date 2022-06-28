import React from 'react'
import SalesChange from './SalesChange'

const Sales = ( {data} ) => {
  return (
    <div>{data}
      <SalesChange />
    </div>
  )
}

export default Sales