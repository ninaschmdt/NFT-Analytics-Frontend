import React from 'react'
import CollectionName from './CollectionName'
import CollectionImage from './CollectionImage'
import CollectionSupply from './CollectionSupply'

function SingleCollection({ data }) {

  return <div className='singleCollectionImageNameSupply'>
    <div className='collectionImage'>
    </div>
    <div className='singleCollectionNameSupply'>
      <div className='collectionName'>
        <CollectionName name={data.name}/>
      </div>
      <div className='collectionSupply'>
        <CollectionSupply supply={data.address.zipcode}/>
      </div>
    </div>
  </div>
}

export default SingleCollection