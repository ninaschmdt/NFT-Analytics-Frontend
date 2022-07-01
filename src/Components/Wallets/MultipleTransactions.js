import React from 'react'
import TopLabel from './TopLabel'
import CollectionImage from '../Collections/CollectionImage'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SingleCollection from '../Collections/SingleCollection'
import Sales from '../Collections/Sales'
import SalesFloor from '../Collections/SalesFloor'

const MultipleTransactions = ({ transactionName, etherscan, date, tokenName }) => {

  return (
    <div className='multipleTransactions'>
      <div className='singleTransaction'>
        <div className='singleCollectionNameStatusLinkDateTop'>
          <div className='collectionNameStatus'>
            <div className='collectionNameTop'>
              <div>
                Collection name: {tokenName}
                <br></br>
                Contract address for top 10: {transactionName}
              </div>
              <div className='top'>
                <TopLabel />
              </div>
            </div>
          </div>
          <div className='collectionLinkDate'>
            <div>
              Etherscan: {etherscan}
            </div>
            <div>
              Date: {date}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MultipleTransactions