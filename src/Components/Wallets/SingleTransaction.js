import React from 'react'
import TopLabel from './TopLabel'
import CollectionImage from '../Collections/CollectionImage'

const SingleTransaction = () => {
  return (
    <div className='singleTransaction'>
      <div className='collectionImage'>
        <CollectionImage/>
      </div>
      <div className='singleCollectionNameStatusLinkDateTop'>
          <div className='collectionNameStatus'>
            <div className='collectionNameTop'>
              <div>CollectionName</div>
              <div className='top'>
                <TopLabel />
              </div>
            </div>
            <div className='collectionStatus'>
              <div>
                Status
              </div>
              <div>
                Money
              </div>
          </div>
        </div>
        <div className='collectionLinkDate'>
        <div>
          Link
        </div>
        <div>
          Date
        </div>
      </div>
      </div>
    </div>
  )
}

export default SingleTransaction