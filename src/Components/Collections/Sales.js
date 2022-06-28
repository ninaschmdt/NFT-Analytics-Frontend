import React from 'react'
import SalesChange from './SalesChange'

const Sales = ( {data} ) => {
  return (
    <div className='sales'>{data}
      <SalesChange />
    </div>
  )
}

export default Sales