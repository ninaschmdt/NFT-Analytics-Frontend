import React from 'react'
import CollectionName from './CollectionName'
import CollectionImage from './CollectionImage'
import CollectionSupply from './CollectionSupply'

function SingleCollection({ data }) {

  return <div className='singleCollectionImageNameSupply'>
    <div>
      <CollectionImage node={data.node} />
    </div>
    <div className='singleCollectionNameSupply'>
      <div className='collectionName'>
        <CollectionName name={data.node.name} />
      </div>
      <div className='collectionSupply'>
        <CollectionSupply supply={data.node.circulatingSupply} />
      </div>
    </div>
  </div>
}

export default SingleCollection