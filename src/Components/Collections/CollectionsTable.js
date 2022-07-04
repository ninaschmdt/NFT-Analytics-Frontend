import React from 'react'
import SingleCollection from './SingleCollection'
import Sales from './Sales'
import SalesFloor from './SalesFloor'
import TopLabel from '../Wallets/TopLabel'
import axios from 'axios'
import { useEffect, useState } from 'react'
<<<<<<< Updated upstream
import { trendingCollections } from '../Utils/CollectionFetch'
import fetchData from '../Utils/CollectionFetch'
=======
import fetchData, { trendingCollections } from '../Utils/CollectionFetch'
import Loading from '../Images/Loading'
>>>>>>> Stashed changes


const CollectionsTable = () => {
  const [dataCollection, setDataCollection] = useState([]);
  const [prevDataCollection, setPrevDataCollection] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { queryResult, error } = await fetchData(trendingCollections);
      if (error) return console.log(error)
      setDataCollection(prev => {
        setPrevDataCollection(prev)
        return queryResult.data.data.contracts.edges.slice(0, 10)
      })
    }
    getData()
    const id = setInterval(getData, 5000);

    return () => clearInterval(id)
  }, [])

  return (
    <div className='collectionsTable'>
      <div className='tableHeader'>
        <h1>Top 10 Trending</h1>
        <TopLabel />
      </div>
      <div className='tableSubHeader'>
        <div className='singleCollection'>Collection</div>
        <div className='singleCollectionSales'>Sales Floor</div>
        <div className='singleCollectionSales'>Sales per Hour</div>
      </div>
<<<<<<< Updated upstream
      {dataCollection.map(collectionItem => {
=======
      {loading ? <Loading/> : dataCollection.map(collectionItem => {
>>>>>>> Stashed changes
        return (
          <div className="singleCollectionContainer" key={collectionItem.node.address}>
            <SingleCollection data={collectionItem} />
            <div className='singleCollectionSales'>
              <SalesFloor address={collectionItem.node.address} floor={collectionItem.node.stats.floor} prevDataCollection={prevDataCollection} />
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