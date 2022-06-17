import React from 'react'
import SingleCollection from './SingleCollection'
import Sales from './Sales'
import SalesFloor from './SalesFloor'

const CollectionsTable = () => {
  return (
    <div><h1>CollectionsTable</h1>
      <SingleCollection></SingleCollection>
      <Sales></Sales>
      <SalesFloor></SalesFloor>
    </div>
  )
}

export default CollectionsTable