import React from 'react'
import SingleCollection from './SingleCollection'
import Sales from './Sales'
import SalesFloor from './SalesFloor'
import TopLabel from '../Wallets/TopLabel'
import axios from 'axios'
import { useEffect, useState } from 'react'

const CollectionsTable = () => {

  const [dataCollectionName, setDataCollectionName] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users') /* offset / limit 10 here.*/
      .then(res => setDataCollectionName(res.data.slice(0, 10)))
      .catch(err => console.log(err))
  }, []);

  let slicedCollectionData = [];

  // useEffect(() => {
  //   if (dataCollectionName.length) {
  //     slicedCollectionData = dataCollectionName.slice(0, 9)
  //   }
  // }, [dataCollectionName, slicedCollectionData])

  return (
    <div className='collectionsTable'>
      <div className='tableHeader'>
        <h1>Top 10 Collections</h1>
        <TopLabel />
      </div>
      <div className='cell cell1'>Collection</div>
      <div className='cell cell2'>Sales Floor</div>
      <div className='cell cell3'>Sales</div>
      {dataCollectionName.length && dataCollectionName.map(nameItem => {
        return (
          <div key={nameItem.id}>
            <div className='cell cell4'><SingleCollection data={nameItem} /></div>
            <div className='cell cell5'><SalesFloor /></div>
            <div className='cell cell6'><Sales /></div>
          </div>
        )
      })
      }
    </div>
  )
}

export default CollectionsTable