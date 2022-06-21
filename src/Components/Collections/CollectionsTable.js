import React from 'react'
import SingleCollection from './SingleCollection'
import Sales from './Sales'
import SalesFloor from './SalesFloor'
import TopLabel from '../Wallets/TopLabel'
import axios from 'axios'
import { useEffect, useState } from 'react'

const CollectionsTable = () => {

  const [dataCollection, setDataCollection] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users') 
      .then(res => setDataCollection(res.data.slice(0, 10)))
      .catch(err => console.log(err))
  }, []);

  return (
    <div className='collectionsTable'>
      <div className='tableHeader'>
        <h1>Top 10 Collections</h1>
        <TopLabel />
      </div>
      <div className='tableSubHeader'>
        <div className='singleCollection'>Collection</div>
        <div className='singleCollectionSales'>Sales Floor</div>
        <div className='singleCollectionSales'>Sales</div>
      </div> 
      {dataCollection.length && dataCollection.map(collectionItem => {
        return (
          <div className="singleCollectionContainer" key={collectionItem.id}>
            <SingleCollection data={collectionItem} />
            <div className='singleCollectionSales'>
              <SalesFloor data={collectionItem} />
            </div>
            <div className='singleCollectionSales'>
              <Sales data={collectionItem} />
            </div>
          </div>
        )
      })
      }
    </div>
  )
}

export default CollectionsTable