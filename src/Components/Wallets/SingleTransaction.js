import React from 'react'
import TopLabel from './TopLabel'

const SingleTransaction = () => {
  return (
    <div className='singleTransaction'>
      <div className='imageCollection'>
        <h4>ImageCollection</h4>
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