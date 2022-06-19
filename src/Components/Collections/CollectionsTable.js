import React from 'react'
import SingleCollection from './SingleCollection'
import Sales from './Sales'
import SalesFloor from './SalesFloor'
import TopLabel from '../Wallets/TopLabel'

const CollectionsTable = () => {
  return (
    <div className='collectionsTable'>
      <div className='tableHeader'>
        <h1>Top 10 Collections</h1>
        <TopLabel />
      </div>
      <div className='cell cell1'>Collection</div>
      <div className='cell cell2'>Sales Floor</div>
      <div className='cell cell3'>Sales</div>
      <div className='cell cell4'><SingleCollection /></div>
      <div className='cell cell5'><SalesFloor /></div>
      <div className='cell cell6'><Sales /></div>
    </div>
  )
}

export default CollectionsTable