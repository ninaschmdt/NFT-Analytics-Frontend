import React from 'react'

const SingleWallet = ({ address }) => {
  return (
    <div className='singleWallet'>
      <div className='singleWalletImageNameAddress'>
        <div className='walletImage'>
        </div>
        <div className='singleWalletNameAddress'>
          <div className='walletName'>
            WalletName????
          </div>
          <div className='walletAddress'>
            {address}
          </div>
        </div>
      </div>
      <div>
        <button className='button'>Remove</button>
      </div>
    </div >
  )
}

export default SingleWallet