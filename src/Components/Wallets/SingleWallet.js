import React from 'react'
import MultipleTransactions from './MultipleTransactions'
import { useState } from 'react';


const SingleWallet = ({ data }) => {
  const [loading, setLoading] = useState(false);

  return (
    <div className='singleWallet'>
      <div className='singleWalletImageNameAddress'>
        <div className='walletImage'>
        </div>
        <div className='singleWalletNameAddress'>
          <div className='walletName'>
            {/* {transactionItem.to} */}
          </div>
        </div>
      </div>
      <div>
        <button className='button-secondary'>Remove</button>
      </div>
      {loading ? "Loading" : data.map(transactionItem => {
        return (
          <div key={transactionItem.id}>
            <MultipleTransactions transactionName={transactionItem.contractAddress} etherscan={transactionItem.hash} date={transactionItem.timeStamp} tokenName={transactionItem.tokenName} contractAddress={transactionItem.contractAddress} />
          </div>
        )
      })
      }
    </div>
  )
}

export default SingleWallet