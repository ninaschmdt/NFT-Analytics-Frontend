import React from 'react'
import SalesFloorChange from './SalesFloorChange'

const SalesFloor = ( {data} ) => {
  return (
    <div className='sales'>{data}
    <SalesFloorChange />
    </div>
  )
}

export default SalesFloor