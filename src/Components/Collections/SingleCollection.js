import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import CollectionName from './CollectionName'
import CollectionImage from './CollectionImage'
import CollectionSupply from './CollectionSupply'


function SingleCollection() {
  const [dataCollectionName, setDataCollectionName] = useState([]);

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => setDataCollectionName(res.data))
    .catch(err => console.log(err))
  }, []);

const arrayName = [
  { heading: 'Name', value: 'name' }
]

  return (
    <div className='singleCollection'>
      <div className='collectionImage'>
        <CollectionImage/>
      </div>
      <div className='singleCollectionNameSupply'>
        <div className='collectionName'>
          <CollectionName data={dataCollectionName}/>
        </div>
        <div className='collectionSupply'>
          <CollectionSupply />
        </div>
      </div>
    </div>
  )
}

export default SingleCollection