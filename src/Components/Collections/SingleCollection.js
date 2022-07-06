import React from 'react'
import CollectionName from './CollectionName'
import CollectionImage from './CollectionImage'
import CollectionSupply from './CollectionSupply'

function SingleCollection({ data }) {
  // console.log('THIS IS THE DATA', data)

  return (
    <div>
      <a href={`https://opensea.io/collection/${data.node.unsafeOpenseaSlug}`}  target='_blank'>
          <div className='singleCollectionImageNameSupply'>
            <CollectionImage image={data.node.unsafeOpenseaImageUrl} />
            <div className='singleCollectionNameSupply'>
              <div className='collectionName'>
                <CollectionName name={data.node.name} />
              </div>
              <div className='collectionSupply'>
                <CollectionSupply supply={data.node.circulatingSupply} />
              </div>
            </div>
          </div>
      </a>
    </div>
  )
}

export default SingleCollection