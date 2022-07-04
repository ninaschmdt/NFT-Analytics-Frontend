import React from 'react'
import SingleCollection from './SingleCollection'
import Sales from './Sales'
import SalesFloor from './SalesFloor'
import TopLabel from '../Wallets/TopLabel'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { trendingCollections } from '../Utils/CollectionFetch'
import fetchData from '../Utils/CollectionFetch'


const CollectionsTable = () => {
  const [dataCollection, setDataCollection] = useState([]);
  const [prevDataCollection, setPrevDataCollection] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = (async () => {
      try {
        setLoading(true)
        const { data: { queryResults, error } } = await axios.post(`${process.env.REACT_APP_FOMO_BACKEND}/icytoolsproxy`, { query: trendingCollections });
        if (error) {
          setLoading(false)
          return console.log(error)
        }
        setDataCollection(prev => {
          setPrevDataCollection(prev)
          return queryResults.data.contracts.edges.slice(0, 10)
        })
        setLoading(false)
      } catch (error) {
        console.log(error)
      }
    })
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
      {dataCollection.map(collectionItem => {
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