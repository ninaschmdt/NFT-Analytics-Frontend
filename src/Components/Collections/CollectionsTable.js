import React from 'react'
import SingleCollection from './SingleCollection'
import Sales from './Sales'
import SalesFloor from './SalesFloor'
import TopLabel from '../Wallets/TopLabel'
import axios from 'axios'
import { useEffect, useState } from 'react'
import fetchData, { trendingCollections } from '../Utils/CollectionFetch'


const CollectionsTable = () => {
  const [loading, setLoading] = useState(false);
  const [dataCollection, setDataCollection] = useState([]);

  useEffect(() => {
    (async () => {
      setLoading(true)
      const { queryResult, error } = await fetchData(trendingCollections);
      if (error) {
        setLoading(false)
        return console.error(error)
      }
      setDataCollection(queryResult.data.data.contracts.edges)
      setLoading(false)
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
      {loading ? "Loading" : dataCollection.map(collectionItem => {
        return (
          <div className="singleCollectionContainer" key={collectionItem.id}>
            <SingleCollection data={collectionItem} />
            <div className='singleCollectionSales'>
              <SalesFloor data={collectionItem.node.stats.floor} />
            </div>
            <div className='singleCollectionSales'>
              <Sales data={collectionItem.node.stats.totalSales} />
            </div>
          </div>
        )
      })
      }
    </div>
  )
}

export default CollectionsTable