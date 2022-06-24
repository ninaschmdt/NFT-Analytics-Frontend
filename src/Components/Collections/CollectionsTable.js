import React from 'react'
import SingleCollection from './SingleCollection'
import Sales from './Sales'
import SalesFloor from './SalesFloor'
import TopLabel from '../Wallets/TopLabel'
import axios from 'axios'
import { useEffect, useState } from 'react'
import fetchData, { trendingCollections } from '../Utils/CollectionFetch'
 

const CollectionsTable = () => {

  const [dataCollection, setDataCollection] = useState([]);

  useEffect(() => {
    (async () => {
      const { queryResult, error } = await fetchData(trendingCollections);
      if (error) {
        return console.error(error)
      }
      console.log('IT IS HAPPENING HERE QUERYRESULT', queryResult)
    })()
  }, [])

  //const [dataCollection, setDataCollection] = useState([]);



  /*useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users') 
      .then(res => setDataCollection(res.data.slice(0, 10)))
      .catch(err => console.log(err))
  }, []);
*/
console.log('THIS IS THE DATA COLLECTION', dataCollection)
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
        console.log('HERE IS THE DATA', collectionItem)
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