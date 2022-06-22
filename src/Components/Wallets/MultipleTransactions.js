import React from 'react'
import TopLabel from './TopLabel'
import CollectionImage from '../Collections/CollectionImage'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SingleCollection from '../Collections/SingleCollection'
import Sales from '../Collections/Sales'
import SalesFloor from '../Collections/SalesFloor'

const MultipleTransactions = ({ transactionName, status, money, link, date }) => {
  return (
    <div className='multipleTransactions'>
      <div className='singleTransaction'>
        <div className='collectionImage'>
        </div>
        <div className='singleCollectionNameStatusLinkDateTop'>
          <div className='collectionNameStatus'>
            <div className='collectionNameTop'>
              <div>
                {transactionName}
              </div>
              <div className='top'>
                <TopLabel />
              </div>
            </div>
            <div className='collectionStatus'>
              <div>
                {status} |
              </div>
              <div>
                {money}
              </div>
            </div>
          </div>
          <div className='collectionLinkDate'>
            <div>
              {link}
            </div>
            <div>
              {date}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MultipleTransactions