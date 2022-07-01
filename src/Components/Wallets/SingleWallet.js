import React from 'react'
import MultipleTransactions from './MultipleTransactions'

const SingleWallet = ({ singleWallet }) => {
  return (
    <div className='singleWallet'>
      <div className='singleWalletImageNameAddress'>
        <div className='walletImage'>
        </div>
        <div className='singleWalletNameAddress'>
          <div className='walletName'>
            {/* {walletName} */}
          </div>
        </div>
      </div>
      <div>
        <button className='button-secondary'>Remove</button>
      </div>
      <MultipleTransactions transactionName={singleWallet.contractAddress} etherscan={singleWallet.hash} date={singleWallet.timeStamp} tokenName={singleWallet.tokenName}/>

    </div>
  )
}

export default SingleWallet