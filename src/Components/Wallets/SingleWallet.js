import React from 'react'

const SingleWallet = () => {
  return (
    <div className='singleWallet'>
      <div className='singleWalletImageNameAddress'>
        <div className='imageWallet'>
          <h4>ImageWallet</h4>
        </div>
        <div className='singleWalletNameAddress'>
          <div className='walletName'>
            WalletName
          </div>
          <div className='walletAddress'>
            WalletAddress
          </div>
        </div>
      </div>
      <div>
        <button>Remove</button>
      </div>
    </div >
  )
}

export default SingleWallet