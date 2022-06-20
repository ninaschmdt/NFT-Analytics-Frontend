import React from 'react'
import SalesChange from './SalesChange'

const Sales = ( {data} ) => {
  return (
    <div>{data.address.geo.lng}
      <SalesChange />
    </div>
  )
}

export default Sales