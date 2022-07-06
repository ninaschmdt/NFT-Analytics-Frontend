import React from 'react'
import TopLabel from './TopLabel'
import CollectionImage from '../Collections/CollectionImage'
import axios from 'axios'
import { useEffect, useState } from 'react'
import SingleCollection from '../Collections/SingleCollection'
import Sales from '../Collections/Sales'
import SalesFloor from '../Collections/SalesFloor'

const MultipleTransactions = ({ transactionName, etherscan, date, tokenName, contractAddress, dataCollection }) => {

  const [address, setAddress] = useState([])

  useEffect(() => {
    setAddress(dataCollection?.map(oneCollection => (
      oneCollection.node.address
   )))
  }, [])

  

//   console.log('transaction name: ',transactionName, 'data collection: ', dataCollection?.map(oneCollection => (
//     oneCollection.node.address
//  )))

  let newDate = new Date(date * 1000).toISOString().slice(0, 19).replace('T', ' ');

  return (
      <div className='multipleTransactions'>
        <a className='bloodyLink' href={`https://opensea.io/assets?search%5Bquery%5D=${contractAddress}`} target='_blank'>
          <div className='walletNameTop'>
              <h3>{tokenName}</h3>
              <br></br>
              {/* Contract address for top 10: {transactionName} */}
            <div className='top'>
              {address.includes(transactionName) ? <TopLabel /> : 'NEIN'}
            </div>
          </div>
          <div className='collectionLinkDate'>
              <a className='etherscan' href={`https://etherscan.io/tx/${etherscan}`} target='_blank'>Etherscan&nbsp;
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667" stroke="#B0B2B9" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M12.5 2.5H17.5V7.5" stroke="#B0B2B9" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                  <path d="M8.33301 11.6667L17.4997 2.5" stroke="#B0B2B9" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
              </a>
            <div className='newDate'>
              {newDate}
            </div>
          </div>
        </a>
      </div>
  )
}

export default MultipleTransactions

// -Create a component for a single wallet. We pass down the 5 "multiple transactions" to this component. 
// -In this component, we render the wallet name and the 5 "multiple transactions".







// In here I need to get dataCollection from CollectionTable.js AND transactionName (which is already here)