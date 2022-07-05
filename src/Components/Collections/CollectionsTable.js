import React from 'react'
import SingleCollection from './SingleCollection'
import Sales from './Sales'
import SalesFloor from './SalesFloor'
import TopLabel from '../Wallets/TopLabel'
import axios from 'axios'
import { useEffect, useState } from 'react'
import fetchData, { trendingCollections } from '../Utils/CollectionFetch'
import Loading from '../Images/Loading'


const CollectionsTable = ({ func }) => {
  const [dataCollection, setDataCollection] = useState([]);
  const [prevDataCollection, setPrevDataCollection] = useState([]);
  const [loading, setLoading] = useState(false);

  func = dataCollection;

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

  // console.log('THIS IS THE DATA COLLECTION', dataCollection)
  return (
    <div className='collectionsTable'>
      <div className='tableHeader'>
        <h1>Top 10 Trending Collections</h1>
        <TopLabel />
      </div>
      <div className='tableSubHeader'>
        <div className='singleCollection'>Collection</div>
        <div className='singleCollectionSales'>Sales Floor</div>
        <div className='singleCollectionSales'>Sales per Hour</div>
      </div>
      {dataCollection.map(collectionItem => {
        console.log('inside mapping', collectionItem)
        return (
          <div className="singleCollectionContainer" key={collectionItem.node.address}>
            <SingleCollection data={collectionItem} />
            <div className='singleCollectionSales'>
              <SalesFloor address={collectionItem.node.address} floor={collectionItem.node.stats.floor} prevDataCollection={prevDataCollection} />
            </div>
            <div className='singleCollectionSales'>
              <Sales address={collectionItem.node.address} totalSales={collectionItem.node.stats.totalSales} prevDataCollection={prevDataCollection} />
            </div>
          </div>
        )
      })
      }
      <div className='icytwitter'>
        <div>
          With support from <a href='https://icy.tools/' target='_blank'>ICY</a>, stay connected with us: <a href='https://twitter.com/fomotracker' target='_blank'>Twitter
          </a>
        </div>
      </div>
    </div>
  )
}

export default CollectionsTable


//In collections table we need dataCollection 

//We then wan t to compare this to 