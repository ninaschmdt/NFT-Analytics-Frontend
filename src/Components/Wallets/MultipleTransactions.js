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
      <h4>Transactions must be 5</h4>
      <div className='singleTransaction'>
        <div className='collectionImage'>
        </div>
        <div className='singleCollectionNameStatusLinkDateTop'>
          <div className='collectionNameStatus'>
            <div className='collectionNameTop'>
              <div>
                CollectionName<br></br>{transactionName}
              </div>
              <div className='top'>
                <TopLabel />
              </div>
            </div>
            <div className='collectionStatus'>
              <div>
                Status<br></br>{status} |
              </div>
              <div>
                Money<br></br>
                {money}
              </div>
            </div>
          </div>
          <div className='collectionLinkDate'>
            <div>
              Etherscan<br></br>{link}
            </div>
            <div>
              Date<br></br>
              {date}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MultipleTransactions