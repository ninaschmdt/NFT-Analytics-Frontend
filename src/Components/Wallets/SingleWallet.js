import React from 'react'

const SingleWallet = ({ walletName }) => {
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
    </div >
  )
}

export default SingleWallet