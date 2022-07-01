import React from 'react'
import TopLabel from './TopLabel'
import CollectionImage from '../Collections/CollectionImage'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SingleCollection from '../Collections/SingleCollection'
import Sales from '../Collections/Sales'
import SalesFloor from '../Collections/SalesFloor'

const MultipleTransactions = ({ transactionName, etherscan, date, tokenName }) => {

  console.log('etehrscan', typeof etherscan)
  console.log('date', date)

  // let OtherDate = new Date(date * 1000)
  // let year = a.getFullYear();
  // let month = months[a.getMonth()];
  // let hours = OtherDate.getHours();
  // let minutes = '0' + OtherDate.getMinutes();
  // let seconds = '0' + OtherDate.getSeconds();

  // let formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
  // console.log('formattedTime', formattedTime)

  let newDate = new Date(date * 1000).toISOString().slice(0, 19).replace('T', ' ');
  console.log('newDate', newDate)

  return (

    <div className='multipleTransactions'>
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
            Etherscan: <a href={`https://etherscan.io/tx/${etherscan}`} target='_blank'>Click me</a>
          </div>
          Date: {newDate}
        </div>
      </div>
    </div>
  )
}

export default MultipleTransactions

// -Create a component for a single wallet. We pass down the 5 "multiple transactions" to this component. 
// -In this component, we render the wallet name and the 5 "multiple transactions".
